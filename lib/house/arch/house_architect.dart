import 'dart:math' as math;

import '../../engine/math3.dart';
import '../house.dart';
import '../room.dart';
import 'house_model_catalog.dart';
import 'placement_manifest.dart';

/// Architectural functional zones within a room.
enum FunctionalZone {
  circulation,
  focal,
  conversational,
  media,
  culinary,
  sanitary,
  sleeping,
  work,
  storage,
  utility,
}

/// An architecturally placed 3D model instance within a room.
class ArchitecturalModelInstance {
  final String instanceId;
  final String? modelId;
  final String? propKind;
  final String? materialFamily;
  final String source;
  final String roomId;
  final Vec3 worldPosition;
  final double rotationYDegrees;
  final Vec3? scale;
  final FunctionalZone zone;
  final double collisionRadius;
  final double collisionHeight;
  final String? interactiveTag;
  final String? canonicalPropId;

  const ArchitecturalModelInstance({
    required this.instanceId,
    this.modelId,
    this.propKind,
    this.materialFamily,
    this.source = 'catalog',
    required this.roomId,
    required this.worldPosition,
    this.rotationYDegrees = 0.0,
    this.scale,
    required this.zone,
    required this.collisionRadius,
    required this.collisionHeight,
    this.interactiveTag,
    this.canonicalPropId,
  });

  Vec3 get effectiveScale => scale ?? Vec3(1.0, 1.0, 1.0);

  bool get isCatalog => source == 'catalog' && modelId != null;
  bool get isProcedural => source == 'procedural';

  /// Resolves the corresponding catalog metadata or null if procedural.
  ModelCatalogEntry? get catalogEntry =>
      modelId != null ? HouseModelCatalog.find(modelId!) : null;

  Map<String, dynamic> toJson() => {
        'instanceId': instanceId,
        'source': source,
        if (modelId != null) 'modelId': modelId,
        if (propKind != null) 'propKind': propKind,
        if (materialFamily != null) 'materialFamily': materialFamily,
        'roomId': roomId,
        'worldPosition': [worldPosition.x, worldPosition.y, worldPosition.z],
        'rotationYDegrees': rotationYDegrees,
        'scale': [effectiveScale.x, effectiveScale.y, effectiveScale.z],
        'zone': zone.name,
        'collisionRadius': collisionRadius,
        'collisionHeight': collisionHeight,
        if (interactiveTag != null) 'interactiveTag': interactiveTag,
        if (canonicalPropId != null) 'canonicalPropId': canonicalPropId,
      };
}

/// Architectural program and finishes specification for a room.
class RoomArchitecturalProgram {
  final String roomId;
  final String displayName;
  final String architecturalStyle;
  final String pbrWall;
  final String pbrFloor;
  final String pbrCeiling;
  final List<FunctionalZone> zones;
  final List<ArchitecturalModelInstance> modelInstances;
  final List<String> builtInFeatures;

  const RoomArchitecturalProgram({
    required this.roomId,
    required this.displayName,
    required this.architecturalStyle,
    required this.pbrWall,
    required this.pbrFloor,
    required this.pbrCeiling,
    required this.zones,
    required this.modelInstances,
    required this.builtInFeatures,
  });

  Map<String, dynamic> toJson() => {
        'roomId': roomId,
        'displayName': displayName,
        'architecturalStyle': architecturalStyle,
        'pbrWall': pbrWall,
        'pbrFloor': pbrFloor,
        'pbrCeiling': pbrCeiling,
        'zones': zones.map((z) => z.name).toList(),
        'modelInstances': modelInstances.map((i) => i.toJson()).toList(),
        'builtInFeatures': builtInFeatures,
      };
}

/// Architectural finishes and stylistic specification for a room.
class RoomFinishesDescriptor {
  final String displayName;
  final String architecturalStyle;
  final String pbrWall;
  final String pbrFloor;
  final String pbrCeiling;
  final List<FunctionalZone> zones;
  final List<String> builtInFeatures;

  const RoomFinishesDescriptor({
    required this.displayName,
    required this.architecturalStyle,
    required this.pbrWall,
    required this.pbrFloor,
    required this.pbrCeiling,
    required this.zones,
    required this.builtInFeatures,
  });
}

/// Comprehensive architectural blueprint for the entire house.
class ArchitecturalHousePlan {
  final Map<String, RoomArchitecturalProgram> programs;
  final List<String> validationErrors;

  const ArchitecturalHousePlan({
    required this.programs,
    this.validationErrors = const [],
  });

  bool get isValid => validationErrors.isEmpty;

  RoomArchitecturalProgram? get attic => programs['attic'];
  RoomArchitecturalProgram? get roof => programs['roof'];

  List<ArchitecturalModelInstance> get allModelInstances =>
      programs.values.expand((p) => p.modelInstances).toList(growable: false);

  /// Alias for all placed model instances in the plan.
  List<ArchitecturalModelInstance> get placedModels => allModelInstances;

  Map<String, dynamic> toJson() => {
        'isValid': isValid,
        'validationErrors': validationErrors,
        'rooms': programs.map((k, v) => MapEntry(k, v.toJson())),
        'totalModelInstances': allModelInstances.length,
      };
}

/// Architectural planner that creates authentic, functional, and period-accurate
/// spatial arrangements using Poly Haven photorealistic assets and Kenney 3D kits.
class HouseArchitect {
  HouseArchitect._();

  static final HouseArchitect instance = HouseArchitect._();

  HousePlacementsManifest _placementsManifest = HousePlacementsManifest.canonical;

  HousePlacementsManifest get placementsManifest => _placementsManifest;

  void setPlacements(HousePlacementsManifest manifest) {
    _placementsManifest = manifest;
  }

  /// Synthesizes and validates the complete architectural plan for the given house.
  ArchitecturalHousePlan planHouse(House house) {
    final programs = <String, RoomArchitecturalProgram>{};
    final errors = <String>[];

    for (final room in house.rooms) {
      final prog = _buildRoomProgram(house, room);
      programs[room.id] = prog;
    }

    // Add dedicated Attic and Roof programs
    programs['attic'] = planAttic(house);
    programs['roof'] = planRoof(house);

    // Placement manifest validation
    errors.addAll(_placementsManifest.validate(house));

    // Clearance and architectural invariants validation for rooms
    for (final room in house.rooms) {
      final prog = programs[room.id];
      if (prog == null) continue;
      _validateRoomClearances(house, room, prog, errors);
    }

    return ArchitecturalHousePlan(
      programs: Map.unmodifiable(programs),
      validationErrors: List.unmodifiable(errors),
    );
  }

  RoomArchitecturalProgram _buildRoomProgram(House house, Room room) {
    final finishes = _roomFinishes[room.id] ?? _defaultFinishes(room.id);
    final o = room.origin;
    final manifestPlacements = _placementsManifest.placementsFor(room.id);
    final instances = <ArchitecturalModelInstance>[
      for (final p in manifestPlacements)
        ArchitecturalModelInstance(
          instanceId: p.instanceId,
          source: p.source,
          modelId: p.modelId,
          propKind: p.propKind,
          materialFamily: p.materialFamily,
          roomId: room.id,
          worldPosition: Vec3(o.x + p.position.x, o.y + p.position.y, o.z + p.position.z),
          rotationYDegrees: p.rotationY,
          scale: p.scale,
          zone: p.zone,
          collisionRadius: p.collisionRadius,
          collisionHeight: p.collisionHeight,
          interactiveTag: p.interactiveTag,
          canonicalPropId: p.canonicalPropId,
        ),
    ];

    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: finishes.displayName,
      architecturalStyle: finishes.architecturalStyle,
      pbrWall: finishes.pbrWall,
      pbrFloor: finishes.pbrFloor,
      pbrCeiling: finishes.pbrCeiling,
      zones: finishes.zones,
      modelInstances: instances,
      builtInFeatures: finishes.builtInFeatures,
    );
  }

  /// Architectural program and model placement for the interior Attic / Roof Loft space.
  RoomArchitecturalProgram planAttic(House house) {
    final firstFloorRooms = house.rooms.where((r) => r.floor.name == 'first');
    var floorY = 0.0;
    for (final room in firstFloorRooms) {
      final size = house.effectiveSize(room);
      final ceilY = room.origin.y + size.y;
      if (ceilY > floorY) floorY = ceilY;
    }

    final finishes = _roomFinishes['attic']!;
    final manifestPlacements = _placementsManifest.placementsFor('attic');
    final instances = <ArchitecturalModelInstance>[
      for (final p in manifestPlacements)
        ArchitecturalModelInstance(
          instanceId: p.instanceId,
          source: p.source,
          modelId: p.modelId,
          propKind: p.propKind,
          materialFamily: p.materialFamily,
          roomId: 'attic',
          worldPosition: Vec3(
            p.position.x,
            p.position.y == 0.0 ? floorY : p.position.y,
            p.position.z,
          ),
          rotationYDegrees: p.rotationY,
          scale: p.scale,
          zone: p.zone,
          collisionRadius: p.collisionRadius,
          collisionHeight: p.collisionHeight,
          interactiveTag: p.interactiveTag,
          canonicalPropId: p.canonicalPropId,
        ),
    ];

    return RoomArchitecturalProgram(
      roomId: 'attic',
      displayName: finishes.displayName,
      architecturalStyle: finishes.architecturalStyle,
      pbrWall: finishes.pbrWall,
      pbrFloor: finishes.pbrFloor,
      pbrCeiling: finishes.pbrCeiling,
      zones: finishes.zones,
      modelInstances: instances,
      builtInFeatures: finishes.builtInFeatures,
    );
  }

  /// Architectural program and envelope for the exterior Roof structure.
  RoomArchitecturalProgram planRoof(House house) {
    final finishes = _roomFinishes['roof']!;
    final manifestPlacements = _placementsManifest.placementsFor('roof');
    final instances = <ArchitecturalModelInstance>[
      for (final p in manifestPlacements)
        ArchitecturalModelInstance(
          instanceId: p.instanceId,
          source: p.source,
          modelId: p.modelId,
          propKind: p.propKind,
          materialFamily: p.materialFamily,
          roomId: 'roof',
          worldPosition: Vec3(p.position.x, p.position.y, p.position.z),
          rotationYDegrees: p.rotationY,
          scale: p.scale,
          zone: p.zone,
          collisionRadius: p.collisionRadius,
          collisionHeight: p.collisionHeight,
          interactiveTag: p.interactiveTag,
          canonicalPropId: p.canonicalPropId,
        ),
    ];

    return RoomArchitecturalProgram(
      roomId: 'roof',
      displayName: finishes.displayName,
      architecturalStyle: finishes.architecturalStyle,
      pbrWall: finishes.pbrWall,
      pbrFloor: finishes.pbrFloor,
      pbrCeiling: finishes.pbrCeiling,
      zones: finishes.zones,
      modelInstances: instances,
      builtInFeatures: finishes.builtInFeatures,
    );
  }

  static RoomFinishesDescriptor _defaultFinishes(String roomId) =>
      RoomFinishesDescriptor(
        displayName: roomId,
        architecturalStyle: 'Generic Architectural Interior',
        pbrWall: 'polyhaven-decrepit-wallpaper',
        pbrFloor: 'polyhaven-diagonal-parquet',
        pbrCeiling: 'polyhaven-ceiling-interior',
        zones: const [FunctionalZone.circulation],
        builtInFeatures: const ['Standard perimeter trim'],
      );

  static const Map<String, RoomFinishesDescriptor> _roomFinishes = {
    'hall': RoomFinishesDescriptor(
      displayName: 'Entrance Hall & Vestibule',
      architecturalStyle: 'Late Victorian / 80s Refurbished Entrance Hall',
      pbrWall: 'polyhaven-decrepit-wallpaper',
      pbrFloor: 'polyhaven-diagonal-parquet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: [
        FunctionalZone.circulation,
        FunctionalZone.storage,
      ],
      builtInFeatures: [
        'Vestibule draft lobby transom trim',
        'Dado rail wainscoting along full hallway length',
        'Under-stair spandrel paneling and cupboard casing',
        'Continuous timber staircase stringers and balusters',
      ],
    ),
    'living-room': RoomFinishesDescriptor(
      displayName: 'Living Room & Hearth',
      architecturalStyle: '80s Domestic Parlor with Dark Wood Wainscoting',
      pbrWall: 'polyhaven-dark-paneled-wood',
      pbrFloor: 'polyhaven-dirty-carpet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: [
        FunctionalZone.focal,
        FunctionalZone.conversational,
        FunctionalZone.media,
        FunctionalZone.storage,
      ],
      builtInFeatures: [
        'Chimney breast with projecting tile hearth and carved mantle',
        'Lower dark wood wainscot paneling with continuous dado rail',
        'Victorian picture hanging rail at 2.15 m datum',
        'Ornate central plaster ceiling rose medallion',
        'Twin north sash window radiator enclosures',
      ],
    ),
    'kitchen': RoomFinishesDescriptor(
      displayName: 'Kitchen & Scullery',
      architecturalStyle: 'Domestic Galley Kitchen with Ceramic Retro Tiling',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'polyhaven-brown-floor-tiles',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: [
        FunctionalZone.culinary,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      builtInFeatures: [
        'Fitted countertop cabinetry with recessed toe-kicks',
        'Ceramic tile splashback up to 1.4 m datum',
        'Belfast sink plumbing casing and pipe chase enclosure',
        'Pantry larder cupboard framing against North wall',
      ],
    ),
    'cellar': RoomFinishesDescriptor(
      displayName: 'Cellar & Utility Vault',
      architecturalStyle: 'Below-Grade Brick Service Vault with Exposed Joists',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'polyhaven-brown-floor-tiles',
      pbrCeiling: 'ceiling-pipes',
      zones: [
        FunctionalZone.utility,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      builtInFeatures: [
        'Structural load-bearing brick piers',
        'Exposed timber joists with conduit clips',
        'Stepped damp-proof skirting plinth',
        'Iron coal chute aperture and frame',
        'Preserves & wine storage alcove with stone shelves',
        'Subterranean drainage sump pit with cast-iron grate',
        'Utility meter board & gas governor casing',
        'Oak wine barrel stillage cradle',
      ],
    ),
    'bedroom': RoomFinishesDescriptor(
      displayName: 'Master Bedroom',
      architecturalStyle: 'Suburban 80s Master Bedroom with Wall Plaster & Carpet',
      pbrWall: 'polyhaven-decrepit-wallpaper',
      pbrFloor: 'polyhaven-dirty-carpet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: [
        FunctionalZone.sleeping,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      builtInFeatures: [
        'Recessed alcove wardrobe framing',
        'Bedside table wall plinths',
        'Decorative chimney breast with ceramic tile hearth',
        'Curtain pelmets over twin north sash windows',
      ],
    ),
    'landing': RoomFinishesDescriptor(
      displayName: 'First Floor Landing',
      architecturalStyle: 'Upper Circulation Gallery',
      pbrWall: 'polyhaven-decrepit-wallpaper',
      pbrFloor: 'polyhaven-diagonal-parquet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: [
        FunctionalZone.circulation,
      ],
      builtInFeatures: [
        'Protective gallery balustrade overlooking stair void',
        'Linen and airing cupboard architraves',
        'Ceiling loft access inspection hatch trim',
      ],
    ),
    'bathroom': RoomFinishesDescriptor(
      displayName: 'Family Bathroom',
      architecturalStyle: 'Ceramic Tiled 80s Wet Room & Sanitary Suite',
      pbrWall: 'polyhaven-brown-floor-tiles',
      pbrFloor: 'polyhaven-brown-floor-tiles',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: [
        FunctionalZone.sanitary,
        FunctionalZone.circulation,
      ],
      builtInFeatures: [
        'Half-height sanitary tile wainscot ledge at 1.2 m',
        'Vertical pipe chase boxing for waste and soil stack',
        'Bath apron surround and plinth',
      ],
    ),
    'spare-room': RoomFinishesDescriptor(
      displayName: 'Quarantine Study & Archive Room',
      architecturalStyle: 'Repurposed Isolation Study with Distressed Plaster',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'polyhaven-dirty-carpet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: [
        FunctionalZone.work,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      builtInFeatures: [
        'Study alcove desk framing and bracketed shelving',
        'Low-profile window radiator enclosure',
        'Exposed electrical surface conduit runs',
      ],
    ),
    'attic': RoomFinishesDescriptor(
      displayName: 'Attic & Roof Loft',
      architecturalStyle: 'Timber Framed Rafter Loft with Cold Water Storage',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'floor-wood',
      pbrCeiling: 'polyhaven-roof-slates',
      zones: [
        FunctionalZone.storage,
        FunctionalZone.utility,
      ],
      builtInFeatures: [
        'Sloped timber rafter trusses',
        'Horizontal collar tie-beams at head height',
        'Central rough-sawn pine floorboard walkway',
        'Loft access hatch surround over landing',
        'Galvanized cold-water header cistern tank on elevated timber bearers',
      ],
    ),
    'roof': RoomFinishesDescriptor(
      displayName: 'Exterior Slate Roof & Chimney Stacks',
      architecturalStyle: 'Late Victorian Dual-Pitch Gabled Slate Roof',
      pbrWall: 'polyhaven-roof-slates',
      pbrFloor: 'polyhaven-roof-slates',
      pbrCeiling: 'polyhaven-roof-slates',
      zones: [
        FunctionalZone.utility,
      ],
      builtInFeatures: [
        'North and South sloped Welsh slate roof planes',
        'Terracotta half-round ridge capping tiles',
        'East and West brick gable pediments',
        'Dual masonry chimney stacks with lead flashing collars',
        'Terracotta chimney pots',
        'Half-round cast-iron eaves gutters and rainwater downpipes',
      ],
    ),
  };

  void _validateRoomClearances(
    House house,
    Room room,
    RoomArchitecturalProgram prog,
    List<String> errors,
  ) {
    final o = room.origin;
    final size = house.effectiveSize(room);

    // 1. Portal door-swing clearance check (0.75 m radius clear of models)
    for (final portal in house.portalsFor(room.id)) {
      final facing = portal.facingFor(room.id);
      final offset = portal.offsetFor(room.id);

      final doorPos = switch (facing) {
        Facing.north => Vec3(o.x + offset, o.y, o.z),
        Facing.south => Vec3(o.x + offset, o.y, o.z + size.z),
        Facing.west => Vec3(o.x, o.y, o.z + offset),
        Facing.east => Vec3(o.x + size.x, o.y, o.z + offset),
      };

      for (final inst in prog.modelInstances) {
        final dx = inst.worldPosition.x - doorPos.x;
        final dz = inst.worldPosition.z - doorPos.z;
        final dist = math.sqrt(dx * dx + dz * dz);
        if (dist < 0.70 && inst.collisionRadius > 0.2) {
          errors.add(
            'Portal collision hazard in [${room.id}]: Model [${inst.modelId}] '
            'at ${inst.worldPosition} is within $dist m of portal ${portal.id}',
          );
        }
      }
    }

    // 2. Floor datum check
    for (final inst in prog.modelInstances) {
      if (inst.worldPosition.y < o.y - 0.05) {
        errors.add(
          'Floor datum violation in [${room.id}]: Model [${inst.modelId}] '
          'is below floor datum (y=${inst.worldPosition.y} < ${o.y})',
        );
      }
    }
  }
}
