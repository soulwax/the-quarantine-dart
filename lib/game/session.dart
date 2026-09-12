import '../config.dart';
import '../difficulty/rules.dart';
import '../difficulty/state.dart';
import '../house/house.dart';
import '../house/authored_manifest.dart';
import '../house/interaction.dart';
import '../house/state.dart';
import '../journal/entry.dart';
import '../journal/journal.dart';
import '../sim/day.dart';
import '../sim/time.dart';
import '../visitors/state.dart';
import 'save.dart';
import 'domain_event.dart';
import 'presentation_snapshot.dart';
import 'domain_snapshot.dart';
import '../story/narrative_state.dart';
import '../story/schema.dart' show ReactionOption, VisitorReaction;
import '../story/screenplay.dart' show ScreenplayEvent;

enum GameSessionEventType {
  timeAdvanced,
  dayEndReached,
  journalWritten,
  journalRejected,
  slept,
  complianceFloorTripped,
}

class GameSessionEvent {
  final int sequence;
  final GameSessionEventType type;
  final int day;
  final double hour;
  final int? entryOrdinal;

  const GameSessionEvent({
    required this.sequence,
    required this.type,
    required this.day,
    required this.hour,
    this.entryOrdinal,
  });
}

/// Immutable data for renderers and UI adapters. It contains no mutable game
/// systems, so presentation cannot advance rules by retaining a reference.
class GameSessionSnapshot {
  final int day;
  final double hour;
  final int hoursRemaining;
  final int gasRemaining;
  final int rationCoupons;
  final bool rationCollectedToday;
  final int journalEntryCount;

  GameSessionSnapshot({
    required this.day,
    required this.hour,
    required this.hoursRemaining,
    required this.gasRemaining,
    required this.rationCoupons,
    required this.rationCollectedToday,
    required this.journalEntryCount,
  });
}

/// The pure runtime spine.
///
/// GameSession is the only owner of the mutable house, clock, journal, and day
/// loop. The browser integration layer should call [advance], read [snapshot],
/// and route explicit actions here; it must not mutate simulation objects itself.
class GameSession {
  final int _houseSeed;
  final int _runSeed;
  final House _house;
  final GameTime _time;
  final Journal _journal;
  final DayLoop _dayLoop;
  final DifficultyState _difficulty;
  final List<GameSessionEvent> _events = [];
  final List<DomainEvent> _domainEvents = [];
  int _nextEventSequence = 1;

  GameSession._(
    this._houseSeed,
    this._runSeed,
    this._house,
    this._time,
    this._journal,
    this._dayLoop,
    this._difficulty,
    NarrativeState? narrative,
  ) : _narrative = narrative ?? NarrativeState();

  final NarrativeState _narrative;

  factory GameSession.create({
    required Vocabulary vocabulary,
    int houseSeed = 1,
    AuthoredHouseManifest? houseBlueprint,
    int runSeed = 0,
    int startDay = 1,
    int startHour = sunriseHour,
    double daySeconds = dayLengthSeconds,
  }) {
    if (startDay < 1) {
      throw ArgumentError.value(startDay, 'startDay', 'must be at least 1');
    }
    if (startHour < 0 || startHour >= 24) {
      throw ArgumentError.value(startHour, 'startHour', 'must be 0 through 23');
    }
    if (!daySeconds.isFinite || daySeconds <= 0) {
      throw ArgumentError.value(
        daySeconds,
        'daySeconds',
        'must be finite and > 0',
      );
    }
    final time = GameTime(dayNumber: startDay, dayLengthSeconds: daySeconds);
    time.skipToHour(startHour);
    final journal = Journal(vocabulary);
    final house = houseBlueprint == null
        ? House.canonical(seed: houseSeed)
        : buildHouseFromBlueprint(houseBlueprint, houseSeed);
    return GameSession._(
      houseSeed,
      runSeed,
      house,
      time,
      journal,
      DayLoop(journal: journal, time: time),
      DifficultyState(),
      NarrativeState(),
    );
  }

  factory GameSession.restore({
    required Vocabulary vocabulary,
    required SaveSnapshot snapshot,
    AuthoredHouseManifest? houseBlueprint,
    double daySeconds = dayLengthSeconds,
  }) {
    final run = snapshot.run;
    final seed = run['houseSeed'];
    final timeJson = run['time'];
    final dayLoopJson = run['dayLoop'];
    final journalJson = run['journal'];
    final houseJson = run['house'];
    final difficultyJson = run['difficulty'];
    if (seed is! int ||
        timeJson is! Map ||
        dayLoopJson is! Map ||
        journalJson is! Map ||
        houseJson is! Map ||
        difficultyJson is! Map) {
      throw const FormatException('saved session run is malformed');
    }
    final rawRunSeed = run['runSeed'];
    final runSeed = rawRunSeed is int ? rawRunSeed : 0;
    final day = timeJson['day'];
    final hour = timeJson['hour'];
    if (day is! int || day < 1 || hour is! num) {
      throw const FormatException('saved session clock is malformed');
    }
    if (!daySeconds.isFinite || daySeconds <= 0) {
      throw ArgumentError.value(
        daySeconds,
        'daySeconds',
        'must be finite and > 0',
      );
    }
    final time = GameTime(dayNumber: day, dayLengthSeconds: daySeconds);
    time.restoreHour(hour.toDouble());
    final journal = Journal.fromJson(
      vocabulary,
      Map<String, dynamic>.from(journalJson),
    );
    final dayLoop = DayLoop.fromJson(
      journal: journal,
      time: time,
      json: Map<String, dynamic>.from(dayLoopJson),
    );
    final house = houseBlueprint == null
        ? House.canonical(seed: seed)
        : buildHouseFromBlueprint(houseBlueprint, seed);
    HouseState.fromJson(Map<String, dynamic>.from(houseJson)).applyTo(house);
    final difficulty = DifficultyState.fromJson(
      Map<String, dynamic>.from(difficultyJson),
    );
    final narrative =
        NarrativeState.tryFromJson(run['narrative']) ?? NarrativeState();
    return GameSession._(
      seed,
      runSeed,
      house,
      time,
      journal,
      dayLoop,
      difficulty,
      narrative,
    );
  }

  /// Exists for future pure adapters (movement and audio), but callers receive
  /// it as read-only conventionally; session actions remain the rule authority.
  House get house => _house;
  GameTime get time => _time;
  Journal get journal => _journal;
  int get runSeed => _runSeed;
  double get recordAccuracy => _difficulty.accuracy;
  bool get complianceFloorTripped => _difficulty.complianceTriggered;
  NarrativeState get narrative => _narrative;

  GameSessionSnapshot get snapshot => GameSessionSnapshot(
    day: _time.dayNumber,
    hour: _time.currentHour,
    hoursRemaining: _dayLoop.hoursRemaining,
    gasRemaining: _dayLoop.gasRemaining,
    rationCoupons: _dayLoop.rationCoupons,
    rationCollectedToday: _dayLoop.rationCollectedToday,
    journalEntryCount: _journal.entries.length,
  );

  /// Renderer/audio-neutral facts. No mutable game object or runtime handle
  /// crosses this boundary.
  PresentationSnapshot get presentationSnapshot => PresentationSnapshot(
    values: {
      'calendar': {'day': _time.dayNumber, 'hour': _time.currentHour},
      'economy': {
        'hoursRemaining': _dayLoop.hoursRemaining,
        'gasRemaining': _dayLoop.gasRemaining,
        'rationCoupons': _dayLoop.rationCoupons,
        'rationCollectedToday': _dayLoop.rationCollectedToday,
      },
      'journal': {'entryCount': _journal.entries.length},
      'house': HouseState.capture(_house).toJson(),
      'features': {
        'recordAccuracy': _difficulty.accuracy,
        'complianceFloorTripped': _difficulty.complianceTriggered,
        'isolationElevatesExposure': isolationElevatesExposure,
      },
      'narrative': _narrative.toJson(),
    },
  );

  /// Canonical domain facts used by save/session integration and scenario
  /// tooling. Presentation-only readiness and runtime handles are excluded.
  DomainSnapshot get domainSnapshot => DomainSnapshot(
    calendar: {'day': _time.dayNumber, 'hour': _time.currentHour},
    economy: {
      'hoursRemaining': _dayLoop.hoursRemaining,
      'gasRemaining': _dayLoop.gasRemaining,
      'rationCoupons': _dayLoop.rationCoupons,
    },
    journal: _journal.toJson(),
    house: HouseState.capture(_house).toJson(),
    content: {'narrative': _narrative.toJson()},
    features: {'difficulty': _difficulty.toJson()},
    secondRun: const {},
  );

  /// Serializes all current authoritative session state except mutable house
  /// geometry. The house is reconstructed from [houseSeed] on restore.
  SaveSnapshot toSaveSnapshot({Map<String, dynamic> meta = const {}}) =>
      SaveSnapshot(
        run: {
          'houseSeed': _houseSeed,
          'runSeed': _runSeed,
          'house': HouseState.capture(_house).toJson(),
          'time': {'day': _time.dayNumber, 'hour': _time.currentHour},
          'dayLoop': _dayLoop.toJson(),
          'journal': _journal.toJson(),
          'difficulty': _difficulty.toJson(),
          'narrative': _narrative.toJson(),
        },
        meta: meta,
      );

  bool applyNarrativeReaction(VisitorReaction reaction, ReactionOption option) {
    if (!reaction.options.any((candidate) => candidate.id == option.id)) {
      return false;
    }
    _narrative.apply(reaction, option);
    return true;
  }

  /// Applies effects authored on a screenplay event.
  ///
  /// Timing and delivery are owned by [GameEventCursor]; this method remains
  /// the single authoritative write path for narrative flags.
  bool applyAuthoredEvent(ScreenplayEvent event) {
    final deliveredKey = 'event.${event.id}';
    if (_narrative.hasFlag(deliveredKey)) return false;
    _narrative.flags[deliveredKey] = 'true';
    // Keep the consumer decision in the authoritative save, not only in the
    // browser DOM. Presentation systems can react to this stable seam later.
    _narrative.flags['event.${event.id}.consumer'] = event.kind;
    _narrative.flags['last-authored-event'] = event.id;
    if (event.kind == 'aftermath') {
      _narrative.flags['aftermath.${event.id}'] = 'placed';
    }
    for (final effect in event.effects) {
      final separator = effect.indexOf('=');
      if (separator <= 0 || separator == effect.length - 1) continue;
      _narrative.flags[effect.substring(0, separator)] = effect.substring(
        separator + 1,
      );
    }
    return true;
  }

  /// Freezes one real journal line for a diegetic quotation. Once selected,
  /// later drift or correction cannot rewrite the note a visitor carried.
  FrozenJournalQuote? freezeJournalQuote(String sceneId) {
    final existing = _narrative.quoteFor(sceneId);
    if (existing != null) return existing;
    final entries = _journal.entries.toList()
      ..sort((a, b) => a.ordinal.compareTo(b.ordinal));
    if (entries.isEmpty) return null;
    final corrected = entries.where((entry) => entry.corrected).toList();
    final pool = corrected.isNotEmpty ? corrected : entries;
    var hash = _runSeed ^ 0x51F15E;
    for (final codeUnit in sceneId.codeUnits) {
      hash = ((hash * 31) + codeUnit) & 0x7fffffff;
    }
    final entry = pool[hash % pool.length];
    final quote = FrozenJournalQuote(
      sceneId: sceneId,
      ordinal: entry.ordinal,
      revision: entry.revisions.length - 1,
      text: entry.current.toString(),
    );
    _narrative.rememberQuote(quote);
    return quote;
  }

  /// Advances the clock within its current day only.
  ///
  /// At the end of a day the clock stops just before midnight. Calling this again
  /// cannot roll over [GameTime.dayNumber]; [sleep] is the sole day transition.
  void advance(double elapsedSeconds) {
    if (!elapsedSeconds.isFinite || elapsedSeconds < 0) {
      throw ArgumentError.value(
        elapsedSeconds,
        'elapsedSeconds',
        'must be finite and non-negative',
      );
    }
    if (elapsedSeconds == 0) return;

    final secondsPerHour = _time.dayLengthSeconds / 24.0;
    final remainingSeconds = (24.0 - _time.currentHour) * secondsPerHour;
    const epsilonSeconds = 1e-6;
    final safeRemaining = remainingSeconds > epsilonSeconds
        ? remainingSeconds - epsilonSeconds
        : 0.0;
    final advanced = elapsedSeconds < safeRemaining
        ? elapsedSeconds
        : safeRemaining;

    if (advanced > 0) {
      _time.advance(advanced);
      _record(GameSessionEventType.timeAdvanced);
    }
    if (advanced < elapsedSeconds) _record(GameSessionEventType.dayEndReached);
  }

  /// Spends a bounded diegetic wait without allowing a day transition.
  bool waitHours(double hours) {
    if (!hours.isFinite || hours < 0 || hours > 3) {
      throw ArgumentError.value(hours, 'hours', 'must be between 0 and 3');
    }
    final before = _time.currentHour;
    advance(hours * (_time.dayLengthSeconds / 24.0));
    return _time.currentHour > before;
  }

  Entry? writeJournal(
    Map<String, String> fields,
    double shakiness, {
    String? corroborator,
  }) {
    if (!shakiness.isFinite || shakiness < 0) {
      throw ArgumentError.value(
        shakiness,
        'shakiness',
        'must be finite and non-negative',
      );
    }
    final entry = _journal.write(
      _time.dayNumber,
      fields,
      shakiness + _difficulty.shakinessBonus,
      corroborator: corroborator,
    );
    _record(
      entry == null
          ? GameSessionEventType.journalRejected
          : GameSessionEventType.journalWritten,
      entryOrdinal: entry?.ordinal,
    );
    return entry;
  }

  /// Records a threshold encounter through the same authoritative journal
  /// path used by the UI. The visitor identity is retained as provenance so a
  /// later callback can cite the original encounter without new game state.
  Entry? writeVisitorJournal(
    String visitor,
    Map<String, String> fields,
    double shakiness,
  ) {
    if (visitor.trim().isEmpty) {
      throw ArgumentError.value(visitor, 'visitor', 'must not be empty');
    }
    return writeJournal(fields, shakiness, corroborator: 'visitor:$visitor');
  }

  bool correctJournal(
    int ordinal,
    Map<String, String> fields,
    double shakiness,
  ) {
    final accepted = _journal.correct(ordinal, fields, shakiness);
    _record(
      accepted
          ? GameSessionEventType.journalWritten
          : GameSessionEventType.journalRejected,
      entryOrdinal: accepted ? ordinal : null,
    );
    return accepted;
  }

  bool lockJournal(int ordinal) => _journal.lock(ordinal);

  bool verifyJournal(int ordinal) {
    final accepted = _journal.verifyToday(ordinal);
    _record(
      accepted
          ? GameSessionEventType.journalWritten
          : GameSessionEventType.journalRejected,
      entryOrdinal: accepted ? ordinal : null,
    );
    return accepted;
  }

  bool spendHours(int cost) {
    _requireNonNegative(cost, 'cost');
    return _dayLoop.spendHours(cost);
  }

  bool spendGas(int cost) {
    _requireNonNegative(cost, 'cost');
    return _dayLoop.spendGas(cost);
  }

  bool spendHoursAndGas(int hours, int gas) {
    _requireNonNegative(hours, 'hours');
    _requireNonNegative(gas, 'gas');
    if (_dayLoop.hoursRemaining < hours || _dayLoop.gasRemaining < gas) {
      return false;
    }
    return _dayLoop.spendHours(hours) && _dayLoop.spendGas(gas);
  }

  bool collectRation() => _dayLoop.collectRation();

  void recordVisitorFacts(List<VisitorFact> facts) {
    for (final fact in facts) {
      if (fact.kind == VisitorFactKind.visitorIgnored) {
        _difficulty.addDeflectedVisitor();
        _narrative.rememberIgnoredVisit(fact.visitor, fact.day);
      }
    }
  }

  bool get isolationElevatesExposure =>
      _difficulty.exposesVisitorsToCompression;

  /// The only GameSession API that may change its calendar day.
  void sleep(
    SleepQuality quality,
    SleepLocation location, {
    int extraDrifts = 0,
    String? currentRoom,
  }) {
    if (extraDrifts < 0) {
      throw ArgumentError.value(
        extraDrifts,
        'extraDrifts',
        'must not be negative',
      );
    }
    _difficulty.addVerifications(_journal.getVerifiedToday().length);
    if (quality == SleepQuality.short) _difficulty.addShortSleep();
    _difficulty.addShutRooms(
      _house.rooms
          .where(
            (room) =>
                room.windows.isNotEmpty &&
                !ShutterState().shutterOpen(_house, room.id),
          )
          .length,
    );
    if (_dayLoop.isRationDayToday && !_dayLoop.rationCollectedToday) {
      _difficulty.addSkippedRation();
    }
    final nightOfDay = _time.dayNumber;
    _dayLoop.sleep(
      quality,
      location,
      extraDrifts: extraDrifts + _difficulty.extraDriftsFromScrutiny,
      runSeed: _runSeed,
    );
    _house.drift.considerNight(nightOfDay, sleptInRoom: currentRoom);
    final hourCost = _difficulty.hoursLostToExhaustion;
    if (hourCost > 0) _dayLoop.spendHours(hourCost);
    if (!_difficulty.complianceTriggered &&
        _time.dayNumber >= 15 &&
        _difficulty.accuracy <= 0.0 &&
        !_journal.entries.any((entry) => entry.locked)) {
      _difficulty.complianceTriggered = true;
      _record(GameSessionEventType.complianceFloorTripped);
    }
    _difficulty.decayOvernight();
    _record(GameSessionEventType.slept);
  }

  List<GameSessionEvent> drainEvents() {
    final events = List<GameSessionEvent>.unmodifiable(_events);
    _events.clear();
    return events;
  }

  List<DomainEvent> drainDomainEvents() {
    final events = List<DomainEvent>.unmodifiable(_domainEvents);
    _domainEvents.clear();
    return events;
  }

  void _record(GameSessionEventType type, {int? entryOrdinal}) {
    _events.add(
      GameSessionEvent(
        sequence: _nextEventSequence++,
        type: type,
        day: _time.dayNumber,
        hour: _time.currentHour,
        entryOrdinal: entryOrdinal,
      ),
    );
    _domainEvents.add(
      DomainEvent(
        kind: _eventKind(type),
        sequence: _nextEventSequence - 1,
        selectionSeed: _runSeed,
      ),
    );
  }

  void _requireNonNegative(int value, String name) {
    if (value < 0) {
      throw ArgumentError.value(value, name, 'must not be negative');
    }
  }
}

String _eventKind(GameSessionEventType type) => switch (type) {
  GameSessionEventType.timeAdvanced => 'time.advanced',
  GameSessionEventType.dayEndReached => 'day.end-reached',
  GameSessionEventType.journalWritten => 'journal.written',
  GameSessionEventType.journalRejected => 'journal.rejected',
  GameSessionEventType.slept => 'sleep.completed',
  GameSessionEventType.complianceFloorTripped => 'compliance.floor-tripped',
};
