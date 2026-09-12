import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../arch/profile_extruder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the Victorian Living Room.
///
/// Features:
/// - Prominent chimney breast with carved mantle and iron grate hearth.
/// - Picture hanging rail below ceiling.
/// - Ceiling rose ornament for gasolier / central practical pendant.
/// - Twin sash window reveals and architraves on North wall.
class LivingRoomBuilder extends RoomBuilder {
  LivingRoomBuilder() : super('living-room');

  @override
  void buildTrims(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    super.buildTrims(builder, house, room, size);

    // Add Victorian Picture Rail at 2.15m height
    for (final facing in Facing.values) {
      final apertures = collectAperturesForFacing(house, room, facing);
      ProfileExtruder.extrudeHorizontalMolding(
        builder: builder,
        room: room,
        size: size,
        facing: facing,
        spec: MoldingSpec.pictureRail,
        apertures: apertures,
      );
    }
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

    const brick = 0x54372B;
    const marbleMantle = 0xC8C2B8;
    const ironGrate = 0x242426;
    const hearthTile = 0x362C27;

    // 1. Chimney Breast projection along South wall (between Kitchen door and alcove)
    // Centered around x = 1.6m to 3.0m on South wall (z + size.z)
    final cbMinX = x + 1.4;
    final cbMaxX = x + 3.0;
    final cbDepth = 0.45;
    final cbFrontZ = z + size.z - cbDepth;

    // Chimney breast column from floor to ceiling
    builder.box(
      Vec3(cbMinX, y, cbFrontZ),
      Vec3(cbMaxX, y + size.y, z + size.z),
      0x786C60,
    );

    // 2. Hearth Plinth (stone/tile projection on floor)
    builder.box(
      Vec3(cbMinX - 0.2, y, cbFrontZ - 0.5),
      Vec3(cbMaxX + 0.2, y + 0.05, z + size.z),
      hearthTile,
    );

    // 3. Firebox Opening (recess into chimney breast)
    final fbMinX = cbMinX + 0.35;
    final fbMaxX = cbMaxX - 0.35;
    final fbHeight = 0.95;

    // Firebox back wall (brick)
    builder.box(
      Vec3(fbMinX, y + 0.05, z + size.z - 0.1),
      Vec3(fbMaxX, y + 0.05 + fbHeight, z + size.z),
      brick,
    );
    // Firebox left wall
    builder.box(
      Vec3(fbMinX - 0.08, y + 0.05, cbFrontZ),
      Vec3(fbMinX, y + 0.05 + fbHeight, z + size.z),
      brick,
    );
    // Firebox right wall
    builder.box(
      Vec3(fbMaxX, y + 0.05, cbFrontZ),
      Vec3(fbMaxX + 0.08, y + 0.05 + fbHeight, z + size.z),
      brick,
    );

    // 4. Cast Iron Grate & Coal Basket
    builder.box(
      Vec3(fbMinX + 0.15, y + 0.05, cbFrontZ + 0.05),
      Vec3(fbMaxX - 0.15, y + 0.35, z + size.z - 0.15),
      ironGrate,
    );

    // 5. Carved Mantle Shelf and Surrounds
    // Left & Right pilaster uprights
    builder.box(
      Vec3(cbMinX + 0.15, y, cbFrontZ - 0.04),
      Vec3(cbMinX + 0.32, y + 1.15, cbFrontZ + 0.02),
      marbleMantle,
    );
    builder.box(
      Vec3(cbMaxX - 0.32, y, cbFrontZ - 0.04),
      Vec3(cbMaxX - 0.15, y + 1.15, cbFrontZ + 0.02),
      marbleMantle,
    );
    // Mantle shelf top
    builder.box(
      Vec3(cbMinX + 0.05, y + 1.15, cbFrontZ - 0.12),
      Vec3(cbMaxX - 0.05, y + 1.25, cbFrontZ + 0.04),
      marbleMantle,
    );

    // 6. Ceiling Rose (octagonal/square plaster relief at center of ceiling)
    final centerX = x + size.x * 0.5;
    final centerZ = z + size.z * 0.5;
    final topY = y + size.y;
    builder.box(
      Vec3(centerX - 0.45, topY - 0.03, centerZ - 0.45),
      Vec3(centerX + 0.45, topY, centerZ + 0.45),
      0xD0C8BD,
    );

    // 7. TV Media Credenza / Console Plinth in alcove (designed for 80s CRT TV)
    builder.box(
      Vec3(x + 0.55, y, z + size.z - 0.95),
      Vec3(x + 1.65, y + 0.62, z + size.z - 0.35),
      0x3E2718, // Dark walnut / woodgrain
    );

    // 8. Low Cast-Iron Radiator Enclosure under North sash window
    builder.box(
      Vec3(x + size.x * 0.2, y, z + 0.04),
      Vec3(x + size.x * 0.45, y + 0.65, z + 0.22),
      0xD4CEBE, // Radiator cream paint
    );
  }
}
