import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the subterranean Cellar.
///
/// Features:
/// - Heavy timber ceiling joists and iron gas/water conduit pipe runs.
/// - Brick coal bunker enclosure with sloped retention bulkhead.
/// - Heavy iron reinforcement framing around the cellar doorway.
class CellarBuilder extends RoomBuilder {
  CellarBuilder() : super('cellar');

  @override
  void buildTrims(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    // Cellar does not have decorative skirtings or cornices.
    // Instead, emit an earth damp-proof stone kickboard course at base of walls.
    final x = room.origin.x;
    final y = room.origin.y;
    final z = room.origin.z;
    const dampStone = 0x48423E;

    // North & South bottom stone plinth
    builder.box(Vec3(x, y, z), Vec3(x + size.x, y + 0.25, z + 0.08), dampStone);
    builder.box(Vec3(x, y, z + size.z - 0.08), Vec3(x + size.x, y + 0.25, z + size.z), dampStone);
    // East & West bottom stone plinth
    builder.box(Vec3(x, y, z), Vec3(x + 0.08, y + 0.25, z + size.z), dampStone);
    builder.box(Vec3(x + size.x - 0.08, y, z), Vec3(x + size.x, y + 0.25, z + size.z), dampStone);
  }

  @override
  void buildFixtures(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    final x = room.origin.x;
    final y = room.origin.y;
    final z = room.origin.z;
    final top = y + size.y;

    const joistTimber = 0x3E2D22;
    const ironPipe = 0x2A2A2C;
    const coalBlack = 0x1A1A1C;
    const bunkerWood = 0x48382B;

    // 1. Overhead Timber Joists running across the ceiling (East-West)
    const joistSpacing = 0.65;
    for (var jz = z + 0.3; jz < z + size.z - 0.2; jz += joistSpacing) {
      builder.box(
        Vec3(x, top - 0.16, jz - 0.05),
        Vec3(x + size.x, top, jz + 0.05),
        joistTimber,
      );
    }

    // 2. Iron Gas Conduit Pipe hung beneath joists running North-South
    builder.box(
      Vec3(x + 1.2, top - 0.22, z),
      Vec3(x + 1.25, top - 0.17, z + size.z),
      ironPipe,
    );
    // Water main pipe
    builder.box(
      Vec3(x + 2.8, top - 0.20, z),
      Vec3(x + 2.86, top - 0.14, z + size.z),
      ironPipe,
    );

    // 3. Coal Bunker Enclosure (in West corner)
    final bX = x + 0.1;
    final bZ = z + size.z - 1.8;
    // Bunker front retaining wall
    builder.box(
      Vec3(bX, y, bZ),
      Vec3(bX + 1.8, y + 0.85, bZ + 0.1),
      bunkerWood,
    );
    // Bunker side wall
    builder.box(
      Vec3(bX + 1.8, y, bZ),
      Vec3(bX + 1.9, y + 0.85, z + size.z),
      bunkerWood,
    );
    // Coal mound inside bunker
    builder.box(
      Vec3(bX + 0.05, y, bZ + 0.1),
      Vec3(bX + 1.75, y + 0.70, z + size.z - 0.05),
      coalBlack,
    );

    // 4. Structural Brick Support Piers along North wall
    const brickPier = 0x583A2C;
    builder.box(
      Vec3(x + size.x * 0.35, y, z),
      Vec3(x + size.x * 0.35 + 0.35, top, z + 0.28),
      brickPier,
    );
    builder.box(
      Vec3(x + size.x * 0.70, y, z),
      Vec3(x + size.x * 0.70 + 0.35, top, z + 0.28),
      brickPier,
    );

    // 5. Preserves & Wine Storage Alcove with Shelves on East wall
    const shelfStone = 0x8A847C;
    final alcoveX = x + size.x - 0.45;
    final alcoveZ0 = z + 0.8;
    final alcoveZ1 = z + 2.2;
    for (var sy = y + 0.45; sy < top - 0.5; sy += 0.45) {
      builder.box(
        Vec3(alcoveX, sy, alcoveZ0),
        Vec3(x + size.x, sy + 0.05, alcoveZ1),
        shelfStone,
      );
    }

    // 6. Subterranean Floor Drainage Sump with Cast-Iron Grate
    const ironGrate = 0x222224;
    final sumpX = x + size.x * 0.55;
    final sumpZ = z + size.z * 0.55;
    builder.box(
      Vec3(sumpX - 0.25, y, sumpZ - 0.25),
      Vec3(sumpX + 0.25, y + 0.015, sumpZ + 0.25),
      ironGrate,
    );

    // 7. Utility Meter Board & Gas Governor Casing on North wall
    builder.box(
      Vec3(x + size.x * 0.12, y + 1.25, z + 0.02),
      Vec3(x + size.x * 0.12 + 0.65, y + 1.85, z + 0.18),
      0x2C3034,
    );

    // 8. Oak Barrel Stillage Timber Cradle on floor
    builder.box(
      Vec3(x + 2.2, y, z + size.z - 1.2),
      Vec3(x + 3.2, y + 0.14, z + size.z - 0.4),
      0x483222,
    );
  }
}
