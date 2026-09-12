import 'package:quarantine/house/house.dart';
import 'package:quarantine/house/arch/room_acoustic_profile.dart';
import 'package:quarantine/engine/master_acoustic_simulator.dart';
import 'package:quarantine/engine/math3.dart';

void main() {
  print('========================================================================');
  print(' THE QUARANTINE — ARCHITECTURAL ACOUSTICS & SOUND PROPAGATION SUITE');
  print('========================================================================');

  final house = House.canonical(seed: 42);

  print('\n[1/4] Calculating architectural Sabine RT60 reverberation profiles...');
  final profiles = RoomAcousticProfileCalculator.calculateAllProfiles(house);
  print('  -> Evaluated ${profiles.length} room acoustic profiles:');
  for (final entry in profiles.entries) {
    final p = entry.value;
    print('     • Room [${p.roomId}]: RT60=${p.rt60Seconds.toStringAsFixed(2)}s, WetMix=${(p.wetDryMix * 100).toStringAsFixed(0)}%, Damp=${(p.highFrequencyDamping * 100).toStringAsFixed(0)}%');
  }

  // Cellar should have long decay (cold stone reverberation)
  final cellar = profiles['cellar']!;
  if (cellar.rt60Seconds < 1.0) {
    throw StateError('Cellar RT60 should be >= 1.0s, got ${cellar.rt60Seconds}');
  }

  // Living room should be warm and well-damped
  final living = profiles['living-room']!;
  if (living.rt60Seconds > 1.2) {
    throw StateError('Living room RT60 should be dry/warm <= 1.2s, got ${living.rt60Seconds}');
  }
  print('  -> Physical Sabine RT60 contrast verified');

  print('\n[2/4] Verifying MasterAcousticSimulator canonical profiles...');
  for (final room in house.rooms) {
    final prof = MasterAcousticSimulator.roomReverbProfiles[room.id];
    if (prof == null) {
      throw StateError('Room ${room.id} missing from MasterAcousticSimulator');
    }
  }
  print('  -> All ${house.rooms.length} canonical rooms covered in master acoustic simulator');

  print('\n[3/4] Evaluating portal acoustic occlusion and diffraction...');
  // Direct same room
  final sameRoom = MasterAcousticSimulator.evaluateOcclusion(
    house: house,
    emitterRoomId: 'hall',
    listenerRoomId: 'hall',
    emitterPos: Vec3(1, 1, 1),
    listenerPos: Vec3(2, 1, 2),
  );
  if (!sameRoom.isDirectPath || sameRoom.lowPassCutoffHz < 19000.0) {
    throw StateError('Same room must be direct path with 20kHz cutoff');
  }

  // Open doorway diffraction
  final hallLiving = house.portals.firstWhere((p) =>
      (p.a == 'hall' && p.b == 'living-room') || (p.b == 'hall' && p.a == 'living-room'));
  hallLiving.open = true;
  final openOcclusion = MasterAcousticSimulator.evaluateOcclusion(
    house: house,
    emitterRoomId: 'hall',
    listenerRoomId: 'living-room',
    emitterPos: Vec3(1, 1, 1),
    listenerPos: Vec3(4, 1, 2),
  );
  if (!openOcclusion.isDirectPath || openOcclusion.lowPassCutoffHz < 10000.0) {
    throw StateError('Open portal should provide high frequency diffraction path');
  }

  // Closed door occlusion
  hallLiving.open = false;
  final closedOcclusion = MasterAcousticSimulator.evaluateOcclusion(
    house: house,
    emitterRoomId: 'hall',
    listenerRoomId: 'living-room',
    emitterPos: Vec3(1, 1, 1),
    listenerPos: Vec3(4, 1, 2),
  );
  if (closedOcclusion.isDirectPath || closedOcclusion.lowPassCutoffHz > 800.0 || closedOcclusion.attenuationDb > -10.0) {
    throw StateError('Closed door must attenuate sound and low-pass filter frequencies');
  }
  print('  -> Open diffraction and closed door transmission loss verified');

  print('\n[4/4] Validating MasterAcousticSimulator engine self-test...');
  if (!MasterAcousticSimulator.validate(house: house)) {
    throw StateError('MasterAcousticSimulator.validate() failed');
  }
  print('  -> Engine self-validation: PASS');

  print('\n========================================================================');
  print(' ARCHITECTURAL ACOUSTICS & SOUND PROPAGATION SUITE: PASS');
  print('========================================================================');
}
