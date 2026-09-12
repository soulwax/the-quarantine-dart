# TODO — House Architecture System & Renderer Integration (PLAN_HOUSE.md)

## Phase H-A: Core Framework & DSL
- [x] Lift rigid 8/9/1 assertion in `lib/house/house.dart` in favor of graph invariant checks.
- [x] Create architectural mesh builder in `lib/house/arch/mesh_builder.dart` (`ArchMeshBuilder`).
- [x] Create aperture cutter in `lib/house/arch/aperture_cutter.dart` (`ApertureCutter` with reveals & non-degenerate quads).
- [x] Create profile extruder in `lib/house/arch/profile_extruder.dart` (`ProfileExtruder` for skirtings, dado rails, picture rails, cornices, architraves).
- [x] Create value object `RoomDescriptor` in `lib/house/room_descriptor.dart`.
- [x] Define abstract `RoomBuilder` contract in `lib/house/room_builder.dart`.
- [x] Create and run unit test `tools/test_arch_dsl.dart`.

## Phase H-B: Room-by-Room Builders
- [x] `lib/house/builders/hall_builder.dart` (HallBuilder: dado rail, clock alcove, coat rack, runner rug).
- [x] `lib/house/builders/living_room_builder.dart` (LivingRoomBuilder: chimney breast, hearth/grate, carved marble mantle, ceiling rose, picture rail).
- [x] `lib/house/builders/kitchen_builder.dart` (KitchenBuilder: range alcove, scullery sink, larder cupboard).
- [x] `lib/house/builders/cellar_builder.dart` (CellarBuilder: timber joists, overhead gas pipes, damp stone kickboards, coal bunker).
- [x] `lib/house/builders/staircase_builder.dart` (StaircaseBuilder: treads, risers, stringers, balustrade, newel posts).
- [x] `lib/house/builders/landing_builder.dart` (LandingBuilder: balustrade guardrail, doorway casings, picture rail).
- [x] `lib/house/builders/bedroom_builder.dart` (BedroomBuilder: hearth surround, twin sash windows, built-in oak wardrobe).
- [x] `lib/house/builders/bathroom_builder.dart` (BathroomBuilder: sanitary tile border, clawfoot tub, high-level cistern).
- [x] `lib/house/builders/spare_room_builder.dart` (SpareRoomBuilder: sloped ceiling, sheeted furniture, travel trunk).

## Phase H-C: Assembly & Runtime Cutover
- [x] Implement `lib/house/house_assembler.dart` (`HouseAssembler`).
- [x] Create and run unit test `tools/test_house_assembler.dart` (verifies 1,512 quads / 9,072 vertices across all rooms).
- [x] Cut over `buildRoomGeometry` in `lib/house/geometry.dart` to delegate to `HouseAssembler.instance`.

## Phase H-R: Renderer Capabilities Integration
- [x] Integrate room-specific ambient irradiance from `PerRoomLightingRigs` into `web/main.dart` (`FrameEnvironment.ambientColor`).
- [x] Verify PVS-driven room geometry submission (`ExteriorPvs` & `setVisibleRooms` in `web/main.dart`).
- [x] Reconcile active renderer capabilities with `PLAN_RENDERER.md`.

## Phase H-M: 3D Model Presentation Runtime
- [x] Implement `lib/house/arch/architectural_scene_adapter.dart` (`ArchitecturalSceneAdapter`).
- [x] Register 30 architectural model placements across all programs in WebGL2/Pixeldart runtime (`web/main.dart`).
- [x] Bind architectural model instance visibility to host room PVS layers.
- [x] Create and run unit test `tools/test_architectural_scene_adapter.dart` (PASS).

## Phase H-K: Architectural Collision Hulls & Navigation Route
- [x] Implement `ArchitecturalCollisionHull` and `CollisionHullKind` in `lib/house/collision.dart`.
- [x] Author authoritative collision hulls in `HouseAssembler.buildCollisionHulls` for cellar piers, living room hearth plinth, and 14 progressive hall staircase steps.
- [x] Expose `house.collisionHulls` and `house.collisionHullsFor(roomId)`.
- [x] Create and run route test `tools/test_architectural_collision_route.dart` (PASS).

## Phase H-L: Dynamic Per-Room Lighting & HDR Atmospheres
- [x] Implement organic gas mantle flicker in `web/main.dart` using authored flicker factors and elapsed time.
- [x] Boost living room hearth flame to HDR bloom radiance (> 2.5) driving Pixeldart bloom buffers.
- [x] Apply room-specific architectural moods: cellar damp-green subterranean atmosphere and attic cold-draft skylight tint.
- [x] Implement exponential moving average portal ambient crossfade for smooth room transitions.

## Phase H-D: Legacy Geometry Decoupling
- [x] Archive original 2,786-line procedural generator to `lib/house/legacy/geometry_legacy.txt`.
- [x] Streamline `lib/house/geometry.dart` into a clean ~75-line facade delegating room, door frame, and door leaf geometry to `HouseAssembler.instance`.
- [x] Verify all room and door geometry tests pass (`test_room_geometry.dart`, `test_house_test_room_primitives.dart`).

## Phase H-J: Authentic Victorian Joinery & Ironmongery
- [x] Implement `WindowJoineryBuilder` (`lib/house/arch/window_joinery_builder.dart`) for double-hung sash windows, meeting rails, muntins, timber sills, and folding pocket shutters.
- [x] Upgrade `HouseAssembler.buildDoorLeafGeometry` to generate 4-panel Victorian timber doors, cast-iron rim locks, brass knobs, escutcheons, cellar grilles, and front-door letterbox flaps.
- [x] Create and run unit test `tools/test_window_joinery.dart` (PASS).

## Phase H-F: Whole-House Furnishing Manifest Integration
- [x] Implement `FurnishingSceneAdapter` (`lib/house/arch/furnishing_scene_adapter.dart`) bridging all 53 props across the 6 room manifests.
- [x] Synthesize authoritative physical collision hulls for all 30 solid and interactive furnishings in `HouseAssembler.buildCollisionHulls`.
- [x] Wire all 53 furnishings and window joinery meshes into WebGL2/Pixeldart runtime (`web/main.dart`).
- [x] Create and run unit test `tools/test_furnishing_scene_adapter.dart` (PASS).

## Phase H-S: Architectural Sound Propagation & Room Acoustics
- [x] Implement `RoomAcousticProfileCalculator` (`lib/house/arch/room_acoustic_profile.dart`) computing Sabine RT60 reverberation times, material absorption, and early reflections.
- [x] Populate canonical reverb profiles for all 8 rooms in `MasterAcousticSimulator`.
- [x] Connect continuous door portal diffraction and transmission loss into acoustic occlusion calculations.
- [x] Create and run unit test `tools/test_architectural_acoustics.dart` (PASS).

## Phase H-R4: Directional Window Solar Projection & Volumetric Shafts
- [x] Implement window solar ray penetration and volumetric light shafts in `web/main.dart` `setLighting()`.
- [x] Modulate light shaft radiance and dust motes by window pocket shutter states and solar cloud transmittance.

## Follow-on Verification Completed
- [x] `dart run tools/test_window_joinery.dart` (PASS)
- [x] `dart run tools/test_furnishing_scene_adapter.dart` (PASS)
- [x] `dart run tools/test_architectural_acoustics.dart` (PASS)
- [x] `dart run tools/test_arch_dsl.dart` (PASS)
- [x] `dart run tools/test_house_assembler.dart` (PASS)
- [x] `dart run tools/test_house_architect.dart` (PASS)
- [x] `dart run tools/test_canonical_house_wiring.dart` (PASS)
- [x] `dart run tools/test_architectural_scene_adapter.dart` (PASS)
- [x] `dart run tools/test_architectural_collision_route.dart` (PASS)
- [x] `dart run tools/test_gold_master_certification.dart` (PASS)
- [x] `dart run tools/run_all_master_tests.dart` (24 / 24 master regression suites PASS)
