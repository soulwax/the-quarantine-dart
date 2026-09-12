import 'package:quarantine/engine/math3.dart';
import 'package:quarantine/house/house.dart';

/// Audio bus categories for master mixdown gain staging.
enum AudioBusType {
  master,
  music,
  sfx,
  ambience,
  voice,
  radio,
}

/// Per-room reverberation and acoustic response parameters.
class RoomReverbProfile {
  final String roomId;
  final double rt60Seconds;
  final double wetDryMix;
  final double highFrequencyDamping;
  final double earlyReflectionsGain;

  const RoomReverbProfile({
    required this.roomId,
    required this.rt60Seconds,
    required this.wetDryMix,
    required this.highFrequencyDamping,
    required this.earlyReflectionsGain,
  });

  Map<String, dynamic> toJson() => {
        'roomId': roomId,
        'rt60Seconds': rt60Seconds,
        'wetDryMix': wetDryMix,
        'highFrequencyDamping': highFrequencyDamping,
        'earlyReflectionsGain': earlyReflectionsGain,
      };
}

/// Evaluated physical acoustic portal occlusion parameters.
class AcousticOcclusionResult {
  final double lowPassCutoffHz;
  final double attenuationDb;
  final double linearGain;
  final bool isDirectPath;

  const AcousticOcclusionResult({
    required this.lowPassCutoffHz,
    required this.attenuationDb,
    required this.linearGain,
    required this.isDirectPath,
  });

  Map<String, dynamic> toJson() => {
        'lowPassCutoffHz': lowPassCutoffHz,
        'attenuationDb': attenuationDb,
        'linearGain': linearGain,
        'isDirectPath': isDirectPath,
      };
}

/// Daily dynamic atmospheric sound cues.
class DailyAtmosphericSoundscape {
  final int dayIndex;
  final double windIntensity;
  final double chimneyWhistleGain;
  final double rainIntensity;
  final double distantChurchBellGain;
  final double streetCartClatterGain;
  final String primaryAcousticMood;

  const DailyAtmosphericSoundscape({
    required this.dayIndex,
    required this.windIntensity,
    required this.chimneyWhistleGain,
    required this.rainIntensity,
    required this.distantChurchBellGain,
    required this.streetCartClatterGain,
    required this.primaryAcousticMood,
  });

  Map<String, dynamic> toJson() => {
        'dayIndex': dayIndex,
        'windIntensity': windIntensity,
        'chimneyWhistleGain': chimneyWhistleGain,
        'rainIntensity': rainIntensity,
        'distantChurchBellGain': distantChurchBellGain,
        'streetCartClatterGain': streetCartClatterGain,
        'primaryAcousticMood': primaryAcousticMood,
      };
}

/// Master Acoustic Simulation & Spatial Mixdown Engine.
class MasterAcousticSimulator {
  /// Canonical per-room reverb profiles matching 1918 domestic materials.
  static final Map<String, RoomReverbProfile> roomReverbProfiles = {
    'hall': const RoomReverbProfile(
      roomId: 'hall',
      rt60Seconds: 1.1,
      wetDryMix: 0.25,
      highFrequencyDamping: 0.45,
      earlyReflectionsGain: 0.30,
    ),
    'living-room': const RoomReverbProfile(
      roomId: 'living-room',
      rt60Seconds: 0.45, // Wool rugs, upholstery damping
      wetDryMix: 0.15,
      highFrequencyDamping: 0.65,
      earlyReflectionsGain: 0.18,
    ),
    'kitchen': const RoomReverbProfile(
      roomId: 'kitchen',
      rt60Seconds: 0.85, // Range iron & scullery plaster
      wetDryMix: 0.22,
      highFrequencyDamping: 0.35,
      earlyReflectionsGain: 0.25,
    ),
    'cellar': const RoomReverbProfile(
      roomId: 'cellar',
      rt60Seconds: 1.85, // Cold bare stone slapback
      wetDryMix: 0.40,
      highFrequencyDamping: 0.20,
      earlyReflectionsGain: 0.45,
    ),
    'bedroom': const RoomReverbProfile(
      roomId: 'bedroom',
      rt60Seconds: 0.50, // Bed eiderdowns & wallpaper
      wetDryMix: 0.16,
      highFrequencyDamping: 0.60,
      earlyReflectionsGain: 0.20,
    ),
    'landing': const RoomReverbProfile(
      roomId: 'landing',
      rt60Seconds: 0.85,
      wetDryMix: 0.22,
      highFrequencyDamping: 0.40,
      earlyReflectionsGain: 0.28,
    ),
    'bathroom': const RoomReverbProfile(
      roomId: 'bathroom',
      rt60Seconds: 1.15, // Glazed sanitary tile flutter
      wetDryMix: 0.30,
      highFrequencyDamping: 0.18,
      earlyReflectionsGain: 0.35,
    ),
    'spare-room': const RoomReverbProfile(
      roomId: 'spare-room',
      rt60Seconds: 0.65, // Bare boards, sloped ceiling
      wetDryMix: 0.18,
      highFrequencyDamping: 0.50,
      earlyReflectionsGain: 0.22,
    ),
    'attic': const RoomReverbProfile(
      roomId: 'attic',
      rt60Seconds: 0.95, // Raw timber rafters and loft volume
      wetDryMix: 0.26,
      highFrequencyDamping: 0.30,
      earlyReflectionsGain: 0.30,
    ),
    'scullery': const RoomReverbProfile(
      roomId: 'scullery',
      rt60Seconds: 1.20, // Glazed ceramic tiles
      wetDryMix: 0.32,
      highFrequencyDamping: 0.15,
      earlyReflectionsGain: 0.38,
    ),
  };

  /// Calculates physical acoustic portal occlusion and low-pass filter cutoff
  /// between a sound source position and the listener.
  static AcousticOcclusionResult evaluateOcclusion({
    required House house,
    required String emitterRoomId,
    required String listenerRoomId,
    required Vec3 emitterPos,
    required Vec3 listenerPos,
  }) {
    // 1. Same room: Direct in-room acoustic path
    if (emitterRoomId == listenerRoomId) {
      return const AcousticOcclusionResult(
        lowPassCutoffHz: 20000.0,
        attenuationDb: 0.0,
        linearGain: 1.0,
        isDirectPath: true,
      );
    }

    // 2. Check portals connecting the two rooms
    final emitterRoom = house.byId(emitterRoomId);
    final listenerRoom = house.byId(listenerRoomId);

    if (emitterRoom == null || listenerRoom == null) {
      return const AcousticOcclusionResult(
        lowPassCutoffHz: 350.0,
        attenuationDb: -24.0,
        linearGain: 0.063,
        isDirectPath: false,
      );
    }

    // Find connecting portal
    final portal = house.portals.where((p) =>
        (p.a == emitterRoomId && p.b == listenerRoomId) ||
        (p.b == emitterRoomId && p.a == listenerRoomId)).firstOrNull;

    if (portal != null) {
      if (portal.open) {
        // Open doorway: Slight diffraction roll-off
        return const AcousticOcclusionResult(
          lowPassCutoffHz: 12000.0,
          attenuationDb: -2.5,
          linearGain: 0.75,
          isDirectPath: true,
        );
      } else {
        // Closed timber door: Strong high-frequency absorption
        return const AcousticOcclusionResult(
          lowPassCutoffHz: 750.0,
          attenuationDb: -12.0,
          linearGain: 0.251,
          isDirectPath: false,
        );
      }
    }

    // 3. No direct portal: Solid stone/brick wall occlusion
    return const AcousticOcclusionResult(
      lowPassCutoffHz: 350.0,
      attenuationDb: -24.0,
      linearGain: 0.063,
      isDirectPath: false,
    );
  }

  /// Calculates dynamic bus gain ducking during active voice / radio broadcast.
  static Map<AudioBusType, double> calculateBusGains({
    required bool isVoiceActive,
    required bool isRadioActive,
    double masterVolume = 1.0,
    double sfxVolume = 1.0,
    double ambienceVolume = 1.0,
    double musicVolume = 1.0,
    double voiceVolume = 1.0,
    double radioVolume = 1.0,
  }) {
    // Dynamic ducking attenuation
    double duckMultiplier = 1.0;
    if (isVoiceActive) {
      duckMultiplier = 0.55; // -5.2 dB ducking during threshold caller dialogue
    } else if (isRadioActive) {
      duckMultiplier = 0.70; // -3.1 dB ducking during radio status broadcasts
    }

    return {
      AudioBusType.master: masterVolume.clamp(0.0, 1.0),
      AudioBusType.music: (musicVolume * duckMultiplier).clamp(0.0, 1.0),
      AudioBusType.ambience: (ambienceVolume * duckMultiplier).clamp(0.0, 1.0),
      AudioBusType.sfx: sfxVolume.clamp(0.0, 1.0),
      AudioBusType.voice: voiceVolume.clamp(0.0, 1.0),
      AudioBusType.radio: radioVolume.clamp(0.0, 1.0),
    };
  }

  /// Evaluates 21-day historical atmospheric soundscape profile.
  static DailyAtmosphericSoundscape evaluateDailyAtmosphere(int day) {
    final d = day.clamp(1, 21);

    // Weather progression across November 1918 quarantine
    if (d >= 1 && d <= 3) {
      // Mild early autumn fog
      return DailyAtmosphericSoundscape(
        dayIndex: d,
        windIntensity: 0.20,
        chimneyWhistleGain: 0.15,
        rainIntensity: 0.10,
        distantChurchBellGain: 0.40,
        streetCartClatterGain: 0.35,
        primaryAcousticMood: 'Distant industrial hum and mild autumn damp',
      );
    } else if (d >= 4 && d <= 8) {
      // Northerly cold snap & rain
      return DailyAtmosphericSoundscape(
        dayIndex: d,
        windIntensity: 0.75,
        chimneyWhistleGain: 0.65,
        rainIntensity: 0.80,
        distantChurchBellGain: 0.15,
        streetCartClatterGain: 0.10,
        primaryAcousticMood: 'Heavy rain drumming on zinc roof and whistling flues',
      );
    } else if (d >= 9 && d <= 15) {
      // Sub-zero frost and silent street isolation
      return DailyAtmosphericSoundscape(
        dayIndex: d,
        windIntensity: 0.40,
        chimneyWhistleGain: 0.35,
        rainIntensity: 0.0,
        distantChurchBellGain: 0.50,
        streetCartClatterGain: 0.05,
        primaryAcousticMood: 'Freezing timber creaks and solemn distant church tolls',
      );
    } else {
      // Late quarantine thaw & distant factory bells (Armistice eve)
      return DailyAtmosphericSoundscape(
        dayIndex: d,
        windIntensity: 0.30,
        chimneyWhistleGain: 0.20,
        rainIntensity: 0.30,
        distantChurchBellGain: 0.70,
        streetCartClatterGain: 0.45,
        primaryAcousticMood: 'Distant church bells ringing out across the valley',
      );
    }
  }

  /// Self-validation method for audio test suites.
  static bool validate({House? house}) {
    if (house != null) {
      final inRoom = evaluateOcclusion(
        house: house,
        emitterRoomId: 'hall',
        listenerRoomId: 'hall',
        emitterPos: Vec3(11, 1, 2),
        listenerPos: Vec3(12, 1, 3),
      );
      if (!inRoom.isDirectPath || inRoom.lowPassCutoffHz < 19000.0) return false;

      final hallLivingPortal = house.portals.firstWhere((p) =>
          (p.a == 'hall' && p.b == 'living-room') || (p.b == 'hall' && p.a == 'living-room'));
      hallLivingPortal.open = false;

      final closedDoor = evaluateOcclusion(
        house: house,
        emitterRoomId: 'hall',
        listenerRoomId: 'living-room',
        emitterPos: Vec3(11, 1, 2),
        listenerPos: Vec3(3, 1, 2),
      );
      if (closedDoor.isDirectPath || closedDoor.lowPassCutoffHz > 800.0) return false;
    }

    // Ducking test
    final ducked = calculateBusGains(isVoiceActive: true, isRadioActive: false);
    if ((ducked[AudioBusType.ambience] ?? 1.0) >= 0.9) return false;

    // Daily atmosphere test
    final stormDay = evaluateDailyAtmosphere(6);
    if (stormDay.rainIntensity < 0.5) return false;

    return true;
  }
}
