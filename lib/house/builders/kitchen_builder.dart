import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../house.dart';
import '../room.dart';
import '../room_builder.dart';

/// Builder for the Victorian service Kitchen.
///
/// Features:
/// - Recessed cast iron cooking range alcove on East wall.
/// - Heavy stoneware scullery wash basin with twin brass taps.
/// - Built-in larder / pantry cupboard surround on North wall.
class KitchenBuilder extends RoomBuilder {
  KitchenBuilder() : super('kitchen');

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

    const rangeBlack = 0x222224;
    const rangeIron = 0x3E3D3C;
    const brass = 0xB59948;
    const stoneBasin = 0xDDD9D0;
    const pantryWood = 0x5C4231;

    // 1. Victorian Cooking Range (Range alcove on East wall, near living-room pass)
    final rX0 = x + size.x - 0.75;
    final rX1 = x + size.x;
    final rZ0 = z + 1.2;
    final rZ1 = z + 2.4;

    // Range plinth and body
    builder.box(
      Vec3(rX0, y, rZ0),
      Vec3(rX1, y + 0.95, rZ1),
      rangeBlack,
    );
    // Oven door and hotplate bevels
    builder.box(
      Vec3(rX0 - 0.04, y + 0.15, rZ0 + 0.1),
      Vec3(rX0, y + 0.85, rZ0 + 0.6),
      rangeIron,
    );
    builder.box(
      Vec3(rX0 - 0.04, y + 0.15, rZ0 + 0.65),
      Vec3(rX0, y + 0.85, rZ1 - 0.1),
      rangeIron,
    );
    // Range flue chimney hood extending to ceiling
    builder.box(
      Vec3(rX0 + 0.1, y + 0.95, rZ0 + 0.15),
      Vec3(rX1, y + size.y, rZ1 - 0.15),
      0x44403C,
    );

    // 2. Scullery Wash Sink (on West wall, below West window)
    builder.box(
      Vec3(x, y, z + 0.8),
      Vec3(x + 0.65, y + 0.82, z + 1.8),
      stoneBasin,
    );
    // Sink basin hollow (dark wet interior)
    builder.box(
      Vec3(x + 0.08, y + 0.45, z + 0.92),
      Vec3(x + 0.58, y + 0.83, z + 1.68),
      0x8C887E,
    );
    // Twin brass faucets / taps
    for (var i = 0; i < 2; i++) {
      final tapZ = z + 1.15 + i * 0.35;
      builder.box(
        Vec3(x + 0.04, y + 0.82, tapZ - 0.03),
        Vec3(x + 0.18, y + 1.05, tapZ + 0.03),
        brass,
      );
    }

    // 3. Built-in Larder / Pantry Cupboard on North wall
    builder.box(
      Vec3(x + 0.1, y, z),
      Vec3(x + 1.2, y + size.y - 0.1, z + 0.5),
      pantryWood,
    );

    // 4. Fitted Countertop Cabinetry run along South wall
    const counterWood = 0x6E5440;
    const worktopLaminate = 0xC4B8A2;
    // Base cabinet
    builder.box(
      Vec3(x + 0.75, y, z + size.z - 0.65),
      Vec3(x + size.x - 0.6, y + 0.88, z + size.z),
      counterWood,
    );
    // Worktop bullnose slab
    builder.box(
      Vec3(x + 0.72, y + 0.88, z + size.z - 0.68),
      Vec3(x + size.x - 0.58, y + 0.92, z + size.z),
      worktopLaminate,
    );
    // Tile splashback on wall above worktop up to 1.35 m
    builder.box(
      Vec3(x + 0.72, y + 0.92, z + size.z - 0.03),
      Vec3(x + size.x - 0.58, y + 1.35, z + size.z),
      0xE0DCD0, // Glazed retro tiles
    );
  }
}
