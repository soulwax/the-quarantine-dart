import 'dart:math' as math;
import 'dart:typed_data';

import '../../engine/math3.dart';
import '../house.dart';
import '../room.dart';
import 'mesh_builder.dart';

/// Synthesizes authentic Victorian double-hung timber sash window joinery
/// including outer casing, meeting rails, glazing muntins, sills, and pocket shutters.
class WindowJoineryBuilder {
  static const int woodTrimColor = 0xD8D0C5; // Aged painted off-white timber
  static const int sillColor = 0x5C4033; // Dark stained timber sill
  static const int shutterColor = 0x3E2723; // Dark timber pocket shutter
  static const int glassColor = 0x90A4AE; // Glazing pane tint
  static const int frostedGlassColor = 0xD0E0E3; // Frosted bathroom glass
  static const int brassHardwareColor = 0xC5A059; // Brass sash fastener

  /// Synthesizes complete joinery geometry for all windows in [room].
  static Float32List buildWindowJoinery(House house, Room room) {
    final builder = ArchMeshBuilder();
    final size = house.effectiveSize(room);

    for (final window in room.windows) {
      _buildSingleWindow(builder, room, size, window);
    }

    return builder.build();
  }

  static void _buildSingleWindow(
    ArchMeshBuilder builder,
    Room room,
    Vec3 size,
    Window window,
  ) {
    final facing = window.facing;
    final u0 = window.offset;
    final u1 = u0 + window.w;
    final v0 = window.sill;
    final v1 = v0 + window.h;
    final vm = (v0 + v1) * 0.5;
    final um = (u0 + u1) * 0.5;

    Vec3 toWorld(double u, double v, double d) => switch (facing) {
      Facing.north => Vec3(room.origin.x + u, room.origin.y + v, room.origin.z + d),
      Facing.south => Vec3(room.origin.x + u, room.origin.y + v, room.origin.z + size.z - d),
      Facing.east => Vec3(room.origin.x + size.x - d, room.origin.y + v, room.origin.z + u),
      Facing.west => Vec3(room.origin.x + d, room.origin.y + v, room.origin.z + u),
    };

    void addLocalBox(
      double minU,
      double minV,
      double minD,
      double maxU,
      double maxV,
      double maxD,
      int rgb, {
      double alpha = 1.0,
    }) {
      final p0 = toWorld(minU, minV, minD);
      final p1 = toWorld(maxU, maxV, maxD);
      builder.box(
        Vec3(math.min(p0.x, p1.x), math.min(p0.y, p1.y), math.min(p0.z, p1.z)),
        Vec3(math.max(p0.x, p1.x), math.max(p0.y, p1.y), math.max(p0.z, p1.z)),
        rgb,
        alpha: alpha,
      );
    }

    // 1. Projecting Timber Sill
    addLocalBox(
      u0 - 0.05,
      v0 - 0.045,
      -0.03,
      u1 + 0.05,
      v0,
      0.08,
      sillColor,
    );

    // 2. Outer Casing (Jambs and Head)
    // Left jamb
    addLocalBox(u0 - 0.045, v0, 0.0, u0, v1 + 0.04, 0.035, woodTrimColor);
    // Right jamb
    addLocalBox(u1, v0, 0.0, u1 + 0.045, v1 + 0.04, 0.035, woodTrimColor);
    // Head casing
    addLocalBox(u0 - 0.045, v1, 0.0, u1 + 0.045, v1 + 0.045, 0.035, woodTrimColor);

    // 3. Sash Meeting Rail (Horizontal dividing bar)
    addLocalBox(u0, vm - 0.022, 0.015, u1, vm + 0.022, 0.04, woodTrimColor);

    // Brass sash fastener
    addLocalBox(um - 0.025, vm + 0.015, 0.035, um + 0.025, vm + 0.035, 0.055, brassHardwareColor);

    // 4. Glazing Muntins (Bars dividing each sash into classic multi-pane lights)
    // Vertical center muntin
    addLocalBox(um - 0.01, v0, 0.018, um + 0.01, v1, 0.032, woodTrimColor);
    // Upper horizontal muntin
    final upperMidV = (vm + v1) * 0.5;
    addLocalBox(u0, upperMidV - 0.008, 0.018, u1, upperMidV + 0.008, 0.032, woodTrimColor);
    // Lower horizontal muntin
    final lowerMidV = (v0 + vm) * 0.5;
    addLocalBox(u0, lowerMidV - 0.008, 0.018, u1, lowerMidV + 0.008, 0.032, woodTrimColor);

    // 5. Glass Panes
    final gColor = window.frosted ? frostedGlassColor : glassColor;
    final gAlpha = window.frosted ? 0.88 : 0.65;
    addLocalBox(u0 + 0.005, v0 + 0.005, 0.024, u1 - 0.005, v1 - 0.005, 0.026, gColor, alpha: gAlpha);

    // 6. Pocket Shutters (Folded against reveals or closed over window)
    if (window.shutterOpen) {
      // Folded open flat against left and right reveals
      final foldDepth = math.min(0.22, window.w * 0.45);
      addLocalBox(u0 - 0.025, v0 + 0.01, 0.02, u0 - 0.005, v1 - 0.01, 0.02 + foldDepth, shutterColor);
      addLocalBox(u1 + 0.005, v0 + 0.01, 0.02, u1 + 0.025, v1 - 0.01, 0.02 + foldDepth, shutterColor);
    } else {
      // Unfolded closed across the window aperture
      addLocalBox(u0, v0 + 0.005, 0.038, um - 0.002, v1 - 0.005, 0.06, shutterColor);
      addLocalBox(um + 0.002, v0 + 0.005, 0.038, u1, v1 - 0.005, 0.06, shutterColor);
      // Center brass locking bolt / hasp
      addLocalBox(um - 0.035, vm - 0.02, 0.06, um + 0.035, vm + 0.02, 0.08, brassHardwareColor);
    }
  }
}
