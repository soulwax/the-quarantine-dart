import 'dart:math' as math;

import '../config.dart';
import '../engine/math3.dart';
import 'house.dart';
import 'room.dart';

class Capsule {
  Vec3 base;
  Vec3 tip;
  double radius;
  _ActiveStair? _activeStair;

  Capsule({
    required this.base,
    required this.tip,
    this.radius = playerCapsuleRadius,
  });

  /// PHY-01: sparse moved-state for deterministic replay/recovery.
  /// Currently captures only the stair traversal progress.
  String? get activeStairId => _activeStair?.stair.id;
  double? get activeStairProgress => _activeStair?.progress;

  /// Sets the internal stair traversal state without needing runtime
  /// references stored in saves.
  void restoreActiveStair({
    required House house,
    required String? stairId,
    required double? progress,
    required String currentRoom,
    Vec3? eye,
  }) {
    if (stairId == null || progress == null || !progress.isFinite) {
      _activeStair = null;
      return;
    }

    final stair = house.stairs.where((s) => s.id == stairId);
    final resolved = stair.isEmpty ? null : stair.first;
    if (resolved == null) {
      _activeStair = null;
      return;
    }

    // Only allow restoring an active stair if we're plausibly near it.
    // This keeps state conservative and avoids “teleporting” into stair mode
    // on restore.
    final effectiveEye =
        eye ??
        Vec3(
          (base.x + tip.x) * 0.5,
          // Inverse of _setEye():
          // base = eye - Vec3(0, playerEyeHeight - radius, 0)
          // => eye.y = base.y + (playerEyeHeight - radius)
          base.y + (playerEyeHeight - radius),
          (base.z + tip.z) * 0.5,
        );

    final active =
        _near(effectiveEye, resolved.lowerEye) && currentRoom == 'hall' ||
        _near(effectiveEye, resolved.upperEye) && currentRoom == 'landing';
    if (!active) {
      _activeStair = null;
      return;
    }

    final restoredProgress = progress.clamp(0.0, 1.0).toDouble();
    _activeStair = _ActiveStair(resolved, restoredProgress);
  }

  MovementResult move(House house, String currentRoom, Vec3 eye, Vec3 delta) {
    final active = _activeStair;
    if (active != null) {
      return _moveOnStair(active, eye, delta);
    }
    final stair = _enterStair(house, currentRoom, eye, delta);
    if (stair != null) {
      _activeStair = stair;
      return _moveOnStair(stair, eye, delta);
    }
    var position = eye;
    var roomId = currentRoom;
    var blocked = false;
    final distance = math.sqrt(delta.x * delta.x + delta.z * delta.z);
    final steps = math.max(1, (distance / playerSweepStep).ceil());
    final step = delta * (1 / steps);
    for (var i = 0; i < steps; i++) {
      final stepRes = _tryStepWithStepUp(house, roomId, position, step);
      blocked = blocked || stepRes.blocked;
      position = stepRes.eye;
      roomId = _crossPortal(house, roomId);
    }
    _setEye(position);
    return MovementResult(eye: position, roomId: roomId, blocked: blocked);
  }

  _ActiveStair? _enterStair(House house, String roomId, Vec3 eye, Vec3 delta) {
    final speed = math.sqrt(delta.x * delta.x + delta.z * delta.z);
    for (final stair in house.stairs) {
      final path = stair.upperEye - stair.lowerEye;
      final dot = delta.x * path.x + delta.z * path.z;
      final ascending =
          roomId == 'hall' &&
          _near(eye, stair.lowerEye) &&
          (dot > 0 || speed < 0.001);
      final descending =
          roomId == 'landing' &&
          _near(eye, stair.upperEye) &&
          (dot < 0 || speed < 0.001);
      if (ascending || descending) {
        return _ActiveStair(stair, ascending ? 0 : 1);
      }
    }
    return null;
  }

  MovementResult _moveOnStair(_ActiveStair active, Vec3 eye, Vec3 delta) {
    final path = active.stair.upperEye - active.stair.lowerEye;
    final horizontalLength = math.sqrt(path.x * path.x + path.z * path.z);
    final along = horizontalLength < 1e-9
        ? 0.0
        : (delta.x * path.x + delta.z * path.z) / horizontalLength;
    active.progress = (active.progress + along / horizontalLength).clamp(
      0.0,
      1.0,
    );
    final position = Vec3.lerp(
      active.stair.lowerEye,
      active.stair.upperEye,
      active.progress,
    );
    final atLower = active.progress <= 0;
    final atUpper = active.progress >= 1;
    if (atLower || atUpper) {
      _activeStair = null;
    }
    _setEye(position);
    return MovementResult(
      eye: position,
      roomId: atUpper
          ? 'landing'
          : atLower
          ? 'hall'
          : active.progress < 0.5
          ? 'hall'
          : 'landing',
      blocked: false,
    );
  }

  bool _near(Vec3 a, Vec3 b) {
    final delta = a - b;
    return delta.x * delta.x + delta.y * delta.y + delta.z * delta.z <=
        1.25 * 1.25;
  }

  _AxisResult _tryStepWithStepUp(
    House house,
    String roomId,
    Vec3 eye,
    Vec3 delta,
  ) {
    if (delta.x == 0 && delta.z == 0) return _AxisResult(eye, false);

    // 1. Direct step
    final directX = _tryAxis(house, roomId, eye, Vec3(delta.x, 0, 0));
    final directZ = _tryAxis(house, roomId, directX.eye, Vec3(0, 0, delta.z));
    if (!directX.blocked && !directZ.blocked) {
      return _AxisResult(directZ.eye, false);
    }

    // 2. Step-Up elevation (up to 0.35m stair riser step height)
    const maxStepUp = 0.35;
    final elevatedEye = eye + Vec3(0, maxStepUp, 0);
    _setEye(elevatedEye);

    if (!intersectsStaticGeometry(house, roomId)) {
      final stepX = _tryAxis(house, roomId, elevatedEye, Vec3(delta.x, 0, 0));
      final stepZ = _tryAxis(house, roomId, stepX.eye, Vec3(0, 0, delta.z));
      // A diagonal move is only a valid step-up when both component sweeps
      // cleared the raised capsule.  Accepting one clear axis here lets the
      // blocked axis leak through a wall at corners and portal jambs.
      if (!stepX.blocked && !stepZ.blocked) {
        // Settle downwards onto the step
        var settled = stepZ.eye;
        for (var drop = 0.05; drop <= maxStepUp; drop += 0.05) {
          final testEye = stepZ.eye - Vec3(0, drop, 0);
          _setEye(testEye);
          if (!intersectsStaticGeometry(house, roomId)) {
            settled = testEye;
          } else {
            break;
          }
        }
        _setEye(settled);
        return _AxisResult(settled, false);
      }
    }

    // 3. Sliding contact fallback along open axis
    if (!directX.blocked) return _AxisResult(directX.eye, true);
    if (!directZ.blocked) return _AxisResult(directZ.eye, true);

    _setEye(eye);
    return _AxisResult(eye, true);
  }

  _AxisResult _tryAxis(House house, String roomId, Vec3 eye, Vec3 delta) {
    if (delta.x == 0 && delta.z == 0) return _AxisResult(eye, false);
    final candidate = eye + delta;
    _setEye(candidate);
    if (intersectsStaticGeometry(house, roomId)) {
      _setEye(eye);
      return _AxisResult(eye, true);
    }
    return _AxisResult(candidate, false);
  }

  String _crossPortal(House house, String roomId) =>
      portalCross(house, roomId) ?? roomId;

  void _setEye(Vec3 eye) {
    base = eye - Vec3(0, playerEyeHeight - radius, 0);
    tip = base + Vec3(0, playerCapsuleHeight - radius * 2, 0);
  }

  bool intersectsStaticGeometry(House house, String currentRoom) {
    final room = house.byId(currentRoom);
    if (room == null) {
      return true;
    }
    final size = house.effectiveSize(room);
    if (base.y - radius < room.origin.y ||
        tip.y + radius > room.origin.y + size.y) {
      return true;
    }
    if (_insideHorizontalBounds(room, size)) {
      return false;
    }
    return !_throughPassablePortal(house, room, size);
  }

  String? portalCross(House house, String currentRoom) {
    final room = house.byId(currentRoom);
    if (room == null) {
      return null;
    }
    final size = house.effectiveSize(room);
    for (final portal in house.portalsFor(room.id)) {
      final next = portal.other(room.id);
      if (next != null &&
          house.byId(next) != null &&
          !portal.stair &&
          portal.passable &&
          _withinPortal(room, portal, size) &&
          _crossedPortalPlane(room, portal, size)) {
        return next;
      }
    }
    return null;
  }

  bool _insideHorizontalBounds(Room room, Vec3 size) {
    return base.x >= room.origin.x + radius &&
        base.x <= room.origin.x + size.x - radius &&
        base.z >= room.origin.z + radius &&
        base.z <= room.origin.z + size.z - radius;
  }

  bool _throughPassablePortal(House house, Room room, Vec3 size) {
    for (final portal in house.portalsFor(room.id)) {
      if (portal.passable && _withinPortal(room, portal, size)) {
        return true;
      }
    }
    return false;
  }

  bool _withinPortal(Room room, Portal portal, Vec3 size) {
    final facing = portal.facingFor(room.id);
    final offset = portal.offsetFor(room.id);
    final along = facing == Facing.north || facing == Facing.south
        ? base.x - room.origin.x
        : base.z - room.origin.z;
    if (along < offset + radius || along > offset + portal.width - radius) {
      return false;
    }
    if (base.y - radius < room.origin.y ||
        tip.y + radius > room.origin.y + portal.height) {
      return false;
    }
    return switch (facing) {
      Facing.north => base.z <= room.origin.z + radius,
      Facing.south => base.z >= room.origin.z + size.z - radius,
      Facing.east => base.x >= room.origin.x + size.x - radius,
      Facing.west => base.x <= room.origin.x + radius,
    };
  }

  bool _crossedPortalPlane(Room room, Portal portal, Vec3 size) =>
      switch (portal.facingFor(room.id)) {
        Facing.north => base.z < room.origin.z,
        Facing.south => base.z > room.origin.z + size.z,
        Facing.east => base.x > room.origin.x + size.x,
        Facing.west => base.x < room.origin.x,
      };
}

class MovementResult {
  final Vec3 eye;
  final String roomId;
  final bool blocked;

  const MovementResult({
    required this.eye,
    required this.roomId,
    required this.blocked,
  });
}

class _AxisResult {
  final Vec3 eye;
  final bool blocked;

  const _AxisResult(this.eye, this.blocked);
}

class _ActiveStair {
  final StairTransition stair;
  double progress;

  _ActiveStair(this.stair, this.progress);
}

/// Category of architectural physical boundary.
enum CollisionHullKind {
  solidBox,
  obstacleBox,
  stepPlane,
  slopedCeiling,
}

/// Physical collision hull synthesized by the architectural system.
class ArchitecturalCollisionHull {
  final String id;
  final String roomId;
  final CollisionHullKind kind;
  final Vec3 min;
  final Vec3 max;
  final double stepHeight;

  const ArchitecturalCollisionHull({
    required this.id,
    required this.roomId,
    required this.kind,
    required this.min,
    required this.max,
    this.stepHeight = 0.0,
  });

  /// Evaluates whether a capsule with given base, tip, and radius collides with this hull.
  bool collidesWithCapsule(Vec3 base, Vec3 tip, double radius) {
    final closestX = ((base.x + tip.x) * 0.5).clamp(min.x, max.x);
    final closestY = ((base.y + tip.y) * 0.5).clamp(min.y, max.y);
    final closestZ = ((base.z + tip.z) * 0.5).clamp(min.z, max.z);

    final dx = (base.x + tip.x) * 0.5 - closestX;
    final dy = (base.y + tip.y) * 0.5 - closestY;
    final dz = (base.z + tip.z) * 0.5 - closestZ;

    return (dx * dx + dy * dy + dz * dz) < (radius * radius);
  }
}
