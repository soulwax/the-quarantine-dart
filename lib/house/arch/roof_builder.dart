import 'dart:typed_data';

import '../../engine/math3.dart';
import '../house.dart';
import '../surface_materials.dart';
import 'mesh_builder.dart';

/// Architectural builder for the authentic Victorian / 80s dual-pitch gabled roof.
///
/// Features:
/// - Pitched slate planes spanning North and South with generous eave overhangs.
/// - Triangular brick gable pediments closing the East and West ends.
/// - Terracotta half-round ridge capping tiles.
/// - Twin brick chimney stacks with lead flashing collars and authentic terracotta chimney pots.
/// - Cast-iron eave gutters and vertical downpipes.
class RoofBuilder {
  const RoofBuilder();

  /// Synthesizes complete roof geometry for the given house envelope.
  Float32List buildRoofGeometry(House house) {
    final builder = ArchMeshBuilder();

    // Determine spatial envelope from first floor rooms
    // Origin is Northwest corner; ground floor/first floor footprint is width x depth
    final firstFloorRooms = house.rooms.where((r) => r.floor.name == 'first');
    if (firstFloorRooms.isEmpty) return Float32List(0);

    var minX = double.infinity;
    var maxX = -double.infinity;
    var minZ = double.infinity;
    var maxZ = -double.infinity;
    var maxCeilingY = 0.0;

    for (final room in firstFloorRooms) {
      final size = house.effectiveSize(room);
      if (room.origin.x < minX) minX = room.origin.x;
      if (room.origin.x + size.x > maxX) maxX = room.origin.x + size.x;
      if (room.origin.z < minZ) minZ = room.origin.z;
      if (room.origin.z + size.z > maxZ) maxZ = room.origin.z + size.z;
      final ceilY = room.origin.y + size.y;
      if (ceilY > maxCeilingY) maxCeilingY = ceilY;
    }

    final eavesY = maxCeilingY;
    final width = maxX - minX;
    final depth = maxZ - minZ;
    final ridgeY = eavesY + (depth * 0.40); // 35-40 degree British roof pitch

    const overhang = 0.45;
    final x0 = minX - overhang;
    final x1 = maxX + overhang;
    final z0 = minZ - overhang;
    final z1 = maxZ + overhang;
    final ridgeZ = (minZ + maxZ) * 0.5;

    final slateMat = HouseSurfaceMaterials.forId('polyhaven-roof-slates');
    const ridgeTileColor = 0x8A4836; // Terracotta ridge
    const fasciaColor = 0x3E2D22;    // Dark timber fascia
    const gableBrick = 0x583A2C;     // Red/brown brick
    const ironColor = 0x242426;      // Cast iron drainage
    const potColor = 0xA8523A;       // Terracotta chimney pot

    // 1. North Sloped Slate Pitch (sloping from ridgeZ down to z0)
    builder.quad(
      Vec3(x0, eavesY, z0),
      Vec3(x1, eavesY, z0),
      Vec3(x1, ridgeY, ridgeZ),
      Vec3(x0, ridgeY, ridgeZ),
      slateMat.tint,
      uScale: width / slateMat.uvMetres,
      vScale: (ridgeY - eavesY) / slateMat.uvMetres,
    );

    // 2. South Sloped Slate Pitch (sloping from ridgeZ down to z1)
    builder.quad(
      Vec3(x0, ridgeY, ridgeZ),
      Vec3(x1, ridgeY, ridgeZ),
      Vec3(x1, eavesY, z1),
      Vec3(x0, eavesY, z1),
      slateMat.tint,
      uScale: width / slateMat.uvMetres,
      vScale: (ridgeY - eavesY) / slateMat.uvMetres,
    );

    // 3. Ridge Capping Tile Beam
    builder.box(
      Vec3(x0 - 0.05, ridgeY - 0.05, ridgeZ - 0.12),
      Vec3(x1 + 0.05, ridgeY + 0.10, ridgeZ + 0.12),
      ridgeTileColor,
    );

    // 4. Timber Fascia Boards along North and South Eaves
    builder.box(
      Vec3(x0, eavesY - 0.18, z0 - 0.04),
      Vec3(x1, eavesY + 0.02, z0),
      fasciaColor,
    );
    builder.box(
      Vec3(x0, eavesY - 0.18, z1),
      Vec3(x1, eavesY + 0.02, z1 + 0.04),
      fasciaColor,
    );

    // 5. Gable End Walls (West and East Triangular Pediments)
    // West Gable Wall
    builder.box(
      Vec3(minX, eavesY, minZ),
      Vec3(minX + 0.28, eavesY + (ridgeY - eavesY) * 0.5, maxZ),
      gableBrick,
    );
    // East Gable Wall
    builder.box(
      Vec3(maxX - 0.28, eavesY, minZ),
      Vec3(maxX, eavesY + (ridgeY - eavesY) * 0.5, maxZ),
      gableBrick,
    );

    // 6. Dual Chimney Stacks
    // West Stack (living room hearth flue)
    final csWestX = minX + 1.8;
    final csWestZ = ridgeZ - 0.35;
    _buildChimneyStack(builder, csWestX, ridgeY + 0.8, csWestZ, gableBrick, potColor);

    // East Stack (kitchen range flue)
    final csEastX = maxX - 2.4;
    final csEastZ = ridgeZ - 0.35;
    _buildChimneyStack(builder, csEastX, ridgeY + 0.8, csEastZ, gableBrick, potColor);

    // 7. Cast-Iron Gutters and Downpipes
    // North gutter
    builder.box(
      Vec3(x0 - 0.05, eavesY - 0.08, z0 - 0.12),
      Vec3(x1 + 0.05, eavesY + 0.02, z0 - 0.04),
      ironColor,
    );
    // South gutter
    builder.box(
      Vec3(x0 - 0.05, eavesY - 0.08, z1 + 0.04),
      Vec3(x1 + 0.05, eavesY + 0.02, z1 + 0.12),
      ironColor,
    );
    // Rainwater Downpipes (Northwest and Southeast corners down to ground level y=0)
    builder.box(
      Vec3(x0 - 0.02, 0.0, z0 - 0.10),
      Vec3(x0 + 0.08, eavesY - 0.05, z0 - 0.02),
      ironColor,
    );
    builder.box(
      Vec3(x1 - 0.08, 0.0, z1 + 0.02),
      Vec3(x1 + 0.02, eavesY - 0.05, z1 + 0.10),
      ironColor,
    );

    return builder.build();
  }

  void _buildChimneyStack(
    ArchMeshBuilder builder,
    double x,
    double topY,
    double z,
    int brickColor,
    int potColor,
  ) {
    const stackWidth = 0.85;
    const stackDepth = 0.65;
    const leadFlashing = 0x4E555C;

    // Stack masonry body
    builder.box(
      Vec3(x, topY - 1.4, z),
      Vec3(x + stackWidth, topY, z + stackDepth),
      brickColor,
    );

    // Stepped lead flashing apron at roof penetration
    builder.box(
      Vec3(x - 0.08, topY - 1.45, z - 0.08),
      Vec3(x + stackWidth + 0.08, topY - 1.35, z + stackDepth + 0.08),
      leadFlashing,
    );

    // Oversailing brick corbelled chimney cap
    builder.box(
      Vec3(x - 0.06, topY, z - 0.06),
      Vec3(x + stackWidth + 0.06, topY + 0.12, z + stackDepth + 0.06),
      0x3E2D22,
    );

    // Twin terracotta chimney pots
    for (final potOffset in [0.22, stackWidth - 0.22]) {
      builder.box(
        Vec3(x + potOffset - 0.10, topY + 0.12, z + stackDepth * 0.5 - 0.10),
        Vec3(x + potOffset + 0.10, topY + 0.72, z + stackDepth * 0.5 + 0.10),
        potColor,
      );
      // Pot rim collar
      builder.box(
        Vec3(x + potOffset - 0.12, topY + 0.62, z + stackDepth * 0.5 - 0.12),
        Vec3(x + potOffset + 0.12, topY + 0.70, z + stackDepth * 0.5 + 0.12),
        potColor,
      );
    }
  }
}
