import 'screenplay.dart';

/// Runtime-owned consumers for authored events. Keeping this vocabulary next
/// to the cursor makes an event with no executable destination impossible to
/// add silently.
enum AuthoredEventConsumer { broadcast, visitor, aftermath, ending }

AuthoredEventConsumer authoredEventConsumerFor(String kind) => switch (kind) {
  'broadcast' => AuthoredEventConsumer.broadcast,
  'visitor' => AuthoredEventConsumer.visitor,
  'aftermath' => AuthoredEventConsumer.aftermath,
  'ending' => AuthoredEventConsumer.ending,
  _ => throw FormatException('screenplay event has no consumer: $kind'),
};

/// Runtime read-model for the event plan authored by the screenplay editor.
///
/// It deliberately does not mutate the game or narrative state. The game loop
/// asks which authored events are due, then commits their effects through its
/// existing authoritative systems.
class GameEventOrchestrator {
  GameEventOrchestrator(StoryScreenplay screenplay)
    : _events = List<ScreenplayEvent>.unmodifiable(
        <ScreenplayEvent>[...screenplay.events]..sort((a, b) {
          final day = a.day.compareTo(b.day);
          if (day != 0) return day;
          final hour = a.hour.compareTo(b.hour);
          return hour != 0 ? hour : a.id.compareTo(b.id);
        }),
      ) {
    validateConsumers();
  }

  /// Validates the editor/runtime boundary once at startup.
  void validateConsumers() {
    for (final event in _events) {
      authoredEventConsumerFor(event.kind);
    }
  }

  final List<ScreenplayEvent> _events;

  /// Resolves a random-time event deterministically for a particular run.
  /// The same run seed and event ID always produce the same minute.
  double hourFor(ScreenplayEvent event, {int runSeed = 0}) {
    final from = event.randomFrom;
    final to = event.randomTo;
    if (from == null || to == null) return event.hour;
    var hash = 0x811c9dc5 ^ runSeed;
    for (final codeUnit in '${event.id}:${event.day}'.codeUnits) {
      hash ^= codeUnit;
      hash = (hash * 0x01000193) & 0x7fffffff;
    }
    final fraction = hash / 0x7fffffff;
    final rawMinute = ((from + (to - from) * fraction) * 60).round();
    final firstMinute = (from * 60).ceil();
    final lastMinute = (to * 60).floor();
    final minute = firstMinute <= lastMinute
        ? rawMinute.clamp(firstMinute, lastMinute)
        : rawMinute.clamp(0, 1439);
    return minute.toDouble() / 60.0;
  }

  List<ScreenplayEvent> eventsForDay(int day) => [
    for (final event in _events)
      if (event.day == day) event,
  ];

  /// Returns events crossed between two clock readings, including the event
  /// at [fromHour] and excluding the event at [toHour].
  List<ScreenplayEvent> crossed({
    required int day,
    required double fromHour,
    required double toHour,
    int runSeed = 0,
  }) {
    if (toHour < fromHour) return const [];
    return [
      for (final event in eventsForDay(day))
        if (hourFor(event, runSeed: runSeed) >= fromHour &&
            hourFor(event, runSeed: runSeed) < toHour)
          event,
    ];
  }

  ScreenplayEvent? byId(String id) {
    for (final event in _events) {
      if (event.id == id) return event;
    }
    return null;
  }
}

/// Save-friendly delivery cursor for the game loop.
///
/// The editor owns the schedule; this cursor only remembers which authored
/// records have already been handed to the authoritative game session.
class GameEventCursor {
  GameEventCursor(
    this.plan, {
    this.runSeed = 0,
    Iterable<String> delivered = const [],
  }) : _delivered = {...delivered};

  final GameEventOrchestrator plan;
  final int runSeed;
  final Set<String> _delivered;

  List<ScreenplayEvent> advance({required int day, required double hour}) {
    final due = <ScreenplayEvent>[];
    for (final event in plan.eventsForDay(day)) {
      if (plan.hourFor(event, runSeed: runSeed) <= hour &&
          _delivered.add(event.id)) {
        due.add(event);
      }
    }
    return due;
  }

  bool get isEmpty => _delivered.isEmpty;

  /// Read-only schedule access for presentation consumers that materialize
  /// authored consequences. Delivery and save state remain cursor-owned.
  Iterable<ScreenplayEvent> get events sync* {
    for (var day = 1; day <= 21; day++) {
      yield* plan.eventsForDay(day);
    }
  }

  List<String> get deliveredIds => _delivered.toList()..sort();

  Map<String, dynamic> toJson() => {'delivered': deliveredIds};

  static GameEventCursor fromJson(
    GameEventOrchestrator plan,
    Object? raw, {
    int runSeed = 0,
  }) {
    if (raw is! Map || raw['delivered'] is! List) {
      return GameEventCursor(plan, runSeed: runSeed);
    }
    final delivered = (raw['delivered'] as List).whereType<String>().where(
      (id) => plan.byId(id) != null,
    );
    return GameEventCursor(plan, runSeed: runSeed, delivered: delivered);
  }
}
