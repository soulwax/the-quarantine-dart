/// House-owned surface variants. The renderer remains responsible for loading
/// texture handles; this palette keeps authored room identity and presentation
/// tuning in the house layer.
final class HouseSurfaceMaterial {
  final String id;
  final String textureKey;
  final int tint;
  final double roughness;
  final double uvMetres;

  const HouseSurfaceMaterial({
    required this.id,
    required this.textureKey,
    required this.tint,
    required this.roughness,
    required this.uvMetres,
  });
}

final class HouseSurfaceMaterials {
  HouseSurfaceMaterials._();

  static const Map<String, HouseSurfaceMaterial> all = {
    'wallpaper-stripes': HouseSurfaceMaterial(
      id: 'wallpaper-stripes',
      textureKey: 'wall-plaster',
      tint: 0xB3A18B,
      roughness: 0.82,
      uvMetres: 0.55,
    ),
    'wallpaper-damask': HouseSurfaceMaterial(
      id: 'wallpaper-damask',
      textureKey: 'wall-plaster',
      tint: 0x8D7771,
      roughness: 0.76,
      uvMetres: 0.42,
    ),
    'wallpaper-floral': HouseSurfaceMaterial(
      id: 'wallpaper-floral',
      textureKey: 'wall-plaster',
      tint: 0xA99E83,
      roughness: 0.79,
      uvMetres: 0.48,
    ),
    'wallpaper-damp': HouseSurfaceMaterial(
      id: 'wallpaper-damp',
      textureKey: 'grime',
      tint: 0x6C716D,
      roughness: 0.94,
      uvMetres: 0.76,
    ),
    'wallpaper-faded': HouseSurfaceMaterial(
      id: 'wallpaper-faded',
      textureKey: 'wall-plaster',
      tint: 0xB9B09D,
      roughness: 0.86,
      uvMetres: 0.62,
    ),
    'wallpaper-tiles': HouseSurfaceMaterial(
      id: 'wallpaper-tiles',
      textureKey: 'floor-linoleum',
      tint: 0xB4B7A9,
      roughness: 0.63,
      uvMetres: 0.28,
    ),
    'wallpaper-peeling': HouseSurfaceMaterial(
      id: 'wallpaper-peeling',
      textureKey: 'grime',
      tint: 0x8E8678,
      roughness: 0.91,
      uvMetres: 0.68,
    ),
    'floor-wood': HouseSurfaceMaterial(
      id: 'floor-wood',
      textureKey: 'wall-plaster',
      tint: 0x76563F,
      roughness: 0.88,
      uvMetres: 0.22,
    ),
    'floor-linoleum': HouseSurfaceMaterial(
      id: 'floor-linoleum',
      textureKey: 'floor-linoleum',
      tint: 0x74786C,
      roughness: 0.61,
      uvMetres: 0.62,
    ),
    'floor-tiles': HouseSurfaceMaterial(
      id: 'floor-tiles',
      textureKey: 'floor-linoleum',
      tint: 0xB2AEA2,
      roughness: 0.57,
      uvMetres: 0.86,
    ),
    'floor-concrete': HouseSurfaceMaterial(
      id: 'floor-concrete',
      textureKey: 'grime',
      tint: 0x77736B,
      roughness: 0.96,
      uvMetres: 0.92,
    ),
    'ceiling-plaster': HouseSurfaceMaterial(
      id: 'ceiling-plaster',
      textureKey: 'wall-plaster',
      tint: 0xC0B9AA,
      roughness: 0.84,
      uvMetres: 0.70,
    ),
    'ceiling-pipes': HouseSurfaceMaterial(
      id: 'ceiling-pipes',
      textureKey: 'ceiling-stained',
      tint: 0x77736A,
      roughness: 0.92,
      uvMetres: 0.84,
    ),
    // --- Poly Haven 80s–90s Curated PBR Surfaces ---
    'polyhaven-decrepit-wallpaper': HouseSurfaceMaterial(
      id: 'polyhaven-decrepit-wallpaper',
      textureKey: 'polyhaven/walls/decrepit_wallpaper',
      tint: 0xB8AD9E,
      roughness: 0.88,
      uvMetres: 1.0,
    ),
    'polyhaven-dark-paneled-wood': HouseSurfaceMaterial(
      id: 'polyhaven-dark-paneled-wood',
      textureKey: 'polyhaven/walls/dark_paneled_wood',
      tint: 0x624838,
      roughness: 0.72,
      uvMetres: 0.8,
    ),
    'polyhaven-damaged-plaster': HouseSurfaceMaterial(
      id: 'polyhaven-damaged-plaster',
      textureKey: 'polyhaven/walls/damaged_plaster',
      tint: 0xABA49A,
      roughness: 0.90,
      uvMetres: 1.2,
    ),
    'polyhaven-diagonal-parquet': HouseSurfaceMaterial(
      id: 'polyhaven-diagonal-parquet',
      textureKey: 'polyhaven/floors/diagonal_parquet',
      tint: 0x8C6B4E,
      roughness: 0.65,
      uvMetres: 1.0,
    ),
    'polyhaven-dirty-carpet': HouseSurfaceMaterial(
      id: 'polyhaven-dirty-carpet',
      textureKey: 'polyhaven/floors/dirty_carpet',
      tint: 0x8A8072,
      roughness: 0.95,
      uvMetres: 1.0,
    ),
    'polyhaven-brown-floor-tiles': HouseSurfaceMaterial(
      id: 'polyhaven-brown-floor-tiles',
      textureKey: 'polyhaven/floors/brown_floor_tiles',
      tint: 0x967864,
      roughness: 0.55,
      uvMetres: 0.6,
    ),
    'polyhaven-ceiling-interior': HouseSurfaceMaterial(
      id: 'polyhaven-ceiling-interior',
      textureKey: 'polyhaven/ceilings/ceiling_interior',
      tint: 0xC5BFB5,
      roughness: 0.82,
      uvMetres: 1.0,
    ),
    'polyhaven-roof-slates': HouseSurfaceMaterial(
      id: 'polyhaven-roof-slates',
      textureKey: 'polyhaven/roof/roof_slates_02',
      tint: 0x3A3E44,
      roughness: 0.70,
      uvMetres: 1.0,
    ),
    'timber-rafters': HouseSurfaceMaterial(
      id: 'timber-rafters',
      textureKey: 'timber-dark',
      tint: 0x483626,
      roughness: 0.86,
      uvMetres: 0.5,
    ),
  };

  static HouseSurfaceMaterial forId(String id) {
    final material = all[id];
    if (material == null) {
      throw StateError('Unknown house surface material: $id');
    }
    return material;
  }
}
