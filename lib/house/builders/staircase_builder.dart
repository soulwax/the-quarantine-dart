import 'dart:math' as math;

import '../../engine/math3.dart';
import '../arch/mesh_builder.dart';
import '../house.dart';
import '../room.dart';

/// Dedicated builder for the Victorian dogleg / straight timber staircase.
///
/// Synthesizes treads with bullnose overhangs, vertical risers, open stringer boards,
/// newel posts, turned balusters, and molded handrails.
class StaircaseBuilder {
  static void buildStaircase(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    if (house.stairs.isEmpty) return;

    const treadWood = 0x5C4231;
    const riserWhite = 0xD8D2C6;
    const stringerTimber = 0x4B3728;
    const railPolished = 0x3F2A1C;

    final x0 = room.origin.x + size.x * 0.55;
    final x1 = room.origin.x + size.x - 0.15;
    final y0 = room.origin.y;
    final z0 = room.origin.z + size.z * 0.35;
    final z1 = room.origin.z + size.z * 0.85;

    final maxY = room.origin.y + size.y - 0.02;
    final totalRunHeight = math.max(0.5, maxY - y0 - 0.90);
    const stepCount = 14;
    final stepHeight = totalRunHeight / stepCount;
    final stepDepth = (z1 - z0) / stepCount;

    // Build each step (riser + tread)
    for (var i = 0; i < stepCount; i++) {
      final curY = y0 + i * stepHeight;
      final curZ = z1 - (i + 1) * stepDepth;

      // Vertical Riser
      builder.box(
        Vec3(x0, curY, curZ + stepDepth - 0.02),
        Vec3(x1, curY + stepHeight, curZ + stepDepth),
        riserWhite,
      );

      // Horizontal Tread (with 0.03m bullnose nosing projection)
      builder.box(
        Vec3(x0, curY + stepHeight - 0.028, curZ - 0.03),
        Vec3(x1, curY + stepHeight, curZ + stepDepth + 0.01),
        treadWood,
      );

      // Balusters on the open edge (every step)
      final balusterX = x0 + 0.08;
      final balusterY = curY + stepHeight;
      final balusterZ = curZ + stepDepth * 0.5;
      builder.box(
        Vec3(balusterX - 0.02, balusterY, balusterZ - 0.02),
        Vec3(balusterX + 0.02, math.min(maxY, balusterY + 0.85), balusterZ + 0.02),
        riserWhite,
      );
    }

    // Outer Stringer Board along the open staircase side
    builder.box(
      Vec3(x0, y0, z0),
      Vec3(x0 + 0.05, math.min(maxY, y0 + totalRunHeight + 0.15), z1),
      stringerTimber,
    );

    // Continuous Handrail sloping up from bottom to top
    for (var i = 0; i < stepCount; i++) {
      final curY = y0 + i * stepHeight + 0.85;
      final curZ = z1 - (i + 1) * stepDepth;
      builder.box(
        Vec3(x0 + 0.06, math.min(maxY - 0.06, curY), curZ - 0.02),
        Vec3(x0 + 0.10, math.min(maxY, curY + 0.06), curZ + stepDepth + 0.02),
        railPolished,
      );
    }

    // Bottom Newel Post (at bottom of stairs)
    builder.box(
      Vec3(x0 + 0.03, y0, z1 - 0.12),
      Vec3(x0 + 0.15, math.min(maxY, y0 + 1.15), z1),
      railPolished,
    );

    // Top Newel Post (at top of flight)
    builder.box(
      Vec3(x0 + 0.03, math.max(y0, maxY - 1.05), z0),
      Vec3(x0 + 0.15, maxY, z0 + 0.12),
      railPolished,
    );
  }
}
