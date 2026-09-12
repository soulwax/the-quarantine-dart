import 'dart:typed_data';

import '../../engine/math3.dart';
import '../../engine/vertex_format.dart';

/// Sophisticated architectural mesh builder supporting quads, boxes, prisms,
/// and wall apertures with proper normals, tangents, colors, and UV coordinates.
///
/// Produces vertices matching the 14-float compatibility layout:
/// [pos.xyz, normal.xyz, color.rgb, glow, alpha, uv.uv, material]
class ArchMeshBuilder {
  static const int floatsPerVertex = vertexStride; // 14
  static const int floatsPerQuad = vertsPerQuad * floatsPerVertex; // 6 * 14 = 84

  Float32List _buffer = Float32List(floatsPerQuad * 128);
  int _used = 0;

  int get vertexCount => _used ~/ floatsPerVertex;
  int get quadCount => _used ~/ floatsPerQuad;
  bool get isEmpty => _used == 0;
  bool get isNotEmpty => _used > 0;

  void ensureCapacity(int additionalFloats) {
    if (_used + additionalFloats > _buffer.length) {
      var nextSize = _buffer.length * 2;
      while (nextSize < _used + additionalFloats) {
        nextSize *= 2;
      }
      final grown = Float32List(nextSize);
      grown.setRange(0, _used, _buffer);
      _buffer = grown;
    }
  }

  /// Adds an explicit quad given four coplanar vertices in CCW order.
  void quad(
    Vec3 a,
    Vec3 b,
    Vec3 c,
    Vec3 d,
    int rgb, {
    Vec3? normalOverride,
    bool glow = false,
    double alpha = 1.0,
    double ao = 1.0,
    double u = 0.0,
    double v = 0.0,
    double uScale = 1.0,
    double vScale = 1.0,
    double material = 0.0,
  }) {
    ensureCapacity(floatsPerQuad);

    final n = normalOverride ?? (b - a).cross(d - a).normalized;
    final r = (((rgb >> 16) & 0xff) / 255.0) * ao;
    final g = (((rgb >> 8) & 0xff) / 255.0) * ao;
    final bl = ((rgb & 0xff) / 255.0) * ao;
    final glowVal = glow ? 1.0 : 0.0;

    // First triangle: a -> b -> c
    _used = _put(_buffer, _used, a, n, r, g, bl, glowVal, alpha, u, v, material);
    _used = _put(_buffer, _used, b, n, r, g, bl, glowVal, alpha, u + uScale, v, material);
    _used = _put(_buffer, _used, c, n, r, g, bl, glowVal, alpha, u + uScale, v + vScale, material);

    // Second triangle: a -> c -> d
    _used = _put(_buffer, _used, a, n, r, g, bl, glowVal, alpha, u, v, material);
    _used = _put(_buffer, _used, c, n, r, g, bl, glowVal, alpha, u + uScale, v + vScale, material);
    _used = _put(_buffer, _used, d, n, r, g, bl, glowVal, alpha, u, v + vScale, material);
  }

  /// Emits an axis-aligned box between [min] and [max].
  void box(
    Vec3 min,
    Vec3 max,
    int rgb, {
    double alpha = 1.0,
    double uScale = 1.0,
    double vScale = 1.0,
    double material = 0.0,
    bool top = true,
    bool bottom = true,
    bool north = true,
    bool south = true,
    bool east = true,
    bool west = true,
  }) {
    final x0 = min.x, y0 = min.y, z0 = min.z;
    final x1 = max.x, y1 = max.y, z1 = max.z;

    // Top (+Y)
    if (top) {
      quad(
        Vec3(x0, y1, z0),
        Vec3(x0, y1, z1),
        Vec3(x1, y1, z1),
        Vec3(x1, y1, z0),
        rgb,
        alpha: alpha,
        uScale: uScale,
        vScale: vScale,
        material: material,
      );
    }
    // Bottom (-Y)
    if (bottom) {
      quad(
        Vec3(x0, y0, z1),
        Vec3(x0, y0, z0),
        Vec3(x1, y0, z0),
        Vec3(x1, y0, z1),
        rgb,
        alpha: alpha,
        uScale: uScale,
        vScale: vScale,
        material: material,
      );
    }
    // North (-Z)
    if (north) {
      quad(
        Vec3(x1, y0, z0),
        Vec3(x0, y0, z0),
        Vec3(x0, y1, z0),
        Vec3(x1, y1, z0),
        rgb,
        alpha: alpha,
        uScale: uScale,
        vScale: vScale,
        material: material,
      );
    }
    // South (+Z)
    if (south) {
      quad(
        Vec3(x0, y0, z1),
        Vec3(x1, y0, z1),
        Vec3(x1, y1, z1),
        Vec3(x0, y1, z1),
        rgb,
        alpha: alpha,
        uScale: uScale,
        vScale: vScale,
        material: material,
      );
    }
    // West (-X)
    if (west) {
      quad(
        Vec3(x0, y0, z0),
        Vec3(x0, y0, z1),
        Vec3(x0, y1, z1),
        Vec3(x0, y1, z0),
        rgb,
        alpha: alpha,
        uScale: uScale,
        vScale: vScale,
        material: material,
      );
    }
    // East (+X)
    if (east) {
      quad(
        Vec3(x1, y0, z1),
        Vec3(x1, y0, z0),
        Vec3(x1, y1, z0),
        Vec3(x1, y1, z1),
        rgb,
        alpha: alpha,
        uScale: uScale,
        vScale: vScale,
        material: material,
      );
    }
  }

  /// Appends raw vertex floats from another buffer.
  void appendRaw(Float32List source) {
    if (source.isEmpty) return;
    ensureCapacity(source.length);
    _buffer.setRange(_used, _used + source.length, source);
    _used += source.length;
  }

  /// Finishes and returns the compacted float buffer.
  Float32List build() => _buffer.sublist(0, _used);

  static int _put(
    Float32List out,
    int at,
    Vec3 p,
    Vec3 n,
    double r,
    double g,
    double b,
    double glow,
    double alpha,
    double u,
    double v,
    double material,
  ) {
    out[at] = p.x;
    out[at + 1] = p.y;
    out[at + 2] = p.z;
    out[at + 3] = n.x;
    out[at + 4] = n.y;
    out[at + 5] = n.z;
    out[at + 6] = r;
    out[at + 7] = g;
    out[at + 8] = b;
    out[at + 9] = glow;
    out[at + 10] = alpha;
    out[at + 11] = u;
    out[at + 12] = v;
    out[at + 13] = material;
    return at + floatsPerVertex;
  }
}
