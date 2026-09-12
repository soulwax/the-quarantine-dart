import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/arch/aperture_cutter.dart';
import 'package:quarantine/house/arch/mesh_builder.dart';
import 'package:quarantine/house/drift.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/room.dart';
import 'package:quarantine/house/room_builder.dart';
import 'package:quarantine/house/room_descriptor.dart';

class TestRoomBuilder extends RoomBuilder {
  TestRoomBuilder() : super('test-room');

  @override
  void buildFixtures(ArchMeshBuilder builder, House house, Room room, Vec3 size) {
    // Add a simple test hearth plinth
    builder.box(
      Vec3(room.origin.x + 1.0, room.origin.y, room.origin.z + 1.0),
      Vec3(room.origin.x + 2.0, room.origin.y + 0.3, room.origin.z + 2.0),
      0x554433,
    );
  }
}

void main() {
  print('Running test_arch_dsl.dart...');

  // 1. ArchMeshBuilder tests
  final mb = ArchMeshBuilder();
  mb.quad(
    Vec3(0, 0, 0),
    Vec3(1, 0, 0),
    Vec3(1, 1, 0),
    Vec3(0, 1, 0),
    0xFFFFFF,
  );
  if (mb.vertexCount != 6) {
    throw StateError('Expected 6 vertices per quad, got ${mb.vertexCount}');
  }
  if (mb.quadCount != 1) {
    throw StateError('Expected 1 quad, got ${mb.quadCount}');
  }

  mb.box(Vec3(0, 0, 0), Vec3(1, 1, 1), 0x888888);
  // 1 quad + 6 faces * 6 vertices = 42 vertices
  if (mb.vertexCount != 42) {
    throw StateError('Expected 42 vertices after box, got ${mb.vertexCount}');
  }
  final rawFloats = mb.build();
  if (rawFloats.length != 42 * ArchMeshBuilder.floatsPerVertex) {
    throw StateError('Buffer size mismatch: ${rawFloats.length}');
  }

  // 2. RoomDescriptor validation
  final desc = RoomDescriptor(
    id: 'test-room',
    floor: Floor.ground,
    origin: Vec3(0, 0, 0),
    size: Vec3(4, 3, 5),
    surfaceWall: 'wallpaper-stripes',
    surfaceFloor: 'floor-wood',
    surfaceCeiling: 'ceiling-plaster',
  );
  desc.validate();

  // 3. ApertureCutter tests
  final testRoom = Room(
    id: 'test-room',
    floor: Floor.ground,
    size: Vec3(5.0, 3.0, 4.0),
    origin: Vec3(0.0, 0.0, 0.0),
    windows: [
      Window(
        id: 'test-window',
        facing: Facing.north,
        offset: 1.5,
        sill: 0.8,
        w: 1.2,
        h: 1.5,
      ),
    ],
    portalIds: ['test-door'],
    mantles: [],
    objects: [],
    surfaceWall: 'wallpaper-stripes',
    surfaceFloor: 'floor-wood',
    surfaceCeiling: 'ceiling-plaster',
  );

  final wallBuilder = ArchMeshBuilder();
  ApertureCutter.buildSubdividedWall(
    builder: wallBuilder,
    room: testRoom,
    size: testRoom.size,
    facing: Facing.north,
    apertures: [
      const ApertureSpec(
        id: 'test-window',
        offset: 1.5,
        sill: 0.8,
        width: 1.2,
        height: 1.5,
      ),
    ],
    wallRgb: 0xEEEEEE,
    revealRgb: 0xAAAAAA,
  );

  if (wallBuilder.isEmpty) {
    throw StateError('ApertureCutter emitted empty wall mesh');
  }
  // Subdivided wall: 3 wall pieces (left, top, bottom) + reveals (left jamb, right jamb, lintel, sill = 4 quads)
  // Total quads: at least 7 quads = 42 vertices
  if (wallBuilder.quadCount < 7) {
    throw StateError('ApertureCutter expected at least 7 quads, got ${wallBuilder.quadCount}');
  }

  // 4. RoomBuilder synthesis test
  final testHouse = House.empty(42);
  testHouse.rooms.add(testRoom);
  testHouse.portals.add(Portal(
    id: 'test-door',
    a: 'test-room',
    b: 'outside',
    facingA: Facing.south,
    facingB: Facing.north,
    offsetA: 1.0,
    offsetB: 0.0,
    width: 0.9,
    height: 2.1,
    exterior: true,
  ));
  testHouse.indexAuthoredBlueprint();

  final builder = TestRoomBuilder();
  final geom = builder.build(testHouse, HouseDrift());

  if (geom.floor.isEmpty || geom.ceiling.isEmpty || geom.walls.isEmpty) {
    throw StateError('RoomBuilder produced empty geometry parts: '
        'floor=${geom.floor.length}, ceiling=${geom.ceiling.length}, walls=${geom.walls.length}');
  }

  print('Arch DSL and RoomBuilder verified successfully: '
      'floor quads=${geom.floor.length ~/ ArchMeshBuilder.floatsPerQuad}, '
      'ceiling quads=${geom.ceiling.length ~/ ArchMeshBuilder.floatsPerQuad}, '
      'wall quads=${geom.walls.length ~/ ArchMeshBuilder.floatsPerQuad}, '
      'door quads=${geom.doors.length ~/ ArchMeshBuilder.floatsPerQuad}');
}
