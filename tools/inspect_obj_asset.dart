#!/usr/bin/env dart

import 'dart:convert';
import 'dart:io';
import 'dart:math' as math;

void main(List<String> args) {
  if (args.length != 1) {
    stderr.writeln('usage: dart run tools/inspect_obj_asset.dart <model.obj>');
    exitCode = 64;
    return;
  }
  final file = File(args.single);
  if (!file.existsSync()) {
    stderr.writeln('OBJ not found: ${file.path}');
    exitCode = 66;
    return;
  }

  final positions = <List<double>>[];
  var uvCount = 0;
  var normalCount = 0;
  var faceCount = 0;
  var triangleCount = 0;
  var invalidReferences = 0;
  var hasMaterialGroups = false;
  final min = [double.infinity, double.infinity, double.infinity];
  final max = [
    double.negativeInfinity,
    double.negativeInfinity,
    double.negativeInfinity,
  ];

  for (final raw in file.readAsLinesSync()) {
    final line = raw.trim();
    if (line.isEmpty || line.startsWith('#')) continue;
    final fields = line.split(RegExp(r'\s+'));
    switch (fields.first) {
      case 'v':
        if (fields.length < 4) continue;
        final p = [
          double.tryParse(fields[1]),
          double.tryParse(fields[2]),
          double.tryParse(fields[3]),
        ];
        if (p.any((value) => value == null || !value.isFinite)) continue;
        final point = p.cast<double>();
        positions.add(point);
        for (var axis = 0; axis < 3; axis++) {
          min[axis] = math.min(min[axis], point[axis]);
          max[axis] = math.max(max[axis], point[axis]);
        }
      case 'vt':
        uvCount++;
      case 'vn':
        normalCount++;
      case 'usemtl':
        hasMaterialGroups = true;
      case 'f':
        if (fields.length < 4) continue;
        faceCount++;
        triangleCount += fields.length - 3;
        for (final reference in fields.skip(1)) {
          final parts = reference.split('/');
          final position = _resolveIndex(parts[0], positions.length);
          final uv = parts.length > 1 && parts[1].isNotEmpty
              ? _resolveIndex(parts[1], uvCount)
              : null;
          final normal = parts.length > 2 && parts[2].isNotEmpty
              ? _resolveIndex(parts[2], normalCount)
              : null;
          if (position == null ||
              (parts.length > 1 && parts[1].isNotEmpty && uv == null) ||
              (parts.length > 2 && parts[2].isNotEmpty && normal == null)) {
            invalidReferences++;
          }
        }
    }
  }

  final result = <String, Object?>{
    'format': 'obj-preflight-v1',
    'path': file.path,
    'vertices': positions.length,
    'uvs': uvCount,
    'normals': normalCount,
    'faces': faceCount,
    'triangles': triangleCount,
    'invalidReferences': invalidReferences,
    'hasMaterialGroups': hasMaterialGroups,
    'boundsMin': min,
    'boundsMax': max,
    'hasCompleteVertexAttributes':
        invalidReferences == 0 && uvCount > 0 && normalCount > 0,
    'runtimeReady': false,
    'runtimeReadyReason':
        'inspection only; generate tangents, LODs, and a validated QMSH/glTF package offline',
  };
  stdout.writeln(const JsonEncoder.withIndent('  ').convert(result));
  if (triangleCount == 0 ||
      invalidReferences != 0 ||
      uvCount == 0 ||
      normalCount == 0) {
    exitCode = 1;
  }
}

int? _resolveIndex(String raw, int count) {
  final parsed = int.tryParse(raw);
  if (parsed == null || parsed == 0) return null;
  final index = parsed > 0 ? parsed - 1 : count + parsed;
  return index >= 0 && index < count ? index : null;
}
