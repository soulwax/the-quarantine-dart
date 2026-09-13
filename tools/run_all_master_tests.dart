import 'dart:io';

class SuiteResult {
  final bool passed;
  final int millis;
  final String stdout;
  final String stderr;

  SuiteResult({
    required this.passed,
    required this.millis,
    required this.stdout,
    required this.stderr,
  });
}

List<String> discoverSuites() {
  final entries = Directory('tools').listSync();
  final suites = <String>[];
  for (final entry in entries) {
    if (entry is! File) continue;
    final path = entry.path.replaceAll('\\', '/');
    final name = path.split('/').last;
    if (name.startsWith('test_') && name.endsWith('.dart')) {
      suites.add(path);
    }
  }
  suites.sort();
  return suites;
}

String truncate(String text, int maxLength) {
  final trimmed = text.trim();
  if (trimmed.length <= maxLength) return trimmed;
  return '${trimmed.substring(0, maxLength)}\n... [truncated]';
}

void main() async {
  final suites = discoverSuites();

  print('========================================================================');
  print(' THE QUARANTINE — POLICY & SIMULATION REGRESSION BATTERY');
  print(' Scope: policy objects, simulation, narrative, UI state (Tier 2).');
  print(' Not covered: rendered output — see tools/browser/ and capture_matrix.dart.');
  print(' Discovered ${suites.length} suites under tools/test_*.dart.');
  print('========================================================================\n');

  final concurrency = Platform.numberOfProcessors.clamp(1, 16);
  final stopwatch = Stopwatch()..start();
  final results = <String, SuiteResult>{};
  var nextIndex = 0;

  Future<void> worker() async {
    while (true) {
      final index = nextIndex;
      if (index >= suites.length) return;
      nextIndex += 1;
      final suite = suites[index];
      final sw = Stopwatch()..start();
      final result = await Process.run('dart', ['run', suite]);
      sw.stop();
      results[suite] = SuiteResult(
        passed: result.exitCode == 0,
        millis: sw.elapsedMilliseconds,
        stdout: result.stdout.toString(),
        stderr: result.stderr.toString(),
      );
    }
  }

  await Future.wait(List.generate(concurrency, (_) => worker()));
  stopwatch.stop();

  final firstPassFailed = <String>[];
  for (final suite in suites) {
    final r = results[suite]!;
    if (r.passed) {
      print('[✓] $suite (${r.millis}ms)');
    } else {
      firstPassFailed.add(suite);
      print('[✗] $suite FAILED under parallel load (${r.millis}ms) — retrying in isolation');
    }
  }

  final flaky = <String>[];
  final failed = <String>[];
  for (final suite in firstPassFailed) {
    final sw = Stopwatch()..start();
    final retry = await Process.run('dart', ['run', suite]);
    sw.stop();
    if (retry.exitCode == 0) {
      flaky.add(suite);
      results[suite] = SuiteResult(
        passed: true,
        millis: sw.elapsedMilliseconds,
        stdout: retry.stdout.toString(),
        stderr: retry.stderr.toString(),
      );
      print('[✓] $suite passed in isolation (${sw.elapsedMilliseconds}ms) — flaky under contention, not a real failure');
    } else {
      failed.add(suite);
      results[suite] = SuiteResult(
        passed: false,
        millis: sw.elapsedMilliseconds,
        stdout: retry.stdout.toString(),
        stderr: retry.stderr.toString(),
      );
      print('[✗] $suite FAILED again in isolation (${sw.elapsedMilliseconds}ms)');
    }
  }

  if (failed.isNotEmpty) {
    print('\n------------------------------------------------------------------------');
    print(' FAILURE DETAIL (failed in isolation — not contention)');
    print('------------------------------------------------------------------------');
    for (final suite in failed) {
      final r = results[suite]!;
      print('\n--- $suite ---');
      final out = truncate(r.stdout, 4000);
      final err = truncate(r.stderr, 4000);
      if (out.isNotEmpty) print(out);
      if (err.isNotEmpty) print(err);
    }
  }

  final passedCount = suites.length - failed.length;
  print('\n========================================================================');
  print(' MASTER REGRESSION SUMMARY: $passedCount / ${suites.length} TEST SUITES PASSED');
  if (flaky.isNotEmpty) {
    print(' FLAKY UNDER PARALLEL LOAD, PASSED ISOLATED (${flaky.length}): ${flaky.join(', ')}');
  }
  if (failed.isNotEmpty) {
    print(' FAILED (${failed.length}): ${failed.join(', ')}');
  }
  print(' Total execution time: ${stopwatch.elapsedMilliseconds} ms');
  print(' Concurrency: $concurrency');
  print('========================================================================\n');

  if (failed.isNotEmpty) exit(1);
}
