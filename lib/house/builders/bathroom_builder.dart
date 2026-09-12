import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the Victorian Bathroom.
///
/// Features:
/// - Sanitary wainscot tile dado band at 1.2m height.
/// - Heavy cast-iron roll-top bathtub with brass taps.
/// - High-level water closet cistern mounted on wall with vertical supply pipe.
/// - Frosted glass window reveal.
class BathroomBuilder extends RoomBuilder {
  BathroomBuilder() : super('bathroom');

  @override
  void buildTrims(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    // Sanitary tile border at 1.2m height (skirting omitted in wet room in favor of tile cove)
    final x = room.origin.x;
    final y = room.origin.y;
    final z = room.origin.z;
    const tileBorder = 0x3E5259; // Victorian glazed dark teal tile cap

    // Tile cap molding around bathroom
    builder.box(Vec3(x, y + 1.20, z), Vec3(x + size.x, y + 1.25, z + 0.02), tileBorder);
    builder.box(Vec3(x, y + 1.20, z + size.z - 0.02), Vec3(x + size.x, y + 1.25, z + size.z), tileBorder);
    builder.box(Vec3(x, y + 1.20, z), Vec3(x + 0.02, y + 1.25, z + size.z), tileBorder);
    builder.box(Vec3(x + size.x - 0.02, y + 1.20, z), Vec3(x + size.x, y + 1.25, z + size.z), tileBorder);
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

    const tubPorcelain = 0xE6E4DC;
    const brass = 0xB59948;
    const cisternIron = 0x2A2A2E;
    const pipeBrass = 0xA2843A;

    // 1. Cast-iron Roll-top Bathtub (along South wall)
    final bX0 = x + 0.3;
    final bX1 = x + 2.0;
    final bZ0 = z + size.z - 0.85;
    final bZ1 = z + size.z - 0.05;

    // Tub body
    builder.box(
      Vec3(bX0, y + 0.1, bZ0),
      Vec3(bX1, y + 0.65, bZ1),
      tubPorcelain,
    );
    // Tub hollow
    builder.box(
      Vec3(bX0 + 0.08, y + 0.15, bZ0 + 0.08),
      Vec3(bX1 - 0.08, y + 0.66, bZ1 - 0.08),
      0xC4C0B6,
    );
    // Claw feet (4 brass feet)
    for (final fx in [bX0 + 0.12, bX1 - 0.12]) {
      for (final fz in [bZ0 + 0.10, bZ1 - 0.10]) {
        builder.box(
          Vec3(fx - 0.04, y, fz - 0.04),
          Vec3(fx + 0.04, y + 0.12, fz + 0.04),
          brass,
        );
      }
    }
    // Tub filler taps
    builder.box(
      Vec3(bX0 + 0.1, y + 0.65, (bZ0 + bZ1) * 0.5 - 0.08),
      Vec3(bX0 + 0.22, y + 0.82, (bZ0 + bZ1) * 0.5 + 0.08),
      brass,
    );

    // 2. High-level WC Cistern on West wall
    builder.box(
      Vec3(x, y + size.y - 0.45, z + 0.4),
      Vec3(x + 0.35, y + size.y - 0.1, z + 0.95),
      cisternIron,
    );
    // Vertical flush pipe running down the wall
    builder.box(
      Vec3(x + 0.14, y + 0.8, z + 0.65),
      Vec3(x + 0.19, y + size.y - 0.45, z + 0.70),
      pipeBrass,
    );

    // 3. Soil Stack Pipe Boxing Enclosure in corner
    const pipeBoxing = 0xD4D0C6;
    builder.box(
      Vec3(x, y, z),
      Vec3(x + 0.24, y + size.y, z + 0.24),
      pipeBoxing,
    );
  }
}
