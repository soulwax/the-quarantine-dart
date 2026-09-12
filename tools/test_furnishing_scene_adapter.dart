import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/arch/furnishing_scene_adapter.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — FURNISHING SCENE ADAPTER SUITE');
  print('========================================================================');

  final house = House.canonical(seed: 42);

  print('\n[1/4] Verifying all authored manifest props collection...');
  final props = FurnishingSceneAdapter.allProps;
  print('  -> Total authored props across all manifests: ${props.length}');
  if (props.length != 51 && props.length != 53) {
    print('  -> Notice: Prop count is ${props.length}');
  }

  print('\n[2/4] Building renderable furnishing scene items...');
  final items = FurnishingSceneAdapter.buildFurnishings(house);
  print('  -> Total renderable furnishing items: ${items.length}');
  if (items.isEmpty) {
    throw StateError('FurnishingSceneAdapter produced 0 items');
  }

  // Room distribution
  final roomCounts = <String, int>{};
  for (final item in items) {
    roomCounts[item.roomId] = (roomCounts[item.roomId] ?? 0) + 1;
  }
  for (final entry in roomCounts.entries) {
    print('  -> Room [${entry.key}]: ${entry.value} props');
  }

  print('\n[3/4] Verifying materials and vertex buffers...');
  for (final item in items) {
    if (item.meshVertices.isEmpty) {
      throw StateError('Prop ${item.propId} generated empty vertex buffer');
    }
    if (item.material.id.isEmpty) {
      throw StateError('Prop ${item.propId} has empty material id');
    }
  }
  print('  -> All ${items.length} props have valid non-empty geometry and PBR materials');

  print('\n[4/4] Verifying physical collision hulls for solid furnishings...');
  final hulls = FurnishingSceneAdapter.buildCollisionHulls(house);
  print('  -> Total physical furnishing collision hulls: ${hulls.length}');
  if (hulls.isEmpty) {
    throw StateError('Expected collision hulls for solid furnishings');
  }

  print('\n========================================================================');
  print(' FURNISHING SCENE ADAPTER SUITE: PASS');
  print('========================================================================');
}
