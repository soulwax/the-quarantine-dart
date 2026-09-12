import 'dart:typed_data';

import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../house.dart';

/// Architectural builder for the interior Attic / Roof Loft space.
///
/// Features:
/// - Sloped timber rafter trusses spanning from eaves to ridge.
/// - Horizontal collar tie-beams (collar ties) spanning rafters at head height.
/// - Central rough-sawn timber floorboard walkway running the length of the attic.
/// - Loft hatch aperture framing matching the Landing ceiling access.
/// - Galvanized cold-water header cistern tank mounted on elevated timber bearers.
class AtticBuilder {
  const AtticBuilder();

  /// Builds the complete interior architectural geometry for the attic/loft space.
  Float32List buildAtticGeometry(House house) {
    final builder = ArchMeshBuilder();

    final firstFloorRooms = house.rooms.where((r) => r.floor.name == 'first');
    if (firstFloorRooms.isEmpty) return Float32List(0);

    var minX = double.infinity;
    var maxX = -double.infinity;
    var minZ = double.infinity;
    var maxZ = -double.infinity;
    var floorY = 0.0;

    for (final room in firstFloorRooms) {
      final size = house.effectiveSize(room);
      if (room.origin.x < minX) minX = room.origin.x;
      if (room.origin.x + size.x > maxX) maxX = room.origin.x + size.x;
      if (room.origin.z < minZ) minZ = room.origin.z;
      if (room.origin.z + size.z > maxZ) maxZ = room.origin.z + size.z;
      final ceilY = room.origin.y + size.y;
      if (ceilY > floorY) floorY = ceilY;
    }

    final width = maxX - minX;
    final depth = maxZ - minZ;
    final ridgeY = floorY + (depth * 0.40);
    final ridgeZ = (minZ + maxZ) * 0.5;

    const timber = 0x483424;       // Weathered framing timber
    const floorboard = 0x6E523A;   // Rough-sawn pine floorboards
    const cisternGalv = 0x7E868E;  // Galvanized zinc/steel water tank
    const insulationYellow = 0xAEA054; // Fiberglass insulation quilt

    // 1. Central Floorboard Walkway along the ridge axis
    const walkWidth = 1.4;
    builder.box(
      Vec3(minX + 0.5, floorY, ridgeZ - walkWidth * 0.5),
      Vec3(maxX - 0.5, floorY + 0.03, ridgeZ + walkWidth * 0.5),
      floorboard,
    );

    // 2. Insulation Quilt runs between joists flanking the walkway
    builder.box(
      Vec3(minX + 0.5, floorY, minZ + 0.4),
      Vec3(maxX - 0.5, floorY + 0.10, ridgeZ - walkWidth * 0.5 - 0.05),
      insulationYellow,
    );
    builder.box(
      Vec3(minX + 0.5, floorY, ridgeZ + walkWidth * 0.5 + 0.05),
      Vec3(maxX - 0.5, floorY + 0.10, maxZ - 0.4),
      insulationYellow,
    );

    // 3. Timber Rafter Trusses along the roof fall (every 0.8 m along X)
    const rafterSpacing = 0.85;
    for (var rx = minX + 0.6; rx < maxX - 0.4; rx += rafterSpacing) {
      // North rafter slope
      builder.box(
        Vec3(rx - 0.04, floorY, minZ + 0.2),
        Vec3(rx + 0.04, ridgeY, ridgeZ),
        timber,
      );
      // South rafter slope
      builder.box(
        Vec3(rx - 0.04, floorY, maxZ - 0.2),
        Vec3(rx + 0.04, ridgeY, ridgeZ),
        timber,
      );
      // Horizontal Collar Tie-Beam at 1.9 m height
      final collarY = floorY + 1.9;
      if (collarY < ridgeY) {
        builder.box(
          Vec3(rx - 0.04, collarY - 0.08, ridgeZ - 1.2),
          Vec3(rx + 0.04, collarY, ridgeZ + 1.2),
          timber,
        );
      }
    }

    // 4. Longitudinal Ridge Beam at apex
    builder.box(
      Vec3(minX, ridgeY - 0.15, ridgeZ - 0.05),
      Vec3(maxX, ridgeY, ridgeZ + 0.05),
      timber,
    );

    // 5. Loft Hatch Aperture Frame (aligned above Landing)
    final landing = house.byId('landing');
    if (landing != null) {
      final lSize = house.effectiveSize(landing);
      final hatchX = landing.origin.x + lSize.x * 0.4;
      final hatchZ = landing.origin.z + lSize.z * 0.4;
      // Hatch curb box
      builder.box(
        Vec3(hatchX - 0.05, floorY, hatchZ - 0.05),
        Vec3(hatchX + 0.75, floorY + 0.12, hatchZ + 0.75),
        timber,
      );
    }

    // 6. Galvanized Cold-Water Storage Cistern Tank on Elevated Timber Bearers
    final tankX = minX + width * 0.65;
    final tankZ = ridgeZ + 0.35;
    // Timber bearer sleepers
    builder.box(
      Vec3(tankX - 0.1, floorY, tankZ - 0.1),
      Vec3(tankX + 1.3, floorY + 0.18, tankZ + 0.9),
      timber,
    );
    // Cistern tank body
    builder.box(
      Vec3(tankX, floorY + 0.18, tankZ),
      Vec3(tankX + 1.2, floorY + 0.95, tankZ + 0.8),
      cisternGalv,
    );
    // Cistern overflow pipe
    builder.box(
      Vec3(tankX + 1.2, floorY + 0.82, tankZ + 0.4),
      Vec3(tankX + 1.5, floorY + 0.86, tankZ + 0.44),
      0xB47A3A, // Copper pipe
    );

    return builder.build();
  }
}
