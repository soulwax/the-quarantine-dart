import 'package:quarantine/house/arch/house_architect.dart';
import 'package:quarantine/house/arch/house_model_catalog.dart';
import 'package:quarantine/house/geometry.dart';
import 'package:quarantine/house/house_assembler.dart';
import 'package:quarantine/house/surface_materials.dart';
import 'house_fixture.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — HOUSE ARCHITECT & 3D MODEL PLACEMENT SUITE');
  print('========================================================================');

  // 1. Verify HouseModelCatalog
  print('\n[1/6] Verifying HouseModelCatalog entries...');
  assert(HouseModelCatalog.all.isNotEmpty, 'Model catalog must not be empty');
  print('  -> Total cataloged 3D models: ${HouseModelCatalog.all.length}');

  // Verify Poly Haven photorealistic models
  final tv = HouseModelCatalog.resolve('polyhaven.television-01');
  assert(tv.source == ModelSource.polyhaven, 'TV must be Poly Haven source');
  assert(tv.format == ModelFormat.gltf, 'TV must be glTF format');
  assert(tv.width > 0.5 && tv.height > 0.4, 'TV must have authentic physical dimensions');

  final coffeeTable = HouseModelCatalog.resolve('polyhaven.coffee-table-01');
  assert(coffeeTable.source == ModelSource.polyhaven);
  assert(coffeeTable.width >= 1.0);

  final lamp = HouseModelCatalog.resolve('polyhaven.desk-lamp-arm-01');
  assert(lamp.source == ModelSource.polyhaven);

  final clock = HouseModelCatalog.resolve('polyhaven.alarm-clock-01');
  assert(clock.source == ModelSource.polyhaven);

  // Verify New Expansion Models (Roof, Attic, Cellar)
  final ladder = HouseModelCatalog.resolve('polyhaven.wooden-ladder');
  assert(ladder.source == ModelSource.polyhaven);
  assert(ladder.height > 2.0);

  final crate = HouseModelCatalog.resolve('polyhaven.wooden-crate-01');
  assert(crate.source == ModelSource.polyhaven);

  final lantern = HouseModelCatalog.resolve('polyhaven.lantern-01');
  assert(lantern.source == ModelSource.polyhaven);

  final wineBarrel = HouseModelCatalog.resolve('polyhaven.wine-barrel-01');
  assert(wineBarrel.source == ModelSource.polyhaven);

  final roofSlates = HouseModelCatalog.resolve('polyhaven.roof-slates');
  assert(roofSlates.source == ModelSource.polyhaven);

  final chest = HouseModelCatalog.resolve('kenney.chest');
  assert(chest.source == ModelSource.kenney);

  final barrel = HouseModelCatalog.resolve('kenney.barrel');
  assert(barrel.source == ModelSource.kenney);

  final bucket = HouseModelCatalog.resolve('kenney.bucket');
  assert(bucket.source == ModelSource.kenney);

  final pipe = HouseModelCatalog.resolve('kenney.detail-pipe');
  assert(pipe.source == ModelSource.kenney);

  print('  -> Poly Haven and Kenney expansion models verified successfully.');

  // 2. Verify Poly Haven PBR Surface Materials
  print('\n[2/6] Verifying Poly Haven PBR surface materials in HouseSurfaceMaterials...');
  final requiredPbrs = [
    'polyhaven-decrepit-wallpaper',
    'polyhaven-dark-paneled-wood',
    'polyhaven-damaged-plaster',
    'polyhaven-diagonal-parquet',
    'polyhaven-dirty-carpet',
    'polyhaven-brown-floor-tiles',
    'polyhaven-ceiling-interior',
    'polyhaven-roof-slates',
  ];

  for (final matId in requiredPbrs) {
    final mat = HouseSurfaceMaterials.forId(matId);
    assert(mat.id == matId);
    assert(mat.textureKey.startsWith('polyhaven/'));
    assert(mat.roughness > 0.0 && mat.roughness <= 1.0);
    assert(mat.uvMetres > 0.0);
  }
  print('  -> All 8 Poly Haven PBR surface sets validated.');

  // 3. Plan House with HouseArchitect
  print('\n[3/6] Executing HouseArchitect.instance.planHouse()...');
  final house = loadAuthoredHouse(seed: 42);
  final plan = HouseAssembler.instance.planHouse(house);

  if (!plan.isValid) {
    print('Architectural Plan Validation Errors:');
    for (final err in plan.validationErrors) {
      print('  ! $err');
    }
    throw StateError('Architectural house plan contains validation errors');
  }
  assert(plan.isValid, 'Plan must have zero validation errors');
  assert(plan.programs.length == house.rooms.length + 2, 'Must have 8 rooms + attic + roof');
  assert(plan.attic != null, 'Attic program must be present');
  assert(plan.roof != null, 'Roof program must be present');
  print('  -> Plan validated with 0 errors across all ${plan.programs.length} programs (8 rooms + attic + roof).');

  // 4. Verify Per-Room Architectural Programs and Model Instances
  print('\n[4/6] Verifying per-room architectural programs and model placements...');
  final allInstances = plan.allModelInstances;
  assert(allInstances.length >= 25, 'Must place 25+ models across house, got: ${allInstances.length}');
  print('  -> Total architectural 3D model instances placed: ${allInstances.length}');

  // Living Room checks
  final lrProg = plan.programs['living-room']!;
  assert(lrProg.pbrWall == 'polyhaven-dark-paneled-wood');
  assert(lrProg.pbrFloor == 'polyhaven-dirty-carpet');
  assert(lrProg.zones.contains(FunctionalZone.media));
  final lrTv = lrProg.modelInstances.firstWhere((i) => i.modelId == 'polyhaven.television-01');
  assert(lrTv.zone == FunctionalZone.media);
  assert(lrTv.canonicalPropId == 'living_room.wireless-set');

  // Bedroom checks
  final bedProg = plan.programs['bedroom']!;
  assert(bedProg.pbrFloor == 'polyhaven-dirty-carpet');
  final bedClock = bedProg.modelInstances.firstWhere((i) => i.modelId == 'polyhaven.alarm-clock-01');
  assert(bedClock.zone == FunctionalZone.sleeping);

  // Bathroom checks
  final bathProg = plan.programs['bathroom']!;
  assert(bathProg.pbrFloor == 'polyhaven-brown-floor-tiles');
  assert(bathProg.modelInstances.any((i) => i.modelId == 'kenney.bathtub'));
  assert(bathProg.modelInstances.any((i) => i.modelId == 'kenney.bathroom-sink'));

  // Cellar checks (Deeply Enhanced)
  final cellarProg = plan.programs['cellar']!;
  assert(cellarProg.builtInFeatures.any((f) => f.contains('Preserves & wine storage alcove')));
  assert(cellarProg.builtInFeatures.any((f) => f.contains('Subterranean drainage sump pit')));
  assert(cellarProg.modelInstances.any((i) => i.modelId == 'polyhaven.wine-barrel-01'));
  assert(cellarProg.modelInstances.any((i) => i.modelId == 'kenney.barrel'));
  assert(cellarProg.modelInstances.any((i) => i.modelId == 'polyhaven.wooden-crate-01'));
  assert(cellarProg.modelInstances.any((i) => i.modelId == 'kenney.bucket'));
  assert(cellarProg.modelInstances.any((i) => i.modelId == 'polyhaven.lantern-01'));
  print('  -> Cellar program and 7 dedicated models verified.');

  // Attic checks
  final atticProg = plan.attic!;
  assert(atticProg.zones.contains(FunctionalZone.storage));
  assert(atticProg.zones.contains(FunctionalZone.utility));
  assert(atticProg.builtInFeatures.any((f) => f.contains('Sloped timber rafter trusses')));
  assert(atticProg.builtInFeatures.any((f) => f.contains('Galvanized cold-water header cistern')));
  assert(atticProg.modelInstances.any((i) => i.modelId == 'polyhaven.wooden-ladder'));
  assert(atticProg.modelInstances.any((i) => i.modelId == 'polyhaven.wooden-crate-01'));
  assert(atticProg.modelInstances.any((i) => i.modelId == 'kenney.chest'));
  assert(atticProg.modelInstances.any((i) => i.modelId == 'kenney.cardboard-box'));
  assert(atticProg.modelInstances.any((i) => i.modelId == 'polyhaven.lantern-01'));
  print('  -> Attic loft program and 5 dedicated models verified.');

  // Roof checks
  final roofProg = plan.roof!;
  assert(roofProg.pbrWall == 'polyhaven-roof-slates');
  assert(roofProg.builtInFeatures.any((f) => f.contains('North and South sloped Welsh slate roof planes')));
  assert(roofProg.builtInFeatures.any((f) => f.contains('Dual masonry chimney stacks')));
  assert(roofProg.modelInstances.any((i) => i.modelId == 'kenney.detail-pipe'));
  print('  -> Roof program, chimney stacks, and drainage verified.');

  // 5. Verify Roof & Attic Geometry Generation
  print('\n[5/6] Verifying Roof & Attic geometry synthesis in HouseAssembler...');
  final roofGeom = HouseAssembler.instance.buildRoofGeometry(house);
  assert(roofGeom.isNotEmpty, 'Roof geometry must not be empty');
  print('  -> Roof exterior mesh: ${roofGeom.length ~/ 6} vertices synthesized.');

  final atticGeom = HouseAssembler.instance.buildAtticGeometry(house);
  assert(atticGeom.isNotEmpty, 'Attic geometry must not be empty');
  print('  -> Attic interior loft mesh: ${atticGeom.length ~/ 6} vertices synthesized.');

  // 6. Verify RoomGeometry Generation across generator-owned rooms
  print('\n[6/6] Verifying RoomGeometry generation across generator-owned rooms...');
  for (final room in house.rooms) {
    final geom = HouseAssembler.instance.buildRoomGeometry(house, room);
    if (roomShellIsModelPresented(room.id)) {
      assert(geom.isEmpty, 'Model presented rooms must yield empty procedural shell');
      continue;
    }
    assert(geom.floor.isNotEmpty, 'Room ${room.id} floor must not be empty');
    assert(geom.ceiling.isNotEmpty, 'Room ${room.id} ceiling must not be empty');
    assert(geom.walls.isNotEmpty, 'Room ${room.id} walls must not be empty');
  }
  print('  -> Procedural architectural geometry built successfully for all generator-owned rooms.');

  print('\n========================================================================');
  print(' HOUSE ARCHITECT & 3D MODEL SUITE: PASS');
  print('========================================================================\n');
}
