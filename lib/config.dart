const double projectionScale = 0.95;

const double glDepthNear = 0.1;
const double glDepthFar = 60.0;

// Low-key moonlight and warm practicals keep the house readable without
// flattening the shadows. The palette is intentionally cool and desaturated;
// authored candle colours provide the few warm accents.
const double shadeAmbient = 0.40;
const double shadeDiffuse = 0.60;
const double lightDirX = 0.3;
const double lightDirY = 0.7;
const double lightDirZ = -0.5;
const int lightColorRgb = 0xFFFFFF;
const double glowScale = 1.6;
const double bgSaturation = 0.25;
const double bgValue = 0.11;

const double fogStart = 1.5;
const double fogEnd = 14.0;
const double fogDarkness = 0.34;

const int maxOpaqueQuads = 4000;
const int maxBlendedQuads = 800;
const int maxShaftQuads = 96;
const double shaftMaxDist = 110.0;
const double shaftFocus = 2.5;

const int msaaSamples = 4;
const double postVignette = 0.18;
const double postGrain = 0.015;
const double postDesat = 0.06;
const double blurStrength = 0.35;

const double bloomThreshold = 0.15;
const double bloomStrength = 0.38;
const int bloomDivisor = 4;
const double flickerRate = 2.5;
const double flickerDepth = 0.0;

const double lutMix = 0.0;
const double wallTexMid = 0.505;
const double wallTexAmount = 1.2;
const double wallTexScale = 0.25;
const double glassGain = 2.0;
const double glassFog = 0.45;

const int texUnitNoise = 2;
const int texUnitLut = 3;
const int texUnitWall = 4;
const int texUnitGlass = 5;
const int texUnitSoft = 6;
const int texUnitSSAO = 11;
const int texUnitMaterialAlbedo = 12;

const int noiseStepX = 13;
const int noiseStepY = 29;
const int noiseTile = 64;

const double breathRate = 0.28;
const double breathAmplitude = 0.025;

const double gainSub = 0.25, gainBed = 0.12, gainMid = 0.20;
const double gainTransient = 0.40, gainAir = 0.10;

const double reverbWet = 0.35, reverbSeconds = 2.0;

const double pannerRefDistance = 1.0;
const double pannerRolloff = 1.0;
const double pannerMaxDistance = 40.0;
const double pannerConeInner = 360.0;
const double roomIrCrossfadeSeconds = 0.2;

const double texWorldSize = 2.0;

const bool ps1Enabled = false;
const int ps1InternalWidth = 384;
const int ps1InternalHeight = 216;
const bool ps1VertexSnapping = false;
const bool ps1AffineTexture = false;
const bool ps1VertexLighting = true;
const bool ps1ColorQuantize = false;
const bool ps1PointSampled = true;

// The shadow budget lives in `external/pixeldart`, not here. The constants that
// used to sit at this spot (shadowMapSize/maxShadowCasters/shadowFov/bias)
// configured the legacy renderer deleted in PLAN_RENDERER.md R-A1 and had no
// readers left; `maxShadowCasters = 2` in particular advertised a budget the
// shipping runtime has never honoured. The truthful figure is one shadow map,
// bound to `spotLights.first` — see PLAN_RENDERER.md §2.3 and packet R-A5. The
// live knobs are `PixeldartRendererProfilePolicy.shadowMapSize` and
// `LightTableCapacityLedger.maxShadowCasters`.

const double playerSpeed = 2.0;
const double playerAcceleration = 14.0;
const double playerDrag = 10.0;
const double mouseSensitivity = 0.0028;
const double gamepadLookRadiansPerSecond = 2.4;
const double playerCapsuleRadius = 0.3;
const double playerEyeHeight = 1.65;
const double playerCapsuleHeight = 1.8;
const double playerSweepStep = 0.08;
const double raycastDistance = 4.5;
const double raycastCone = 0.5236;
const int cameraAccumClamp = 180;

const double ssaoRadius = 0.5;
const double ssaoStrength = 0.28;
const int ssaoSamples = 8;

const double dofFocusDistance = 2.0;
const double dofBlurRadius = 0.5;
const double dofBlurScale = 1.0;
const double depthOfFieldStrength = 1.0;

// enableFrustumCull/enableDrawSorting also went with the legacy renderer:
// culling and sort keys are unconditional in `external/pixeldart`
// (`core/visibility.dart`, `core/sort_key.dart`).

// One real minute advances exactly fifteen in-game minutes. A full in-game
// day therefore takes 96 real minutes, leaving enough room for slow domestic
// actions without making the clock feel frozen.
const double gameMinutesPerRealMinute = 15.0;

/// Sparse test-chamber presentation: retain architecture and authored story
/// anchors while suppressing decorative room dressing in the renderer.
const bool sparseTestChambers = true;

/// Authoritative set of room IDs that render fully dressed with furniture,
/// joinery, and decorative details regardless of [sparseTestChambers].
const Set<String> dressedRooms = {
  'hall',
  'living-room',
  'kitchen',
  'cellar',
  'bedroom',
  'landing',
  'bathroom',
  'spare-room',
};

/// Returns whether a room should be presented in its fully dressed state.
bool isRoomDressed(String roomId) =>
    dressedRooms.contains(roomId) || !sparseTestChambers;
const double dayLengthSeconds = (24.0 * 60.0 / gameMinutesPerRealMinute) * 60.0;
const int sunriseHour = 7;
const int sunsetHour = 19;
const int mantelLightHour = 19;
const int mantelExtinguishHour = 7;

const int dailyHourBudget = 16;
const int initialDayHour = 7;
const int dailyGasAllowance = 6;
const int startingRationCoupons = 6;
const List<int> rationRunDays = [2, 5, 9, 12, 16, 19];

const int sunColorNight = 0x243553;
const int sunColorNoon = 0xD9D7D0;
const int sunColorDusk = 0xD38B5B;

const double ambientFloor = 0.045;
const double ambientPeak = 0.52;
const int maxMantlePointLights = 4;
const int mantleLightColor = 0xFFC078;
const double mantleLightRadius = 3.8;
const double mantleLightIntensity = 2.1;
const double mantleLightFlicker = 0.06;

const bool vhsEnabled = false;
const bool vhsChromaLumaSeparation = true;
const bool vhsChromaLag = true;
const bool vhsTapeNoise = true;
const bool vhsHeadSwitchBand = true;
const bool vhsTrackingJitter = true;
const bool vhsDropouts = true;
const bool vhsGhosting = true;

const double vhsChromaBlurI = 10.0;
const double vhsChromaBlurQ = 10.0;
const double vhsChromaLagAmount = 1.5;
const double vhsNoiseScale = 0.5;
const double vhsHeadSwitchHeight = 8.0;
const double vhsHeadSwitchJitter = 3.0;
const double vhsJitterAmount = 1.0;
const double vhsJitterFreq = 6.0;
const double vhsDropoutRate = 0.02;
const double vhsGhostAmount = 0.15;
const double vhsGhostOffset = 4.0;

const double vhsAudioHpFreq = 80.0;
const double vhsAudioLpFreq = 11000.0;
const double vhsWowFlutterRate = 0.8;
const double vhsWowFlutterAmount = 0.02;
const double vhsHissGain = 0.08;

const double occlusionGainOpenDoor = -6.0;
const double occlusionGainClosedDoor = -12.0;
const double occlusionGainWall = -18.0;
const double occlusionFreqOpenDoor = 4000.0;
const double occlusionFreqClosedDoor = 800.0;
const double occlusionFreqWall = 400.0;

const double ruptureLUTDuration = 1.0;
const double ruptureAffineDuration = 1.5;
const double ruptureVertexDuration = 1.5;
const double ruptureTapeDuration = 2.0;
const double rupturePortalDuration = 2.0;
const double ruptureLightsDuration = 4.0;

const int journalLockSupply = 4;
const double journalSteadyHand = 0.0;

const int driftCountDay2 = 1;
const int driftCountDay3 = 1;
const int driftCountDay4 = 2;
const bool insertionOnDay4 = true;
const bool contradictionOnDay5 = true;
const bool deletionOnDay6 = true;

const bool enableRadioCorroboration = true;
const bool enableVisitorCorroboration = true;
const int wardenStartDay = 5;

const int standInSeedSalt = 913741;
const List<int> standInCountChoices = [0, 2, 2, 3];
const int unverifiableSeedSalt = 274953;
const int unverifiableNoticeHour = 20;

const double scrutinyPerCheck = 0.15, scrutinyCap = 1.0, scrutinyDecay = 0.5;
const double exhaustionPerShortSleep = 0.2,
    exhaustionCap = 1.0,
    exhaustionDecay = 0.1;
const double isolationPerDeflect = 0.1,
    isolationPerShutRoom = 0.05,
    isolationCap = 1.0,
    isolationDecay = 0.05;
const int maxScrutinyExtraDrifts = 3;
const int maxExhaustionHourCost = 6;
const double exhaustionShakinessScale = 0.5;
const double isolationExposureThreshold = 0.5;

const double synchronisationAccuracyThreshold = 0.6;
const int synchronisationLockedEntriesThreshold = 3;

const double houseDriftMaxMagnitude = 0.3;
const int houseDriftKitchenWidthDay = 15;
const String houseDriftKitchenWidthRoom = 'kitchen';
const double houseDriftKitchenWidthDelta = -0.3;
const int houseDriftSpareCeilingDay = 19;
const String houseDriftSpareCeilingRoom = 'spare-room';
const double houseDriftSpareCeilingDelta = 0.3;

const double ruptureAffineWarpMax = 1.2;
const double ruptureVertexSnapDrift = 0.8;
const double ruptureTapeJitterMax = 4.0;
const double ruptureTapeChromaMax = 20.0;

const double journalJitterMaxDeg = 3.0;
const double journalJitterMaxPx = 2.0;
const double panelFadeSeconds = 0.25;
const double promptFadeSeconds = 0.3;
const double tapeRollWidthRem = 8.0;

/// Frozen simulation-facing feature defaults. Renderer adapters may consume
/// these values, but they do not define or mutate them.
class FeatureConfig {
  final double breathThresholdCelsius;
  final double reducedMotionTapeScale;
  final double mantleFlameScale;
  final double mantleHissScale;

  const FeatureConfig({
    required this.breathThresholdCelsius,
    required this.reducedMotionTapeScale,
    required this.mantleFlameScale,
    required this.mantleHissScale,
  }) : assert(reducedMotionTapeScale >= 0),
       assert(mantleFlameScale >= 0),
       assert(mantleHissScale >= 0);

  static const defaults = FeatureConfig(
    breathThresholdCelsius: 6.0,
    reducedMotionTapeScale: 0.35,
    mantleFlameScale: 1.0,
    mantleHissScale: 1.0,
  );
}
