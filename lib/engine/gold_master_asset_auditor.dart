import 'package:quarantine/house/hall_furnishing_manifest.dart';
import 'package:quarantine/house/arch/placement_manifest.dart';
import 'package:quarantine/house/kitchen_furnishing_manifest.dart';
import 'package:quarantine/house/living_room_furnishing_manifest.dart';
import 'package:quarantine/house/cellar_furnishing_manifest.dart';
import 'package:quarantine/house/bedroom_furnishing_manifest.dart';
import 'package:quarantine/house/upper_and_service_rooms_manifest.dart';
import 'package:quarantine/house/per_room_lighting_rigs.dart';
import 'package:quarantine/house/surface_detail_history_pass.dart';
import 'package:quarantine/engine/master_acoustic_simulator.dart';
import 'package:quarantine/story/narrative_truth_ledger.dart';
import 'package:quarantine/story/narrative_encounter_director.dart';
import 'package:quarantine/story/ending_texture_synthesizer.dart';
import 'package:quarantine/story/narrative_state.dart';

/// Report of Gold Master Asset Audit.
class ProductionAuditReport {
  final bool roomManifestsVerified;
  final int totalPropsAudited;
  final bool characterSheetsVerified;
  final bool narrativeMatrixVerified;
  final bool lightingRigsVerified;
  final bool audioMixdownVerified;
  final bool allChecksPass;
  final String diagnostic;

  const ProductionAuditReport({
    required this.roomManifestsVerified,
    required this.totalPropsAudited,
    required this.characterSheetsVerified,
    required this.narrativeMatrixVerified,
    required this.lightingRigsVerified,
    required this.audioMixdownVerified,
    required this.allChecksPass,
    required this.diagnostic,
  });

  Map<String, dynamic> toJson() => {
        'roomManifestsVerified': roomManifestsVerified,
        'totalPropsAudited': totalPropsAudited,
        'characterSheetsVerified': characterSheetsVerified,
        'narrativeMatrixVerified': narrativeMatrixVerified,
        'lightingRigsVerified': lightingRigsVerified,
        'audioMixdownVerified': audioMixdownVerified,
        'allChecksPass': allChecksPass,
        'diagnostic': diagnostic,
      };
}

/// Gold Master Asset & System Auditor.
class ProductionAssetAuditor {
  /// Runs a comprehensive audit of all game systems, assets, and manifests.
  static ProductionAuditReport runAudit() {
    // 1. Audit Room Manifests & Props
    final hallValid = HallFurnishingManifest.validate();
    final kitchenValid = KitchenFurnishingManifest.validate();
    final livingValid = LivingRoomFurnishingManifest.validate();
    final cellarValid = CellarFurnishingManifest.validate();
    final bedroomValid = BedroomFurnishingManifest.validate();
    final upperValid = UpperAndServiceRoomsManifest.validate();

    final roomManifestsVerified = hallValid && kitchenValid && livingValid && cellarValid && bedroomValid && upperValid;

    final totalProps = HousePlacementsManifest.canonical.placements.length +
        HallFurnishingManifest.props.length +
        KitchenFurnishingManifest.props.length +
        LivingRoomFurnishingManifest.props.length +
        CellarFurnishingManifest.props.length +
        BedroomFurnishingManifest.props.length +
        UpperAndServiceRoomsManifest.landingProps.length +
        UpperAndServiceRoomsManifest.bathroomProps.length +
        UpperAndServiceRoomsManifest.spareRoomProps.length;

    // 2. Audit Narrative & Character Sheets
    final characterSheetsVerified = NarrativeTruthLedger.characterSheets.length >= 4;

    final testState = NarrativeState();
    final director = NarrativeEncounterDirector(state: testState);
    var matrixValid = true;
    for (var day = 1; day <= 21; day++) {
      final enc = director.resolveEncounter(day);
      if (enc == null || enc.choices.length < 2) {
        matrixValid = false;
        break;
      }
    }
    final endingSynth = EndingTextureSynthesizer(state: testState);
    final narrativeMatrixVerified = matrixValid && endingSynth.synthesizeEnding().closingTextureText.isNotEmpty;

    // 3. Audit Lighting & Surface Detail
    final lightingRigsVerified = PerRoomLightingRigs.validate() && SurfaceDetailHistoryPass.validate();

    // 5. Audit Master Audio Mixdown
    final audioMixdownVerified = MasterAcousticSimulator.validate();

    final allReady = roomManifestsVerified &&
        characterSheetsVerified &&
        narrativeMatrixVerified &&
        lightingRigsVerified &&
        audioMixdownVerified;

    final diag = allReady
        ? 'content and capability checks passed; human release review remains required.'
        : 'one or more content or capability checks failed.';

    return ProductionAuditReport(
      roomManifestsVerified: roomManifestsVerified,
      totalPropsAudited: totalProps,
      characterSheetsVerified: characterSheetsVerified,
      narrativeMatrixVerified: narrativeMatrixVerified,
      lightingRigsVerified: lightingRigsVerified,
      audioMixdownVerified: audioMixdownVerified,
      allChecksPass: allReady,
      diagnostic: diag,
    );
  }

  /// Self-validation for unit tests.
  static bool validate() {
    final report = runAudit();
    return report.allChecksPass && report.totalPropsAudited >= 40;
  }
}
