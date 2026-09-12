import 'dart:typed_data';

import 'house.dart';
import 'house_assembler.dart';
import 'room.dart';
import 'scale_profile.dart';

/// Runtime MVP shell thicknesses: authored 0.28 m exterior / 0.12 m
/// partition sections, uniformly expanded by the 2.25x spacious house scale.
const double houseExteriorWallThickness = 0.28 * houseModelScale;
const double housePartitionWallThickness = 0.12 * houseModelScale;

/// Rooms whose shell comes from a promoted model package rather than from the
/// procedural generator.
///
/// The house is migrating from generated wall/floor/ceiling volumes to authored
/// FBX interiors. A migrated room's shell must disappear from BOTH ends: the
/// renderer must stop drawing it, and this generator must stop building it.
const Set<String> modelPresentedRoomShells = {
  // Promoted from assets-src/fbx/living-room/source/InteriorTest.fbx via
  // web/res/models/living-room/.
  'living-room',
};

/// Whether [roomId]'s shell is presented by an authored model package.
bool roomShellIsModelPresented(String roomId) =>
    modelPresentedRoomShells.contains(roomId);

/// CPU-only retained geometry shared by the emitter and presentation
/// adapters. It reads authored house facts but owns no renderer handles.
final class RoomGeometry {
  final Float32List floor;
  final Float32List ceiling;
  final Float32List walls;
  final Float32List doors;

  const RoomGeometry({
    required this.floor,
    required this.ceiling,
    required this.walls,
    required this.doors,
  });

  /// The shell of a room the generator does not build, because an authored
  /// model package presents it instead.
  static final RoomGeometry empty = RoomGeometry(
    floor: Float32List(0),
    ceiling: Float32List(0),
    walls: Float32List(0),
    doors: Float32List(0),
  );

  /// True when this room contributes no generated geometry at all.
  bool get isEmpty =>
      floor.isEmpty && ceiling.isEmpty && walls.isEmpty && doors.isEmpty;

  Float32List get combined =>
      Float32List.fromList([...floor, ...ceiling, ...walls, ...doors]);
}

/// Synthesizes architectural shell geometry for [room] via [HouseAssembler].
RoomGeometry buildRoomGeometry(House house, Room room) {
  return HouseAssembler.instance.buildRoomGeometry(house, room);
}

/// Builds the static part of every hinged door in a room via [HouseAssembler].
Float32List buildDoorStaticGeometry(House house, Room room) {
  return HouseAssembler.instance.buildDoorStaticGeometry(house, room);
}

/// Builds the stateful door leaf geometry via [HouseAssembler].
Float32List buildDoorLeafGeometry(House house, Room room, Portal portal) {
  return HouseAssembler.instance.buildDoorLeafGeometry(house, room, portal);
}

/// Builds window joinery geometry (casing, sashes, muntins, sills, shutters) via [HouseAssembler].
Float32List buildWindowJoinery(House house, Room room) {
  return HouseAssembler.instance.buildWindowJoinery(house, room);
}
