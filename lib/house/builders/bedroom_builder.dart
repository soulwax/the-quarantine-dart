import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../arch/profile_extruder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the Master Bedroom.
///
/// Features:
/// - Twin sash window reveals on North wall.
/// - Victorian bedroom hearth with enameled iron grate.
/// - Built-in wardrobe / closet recess on West wall.
/// - Continuous picture rail.
class BedroomBuilder extends RoomBuilder {
  BedroomBuilder() : super('bedroom');

  @override
  void buildTrims(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    super.buildTrims(builder, house, room, size);

    // Picture rail around bedroom
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

    const wardrobeOak = 0x483424;
    const castIron = 0x2C2A28;
    const mantleWhite = 0xD0CAC0;

    // 1. Bedroom Fireplace Mantle on East wall
    final fZ0 = z + 1.6;
    final fZ1 = z + 2.8;
    final fX1 = x + size.x;
    final fX0 = fX1 - 0.25;

    // Plinth and breast
    builder.box(
      Vec3(fX0, y, fZ0),
      Vec3(fX1, y + 1.15, fZ1),
      mantleWhite,
    );
    // Iron bedroom grate
    builder.box(
      Vec3(fX0 - 0.02, y + 0.1, fZ0 + 0.3),
      Vec3(fX0 + 0.05, y + 0.85, fZ1 - 0.3),
      castIron,
    );
    // Shelf
    builder.box(
      Vec3(fX0 - 0.06, y + 1.15, fZ0 - 0.05),
      Vec3(fX1, y + 1.22, fZ1 + 0.05),
      mantleWhite,
    );

    // 2. Built-in Wardrobe / Closet on West wall
    builder.box(
      Vec3(x, y, z + 0.6),
      Vec3(x + 0.65, y + size.y - 0.1, z + 2.2),
      wardrobeOak,
    );

    // 3. Curtain Pelmet Box above North sash windows
    final topY = y + size.y;
    builder.box(
      Vec3(x + 0.3, topY - 0.32, z + 0.04),
      Vec3(x + size.x - 0.3, topY - 0.18, z + 0.22),
      0x5A3C28, // Hardwood timber pelmet
    );

    // 4. Bedside Nightstand Plinths
    builder.box(
      Vec3(x + size.x * 0.42 + 1.15, y, z + 1.40),
      Vec3(x + size.x * 0.42 + 1.65, y + 0.58, z + 1.85),
      wardrobeOak,
    );
  }
}
