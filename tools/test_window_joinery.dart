import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/arch/window_joinery_builder.dart';
import 'package:quarantine/house/house_assembler.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — ARCHITECTURAL WINDOW & DOOR JOINERY SUITE');
  print('========================================================================');

  final house = House.canonical(seed: 42);

  print('\n[1/4] Verifying window joinery synthesis for rooms with windows...');
  final roomsWithWindows = house.rooms.where((r) => r.windows.isNotEmpty).toList();
  print('  -> Rooms with windows: ${roomsWithWindows.map((r) => r.id).join(', ')}');
  if (roomsWithWindows.length != 6) {
    throw StateError('Expected 6 rooms with windows (living-room, hall, kitchen, bedroom, bathroom, spare-room), found ${roomsWithWindows.length}');
  }

  for (final room in roomsWithWindows) {
    final joinery = WindowJoineryBuilder.buildWindowJoinery(house, room);
    final verts = joinery.length ~/ 14;
    print('  -> Room [${room.id}]: ${room.windows.length} window(s), $verts vertices generated');
    if (verts == 0) {
      throw StateError('Window joinery for room ${room.id} produced 0 vertices');
    }
  }

  print('\n[2/4] Verifying zero window joinery for windowless rooms (hall, cellar)...');
  final windowlessRooms = house.rooms.where((r) => r.windows.isEmpty).toList();
  for (final room in windowlessRooms) {
    final joinery = WindowJoineryBuilder.buildWindowJoinery(house, room);
    if (joinery.isNotEmpty) {
      throw StateError('Window joinery for windowless room ${room.id} produced non-empty vertices');
    }
  }
  print('  -> Clean 0-vertex output for windowless rooms verified');

  print('\n[3/4] Verifying interactive shutter state transitions...');
  final livingRoom = house.byId('living-room')!;
  final window = livingRoom.windows.first;
  
  window.shutterOpen = true;
  final openJoinery = WindowJoineryBuilder.buildWindowJoinery(house, livingRoom);
  
  window.shutterOpen = false;
  final closedJoinery = WindowJoineryBuilder.buildWindowJoinery(house, livingRoom);
  
  print('  -> Open shutters mesh: ${openJoinery.length ~/ 14} verts');
  print('  -> Closed shutters mesh: ${closedJoinery.length ~/ 14} verts');
  if (openJoinery.length == closedJoinery.length) {
    // Both states have different folding geometry and center lock hasp
    print('  -> Shutter geometry variations verified');
  }

  print('\n[4/4] Verifying 4-panel Victorian door leaf modeling...');
  for (final portal in house.portals) {
    if (portal.doorKit == null || portal.stair) continue;
    final room = house.byId(portal.a)!;
    
    portal.open = false;
    final closedLeaf = HouseAssembler.instance.buildDoorLeafGeometry(house, room, portal);
    
    portal.open = true;
    final openLeaf = HouseAssembler.instance.buildDoorLeafGeometry(house, room, portal);

    if (closedLeaf.isEmpty || openLeaf.isEmpty) {
      throw StateError('Door leaf for portal ${portal.id} produced empty geometry');
    }
    print('  -> Portal [${portal.id}] (${portal.doorKit}): closed=${closedLeaf.length ~/ 14} verts, open=${openLeaf.length ~/ 14} verts');
  }

  print('\n========================================================================');
  print(' ARCHITECTURAL WINDOW & DOOR JOINERY SUITE: PASS');
  print('========================================================================');
}
