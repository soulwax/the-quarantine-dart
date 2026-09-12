import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the neglected Spare Room / Box Room.
///
/// Features:
/// - Low attic-line ceiling with modest baseboard trim.
/// - Sheeted furniture mounds and neglected storage trunks.
/// - Weather-beaten South sash window reveal.
class SpareRoomBuilder extends RoomBuilder {
  SpareRoomBuilder() : super('spare-room');

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

    const sheetCloth = 0xD5D0C6;
    const trunkLeather = 0x483222;
    const brassLatch = 0xB59948;

    // 1. Sheeted Furniture Cluster in center/corner
    builder.box(
      Vec3(x + 1.2, y, z + 0.8),
      Vec3(x + 2.5, y + 0.95, z + 2.0),
      sheetCloth,
    );
    builder.box(
      Vec3(x + 1.4, y + 0.95, z + 1.0),
      Vec3(x + 2.2, y + 1.45, z + 1.8),
      sheetCloth,
    );

    // 2. Leather Travel Trunk / Ottoman against East wall
    final tX0 = x + size.x - 0.75;
    final tX1 = x + size.x - 0.05;
    final tZ0 = z + 1.2;
    final tZ1 = z + 2.2;

    builder.box(
      Vec3(tX0, y, tZ0),
      Vec3(tX1, y + 0.55, tZ1),
      trunkLeather,
    );
    // Brass buckles / corner guards
    for (final bx in [tX0, tX1 - 0.03]) {
      for (final bz in [tZ0, tZ1 - 0.03]) {
        builder.box(
          Vec3(bx, y, bz),
          Vec3(bx + 0.03, y + 0.55, bz + 0.03),
          brassLatch,
        );
      }
    }

    // 3. Study Alcove Workbench Plinth against North wall
    const workwood = 0x584232;
    builder.box(
      Vec3(x + 0.8, y, z + 0.04),
      Vec3(x + 2.4, y + 0.74, z + 0.72),
      workwood,
    );

    // 4. Bracketed Wall Shelves above workbench
    builder.box(
      Vec3(x + 0.8, y + 1.35, z + 0.04),
      Vec3(x + 2.4, y + 1.38, z + 0.35),
      workwood,
    );
    builder.box(
      Vec3(x + 0.8, y + 1.70, z + 0.04),
      Vec3(x + 2.4, y + 1.73, z + 0.35),
      workwood,
    );
  }
}
