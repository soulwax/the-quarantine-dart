import 'dart:io';

const servePort = 8081;
const webRoot = 'dist/web';

const mimeTypes = <String, String>{
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.wasm': 'application/wasm',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.woff2': 'font/woff2',
  '.wav': 'audio/wav',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.png': 'image/png',
};

String mimeTypeFor(String path) {
  final dot = path.lastIndexOf('.');
  if (dot == -1) return 'application/octet-stream';
  return mimeTypes[path.substring(dot)] ?? 'application/octet-stream';
}

Future<void> handleRequest(HttpRequest request, Directory root) async {
  var relativePath = Uri.decodeComponent(request.uri.path);
  if (relativePath == '/') relativePath = '/index.html';
  final target = File('${root.path}/${relativePath.substring(1)}');

  final rootPath = root.absolute.path;
  final targetPath = target.absolute.path;
  if (!targetPath.startsWith(rootPath) || !await target.exists()) {
    request.response.statusCode = HttpStatus.notFound;
    request.response.headers.contentType = ContentType.text;
    request.response.write('404 not found: $relativePath');
    await request.response.close();
    return;
  }

  request.response.headers.set(
    HttpHeaders.contentTypeHeader,
    mimeTypeFor(targetPath),
  );
  await request.response.addStream(target.openRead());
  await request.response.close();
}

Future<void> main() async {
  final root = Directory(webRoot);
  final server = await HttpServer.bind(InternetAddress.loopbackIPv4, servePort);
  stdout.writeln('http://localhost:$servePort');
  await for (final request in server) {
    handleRequest(request, root).catchError((Object error) {
      stderr.writeln('serve_release: $error');
    });
  }
}
