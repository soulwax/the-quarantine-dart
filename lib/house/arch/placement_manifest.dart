import 'dart:convert';

import '../../engine/math3.dart';
import '../house.dart';
import 'house_architect.dart';
import 'house_model_catalog.dart';

final class PlacementRecord {
  final String instanceId;
  final String roomId;
  final String source;
  final String? modelId;
  final String? propKind;
  final String? materialFamily;
  final Vec3 position;
  final double rotationY;
  final Vec3 scale;
  final FunctionalZone zone;
  final double collisionRadius;
  final double collisionHeight;
  final String visibilityLayer;
  final String? interactiveTag;
  final String? canonicalPropId;
  final bool pickable;

  const PlacementRecord({
    required this.instanceId,
    required this.roomId,
    required this.source,
    this.modelId,
    this.propKind,
    this.materialFamily,
    required this.position,
    required this.rotationY,
    required this.scale,
    required this.zone,
    required this.collisionRadius,
    required this.collisionHeight,
    required this.visibilityLayer,
    this.interactiveTag,
    this.canonicalPropId,
    this.pickable = false,
  });

  factory PlacementRecord.fromJson(Map<String, dynamic> json) {
    final posRaw = json['position'] as List? ?? [0.0, 0.0, 0.0];
    final scaleRaw = json['scale'] as List? ?? [1.0, 1.0, 1.0];
    final colRaw = json['collision'] as Map<String, dynamic>? ?? const {};

    final zoneStr = json['zone'] as String? ?? 'circulation';
    final zone = switch (zoneStr) {
      'circulation' => FunctionalZone.circulation,
      'focal' => FunctionalZone.focal,
      'conversational' || 'seating' => FunctionalZone.conversational,
      'media' => FunctionalZone.media,
      'culinary' || 'cooking' || 'dining' => FunctionalZone.culinary,
      'sanitary' || 'hygiene' => FunctionalZone.sanitary,
      'sleeping' || 'sleep' => FunctionalZone.sleeping,
      'work' => FunctionalZone.work,
      'storage' => FunctionalZone.storage,
      'utility' => FunctionalZone.utility,
      _ => FunctionalZone.circulation,
    };

    return PlacementRecord(
      instanceId: json['instanceId'] as String,
      roomId: json['roomId'] as String,
      source: json['source'] as String? ?? 'catalog',
      modelId: json['modelId'] as String?,
      propKind: json['propKind'] as String?,
      materialFamily: json['materialFamily'] as String?,
      position: Vec3(
        (posRaw[0] as num).toDouble(),
        (posRaw[1] as num).toDouble(),
        (posRaw[2] as num).toDouble(),
      ),
      rotationY: (json['rotationY'] as num?)?.toDouble() ?? 0.0,
      scale: Vec3(
        (scaleRaw[0] as num).toDouble(),
        (scaleRaw[1] as num).toDouble(),
        (scaleRaw[2] as num).toDouble(),
      ),
      zone: zone,
      collisionRadius: (colRaw['radius'] as num?)?.toDouble() ?? 0.25,
      collisionHeight: (colRaw['height'] as num?)?.toDouble() ?? 1.0,
      visibilityLayer: json['visibilityLayer'] as String? ?? 'furniture',
      interactiveTag: json['interactiveTag'] as String?,
      canonicalPropId: json['canonicalPropId'] as String?,
      pickable: json['pickable'] as bool? ?? false,
    );
  }

  Map<String, dynamic> toJson() => {
    'instanceId': instanceId,
    'roomId': roomId,
    'source': source,
    if (modelId != null) 'modelId': modelId,
    if (propKind != null) 'propKind': propKind,
    if (materialFamily != null) 'materialFamily': materialFamily,
    'position': [position.x, position.y, position.z],
    'rotationY': rotationY,
    'scale': [scale.x, scale.y, scale.z],
    'zone': zone.name,
    'collision': {
      'radius': collisionRadius,
      'height': collisionHeight,
    },
    'visibilityLayer': visibilityLayer,
    if (interactiveTag != null) 'interactiveTag': interactiveTag,
    if (canonicalPropId != null) 'canonicalPropId': canonicalPropId,
    'pickable': pickable,
  };
}

final class HousePlacementsManifest {
  final int schemaVersion;
  final String sourceRef;
  final List<PlacementRecord> placements;

  static const String canonicalJson = '''
{
  "schemaVersion": 1,
  "kind": "quarantine-house-placements",
  "sourceRef": "assets/house/house.json",
  "coordinateSpace": "room-local-y-up",
  "placements": [
    {
      "instanceId": "hall.coat-rack-01",
      "roomId": "hall",
      "source": "catalog",
      "modelId": "kenney.coat-rack",
      "position": [0.45, 0.0, 0.55],
      "rotationY": 45.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "circulation",
      "collision": {
        "radius": 0.25,
        "height": 1.85
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "hall.coat-rack",
      "pickable": false
    },
    {
      "instanceId": "hall.console-lamp-01",
      "roomId": "hall",
      "source": "catalog",
      "modelId": "polyhaven.desk-lamp-arm-01",
      "position": [0.35, 0.75, 2.50],
      "rotationY": 90.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "circulation",
      "collision": {
        "radius": 0.15,
        "height": 0.48
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "hall.entry-light",
      "pickable": false
    },
    {
      "instanceId": "hall.coat-hooks-01",
      "roomId": "hall",
      "source": "procedural",
      "propKind": "coatHooks",
      "materialFamily": "mat-iron-cast",
      "position": [2.25, 1.6, 3.5],
      "rotationY": 0.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "storage",
      "collision": {
        "radius": 0.15,
        "height": 1.6
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "hall.coat-hooks",
      "pickable": false
    },
    {
      "instanceId": "hall.doormat-01",
      "roomId": "hall",
      "source": "procedural",
      "propKind": "doormat",
      "materialFamily": "mat-fabric-curtains",
      "position": [1.25, 0.01, 4.0],
      "rotationY": 0.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "circulation",
      "collision": {
        "radius": 0.3,
        "height": 0.02
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "hall.umbrella-stand-01",
      "roomId": "hall",
      "source": "procedural",
      "propKind": "umbrellaStand",
      "materialFamily": "mat-ceramic-glaze",
      "position": [2.05, 0.0, 3.7],
      "rotationY": 45.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "storage",
      "collision": {
        "radius": 0.12,
        "height": 0.55
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "hall.umbrella-stand",
      "pickable": false
    },
    {
      "instanceId": "hall.stair-runner-01",
      "roomId": "hall",
      "source": "procedural",
      "propKind": "stairRunner",
      "materialFamily": "mat-fabric-linen-sheet",
      "position": [0.25, 0.0, 5.5],
      "rotationY": 0.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "circulation",
      "collision": {
        "radius": 0.4,
        "height": 0.01
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "hall.picture-frames-01",
      "roomId": "hall",
      "source": "procedural",
      "propKind": "pictureFrames",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [2.45, 1.8, 4.5],
      "rotationY": 0.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "circulation",
      "collision": {
        "radius": 0.25,
        "height": 0.3
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "hall.light-switch-01",
      "roomId": "hall",
      "source": "procedural",
      "propKind": "lightSwitch",
      "materialFamily": "mat-enamel-white",
      "position": [1.45, 1.3, 3.5],
      "rotationY": 0.0,
      "scale": [1.0, 1.0, 1.0],
      "zone": "circulation",
      "collision": {
        "radius": 0.04,
        "height": 0.08
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "hall.light-switch",
      "pickable": false
    }
  ]
}
''';

  static HousePlacementsManifest? _canonical;

  static HousePlacementsManifest get canonical =>
      _canonical ??= HousePlacementsManifest.decode(canonicalJson);

  const HousePlacementsManifest({
    required this.schemaVersion,
    required this.sourceRef,
    required this.placements,
  });

  factory HousePlacementsManifest.decode(String jsonSource) =>
      HousePlacementsManifest.fromJson(jsonDecode(jsonSource) as Map<String, dynamic>);

  factory HousePlacementsManifest.fromJson(Map<String, dynamic> json) {
    final rawList = json['placements'] as List? ?? const [];
    final items = <PlacementRecord>[];
    for (final item in rawList) {
      if (item is Map<String, dynamic>) {
        items.add(PlacementRecord.fromJson(item));
      } else if (item is Map) {
        items.add(PlacementRecord.fromJson(Map<String, dynamic>.from(item)));
      }
    }
    return HousePlacementsManifest(
      schemaVersion: json['schemaVersion'] as int? ?? 1,
      sourceRef: json['sourceRef'] as String? ?? 'assets/house/house.json',
      placements: List.unmodifiable(items),
    );
  }

  Iterable<PlacementRecord> placementsFor(String roomId) =>
      placements.where((p) => p.roomId == roomId);

  List<String> validate(House house) {
    final errors = <String>[];
    final seenIds = <String>{};

    for (final placement in placements) {
      if (!seenIds.add(placement.instanceId)) {
        errors.add('Duplicate placement instanceId: ${placement.instanceId}');
      }

      final room = house.byId(placement.roomId);
      if (room == null) {
        errors.add('Placement ${placement.instanceId} references unknown roomId: ${placement.roomId}');
        continue;
      }

      final effectiveSize = house.effectiveSize(room);
      if (placement.position.x < -0.2 ||
          placement.position.x > effectiveSize.x + 0.2 ||
          placement.position.z < -0.2 ||
          placement.position.z > effectiveSize.z + 0.2) {
        errors.add('Placement ${placement.instanceId} exceeds room bounds for ${placement.roomId}');
      }

      if (placement.source == 'catalog') {
        if (placement.modelId == null || !HouseModelCatalog.all.containsKey(placement.modelId!)) {
          errors.add('Placement ${placement.instanceId} references uncataloged modelId: ${placement.modelId}');
        }
      }

      if (placement.source == 'procedural') {
        if (placement.propKind == null || placement.propKind!.isEmpty) {
          errors.add('Placement ${placement.instanceId} missing propKind for procedural source');
        }
      }
    }

    return errors;
  }
}
