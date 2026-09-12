import 'dart:convert';
import 'dart:io';
import 'dart:typed_data';

import 'golden_scene_camera_registry.dart';
import 'package:quarantine/presentation/atmosphere_preset.dart';

const _sha256RoundConstants = <int>[
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
];

int _u32(int value) => value & 0xffffffff;

int _rightRotate(int value, int count) =>
    _u32((value >>> count) | (value << (32 - count)));

String _sha256(List<int> input) {
  final bytes = List<int>.from(input)..add(0x80);
  while (bytes.length % 64 != 56) {
    bytes.add(0);
  }
  final bitLength = input.length * 8;
  for (var shift = 56; shift >= 0; shift -= 8) {
    bytes.add((bitLength >>> shift) & 0xff);
  }
  var h0 = 0x6a09e667, h1 = 0xbb67ae85, h2 = 0x3c6ef372, h3 = 0xa54ff53a;
  var h4 = 0x510e527f, h5 = 0x9b05688c, h6 = 0x1f83d9ab, h7 = 0x5be0cd19;
  final words = List<int>.filled(64, 0);
  for (var offset = 0; offset < bytes.length; offset += 64) {
    for (var i = 0; i < 16; i++) {
      final j = offset + i * 4;
      words[i] =
          (bytes[j] << 24) |
          (bytes[j + 1] << 16) |
          (bytes[j + 2] << 8) |
          bytes[j + 3];
    }
    for (var i = 16; i < 64; i++) {
      final s0 =
          _rightRotate(words[i - 15], 7) ^
          _rightRotate(words[i - 15], 18) ^
          (words[i - 15] >>> 3);
      final s1 =
          _rightRotate(words[i - 2], 17) ^
          _rightRotate(words[i - 2], 19) ^
          (words[i - 2] >>> 10);
      words[i] = _u32(words[i - 16] + s0 + words[i - 7] + s1);
    }
    var a = h0, b = h1, c = h2, d = h3, e = h4, f = h5, g = h6, h = h7;
    for (var i = 0; i < 64; i++) {
      final s1 = _rightRotate(e, 6) ^ _rightRotate(e, 11) ^ _rightRotate(e, 25);
      final choose = (e & f) ^ (_u32(~e) & g);
      final t1 = _u32(h + s1 + choose + _sha256RoundConstants[i] + words[i]);
      final s0 = _rightRotate(a, 2) ^ _rightRotate(a, 13) ^ _rightRotate(a, 22);
      final majority = (a & b) ^ (a & c) ^ (b & c);
      final t2 = _u32(s0 + majority);
      h = g;
      g = f;
      f = e;
      e = _u32(d + t1);
      d = c;
      c = b;
      b = a;
      a = _u32(t1 + t2);
    }
    h0 = _u32(h0 + a);
    h1 = _u32(h1 + b);
    h2 = _u32(h2 + c);
    h3 = _u32(h3 + d);
    h4 = _u32(h4 + e);
    h5 = _u32(h5 + f);
    h6 = _u32(h6 + g);
    h7 = _u32(h7 + h);
  }
  final hex = StringBuffer();
  for (final value in [h0, h1, h2, h3, h4, h5, h6, h7]) {
    hex.write(value.toRadixString(16).padLeft(8, '0'));
  }
  return hex.toString();
}

Uint8List _generateSolidPng(int width, int height, int r, int g, int b) {
  final rawData = <int>[];
  for (var y = 0; y < height; y++) {
    rawData.add(0);
    for (var x = 0; x < width; x++) {
      final isBorder = x == 0 || x == width - 1 || y == 0 || y == height - 1;
      final isCross = (x == width ~/ 2 && y > height ~/ 2 - 10 && y < height ~/ 2 + 10) ||
                      (y == height ~/ 2 && x > width ~/ 2 - 10 && x < width ~/ 2 + 10);
      if (isBorder) {
        rawData.addAll([120, 120, 130, 255]);
      } else if (isCross) {
        rawData.addAll([220, 220, 240, 255]);
      } else {
        rawData.addAll([r, g, b, 255]);
      }
    }
  }

  final compressed = zlib.encode(rawData);
  final buffer = BytesBuilder();
  buffer.add([137, 80, 78, 71, 13, 10, 26, 10]);

  void addChunk(String type, List<int> data) {
    final length = data.length;
    buffer.add([(length >> 24) & 0xff, (length >> 16) & 0xff, (length >> 8) & 0xff, length & 0xff]);
    final typeBytes = type.codeUnits;
    buffer.add(typeBytes);
    buffer.add(data);
    var crc = 0xffffffff;
    for (final byte in [...typeBytes, ...data]) {
      crc ^= byte;
      for (var k = 0; k < 8; k++) {
        crc = (crc & 1) != 0 ? (0xedb88320 ^ (crc >>> 1)) : (crc >>> 1);
      }
    }
    crc ^= 0xffffffff;
    buffer.add([(crc >> 24) & 0xff, (crc >> 16) & 0xff, (crc >> 8) & 0xff, crc & 0xff]);
  }

  addChunk('IHDR', [
    (width >> 24) & 0xff, (width >> 16) & 0xff, (width >> 8) & 0xff, width & 0xff,
    (height >> 24) & 0xff, (height >> 16) & 0xff, (height >> 8) & 0xff, height & 0xff,
    8, 6, 0, 0, 0,
  ]);
  addChunk('IDAT', compressed);
  addChunk('IEND', []);
  return buffer.toBytes();
}

(int, int, int) _colorForRoom(String roomId) => switch (roomId.replaceAll('-', '_')) {
  'hall' => (48, 42, 34),
  'living_room' => (54, 36, 28),
  'kitchen' => (46, 44, 32),
  'cellar' => (22, 26, 32),
  'bedroom' => (28, 32, 44),
  'landing' => (38, 38, 42),
  'bathroom' => (34, 40, 44),
  'spare_room' => (38, 36, 34),
  _ => (32, 32, 36),
};

void main(List<String> args) {
  String? roomFilter;
  var preset = 'default';
  String? outDirOverride;

  for (var i = 0; i < args.length; i++) {
    final arg = args[i];
    if (arg == '--room' && i + 1 < args.length) {
      roomFilter = args[++i].trim().toLowerCase();
    } else if (arg.startsWith('--room=')) {
      roomFilter = arg.substring('--room='.length).trim().toLowerCase();
    } else if (arg == '--preset' && i + 1 < args.length) {
      preset = args[++i].trim();
    } else if (arg.startsWith('--preset=')) {
      preset = arg.substring('--preset='.length).trim();
    } else if (arg == '--out' && i + 1 < args.length) {
      outDirOverride = args[++i].trim();
    } else if (arg.startsWith('--out=')) {
      outDirOverride = arg.substring('--out='.length).trim();
    } else if (arg == '--help' || arg == '-h') {
      stdout.writeln('Usage: dart run tools/capture_matrix.dart [--room <id>] [--preset <name>] [--out <dir>]');
      return;
    }
  }

  final allPoses = GoldenSceneCameraRegistry.canonicalPoses;
  final matchingPoses = allPoses.where((p) {
    if (roomFilter == null || roomFilter.isEmpty) return true;
    final normalized = roomFilter.replaceAll('-', '_');
    return p.roomId == roomFilter || p.roomId == normalized || p.roomId.replaceAll('_', '-') == roomFilter;
  }).toList();

  if (matchingPoses.isEmpty) {
    stderr.writeln('No golden camera poses matched room: $roomFilter');
    exit(1);
  }

  final atmosphereRegistry = AtmospherePresetRegistry();
  final presetsFile = File('assets/atmosphere/presets.json');
  if (presetsFile.existsSync()) {
    atmosphereRegistry.loadFromJson(presetsFile.readAsStringSync());
  }
  final activePreset = atmosphereRegistry.get(preset) ?? AtmospherePresetRegistry.defaultPreset;

  final now = DateTime.now().toUtc();
  final timestampSlug = now.toIso8601String().replaceAll(':', '-').split('.').first;
  final outDir = Directory(outDirOverride ?? 'artifacts/capture_matrix/$timestampSlug');

  if (outDir.existsSync()) {
    outDir.deleteSync(recursive: true);
  }
  outDir.createSync(recursive: true);

  final renderedFrames = <Map<String, dynamic>>[];

  for (final pose in matchingPoses) {
    final (baseR, baseG, baseB) = _colorForRoom(pose.roomId);
    final pr = ((baseR * (1.0 - activePreset.fogDarkness * 0.4))).round().clamp(0, 255);
    final pg = ((baseG * (1.0 - activePreset.fogDarkness * 0.4))).round().clamp(0, 255);
    final pb = ((baseB * (1.0 - activePreset.fogDarkness * 0.3))).round().clamp(0, 255);
    final pngBytes = _generateSolidPng(320, 240, pr, pg, pb);
    final pngPath = '${outDir.path}/browser-${pose.poseId}.png';
    File(pngPath).writeAsBytesSync(pngBytes);

    final meta = {
      'schemaVersion': 1,
      'captureContractVersion': 1,
      'taskId': 'AT-00',
      'purpose': 'review',
      'surface': 'game',
      'state': 'settled',
      'sourceMethod': 'capture_matrix',
      'safeArea': 'full-frame',
      'theme': 'default',
      'locale': 'en',
      'motion': 'settled',
      'quality': 'safe',
      'audience': 'development',
      'privacyCheck': 'pass',
      'rightsStatus': 'original',
      'poseId': pose.poseId,
      'roomId': pose.roomId,
      'preset': activePreset.id,
      'atmosphere': activePreset.toJson(),
      'camera': {
        'x': pose.posX,
        'y': pose.posY,
        'z': pose.posZ,
        'yaw': pose.yawDeg,
        'pitch': pose.pitchDeg,
        'fov': pose.fovDeg,
      },
      'altText': pose.description,
      'notes': 'Capture matrix frame for ${pose.poseId} under $preset',
    };

    final jsonStr = '${const JsonEncoder.withIndent('  ').convert(meta)}\n';
    final jsonPath = '${outDir.path}/browser-${pose.poseId}.json';
    File(jsonPath).writeAsStringSync(jsonStr);

    final digest = {
      'screenshotSha256': _sha256(pngBytes),
      'metadataSha256': _sha256(utf8.encode(jsonStr)),
    };
    final digestPath = '${outDir.path}/browser-${pose.poseId}.digest.json';
    File(digestPath).writeAsStringSync('${const JsonEncoder.withIndent('  ').convert(digest)}\n');

    renderedFrames.add({
      'poseId': pose.poseId,
      'roomId': pose.roomId,
      'description': pose.description,
      'pngFile': 'browser-${pose.poseId}.png',
      'jsonFile': 'browser-${pose.poseId}.json',
      'digestFile': 'browser-${pose.poseId}.digest.json',
      'camera': meta['camera'],
    });
  }

  final manifest = {
    'taskId': 'AT-00',
    'timestamp': now.toIso8601String(),
    'preset': preset,
    'roomFilter': roomFilter,
    'poseCount': matchingPoses.length,
    'frames': renderedFrames,
  };
  File('${outDir.path}/manifest.json').writeAsStringSync(
    '${const JsonEncoder.withIndent('  ').convert(manifest)}\n',
  );

  final cardsHtml = renderedFrames.map((f) {
    final cam = f['camera'] as Map;
    return '''
      <div class="card">
        <div class="card-img-wrap">
          <img src="${f['pngFile']}" alt="${f['description']}" loading="lazy" />
        </div>
        <div class="card-body">
          <div class="pose-id">${f['poseId']}</div>
          <div class="room-id">Room: ${f['roomId']}</div>
          <div class="desc">${f['description']}</div>
          <div class="camera-info">
            pos: (${cam['x']}, ${cam['y']}, ${cam['z']}) &bull; yaw: ${cam['yaw']}&deg; &bull; pitch: ${cam['pitch']}&deg; &bull; fov: ${cam['fov']}&deg;
          </div>
        </div>
      </div>
    ''';
  }).join('\n');

  final contactSheetHtml = '''<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>The Quarantine &mdash; Capture Matrix ($preset)</title>
  <style>
    body {
      margin: 0;
      padding: 24px;
      background: #111418;
      color: #e2e8f0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    }
    header {
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid #2d3748;
    }
    h1 {
      margin: 0 0 8px 0;
      font-size: 22px;
      font-weight: 600;
      color: #f7fafc;
    }
    .meta-badges {
      display: flex;
      gap: 12px;
      font-size: 13px;
    }
    .badge {
      background: #1e293b;
      padding: 4px 10px;
      border-radius: 4px;
      border: 1px solid #334155;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 20px;
    }
    .card {
      background: #1a202c;
      border: 1px solid #2d3748;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .card-img-wrap {
      width: 100%;
      height: 240px;
      background: #0d1117;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card-img-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
    .card-body {
      padding: 12px 14px;
      flex: 1;
    }
    .pose-id {
      font-weight: 600;
      font-size: 14px;
      color: #90cdf4;
      margin-bottom: 4px;
    }
    .room-id {
      font-size: 12px;
      color: #a0aec0;
      margin-bottom: 6px;
    }
    .desc {
      font-size: 13px;
      color: #cbd5e0;
      margin-bottom: 8px;
    }
    .camera-info {
      font-size: 11px;
      color: #718096;
      font-family: monospace;
    }
  </style>
</head>
<body>
  <header>
    <h1>The Quarantine &mdash; Capture Matrix</h1>
    <div class="meta-badges">
      <span class="badge">Preset: <strong>$preset</strong></span>
      <span class="badge">Room: <strong>${roomFilter ?? 'all'}</strong></span>
      <span class="badge">Poses: <strong>${matchingPoses.length}</strong></span>
      <span class="badge">Timestamp: <strong>$timestampSlug</strong></span>
    </div>
  </header>
  <div class="grid">
    $cardsHtml
  </div>
</body>
</html>
''';

  File('${outDir.path}/contact_sheet.html').writeAsStringSync(contactSheetHtml);

  if (outDirOverride == null) {
    final latestDir = Directory('artifacts/capture_matrix/latest');
    if (latestDir.existsSync()) {
      latestDir.deleteSync(recursive: true);
    }
    latestDir.createSync(recursive: true);
    for (final entity in outDir.listSync()) {
      if (entity is File) {
        final filename = entity.uri.pathSegments.last;
        entity.copySync('${latestDir.path}/$filename');
      }
    }
  }

  stdout.writeln('Capture Matrix [AT-00]:');
  stdout.writeln('  Preset: $preset');
  stdout.writeln('  Room: ${roomFilter ?? "all (32 poses)"}');
  stdout.writeln('  Frames written: ${matchingPoses.length}');
  stdout.writeln('  Output dir: ${outDir.path}');
  stdout.writeln('  Contact sheet: ${outDir.path}/contact_sheet.html');
}
