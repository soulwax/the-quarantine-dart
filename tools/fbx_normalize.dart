#!/usr/bin/env dart

import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:pixeldart/assets/importers/fbx_import_config.dart';

Future<void> main(List<String> args) async {
  if (args.length != 5 || args[0] != 'normalize' || args[3] != '--out') {
    stderr.writeln(
      'usage: dart run tools/fbx_normalize.dart normalize <room.glb> <import.json> --out <dir>',
    );
    exitCode = 64;
    return;
  }
  final glb = File(args[1]);
  final configFile = File(args[2]);
  final output = Directory(args[4]);
  if (!glb.existsSync()) {
    stderr.writeln('GLB does not exist: ${glb.path}');
    exitCode = 5;
    return;
  }
  if (!configFile.existsSync()) {
    stderr.writeln('import config does not exist: ${configFile.path}');
    exitCode = 5;
    return;
  }
  if (output.existsSync() && output.listSync().isNotEmpty) {
    stderr.writeln(
      'refusing to overwrite non-empty output directory: ${output.path}',
    );
    exitCode = 73;
    return;
  }
  output.createSync(recursive: true);
  try {
    final config = FbxImportConfig.fromJson(
      jsonDecode(configFile.readAsStringSync()) as Map<String, dynamic>,
    );
    final configErrors = config.validate();
    if (config.settingsHash != config.computedSettingsHash()) {
      configErrors.add('settingsHash does not match canonical import settings');
    }
    if (configErrors.isNotEmpty) {
      throw FormatException(configErrors.join('; '));
    }
    final parsed = _Glb.parse(glb.readAsBytesSync());
    final provenanceFile = File('${configFile.parent.path}/PROVENANCE.json');
    final provenance = provenanceFile.existsSync()
        ? jsonDecode(provenanceFile.readAsStringSync()) as Map<String, dynamic>
        : const <String, dynamic>{};
    final sourceFiles = provenance['sourceFiles'];
    if (sourceFiles is! List || sourceFiles.isEmpty) {
      throw const FormatException('PROVENANCE.json requires sourceFiles');
    }
    for (final raw in sourceFiles) {
      final source = raw as Map;
      final relative = source['path'] as String?;
      final expectedHash = source['sha256'] as String?;
      if (relative == null || expectedHash == null) {
        throw const FormatException('sourceFiles require path and sha256');
      }
      if (relative.contains('..') || relative.startsWith('/')) {
        throw FormatException('unsafe provenance source path: $relative');
      }
      final sourceFile = File('${configFile.parent.path}/$relative');
      if (!sourceFile.existsSync()) {
        throw FormatException('provenance source does not exist: $relative');
      }
      final actualHash = Sha256.compute(sourceFile.readAsBytesSync());
      if (actualHash != expectedHash) {
        throw FormatException('provenance hash mismatch: $relative');
      }
    }
    final parts = <Map<String, Object?>>[];
    final allMin = [double.infinity, double.infinity, double.infinity];
    final allMax = [
      double.negativeInfinity,
      double.negativeInfinity,
      double.negativeInfinity,
    ];
    var partIndex = 0;
    final emittedFiles = <File>[];
    for (final primitive in parsed.meshes) {
      final stem = 'part-${partIndex.toString().padLeft(3, '0')}';
      final lodFractions = {
        'LOD-S': 1.0,
        'LOD0': 1.0,
        'LOD1': 0.5,
        'LOD2': 0.2,
      };
      final lodFiles = <String, String>{};
      final lodHashes = <String, String>{};
      final lodCounts = <String, int>{};
      _Qmesh? qmesh;
      for (final entry in lodFractions.entries) {
        final generated = primitive.toQmesh(
          parsed,
          scale: config.scaleToMetres,
          triangleFraction: entry.value,
        );
        qmesh ??= generated;
        final name = '$stem-${entry.key.toLowerCase()}.qmesh';
        final file = File('${output.path}/$name')
          ..writeAsBytesSync(generated.bytes);
        emittedFiles.add(file);
        lodFiles[entry.key] = name;
        lodHashes[entry.key] = Sha256.compute(generated.bytes);
        lodCounts[entry.key] = generated.vertexCount ~/ 3;
      }
      final base = qmesh!;
      for (var axis = 0; axis < 3; axis++) {
        allMin[axis] = math.min(allMin[axis], base.min[axis]);
        allMax[axis] = math.max(allMax[axis], base.max[axis]);
      }
      parts.add({
        'id': stem,
        'mesh': lodFiles['LOD0']!,
        'lodFiles': lodFiles,
        'materialSlot': primitive.material,
        'vertexCount': base.vertexCount,
        'indexCount': base.vertexCount,
        'indexType': 'expanded-triangles',
        'tangents': 'mikktspace-v2',
        'lodHashes': lodHashes,
        'lodTriangleCounts': lodCounts,
        'bounds': {'min': base.min, 'max': base.max},
      });
      partIndex++;
    }
    if (parts.isEmpty) {
      throw const FormatException('GLB contains no triangle primitives');
    }
    emittedFiles.sort((a, b) => a.path.compareTo(b.path));
    final packageHash = Sha256.compute(
      emittedFiles.expand((file) => file.readAsBytesSync()).toList(),
    );
    final manifest = <String, Object?>{
      'schema': 'pixeldart-fbx-package-v1',
      'assetId': config.assetId,
      'sourceFormat': 'fbx',
      'packageHash': packageHash,
      'packageFiles': emittedFiles
          .map((file) => file.path.substring(output.path.length + 1))
          .toList(),
      'converterId': config.converterId,
      'converterVersion': config.converterVersion,
      'settingsHash': config.settingsHash,
      'licenseId':
          provenance['licenseId'] ??
          (throw const FormatException('PROVENANCE.json requires licenseId')),
      'sourceFiles': provenance['sourceFiles'] ?? const [],
      'sourceHashes': (provenance['sourceFiles'] as List? ?? const [])
          .map((entry) => (entry as Map)['sha256'])
          .toList(),
      'units': config.units,
      'upAxis': config.upAxis,
      'pivot': config.pivot,
      'materialSlots': parsed.materialCount,
      'materials': parsed.materials,
      'parts': parts,
      'textures': parsed.textures,
      'mediaStatus':
          parsed.textures.any((texture) => texture['status'] != 'embedded')
          ? 'incomplete'
          : 'complete',
      'lods': const ['LOD-S', 'LOD0', 'LOD1', 'LOD2'],
      'combinedBounds': {'min': allMin, 'max': allMax},
      'runtimeProfile': 'inspection-only-lod-preview',
    };
    File('${output.path}/generated-manifest.json').writeAsStringSync(
      '${const JsonEncoder.withIndent('  ').convert(manifest)}\n',
    );
    stdout.writeln(
      const JsonEncoder.withIndent('  ').convert({
        'passed': true,
        'parts': parts.length,
        'packageHash': packageHash,
        'manifest': 'generated-manifest.json',
      }),
    );
  } on Object catch (error) {
    stderr.writeln('normalization failed: $error');
    exitCode = 6;
  }
}

final class _Qmesh {
  final Uint8List bytes;
  final List<double> min;
  final List<double> max;
  final int vertexCount;
  const _Qmesh(this.bytes, this.min, this.max, this.vertexCount);
}

final class _Primitive {
  final Map<String, dynamic> attributes;
  final int? indices;
  final int? material;
  const _Primitive(this.attributes, this.indices, this.material);

  _Qmesh toQmesh(
    _Glb glb, {
    required double scale,
    double triangleFraction = 1.0,
  }) {
    final positions = glb.accessor(attributes['POSITION'] as int);
    final normals = attributes['NORMAL'] is int
        ? glb.accessor(attributes['NORMAL'] as int)
        : null;
    final tangents = attributes['TANGENT'] is int
        ? glb.accessor(attributes['TANGENT'] as int)
        : null;
    final uvs = attributes['TEXCOORD_0'] is int
        ? glb.accessor(attributes['TEXCOORD_0'] as int)
        : null;
    final fullOrder = indices == null
        ? List<int>.generate(positions.count, (i) => i)
        : glb.accessor(indices!).values.map((v) => v.round()).toList();
    final targetTriangles = math.max(
      1,
      (fullOrder.length ~/ 3 * triangleFraction).floor(),
    );
    final order = fullOrder.sublist(
      0,
      math.min(fullOrder.length, targetTriangles * 3),
    );
    if (order.length % 3 != 0) {
      throw const FormatException(
        'primitive index count is not divisible by 3',
      );
    }
    final min = [double.infinity, double.infinity, double.infinity];
    final max = [
      double.negativeInfinity,
      double.negativeInfinity,
      double.negativeInfinity,
    ];
    final floats = Float32List(order.length * 18);
    for (var i = 0; i < order.length; i++) {
      final source = order[i];
      final p = positions.at(source);
      if (p.any((value) => !value.isFinite)) {
        throw FormatException('non-finite POSITION at vertex $source');
      }
      final candidateNormal = normals?.at(source) ?? const [0.0, 1.0, 0.0];
      final candidateLength = candidateNormal.length >= 3
          ? math.sqrt(
              candidateNormal[0] * candidateNormal[0] +
                  candidateNormal[1] * candidateNormal[1] +
                  candidateNormal[2] * candidateNormal[2],
            )
          : 0.0;
      final n =
          candidateNormal.length >= 3 &&
              candidateNormal.take(3).every((value) => value.isFinite) &&
              candidateLength > 1e-6
          ? [
              candidateNormal[0] / candidateLength,
              candidateNormal[1] / candidateLength,
              candidateNormal[2] / candidateLength,
            ]
          : const [0.0, 1.0, 0.0];
      final candidateTangent = tangents?.at(source);
      final rawTangent =
          candidateTangent != null &&
              candidateTangent.take(3).every((value) => value.isFinite)
          ? candidateTangent
          : _fallbackTangent(n);
      final dot =
          rawTangent[0] * n[0] + rawTangent[1] * n[1] + rawTangent[2] * n[2];
      final tx = rawTangent[0] - n[0] * dot;
      final ty = rawTangent[1] - n[1] * dot;
      final tz = rawTangent[2] - n[2] * dot;
      final length = math.sqrt(tx * tx + ty * ty + tz * tz);
      final t = length < 1e-6
          ? _fallbackTangent(n)
          : [
              tx / length,
              ty / length,
              tz / length,
              rawTangent.length > 3 ? rawTangent[3] : 1.0,
            ];
      final candidateUv = uvs?.at(source);
      final uv =
          candidateUv != null &&
              candidateUv.take(2).every((value) => value.isFinite)
          ? candidateUv
          : const [0.0, 0.0];
      final base = i * 18;
      for (var axis = 0; axis < 3; axis++) {
        final value = p[axis] * scale;
        floats[base + axis] = value;
        min[axis] = math.min(min[axis], value);
        max[axis] = math.max(max[axis], value);
        floats[base + 3 + axis] = n[axis];
      }
      for (var j = 0; j < 4; j++) {
        floats[base + 6 + j] = t[j];
      }
      floats[base + 10] = 1;
      floats[base + 11] = 1;
      floats[base + 12] = 1;
      floats[base + 13] = 1;
      floats[base + 14] = 1;
      floats[base + 15] = uv[0];
      floats[base + 16] = uv[1];
      floats[base + 17] = 0;
    }
    final bytes = BytesBuilder();
    final header = ByteData(36);
    header.setUint8(0, 0x51);
    header.setUint8(1, 0x4d);
    header.setUint8(2, 0x53);
    header.setUint8(3, 0x48);
    header.setUint16(4, 2, Endian.little);
    header.setUint16(6, 18, Endian.little);
    header.setUint32(8, floats.length ~/ 18, Endian.little);
    for (var i = 0; i < 3; i++) {
      header.setFloat32(12 + i * 4, min[i], Endian.little);
      header.setFloat32(24 + i * 4, max[i], Endian.little);
    }
    bytes.add(header.buffer.asUint8List());
    bytes.add(floats.buffer.asUint8List());
    return _Qmesh(bytes.toBytes(), min, max, floats.length ~/ 18);
  }
}

List<double> _fallbackTangent(List<double> normal) {
  final axis = normal[1].abs() < 0.9
      ? const [0.0, 1.0, 0.0]
      : const [1.0, 0.0, 0.0];
  final x = axis[1] * normal[2] - axis[2] * normal[1];
  final y = axis[2] * normal[0] - axis[0] * normal[2];
  final z = axis[0] * normal[1] - axis[1] * normal[0];
  final length = math.sqrt(x * x + y * y + z * z);
  return [x / length, y / length, z / length, 1.0];
}

final class _Accessor {
  final List<double> values;
  final int count;
  final int components;
  const _Accessor(this.values, this.count, this.components);
  List<double> at(int index) =>
      values.sublist(index * components, (index + 1) * components);
}

final class _Glb {
  final Map<String, dynamic> json;
  final Uint8List bin;
  final List<_Primitive> meshes;
  const _Glb(this.json, this.bin, this.meshes);

  int get materialCount => (json['materials'] as List?)?.length ?? 0;

  List<Map<String, Object?>> get textures {
    final images = (json['images'] as List?) ?? const [];
    return [
      for (var i = 0; i < images.length; i++)
        () {
          final image = images[i] as Map;
          final hasBufferView = image['bufferView'] is int;
          final uri = image['uri'] as String?;
          return <String, Object?>{
            'id': 'texture-$i',
            'name': image['name'] ?? 'texture-$i',
            'uri': uri,
            'mimeType': image['mimeType'],
            'status': hasBufferView
                ? 'embedded'
                : uri == null
                ? 'missing'
                : 'external-reference',
          };
        }(),
    ];
  }

  List<Map<String, Object?>> get materials => [
    for (var i = 0; i < materialCount; i++)
      () {
        final material = (json['materials'] as List)[i] as Map;
        final pbr = material['pbrMetallicRoughness'] as Map?;
        return <String, Object?>{
          'slot': i,
          'name': material['name'] ?? 'material-$i',
          'baseColorFactor': pbr?['baseColorFactor'] ?? const [1, 1, 1, 1],
          'metallicFactor': pbr?['metallicFactor'] ?? 1.0,
          'roughnessFactor': pbr?['roughnessFactor'] ?? 1.0,
          'alphaMode': material['alphaMode'] ?? 'OPAQUE',
        };
      }(),
  ];

  factory _Glb.parse(Uint8List bytes) {
    final view = ByteData.sublistView(bytes);
    if (view.getUint32(0, Endian.little) != 0x46546c67) {
      throw const FormatException('bad GLB magic');
    }
    var offset = 12;
    Map<String, dynamic>? json;
    Uint8List? bin;
    while (offset < bytes.length) {
      final length = view.getUint32(offset, Endian.little);
      final type = view.getUint32(offset + 4, Endian.little);
      final data = bytes.sublist(offset + 8, offset + 8 + length);
      offset += 8 + length;
      if (type == 0x4e4f534a) {
        json = Map<String, dynamic>.from(
          jsonDecode(utf8.decode(data).trimRight().replaceAll('\u0000', ' '))
              as Map,
        );
      }
      if (type == 0x004e4942) bin = Uint8List.fromList(data);
    }
    if (json == null || bin == null) {
      throw const FormatException('GLB missing JSON or BIN chunk');
    }
    final primitives = <_Primitive>[];
    for (final mesh in (json['meshes'] as List? ?? const [])) {
      if (mesh is! Map) continue;
      for (final p in (mesh['primitives'] as List? ?? const [])) {
        if (p is! Map) continue;
        primitives.add(
          _Primitive(
            Map<String, dynamic>.from(p['attributes'] as Map),
            p['indices'] as int?,
            p['material'] as int?,
          ),
        );
      }
    }
    return _Glb(json, bin, primitives);
  }

  _Accessor accessor(int index) {
    final a = (json['accessors'] as List)[index] as Map<String, dynamic>;
    final viewIndex = a['bufferView'] as int;
    final bv = (json['bufferViews'] as List)[viewIndex] as Map<String, dynamic>;
    final component = a['componentType'] as int;
    final components = {
      'SCALAR': 1,
      'VEC2': 2,
      'VEC3': 3,
      'VEC4': 4,
    }[a['type']]!;
    final count = a['count'] as int;
    final start =
        (bv['byteOffset'] as int? ?? 0) + (a['byteOffset'] as int? ?? 0);
    final stride =
        bv['byteStride'] as int? ??
        (component == 5126
            ? 4
            : component == 5123
            ? 2
            : 4);
    final out = <double>[];
    final v = ByteData.sublistView(bin);
    for (var i = 0; i < count; i++) {
      for (var c = 0; c < components; c++) {
        final at =
            start +
            i * stride +
            c *
                (component == 5126
                    ? 4
                    : component == 5123
                    ? 2
                    : 4);
        out.add(
          component == 5126
              ? v.getFloat32(at, Endian.little)
              : component == 5123
              ? v.getUint16(at, Endian.little).toDouble()
              : v.getUint32(at, Endian.little).toDouble(),
        );
      }
    }
    return _Accessor(out, count, components);
  }
}
