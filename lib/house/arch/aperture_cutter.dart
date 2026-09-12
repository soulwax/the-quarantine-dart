import '../../engine/math3.dart';
import '../room.dart';
import 'mesh_builder.dart';

/// Rectangular opening definition in wall-local coordinates:
/// - [offset]: distance from the wall's start corner along its length
/// - [sill]: height from the floor to the bottom of the opening
/// - [width]: horizontal width of opening
/// - [height]: vertical height of opening
/// - [depth]: wall thickness (for jambs / reveals)
class ApertureSpec {
  final String id;
  final double offset;
  final double sill;
  final double width;
  final double height;
  final double depth;
  final bool isPortal;

  const ApertureSpec({
    required this.id,
    required this.offset,
    required this.sill,
    required this.width,
    required this.height,
    this.depth = 0.28,
    this.isPortal = false,
  });
}

/// Cuts rectangular apertures (doors, portals, windows) into vertical walls
/// with non-degenerate quads and generates interior reveal/jamb geometry.
class ApertureCutter {
  /// Cuts a wall surface along [facing] into quads omitting all apertures,
  /// and builds the internal reveal/jamb quads extending [wallThickness] deep.
  static void buildSubdividedWall({
    required ArchMeshBuilder builder,
    required Room room,
    required Vec3 size,
    required Facing facing,
    required List<ApertureSpec> apertures,
    required int wallRgb,
    required int revealRgb,
    double uvMetres = 2.0,
    double wallThickness = 0.28,
  }) {
    final (start, end, length, normal) = _wallCoordinates(room, size, facing);
    final height = size.y;

    // Filter and sort apertures along this wall segment
    final sorted = apertures
        .where((a) => a.offset >= -0.01 && a.offset + a.width <= length + 0.01)
        .toList()
      ..sort((a, b) => a.offset.compareTo(b.offset));

    var currentX = 0.0;

    for (final ap in sorted) {
      final apStart = ap.offset.clamp(0.0, length);
      final apEnd = (ap.offset + ap.width).clamp(0.0, length);
      final apSill = ap.sill.clamp(0.0, height);
      final apTop = (ap.sill + ap.height).clamp(0.0, height);

      // 1. Full-height wall strip before this aperture
      if (apStart > currentX + 0.001) {
        _emitWallPatch(
          builder: builder,
          start: start,
          end: end,
          length: length,
          normal: normal,
          x0: currentX,
          x1: apStart,
          y0: 0.0,
          y1: height,
          rgb: wallRgb,
          uvMetres: uvMetres,
        );
      }

      // 2. Below-aperture sill wall (if sill > 0)
      if (apSill > 0.001) {
        _emitWallPatch(
          builder: builder,
          start: start,
          end: end,
          length: length,
          normal: normal,
          x0: apStart,
          x1: apEnd,
          y0: 0.0,
          y1: apSill,
          rgb: wallRgb,
          uvMetres: uvMetres,
        );
      }

      // 3. Above-aperture lintel wall (if apTop < height)
      if (apTop < height - 0.001) {
        _emitWallPatch(
          builder: builder,
          start: start,
          end: end,
          length: length,
          normal: normal,
          x0: apStart,
          x1: apEnd,
          y0: apTop,
          y1: height,
          rgb: wallRgb,
          uvMetres: uvMetres,
        );
      }

      // 4. 3D Reveals/Jambs (depth thickness into the wall aperture)
      _emitApertureReveals(
        builder: builder,
        start: start,
        end: end,
        length: length,
        normal: normal,
        apStart: apStart,
        apEnd: apEnd,
        apSill: apSill,
        apTop: apTop,
        depth: wallThickness,
        rgb: revealRgb,
        uvMetres: uvMetres,
        isDoor: ap.isPortal,
      );

      currentX = apEnd;
    }

    // Trailing full-height wall strip after last aperture
    if (currentX < length - 0.001) {
      _emitWallPatch(
        builder: builder,
        start: start,
        end: end,
        length: length,
        normal: normal,
        x0: currentX,
        x1: length,
        y0: 0.0,
        y1: height,
        rgb: wallRgb,
        uvMetres: uvMetres,
      );
    }
  }

  /// Emits a single rectangular wall quad between [x0..x1] and [y0..y1].
  static void _emitWallPatch({
    required ArchMeshBuilder builder,
    required Vec3 start,
    required Vec3 end,
    required double length,
    required Vec3 normal,
    required double x0,
    required double x1,
    required double y0,
    required double y1,
    required int rgb,
    required double uvMetres,
  }) {
    final t0 = x0 / length;
    final t1 = x1 / length;

    final p0 = Vec3(
      start.x + (end.x - start.x) * t0,
      start.y + y0,
      start.z + (end.z - start.z) * t0,
    );
    final p1 = Vec3(
      start.x + (end.x - start.x) * t1,
      start.y + y0,
      start.z + (end.z - start.z) * t1,
    );
    final p2 = Vec3(
      start.x + (end.x - start.x) * t1,
      start.y + y1,
      start.z + (end.z - start.z) * t1,
    );
    final p3 = Vec3(
      start.x + (end.x - start.x) * t0,
      start.y + y1,
      start.z + (end.z - start.z) * t0,
    );

    builder.quad(
      p0,
      p1,
      p2,
      p3,
      rgb,
      normalOverride: normal,
      u: x0 / uvMetres,
      v: y0 / uvMetres,
      uScale: (x1 - x0) / uvMetres,
      vScale: (y1 - y0) / uvMetres,
    );
  }

  /// Generates internal reveals / jambs (left, right, top lintel, bottom sill).
  static void _emitApertureReveals({
    required ArchMeshBuilder builder,
    required Vec3 start,
    required Vec3 end,
    required double length,
    required Vec3 normal,
    required double apStart,
    required double apEnd,
    required double apSill,
    required double apTop,
    required double depth,
    required int rgb,
    required double uvMetres,
    required bool isDoor,
  }) {
    final t0 = apStart / length;
    final t1 = apEnd / length;

    // Interior face positions
    final in0 = Vec3(
      start.x + (end.x - start.x) * t0,
      start.y,
      start.z + (end.z - start.z) * t0,
    );
    final in1 = Vec3(
      start.x + (end.x - start.x) * t1,
      start.y,
      start.z + (end.z - start.z) * t1,
    );

    // Exterior/depth offset vector pointing INTO the wall opening
    final depthOffset = normal * (-depth);

    final out0 = in0 + depthOffset;
    final out1 = in1 + depthOffset;

    // Left Jamb (at apStart, facing +tangent)
    builder.quad(
      Vec3(in0.x, in0.y + apSill, in0.z),
      Vec3(out0.x, out0.y + apSill, out0.z),
      Vec3(out0.x, out0.y + apTop, out0.z),
      Vec3(in0.x, in0.y + apTop, in0.z),
      rgb,
      uScale: depth / uvMetres,
      vScale: (apTop - apSill) / uvMetres,
    );

    // Right Jamb (at apEnd, facing -tangent)
    builder.quad(
      Vec3(out1.x, out1.y + apSill, out1.z),
      Vec3(in1.x, in1.y + apSill, in1.z),
      Vec3(in1.x, in1.y + apTop, in1.z),
      Vec3(out1.x, out1.y + apTop, out1.z),
      rgb,
      uScale: depth / uvMetres,
      vScale: (apTop - apSill) / uvMetres,
    );

    // Top Lintel (underside of opening, normal is -Y)
    builder.quad(
      Vec3(in0.x, in0.y + apTop, in0.z),
      Vec3(in1.x, in1.y + apTop, in1.z),
      Vec3(out1.x, out1.y + apTop, out1.z),
      Vec3(out0.x, out0.y + apTop, out0.z),
      rgb,
      normalOverride: Vec3(0, -1, 0),
      uScale: (apEnd - apStart) / uvMetres,
      vScale: depth / uvMetres,
    );

    // Bottom Sill (only for windows where sill > 0, normal is +Y)
    if (!isDoor && apSill > 0.001) {
      builder.quad(
        Vec3(out0.x, out0.y + apSill, out0.z),
        Vec3(out1.x, out1.y + apSill, out1.z),
        Vec3(in1.x, in1.y + apSill, in1.z),
        Vec3(in0.x, in0.y + apSill, in0.z),
        rgb,
        normalOverride: Vec3(0, 1, 0),
        uScale: (apEnd - apStart) / uvMetres,
        vScale: depth / uvMetres,
      );
    }
  }

  /// Derives wall start, end, length, and interior normal in CCW floor order.
  static (Vec3 start, Vec3 end, double length, Vec3 normal) _wallCoordinates(
    Room room,
    Vec3 size,
    Facing facing,
  ) {
    final o = room.origin;
    return switch (facing) {
      // North wall (facing South into room, normal = [0, 0, 1])
      Facing.north => (
        Vec3(o.x, o.y, o.z),
        Vec3(o.x + size.x, o.y, o.z),
        size.x,
        Vec3(0, 0, 1),
      ),
      // East wall (facing West into room, normal = [-1, 0, 0])
      Facing.east => (
        Vec3(o.x + size.x, o.y, o.z),
        Vec3(o.x + size.x, o.y, o.z + size.z),
        size.z,
        Vec3(-1, 0, 0),
      ),
      // South wall (facing North into room, normal = [0, 0, -1])
      Facing.south => (
        Vec3(o.x + size.x, o.y, o.z + size.z),
        Vec3(o.x, o.y, o.z + size.z),
        size.x,
        Vec3(0, 0, -1),
      ),
      // West wall (facing East into room, normal = [1, 0, 0])
      Facing.west => (
        Vec3(o.x, o.y, o.z + size.z),
        Vec3(o.x, o.y, o.z),
        size.z,
        Vec3(1, 0, 0),
      ),
    };
  }
}
