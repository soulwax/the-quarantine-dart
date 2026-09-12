import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/collision.dart';
import 'package:quarantine/house/house.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — ARCHITECTURAL COLLISION & NAVIGATION ROUTE SUITE');
  print('========================================================================');

  final house = House.canonical(seed: 42);

  print('\n[1/4] Verifying synthesized architectural collision hulls...');
  final hulls = house.collisionHulls;
  print('  -> Total architectural collision hulls: ${hulls.length}');
  if (hulls.isEmpty) {
    throw StateError('House returned 0 collision hulls');
  }

  final cellarHulls = house.collisionHullsFor('cellar');
  final livingHulls = house.collisionHullsFor('living-room');
  final hallHulls = house.collisionHullsFor('hall');

  print('  -> Cellar physical hulls: ${cellarHulls.length}');
  print('  -> Living room physical hulls: ${livingHulls.length}');
  print('  -> Hall staircase step hulls: ${hallHulls.length}');

  if (cellarHulls.isEmpty || livingHulls.isEmpty || hallHulls.isEmpty) {
    throw StateError('Expected collision hulls for cellar, living room, and hall');
  }

  print('\n[2/4] Testing capsule collision detection on architectural hulls...');
  final hull = hulls.first;
  print('  Hull: ${hull.id}, min=(${hull.min.x}, ${hull.min.y}, ${hull.min.z}), max=(${hull.max.x}, ${hull.max.y}, ${hull.max.z})');
  final testCenter = Vec3((hull.min.x + hull.max.x) * 0.5, (hull.min.y + hull.max.y) * 0.5, (hull.min.z + hull.max.z) * 0.5);
  final testBase = testCenter - Vec3(0, 0.5, 0);
  final testTip = testCenter + Vec3(0, 0.5, 0);
  print('  Test center: (${testCenter.x}, ${testCenter.y}, ${testCenter.z})');
  final directHit = hull.collidesWithCapsule(testBase, testTip, 0.4);
  if (!directHit) {
    throw StateError('Capsule positioned inside hull did not trigger collision');
  }
  final farBase = testBase + Vec3(50.0, 0, 50.0);
  final farTip = farBase + Vec3(0, 1.8, 0);
  final farHit = hull.collidesWithCapsule(farBase, farTip, 0.4);
  if (farHit) {
    throw StateError('Capsule positioned 50m away falsely triggered collision');
  }
  print('  -> Direct intersection and spatial clearance verified');

  print('\n[3/4] Simulating M1 route capsule sweep across ground and cellar...');
  final eye = house.defaultPlayerEye(1.75);
  final capsule = Capsule(
    base: eye - Vec3(0, 1.35, 0),
    tip: eye - Vec3(0, 0.15, 0),
  );

  // Sweep in Hall
  final hallEye = eye;
  final hallResult = capsule.move(house, 'hall', hallEye, Vec3(0.5, 0, 0.5));
  if (hallResult.blocked) {
    throw StateError('Capsule unexpectedly blocked during initial Hall navigation');
  }
  print('  -> Hall free navigation sweep: PASS');

  // Sweep in Living Room
  final livingRoom = house.byId('living-room')!;
  final livingEye = livingRoom.toWorld(Vec3(livingRoom.size.x * 0.5, 1.75, livingRoom.size.z * 0.5));
  final livingResult = capsule.move(house, 'living-room', livingEye, Vec3(0.2, 0, 0.2));
  if (livingResult.blocked) {
    throw StateError('Capsule unexpectedly blocked in Living Room');
  }
  print('  -> Living Room free navigation sweep: PASS');

  // Sweep in Kitchen
  final kitchen = house.byId('kitchen')!;
  final kitchenEye = kitchen.toWorld(Vec3(kitchen.size.x * 0.5, 1.75, kitchen.size.z * 0.5));
  final kitchenResult = capsule.move(house, 'kitchen', kitchenEye, Vec3(0.2, 0, 0.2));
  if (kitchenResult.blocked) {
    throw StateError('Capsule unexpectedly blocked in Kitchen');
  }
  print('  -> Kitchen free navigation sweep: PASS');

  print('\n[4/4] Verifying staircase physical step transition...');
  final stairHulls = hallHulls.where((h) => h.kind == CollisionHullKind.stepPlane).toList();
  if (stairHulls.length != 14) {
    throw StateError('Expected 14 staircase step hulls, got ${stairHulls.length}');
  }
  // Verify monotonically increasing step heights
  for (var i = 1; i < stairHulls.length; i++) {
    if (stairHulls[i].stepHeight < stairHulls[i - 1].stepHeight) {
      throw StateError('Staircase step heights must be non-decreasing');
    }
  }
  print('  -> 14 progressive step planes verified from Ground to Landing');

  print('\n========================================================================');
  print(' ARCHITECTURAL COLLISION & NAVIGATION ROUTE SUITE: PASS');
  print('========================================================================');
}
