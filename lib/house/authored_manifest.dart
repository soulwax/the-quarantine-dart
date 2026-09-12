import 'dart:convert';

import '../engine/math3.dart';
import 'canonical_house_data.dart';
import 'house.dart';
import 'room.dart';

/// Renderer-neutral authored house data loaded from assets/house/house.json.
///
/// The runtime House remains the simulation authority until the parity gate is
/// accepted. This object proves the authored scene agrees with that authority.
final class AuthoredHouseManifest {
  final String houseId;
  final String sourceRef;
  final String presentationScope;
  final String storyAuthority;
  final double modelScale;
  final AuthoredResidence? residence;
  final List<AuthoredLevel> levels;
  final List<AuthoredRoom> rooms;
  final List<AuthoredPortal> portals;
  final List<AuthoredStair> stairs;
  final List<String> exteriorCells;

  static AuthoredHouseManifest? _canonical;

  /// The canonical authoritative house blueprint embedded directly into the
  /// binary, avoiding any disk or network dependency for pure Dart execution.
  static AuthoredHouseManifest get canonical =>
      _canonical ??= AuthoredHouseManifest.decode(canonicalHouseJson);

  const AuthoredHouseManifest({
    required this.houseId,
    required this.sourceRef,
    required this.presentationScope,
    required this.storyAuthority,
    required this.modelScale,
    required this.residence,
    required this.levels,
    required this.rooms,
    required this.portals,
    required this.stairs,
    required this.exteriorCells,
  });

  factory AuthoredHouseManifest.decode(String source) =>
      AuthoredHouseManifest.fromJson(jsonDecode(source));

  factory AuthoredHouseManifest.fromJson(Object? raw) {
    final map = _object(raw, 'house manifest');
    final modelScale = map['modelScale'] is num
        ? (map['modelScale'] as num).toDouble()
        : 1.0;
    if (!modelScale.isFinite || modelScale <= 0) {
      throw const FormatException('modelScale must be positive and finite');
    }
    return AuthoredHouseManifest(
      houseId: _string(map, 'houseId'),
      sourceRef: _string(map, 'sourceRef'),
      presentationScope: _string(map, 'presentationScope'),
      storyAuthority: _string(map, 'storyAuthority'),
      modelScale: modelScale,
      residence: map['residence'] == null
          ? null
          : AuthoredResidence.fromJson(map['residence'], modelScale),
      levels: _list(
        map,
        'levels',
      ).map((value) => AuthoredLevel.fromJson(value)).toList(growable: false),
      rooms: _list(map, 'rooms')
          .map((value) => AuthoredRoom.fromJson(value, modelScale))
          .toList(growable: false),
      portals: _list(map, 'portals')
          .map((value) => AuthoredPortal.fromJson(value, modelScale))
          .toList(growable: false),
      stairs: _list(
        map,
        'stairs',
      ).map((value) => AuthoredStair.fromJson(value)).toList(growable: false),
      exteriorCells: _list(map, 'exteriorCells')
          .map((value) => value is String ? value : _bad('exterior cell'))
          .toList(growable: false),
    )..validateTopology();
  }

  /// Stable name used by the product plan. The older manifest name remains
  /// available so existing callers do not have to migrate in one change.
  AuthoredHouseManifest get blueprint => this;

  void validateTopology() {
    _unique(levels.map((level) => level.id), 'level');
    _unique(rooms.map((room) => room.id), 'room');
    _unique(portals.map((portal) => portal.id), 'portal');
    _unique(stairs.map((stair) => stair.id), 'stair');
    final levelIds = levels.map((level) => level.id).toSet();
    final roomIds = rooms.map((room) => room.id).toSet();
    final portalById = {for (final portal in portals) portal.id: portal};
    final home = residence;
    if (home != null) {
      if (!roomIds.contains(home.roomId)) {
        throw FormatException(
          'residence.roomId references unknown room ${home.roomId}',
        );
      }
      if (home.returnPortalId != null &&
          !portalById.containsKey(home.returnPortalId)) {
        throw FormatException(
          'residence.returnPortalId references unknown portal '
          '${home.returnPortalId}',
        );
      }
      if (home.restAnchor != null && home.restAnchor!.isEmpty) {
        throw const FormatException('residence.restAnchor cannot be empty');
      }
    }
    for (final room in rooms) {
      if (!levelIds.contains(room.levelId)) {
        throw FormatException(
          'rooms.${room.id}.floor references unknown level ${room.levelId}',
        );
      }
      _unique(room.windows.map((window) => window.id), 'window in ${room.id}');
      _unique(room.portalIds, 'portal reference in ${room.id}');
      for (final portalId in room.portalIds) {
        final portal = portalById[portalId];
        if (portal == null) {
          throw FormatException(
            'rooms.${room.id}.portalIds references unknown portal $portalId',
          );
        }
        if (!portal.touches(room.id)) {
          throw FormatException(
            'rooms.${room.id}.portalIds references $portalId, which does not touch the room',
          );
        }
      }
    }
    for (final portal in portals) {
      if (portal.a != 'outside' && !roomIds.contains(portal.a)) {
        throw FormatException('portals.${portal.id}.a references ${portal.a}');
      }
      if (portal.b != 'outside' && !roomIds.contains(portal.b)) {
        throw FormatException('portals.${portal.id}.b references ${portal.b}');
      }
      if (portal.a == portal.b) {
        throw FormatException('portals.${portal.id} has identical endpoints');
      }
    }
    for (final stair in stairs) {
      final portal = portalById[stair.portalId];
      if (portal == null) {
        throw FormatException(
          'stairs.${stair.id}.portalId references unknown portal ${stair.portalId}',
        );
      }
      if (!portal.stair) {
        throw FormatException(
          'stairs.${stair.id}.portalId ${stair.portalId} is not marked stair',
        );
      }
    }
  }

  void validateAgainst(House house) {
    if (houseId != 'quarantine-house-main') {
      throw StateError('unexpected authored house $houseId');
    }
    if (sourceRef != 'lib/house/house.dart') {
      throw StateError('authored house source changed: $sourceRef');
    }
    if (presentationScope != 'provisional-visible-place') {
      throw StateError(
        'authored house presentation scope must remain provisional-visible-place',
      );
    }
    if (storyAuthority != 'external-story-data') {
      throw StateError(
        'authored house story authority must remain external-story-data',
      );
    }
    if (rooms.length != house.rooms.length ||
        portals.length != house.portals.length) {
      throw StateError('authored/runtime room or portal count mismatch');
    }
    for (final authored in rooms) {
      final runtime = house.byId(authored.id);
      if (runtime == null) {
        throw StateError('authored room missing at runtime: ${authored.id}');
      }
      _checkVec3(
        authored.origin,
        runtime.origin.x,
        runtime.origin.y,
        runtime.origin.z,
        authored.id,
        'origin',
      );
      _checkVec3(
        authored.size,
        runtime.size.x,
        runtime.size.y,
        runtime.size.z,
        authored.id,
        'size',
      );
      if (authored.windows.length != runtime.windows.length) {
        throw StateError('window count mismatch for ${authored.id}');
      }
      for (final window in authored.windows) {
        final runtimeWindow = runtime.windows
            .where((item) => item.id == window.id)
            .firstOrNull;
        if (runtimeWindow == null) {
          throw StateError('authored window missing: ${window.id}');
        }
        _close(window.offset, runtimeWindow.offset, window.id, 'offset');
        _close(window.width, runtimeWindow.w, window.id, 'width');
        _close(window.height, runtimeWindow.h, window.id, 'height');
      }
    }
    for (final authored in portals) {
      final runtime = house.portalById(authored.id);
      if (runtime == null) {
        throw StateError('authored portal missing: ${authored.id}');
      }
      if (runtime.a != authored.a || runtime.b != authored.b) {
        throw StateError('portal endpoints mismatch for ${authored.id}');
      }
      _close(authored.width, runtime.width, authored.id, 'width');
      _close(authored.height, runtime.height, authored.id, 'height');
      if (authored.doorKit != runtime.doorKit) {
        throw StateError('door model mismatch for ${authored.id}');
      }
    }
    if (stairs.length != house.stairs.length ||
        stairs.single.portalId != house.stairs.single.portalId) {
      throw StateError('stair manifest mismatch');
    }
  }
}

/// The playable home anchor is house data, not story data. Coordinates use the
/// same authored scale as rooms and portals; the runtime supplies the player
/// eye height so a visual layout cannot accidentally dictate capsule height.
final class AuthoredResidence {
  final String roomId;
  final List<double> spawn;
  final String? restAnchor;
  final String? returnPortalId;

  const AuthoredResidence({
    required this.roomId,
    required this.spawn,
    required this.restAnchor,
    required this.returnPortalId,
  });

  factory AuthoredResidence.fromJson(Object? raw, double scale) {
    final map = _object(raw, 'residence');
    return AuthoredResidence(
      roomId: _string(map, 'roomId'),
      spawn: _scaledVec3(map['spawn'], 'residence.spawn', scale),
      restAnchor: map['restAnchor'] is String
          ? map['restAnchor'] as String
          : null,
      returnPortalId: map['returnPortalId'] is String
          ? map['returnPortalId'] as String
          : null,
    );
  }
}

typedef HouseBlueprint = AuthoredHouseManifest;

/// Installs a validated semantic blueprint into a fresh runtime house. Asset
/// loading and renderer presentation remain outside this builder.
House buildHouseFromBlueprint(AuthoredHouseManifest blueprint, int seed) {
  blueprint.validateTopology();
  final house = House.empty(seed);
  Floor floor(String id) => switch (id) {
    'ground' => Floor.ground,
    'first' => Floor.first,
    _ => Floor.hidden,
  };
  for (final room in blueprint.rooms) {
    house.rooms.add(
      Room(
        id: room.id,
        floor: floor(room.levelId),
        origin: Vec3(room.origin[0], room.origin[1], room.origin[2]),
        size: Vec3(room.size[0], room.size[1], room.size[2]),
        windows: [
          for (final window in room.windows)
            Window(
              id: window.id,
              facing: window.facing,
              offset: window.offset,
              sill: window.sill,
              w: window.width,
              h: window.height,
              frosted: window.frosted,
            ),
        ],
        portalIds: List.unmodifiable(room.portalIds),
        mantles: _authoredMantles(room.id),
        objects: const [],
        surfaceWall: room.surfaceWall,
        surfaceFloor: room.surfaceFloor,
        surfaceCeiling: room.surfaceCeiling,
      ),
    );
  }
  for (final portal in blueprint.portals) {
    house.portals.add(
      Portal(
        id: portal.id,
        a: portal.a,
        b: portal.b,
        facingA: portal.facingA,
        facingB: portal.facingB,
        offsetA: portal.offsetA,
        offsetB: portal.offsetB,
        width: portal.width,
        height: portal.height,
        exterior: portal.exterior,
        stair: portal.stair,
        sticks: portal.sticks,
        open: portal.open,
        doorKit: portal.doorKit,
      ),
    );
  }
  for (final stair in blueprint.stairs) {
    house.stairs.add(
      StairTransition(
        id: stair.id,
        portalId: stair.portalId,
        landingHeights: List.unmodifiable(stair.landingHeights),
        min: Vec3(stair.min[0], stair.min[1], stair.min[2]),
        max: Vec3(stair.max[0], stair.max[1], stair.max[2]),
        lowerEye: Vec3(stair.lowerEye[0], stair.lowerEye[1], stair.lowerEye[2]),
        upperEye: Vec3(stair.upperEye[0], stair.upperEye[1], stair.upperEye[2]),
      ),
    );
  }
  if (blueprint.residence case final residence?) {
    house
      ..residenceRoomId = residence.roomId
      ..residenceRestAnchor = residence.restAnchor
      ..residenceSpawn = Vec3(
        residence.spawn[0],
        residence.spawn[1],
        residence.spawn[2],
      );
  }
  house.indexAuthoredBlueprint();
  return house;
}

/// Mantles are authored interaction anchors, not renderer decoration. Keep
/// their stable IDs and room-local positions in the blueprint construction
/// seam so focus, lighting, save state, and visual fixtures share one graph.
List<Mantle> _authoredMantles(String roomId) => switch (roomId) {
  'living-room' => [
    Mantle(
      id: 'mantle-living',
      name: 'living-room gas mantle',
      localAt: Vec3(3.70, 1.45, 0.80),
      lit: true,
    ),
    Mantle(
      id: 'mantle-living-second',
      name: 'second living-room gas mantle',
      localAt: Vec3(1.00, 1.45, 2.40),
    ),
  ],
  'hall' => [
    Mantle(
      id: 'mantle-hall',
      name: 'hall gas mantle',
      localAt: Vec3(1.20, 1.45, 0.30),
    ),
  ],
  _ => const <Mantle>[],
};

final class AuthoredLevel {
  final String id;
  final String kind;
  final double floorY;

  const AuthoredLevel({
    required this.id,
    required this.kind,
    required this.floorY,
  });

  factory AuthoredLevel.fromJson(Object? raw) {
    final map = _object(raw, 'level');
    return AuthoredLevel(
      id: _string(map, 'id'),
      kind: _string(map, 'kind'),
      floorY: _number(map, 'floorY'),
    );
  }
}

final class AuthoredRoom {
  final String id;
  final String levelId;
  final List<double> origin;
  final List<double> size;
  final List<AuthoredWindow> windows;
  final List<String> portalIds;
  final String surfaceWall;
  final String surfaceFloor;
  final String surfaceCeiling;

  const AuthoredRoom({
    required this.id,
    required this.levelId,
    required this.origin,
    required this.size,
    required this.windows,
    required this.portalIds,
    required this.surfaceWall,
    required this.surfaceFloor,
    required this.surfaceCeiling,
  });

  factory AuthoredRoom.fromJson(Object? raw, double scale) {
    final map = _object(raw, 'room');
    return AuthoredRoom(
      id: _string(map, 'id'),
      levelId: _string(map, 'floor'),
      origin: _scaledVec3(map['origin'], 'origin', scale),
      size: _scaledVec3(map['size'], 'size', scale),
      windows: _list(map, 'windows')
          .map((value) => AuthoredWindow.fromJson(value, scale))
          .toList(growable: false),
      portalIds: _list(map, 'portalIds')
          .map((value) => value is String ? value : _bad('portal id'))
          .toList(growable: false),
      surfaceWall: _surface(map, 'wall'),
      surfaceFloor: _surface(map, 'floor'),
      surfaceCeiling: _surface(map, 'ceiling'),
    );
  }
}

final class AuthoredWindow {
  final String id;
  final Facing facing;
  final double offset;
  final double sill;
  final double width;
  final double height;
  final bool frosted;

  const AuthoredWindow({
    required this.id,
    required this.facing,
    required this.offset,
    required this.sill,
    required this.width,
    required this.height,
    required this.frosted,
  });

  factory AuthoredWindow.fromJson(Object? raw, double scale) {
    final map = _object(raw, 'window');
    return AuthoredWindow(
      id: _string(map, 'id'),
      facing: _facing(map, 'facing'),
      offset: _number(map, 'offset') * scale,
      sill: _number(map, 'sill') * scale,
      width: _number(map, 'width') * scale,
      height: _number(map, 'height') * scale,
      frosted: map['frosted'] == true,
    );
  }
}

final class AuthoredPortal {
  final String id;
  final String a;
  final String b;
  final Facing facingA;
  final Facing facingB;
  final double offsetA;
  final double offsetB;
  final double width;
  final double height;
  final String? doorKit;
  final bool stair;
  final bool exterior;
  final bool open;
  final bool sticks;

  const AuthoredPortal({
    required this.id,
    required this.a,
    required this.b,
    required this.facingA,
    required this.facingB,
    required this.offsetA,
    required this.offsetB,
    required this.width,
    required this.height,
    required this.doorKit,
    required this.stair,
    required this.exterior,
    required this.open,
    required this.sticks,
  });

  bool touches(String roomId) => a == roomId || b == roomId;

  factory AuthoredPortal.fromJson(Object? raw, double scale) {
    final map = _object(raw, 'portal');
    return AuthoredPortal(
      id: _string(map, 'id'),
      a: _string(map, 'a'),
      b: _string(map, 'b'),
      facingA: _facing(map, 'facingA'),
      facingB: _facing(map, 'facingB'),
      offsetA: _number(map, 'offsetA') * scale,
      offsetB: _number(map, 'offsetB') * scale,
      width: _number(map, 'width') * scale,
      height: _number(map, 'height') * scale,
      doorKit: map['doorKit'] is String ? map['doorKit'] as String : null,
      stair: map['stair'] == true,
      exterior: map['exterior'] == true,
      open: map['open'] != false,
      sticks: map['sticks'] == true,
    );
  }
}

final class AuthoredStair {
  final String id;
  final String portalId;
  final List<double> landingHeights;
  final List<double> min;
  final List<double> max;
  final List<double> lowerEye;
  final List<double> upperEye;

  const AuthoredStair({
    required this.id,
    required this.portalId,
    required this.landingHeights,
    required this.min,
    required this.max,
    required this.lowerEye,
    required this.upperEye,
  });

  factory AuthoredStair.fromJson(Object? raw) {
    final map = _object(raw, 'stair');
    return AuthoredStair(
      id: _string(map, 'id'),
      portalId: _string(map, 'portalId'),
      landingHeights: _numbers(map['landingHeights'], 'landingHeights'),
      min: _vec3(map['min'], 'min'),
      max: _vec3(map['max'], 'max'),
      lowerEye: _vec3(map['lowerEye'], 'lowerEye'),
      upperEye: _vec3(map['upperEye'], 'upperEye'),
    );
  }
}

Map<String, dynamic> _object(Object? raw, String label) =>
    raw is Map<String, dynamic> ? raw : _bad('$label is not an object');

List<Object?> _list(Map<String, dynamic> map, String key) =>
    map[key] is List ? (map[key] as List<Object?>) : _bad('$key is not a list');

String _string(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is String && value.isNotEmpty
      ? value
      : _bad('$key is not a string');
}

String _surface(Map<String, dynamic> map, String key) {
  final surface = map['surface'];
  if (surface is! Map<String, dynamic>) return _bad('surface is not an object');
  return _string(surface, key);
}

Facing _facing(Map<String, dynamic> map, String key) {
  return switch (_string(map, key)) {
    'north' => Facing.north,
    'east' => Facing.east,
    'south' => Facing.south,
    'west' => Facing.west,
    final value => _bad('$key has unknown facing $value'),
  };
}

List<double> _numbers(Object? value, String label) {
  if (value is! List ||
      value.isEmpty ||
      value.any((item) => item is! num || !item.isFinite)) {
    return _bad('$label is not a non-empty finite number list');
  }
  return [for (final item in value) (item as num).toDouble()];
}

double _number(Map<String, dynamic> map, String key) {
  final value = map[key];
  return value is num && value.isFinite
      ? value.toDouble()
      : _bad('$key is not finite');
}

List<double> _vec3(Object? value, String label) {
  if (value is! List ||
      value.length != 3 ||
      value.any((item) => item is! num || !item.isFinite)) {
    return _bad('$label is not a finite vec3');
  }
  return [for (final item in value) (item as num).toDouble()];
}

List<double> _scaledVec3(Object? value, String label, double scale) => [
  for (final component in _vec3(value, label)) component * scale,
];

void _unique(Iterable<String> values, String label) {
  final seen = <String>{};
  for (final value in values) {
    if (!seen.add(value)) {
      throw FormatException('duplicate $label id $value');
    }
  }
}

Never _bad(String message) => throw FormatException(message);

void _close(double authored, double runtime, String id, String field) {
  if ((authored - runtime).abs() > 0.0001) {
    throw StateError('$id $field mismatch: $authored != $runtime');
  }
}

void _checkVec3(
  List<double> authored,
  double x,
  double y,
  double z,
  String id,
  String field,
) {
  _close(authored[0], x, id, '$field.x');
  _close(authored[1], y, id, '$field.y');
  _close(authored[2], z, id, '$field.z');
}
