import 'dart:typed_data';

import '../engine/math3.dart';
import 'arch/house_architect.dart';
import 'authored_manifest.dart';
import 'collision.dart';
import 'drift.dart';
import 'geometry.dart';
import 'house_assembler.dart';
import 'room.dart';
import 'scale_profile.dart';

/// Mutable runtime state for the validated authored house blueprint.
class House {
  final int seed;
  final List<Room> rooms = [];
  final List<Portal> portals = [];
  final List<StairTransition> stairs = [];
  final Map<String, Room> _byId = {};
  final Map<String, Portal> _portalById = {};
  String? residenceRoomId;
  Vec3? residenceSpawn;
  String? residenceRestAnchor;

  /// Default constructor: instantiates the authoritative canonical house.
  factory House([int seed = 42]) => House.canonical(seed: seed);

  /// Creates the authoritative canonical house from the embedded blueprint.
  factory House.canonical({int seed = 42}) =>
      buildHouseFromBlueprint(AuthoredHouseManifest.canonical, seed);

  /// Creates an empty mutable graph. Production callers must install the
  /// validated authored blueprint through [buildHouseFromBlueprint].
  House.empty(this.seed);

  /// Returns the architectural plan synthesized by [HouseArchitect].
  ArchitecturalHousePlan get architecturalPlan =>
      HouseAssembler.instance.planHouse(this);

  /// Placed 3D models from the architectural program.
  List<ArchitecturalModelInstance> get placedModels =>
      architecturalPlan.placedModels;

  /// Synthesizes architectural geometry for [room].
  RoomGeometry buildGeometry(Room room) =>
      HouseAssembler.instance.buildRoomGeometry(this, room);

  /// Static door geometry for [room].
  Float32List buildDoorStaticGeometry(Room room) =>
      HouseAssembler.instance.buildDoorStaticGeometry(this, room);

  /// Window joinery geometry (casing, sashes, muntins, sills, shutters) for [room].
  Float32List buildWindowJoinery(Room room) =>
      HouseAssembler.instance.buildWindowJoinery(this, room);

  /// Synthesizes whole-house roof geometry.
  Float32List buildRoofGeometry() =>
      HouseAssembler.instance.buildRoofGeometry(this);

  /// Synthesizes whole-house attic loft geometry.
  Float32List buildAtticGeometry() =>
      HouseAssembler.instance.buildAtticGeometry(this);

  /// Authoritative physical collision hulls for architectural elements.
  List<ArchitecturalCollisionHull> get collisionHulls =>
      HouseAssembler.instance.buildCollisionHulls(this);

  /// Physical collision hulls relevant to [roomId].
  List<ArchitecturalCollisionHull> collisionHullsFor(String roomId) =>
      collisionHulls.where((h) => h.roomId == roomId).toList(growable: false);

  /// Rebuilds lookup tables after an authored graph has been installed.
  void indexAuthoredBlueprint() {
    _index();
    if (rooms.isEmpty) {
      throw StateError('authored house must contain at least one room');
    }
    for (final portal in portals) {
      if ((portal.a != 'outside' && byId(portal.a) == null) ||
          (portal.b != 'outside' && byId(portal.b) == null)) {
        throw StateError('authored portal endpoint missing: ${portal.id}');
      }
    }
    for (final stair in stairs) {
      if (portalById(stair.portalId) == null) {
        throw StateError('stair references unknown portal: ${stair.portalId}');
      }
    }
  }

  /// Spawn anchor derived from the same profile that scales the house.
  Vec3 defaultPlayerEye(double eyeHeight) => houseScaleProfile.spawn(eyeHeight);

  Vec3? residencePlayerEye(double eyeHeight) {
    final spawn = residenceSpawn;
    if (spawn == null) return null;
    return Vec3(spawn.x, eyeHeight, spawn.z);
  }

  void _index() {
    for (final room in rooms) {
      if (_byId.containsKey(room.id)) {
        throw StateError('duplicate room ${room.id}');
      }
      _byId[room.id] = room;
    }
    for (final portal in portals) {
      if (_portalById.containsKey(portal.id)) {
        throw StateError('duplicate portal ${portal.id}');
      }
      _portalById[portal.id] = portal;
    }
  }

  final HouseDrift drift = HouseDrift();

  Vec3 effectiveSize(Room room) => Vec3(
    room.size.x + drift.sizeXDelta(room.id),
    room.size.y + drift.sizeYDelta(room.id),
    room.size.z,
  );

  Room? byId(String id) => _byId[id];
  Portal? portalById(String id) => _portalById[id];
  Iterable<Room> onFloor(Floor floor) =>
      rooms.where((room) => room.floor == floor);
  Iterable<Portal> portalsFor(String roomId) =>
      portals.where((portal) => portal.touches(roomId));

  Vec3 portalCenter(String roomId, Portal portal) {
    final room = byId(roomId);
    if (room == null || !portal.touches(roomId)) {
      throw ArgumentError.value(roomId, 'roomId', 'not a portal endpoint');
    }
    final size = effectiveSize(room);
    final along = portal.offsetFor(roomId) + portal.width * 0.5;
    final y = room.origin.y + portal.height * 0.5;
    return switch (portal.facingFor(roomId)) {
      Facing.north => Vec3(room.origin.x + along, y, room.origin.z),
      Facing.south => Vec3(room.origin.x + along, y, room.origin.z + size.z),
      Facing.east => Vec3(room.origin.x + size.x, y, room.origin.z + along),
      Facing.west => Vec3(room.origin.x, y, room.origin.z + along),
    };
  }

  Room? roomAt(Vec3 point) {
    for (final room in rooms) {
      final size = effectiveSize(room);
      if (point.x >= room.origin.x &&
          point.x <= room.origin.x + size.x &&
          point.y >= room.origin.y &&
          point.y <= room.origin.y + size.y &&
          point.z >= room.origin.z &&
          point.z <= room.origin.z + size.z) {
        return room;
      }
    }
    return null;
  }

  int get windowsFromOutside => 11;
  int get windowsFromInside =>
      rooms.fold(0, (count, room) => count + room.windows.length);
  int get landings => stairs.isEmpty ? 0 : stairs.first.landingHeights.length;
  int get stairCreakIndex => (hashNoise(1, seed) * 10).toInt() % 8;

  List<Portal> pathBetweenRooms(String sourceId, String listenerId) {
    if (sourceId == listenerId) return const [];
    final queue = <(String, List<Portal>)>[(sourceId, const [])];
    final visited = <String>{sourceId};
    while (queue.isNotEmpty) {
      final (current, path) = queue.removeAt(0);
      for (final portal in portalsFor(current)) {
        final next = portal.other(current);
        if (next == null || byId(next) == null) {
          continue;
        }
        if (next == listenerId) {
          return [...path, portal];
        }
        if (visited.add(next)) {
          queue.add((next, [...path, portal]));
        }
      }
    }
    return const [];
  }
}
