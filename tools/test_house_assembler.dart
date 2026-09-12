import 'dart:typed_data';

import 'package:quarantine/house/arch/mesh_builder.dart';
import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/house_assembler.dart';
import 'house_fixture.dart';

void main() {
  print('Running test_house_assembler.dart...');

  final house = loadAuthoredHouse(seed: 1918);
  final assembler = HouseAssembler.instance;

  var totalQuads = 0;
  var totalVerts = 0;

  for (final room in house.rooms) {
    final geom = assembler.buildRoomGeometry(house, room);

    if (roomShellIsModelPresented(room.id)) {
      if (!geom.isEmpty) {
        throw StateError('Model-presented room [${room.id}] must return empty geometry');
      }
      print('Room [${room.id}]: Model-presented (skipped procedural shell as expected)');
      continue;
    }

    if (geom.floor.isEmpty) {
      throw StateError('Room [${room.id}] floor geometry is empty');
    }
    if (geom.ceiling.isEmpty) {
      throw StateError('Room [${room.id}] ceiling geometry is empty');
    }
    if (geom.walls.isEmpty) {
      throw StateError('Room [${room.id}] wall geometry is empty');
    }

    // Verify all floats are finite numbers
    _assertFinite(geom.floor, '${room.id}.floor');
    _assertFinite(geom.ceiling, '${room.id}.ceiling');
    _assertFinite(geom.walls, '${room.id}.walls');
    _assertFinite(geom.doors, '${room.id}.doors');

    final floorQuads = geom.floor.length ~/ ArchMeshBuilder.floatsPerQuad;
    final ceilQuads = geom.ceiling.length ~/ ArchMeshBuilder.floatsPerQuad;
    final wallQuads = geom.walls.length ~/ ArchMeshBuilder.floatsPerQuad;
    final doorQuads = geom.doors.length ~/ ArchMeshBuilder.floatsPerQuad;
    final roomQuads = floorQuads + ceilQuads + wallQuads + doorQuads;

    totalQuads += roomQuads;
    totalVerts += roomQuads * 6;

    print('Room [${room.id}]: quads=$roomQuads '
        '(floor=$floorQuads, ceil=$ceilQuads, walls=$wallQuads, doors=$doorQuads)');

    // Static doorframes check
    final doorStatic = assembler.buildDoorStaticGeometry(house, room);
    _assertFinite(doorStatic, '${room.id}.doorStatic');
  }

  print('Total House Procedural Architecture: $totalQuads quads ($totalVerts vertices)');
  print('test_house_assembler.dart PASSED successfully.');
}

void _assertFinite(Float32List buffer, String name) {
  for (var i = 0; i < buffer.length; i++) {
    if (!buffer[i].isFinite) {
      throw StateError('Non-finite float at $name index $i: ${buffer[i]}');
    }
  }
}
