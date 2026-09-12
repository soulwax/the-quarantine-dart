import '../house.dart';
import '../room.dart';
import '../../engine/master_acoustic_simulator.dart';
import '../../engine/math3.dart';

/// Evaluates architectural room acoustic profiles from physical room dimensions
/// and surface absorption characteristics.
class RoomAcousticProfileCalculator {
  /// Computes the architectural absorption coefficient based on surface material.
  static double absorptionForMaterial(String material) {
    final m = material.toLowerCase();
    if (m.contains('concrete') || m.contains('stone') || m.contains('damp')) return 0.03;
    if (m.contains('tile')) return 0.025;
    if (m.contains('wood') || m.contains('parquet')) return 0.12;
    if (m.contains('linoleum')) return 0.05;
    if (m.contains('plaster')) return 0.04;
    if (m.contains('wallpaper')) return 0.08;
    return 0.06;
  }

  /// Domestic furnishing absorption (metric sabins) contributed by room dressing.
  static double furnishingAbsorption(String roomId) => switch (roomId) {
    'living-room' => 8.5, // Wool hearthrug, Chesterfield sofa, heavy curtains
    'bedroom' => 6.5, // Bed eiderdown, mattress, wardrobe
    'kitchen' => 3.2, // Worktable, larder pantry, timber chair
    'cellar' => 0.8, // Bare stone, coal heap
    'bathroom' => 0.5, // Glazed enamel bath, porcelain basin
    'hall' => 2.5, // Runner rug, coat rack
    'landing' => 1.8, // Runner end, balustrade
    'spare-room' => 3.0, // Sheeted furniture, travel trunk
    _ => 2.0,
  };

  /// Computes the physical Sabine RT60 reverberation profile for [room].
  static RoomReverbProfile calculateProfile(House house, Room room) {
    // Normalizes spacious house scale (2.25x) to domestic physical meters
    const scale = 2.25;
    final size = Vec3(room.size.x / scale, room.size.y / scale, room.size.z / scale);
    final volume = size.x * size.y * size.z;
    final floorArea = size.x * size.z;
    final ceilArea = size.x * size.z;
    final wallArea = 2 * (size.x * size.y + size.z * size.y);
    final totalArea = floorArea + ceilArea + wallArea;

    final floorAlpha = absorptionForMaterial(room.surfaceFloor);
    final ceilAlpha = absorptionForMaterial(room.surfaceCeiling);
    final wallAlpha = absorptionForMaterial(room.surfaceWall);

    final surfacesAbsorption =
        floorArea * floorAlpha + ceilArea * ceilAlpha + wallArea * wallAlpha;
    final totalAbsorption = surfacesAbsorption + furnishingAbsorption(room.id);
    final avgAlpha = totalAbsorption / totalArea;

    // Sabine formula: RT60 = 0.161 * V / A
    final rt60 = (0.161 * volume / totalAbsorption).clamp(0.35, 2.2).toDouble();

    // Wet/dry mix proportional to RT60
    final wetDry = (rt60 / 3.0).clamp(0.12, 0.45).toDouble();

    // High frequency damping higher for soft materials, lower for hard tiles/stone
    final damping = (1.0 - avgAlpha * 2.0).clamp(0.15, 0.70).toDouble();

    // Early reflections gain based on mean free path
    final earlyRefl = (0.45 - avgAlpha * 0.5).clamp(0.15, 0.50).toDouble();

    return RoomReverbProfile(
      roomId: room.id,
      rt60Seconds: rt60,
      wetDryMix: wetDry,
      highFrequencyDamping: damping,
      earlyReflectionsGain: earlyRefl,
    );
  }

  /// Evaluates profiles for all rooms in [house].
  static Map<String, RoomReverbProfile> calculateAllProfiles(House house) {
    final map = <String, RoomReverbProfile>{};
    for (final room in house.rooms) {
      map[room.id] = calculateProfile(house, room);
    }
    return Map.unmodifiable(map);
  }
}
