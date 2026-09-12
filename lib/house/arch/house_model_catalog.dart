import '../../engine/math3.dart';

/// Provenance source repository for a 3D model.
enum ModelSource {
  polyhaven,
  kenney,
}

/// 3D file delivery format.
enum ModelFormat {
  gltf,
  glb,
}

/// Metadata and physical envelope specification for an authored 3D model.
class ModelCatalogEntry {
  final String id;
  final String name;
  final ModelSource source;
  final ModelFormat format;
  final String assetPath;
  final double width;
  final double height;
  final double depth;
  final double collisionRadius;
  final double collisionHeight;
  final double defaultYawDegrees;
  final String category;
  final List<String> tags;

  const ModelCatalogEntry({
    required this.id,
    required this.name,
    required this.source,
    required this.format,
    required this.assetPath,
    required this.width,
    required this.height,
    required this.depth,
    required this.collisionRadius,
    required this.collisionHeight,
    this.defaultYawDegrees = 0.0,
    required this.category,
    this.tags = const [],
  });

  Vec3 get dimensions => Vec3(width, height, depth);
}

/// Authoritative catalog of curated 80s–90s domestic 3D models available for house architectural placement.
class HouseModelCatalog {
  HouseModelCatalog._();

  static const Map<String, ModelCatalogEntry> all = {
    // ==========================================
    // Poly Haven Photorealistic 80s–90s Props
    // ==========================================
    'polyhaven.television-01': ModelCatalogEntry(
      id: 'polyhaven.television-01',
      name: 'Cathode Ray Tube Television 01',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/Television_01/Television_01_1k.gltf',
      width: 0.58,
      height: 0.46,
      depth: 0.40,
      collisionRadius: 0.32,
      collisionHeight: 0.46,
      category: 'living',
      tags: ['tv', 'crt', 'retro', 'electronics', 'entertainment'],
    ),
    'polyhaven.coffee-table-01': ModelCatalogEntry(
      id: 'polyhaven.coffee-table-01',
      name: 'Domestic Wooden Coffee Table 01',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/CoffeeTable_01/CoffeeTable_01_1k.gltf',
      width: 1.10,
      height: 0.45,
      depth: 0.60,
      collisionRadius: 0.60,
      collisionHeight: 0.45,
      category: 'living',
      tags: ['table', 'coffee-table', 'furniture', 'wood'],
    ),
    'polyhaven.desk-lamp-arm-01': ModelCatalogEntry(
      id: 'polyhaven.desk-lamp-arm-01',
      name: 'Articulated Anglepoise Desk Lamp 01',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/desk_lamp_arm_01/desk_lamp_arm_01_1k.gltf',
      width: 0.22,
      height: 0.48,
      depth: 0.26,
      collisionRadius: 0.15,
      collisionHeight: 0.48,
      category: 'lighting',
      tags: ['lamp', 'desk-lamp', 'light', 'practical'],
    ),
    'polyhaven.alarm-clock-01': ModelCatalogEntry(
      id: 'polyhaven.alarm-clock-01',
      name: 'Twin-Bell Retro Alarm Clock 01',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/alarm_clock_01/alarm_clock_01_1k.gltf',
      width: 0.14,
      height: 0.16,
      depth: 0.09,
      collisionRadius: 0.10,
      collisionHeight: 0.16,
      category: 'bedroom',
      tags: ['clock', 'alarm', 'retro', 'bedside'],
    ),

    // ==========================================
    // Kenney Curated Domestic Furniture Kit
    // ==========================================
    'kenney.bathtub': ModelCatalogEntry(
      id: 'kenney.bathtub',
      name: 'Clawfoot Bathtub',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/bathtub.glb',
      width: 1.70,
      height: 0.60,
      depth: 0.75,
      collisionRadius: 0.85,
      collisionHeight: 0.60,
      category: 'bathroom',
      tags: ['bath', 'plumbing', 'sanitary'],
    ),
    'kenney.bathroom-sink': ModelCatalogEntry(
      id: 'kenney.bathroom-sink',
      name: 'Pedestal Bathroom Sink',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/bathroomSink.glb',
      width: 0.60,
      height: 0.85,
      depth: 0.50,
      collisionRadius: 0.35,
      collisionHeight: 0.85,
      category: 'bathroom',
      tags: ['sink', 'basin', 'plumbing'],
    ),
    'kenney.bathroom-mirror': ModelCatalogEntry(
      id: 'kenney.bathroom-mirror',
      name: 'Wall Bathroom Mirror',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/bathroomMirror.glb',
      width: 0.50,
      height: 0.70,
      depth: 0.08,
      collisionRadius: 0.25,
      collisionHeight: 0.70,
      category: 'bathroom',
      tags: ['mirror', 'wall'],
    ),
    'kenney.bed-double': ModelCatalogEntry(
      id: 'kenney.bed-double',
      name: 'Master Double Bedstead',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/bedDouble.glb',
      width: 1.60,
      height: 0.90,
      depth: 2.05,
      collisionRadius: 1.05,
      collisionHeight: 0.90,
      category: 'bedroom',
      tags: ['bed', 'sleeping', 'master'],
    ),
    'kenney.bed-single': ModelCatalogEntry(
      id: 'kenney.bed-single',
      name: 'Single Bedstead',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/bedSingle.glb',
      width: 1.00,
      height: 0.85,
      depth: 2.00,
      collisionRadius: 0.80,
      collisionHeight: 0.85,
      category: 'bedroom',
      tags: ['bed', 'single'],
    ),
    'kenney.bedside-table': ModelCatalogEntry(
      id: 'kenney.bedside-table',
      name: 'Bedside Drawer Cabinet',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/cabinetBedDrawerTable.glb',
      width: 0.50,
      height: 0.60,
      depth: 0.45,
      collisionRadius: 0.30,
      collisionHeight: 0.60,
      category: 'bedroom',
      tags: ['nightstand', 'cabinet', 'bedside'],
    ),
    'kenney.bookcase': ModelCatalogEntry(
      id: 'kenney.bookcase',
      name: 'Living Room Bookcase Closed',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/bookcaseClosed.glb',
      width: 0.90,
      height: 1.80,
      depth: 0.40,
      collisionRadius: 0.45,
      collisionHeight: 1.80,
      category: 'living',
      tags: ['bookcase', 'storage', 'books'],
    ),
    'kenney.coat-rack': ModelCatalogEntry(
      id: 'kenney.coat-rack',
      name: 'Standing Hallway Coat Rack',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/coatRackStanding.glb',
      width: 0.45,
      height: 1.85,
      depth: 0.45,
      collisionRadius: 0.25,
      collisionHeight: 1.85,
      category: 'hall',
      tags: ['hall', 'coat-rack', 'entry'],
    ),
    'kenney.desk': ModelCatalogEntry(
      id: 'kenney.desk',
      name: 'Study Desk',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/desk.glb',
      width: 1.20,
      height: 0.75,
      depth: 0.65,
      collisionRadius: 0.65,
      collisionHeight: 0.75,
      category: 'office',
      tags: ['desk', 'study', 'work'],
    ),
    'kenney.desk-chair': ModelCatalogEntry(
      id: 'kenney.desk-chair',
      name: 'Swivel Desk Chair',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/chairDesk.glb',
      width: 0.55,
      height: 0.85,
      depth: 0.55,
      collisionRadius: 0.35,
      collisionHeight: 0.85,
      category: 'office',
      tags: ['chair', 'desk-chair'],
    ),
    'kenney.computer-screen': ModelCatalogEntry(
      id: 'kenney.computer-screen',
      name: 'Vintage CRT Computer Monitor',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/computerScreen.glb',
      width: 0.40,
      height: 0.38,
      depth: 0.35,
      collisionRadius: 0.22,
      collisionHeight: 0.38,
      category: 'office',
      tags: ['monitor', 'computer', 'crt', 'retro'],
    ),
    'kenney.cardboard-box': ModelCatalogEntry(
      id: 'kenney.cardboard-box',
      name: 'Archive Cardboard Storage Box',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/furniture_kit/Models/GLTF format/cardboardBoxClosed.glb',
      width: 0.50,
      height: 0.40,
      depth: 0.40,
      collisionRadius: 0.28,
      collisionHeight: 0.40,
      category: 'utility',
      tags: ['box', 'storage', 'archive', 'cellar'],
    ),

    // ==========================================
    // Roof, Attic & Cellar Expansion Models
    // ==========================================
    'polyhaven.roof-slates': ModelCatalogEntry(
      id: 'polyhaven.roof-slates',
      name: 'English Slate Roof Plane 02',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/roof/roof_slates_02/roof_slates_02_1k.gltf',
      width: 2.00,
      height: 0.08,
      depth: 2.00,
      collisionRadius: 1.00,
      collisionHeight: 0.08,
      category: 'roof',
      tags: ['roof', 'slate', 'tiles', 'exterior'],
    ),
    'polyhaven.wooden-ladder': ModelCatalogEntry(
      id: 'polyhaven.wooden-ladder',
      name: 'Timber Loft Access Ladder',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/wooden_ladder/wooden_ladder_1k.gltf',
      width: 0.48,
      height: 2.35,
      depth: 0.14,
      collisionRadius: 0.28,
      collisionHeight: 2.35,
      category: 'attic',
      tags: ['ladder', 'loft', 'attic', 'wood', 'utility'],
    ),
    'polyhaven.wooden-crate-01': ModelCatalogEntry(
      id: 'polyhaven.wooden-crate-01',
      name: 'Weathered Storage Crate 01',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/wooden_crate_01/wooden_crate_01_1k.gltf',
      width: 0.62,
      height: 0.48,
      depth: 0.48,
      collisionRadius: 0.35,
      collisionHeight: 0.48,
      category: 'storage',
      tags: ['crate', 'box', 'wood', 'attic', 'cellar'],
    ),
    'polyhaven.lantern-01': ModelCatalogEntry(
      id: 'polyhaven.lantern-01',
      name: 'Brass Utility Storm Lantern 01',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/Lantern_01/Lantern_01_1k.gltf',
      width: 0.22,
      height: 0.38,
      depth: 0.22,
      collisionRadius: 0.15,
      collisionHeight: 0.38,
      category: 'lighting',
      tags: ['lantern', 'oil', 'brass', 'attic', 'cellar', 'light'],
    ),
    'polyhaven.wine-barrel-01': ModelCatalogEntry(
      id: 'polyhaven.wine-barrel-01',
      name: 'Subterranean Oak Wine Barrel 01',
      source: ModelSource.polyhaven,
      format: ModelFormat.gltf,
      assetPath: 'assets-src/polyhaven/props/wine_barrel_01/wine_barrel_01_1k.gltf',
      width: 0.68,
      height: 0.94,
      depth: 0.68,
      collisionRadius: 0.38,
      collisionHeight: 0.94,
      category: 'cellar',
      tags: ['barrel', 'wine', 'wood', 'cellar'],
    ),
    'kenney.chest': ModelCatalogEntry(
      id: 'kenney.chest',
      name: 'Attic Travel Trunk / Chest',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/survival_kit/Models/GLB format/chest.glb',
      width: 0.75,
      height: 0.50,
      depth: 0.45,
      collisionRadius: 0.40,
      collisionHeight: 0.50,
      category: 'attic',
      tags: ['chest', 'trunk', 'luggage', 'attic', 'storage'],
    ),
    'kenney.barrel': ModelCatalogEntry(
      id: 'kenney.barrel',
      name: 'Cellar Utility Barrel',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/survival_kit/Models/GLB format/barrel.glb',
      width: 0.60,
      height: 0.80,
      depth: 0.60,
      collisionRadius: 0.35,
      collisionHeight: 0.80,
      category: 'cellar',
      tags: ['barrel', 'storage', 'cellar'],
    ),
    'kenney.bucket': ModelCatalogEntry(
      id: 'kenney.bucket',
      name: 'Cellar Sump Bucket',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/survival_kit/Models/GLB format/bucket.glb',
      width: 0.35,
      height: 0.35,
      depth: 0.35,
      collisionRadius: 0.20,
      collisionHeight: 0.35,
      category: 'utility',
      tags: ['bucket', 'metal', 'sump', 'utility'],
    ),
    'kenney.detail-pipe': ModelCatalogEntry(
      id: 'kenney.detail-pipe',
      name: 'Cast-Iron Drainage / Downpipe Section',
      source: ModelSource.kenney,
      format: ModelFormat.glb,
      assetPath: 'assets-src/kenney/3d/building_kit/Models/GLB format/detail-pipe.glb',
      width: 0.20,
      height: 1.00,
      depth: 0.20,
      collisionRadius: 0.15,
      collisionHeight: 1.00,
      category: 'utility',
      tags: ['pipe', 'conduit', 'downpipe', 'roof', 'cellar'],
    ),
  };

  /// Resolves an entry by its ID or null if missing.
  static ModelCatalogEntry? find(String id) => all[id];

  /// Resolves an entry by its ID or throws a [StateError].
  static ModelCatalogEntry resolve(String id) {
    final entry = all[id];
    if (entry == null) {
      throw StateError('HouseModelCatalog: Unknown 3D model id [$id]');
    }
    return entry;
  }

  /// Lists entries belonging to a given category.
  static List<ModelCatalogEntry> forCategory(String category) =>
      all.values.where((e) => e.category == category).toList(growable: false);
}
