import 'dart:math' as math;
import 'dart:typed_data';

import '../engine/math3.dart';
import 'arch/aperture_cutter.dart';
import 'arch/house_architect.dart';
import 'arch/mesh_builder.dart';
import 'arch/profile_extruder.dart';
import 'arch/roof_builder.dart';
import 'arch/window_joinery_builder.dart';
import 'arch/architectural_scene_adapter.dart';
import 'builders/attic_builder.dart';
import 'collision.dart';
import 'builders/bathroom_builder.dart';
import 'builders/bedroom_builder.dart';
import 'builders/cellar_builder.dart';
import 'builders/hall_builder.dart';
import 'builders/kitchen_builder.dart';
import 'builders/landing_builder.dart';
import 'builders/living_room_builder.dart';
import 'builders/spare_room_builder.dart';
import 'builders/staircase_builder.dart';
import 'geometry.dart';
import 'house.dart';
import 'room.dart';
import 'room_builder.dart';

/// Central architectural orchestrator that coordinates all room-by-room builders,
/// synthesizes staircase connections, and provides verified [RoomGeometry] to the runtime.
class HouseAssembler {
  final Map<String, RoomBuilder> _builders = {};

  HouseAssembler() {
    registerBuilder(HallBuilder());
    registerBuilder(LivingRoomBuilder());
    registerBuilder(KitchenBuilder());
    registerBuilder(CellarBuilder());
    registerBuilder(BedroomBuilder());
    registerBuilder(LandingBuilder());
    registerBuilder(BathroomBuilder());
    registerBuilder(SpareRoomBuilder());
  }

  static final HouseAssembler instance = HouseAssembler();

  final RoofBuilder roofBuilder = const RoofBuilder();
  final AtticBuilder atticBuilder = const AtticBuilder();

  /// Access to the architectural planning and 3D model layout system.
  HouseArchitect get architect => HouseArchitect.instance;

  /// Synthesizes the full architectural plan, functional zones, and model instances for the house.
  ArchitecturalHousePlan planHouse(House house) =>
      HouseArchitect.instance.planHouse(house);

  /// Builds the exterior architectural roof structure (slates, gables, ridge, chimneys, gutters).
  Float32List buildRoofGeometry(House house) => roofBuilder.buildRoofGeometry(house);

  /// Builds the interior attic / roof loft space (rafters, collar ties, floorboard walk, cistern).
  Float32List buildAtticGeometry(House house) => atticBuilder.buildAtticGeometry(house);

  void registerBuilder(RoomBuilder builder) {
    _builders[builder.roomId] = builder;
  }

  RoomBuilder? builderFor(String roomId) => _builders[roomId];

  /// Builds the complete [RoomGeometry] for a given room.
  ///
  /// Respects [roomShellIsModelPresented] when an authored model package is used.
  RoomGeometry buildRoomGeometry(House house, Room room) {
    if (roomShellIsModelPresented(room.id)) {
      return RoomGeometry.empty;
    }

    final builder = _builders[room.id];
    if (builder == null) {
      // Fallback: build default box room
      return _buildFallbackRoom(house, room);
    }

    final baseGeom = builder.build(house, house.drift);

    // If this is the Hall, append the continuous timber staircase to the walls/fixtures
    if (room.id == 'hall') {
      final size = house.effectiveSize(room);
      final stairBuilder = ArchMeshBuilder();
      StaircaseBuilder.buildStaircase(stairBuilder, house, room, size);
      final stairMesh = stairBuilder.build();

      if (stairMesh.isNotEmpty) {
        return RoomGeometry(
          floor: baseGeom.floor,
          ceiling: baseGeom.ceiling,
          walls: Float32List.fromList([...baseGeom.walls, ...stairMesh]),
          doors: baseGeom.doors,
        );
      }
    }

    return baseGeom;
  }

  /// Builds static doorframes and casings for a room.
  Float32List buildDoorStaticGeometry(House house, Room room) {
    final builder = ArchMeshBuilder();
    final size = house.effectiveSize(room);

    for (final portal in house.portalsFor(room.id)) {
      if (portal.doorKit == null || portal.stair) continue;
      final facing = portal.facingFor(room.id);
      final ap = ApertureSpec(
        id: portal.id,
        offset: portal.offsetFor(room.id),
        sill: 0.0,
        width: portal.width,
        height: portal.height,
        isPortal: true,
      );
      ProfileExtruder.extrudeDoorArchitrave(
        builder: builder,
        room: room,
        size: size,
        facing: facing,
        door: ap,
        casingRgb: 0x483C32,
      );
    }

    return builder.build();
  }

  /// Builds only the stateful leaf for a portal in open or closed pose.
  Float32List buildDoorLeafGeometry(House house, Room room, Portal portal) {
    if (portal.doorKit == null || portal.stair) return Float32List(0);
    final builder = ArchMeshBuilder();
    final size = house.effectiveSize(room);
    final isFrontDoor = portal.doorKit == 'kit-front-door-recessed';
    final isCellarGrille = portal.doorKit == 'kit-cellar-door-grille';
    final color = isFrontDoor
        ? 0x3D2419
        : isCellarGrille
            ? 0x4A4744
            : 0x5C4638;
    const rimLockColor = 0x242424;
    const brassHardwareColor = 0xD4AF37;
    const panelRecessColor = 0x463225;

    final facing = portal.facingFor(room.id);
    final u0 = portal.offsetFor(room.id);
    final y = room.origin.y;
    final h = math.min(size.y, portal.height);
    const leafThickness = 0.055;

    if (portal.open) {
      // Swung open 90 degrees along portal reveal
      switch (facing) {
        case Facing.north:
          builder.box(
            Vec3(room.origin.x + u0, y, room.origin.z),
            Vec3(room.origin.x + u0 + leafThickness, y + h, room.origin.z + portal.width),
            color,
          );
          // Knob on swung leaf
          builder.box(
            Vec3(room.origin.x + u0 + leafThickness, y + 0.95, room.origin.z + portal.width - 0.12),
            Vec3(room.origin.x + u0 + leafThickness + 0.04, y + 1.02, room.origin.z + portal.width - 0.06),
            brassHardwareColor,
          );
        case Facing.south:
          builder.box(
            Vec3(room.origin.x + u0, y, room.origin.z + size.z - portal.width),
            Vec3(room.origin.x + u0 + leafThickness, y + h, room.origin.z + size.z),
            color,
          );
          builder.box(
            Vec3(room.origin.x + u0 + leafThickness, y + 0.95, room.origin.z + size.z - portal.width + 0.06),
            Vec3(room.origin.x + u0 + leafThickness + 0.04, y + 1.02, room.origin.z + size.z - portal.width + 0.12),
            brassHardwareColor,
          );
        case Facing.east:
          builder.box(
            Vec3(room.origin.x + size.x - portal.width, y, room.origin.z + u0),
            Vec3(room.origin.x + size.x, y + h, room.origin.z + u0 + leafThickness),
            color,
          );
          builder.box(
            Vec3(room.origin.x + size.x - portal.width + 0.06, y + 0.95, room.origin.z + u0 + leafThickness),
            Vec3(room.origin.x + size.x - portal.width + 0.12, y + 1.02, room.origin.z + u0 + leafThickness + 0.04),
            brassHardwareColor,
          );
        case Facing.west:
          builder.box(
            Vec3(room.origin.x, y, room.origin.z + u0),
            Vec3(room.origin.x + portal.width, y + h, room.origin.z + u0 + leafThickness),
            color,
          );
          builder.box(
            Vec3(room.origin.x + portal.width - 0.12, y + 0.95, room.origin.z + u0 + leafThickness),
            Vec3(room.origin.x + portal.width - 0.06, y + 1.02, room.origin.z + u0 + leafThickness + 0.04),
            brassHardwareColor,
          );
      }
    } else {
      // Closed pose flush with portal frame
      switch (facing) {
        case Facing.north:
          builder.box(
            Vec3(room.origin.x + u0, y, room.origin.z),
            Vec3(room.origin.x + u0 + portal.width, y + h, room.origin.z + leafThickness),
            color,
          );
          // Victorian 4-panel moldings & hardware
          if (!isCellarGrille) {
            final pw = (portal.width - 0.32) * 0.5;
            // Lower panels
            builder.box(Vec3(room.origin.x + u0 + 0.11, y + 0.16, room.origin.z + 0.005), Vec3(room.origin.x + u0 + 0.11 + pw, y + 0.82, room.origin.z + leafThickness - 0.005), panelRecessColor);
            builder.box(Vec3(room.origin.x + u0 + portal.width - 0.11 - pw, y + 0.16, room.origin.z + 0.005), Vec3(room.origin.x + u0 + portal.width - 0.11, y + 0.82, room.origin.z + leafThickness - 0.005), panelRecessColor);
            // Upper panels
            builder.box(Vec3(room.origin.x + u0 + 0.11, y + 1.10, room.origin.z + 0.005), Vec3(room.origin.x + u0 + 0.11 + pw, y + h - 0.16, room.origin.z + leafThickness - 0.005), panelRecessColor);
            builder.box(Vec3(room.origin.x + u0 + portal.width - 0.11 - pw, y + 1.10, room.origin.z + 0.005), Vec3(room.origin.x + u0 + portal.width - 0.11, y + h - 0.16, room.origin.z + leafThickness - 0.005), panelRecessColor);
            // Cast iron rim lock box & brass knob
            builder.box(Vec3(room.origin.x + u0 + portal.width - 0.18, y + 0.94, room.origin.z - 0.015), Vec3(room.origin.x + u0 + portal.width - 0.04, y + 1.06, room.origin.z + leafThickness + 0.015), rimLockColor);
            builder.box(Vec3(room.origin.x + u0 + portal.width - 0.15, y + 0.97, room.origin.z + leafThickness + 0.015), Vec3(room.origin.x + u0 + portal.width - 0.09, y + 1.03, room.origin.z + leafThickness + 0.05), brassHardwareColor);
            if (isFrontDoor) {
              // Brass letterbox flap on lock rail
              builder.box(Vec3(room.origin.x + u0 + portal.width * 0.35, y + 0.97, room.origin.z - 0.01), Vec3(room.origin.x + u0 + portal.width * 0.65, y + 1.03, room.origin.z + 0.01), brassHardwareColor);
            }
          }
        case Facing.south:
          builder.box(
            Vec3(room.origin.x + u0, y, room.origin.z + size.z - leafThickness),
            Vec3(room.origin.x + u0 + portal.width, y + h, room.origin.z + size.z),
            color,
          );
          if (!isCellarGrille) {
            builder.box(Vec3(room.origin.x + u0 + portal.width - 0.18, y + 0.94, room.origin.z + size.z - leafThickness - 0.015), Vec3(room.origin.x + u0 + portal.width - 0.04, y + 1.06, room.origin.z + size.z + 0.015), rimLockColor);
            builder.box(Vec3(room.origin.x + u0 + portal.width - 0.15, y + 0.97, room.origin.z + size.z - leafThickness - 0.05), Vec3(room.origin.x + u0 + portal.width - 0.09, y + 1.03, room.origin.z + size.z - leafThickness - 0.015), brassHardwareColor);
          }
        case Facing.east:
          builder.box(
            Vec3(room.origin.x + size.x - leafThickness, y, room.origin.z + u0),
            Vec3(room.origin.x + size.x, y + h, room.origin.z + u0 + portal.width),
            color,
          );
          if (!isCellarGrille) {
            builder.box(Vec3(room.origin.x + size.x - leafThickness - 0.015, y + 0.94, room.origin.z + u0 + portal.width - 0.18), Vec3(room.origin.x + size.x + 0.015, y + 1.06, room.origin.z + u0 + portal.width - 0.04), rimLockColor);
            builder.box(Vec3(room.origin.x + size.x - leafThickness - 0.05, y + 0.97, room.origin.z + u0 + portal.width - 0.15), Vec3(room.origin.x + size.x - leafThickness - 0.015, y + 1.03, room.origin.z + u0 + portal.width - 0.09), brassHardwareColor);
          }
        case Facing.west:
          builder.box(
            Vec3(room.origin.x, y, room.origin.z + u0),
            Vec3(room.origin.x + leafThickness, y + h, room.origin.z + u0 + portal.width),
            color,
          );
          if (!isCellarGrille) {
            builder.box(Vec3(room.origin.x - 0.015, y + 0.94, room.origin.z + u0 + portal.width - 0.18), Vec3(room.origin.x + leafThickness + 0.015, y + 1.06, room.origin.z + u0 + portal.width - 0.04), rimLockColor);
            builder.box(Vec3(room.origin.x + leafThickness + 0.015, y + 0.97, room.origin.z + u0 + portal.width - 0.15), Vec3(room.origin.x + leafThickness + 0.05, y + 1.03, room.origin.z + u0 + portal.width - 0.09), brassHardwareColor);
          }
      }
    }
    return builder.build();
  }

  /// Synthesizes authentic Victorian double-hung timber sash window joinery
  /// including outer casing, meeting rails, glazing muntins, sills, and pocket shutters.
  Float32List buildWindowJoinery(House house, Room room) =>
      WindowJoineryBuilder.buildWindowJoinery(house, room);

  /// Synthesizes authoritative physical collision hulls for all architectural
  /// fixtures, obstacles, and stair steps in [house].
  List<ArchitecturalCollisionHull> buildCollisionHulls(House house) {
    final hulls = <ArchitecturalCollisionHull>[];

    for (final room in house.rooms) {
      final size = house.effectiveSize(room);

      // Room-specific fixtures
      if (room.id == 'cellar') {
        // Support piers
        hulls.add(
          ArchitecturalCollisionHull(
            id: 'cellar-pier-west',
            roomId: 'cellar',
            kind: CollisionHullKind.solidBox,
            min: Vec3(room.origin.x + 0.1, room.origin.y, room.origin.z + size.z * 0.4),
            max: Vec3(room.origin.x + 0.5, room.origin.y + size.y, room.origin.z + size.z * 0.6),
          ),
        );
        hulls.add(
          ArchitecturalCollisionHull(
            id: 'cellar-sump-pit',
            roomId: 'cellar',
            kind: CollisionHullKind.obstacleBox,
            min: Vec3(room.origin.x + size.x * 0.4, room.origin.y, room.origin.z + size.z * 0.4),
            max: Vec3(room.origin.x + size.x * 0.6, room.origin.y + 0.1, room.origin.z + size.z * 0.6),
          ),
        );
      } else if (room.id == 'living-room') {
        // Hearth and fireplace plinth
        hulls.add(
          ArchitecturalCollisionHull(
            id: 'living-hearth-plinth',
            roomId: 'living-room',
            kind: CollisionHullKind.obstacleBox,
            min: Vec3(room.origin.x + size.x * 0.35, room.origin.y, room.origin.z),
            max: Vec3(room.origin.x + size.x * 0.65, room.origin.y + 0.25, room.origin.z + 0.45),
          ),
        );
      } else if (room.id == 'hall') {
        // Staircase steps
        const stepCount = 14;
        final x0 = room.origin.x + size.x * 0.55;
        final x1 = room.origin.x + size.x - 0.15;
        final z0 = room.origin.z + size.z * 0.35;
        final z1 = room.origin.z + size.z * 0.85;
        final totalH = size.y - 0.02;
        final stepH = totalH / stepCount;
        final stepD = (z1 - z0) / stepCount;

        for (var i = 0; i < stepCount; i++) {
          final curY = room.origin.y + (i + 1) * stepH;
          final curZ = z1 - (i + 1) * stepD;
          hulls.add(
            ArchitecturalCollisionHull(
              id: 'hall-stair-step-$i',
              roomId: 'hall',
              kind: CollisionHullKind.stepPlane,
              min: Vec3(x0, room.origin.y, curZ),
              max: Vec3(x1, curY, curZ + stepD),
              stepHeight: curY,
            ),
          );
        }
      }
    }

    // Add physical collision hulls for solid and interactive furnishings
    hulls.addAll(ArchitecturalSceneAdapter.instance.buildCollisionHulls(house));

    return hulls;
  }

  RoomGeometry _buildFallbackRoom(House house, Room room) {
    final builder = _DefaultRoomBuilder(room.id);
    return builder.build(house, house.drift);
  }
}

class _DefaultRoomBuilder extends RoomBuilder {
  _DefaultRoomBuilder(super.roomId);
}
