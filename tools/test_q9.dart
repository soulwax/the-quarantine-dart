import 'package:quarantine/sim/time.dart';
import 'package:quarantine/sim/weather.dart';
import 'package:quarantine/config.dart';

void main() {
  final time = GameTime(dayNumber: 1, dayLengthSeconds: dayLengthSeconds);

  print('=== Sun Angle Tests ===');
  for (int hour = 0; hour < 24; hour++) {
    time.skipToHour(hour);
    final angle = time.sunAngle;
    final color = sunColor(angle);
    print(
      'Hour $hour: sunAngle=$angle, color=0x${color.toRadixString(16).padLeft(6, '0').toUpperCase()}',
    );
  }

  print('\n=== Key Hours ===');
  time.skipToHour(7);
  print('Hour 7 (sunrise): sunAngle=${time.sunAngle} (expect 0.0)');
  print(
    'Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()}',
  );

  time.skipToHour(12);
  print('Hour 12 (noon): sunAngle=${time.sunAngle} (expect 0.5)');
  print(
    'Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()} (expect 0xFFFFFF)',
  );

  time.skipToHour(18);
  print('Hour 19 (sunset): sunAngle=${time.sunAngle} (expect 1.0)');
  print(
    'Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()} (expect 0xFFBB55)',
  );

  time.skipToHour(22);
  print('Hour 22 (night): sunAngle=${time.sunAngle} (expect 0.0)');
  print(
    'Color: 0x${sunColor(time.sunAngle).toRadixString(16).padLeft(6, '0').toUpperCase()} (expect 0x4488CC)',
  );

  print('\n=== Time Advancement ===');
  time.skipToHour(7);
  print('Starting at hour 7');
  const stepCount = 120;
  for (int i = 0; i < stepCount; i++) {
    time.advance(1.0 / 120.0);
  }
  final expectedAdvance = 120.0 / 120.0 * (24.0 / dayLengthSeconds);
  print(
    'After 120 steps (1 second): hour=${time.currentHour} (expect ${7 + expectedAdvance})',
  );

  print('\n=== Sun Direction ===');
  time.skipToHour(7);
  var dir = sunDirection(time.sunAngle);
  print('Hour 7: direction=$dir');

  time.skipToHour(12);
  dir = sunDirection(time.sunAngle);
  print('Hour 12: direction=$dir');

  time.skipToHour(19);
  dir = sunDirection(time.sunAngle);
  print('Hour 19: direction=$dir');

  print('\n✓ Test complete');
}
