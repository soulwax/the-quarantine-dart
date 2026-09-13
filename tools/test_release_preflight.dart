import 'dart:convert';
import 'dart:io';

void main() {
  final required = [
    'web/res/house/house.json',
    'web/res/house/inventory.json',
    'web/res/house/soundscape.json',
    'web/res/story_script.json',
    'web/res/models/index.json',
    'tools/test_clean_visual_baseline.dart',
    'tools/test_ending_production_contract.dart',
    'tools/test_capture_metadata_contract.dart',
    'tools/test_weather_surface.dart',
    'tools/test_backend_lifecycles.dart',
    'tools/test_visual_manifest.dart',
    'tools/test_renderer_unavailable_contract.dart',
    'tools/browser/audio_pause_resume_smoke.cjs',
    'tools/browser/shader_lab_document_smoke.cjs',
    'tools/browser/house_session_smoke.cjs',
    'tools/browser/canonical_fbx_room_smoke.cjs',
    'external/pixeldart/tools/test_plib00_package_audit.dart',
    'external/pixeldart/tools/test_plib03_downstream_host.dart',
    'external/pixeldart/tools/test_plib07_minimal_host.dart',
    'external/pixeldart/tools/renderer/test_output_encoding.dart',
    'external/pixeldart/tools/renderer/test_skybox_contract.dart',
    'external/pixeldart/tools/renderer/test_rain_effect.dart',
    'external/pixeldart/tools/renderer/test_alpha_mask_tail.dart',
    'external/pixeldart/tools/renderer/test_all.dart',
    'tools/test_journal_browser_contract.dart',
    'tools/test_day1_production_route_contract.dart',
    'tools/test_ending_browser_contract.dart',
    'tools/test_stair_browser_contract.dart',
    'tools/test_house_route_execution.dart',
    'tools/browser/weather_phase_telemetry_smoke.cjs',
    'tools/browser/closed_cellar_door_smoke.cjs',
    'tools/test_audio_acoustic_mixdown.dart',
    'tools/test_audio_runtime_contract.dart',
    'tools/test_closed_cellar_audio_contract.dart',
    'tools/test_story_screenplay_integrity.dart',
    'tools/test_story_generated_resource_contract.dart',
    'tools/test_story_event_consumers.dart',
    'tools/test_model_cache_rehydration_r06.dart',
    'tools/test_renderer_slices.dart',
    'tools/text_build.dart',
    'tools/test_day1_reference_loop.dart',
    'tools/test_story_act_batches.dart',
    'tools/test_ending_production_contract.dart',
    'tools/test_inventory_promotion_gate.dart',
    'tools/test_inventory_index_alignment.dart',
    'tools/test_inventory_status_contract.dart',
    'tools/test_promoted_living_room_package.dart',
    'tools/test_presentation_package_binding_adapter.dart',
    'tools/test_audio_planner.dart',
  ];
  final missing = [
    for (final path in required)
      if (!File(path).existsSync()) path,
  ];
  if (missing.isNotEmpty) {
    throw StateError('release preflight missing: $missing');
  }
  final index = jsonDecode(
    File('web/res/models/index.json').readAsStringSync(),
  );
  if (index is! Map || index['schema'] != 'quarantine-promoted-models-v1') {
    throw StateError('release preflight has invalid model index');
  }
  final version = File('VERSION').readAsStringSync().trim();
  if (!RegExp(r'^\d+\.\d+\.\d+\.\d+$').hasMatch(version)) {
    throw StateError('release preflight has invalid VERSION: $version');
  }
  final changelog = File('CHANGELOG.md').readAsStringSync();
  if (!changelog.contains('## Unreleased')) {
    throw StateError('release preflight changelog has no Unreleased section');
  }
  final reviewRoot = Directory('artifacts/human-visual-confirmation');
  if (reviewRoot.existsSync()) {
    final packets = reviewRoot
        .listSync(recursive: true)
        .whereType<File>()
        .where((file) => file.path.endsWith('.json'));
    for (final file in packets) {
      final raw = jsonDecode(file.readAsStringSync());
      if (raw is Map &&
          raw['packet'] == 'human-visual-confirmation' &&
          raw['status'] != 'pending-human-review') {
        throw StateError('human review packet is not pending: ${file.path}');
      }
    }
  }
  // Automation may prove contracts; it must never certify human review.
  stdout.writeln(
    'release preflight: required authored resources present; HUMAN gates remain pending',
  );
}
