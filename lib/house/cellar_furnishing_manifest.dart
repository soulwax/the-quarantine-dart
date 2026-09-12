/// Manifest for cellar furnishing props.
library cellar_furnishing_manifest;

import 'package:quarantine/engine/material_family_library.dart';
import 'package:quarantine/house/hall_furnishing_manifest.dart';

/// Enum representing the available props in the cellar.
enum CellarProp {
  coalHeap,
  preservingJars,
  mangle,
  bareBulb,
  ventilationGrille,
  meterCupboard,
}

/// Class defining the cellar furnishing manifest.
class CellarFurnishingManifest {
  /// All props with authored placements in the cellar.
  /// Cellar placements have been migrated to assets/house/placements.json (HA-03).
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
