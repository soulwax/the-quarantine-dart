import 'dart:io';

import 'package:quarantine/presentation/atmosphere_preset.dart';

void main() {
  final registry = AtmospherePresetRegistry();
  final presetsFile = File('assets/atmosphere/presets.json');
  if (!presetsFile.existsSync()) {
    throw StateError('assets/atmosphere/presets.json does not exist');
  }
  registry.loadFromJson(presetsFile.readAsStringSync());

  final defaultPreset = registry.get('default');
  if (defaultPreset == null) {
    throw StateError('default preset missing');
  }

  final dawn = registry.get('hall-dawn-clear');
  if (dawn == null) {
    throw StateError('hall-dawn-clear preset missing');
  }
  if (dawn.timeOfDay != 'dawn' || dawn.roomMood != 'hall') {
    throw StateError('hall-dawn-clear fields invalid');
  }

  final cellar = registry.get('cellar-night-storm');
  if (cellar == null) {
    throw StateError('cellar-night-storm preset missing');
  }
  if (cellar.weather != 'thunderstorm' || cellar.fogDarkness < 0.5) {
    throw StateError('cellar-night-storm fields invalid');
  }

  final kitchen = registry.get('kitchen-evening-fire');
  if (kitchen == null) {
    throw StateError('kitchen-evening-fire preset missing');
  }
  if (kitchen.timeOfDay != 'dusk' || kitchen.shadeAmbient < 0.4) {
    throw StateError('kitchen-evening-fire fields invalid');
  }

  final blended = AtmospherePreset.lerp(dawn, cellar, 0.5);
  if (blended.fogDarkness <= dawn.fogDarkness || blended.fogDarkness >= cellar.fogDarkness) {
    throw StateError('lerp failed to interpolate fogDarkness smoothly');
  }

  final manager = AtmosphereManager(registry: registry);
  manager.applyPreset('hall-dawn-clear', transitionDuration: 0.0);
  if (manager.activePresetId != 'hall-dawn-clear') {
    throw StateError('applyPreset instant failed');
  }

  manager.applyPreset('cellar-night-storm', transitionDuration: 2.0);
  if (!manager.isBlending) {
    throw StateError('expected manager.isBlending to be true');
  }
  manager.update(1.0);
  if (!manager.isBlending || manager.current.fogDarkness <= dawn.fogDarkness) {
    throw StateError('blending update step failed');
  }
  manager.update(1.0);
  if (manager.isBlending || manager.activePresetId != 'cellar-night-storm') {
    throw StateError('blending completion failed');
  }

  print('Atmosphere presets: all canonical presets validated and blending verified');
}
