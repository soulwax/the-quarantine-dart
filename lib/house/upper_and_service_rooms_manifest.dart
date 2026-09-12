/// Manifest for upper and service rooms (Landing, Bathroom, Spare Room).
library upper_and_service_rooms_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Class defining the manifest for upper and service rooms.
class UpperAndServiceRoomsManifest {
  /// All props with authored placements in the landing.
  /// Landing placements have been migrated to assets/house/placements.json (HA-03).
  static const List<PropPlacement> landingProps = [];

  /// All props with authored placements in the bathroom.
  /// Bathroom placements have been migrated to assets/house/placements.json (HA-03).
  static const List<PropPlacement> bathroomProps = [];

  /// All props with authored placements in the spare room.
  /// Spare room placements have been migrated to assets/house/placements.json (HA-03).
  static const List<PropPlacement> spareRoomProps = [];

  /// Gets all props for all upper and service rooms.
  static List<PropPlacement> get allProps => [
        ...landingProps,
        ...bathroomProps,
        ...spareRoomProps,
      ];

  /// Finds a prop placement by its unique ID across all upper and service rooms.
  static PropPlacement? findProp(String propId) {
    for (final prop in allProps) {
      if (prop.propId == propId) return prop;
    }
    return null;
  }

  /// Returns only the interactive props for these rooms.
  static List<PropPlacement> interactiveProps() {
    return allProps.where((p) => p.isInteractive).toList();
  }

  /// Returns the full manifest as diagnostics JSON.
  static Map<String, dynamic> toJson() {
    return {
      'landingProps': landingProps.map((p) => p.toJson()).toList(),
      'bathroomProps': bathroomProps.map((p) => p.toJson()).toList(),
      'spareRoomProps': spareRoomProps.map((p) => p.toJson()).toList(),
    };
  }

  /// Validates the manifest props.
  static bool validate() {
    final library = MaterialFamilyLibrary();
    final ids = <String>{};

    for (final prop in allProps) {
      if (prop.propId.isEmpty) return false;
      if (!ids.add(prop.propId)) return false; // Not unique
      if (prop.collisionRadiusM <= 0) return false;
      if (prop.collisionHeightM <= 0) return false;
      if (library.getMaterial(prop.materialFamily) == null) return false;
    }

    return true;
  }
}
