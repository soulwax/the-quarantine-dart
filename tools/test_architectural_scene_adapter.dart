import 'package:quarantine/house/arch/architectural_scene_adapter.dart';
import 'package:quarantine/house/house.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — ARCHITECTURAL SCENE ADAPTER SUITE');
  print('========================================================================');

  final house = House.canonical(seed: 42);
  final adapter = ArchitecturalSceneAdapter.instance;
  final items = adapter.generateSceneItems(house);

  print('\n[1/3] Verifying generated architectural scene items...');
  print('  -> Total generated renderable items: ${items.length} (expected: 30)');
  if (items.length != 30) {
    throw StateError('Expected 30 architectural renderable items, got ${items.length}');
  }

  print('\n[2/3] Verifying per-room item distribution...');
  final countByRoom = <String, int>{};
  for (final item in items) {
    countByRoom[item.roomId] = (countByRoom[item.roomId] ?? 0) + 1;
    if (item.vertices.isEmpty) {
      throw StateError('Item ${item.id} has empty vertex geometry');
    }
    if (item.worldPosition.x.isNaN || item.worldPosition.y.isNaN || item.worldPosition.z.isNaN) {
      throw StateError('Item ${item.id} has NaN coordinates');
    }
    if (item.materialKey.isEmpty) {
      throw StateError('Item ${item.id} has empty material key');
    }
  }

  for (final entry in countByRoom.entries) {
    print('  -> Room [${entry.key}]: ${entry.value} architectural models rendered');
  }

  print('\n[3/3] Verifying dedicated programs (Cellar, Attic, Roof)...');
  if ((countByRoom['cellar'] ?? 0) != 7) {
    throw StateError('Expected 7 cellar architectural items, got ${countByRoom['cellar']}');
  }
  if ((countByRoom['attic'] ?? 0) != 5) {
    throw StateError('Expected 5 attic architectural items, got ${countByRoom['attic']}');
  }
  if ((countByRoom['roof'] ?? 0) != 2) {
    throw StateError('Expected 2 roof architectural items, got ${countByRoom['roof']}');
  }

  print('\n========================================================================');
  print(' ARCHITECTURAL SCENE ADAPTER SUITE: PASS');
  print('========================================================================');
}
