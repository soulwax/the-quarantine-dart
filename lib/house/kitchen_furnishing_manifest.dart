/// Manifest for kitchen furnishing props.
library kitchen_furnishing_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Enum representing the available props in the kitchen.
enum KitchenProp {
  /// Plate rack prop.
  plateRack,
  /// Enamel sink prop.
  enamelSink,
  /// Gas cooker prop.
  gasCooker,
  /// Scrubbed table prop.
  scrubbedTable,
  /// Chair 1 prop.
  chair1,
  /// Chair 2 prop.
  chair2,
  /// Tea caddy prop.
  teaCaddy,
  /// Bread bin prop.
  breadBin,
  /// Wall clock prop.
  wallClock,
  /// Roller towel prop.
  rollerTowel,
}

/// Class defining the kitchen furnishing manifest.
class KitchenFurnishingManifest {
  /// All props with authored placements in the kitchen.
  /// Kitchen placements have been migrated to assets/house/placements.json (HA-03).
  static const List<PropPlacement> props = [];

  /// Finds a prop placement by its unique ID.
  static PropPlacement? findProp(String propId) {
    for (final prop in props) {
      if (prop.propId == propId) return prop;
    }
    return null;
  }

  /// Returns only the interactive props.
  static List<PropPlacement> interactiveProps() {
    return props.where((p) => p.isInteractive).toList();
  }

  /// Returns the full manifest as diagnostics JSON.
  static Map<String, dynamic> toJson() {
    return {
      'props': props.map((p) => p.toJson()).toList(),
    };
  }

  /// Validates the manifest props.
  static bool validate() {
    final library = MaterialFamilyLibrary();
    final ids = <String>{};

    for (final prop in props) {
      if (prop.propId.isEmpty) return false;
      if (!ids.add(prop.propId)) return false; // Not unique
      if (prop.collisionRadiusM <= 0) return false;
      if (prop.collisionHeightM <= 0) return false;
      if (library.getMaterial(prop.materialFamily) == null) return false;
    }

    return true;
  }
}
