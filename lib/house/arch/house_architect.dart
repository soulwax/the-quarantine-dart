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
      final prog = _planRoom(house, room);
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

  RoomArchitecturalProgram _planRoom(House house, Room room) {
    switch (room.id) {
      case 'hall':
        return _planHall(house, room);
      case 'living-room':
        return _planLivingRoom(house, room);
      case 'kitchen':
        return _planKitchen(house, room);
      case 'cellar':
        return _planCellar(house, room);
      case 'bedroom':
        return _planBedroom(house, room);
      case 'landing':
        return _planLanding(house, room);
      case 'bathroom':
        return _planBathroom(house, room);
      case 'spare-room':
        return _planSpareRoom(house, room);
      default:
        return _planGenericRoom(house, room);
    }
  }

  RoomArchitecturalProgram _planHall(House house, Room room) {
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
      displayName: 'Entrance Hall & Vestibule',
      architecturalStyle: 'Late Victorian / 80s Refurbished Entrance Hall',
      pbrWall: 'polyhaven-decrepit-wallpaper',
      pbrFloor: 'polyhaven-diagonal-parquet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [
        FunctionalZone.circulation,
        FunctionalZone.storage,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'Vestibule draft lobby transom trim',
        'Dado rail wainscoting along full hallway length',
        'Under-stair spandrel paneling and cupboard casing',
        'Continuous timber staircase stringers and balusters',
      ],
    );
  }

  RoomArchitecturalProgram _planLivingRoom(House house, Room room) {
    final o = room.origin;
    final size = house.effectiveSize(room);

    final instances = <ArchitecturalModelInstance>[
      // Poly Haven CRT Television placed in media credenza alcove
      ArchitecturalModelInstance(
        instanceId: 'living-room.crt-tv-01',
        modelId: 'polyhaven.television-01',
        roomId: room.id,
        worldPosition: Vec3(o.x + 0.85, o.y + 0.65, o.z + size.z - 0.75),
        rotationYDegrees: -35.0,
        zone: FunctionalZone.media,
        collisionRadius: 0.32,
        collisionHeight: 0.46,
        interactiveTag: 'living-room.tv-broadcast',
        canonicalPropId: 'living_room.wireless-set',
      ),
      // Poly Haven Wooden Coffee Table in conversational focal zone
      ArchitecturalModelInstance(
        instanceId: 'living-room.coffee-table-01',
        modelId: 'polyhaven.coffee-table-01',
        roomId: room.id,
        worldPosition: Vec3(o.x + size.x * 0.45, o.y, o.z + size.z * 0.42),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.conversational,
        collisionRadius: 0.60,
        collisionHeight: 0.45,
        interactiveTag: 'living-room.coffee-table',
        canonicalPropId: 'living_room.occasionalTable',
      ),
      // Poly Haven Task Reading Lamp on side table
      ArchitecturalModelInstance(
        instanceId: 'living-room.reading-lamp-01',
        modelId: 'polyhaven.desk-lamp-arm-01',
        roomId: room.id,
        worldPosition: Vec3(o.x + 1.45, o.y + 0.65, o.z + size.z - 0.75),
        rotationYDegrees: 15.0,
        zone: FunctionalZone.media,
        collisionRadius: 0.15,
        collisionHeight: 0.48,
        interactiveTag: 'living-room.lamp-reading',
      ),
      // Closed bookcase along West wall
      ArchitecturalModelInstance(
        instanceId: 'living-room.bookcase-01',
        modelId: 'kenney.bookcase',
        roomId: room.id,
        worldPosition: Vec3(o.x + 0.40, o.y, o.z + 1.80),
        rotationYDegrees: 90.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.45,
        collisionHeight: 1.80,
        interactiveTag: 'living-room.bookcase',
      ),
    ];

    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: 'Living Room & Hearth',
      architecturalStyle: '80s Domestic Parlor with Dark Wood Wainscoting',
      pbrWall: 'polyhaven-dark-paneled-wood',
      pbrFloor: 'polyhaven-dirty-carpet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [
        FunctionalZone.focal,
        FunctionalZone.conversational,
        FunctionalZone.media,
        FunctionalZone.storage,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'Chimney breast with projecting tile hearth and carved mantle',
        'Lower dark wood wainscot paneling with continuous dado rail',
        'Victorian picture hanging rail at 2.15 m datum',
        'Ornate central plaster ceiling rose medallion',
        'Twin north sash window radiator enclosures',
      ],
    );
  }

  RoomArchitecturalProgram _planKitchen(House house, Room room) {
    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: 'Kitchen & Scullery',
      architecturalStyle: 'Domestic Galley Kitchen with Ceramic Retro Tiling',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'polyhaven-brown-floor-tiles',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [
        FunctionalZone.culinary,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      modelInstances: const [],
      builtInFeatures: const [
        'Fitted countertop cabinetry with recessed toe-kicks',
        'Ceramic tile splashback up to 1.4 m datum',
        'Belfast sink plumbing casing and pipe chase enclosure',
        'Pantry larder cupboard framing against North wall',
      ],
    );
  }

  RoomArchitecturalProgram _planCellar(House house, Room room) {
    final o = room.origin;
    final size = house.effectiveSize(room);

    final instances = <ArchitecturalModelInstance>[
      // Archive storage boxes against masonry wall
      ArchitecturalModelInstance(
        instanceId: 'cellar.box-stack-01',
        modelId: 'kenney.cardboard-box',
        roomId: room.id,
        worldPosition: Vec3(o.x + 0.90, o.y, o.z + 0.90),
        rotationYDegrees: 12.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.28,
        collisionHeight: 0.40,
        interactiveTag: 'cellar.archive-box-1',
        canonicalPropId: 'cellar.preserving-jars',
      ),
      ArchitecturalModelInstance(
        instanceId: 'cellar.box-stack-02',
        modelId: 'kenney.cardboard-box',
        roomId: room.id,
        worldPosition: Vec3(o.x + 1.45, o.y, o.z + 0.90),
        rotationYDegrees: -8.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.28,
        collisionHeight: 0.40,
        interactiveTag: 'cellar.archive-box-2',
      ),
      // Poly Haven Oak Wine Barrel on timber cradle plinth
      ArchitecturalModelInstance(
        instanceId: 'cellar.wine-barrel-01',
        modelId: 'polyhaven.wine-barrel-01',
        roomId: room.id,
        worldPosition: Vec3(o.x + 2.45, o.y + 0.14, o.z + size.z - 0.75),
        rotationYDegrees: 15.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.38,
        collisionHeight: 0.94,
        interactiveTag: 'cellar.wine-barrel',
      ),
      // Utility Barrel next to wine barrel
      ArchitecturalModelInstance(
        instanceId: 'cellar.utility-barrel-01',
        modelId: 'kenney.barrel',
        roomId: room.id,
        worldPosition: Vec3(o.x + 2.95, o.y + 0.14, o.z + size.z - 0.75),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.35,
        collisionHeight: 0.80,
        interactiveTag: 'cellar.utility-barrel',
      ),
      // Weathered Storage Crate for produce
      ArchitecturalModelInstance(
        instanceId: 'cellar.storage-crate-01',
        modelId: 'polyhaven.wooden-crate-01',
        roomId: room.id,
        worldPosition: Vec3(o.x + 1.15, o.y, o.z + 1.45),
        rotationYDegrees: 5.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.35,
        collisionHeight: 0.48,
        interactiveTag: 'cellar.produce-crate',
      ),
      // Sump Bucket near drainage grate
      ArchitecturalModelInstance(
        instanceId: 'cellar.sump-bucket-01',
        modelId: 'kenney.bucket',
        roomId: room.id,
        worldPosition: Vec3(o.x + size.x * 0.55 + 0.35, o.y, o.z + size.z * 0.55),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.utility,
        collisionRadius: 0.20,
        collisionHeight: 0.35,
        interactiveTag: 'cellar.sump-bucket',
      ),
      // Utility Inspection Lantern on brick pier plinth
      ArchitecturalModelInstance(
        instanceId: 'cellar.inspection-lantern-01',
        modelId: 'polyhaven.lantern-01',
        roomId: room.id,
        worldPosition: Vec3(o.x + size.x * 0.35 + 0.15, o.y + 1.25, o.z + 0.30),
        rotationYDegrees: 20.0,
        zone: FunctionalZone.utility,
        collisionRadius: 0.15,
        collisionHeight: 0.38,
        interactiveTag: 'cellar.lantern',
      ),
    ];

    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: 'Cellar & Utility Vault',
      architecturalStyle: 'Below-Grade Brick Service Vault with Exposed Joists',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'polyhaven-brown-floor-tiles',
      pbrCeiling: 'ceiling-pipes',
      zones: const [
        FunctionalZone.utility,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'Structural load-bearing brick piers',
        'Exposed timber joists with conduit clips',
        'Stepped damp-proof skirting plinth',
        'Iron coal chute aperture and frame',
        'Preserves & wine storage alcove with stone shelves',
        'Subterranean drainage sump pit with cast-iron grate',
        'Utility meter board & gas governor casing',
        'Oak wine barrel stillage cradle',
      ],
    );
  }

  RoomArchitecturalProgram _planBedroom(House house, Room room) {
    final o = room.origin;
    final size = house.effectiveSize(room);

    final instances = <ArchitecturalModelInstance>[
      // Master double bedstead placed against unbroken wall
      ArchitecturalModelInstance(
        instanceId: 'bedroom.master-bed-01',
        modelId: 'kenney.bed-double',
        roomId: room.id,
        worldPosition: Vec3(o.x + size.x * 0.42, o.y, o.z + 1.60),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.sleeping,
        collisionRadius: 1.05,
        collisionHeight: 0.90,
        interactiveTag: 'bedroom.bed',
        canonicalPropId: 'bedroom.bedstead',
      ),
      // Bedside nightstand
      ArchitecturalModelInstance(
        instanceId: 'bedroom.nightstand-01',
        modelId: 'kenney.bedside-table',
        roomId: room.id,
        worldPosition: Vec3(o.x + size.x * 0.42 + 1.25, o.y, o.z + 1.60),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.sleeping,
        collisionRadius: 0.30,
        collisionHeight: 0.60,
        interactiveTag: 'bedroom.nightstand',
      ),
      // Poly Haven Twin-Bell Retro Alarm Clock on nightstand
      ArchitecturalModelInstance(
        instanceId: 'bedroom.alarm-clock-01',
        modelId: 'polyhaven.alarm-clock-01',
        roomId: room.id,
        worldPosition: Vec3(o.x + size.x * 0.42 + 1.25, o.y + 0.60, o.z + 1.60),
        rotationYDegrees: -20.0,
        zone: FunctionalZone.sleeping,
        collisionRadius: 0.10,
        collisionHeight: 0.16,
        interactiveTag: 'bedroom.alarm-clock',
      ),
    ];

    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: 'Master Bedroom',
      architecturalStyle: 'Suburban 80s Master Bedroom with Wall Plaster & Carpet',
      pbrWall: 'polyhaven-decrepit-wallpaper',
      pbrFloor: 'polyhaven-dirty-carpet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [
        FunctionalZone.sleeping,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'Recessed alcove wardrobe framing',
        'Bedside table wall plinths',
        'Decorative chimney breast with ceramic tile hearth',
        'Curtain pelmets over twin north sash windows',
      ],
    );
  }

  RoomArchitecturalProgram _planLanding(House house, Room room) {
    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: 'First Floor Landing',
      architecturalStyle: 'Upper Circulation Gallery',
      pbrWall: 'polyhaven-decrepit-wallpaper',
      pbrFloor: 'polyhaven-diagonal-parquet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [
        FunctionalZone.circulation,
      ],
      modelInstances: const [],
      builtInFeatures: const [
        'Protective gallery balustrade overlooking stair void',
        'Linen and airing cupboard architraves',
        'Ceiling loft access inspection hatch trim',
      ],
    );
  }

  RoomArchitecturalProgram _planBathroom(House house, Room room) {
    final o = room.origin;
    final size = house.effectiveSize(room);

    final instances = <ArchitecturalModelInstance>[
      // Clawfoot bathtub along back wall
      ArchitecturalModelInstance(
        instanceId: 'bathroom.bathtub-01',
        modelId: 'kenney.bathtub',
        roomId: room.id,
        worldPosition: Vec3(o.x + 0.65, o.y, o.z + size.z - 1.15),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.sanitary,
        collisionRadius: 0.85,
        collisionHeight: 0.60,
        interactiveTag: 'bathroom.bath',
        canonicalPropId: 'bathroom.cast-iron-bath',
      ),
      // Pedestal bathroom sink
      ArchitecturalModelInstance(
        instanceId: 'bathroom.sink-01',
        modelId: 'kenney.bathroom-sink',
        roomId: room.id,
        worldPosition: Vec3(o.x + 0.50, o.y, o.z + 1.25),
        rotationYDegrees: 90.0,
        zone: FunctionalZone.sanitary,
        collisionRadius: 0.35,
        collisionHeight: 0.85,
        interactiveTag: 'bathroom.sink',
        canonicalPropId: 'bathroom.pedestal-basin',
      ),
      // Wall bathroom mirror
      ArchitecturalModelInstance(
        instanceId: 'bathroom.mirror-01',
        modelId: 'kenney.bathroom-mirror',
        roomId: room.id,
        worldPosition: Vec3(o.x + 0.10, o.y + 1.25, o.z + 1.25),
        rotationYDegrees: 90.0,
        zone: FunctionalZone.sanitary,
        collisionRadius: 0.25,
        collisionHeight: 0.70,
        interactiveTag: 'bathroom.mirror',
      ),
    ];

    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: 'Family Bathroom',
      architecturalStyle: 'Ceramic Tiled 80s Wet Room & Sanitary Suite',
      pbrWall: 'polyhaven-brown-floor-tiles',
      pbrFloor: 'polyhaven-brown-floor-tiles',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [
        FunctionalZone.sanitary,
        FunctionalZone.circulation,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'Half-height sanitary tile wainscot ledge at 1.2 m',
        'Vertical pipe chase boxing for waste and soil stack',
        'Bath apron surround and plinth',
      ],
    );
  }

  RoomArchitecturalProgram _planSpareRoom(House house, Room room) {
    final o = room.origin;
    final size = house.effectiveSize(room);

    final instances = <ArchitecturalModelInstance>[
      // Study work desk
      ArchitecturalModelInstance(
        instanceId: 'spare-room.work-desk-01',
        modelId: 'kenney.desk',
        roomId: room.id,
        worldPosition: Vec3(o.x + 1.20, o.y, o.z + 1.10),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.work,
        collisionRadius: 0.65,
        collisionHeight: 0.75,
        interactiveTag: 'spare-room.desk',
      ),
      // Desk swivel chair
      ArchitecturalModelInstance(
        instanceId: 'spare-room.desk-chair-01',
        modelId: 'kenney.desk-chair',
        roomId: room.id,
        worldPosition: Vec3(o.x + 1.20, o.y, o.z + 1.65),
        rotationYDegrees: 180.0,
        zone: FunctionalZone.work,
        collisionRadius: 0.35,
        collisionHeight: 0.85,
        interactiveTag: 'spare-room.chair',
      ),
      // Vintage CRT Computer Screen on desk
      ArchitecturalModelInstance(
        instanceId: 'spare-room.crt-monitor-01',
        modelId: 'kenney.computer-screen',
        roomId: room.id,
        worldPosition: Vec3(o.x + 1.20, o.y + 0.75, o.z + 1.10),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.work,
        collisionRadius: 0.22,
        collisionHeight: 0.38,
        interactiveTag: 'spare-room.computer',
      ),
      // Cardboard archive box in corner
      ArchitecturalModelInstance(
        instanceId: 'spare-room.archive-box-01',
        modelId: 'kenney.cardboard-box',
        roomId: room.id,
        worldPosition: Vec3(o.x + size.x - 0.75, o.y, o.z + size.z - 0.75),
        rotationYDegrees: -15.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.28,
        collisionHeight: 0.40,
        interactiveTag: 'spare-room.archive-box',
        canonicalPropId: 'spareRoom.paper-archive-box',
      ),
    ];

    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: 'Quarantine Study & Archive Room',
      architecturalStyle: 'Repurposed Isolation Study with Distressed Plaster',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'polyhaven-dirty-carpet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [
        FunctionalZone.work,
        FunctionalZone.storage,
        FunctionalZone.circulation,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'Study alcove desk framing and bracketed shelving',
        'Low-profile window radiator enclosure',
        'Exposed electrical surface conduit runs',
      ],
    );
  }

  RoomArchitecturalProgram _planGenericRoom(House house, Room room) {
    return RoomArchitecturalProgram(
      roomId: room.id,
      displayName: room.id,
      architecturalStyle: 'Generic Architectural Interior',
      pbrWall: 'polyhaven-decrepit-wallpaper',
      pbrFloor: 'polyhaven-diagonal-parquet',
      pbrCeiling: 'polyhaven-ceiling-interior',
      zones: const [FunctionalZone.circulation],
      modelInstances: const [],
      builtInFeatures: const ['Standard perimeter trim'],
    );
  }

  /// Architectural program and model placement for the interior Attic / Roof Loft space.
  RoomArchitecturalProgram planAttic(House house) {
    final firstFloorRooms = house.rooms.where((r) => r.floor.name == 'first');
    var minX = double.infinity;
    var maxX = -double.infinity;
    var minZ = double.infinity;
    var maxZ = -double.infinity;
    var floorY = 0.0;

    for (final room in firstFloorRooms) {
      final size = house.effectiveSize(room);
      if (room.origin.x < minX) minX = room.origin.x;
      if (room.origin.x + size.x > maxX) maxX = room.origin.x + size.x;
      if (room.origin.z < minZ) minZ = room.origin.z;
      if (room.origin.z + size.z > maxZ) maxZ = room.origin.z + size.z;
      final ceilY = room.origin.y + size.y;
      if (ceilY > floorY) floorY = ceilY;
    }

    final ridgeZ = (minZ + maxZ) * 0.5;

    final instances = <ArchitecturalModelInstance>[
      // Timber loft ladder standing near hatch
      ArchitecturalModelInstance(
        instanceId: 'attic.loft-ladder-01',
        modelId: 'polyhaven.wooden-ladder',
        roomId: 'attic',
        worldPosition: Vec3(minX + 2.2, floorY, ridgeZ - 0.4),
        rotationYDegrees: -15.0,
        zone: FunctionalZone.utility,
        collisionRadius: 0.28,
        collisionHeight: 2.35,
        interactiveTag: 'attic.ladder',
      ),
      // Weathered wooden storage crate
      ArchitecturalModelInstance(
        instanceId: 'attic.storage-crate-01',
        modelId: 'polyhaven.wooden-crate-01',
        roomId: 'attic',
        worldPosition: Vec3(minX + 1.2, floorY, ridgeZ + 0.3),
        rotationYDegrees: 10.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.35,
        collisionHeight: 0.48,
        interactiveTag: 'attic.wooden-crate',
      ),
      // Vintage travel trunk / chest
      ArchitecturalModelInstance(
        instanceId: 'attic.travel-chest-01',
        modelId: 'kenney.chest',
        roomId: 'attic',
        worldPosition: Vec3(minX + 2.8, floorY, ridgeZ + 0.3),
        rotationYDegrees: -5.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.40,
        collisionHeight: 0.50,
        interactiveTag: 'attic.chest',
      ),
      // Cardboard box of old archives
      ArchitecturalModelInstance(
        instanceId: 'attic.archive-box-01',
        modelId: 'kenney.cardboard-box',
        roomId: 'attic',
        worldPosition: Vec3(maxX - 1.8, floorY, ridgeZ - 0.3),
        rotationYDegrees: 25.0,
        zone: FunctionalZone.storage,
        collisionRadius: 0.28,
        collisionHeight: 0.40,
        interactiveTag: 'attic.archive-box',
      ),
      // Utility storm lantern on floorboard
      ArchitecturalModelInstance(
        instanceId: 'attic.storm-lantern-01',
        modelId: 'polyhaven.lantern-01',
        roomId: 'attic',
        worldPosition: Vec3(minX + 1.8, floorY, ridgeZ),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.utility,
        collisionRadius: 0.15,
        collisionHeight: 0.38,
        interactiveTag: 'attic.lantern',
      ),
    ];

    return RoomArchitecturalProgram(
      roomId: 'attic',
      displayName: 'Attic & Roof Loft',
      architecturalStyle: 'Timber Framed Rafter Loft with Cold Water Storage',
      pbrWall: 'polyhaven-damaged-plaster',
      pbrFloor: 'floor-wood',
      pbrCeiling: 'polyhaven-roof-slates',
      zones: const [
        FunctionalZone.storage,
        FunctionalZone.utility,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'Sloped timber rafter trusses',
        'Horizontal collar tie-beams at head height',
        'Central rough-sawn pine floorboard walkway',
        'Loft access hatch surround over landing',
        'Galvanized cold-water header cistern tank on elevated timber bearers',
      ],
    );
  }

  /// Architectural program and envelope for the exterior Roof structure.
  RoomArchitecturalProgram planRoof(House house) {
    final firstFloorRooms = house.rooms.where((r) => r.floor.name == 'first');
    var minX = double.infinity;
    var maxX = -double.infinity;
    var minZ = double.infinity;
    var maxZ = -double.infinity;
    var floorY = 0.0;

    for (final room in firstFloorRooms) {
      final size = house.effectiveSize(room);
      if (room.origin.x < minX) minX = room.origin.x;
      if (room.origin.x + size.x > maxX) maxX = room.origin.x + size.x;
      if (room.origin.z < minZ) minZ = room.origin.z;
      if (room.origin.z + size.z > maxZ) maxZ = room.origin.z + size.z;
      final ceilY = room.origin.y + size.y;
      if (ceilY > floorY) floorY = ceilY;
    }

    final instances = <ArchitecturalModelInstance>[
      // Downpipe section along Northwest corner
      ArchitecturalModelInstance(
        instanceId: 'roof.downpipe-nw-01',
        modelId: 'kenney.detail-pipe',
        roomId: 'roof',
        worldPosition: Vec3(minX - 0.40, floorY * 0.5, minZ - 0.40),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.utility,
        collisionRadius: 0.15,
        collisionHeight: 1.00,
      ),
      // Downpipe section along Southeast corner
      ArchitecturalModelInstance(
        instanceId: 'roof.downpipe-se-01',
        modelId: 'kenney.detail-pipe',
        roomId: 'roof',
        worldPosition: Vec3(maxX + 0.40, floorY * 0.5, maxZ + 0.40),
        rotationYDegrees: 0.0,
        zone: FunctionalZone.utility,
        collisionRadius: 0.15,
        collisionHeight: 1.00,
      ),
    ];

    return RoomArchitecturalProgram(
      roomId: 'roof',
      displayName: 'Exterior Slate Roof & Chimney Stacks',
      architecturalStyle: 'Late Victorian Dual-Pitch Gabled Slate Roof',
      pbrWall: 'polyhaven-roof-slates',
      pbrFloor: 'polyhaven-roof-slates',
      pbrCeiling: 'polyhaven-roof-slates',
      zones: const [
        FunctionalZone.utility,
      ],
      modelInstances: instances,
      builtInFeatures: const [
        'North and South sloped Welsh slate roof planes',
        'Terracotta half-round ridge capping tiles',
        'East and West brick gable pediments',
        'Dual masonry chimney stacks with lead flashing collars',
        'Terracotta chimney pots',
        'Half-round cast-iron eaves gutters and rainwater downpipes',
      ],
    );
  }

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
