import 'package:pixeldart/rendering/rendering.dart' as pixeldart;
import 'package:quarantine/presentation/pixeldart_renderer_profile_policy.dart';

void check(bool condition, String message) {
  if (!condition) throw StateError(message);
}

void main() {
  const policy = PixeldartRendererProfilePolicy();
  final high = policy.configuration(
    profile: pixeldart.QualityProfile.clean,
    surfaceWidth: 1920,
    surfaceHeight: 1080,
  );
  check(high.internalWidth == 1920, 'high internal width');
  check(high.internalHeight == 1080, 'high internal height');
  // R-A5: assert against what the runtime honours, not against a constant
  // chosen here. RuntimeLightBudget.shadowMaps is itself pinned to the shader
  // and the pipeline resource layout by
  // external/pixeldart/tools/renderer/test_runtime_light_budget.dart.
  check(
    high.shadowMapCount == pixeldart.RuntimeLightBudget.shadowMaps,
    'high shadow maps must match the runtime shadow-map budget',
  );
  check(high.shadowMapSize == 1024, 'high shadow map size');
  final highMsaa4 = policy.configuration(
    profile: pixeldart.QualityProfile.clean,
    surfaceWidth: 1920,
    surfaceHeight: 1080,
    antialiasing: 'msaa4',
  );
  check(highMsaa4.sampleCount == 4, 'high MSAA 4x allocation');
  check(high.materialTableCapacity == 64, 'high material capacity');
  check(
    high.lightTableCapacity == pixeldart.RuntimeLightBudget.dynamicLights,
    'high light capacity must match the shader light budget',
  );
  final highMap = high.toMap();
  check(highMap['internalWidth'] == 1920, 'configuration map width');
  check(
    highMap['shadowMapCount'] == pixeldart.RuntimeLightBudget.shadowMaps,
    'configuration map shadow count',
  );

  final standard = policy.configuration(
    profile: pixeldart.QualityProfile.minimal,
    surfaceWidth: 1280,
    surfaceHeight: 720,
  );
  check(standard.internalWidth == 1280, 'standard internal width');
  check(standard.internalHeight == 720, 'standard internal height');
  check(
    standard.shadowMapCount == pixeldart.RuntimeLightBudget.shadowMaps,
    'standard shadow maps must match the runtime shadow-map budget',
  );

  final safe = policy.configuration(
    profile: pixeldart.QualityProfile.safe,
    surfaceWidth: 800,
    surfaceHeight: 600,
  );
  check(safe.internalWidth == 800, 'safe internal width');
  check(safe.internalHeight == 450, 'safe internal height');
  check(safe.shadowMapCount == 0, 'safe has no shadows');
  final shadowsOff = policy.configuration(
    profile: pixeldart.QualityProfile.clean,
    surfaceWidth: 1920,
    surfaceHeight: 1080,
    shadowQuality: 'off',
  );
  check(shadowsOff.shadowMapCount == 0, 'shadowQuality off disables shadows');
  check(safe.lightTableCapacity == 1, 'safe light capacity');

  final small = policy.configuration(
    profile: pixeldart.QualityProfile.clean,
    surfaceWidth: 640,
    surfaceHeight: 360,
  );
  check(small.internalWidth == 640, 'small surface width is capped');
  check(small.internalHeight == 360, 'small surface height is capped');

  final scaled = policy.configuration(
    profile: pixeldart.QualityProfile.clean,
    surfaceWidth: 1920,
    surfaceHeight: 1080,
    renderScale: '0.75',
  );
  check(scaled.internalWidth == 1440, 'scaled high internal width');
  check(scaled.internalHeight == 810, 'scaled high internal height');
  var rejected = false;
  try {
    policy.configuration(
      profile: pixeldart.QualityProfile.clean,
      surfaceWidth: 0,
      surfaceHeight: 1080,
    );
  } catch (error) {
    rejected = error is ArgumentError;
  }
  check(rejected, 'invalid surface dimensions are rejected');
  print('Pixeldart renderer profile policy: allocation/scale/validation pass');
}
