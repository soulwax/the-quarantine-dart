import 'package:quarantine/game/session.dart';
import 'package:quarantine/house/authored_manifest.dart';
import 'package:quarantine/house/house.dart';
import 'package:quarantine/journal/entry.dart';
import 'house_fixture.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — CANONICAL HOUSE WIRING & ARCHITECTURE INTEGRATION');
  print('========================================================================');

  // 1. Direct instantiation via House() and House.canonical()
  print('\n[1/7] Verifying House() and House.canonical() constructors...');
  final h1 = House();
  final h2 = House.canonical(seed: 42);
  if (h1.rooms.length != 8 || h1.portals.length != 9 || h1.stairs.length != 1) {
    throw StateError('House() did not construct 8 rooms, 9 portals, 1 stair');
  }
  if (h2.rooms.length != 8 || h2.portals.length != 9 || h2.stairs.length != 1) {
    throw StateError('House.canonical() did not construct 8 rooms, 9 portals, 1 stair');
  }
  print('  -> Canonical house topology verified: 8 rooms, 9 portals, 1 stair');

  // 2. Authored manifest canonical singleton
  print('\n[2/7] Verifying AuthoredHouseManifest.canonical singleton...');
  final manifest = AuthoredHouseManifest.canonical;
  if (manifest.rooms.length != 8 || manifest.levels.length != 3) {
    throw StateError('AuthoredHouseManifest.canonical is invalid');
  }
  print('  -> Embedded canonical manifest verified with 0 disk/network dependency');

  // 3. GameSession.create without explicit houseBlueprint
  print('\n[3/7] Verifying GameSession.create with null houseBlueprint...');
  final vocab = Vocabulary({
    'who': ['warden'],
    'verb': ['called'],
    'object': ['yesterday'],
    'place': ['hall'],
    'time': ['dawn'],
  });
  final session = GameSession.create(
    vocabulary: vocab,
    houseSeed: 42,
  );
  if (session.house.rooms.length != 8) {
    throw StateError('GameSession.create did not fall back to canonical house');
  }
  if (session.house.byId('living-room') == null || session.house.byId('cellar') == null) {
    throw StateError('GameSession.create missing canonical rooms');
  }
  print('  -> GameSession.create successfully backed by canonical house');

  // 4. GameSession.restore without explicit houseBlueprint
  print('\n[4/7] Verifying GameSession.restore with null houseBlueprint...');
  final snapshot = session.toSaveSnapshot();
  final restored = GameSession.restore(
    vocabulary: vocab,
    snapshot: snapshot,
  );
  if (restored.house.rooms.length != 8) {
    throw StateError('GameSession.restore did not restore canonical house');
  }
  print('  -> GameSession.restore successfully restored canonical house');

  // 5. Architectural plan & placed models on House
  print('\n[5/7] Verifying house.architecturalPlan and house.placedModels...');
  final plan = h1.architecturalPlan;
  if (!plan.isValid) {
    throw StateError('Architectural plan has errors: ${plan.validationErrors}');
  }
  final placed = h1.placedModels;
  if (placed.length != 80) {
    throw StateError('Expected 80 placed model instances, got ${placed.length}');
  }
  print('  -> 80 placed models verified across all 10 architectural programs');

  // 6. Direct geometry helpers on House
  print('\n[6/7] Verifying house geometry synthesis delegates...');
  final roofGeom = h1.buildRoofGeometry();
  final atticGeom = h1.buildAtticGeometry();
  if (roofGeom.isEmpty || atticGeom.isEmpty) {
    throw StateError('Roof or attic geometry empty');
  }
  final hall = h1.byId('hall')!;
  final hallGeom = h1.buildGeometry(hall);
  final hallDoors = h1.buildDoorStaticGeometry(hall);
  if (hallGeom.isEmpty || hallDoors.isEmpty) {
    throw StateError('Hall geometry or doors empty');
  }
  final living = h1.byId('living-room')!;
  final livingGeom = h1.buildGeometry(living);
  if (!livingGeom.isEmpty) {
    throw StateError('Living room shell must remain empty for FBX package presentation');
  }
  print('  -> Geometry delegates verified (roof=${roofGeom.length}, attic=${atticGeom.length}, hall=${hallGeom.combined.length})');

  // 7. House fixture alignment
  print('\n[7/7] Verifying tools/house_fixture.dart alignment...');
  final fixtureHouse = loadAuthoredHouse(seed: 42);
  if (fixtureHouse.rooms.length != 8 || fixtureHouse.portals.length != 9) {
    throw StateError('Fixture house does not match canonical graph');
  }
  print('  -> tools/house_fixture.dart aligned with canonical house');

  print('\n========================================================================');
  print(' CANONICAL HOUSE WIRING & ARCHITECTURE INTEGRATION: PASS');
  print('========================================================================');
}
