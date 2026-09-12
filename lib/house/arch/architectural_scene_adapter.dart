import 'dart:typed_data';

import '../../engine/math3.dart';
import '../house.dart';
import 'house_architect.dart';
import 'house_model_catalog.dart';
import 'mesh_builder.dart';

/// Renderable 3D representation of an architectural model placement for the scene renderer.
final class ArchitecturalRenderableItem {
  final String id;
  final String roomId;
  final ModelCatalogEntry catalogEntry;
  final Vec3 worldPosition;
  final double rotationYDegrees;
  final Vec3 scale;
  final String materialKey;
  final Float32List vertices;

  const ArchitecturalRenderableItem({
    required this.id,
    required this.roomId,
    required this.catalogEntry,
    required this.worldPosition,
    required this.rotationYDegrees,
    required this.scale,
    required this.materialKey,
    required this.vertices,
  });
}

/// Adapts the architectural layout plan produced by [HouseArchitect] into
/// renderer-neutral renderable items for Pixeldart.
class ArchitecturalSceneAdapter {
  const ArchitecturalSceneAdapter();

  static const ArchitecturalSceneAdapter instance = ArchitecturalSceneAdapter();

  /// Converts all placed model instances in [house] into renderable 3D items.
  List<ArchitecturalRenderableItem> generateSceneItems(House house) {
    final plan = house.architecturalPlan;
    final items = <ArchitecturalRenderableItem>[];

    for (final program in plan.programs.values) {
      for (var i = 0; i < program.modelInstances.length; i++) {
        final instance = program.modelInstances[i];
        final entry = instance.catalogEntry;
        final mesh = _generateModelProxyMesh(entry);
        final materialKey = _selectMaterialForModel(entry);

        items.add(
          ArchitecturalRenderableItem(
            id: 'arch:${program.roomId}:${entry.id}:$i',
            roomId: program.roomId,
            catalogEntry: entry,
            worldPosition: instance.worldPosition,
            rotationYDegrees: instance.rotationYDegrees,
            scale: instance.effectiveScale,
            materialKey: materialKey,
            vertices: mesh,
          ),
        );
      }
    }

    return items;
  }

  /// Synthesizes detailed bounding geometry matching the model catalog envelope.
  Float32List _generateModelProxyMesh(ModelCatalogEntry entry) {
    final builder = ArchMeshBuilder();
    final hw = entry.width * 0.5;
    final hh = entry.height;
    final hd = entry.depth * 0.5;

    final rgb = _colorForCategory(entry.category);

    // Centered base box
    builder.box(
      Vec3(-hw, 0, -hd),
      Vec3(hw, hh, hd),
      rgb,
    );

    // Distinctive top trim / detail box
    builder.box(
      Vec3(-hw * 0.85, hh * 0.9, -hd * 0.85),
      Vec3(hw * 0.85, hh, hd * 0.85),
      _tint(rgb, 1.2),
    );

    return builder.build();
  }

  int _colorForCategory(String category) => switch (category) {
    'living' => 0x5C4A3A, // Walnut timber
    'storage' => 0x6E5642, // Medium oak
    'lighting' => 0xA88B4D, // Antique brass
    'kitchen' => 0x7E7B78, // Cast steel / enamel
    'service' => 0x484B4E, // Iron
    'attic' => 0x58483B, // Aged softwood
    'cellar' => 0x4B3B2E, // Damp cellar oak
    'utility' => 0x6B7075, // Galvanized metal
    'roof' => 0x3E4248, // Welsh slate
    _ => 0x555555,
  };

  int _tint(int rgb, double factor) {
    final r = (((rgb >> 16) & 0xff) * factor).clamp(0, 255).toInt();
    final g = (((rgb >> 8) & 0xff) * factor).clamp(0, 255).toInt();
    final b = ((rgb & 0xff) * factor).clamp(0, 255).toInt();
    return (r << 16) | (g << 8) | b;
  }

  String _selectMaterialForModel(ModelCatalogEntry entry) => switch (entry.category) {
    'roof' => 'polyhaven-roof-slates',
    'cellar' => 'polyhaven-damp-brick',
    'attic' => 'polyhaven-rough-wood',
    _ => 'polyhaven-rough-wood',
  };
}
