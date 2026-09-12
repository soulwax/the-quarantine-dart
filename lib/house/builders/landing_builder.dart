import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../arch/profile_extruder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the first-floor Landing.
///
/// Features:
/// - Open stairwell balustrade guardrail guarding the stair descent.
/// - Door architraves connecting to Bedroom, Bathroom, and Spare Room.
/// - Picture rail for domestic portraiture.
class LandingBuilder extends RoomBuilder {
  LandingBuilder() : super('landing');

  @override
  void buildTrims(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    super.buildTrims(builder, house, room, size);

    // Picture rail around landing walls
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

    const balustradeWhite = 0xD8D2C6;
    const handrailDark = 0x3F2A1C;

    // 1. Landing Guardrail along the stairwell opening (along East edge of landing)
    final railStartZ = z + 0.1;
    final railEndZ = z + 1.6;
    final railX = x + 0.12;

    // Guardrail baseboard
    builder.box(
      Vec3(railX - 0.04, y, railStartZ),
      Vec3(railX + 0.04, y + 0.08, railEndZ),
      handrailDark,
    );

    // Turned balusters along the guardrail
    const balusterSpacing = 0.15;
    for (var bz = railStartZ + 0.05; bz < railEndZ - 0.05; bz += balusterSpacing) {
      builder.box(
        Vec3(railX - 0.02, y + 0.08, bz - 0.02),
        Vec3(railX + 0.02, y + 0.90, bz + 0.02),
        balustradeWhite,
      );
    }

    // Top Handrail
    builder.box(
      Vec3(railX - 0.05, y + 0.90, railStartZ - 0.02),
      Vec3(railX + 0.05, y + 0.96, railEndZ + 0.02),
      handrailDark,
    );

    // 2. Airing Cupboard Door Frame on West wall
    builder.box(
      Vec3(x + 0.02, y, z + 2.1),
      Vec3(x + 0.08, y + 2.0, z + 2.9),
      handrailDark,
    );

    // 3. Ceiling Loft Access Hatch Trim in ceiling
    final topY = y + size.y;
    builder.box(
      Vec3(x + size.x * 0.4, topY - 0.04, z + size.z * 0.4),
      Vec3(x + size.x * 0.7, topY, z + size.z * 0.7),
      0xC8C2B6,
    );
  }
}
