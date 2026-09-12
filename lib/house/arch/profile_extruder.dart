import '../../engine/math3.dart';
import '../room.dart';
import 'aperture_cutter.dart';
import 'mesh_builder.dart';

/// Specification for horizontal molding trim (skirting, dado rail, picture rail, cornice).
class MoldingSpec {
  final double bottomY;
  final double height;
  final double depth;
  final int rgb;
  final bool breakAtDoors;

  const MoldingSpec({
    required this.bottomY,
    required this.height,
    required this.depth,
    required this.rgb,
    this.breakAtDoors = true,
  });

  /// Standard Victorian deep baseboard.
  static const skirting = MoldingSpec(
    bottomY: 0.0,
    height: 0.18,
    depth: 0.024,
    rgb: 0x4A3A2C,
    breakAtDoors: true,
  );

  /// Victorian dado rail / chair rail.
  static const dadoRail = MoldingSpec(
    bottomY: 0.88,
    height: 0.065,
    depth: 0.020,
    rgb: 0x4A3A2C,
    breakAtDoors: true,
  );

  /// Victorian picture hanging rail.
  static const pictureRail = MoldingSpec(
    bottomY: 2.15,
    height: 0.05,
    depth: 0.018,
    rgb: 0x4A3A2C,
    breakAtDoors: false,
  );

  /// Classical Victorian plaster ceiling cornice / coving.
  static MoldingSpec cornice(double ceilingHeight) => MoldingSpec(
        bottomY: ceilingHeight - 0.08,
        height: 0.08,
        depth: 0.08,
        rgb: 0xC6BEB2,
        breakAtDoors: false,
      );
}

/// Extrudes architectural molding profiles (skirtings, cornices, architraves)
/// along room perimeters and around doorway frames.
class ProfileExtruder {
  /// Extrudes a horizontal molding along a wall segment, breaking for any doors if configured.
  static void extrudeHorizontalMolding({
    required ArchMeshBuilder builder,
    required Room room,
    required Vec3 size,
    required Facing facing,
    required MoldingSpec spec,
    required List<ApertureSpec> apertures,
  }) {
    final (start, end, length, normal) = _wallCoordinates(room, size, facing);

    // If breaking at doors, find door gaps
    final doors = spec.breakAtDoors
        ? apertures.where((a) => a.isPortal && a.sill < 0.1).toList()
        : <ApertureSpec>[];
    doors.sort((a, b) => a.offset.compareTo(b.offset));

    var currentX = 0.0;

    for (final door in doors) {
      final doorStart = door.offset.clamp(0.0, length);
      final doorEnd = (door.offset + door.width).clamp(0.0, length);

      if (doorStart > currentX + 0.01) {
        _emitMoldingSegment(
          builder: builder,
          start: start,
          end: end,
          length: length,
          normal: normal,
          x0: currentX,
          x1: doorStart,
          spec: spec,
        );
      }
      currentX = doorEnd;
    }

    if (currentX < length - 0.01) {
      _emitMoldingSegment(
        builder: builder,
        start: start,
        end: end,
        length: length,
        normal: normal,
        x0: currentX,
        x1: length,
        spec: spec,
      );
    }
  }

  /// Extrudes a doorframe architrave casing around the perimeter of a doorway.
  static void extrudeDoorArchitrave({
    required ArchMeshBuilder builder,
    required Room room,
    required Vec3 size,
    required Facing facing,
    required ApertureSpec door,
    required int casingRgb,
    double casingWidth = 0.08,
    double casingDepth = 0.02,
  }) {
    final (start, end, length, normal) = _wallCoordinates(room, size, facing);
    final tangent = (end - start).normalized;

    final apStart = door.offset;
    final apEnd = door.offset + door.width;
    final apTop = door.sill + door.height;

    // Left casing jamb
    final leftCenter = apStart - casingWidth * 0.5;
    if (leftCenter >= -casingWidth && leftCenter <= length) {
      final p0 = _evalWallPoint(start, tangent, leftCenter);
      _emitBoxAligned(
        builder: builder,
        baseCenter: p0,
        tangent: tangent,
        normal: normal,
        alongWidth: casingWidth,
        height: apTop + casingWidth,
        outDepth: casingDepth,
        rgb: casingRgb,
      );
    }

    // Right casing jamb
    final rightCenter = apEnd + casingWidth * 0.5;
    if (rightCenter >= 0.0 && rightCenter <= length + casingWidth) {
      final p1 = _evalWallPoint(start, tangent, rightCenter);
      _emitBoxAligned(
        builder: builder,
        baseCenter: p1,
        tangent: tangent,
        normal: normal,
        alongWidth: casingWidth,
        height: apTop + casingWidth,
        outDepth: casingDepth,
        rgb: casingRgb,
      );
    }

    // Top lintel casing
    final lintelCenter = (apStart + apEnd) * 0.5;
    final lintelWidth = door.width + casingWidth * 2.0;
    final pTop = _evalWallPoint(start, tangent, lintelCenter);
    final pTopBase = Vec3(pTop.x, room.origin.y + apTop + casingWidth * 0.5, pTop.z);

    _emitBoxAligned(
      builder: builder,
      baseCenter: pTopBase,
      tangent: tangent,
      normal: normal,
      alongWidth: lintelWidth,
      height: casingWidth,
      outDepth: casingDepth,
      rgb: casingRgb,
    );
  }

  static void _emitMoldingSegment({
    required ArchMeshBuilder builder,
    required Vec3 start,
    required Vec3 end,
    required double length,
    required Vec3 normal,
    required double x0,
    required double x1,
    required MoldingSpec spec,
  }) {
    final tangent = (end - start).normalized;
    final segLength = x1 - x0;
    final midX = (x0 + x1) * 0.5;
    final midPoint = _evalWallPoint(start, tangent, midX);
    final basePoint = Vec3(midPoint.x, start.y + spec.bottomY + spec.height * 0.5, midPoint.z);

    _emitBoxAligned(
      builder: builder,
      baseCenter: basePoint,
      tangent: tangent,
      normal: normal,
      alongWidth: segLength,
      height: spec.height,
      outDepth: spec.depth,
      rgb: spec.rgb,
    );
  }

  static void _emitBoxAligned({
    required ArchMeshBuilder builder,
    required Vec3 baseCenter,
    required Vec3 tangent,
    required Vec3 normal,
    required double alongWidth,
    required double height,
    required double outDepth,
    required int rgb,
  }) {
    final halfW = alongWidth * 0.5;
    final halfH = height * 0.5;

    final tW = tangent * halfW;
    final nD = normal * outDepth;

    // Corner vertices in local space
    // Front face (facing normal into room)
    final fBl = baseCenter - tW + nD + Vec3(0, -halfH, 0);
    final fBr = baseCenter + tW + nD + Vec3(0, -halfH, 0);
    final fTr = baseCenter + tW + nD + Vec3(0, halfH, 0);
    final fTl = baseCenter - tW + nD + Vec3(0, halfH, 0);

    // Back face (against the wall)
    final bBl = baseCenter - tW + Vec3(0, -halfH, 0);
    final bBr = baseCenter + tW + Vec3(0, -halfH, 0);
    final bTr = baseCenter + tW + Vec3(0, halfH, 0);
    final bTl = baseCenter - tW + Vec3(0, halfH, 0);

    // Front
    builder.quad(fBl, fBr, fTr, fTl, rgb, normalOverride: normal);
    // Top
    builder.quad(fTl, fTr, bTr, bTl, rgb, normalOverride: Vec3(0, 1, 0));
    // Bottom
    builder.quad(bBl, bBr, fBr, fBl, rgb, normalOverride: Vec3(0, -1, 0));
    // Left end
    builder.quad(bTl, fTl, fBl, bBl, rgb, normalOverride: -tangent);
    // Right end
    builder.quad(fTr, bTr, bBr, fBr, rgb, normalOverride: tangent);
  }

  static Vec3 _evalWallPoint(Vec3 start, Vec3 tangent, double distAlong) {
    return Vec3(
      start.x + tangent.x * distAlong,
      start.y,
      start.z + tangent.z * distAlong,
    );
  }

  static (Vec3 start, Vec3 end, double length, Vec3 normal) _wallCoordinates(
    Room room,
    Vec3 size,
    Facing facing,
  ) {
    final o = room.origin;
    return switch (facing) {
      Facing.north => (
        Vec3(o.x, o.y, o.z),
        Vec3(o.x + size.x, o.y, o.z),
        size.x,
        Vec3(0, 0, 1),
      ),
      Facing.east => (
        Vec3(o.x + size.x, o.y, o.z),
        Vec3(o.x + size.x, o.y, o.z + size.z),
        size.z,
        Vec3(-1, 0, 0),
      ),
      Facing.south => (
        Vec3(o.x + size.x, o.y, o.z + size.z),
        Vec3(o.x, o.y, o.z + size.z),
        size.x,
        Vec3(0, 0, -1),
      ),
      Facing.west => (
        Vec3(o.x, o.y, o.z + size.z),
        Vec3(o.x, o.y, o.z),
        size.z,
        Vec3(1, 0, 0),
      ),
    };
  }
}
