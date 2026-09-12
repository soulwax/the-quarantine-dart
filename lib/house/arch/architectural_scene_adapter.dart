import 'dart:math' as math;
import 'dart:typed_data';

import '../../engine/material_family_library.dart';
import '../../engine/math3.dart';
import '../bedroom_furnishing_manifest.dart';
import '../cellar_furnishing_manifest.dart';
import '../collision.dart';
import '../hall_furnishing_manifest.dart';
import '../house.dart';
import '../kitchen_furnishing_manifest.dart';
import '../living_room_furnishing_manifest.dart';
import '../upper_and_service_rooms_manifest.dart';
import 'house_architect.dart';
import 'house_model_catalog.dart';
import 'mesh_builder.dart';

/// Renderable 3D representation of an architectural model or procedural prop placement.
final class ArchitecturalRenderableItem {
  final String id;
  final String roomId;
  final ModelCatalogEntry? catalogEntry;
  final Vec3 worldPosition;
  final double rotationYDegrees;
  final Vec3 scale;
  final String materialKey;
  final Float32List vertices;
  final bool isInteractive;
  final double collisionRadius;
  final double collisionHeight;
  final String? interactiveTag;
  final MaterialDescriptor? material;

  const ArchitecturalRenderableItem({
    required this.id,
    required this.roomId,
    this.catalogEntry,
    required this.worldPosition,
    required this.rotationYDegrees,
    required this.scale,
    required this.materialKey,
    required this.vertices,
    this.isInteractive = false,
    this.collisionRadius = 0.25,
    this.collisionHeight = 1.0,
    this.interactiveTag,
    this.material,
  });
}

/// Unified architectural scene adapter emitting both catalog-model and procedural-prop
/// visual items and physical collision hulls.
class ArchitecturalSceneAdapter {
  const ArchitecturalSceneAdapter();

  static const ArchitecturalSceneAdapter instance = ArchitecturalSceneAdapter();
  static final MaterialFamilyLibrary _materialLibrary = MaterialFamilyLibrary();

  /// Unmigrated legacy props from rooms whose authorities have not yet migrated to placements.json.
  static List<PropPlacement> get remainingLegacyProps => [
    ...KitchenFurnishingManifest.props,
    ...LivingRoomFurnishingManifest.props,
    ...CellarFurnishingManifest.props,
    ...BedroomFurnishingManifest.props,
    ...UpperAndServiceRoomsManifest.landingProps,
    ...UpperAndServiceRoomsManifest.bathroomProps,
    ...UpperAndServiceRoomsManifest.spareRoomProps,
  ];

  static String normalizeRoomId(String roomId) => switch (roomId) {
    'living_room' || 'livingRoom' => 'living-room',
    'spare_room' || 'spareRoom' => 'spare-room',
    'cellar_service' => 'cellar',
    _ => roomId,
  };

  /// Converts all placed model instances and procedural props in [house] into renderable 3D items.
  List<ArchitecturalRenderableItem> generateSceneItems(House house) {
    final plan = house.architecturalPlan;
    final items = <ArchitecturalRenderableItem>[];

    for (final program in plan.programs.values) {
      for (var i = 0; i < program.modelInstances.length; i++) {
        final instance = program.modelInstances[i];
        if (instance.isProcedural) {
          final matFamily = instance.materialFamily ?? 'mat-wood-oak';
          final material = _materialLibrary.getMaterial(matFamily) ??
              const MaterialDescriptor(
                id: 'fallback-mat',
                family: MaterialFamily.wood,
                textureKey: 'wood-oak',
                tintR: 0.6,
                tintG: 0.5,
                tintB: 0.4,
                roughness: 0.6,
              );
          final mesh = _synthesizeProceduralMesh(instance, material);
          items.add(
            ArchitecturalRenderableItem(
              id: 'arch:${program.roomId}:${instance.instanceId}',
              roomId: program.roomId,
              catalogEntry: null,
              worldPosition: instance.worldPosition,
              rotationYDegrees: instance.rotationYDegrees,
              scale: instance.effectiveScale,
              materialKey: matFamily,
              vertices: mesh,
              isInteractive: instance.interactiveTag != null,
              collisionRadius: instance.collisionRadius,
              collisionHeight: instance.collisionHeight,
              interactiveTag: instance.interactiveTag,
              material: material,
            ),
          );
        } else {
          final entry = instance.catalogEntry;
          if (entry == null) continue;
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
              isInteractive: instance.interactiveTag != null,
              collisionRadius: instance.collisionRadius,
              collisionHeight: instance.collisionHeight,
              interactiveTag: instance.interactiveTag,
            ),
          );
        }
      }
    }

    // Include remaining legacy room props until HA-03 completes their migration to data
    for (final prop in remainingLegacyProps) {
      final normalizedId = normalizeRoomId(prop.roomId);
      final room = house.byId(normalizedId);
      if (room == null) continue;

      final size = house.effectiveSize(room);
      final roomCenter = Vec3(
        room.origin.x + size.x * 0.5,
        room.origin.y,
        room.origin.z + size.z * 0.5,
      );

      final worldPos = Vec3(
        roomCenter.x + prop.positionX,
        roomCenter.y + prop.positionY,
        roomCenter.z + prop.positionZ,
      );

      final material = _materialLibrary.getMaterial(prop.materialFamily) ??
          const MaterialDescriptor(
            id: 'fallback-mat',
            family: MaterialFamily.wood,
            textureKey: 'wood-oak',
            tintR: 0.6,
            tintG: 0.5,
            tintB: 0.4,
            roughness: 0.6,
          );

      final mesh = _synthesizePropMesh(prop, material);

      items.add(
        ArchitecturalRenderableItem(
          id: 'furnishing:${prop.propId}',
          roomId: normalizedId,
          catalogEntry: null,
          worldPosition: worldPos,
          rotationYDegrees: prop.rotationYDegrees,
          scale: Vec3(prop.scaleUniform, prop.scaleUniform, prop.scaleUniform),
          materialKey: prop.materialFamily,
          vertices: mesh,
          isInteractive: prop.isInteractive,
          collisionRadius: prop.collisionRadiusM,
          collisionHeight: prop.collisionHeightM,
          material: material,
        ),
      );
    }

    return items;
  }

  /// Synthesizes authoritative physical collision hulls for all solid furnishings.
  List<ArchitecturalCollisionHull> buildCollisionHulls(House house) {
    final hulls = <ArchitecturalCollisionHull>[];

    // 1. Placements from architectural plan (both catalog models and procedural props)
    final plan = house.architecturalPlan;
    for (final program in plan.programs.values) {
      for (final instance in program.modelInstances) {
        if (instance.collisionRadius < 0.18 || instance.collisionHeight < 0.25) continue;
        final r = instance.collisionRadius * instance.effectiveScale.x;
        final h = instance.collisionHeight * instance.effectiveScale.y;
        final pos = instance.worldPosition;

        hulls.add(
          ArchitecturalCollisionHull(
            id: 'arch-hull:${instance.instanceId}',
            roomId: program.roomId,
            kind: CollisionHullKind.obstacleBox,
            min: Vec3(pos.x - r, pos.y, pos.z - r),
            max: Vec3(pos.x + r, pos.y + h, pos.z + r),
          ),
        );
      }
    }

    // 2. Remaining legacy room props
    for (final prop in remainingLegacyProps) {
      if (prop.collisionRadiusM < 0.18 || prop.collisionHeightM < 0.25) continue;

      final normalizedId = normalizeRoomId(prop.roomId);
      final room = house.byId(normalizedId);
      if (room == null) continue;

      final size = house.effectiveSize(room);
      final roomCenter = Vec3(
        room.origin.x + size.x * 0.5,
        room.origin.y,
        room.origin.z + size.z * 0.5,
      );

      final worldPos = Vec3(
        roomCenter.x + prop.positionX,
        roomCenter.y + prop.positionY,
        roomCenter.z + prop.positionZ,
      );

      final r = prop.collisionRadiusM * prop.scaleUniform;
      final h = prop.collisionHeightM * prop.scaleUniform;

      hulls.add(
        ArchitecturalCollisionHull(
          id: 'prop-hull:${prop.propId}',
          roomId: normalizedId,
          kind: CollisionHullKind.obstacleBox,
          min: Vec3(worldPos.x - r, worldPos.y, worldPos.z - r),
          max: Vec3(worldPos.x + r, worldPos.y + h, worldPos.z + r),
        ),
      );
    }

    return hulls;
  }

  Float32List _synthesizeProceduralMesh(
    ArchitecturalModelInstance instance,
    MaterialDescriptor material,
  ) {
    final builder = ArchMeshBuilder();
    final r = math.max(0.04, instance.collisionRadius);
    final h = math.max(0.04, instance.collisionHeight);

    final rInt = (material.tintR * 255).clamp(0, 255).toInt();
    final gInt = (material.tintG * 255).clamp(0, 255).toInt();
    final bInt = (material.tintB * 255).clamp(0, 255).toInt();
    final rgb = (rInt << 16) | (gInt << 8) | bInt;

    final min = Vec3(-r, 0, -r);
    final max = Vec3(r, h, r);
    builder.box(min, max, rgb, alpha: material.alpha);

    return builder.build();
  }

  Float32List _synthesizePropMesh(
    PropPlacement prop,
    MaterialDescriptor material,
  ) {
    final builder = ArchMeshBuilder();
    final r = math.max(0.04, prop.collisionRadiusM);
    final h = math.max(0.04, prop.collisionHeightM);

    final rInt = (material.tintR * 255).clamp(0, 255).toInt();
    final gInt = (material.tintG * 255).clamp(0, 255).toInt();
    final bInt = (material.tintB * 255).clamp(0, 255).toInt();
    final rgb = (rInt << 16) | (gInt << 8) | bInt;

    final min = Vec3(-r, 0, -r);
    final max = Vec3(r, h, r);
    builder.box(min, max, rgb, alpha: material.alpha);

    return builder.build();
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
