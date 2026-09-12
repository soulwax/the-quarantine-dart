import '../engine/math3.dart';
import 'arch/aperture_cutter.dart';
import 'arch/mesh_builder.dart';
import 'arch/profile_extruder.dart';
import 'drift.dart';
import 'geometry.dart';
import 'house.dart';
import 'room.dart';
import 'surface_materials.dart';

/// Abstract base class for room-by-room architectural builders.
///
/// Each room in the house is constructed by a dedicated builder subclass
/// that provides authentic period details, clean apertures, trim moldings,
/// and fixture geometry.
abstract class RoomBuilder {
  final String roomId;

  const RoomBuilder(this.roomId);

  /// Main entry point: synthesizes complete [RoomGeometry] for this room.
  RoomGeometry build(House house, HouseDrift drift) {
    final room = house.byId(roomId);
    if (room == null) {
      throw StateError('RoomBuilder for [$roomId] cannot find room in House graph');
    }

    final size = house.effectiveSize(room);

    final floorBuilder = ArchMeshBuilder();
    final ceilingBuilder = ArchMeshBuilder();
    final wallBuilder = ArchMeshBuilder();
    final doorBuilder = ArchMeshBuilder();

    // 1. Structural shell
    buildFloor(floorBuilder, house, room, size);
    buildCeiling(ceilingBuilder, house, room, size);
    buildWalls(wallBuilder, house, room, size);

    // 2. Door frames and portals
    buildDoors(doorBuilder, house, room, size);

    // 3. Trims and Moldings
    buildTrims(wallBuilder, house, room, size);

    // 4. Architectural Fixtures
    buildFixtures(wallBuilder, house, room, size);

    return RoomGeometry(
      floor: floorBuilder.build(),
      ceiling: ceilingBuilder.build(),
      walls: wallBuilder.build(),
      doors: doorBuilder.build(),
    );
  }

  /// Builds the floor surface.
  void buildFloor(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    final o = room.origin;
    final floorMaterial = HouseSurfaceMaterials.forId(room.surfaceFloor);
    builder.quad(
      Vec3(o.x, o.y, o.z),
      Vec3(o.x, o.y, o.z + size.z),
      Vec3(o.x + size.x, o.y, o.z + size.z),
      Vec3(o.x + size.x, o.y, o.z),
      floorMaterial.tint,
      uScale: size.x / floorMaterial.uvMetres,
      vScale: size.z / floorMaterial.uvMetres,
    );
  }

  /// Builds the ceiling surface.
  void buildCeiling(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    final o = room.origin;
    final ceilingMaterial = HouseSurfaceMaterials.forId(room.surfaceCeiling);
    builder.quad(
      Vec3(o.x, o.y + size.y, o.z),
      Vec3(o.x + size.x, o.y + size.y, o.z),
      Vec3(o.x + size.x, o.y + size.y, o.z + size.z),
      Vec3(o.x, o.y + size.y, o.z + size.z),
      ceilingMaterial.tint,
      uScale: size.x / ceilingMaterial.uvMetres,
      vScale: size.z / ceilingMaterial.uvMetres,
    );
  }

  /// Builds the perimeter walls with apertures cut cleanly out.
  void buildWalls(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    final wallMaterial = HouseSurfaceMaterials.forId(room.surfaceWall);
    const revealColor = 0xA2988E;

    for (final facing in Facing.values) {
      final apertures = collectAperturesForFacing(house, room, facing);
      ApertureCutter.buildSubdividedWall(
        builder: builder,
        room: room,
        size: size,
        facing: facing,
        apertures: apertures,
        wallRgb: wallMaterial.tint,
        revealRgb: revealColor,
        uvMetres: wallMaterial.uvMetres,
      );
    }
  }

  /// Collects all portal and window apertures along a given wall facing.
  List<ApertureSpec> collectAperturesForFacing(
    House house,
    Room room,
    Facing facing,
  ) {
    final apertures = <ApertureSpec>[];

    // Portals
    for (final portal in house.portalsFor(room.id)) {
      if (portal.facingFor(room.id) == facing) {
        apertures.add(ApertureSpec(
          id: portal.id,
          offset: portal.offsetFor(room.id),
          sill: 0.0,
          width: portal.width,
          height: portal.height,
          isPortal: true,
        ));
      }
    }

    // Windows
    for (final win in room.windows) {
      if (win.facing == facing) {
        apertures.add(ApertureSpec(
          id: win.id,
          offset: win.offset,
          sill: win.sill,
          width: win.w,
          height: win.h,
          isPortal: false,
        ));
      }
    }

    return apertures;
  }

  /// Builds door frames, jambs, and casing trims.
  void buildDoors(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
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
  }

  /// Builds horizontal moldings (skirtings, picture rails, cornices).
  void buildTrims(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {
    for (final facing in Facing.values) {
      final apertures = collectAperturesForFacing(house, room, facing);

      // Baseboard skirting
      ProfileExtruder.extrudeHorizontalMolding(
        builder: builder,
        room: room,
        size: size,
        facing: facing,
        spec: MoldingSpec.skirting,
        apertures: apertures,
      );

      // Ceiling cornice
      ProfileExtruder.extrudeHorizontalMolding(
        builder: builder,
        room: room,
        size: size,
        facing: facing,
        spec: MoldingSpec.cornice(size.y),
        apertures: apertures,
      );
    }
  }

  /// Override to add room-specific fixtures (fireplaces, mantles, alcoves, sinks).
  void buildFixtures(
    ArchMeshBuilder builder,
    House house,
    Room room,
    Vec3 size,
  ) {}
}
