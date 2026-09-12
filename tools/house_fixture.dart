import 'package:quarantine/house/authored_manifest.dart';
import 'package:quarantine/house/house.dart';

/// Loads the canonical authored house topology for command-line checks.
AuthoredHouseManifest loadAuthoredBlueprint() => AuthoredHouseManifest.canonical;

/// Constructs the canonical authored house.
House loadAuthoredHouse({int seed = 42}) => House.canonical(seed: seed);
