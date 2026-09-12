/// Defines lighting rigs for each room.
library per_room_lighting_rigs;

/// Specification for a practical light source in the environment.
class PracticalLightSpec {
  /// Unique identifier for the light.
  final String lightId;
  /// Room this light belongs to.
  final String roomId;
  /// Type of light (e.g. 'point', 'spot', 'emissiveMesh').
  final String type;
  /// Color temperature in Kelvin (e.g. 2700, 3500).
  final int colorTemperatureKelvin;
  /// RGB color response.
  final ({double r, double g, double b}) colorRGB;
  /// Intensity in lux.
  final double intensityLux;
  /// Cone angle in degrees (for spots). Use 360 for point.
  final double coneAngleDegrees;
  /// Whether the light casts dynamic shadows.
  final bool castsShadow;
  /// Whether the player can interactively toggle this light.
  final bool hasInteractiveSwitch;

  /// Creates a [PracticalLightSpec].
  const PracticalLightSpec({
    required this.lightId,
    required this.roomId,
    required this.type,
    required this.colorTemperatureKelvin,
    required this.colorRGB,
    required this.intensityLux,
    required this.coneAngleDegrees,
    required this.castsShadow,
    required this.hasInteractiveSwitch,
  });

  /// Converts the spec to JSON for diagnostics.
  Map<String, dynamic> toJson() => {
        'lightId': lightId,
        'roomId': roomId,
        'type': type,
        'colorTemperatureKelvin': colorTemperatureKelvin,
        'colorRGB': [colorRGB.r, colorRGB.g, colorRGB.b],
        'intensityLux': intensityLux,
        'coneAngleDegrees': coneAngleDegrees,
        'castsShadow': castsShadow,
        'hasInteractiveSwitch': hasInteractiveSwitch,
      };
}

/// Contains authored lighting rigs for all 8 rooms matching Section 22.3.3.
class PerRoomLightingRigs {
  /// Authored lighting rigs mapped by room ID.
  static const Map<String, List<PracticalLightSpec>> rigs = {
    'hall': [
      PracticalLightSpec(
        lightId: 'hall.pendant',
        roomId: 'hall',
        type: 'point',
        colorTemperatureKelvin: 2700,
        colorRGB: (r: 1.0, g: 0.75, b: 0.5),
        intensityLux: 300.0,
        coneAngleDegrees: 360.0,
        castsShadow: true,
        hasInteractiveSwitch: true,
      ),
    ],
    'kitchen': [
      PracticalLightSpec(
        lightId: 'kitchen.bare-bulb',
        roomId: 'kitchen',
        type: 'point',
        colorTemperatureKelvin: 3500,
        colorRGB: (r: 1.0, g: 0.85, b: 0.7),
        intensityLux: 400.0,
        coneAngleDegrees: 360.0,
        castsShadow: true,
        hasInteractiveSwitch: true,
      ),
    ],
    'livingRoom': [
      PracticalLightSpec(
        lightId: 'livingRoom.fire',
        roomId: 'livingRoom',
        type: 'point',
        colorTemperatureKelvin: 2200,
        colorRGB: (r: 1.0, g: 0.65, b: 0.35),
        intensityLux: 500.0,
        coneAngleDegrees: 360.0,
        castsShadow: true,
        hasInteractiveSwitch: false,
      ),
      PracticalLightSpec(
        lightId: 'livingRoom.standard-lamp',
        roomId: 'livingRoom',
        type: 'spot',
        colorTemperatureKelvin: 2200,
        colorRGB: (r: 1.0, g: 0.65, b: 0.35),
        intensityLux: 350.0,
        coneAngleDegrees: 60.0,
        castsShadow: true,
        hasInteractiveSwitch: true,
      ),
    ],
    'cellar': [
      PracticalLightSpec(
        lightId: 'cellar.downlight',
        roomId: 'cellar',
        type: 'spot',
        colorTemperatureKelvin: 4000,
        colorRGB: (r: 1.0, g: 0.9, b: 0.8),
        intensityLux: 500.0,
        coneAngleDegrees: 90.0,
        castsShadow: true,
        hasInteractiveSwitch: true,
      ),
    ],
    'bedroom': [
      PracticalLightSpec(
        lightId: 'bedroom.bedside-lamp',
        roomId: 'bedroom',
        type: 'point',
        colorTemperatureKelvin: 2700,
        colorRGB: (r: 1.0, g: 0.75, b: 0.5),
        intensityLux: 200.0,
        coneAngleDegrees: 360.0,
        castsShadow: true,
        hasInteractiveSwitch: true,
      ),
    ],
    'landing': [
      PracticalLightSpec(
        lightId: 'landing.wall-sconce',
        roomId: 'landing',
        type: 'point',
        colorTemperatureKelvin: 2700,
        colorRGB: (r: 1.0, g: 0.75, b: 0.5),
        intensityLux: 250.0,
        coneAngleDegrees: 360.0,
        castsShadow: true,
        hasInteractiveSwitch: true,
      ),
    ],
    'bathroom': [
      PracticalLightSpec(
        lightId: 'bathroom.ceiling-fitting',
        roomId: 'bathroom',
        type: 'point',
        colorTemperatureKelvin: 3500,
        colorRGB: (r: 1.0, g: 0.85, b: 0.7),
        intensityLux: 350.0,
        coneAngleDegrees: 360.0,
        castsShadow: true,
        hasInteractiveSwitch: true,
      ),
    ],
    'spareRoom': [], // Ambient only / torch
  };

  /// Finds the lighting rig for a given room, supporting both kebab-case and camelCase keys.
  static List<PracticalLightSpec> findRigForRoom(String roomId) {
    if (rigs.containsKey(roomId)) return rigs[roomId]!;
    final normalized = switch (roomId) {
      'living-room' => 'livingRoom',
      'spare-room' => 'spareRoom',
      'rear-service' => 'cellar',
      _ => roomId,
    };
    return rigs[normalized] ?? [];
  }

  /// Calculates room-specific ambient irradiance color by blending sky ambient
  /// with room practical color temperatures and wall tints.
  static ({double r, double g, double b}) evaluateRoomAmbient({
    required String roomId,
    required ({double r, double g, double b}) skyAmbient,
    double practicalWeight = 0.35,
  }) {
    final rig = findRigForRoom(roomId);
    if (rig.isEmpty) return skyAmbient;

    var sumR = 0.0;
    var sumG = 0.0;
    var sumB = 0.0;
    for (final light in rig) {
      sumR += light.colorRGB.r;
      sumG += light.colorRGB.g;
      sumB += light.colorRGB.b;
    }
    final avgR = sumR / rig.length;
    final avgG = sumG / rig.length;
    final avgB = sumB / rig.length;

    final w = practicalWeight.clamp(0.0, 0.8);
    final invW = 1.0 - w;

    return (
      r: (skyAmbient.r * invW + avgR * w).clamp(0.0, 1.0),
      g: (skyAmbient.g * invW + avgG * w).clamp(0.0, 1.0),
      b: (skyAmbient.b * invW + avgB * w).clamp(0.0, 1.0),
    );
  }

  /// Returns all rigs as diagnostics JSON.
  static Map<String, dynamic> toJson() {
    final Map<String, dynamic> json = {};
    for (final entry in rigs.entries) {
      json[entry.key] = entry.value.map((l) => l.toJson()).toList();
    }
    return json;
  }

  /// Validates the lighting rigs.
  static bool validate() {
    final ids = <String>{};
    for (final roomLights in rigs.values) {
      for (final light in roomLights) {
        if (light.lightId.isEmpty) return false;
        if (!ids.add(light.lightId)) return false; // Not unique
        if (light.intensityLux <= 0) return false;
        if (light.coneAngleDegrees <= 0) return false;
        if (light.colorTemperatureKelvin < 1000) return false;
      }
    }
    return true;
  }
}
