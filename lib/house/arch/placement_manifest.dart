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
      "position": [
        0.45,
        0.0,
        0.55
      ],
      "rotationY": 45.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
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
      "position": [
        0.35,
        0.75,
        2.5
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
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
      "position": [
        2.25,
        1.6,
        3.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
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
      "position": [
        1.25,
        0.01,
        4.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
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
      "position": [
        2.05,
        0.0,
        3.7
      ],
      "rotationY": 45.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
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
      "position": [
        0.25,
        0.0,
        5.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
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
      "position": [
        2.45,
        1.8,
        4.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
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
      "position": [
        1.45,
        1.3,
        3.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "circulation",
      "collision": {
        "radius": 0.04,
        "height": 0.08
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "hall.light-switch",
      "pickable": false
    },
    {
      "instanceId": "living-room.crt-tv-01",
      "roomId": "living-room",
      "source": "catalog",
      "modelId": "polyhaven.television-01",
      "position": [
        0.85,
        0.65,
        3.25
      ],
      "rotationY": -35.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "media",
      "collision": {
        "radius": 0.32,
        "height": 0.46
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.tv-broadcast",
      "canonicalPropId": "living_room.wireless-set",
      "pickable": false
    },
    {
      "instanceId": "living-room.coffee-table-01",
      "roomId": "living-room",
      "source": "catalog",
      "modelId": "polyhaven.coffee-table-01",
      "position": [
        2.025,
        0.0,
        1.68
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "conversational",
      "collision": {
        "radius": 0.6,
        "height": 0.45
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.coffee-table",
      "canonicalPropId": "living_room.occasionalTable",
      "pickable": false
    },
    {
      "instanceId": "living-room.reading-lamp-01",
      "roomId": "living-room",
      "source": "catalog",
      "modelId": "polyhaven.desk-lamp-arm-01",
      "position": [
        1.45,
        0.65,
        3.25
      ],
      "rotationY": 15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "media",
      "collision": {
        "radius": 0.15,
        "height": 0.48
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.lamp-reading",
      "pickable": false
    },
    {
      "instanceId": "living-room.bookcase-01",
      "roomId": "living-room",
      "source": "catalog",
      "modelId": "kenney.bookcase",
      "position": [
        0.4,
        0.0,
        1.8
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.45,
        "height": 1.8
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.bookcase",
      "pickable": false
    },
    {
      "instanceId": "living-room.mantle-clock-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "mantleClock",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [
        2.25,
        1.35,
        0.05
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "focal",
      "collision": {
        "radius": 0.15,
        "height": 0.25
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.mantle-clock",
      "pickable": false
    },
    {
      "instanceId": "living-room.porcelain-mermaid-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "porcelainMermaid",
      "materialFamily": "mat-porcelain-glaze",
      "position": [
        2.7,
        1.35,
        0.05
      ],
      "rotationY": -15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "focal",
      "collision": {
        "radius": 0.12,
        "height": 0.35
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.mermaid-statuette",
      "pickable": false
    },
    {
      "instanceId": "living-room.coal-scuttle-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "coalScuttle",
      "materialFamily": "mat-iron-cast",
      "position": [
        1.55,
        0.2,
        0.15
      ],
      "rotationY": 30.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "focal",
      "collision": {
        "radius": 0.2,
        "height": 0.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.coal-scuttle",
      "pickable": false
    },
    {
      "instanceId": "living-room.fire-tools-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "fireTools",
      "materialFamily": "mat-brass-wrought",
      "position": [
        2.95,
        0.4,
        0.15
      ],
      "rotationY": -30.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "focal",
      "collision": {
        "radius": 0.12,
        "height": 0.75
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "living-room.armchair-prop-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "armchair",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        2.25,
        0.45,
        1.5
      ],
      "rotationY": 180.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "conversational",
      "collision": {
        "radius": 0.45,
        "height": 0.9
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.armchair",
      "pickable": false
    },
    {
      "instanceId": "living-room.occasional-table-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "occasionalTable",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [
        3.85,
        0.6,
        3.4
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "conversational",
      "collision": {
        "radius": 0.35,
        "height": 0.65
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "living-room.rug-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "rug",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        2.25,
        0.01,
        1.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "conversational",
      "collision": {
        "radius": 0.9,
        "height": 0.02
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "living-room.curtains-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "curtains",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        0.15,
        1.5,
        2.0
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "focal",
      "collision": {
        "radius": 0.15,
        "height": 2.1
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "living-room.photograph-01",
      "roomId": "living-room",
      "source": "procedural",
      "propKind": "photograph",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [
        2.65,
        1.35,
        0.05
      ],
      "rotationY": -15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "focal",
      "collision": {
        "radius": 0.1,
        "height": 0.18
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "living-room.photograph",
      "pickable": false
    },
    {
      "instanceId": "kitchen.plate-rack-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "plateRack",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        0.45,
        1.5,
        2.9
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.2,
        "height": 0.6
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "kitchen.plate-rack",
      "pickable": false
    },
    {
      "instanceId": "kitchen.enamel-sink-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "enamelSink",
      "materialFamily": "mat-ceramic-glaze",
      "position": [
        0.35,
        0.85,
        2.3
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "culinary",
      "collision": {
        "radius": 0.35,
        "height": 0.85
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "kitchen.sink",
      "pickable": false
    },
    {
      "instanceId": "kitchen.gas-cooker-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "gasCooker",
      "materialFamily": "mat-iron-cast",
      "position": [
        0.35,
        0.85,
        0.9
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "culinary",
      "collision": {
        "radius": 0.35,
        "height": 0.9
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "kitchen.cooker",
      "pickable": false
    },
    {
      "instanceId": "kitchen.scrubbed-table-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "scrubbedTable",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        2.45,
        0.75,
        2.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "culinary",
      "collision": {
        "radius": 0.6,
        "height": 0.75
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "kitchen.chair-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "chair1",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        2.45,
        0.45,
        2.7
      ],
      "rotationY": 180.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "culinary",
      "collision": {
        "radius": 0.25,
        "height": 0.85
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "kitchen.chair-02",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "chair2",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        2.45,
        0.45,
        1.3
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "culinary",
      "collision": {
        "radius": 0.25,
        "height": 0.85
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "kitchen.tea-caddy-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "teaCaddy",
      "materialFamily": "mat-iron-cast",
      "position": [
        0.55,
        0.9,
        2.85
      ],
      "rotationY": 15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.08,
        "height": 0.15
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "kitchen.tea-caddy",
      "pickable": false
    },
    {
      "instanceId": "kitchen.bread-bin-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "breadBin",
      "materialFamily": "mat-ceramic-glaze",
      "position": [
        2.05,
        0.8,
        2.0
      ],
      "rotationY": -10.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "culinary",
      "collision": {
        "radius": 0.18,
        "height": 0.25
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "kitchen.bread-bin",
      "pickable": false
    },
    {
      "instanceId": "kitchen.wall-clock-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "wallClock",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [
        3.65,
        1.8,
        0.1
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.15,
        "height": 0.45
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "kitchen.wall-clock",
      "pickable": false
    },
    {
      "instanceId": "kitchen.roller-towel-01",
      "roomId": "kitchen",
      "source": "procedural",
      "propKind": "rollerTowel",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        3.85,
        1.3,
        2.85
      ],
      "rotationY": -90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.1,
        "height": 0.7
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "cellar.box-stack-01",
      "roomId": "cellar",
      "source": "catalog",
      "modelId": "kenney.cardboard-box",
      "position": [
        0.9,
        0.0,
        0.9
      ],
      "rotationY": 12.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.28,
        "height": 0.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.archive-box-1",
      "canonicalPropId": "cellar.preserving-jars",
      "pickable": false
    },
    {
      "instanceId": "cellar.box-stack-02",
      "roomId": "cellar",
      "source": "catalog",
      "modelId": "kenney.cardboard-box",
      "position": [
        1.45,
        0.0,
        0.9
      ],
      "rotationY": -8.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.28,
        "height": 0.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.archive-box-2",
      "pickable": false
    },
    {
      "instanceId": "cellar.wine-barrel-01",
      "roomId": "cellar",
      "source": "catalog",
      "modelId": "polyhaven.wine-barrel-01",
      "position": [
        2.45,
        0.14,
        3.25
      ],
      "rotationY": 15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.38,
        "height": 0.94
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.wine-barrel",
      "pickable": false
    },
    {
      "instanceId": "cellar.utility-barrel-01",
      "roomId": "cellar",
      "source": "catalog",
      "modelId": "kenney.barrel",
      "position": [
        2.95,
        0.14,
        3.25
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.35,
        "height": 0.8
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.utility-barrel",
      "pickable": false
    },
    {
      "instanceId": "cellar.storage-crate-01",
      "roomId": "cellar",
      "source": "catalog",
      "modelId": "polyhaven.wooden-crate-01",
      "position": [
        1.15,
        0.0,
        1.45
      ],
      "rotationY": 5.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.35,
        "height": 0.48
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.produce-crate",
      "pickable": false
    },
    {
      "instanceId": "cellar.sump-bucket-01",
      "roomId": "cellar",
      "source": "catalog",
      "modelId": "kenney.bucket",
      "position": [
        2.55,
        0.0,
        2.2
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.2,
        "height": 0.35
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.sump-bucket",
      "pickable": false
    },
    {
      "instanceId": "cellar.inspection-lantern-01",
      "roomId": "cellar",
      "source": "catalog",
      "modelId": "polyhaven.lantern-01",
      "position": [
        1.55,
        1.25,
        0.3
      ],
      "rotationY": 20.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.15,
        "height": 0.38
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.lantern",
      "pickable": false
    },
    {
      "instanceId": "cellar.coal-heap-01",
      "roomId": "cellar",
      "source": "procedural",
      "propKind": "coalHeap",
      "materialFamily": "mat-concrete-floor",
      "position": [
        3.5,
        0.3,
        3.2
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.8,
        "height": 0.6
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "cellar.preserving-jars-prop-01",
      "roomId": "cellar",
      "source": "procedural",
      "propKind": "preservingJars",
      "materialFamily": "mat-glass-clear-window",
      "position": [
        0.3,
        1.2,
        2.0
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.25,
        "height": 0.3
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.preserving-jars",
      "pickable": false
    },
    {
      "instanceId": "cellar.mangle-01",
      "roomId": "cellar",
      "source": "procedural",
      "propKind": "mangle",
      "materialFamily": "mat-iron-cast",
      "position": [
        2.0,
        0.6,
        0.5
      ],
      "rotationY": 45.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.4,
        "height": 1.2
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.mangle",
      "pickable": false
    },
    {
      "instanceId": "cellar.bare-bulb-01",
      "roomId": "cellar",
      "source": "procedural",
      "propKind": "bareBulb",
      "materialFamily": "mat-glass-clear-window",
      "position": [
        2.0,
        1.95,
        2.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.1,
        "height": 0.25
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.bare-bulb",
      "pickable": false
    },
    {
      "instanceId": "cellar.ventilation-grille-01",
      "roomId": "cellar",
      "source": "procedural",
      "propKind": "ventilationGrille",
      "materialFamily": "mat-iron-cast",
      "position": [
        0.1,
        1.8,
        3.2
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.2,
        "height": 0.2
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "cellar.meter-cupboard-01",
      "roomId": "cellar",
      "source": "procedural",
      "propKind": "meterCupboard",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        3.6,
        1.3,
        0.6
      ],
      "rotationY": -90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.25,
        "height": 0.6
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "cellar.meter-cupboard",
      "pickable": false
    },
    {
      "instanceId": "bedroom.master-bed-01",
      "roomId": "bedroom",
      "source": "catalog",
      "modelId": "kenney.bed-double",
      "position": [
        1.89,
        0.0,
        1.6
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 1.05,
        "height": 0.9
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bedroom.bed",
      "canonicalPropId": "bedroom.bedstead",
      "pickable": false
    },
    {
      "instanceId": "bedroom.nightstand-01",
      "roomId": "bedroom",
      "source": "catalog",
      "modelId": "kenney.bedside-table",
      "position": [
        3.14,
        0.0,
        1.6
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 0.3,
        "height": 0.6
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bedroom.nightstand",
      "pickable": false
    },
    {
      "instanceId": "bedroom.alarm-clock-01",
      "roomId": "bedroom",
      "source": "catalog",
      "modelId": "polyhaven.alarm-clock-01",
      "position": [
        3.14,
        0.6,
        1.6
      ],
      "rotationY": -20.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 0.1,
        "height": 0.16
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bedroom.alarm-clock",
      "pickable": false
    },
    {
      "instanceId": "bedroom.bedstead-prop-01",
      "roomId": "bedroom",
      "source": "procedural",
      "propKind": "bedstead",
      "materialFamily": "mat-iron-cast",
      "position": [
        1.45,
        0.5,
        3.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 0.9,
        "height": 1.1
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "bedroom.eiderdown-01",
      "roomId": "bedroom",
      "source": "procedural",
      "propKind": "eiderdown",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        1.45,
        0.55,
        3.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 0.85,
        "height": 0.2
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "bedroom.wardrobe-01",
      "roomId": "bedroom",
      "source": "procedural",
      "propKind": "wardrobe",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [
        3.85,
        1.0,
        0.8
      ],
      "rotationY": -90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.45,
        "height": 2.0
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bedroom.wardrobe",
      "pickable": false
    },
    {
      "instanceId": "bedroom.dressing-table-01",
      "roomId": "bedroom",
      "source": "procedural",
      "propKind": "dressingTable",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [
        3.85,
        0.8,
        3.0
      ],
      "rotationY": -90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 0.35,
        "height": 1.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bedroom.dressing-table",
      "pickable": false
    },
    {
      "instanceId": "bedroom.washstand-01",
      "roomId": "bedroom",
      "source": "procedural",
      "propKind": "washstand",
      "materialFamily": "mat-ceramic-glaze",
      "position": [
        0.45,
        0.8,
        0.8
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 0.3,
        "height": 0.9
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bedroom.washstand",
      "pickable": false
    },
    {
      "instanceId": "bedroom.rag-rug-01",
      "roomId": "bedroom",
      "source": "procedural",
      "propKind": "ragRug",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        1.45,
        0.01,
        1.7
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sleeping",
      "collision": {
        "radius": 0.6,
        "height": 0.02
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "landing.stair-runner-end-01",
      "roomId": "landing",
      "source": "procedural",
      "propKind": "stairRunnerEnd",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        1.25,
        0.0,
        1.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "circulation",
      "collision": {
        "radius": 0.5,
        "height": 0.02
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "landing.airing-cupboard-door-01",
      "roomId": "landing",
      "source": "procedural",
      "propKind": "airingCupboardDoor",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        2.25,
        1.0,
        1.5
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "circulation",
      "collision": {
        "radius": 0.4,
        "height": 2.0
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "landing.airing-cupboard",
      "pickable": false
    },
    {
      "instanceId": "landing.light-pull-cord-01",
      "roomId": "landing",
      "source": "procedural",
      "propKind": "lightPullCord",
      "materialFamily": "mat-glass-clear-window",
      "position": [
        1.75,
        1.5,
        2.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "circulation",
      "collision": {
        "radius": 0.1,
        "height": 0.5
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "landing.light-pull",
      "pickable": false
    },
    {
      "instanceId": "landing.balustrade-01",
      "roomId": "landing",
      "source": "procedural",
      "propKind": "balustrade",
      "materialFamily": "mat-wood-mahogany-dark",
      "position": [
        0.25,
        0.5,
        0.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "circulation",
      "collision": {
        "radius": 0.1,
        "height": 1.0
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "landing.window-net-curtain-01",
      "roomId": "landing",
      "source": "procedural",
      "propKind": "windowNetCurtain",
      "materialFamily": "mat-fabric-curtains",
      "position": [
        1.25,
        1.5,
        0.1
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "circulation",
      "collision": {
        "radius": 0.5,
        "height": 1.5
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "bathroom.bathtub-01",
      "roomId": "bathroom",
      "source": "catalog",
      "modelId": "kenney.bathtub",
      "position": [
        0.65,
        0.0,
        1.35
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sanitary",
      "collision": {
        "radius": 0.85,
        "height": 0.6
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bathroom.bath",
      "canonicalPropId": "bathroom.cast-iron-bath",
      "pickable": false
    },
    {
      "instanceId": "bathroom.sink-01",
      "roomId": "bathroom",
      "source": "catalog",
      "modelId": "kenney.bathroom-sink",
      "position": [
        0.5,
        0.0,
        1.25
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sanitary",
      "collision": {
        "radius": 0.35,
        "height": 0.85
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bathroom.sink",
      "canonicalPropId": "bathroom.pedestal-basin",
      "pickable": false
    },
    {
      "instanceId": "bathroom.mirror-01",
      "roomId": "bathroom",
      "source": "catalog",
      "modelId": "kenney.bathroom-mirror",
      "position": [
        0.1,
        1.25,
        1.25
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sanitary",
      "collision": {
        "radius": 0.25,
        "height": 0.7
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bathroom.mirror",
      "pickable": false
    },
    {
      "instanceId": "bathroom.medicine-cabinet-01",
      "roomId": "bathroom",
      "source": "procedural",
      "propKind": "medicineCabinet",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        2.25,
        1.5,
        2.25
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sanitary",
      "collision": {
        "radius": 0.2,
        "height": 0.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bathroom.medicine-cabinet",
      "pickable": false
    },
    {
      "instanceId": "bathroom.chain-pull-cistern-01",
      "roomId": "bathroom",
      "source": "procedural",
      "propKind": "chainPullCistern",
      "materialFamily": "mat-ceramic-glaze",
      "position": [
        0.25,
        1.8,
        0.25
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sanitary",
      "collision": {
        "radius": 0.2,
        "height": 0.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "bathroom.chain-pull",
      "pickable": false
    },
    {
      "instanceId": "bathroom.bath-rack-01",
      "roomId": "bathroom",
      "source": "procedural",
      "propKind": "bathRack",
      "materialFamily": "mat-iron-cast",
      "position": [
        1.25,
        0.6,
        1.25
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "sanitary",
      "collision": {
        "radius": 0.3,
        "height": 0.1
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "spare-room.work-desk-01",
      "roomId": "spare-room",
      "source": "catalog",
      "modelId": "kenney.desk",
      "position": [
        1.2,
        0.0,
        1.1
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "work",
      "collision": {
        "radius": 0.65,
        "height": 0.75
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "spare-room.desk",
      "pickable": false
    },
    {
      "instanceId": "spare-room.desk-chair-01",
      "roomId": "spare-room",
      "source": "catalog",
      "modelId": "kenney.desk-chair",
      "position": [
        1.2,
        0.0,
        1.65
      ],
      "rotationY": 180.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "work",
      "collision": {
        "radius": 0.35,
        "height": 0.85
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "spare-room.chair",
      "pickable": false
    },
    {
      "instanceId": "spare-room.crt-monitor-01",
      "roomId": "spare-room",
      "source": "catalog",
      "modelId": "kenney.computer-screen",
      "position": [
        1.2,
        0.75,
        1.1
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "work",
      "collision": {
        "radius": 0.22,
        "height": 0.38
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "spare-room.computer",
      "pickable": false
    },
    {
      "instanceId": "spare-room.archive-box-01",
      "roomId": "spare-room",
      "source": "catalog",
      "modelId": "kenney.cardboard-box",
      "position": [
        3.75,
        0.0,
        2.25
      ],
      "rotationY": -15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.28,
        "height": 0.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "spare-room.archive-box",
      "canonicalPropId": "spareRoom.paper-archive-box",
      "pickable": false
    },
    {
      "instanceId": "spare-room.single-bed-01",
      "roomId": "spare-room",
      "source": "procedural",
      "propKind": "singleBed",
      "materialFamily": "mat-iron-cast",
      "position": [
        2.25,
        0.4,
        1.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.6,
        "height": 0.8
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "spare-room.chest-of-drawers-01",
      "roomId": "spare-room",
      "source": "procedural",
      "propKind": "chestOfDrawers",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        3.25,
        0.5,
        2.5
      ],
      "rotationY": 90.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.4,
        "height": 1.0
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "spare-room.drawers",
      "pickable": false
    },
    {
      "instanceId": "spare-room.utility-chair-01",
      "roomId": "spare-room",
      "source": "procedural",
      "propKind": "utilityChair",
      "materialFamily": "mat-wood-oak-polished",
      "position": [
        1.25,
        0.4,
        0.5
      ],
      "rotationY": 45.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "work",
      "collision": {
        "radius": 0.3,
        "height": 0.8
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "spare-room.bare-curtain-rod-01",
      "roomId": "spare-room",
      "source": "procedural",
      "propKind": "bareCurtainRod",
      "materialFamily": "mat-brass-wrought",
      "position": [
        2.25,
        2.0,
        2.9
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.1,
        "height": 0.1
      },
      "visibilityLayer": "furniture",
      "pickable": false
    },
    {
      "instanceId": "spare-room.paper-archive-box-01",
      "roomId": "spare-room",
      "source": "procedural",
      "propKind": "paperArchiveBox",
      "materialFamily": "mat-plaster-clean",
      "position": [
        1.25,
        0.2,
        2.5
      ],
      "rotationY": 15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.25,
        "height": 0.3
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "spare-room.paper-box",
      "pickable": false
    },
    {
      "instanceId": "attic.loft-ladder-01",
      "roomId": "attic",
      "source": "catalog",
      "modelId": "polyhaven.wooden-ladder",
      "position": [
        2.2,
        0.0,
        3.1
      ],
      "rotationY": -15.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.28,
        "height": 2.35
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "attic.ladder",
      "pickable": false
    },
    {
      "instanceId": "attic.storage-crate-01",
      "roomId": "attic",
      "source": "catalog",
      "modelId": "polyhaven.wooden-crate-01",
      "position": [
        1.2,
        0.0,
        3.8
      ],
      "rotationY": 10.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.35,
        "height": 0.48
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "attic.wooden-crate",
      "pickable": false
    },
    {
      "instanceId": "attic.travel-chest-01",
      "roomId": "attic",
      "source": "catalog",
      "modelId": "kenney.chest",
      "position": [
        2.8,
        0.0,
        3.8
      ],
      "rotationY": -5.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.4,
        "height": 0.5
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "attic.chest",
      "pickable": false
    },
    {
      "instanceId": "attic.archive-box-01",
      "roomId": "attic",
      "source": "catalog",
      "modelId": "kenney.cardboard-box",
      "position": [
        5.2,
        0.0,
        3.2
      ],
      "rotationY": 25.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "storage",
      "collision": {
        "radius": 0.28,
        "height": 0.4
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "attic.archive-box",
      "pickable": false
    },
    {
      "instanceId": "attic.storm-lantern-01",
      "roomId": "attic",
      "source": "catalog",
      "modelId": "polyhaven.lantern-01",
      "position": [
        1.8,
        0.0,
        3.5
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.15,
        "height": 0.38
      },
      "visibilityLayer": "furniture",
      "interactiveTag": "attic.lantern",
      "pickable": false
    },
    {
      "instanceId": "roof.downpipe-nw-01",
      "roomId": "roof",
      "source": "catalog",
      "modelId": "kenney.detail-pipe",
      "position": [
        0.0,
        1.4,
        0.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.15,
        "height": 1.0
      },
      "visibilityLayer": "architecture",
      "pickable": false
    },
    {
      "instanceId": "roof.downpipe-se-01",
      "roomId": "roof",
      "source": "catalog",
      "modelId": "kenney.detail-pipe",
      "position": [
        7.0,
        1.4,
        7.0
      ],
      "rotationY": 0.0,
      "scale": [
        1.0,
        1.0,
        1.0
      ],
      "zone": "utility",
      "collision": {
        "radius": 0.15,
        "height": 1.0
      },
      "visibilityLayer": "architecture",
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

      if (placement.roomId == 'attic' || placement.roomId == 'roof') {
        if (placement.source == 'catalog') {
          if (placement.modelId == null || !HouseModelCatalog.all.containsKey(placement.modelId!)) {
            errors.add('Placement ${placement.instanceId} references uncataloged modelId: ${placement.modelId}');
          }
        }
        continue;
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
