import '../engine/math3.dart';
import 'arch/house_architect.dart';
import 'room.dart';

/// Value specification for a single room's authored architectural blueprint.
class RoomDescriptor {
  final String id;
  final Floor floor;
  final Vec3 origin;
  final Vec3 size;
  final String surfaceWall;
  final String surfaceFloor;
  final String surfaceCeiling;
  final List<Window> windows;
  final List<String> portalIds;
  final List<Mantle> mantles;
  final String? focalAnchor;
  final String? lightingRigId;
  final int lodTriangleBudget;
  final RoomArchitecturalProgram? architecturalProgram;
  final List<ArchitecturalModelInstance> modelInstances;

  const RoomDescriptor({
    required this.id,
    required this.floor,
    required this.origin,
    required this.size,
    required this.surfaceWall,
    required this.surfaceFloor,
    required this.surfaceCeiling,
    this.windows = const [],
    this.portalIds = const [],
    this.mantles = const [],
    this.focalAnchor,
    this.lightingRigId,
    this.lodTriangleBudget = 10000,
    this.architecturalProgram,
    this.modelInstances = const [],
  });

  /// Factory creating a descriptor directly from an existing authored [Room].
  factory RoomDescriptor.fromRoom(
    Room room, {
    String? lightingRigId,
    RoomArchitecturalProgram? architecturalProgram,
    List<ArchitecturalModelInstance> modelInstances = const [],
  }) {
    return RoomDescriptor(
      id: room.id,
      floor: room.floor,
      origin: room.origin,
      size: room.size,
      surfaceWall: room.surfaceWall,
      surfaceFloor: room.surfaceFloor,
      surfaceCeiling: room.surfaceCeiling,
      windows: room.windows,
      portalIds: room.portalIds,
      mantles: room.mantles,
      lightingRigId: lightingRigId ?? 'rig-${room.id}',
      architecturalProgram: architecturalProgram,
      modelInstances: modelInstances,
    );
  }

  /// Validates basic geometric and architectural invariants.
  void validate() {
    if (id.trim().isEmpty) {
      throw const FormatException('RoomDescriptor id cannot be empty');
    }
    if (!size.x.isFinite || size.x <= 0 ||
        !size.y.isFinite || size.y <= 0 ||
        !size.z.isFinite || size.z <= 0) {
      throw FormatException('RoomDescriptor [$id] has invalid dimensions: $size');
    }
    if (!origin.x.isFinite || !origin.y.isFinite || !origin.z.isFinite) {
      throw FormatException('RoomDescriptor [$id] has invalid origin: $origin');
    }
  }
}
