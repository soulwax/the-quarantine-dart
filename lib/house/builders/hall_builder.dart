import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../arch/profile_extruder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the Victorian entrance Hall.
///
/// Features:
/// - Deep baseboards and full wainscot dado rail along hallway.
/// - Fanlight transom aperture over the recessed front door.
/// - Clock alcove and coat rack plinth.
/// - Stair throat opening leading to upper levels.
class HallBuilder extends RoomBuilder {
  HallBuilder() : super('hall');

  @override
  void buildTrims(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    // Baseboards and cornices from base class
    super.buildTrims(builder, house, room, size);

    // Add Victorian Dado Rail (chair rail) along the entire hallway
    for (final facing in Facing.values) {
      final apertures = collectAperturesForFacing(house, room, facing);
      ProfileExtruder.extrudeHorizontalMolding(
        builder: builder,
        room: room,
        size: size,
        facing: facing,
        spec: MoldingSpec.dadoRail,
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

    const mahogany = 0x422B1E;
    const brass = 0xB59948;

    // 1. Grandfather Clock Alcove / Plinth on West wall (near front entrance)
    builder.box(
      Vec3(x + 0.05, y, z + 0.8),
      Vec3(x + 0.45, y + 2.1, z + 1.25),
      mahogany,
    );
    // Clock face rim (brass)
    builder.box(
      Vec3(x + 0.44, y + 1.65, z + 0.92),
      Vec3(x + 0.46, y + 1.95, z + 1.13),
      brass,
    );

    // 2. Coat hooks and umbrella stand rail on East wall
    builder.box(
      Vec3(x + size.x - 0.06, y + 1.55, z + 1.5),
      Vec3(x + size.x - 0.02, y + 1.68, z + 3.2),
      mahogany,
    );
    // Peg hooks
    for (var i = 0; i < 4; i++) {
      final hookZ = z + 1.7 + i * 0.4;
      builder.box(
        Vec3(x + size.x - 0.12, y + 1.60, hookZ - 0.02),
        Vec3(x + size.x - 0.06, y + 1.66, hookZ + 0.02),
        brass,
      );
    }

    // 3. Hall runner rug floor accent
    builder.box(
      Vec3(x + (size.x - 1.0) * 0.5, y + 0.005, z + 0.6),
      Vec3(x + (size.x + 1.0) * 0.5, y + 0.012, z + size.z - 0.6),
      0x68222B, // Burgundy runner
    );

    // 4. Entryway Console Table Plinth along West wall
    builder.box(
      Vec3(x + 0.04, y, z + 2.1),
      Vec3(x + 0.42, y + 0.72, z + 2.9),
      mahogany,
    );

    // 5. Electrical Consumer Unit / Fuse Box Casing high on West wall
    builder.box(
      Vec3(x + 0.04, y + size.y - 0.55, z + 0.5),
      Vec3(x + 0.22, y + size.y - 0.15, z + 0.9),
      0x2A2D30,
    );
  }
}
