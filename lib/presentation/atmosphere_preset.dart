import 'dart:convert';
import 'dart:math' as math;

import '../config.dart' as config;

final class AtmospherePreset {
  final String id;
  final String name;
  final String timeOfDay;
  final double hour;
  final String weather;
  final String roomMood;
  final double shadeAmbient;
  final double shadeDiffuse;
  final (double, double, double) lightDir;
  final int lightColor;
  final int sunColor;
  final int skyAmbientColor;
  final double fogStart;
  final double fogEnd;
  final double fogDarkness;
  final double fogDensity;
  final double fogHeightFalloff;
  final double bloomThreshold;
  final double bloomStrength;
  final double postVignette;
  final double postGrain;
  final double postDesat;
  final double flickerRate;
  final double flickerDepth;
  final double glassFog;
  final double ambientLightScale;
  final double directLightScale;

  const AtmospherePreset({
    required this.id,
    required this.name,
    required this.timeOfDay,
    required this.hour,
    required this.weather,
    required this.roomMood,
    required this.shadeAmbient,
    required this.shadeDiffuse,
    required this.lightDir,
    required this.lightColor,
    required this.sunColor,
    required this.skyAmbientColor,
    required this.fogStart,
    required this.fogEnd,
    required this.fogDarkness,
    required this.fogDensity,
    required this.fogHeightFalloff,
    required this.bloomThreshold,
    required this.bloomStrength,
    required this.postVignette,
    required this.postGrain,
    required this.postDesat,
    required this.flickerRate,
    required this.flickerDepth,
    required this.glassFog,
    required this.ambientLightScale,
    required this.directLightScale,
  });

  factory AtmospherePreset.fromJson(Map<String, dynamic> json) {
    final rawDir = json['lightDir'] as List? ?? [0.3, 0.7, -0.5];
    final dirX = (rawDir[0] as num).toDouble();
    final dirY = (rawDir[1] as num).toDouble();
    final dirZ = (rawDir[2] as num).toDouble();

    return AtmospherePreset(
      id: json['id'] as String? ?? 'custom',
      name: json['name'] as String? ?? 'Custom Atmosphere',
      timeOfDay: json['timeOfDay'] as String? ?? 'afternoon',
      hour: (json['hour'] as num?)?.toDouble() ?? 14.0,
      weather: json['weather'] as String? ?? 'overcast',
      roomMood: json['roomMood'] as String? ?? 'neutral',
      shadeAmbient: (json['shadeAmbient'] as num?)?.toDouble() ?? config.shadeAmbient,
      shadeDiffuse: (json['shadeDiffuse'] as num?)?.toDouble() ?? config.shadeDiffuse,
      lightDir: (dirX, dirY, dirZ),
      lightColor: json['lightColor'] as int? ?? config.lightColorRgb,
      sunColor: json['sunColor'] as int? ?? config.sunColorNoon,
      skyAmbientColor: json['skyAmbientColor'] as int? ?? config.sunColorNight,
      fogStart: (json['fogStart'] as num?)?.toDouble() ?? config.fogStart,
      fogEnd: (json['fogEnd'] as num?)?.toDouble() ?? config.fogEnd,
      fogDarkness: (json['fogDarkness'] as num?)?.toDouble() ?? config.fogDarkness,
      fogDensity: (json['fogDensity'] as num?)?.toDouble() ?? 0.012,
      fogHeightFalloff: (json['fogHeightFalloff'] as num?)?.toDouble() ?? 0.60,
      bloomThreshold: (json['bloomThreshold'] as num?)?.toDouble() ?? config.bloomThreshold,
      bloomStrength: (json['bloomStrength'] as num?)?.toDouble() ?? config.bloomStrength,
      postVignette: (json['postVignette'] as num?)?.toDouble() ?? config.postVignette,
      postGrain: (json['postGrain'] as num?)?.toDouble() ?? config.postGrain,
      postDesat: (json['postDesat'] as num?)?.toDouble() ?? config.postDesat,
      flickerRate: (json['flickerRate'] as num?)?.toDouble() ?? config.flickerRate,
      flickerDepth: (json['flickerDepth'] as num?)?.toDouble() ?? config.flickerDepth,
      glassFog: (json['glassFog'] as num?)?.toDouble() ?? config.glassFog,
      ambientLightScale: (json['ambientLightScale'] as num?)?.toDouble() ?? 1.0,
      directLightScale: (json['directLightScale'] as num?)?.toDouble() ?? 1.0,
    );
  }

  Map<String, dynamic> toJson() => {
    'id': id,
    'name': name,
    'timeOfDay': timeOfDay,
    'hour': hour,
    'weather': weather,
    'roomMood': roomMood,
    'shadeAmbient': shadeAmbient,
    'shadeDiffuse': shadeDiffuse,
    'lightDir': [lightDir.$1, lightDir.$2, lightDir.$3],
    'lightColor': lightColor,
    'sunColor': sunColor,
    'skyAmbientColor': skyAmbientColor,
    'fogStart': fogStart,
    'fogEnd': fogEnd,
    'fogDarkness': fogDarkness,
    'fogDensity': fogDensity,
    'fogHeightFalloff': fogHeightFalloff,
    'bloomThreshold': bloomThreshold,
    'bloomStrength': bloomStrength,
    'postVignette': postVignette,
    'postGrain': postGrain,
    'postDesat': postDesat,
    'flickerRate': flickerRate,
    'flickerDepth': flickerDepth,
    'glassFog': glassFog,
    'ambientLightScale': ambientLightScale,
    'directLightScale': directLightScale,
  };

  static double _lerpDouble(double a, double b, double t) => a + (b - a) * t;

  static int _lerpColor(int a, int b, double t) {
    final ar = (a >> 16) & 0xff;
    final ag = (a >> 8) & 0xff;
    final ab = a & 0xff;
    final br = (b >> 16) & 0xff;
    final bg = (b >> 8) & 0xff;
    final bb = b & 0xff;
    final r = (_lerpDouble(ar.toDouble(), br.toDouble(), t)).round().clamp(0, 255);
    final g = (_lerpDouble(ag.toDouble(), bg.toDouble(), t)).round().clamp(0, 255);
    final blue = (_lerpDouble(ab.toDouble(), bb.toDouble(), t)).round().clamp(0, 255);
    return (r << 16) | (g << 8) | blue;
  }

  static AtmospherePreset lerp(AtmospherePreset a, AtmospherePreset b, double t) {
    final clampedT = t.clamp(0.0, 1.0);
    final dirX = _lerpDouble(a.lightDir.$1, b.lightDir.$1, clampedT);
    final dirY = _lerpDouble(a.lightDir.$2, b.lightDir.$2, clampedT);
    final dirZ = _lerpDouble(a.lightDir.$3, b.lightDir.$3, clampedT);
    final len = math.sqrt(dirX * dirX + dirY * dirY + dirZ * dirZ);
    final normDir = len > 0.0001
        ? (dirX / len, dirY / len, dirZ / len)
        : a.lightDir;

    return AtmospherePreset(
      id: clampedT < 0.5 ? a.id : b.id,
      name: clampedT < 0.5 ? a.name : b.name,
      timeOfDay: clampedT < 0.5 ? a.timeOfDay : b.timeOfDay,
      hour: _lerpDouble(a.hour, b.hour, clampedT),
      weather: clampedT < 0.5 ? a.weather : b.weather,
      roomMood: clampedT < 0.5 ? a.roomMood : b.roomMood,
      shadeAmbient: _lerpDouble(a.shadeAmbient, b.shadeAmbient, clampedT),
      shadeDiffuse: _lerpDouble(a.shadeDiffuse, b.shadeDiffuse, clampedT),
      lightDir: normDir,
      lightColor: _lerpColor(a.lightColor, b.lightColor, clampedT),
      sunColor: _lerpColor(a.sunColor, b.sunColor, clampedT),
      skyAmbientColor: _lerpColor(a.skyAmbientColor, b.skyAmbientColor, clampedT),
      fogStart: _lerpDouble(a.fogStart, b.fogStart, clampedT),
      fogEnd: _lerpDouble(a.fogEnd, b.fogEnd, clampedT),
      fogDarkness: _lerpDouble(a.fogDarkness, b.fogDarkness, clampedT),
      fogDensity: _lerpDouble(a.fogDensity, b.fogDensity, clampedT),
      fogHeightFalloff: _lerpDouble(a.fogHeightFalloff, b.fogHeightFalloff, clampedT),
      bloomThreshold: _lerpDouble(a.bloomThreshold, b.bloomThreshold, clampedT),
      bloomStrength: _lerpDouble(a.bloomStrength, b.bloomStrength, clampedT),
      postVignette: _lerpDouble(a.postVignette, b.postVignette, clampedT),
      postGrain: _lerpDouble(a.postGrain, b.postGrain, clampedT),
      postDesat: _lerpDouble(a.postDesat, b.postDesat, clampedT),
      flickerRate: _lerpDouble(a.flickerRate, b.flickerRate, clampedT),
      flickerDepth: _lerpDouble(a.flickerDepth, b.flickerDepth, clampedT),
      glassFog: _lerpDouble(a.glassFog, b.glassFog, clampedT),
      ambientLightScale: _lerpDouble(a.ambientLightScale, b.ambientLightScale, clampedT),
      directLightScale: _lerpDouble(a.directLightScale, b.directLightScale, clampedT),
    );
  }
}

class AtmospherePresetRegistry {
  final Map<String, AtmospherePreset> _presets = {};

  static const AtmospherePreset defaultPreset = AtmospherePreset(
    id: 'default',
    name: 'Default Baseline',
    timeOfDay: 'afternoon',
    hour: 14.0,
    weather: 'overcast',
    roomMood: 'neutral',
    shadeAmbient: config.shadeAmbient,
    shadeDiffuse: config.shadeDiffuse,
    lightDir: (config.lightDirX, config.lightDirY, config.lightDirZ),
    lightColor: config.lightColorRgb,
    sunColor: config.sunColorNoon,
    skyAmbientColor: config.sunColorNight,
    fogStart: config.fogStart,
    fogEnd: config.fogEnd,
    fogDarkness: config.fogDarkness,
    fogDensity: 0.012,
    fogHeightFalloff: 0.60,
    bloomThreshold: config.bloomThreshold,
    bloomStrength: config.bloomStrength,
    postVignette: config.postVignette,
    postGrain: config.postGrain,
    postDesat: config.postDesat,
    flickerRate: config.flickerRate,
    flickerDepth: config.flickerDepth,
    glassFog: config.glassFog,
    ambientLightScale: 1.0,
    directLightScale: 1.0,
  );

  static const AtmospherePreset hallDawnClear = AtmospherePreset(
    id: 'hall-dawn-clear',
    name: 'Hall Dawn Clear',
    timeOfDay: 'dawn',
    hour: 6.5,
    weather: 'clear',
    roomMood: 'hall',
    shadeAmbient: 0.36,
    shadeDiffuse: 0.65,
    lightDir: (0.35, 0.40, -0.65),
    lightColor: 0xEBE0D2,
    sunColor: 0xD8A370,
    skyAmbientColor: 0x30374C,
    fogStart: 2.5,
    fogEnd: 18.0,
    fogDarkness: 0.22,
    fogDensity: 0.007,
    fogHeightFalloff: 0.45,
    bloomThreshold: 0.22,
    bloomStrength: 0.28,
    postVignette: 0.14,
    postGrain: 0.010,
    postDesat: 0.04,
    flickerRate: 2.2,
    flickerDepth: 0.0,
    glassFog: 0.25,
    ambientLightScale: 0.92,
    directLightScale: 1.15,
  );

  static const AtmospherePreset cellarNightStorm = AtmospherePreset(
    id: 'cellar-night-storm',
    name: 'Cellar Night Storm',
    timeOfDay: 'night',
    hour: 22.5,
    weather: 'thunderstorm',
    roomMood: 'cellar',
    shadeAmbient: 0.22,
    shadeDiffuse: 0.45,
    lightDir: (0.10, 0.90, -0.20),
    lightColor: 0x8099AE,
    sunColor: 0x243553,
    skyAmbientColor: 0x121425,
    fogStart: 0.8,
    fogEnd: 9.0,
    fogDarkness: 0.58,
    fogDensity: 0.028,
    fogHeightFalloff: 0.85,
    bloomThreshold: 0.12,
    bloomStrength: 0.52,
    postVignette: 0.28,
    postGrain: 0.022,
    postDesat: 0.12,
    flickerRate: 3.8,
    flickerDepth: 0.14,
    glassFog: 0.70,
    ambientLightScale: 0.65,
    directLightScale: 0.75,
  );

  static const AtmospherePreset kitchenEveningFire = AtmospherePreset(
    id: 'kitchen-evening-fire',
    name: 'Kitchen Evening Fire',
    timeOfDay: 'dusk',
    hour: 18.75,
    weather: 'rain',
    roomMood: 'kitchen',
    shadeAmbient: 0.42,
    shadeDiffuse: 0.68,
    lightDir: (0.45, 0.55, -0.40),
    lightColor: 0xFFB480,
    sunColor: 0xD38B5B,
    skyAmbientColor: 0x292835,
    fogStart: 1.8,
    fogEnd: 13.0,
    fogDarkness: 0.30,
    fogDensity: 0.014,
    fogHeightFalloff: 0.55,
    bloomThreshold: 0.14,
    bloomStrength: 0.44,
    postVignette: 0.16,
    postGrain: 0.012,
    postDesat: 0.03,
    flickerRate: 3.0,
    flickerDepth: 0.06,
    glassFog: 0.50,
    ambientLightScale: 1.08,
    directLightScale: 1.05,
  );

  AtmospherePresetRegistry() {
    register(defaultPreset);
    register(hallDawnClear);
    register(cellarNightStorm);
    register(kitchenEveningFire);
  }

  void register(AtmospherePreset preset) {
    _presets[preset.id] = preset;
  }

  AtmospherePreset? get(String id) => _presets[id];

  List<AtmospherePreset> get all => List.unmodifiable(_presets.values);

  void loadFromJson(String jsonSource) {
    final dynamic decoded = jsonDecode(jsonSource);
    if (decoded is! Map) return;
    final presetsList = decoded['presets'];
    if (presetsList is! List) return;
    for (final item in presetsList) {
      if (item is Map<String, dynamic>) {
        register(AtmospherePreset.fromJson(item));
      } else if (item is Map) {
        register(AtmospherePreset.fromJson(Map<String, dynamic>.from(item)));
      }
    }
  }
}

class AtmosphereManager {
  final AtmospherePresetRegistry registry;
  AtmospherePreset _current;
  AtmospherePreset? _target;
  double _blendT = 1.0;
  double _transitionDuration = 0.0;

  AtmosphereManager({AtmospherePresetRegistry? registry})
      : registry = registry ?? AtmospherePresetRegistry(),
        _current = AtmospherePresetRegistry.defaultPreset;

  AtmospherePreset get current => _target == null || _blendT >= 1.0
      ? _current
      : AtmospherePreset.lerp(_current, _target!, _blendT);

  String get activePresetId => (_target != null && _blendT >= 0.5)
      ? _target!.id
      : _current.id;

  bool get isBlending => _target != null && _blendT < 1.0;

  void applyPreset(String presetId, {double transitionDuration = 0.0}) {
    final next = registry.get(presetId);
    if (next == null) return;
    if (transitionDuration <= 0.0) {
      _current = next;
      _target = null;
      _blendT = 1.0;
    } else {
      _current = current;
      _target = next;
      _blendT = 0.0;
      _transitionDuration = transitionDuration;
    }
  }

  void update(double dt) {
    if (_target == null || _blendT >= 1.0) return;
    if (_transitionDuration <= 0.0) {
      _current = _target!;
      _target = null;
      _blendT = 1.0;
      return;
    }
    _blendT += dt / _transitionDuration;
    if (_blendT >= 1.0) {
      _current = _target!;
      _target = null;
      _blendT = 1.0;
    }
  }
}
