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
import 'mesh_builder.dart';

/// Single visual item representing an authored furnishing prop.
class FurnishingSceneItem {
  final String propId;
  final String roomId;
  final String displayName;
  final Vec3 worldPosition;
  final double rotationYDegrees;
  final double scaleUniform;
  final Float32List meshVertices;
  final MaterialDescriptor material;
  final bool isInteractive;
  final double collisionRadiusM;
  final double collisionHeightM;

  const FurnishingSceneItem({
    required this.propId,
    required this.roomId,
    required this.displayName,
    required this.worldPosition,
    required this.rotationYDegrees,
    required this.scaleUniform,
    required this.meshVertices,
    required this.material,
    required this.isInteractive,
    required this.collisionRadiusM,
    required this.collisionHeightM,
  });
}

/// Bridges all 53 authored furnishing manifest props into Pixeldart retained
/// items and authoritative physical collision hulls.
class FurnishingSceneAdapter {
  static final MaterialFamilyLibrary _materialLibrary = MaterialFamilyLibrary();

  /// Retrieves all authored prop placements across all room manifests.
  static List<PropPlacement> get allProps => [
    ...HallFurnishingManifest.props,
    ...KitchenFurnishingManifest.props,
    ...LivingRoomFurnishingManifest.props,
    ...CellarFurnishingManifest.props,
    ...BedroomFurnishingManifest.props,
    ...UpperAndServiceRoomsManifest.landingProps,
    ...UpperAndServiceRoomsManifest.bathroomProps,
    ...UpperAndServiceRoomsManifest.spareRoomProps,
  ];

  /// Normalizes room IDs between camelCase, snake_case, and canonical kebab-case.
  static String normalizeRoomId(String roomId) => switch (roomId) {
    'living_room' || 'livingRoom' => 'living-room',
    'spare_room' || 'spareRoom' => 'spare-room',
    'cellar_service' => 'cellar',
    _ => roomId,
  };

  /// Builds renderable scene items for all 53 props in [house].
  static List<FurnishingSceneItem> buildFurnishings(House house) {
    final items = <FurnishingSceneItem>[];

    for (final prop in allProps) {
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

      final mesh = _synthesizePropMesh(prop, worldPos, material);

      items.add(
        FurnishingSceneItem(
          propId: prop.propId,
          roomId: normalizedId,
          displayName: prop.displayName,
          worldPosition: worldPos,
          rotationYDegrees: prop.rotationYDegrees,
          scaleUniform: prop.scaleUniform,
          meshVertices: mesh,
          material: material,
          isInteractive: prop.isInteractive,
          collisionRadiusM: prop.collisionRadiusM,
          collisionHeightM: prop.collisionHeightM,
        ),
      );
    }

    return items;
  }

  /// Synthesizes authoritative physical collision hulls for all solid and
  /// interactive furnishings.
  static List<ArchitecturalCollisionHull> buildCollisionHulls(House house) {
    final hulls = <ArchitecturalCollisionHull>[];

    for (final prop in allProps) {
      // Only props with meaningful floor footprint generate physical hulls
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

  static Float32List _synthesizePropMesh(
    PropPlacement prop,
    Vec3 worldPos,
    MaterialDescriptor material,
  ) {
    final builder = ArchMeshBuilder();
    final r = math.max(0.04, prop.collisionRadiusM * prop.scaleUniform);
    final h = math.max(0.04, prop.collisionHeightM * prop.scaleUniform);

    final rInt = (material.tintR * 255).clamp(0, 255).toInt();
    final gInt = (material.tintG * 255).clamp(0, 255).toInt();
    final bInt = (material.tintB * 255).clamp(0, 255).toInt();
    final rgb = (rInt << 16) | (gInt << 8) | bInt;

    // Emits an oriented bounding box for the prop
    final min = Vec3(worldPos.x - r, worldPos.y, worldPos.z - r);
    final max = Vec3(worldPos.x + r, worldPos.y + h, worldPos.z + r);
    builder.box(min, max, rgb, alpha: material.alpha);

    return builder.build();
  }
}
