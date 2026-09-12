# THE QUARANTINE — HOUSE ARCHITECTURE & RENDERER INTEGRATION PLAN (PLAN_HOUSE.md)

> Status: Ratified Engineering Plan & Architectural Specification
>
> Repository audit: 2026-09-12 (Game `main`, Pixeldart pinned)
>
> Scope: The Dart/WebGL runtime (`lib/house/`, `lib/presentation/`, `web/main.dart`)
>
> Priorities:
> 1. House Architecture System From Scratch (Room-by-Room Builder, Ground-Up Sophisticated Design)
> 2. Integration with Next-Gen Renderer Capabilities (Pixeldart HDR, Shadow Atlas, Environment Probes, PVS)

---

## 0. Codebase Reconciliation & Reality Audit

### 0.1 Renderer Status (Reconciled with `PLAN_RENDERER.md`)
- **Legacy renderer deleted:** `lib/engine/renderer*.dart`, `gl.dart`, `passes.dart`, `shaders/` deleted in `9b781f1` (R-A1).
- **Presentation classified:** 24 live modules in `lib/presentation/` drive the runtime via `web/main.dart`. Dead policy modules removed or classified.
- **Active live backend:** `PixeldartBackend` interfacing with `external/pixeldart` via WebGL2.
- **Rendering capabilities available in pipeline:** Forward PBR (Cook-Torrance GGX, ORM, Tangent normals, normal variance), SSAO, Screen-space Depth of Field, Bloom, Sky/Atmospheric scattering, Directional + 4 Point + 1 Shadowed Spot light.
- **Upcoming Pixeldart features to adopt:**
  - R-B1: HDR scene color targets (`RGBA16F`)
  - R-B2: Shadow atlas with Cascaded Shadow Maps (CSM) for directional sunlight through windows
  - R-B3: Environment lighting with per-room SH-9 irradiance probes & prefiltered specular cubemaps
  - R-C2: Multi-level bloom mip pyramid
  - R-E1: Attribute-divisor instancing for architectural repetitive geometry
  - R-E3: PVS-driven room geometry submission

### 0.2 Current House Subsystem Flaws (`lib/house/`)
- **Monolithic procedural geometry:** `lib/house/geometry.dart` is a 2,833-line procedural generator with hardcoded wall/trim/door routines. It builds 7 rooms procedurally while `living-room` is special-cased out (`modelPresentedRoomShells`).
- **Hardcoded structural invariants:** `lib/house/house.dart` hard-asserts exactly 8 rooms, 9 portals, 1 stair (`if (rooms.length != 8 ...)`), making architectural extension or testing in isolation impossible.
- **Suppressed dressing & atmosphere:** `lib/config.dart` has `sparseTestChambers = true`, preventing authored furnishing manifests (`lib/house/*_furnishing_manifest.dart`) from contributing to the scene.
- **Disconnected PVS:** `lib/house/exterior_pvs.dart` computes room visibility, but `web/main.dart` uploads and submits all room geometry regardless of camera room.
- **Dormant per-room lighting rigs:** `lib/house/per_room_lighting_rigs.dart` defines rich per-room lighting setups that are never baked into environment probes or dynamically bound per room.

---

## 1. Architectural Blueprint: The Ground-Up House System

### 1.1 Core Principles
1. **Room-by-Room Modularity:** Each room is an autonomous domain containing its architectural structure, apertures (portals/windows), trims (cornices, skirtings, rails), fixtures (mantles, hearths, sinks), furnishings, and acoustic/lighting properties.
2. **Deterministic Mesh Synthesis:** Rather than raw coordinate arithmetic dumped in one file, geometry is synthesized via a composable architectural DSL (`WallSegment`, `ApertureFrame`, `MoldingProfile`, `FloorPlanExtruder`).
3. **Dual Representation:**
   - **Simulation/Topology Domain:** Lightweight, pure-Dart, headless-testable graph (`Room`, `Portal`, `StairTransition`, `CollisionVolume`, `AcousticNode`).
   - **Visual/Presentation Domain:** Structured mesh payloads partitioned by material slot (`wall`, `floor`, `ceiling`, `trim`, `glass`, `emissive`) with LODs and instanced fixtures.
4. **Authoring Data Sovereignty:** `assets/house/house.json` and associated room JSON files dictate dimensions and topologies; code builds what the data specifies without hardcoded dimension overrides.

### 1.2 Class Hierarchy & Data Flow
```text
[assets/house/*.json]
        |
        v
[AuthoredHouseManifest] ---> [RoomDescriptor (per room)]
                                     |
                                     v
                        +----------------------------+
                        |     RoomBuilder (Base)     |
                        +----------------------------+
                                     |
           +-------------------------+-------------------------+
           |                         |                         |
    [HallBuilder]           [KitchenBuilder]          [CellarBuilder] ...
           |                         |                         |
           v                         v                         v
   [RoomArchitecture]        [RoomArchitecture]        [RoomArchitecture]
   - Shell Mesh (PBR)        - Shell Mesh (PBR)        - Shell Mesh (PBR)
   - Trim Mesh (Instanced)   - Trim Mesh (Instanced)   - Trim Mesh (Instanced)
   - Apertures / Portals     - Apertures / Portals     - Apertures / Portals
   - Fixtures & Practicals   - Fixtures & Practicals   - Fixtures & Practicals
   - Collision Mesh/Hulls    - Collision Mesh/Hulls    - Collision Mesh/Hulls
   - Probe Bake Anchors      - Probe Bake Anchors      - Probe Bake Anchors
           \                         |                         /
            +------------------------+------------------------+
                                     |
                                     v
                           [HouseAssembler]
                                     |
               +---------------------+---------------------+
               |                                           |
               v                                           v
       [Simulation House]                          [RenderableHouseScene]
   (Collision, Portals, Drift,                  (PVS Mesh Partitions,
    Acoustic Paths, Player Capsule)              LOD Batches, Probe Bindings)
```

---

## 2. Priority 1: Ground-Up Room-by-Room Architecture Plan

### Phase H-A: Core Framework & DSL
- **H-A1: Architectural Mesh Synthesizer DSL (`lib/house/arch/`)**
  - Construct clean, robust mesh primitives: `ProfileExtruder` (for moldings, baseboards, picture rails, architraves), `ApertureCutter` (for cutting portal/window holes in quad walls with clean non-degenerate triangulation), `BoxVolumeBuilder` (plinths, stairs, hearths).
  - Vertex layout: Position (vec3), Normal (vec3), Tangent (vec4), UV0 (vec2), UV1/Lightmap (vec2).
- **H-A2: `RoomDescriptor` & `RoomBuilder` Contract**
  - Define `RoomDescriptor` encompassing dimensions, structural walls, assigned materials, window specs, portal connectivity, focal composition, and lighting profile.
  - Abstract `RoomBuilder` providing standard hooks: `buildShell()`, `buildApertures()`, `buildTrims()`, `buildFixtures()`, `buildCollision()`.
- **H-A3: Decouple `House` from Fixed Topology Asserts**
  - Update `lib/house/house.dart` to validate connectivity invariants rather than hardcoded 8-room / 9-portal checks. Enable isolated room testing and dynamic room modifications.

### Phase H-B: Sophisticated Room-by-Room Implementations
Each builder creates authentic late-Victorian domestic construction:
- **H-B1: Hall Builder (`HallBuilder`)**
  - High ceilings, fanlight transom window over front door, detailed wainscoting / dado rail, front-door chain/lock hardware mount, clock alcove, and stair throat framing.
- **H-B2: Living Room Builder (`LivingRoomBuilder`)**
  - Classical Victorian chimney breast with hearth/mantle plinth, twin recessed alcoves, deep skirtings, ceiling rose, dual north-facing sash windows with sills and pocket shutter recesses.
- **H-B3: Kitchen Builder (`KitchenBuilder`)**
  - Inset range chimney arch, quarry tile / linoleum floor edge, larder niche, scullery aperture, low-profile utilitarian moldings.
- **H-B4: Cellar Builder (`CellarBuilder`)**
  - Rough-dressed stonework, damp-proof coursing transition, overhead timber joists with conduit/pipe runs, coal chute recess, secure grille doorway threshold.
- **H-B5: Staircase & Landing Builder (`StaircaseBuilder`, `LandingBuilder`)**
  - Turn-of-the-century dogleg or straight timber staircase with open string, risers, treads with nosing, balusters, and continuous handrail connecting Hall to Landing without seam cracks.
- **H-B6: Master Bedroom Builder (`BedroomBuilder`)**
  - Picture rail, wardrobe recess, bedroom hearth mantle, dual window surrounds, faded wallpaper material transitions.
- **H-B7: Bathroom Builder (`BathroomBuilder`)**
  - Wainscot sanitary tiling, cast iron tub enclosure, cistern mount, frosted glazed sash aperture.
- **H-B8: Spare Room Builder (`SpareRoomBuilder`)**
  - Attic-sloped ceiling planes, bare floorboards, neglected plaster trims, single drafty south-facing sash window.

### Phase H-C: Whole-House Assembler & Production Cutover
- **H-C1: `HouseAssembler` Implementation**
  - Collects all room builders, validates portal-to-portal alignment (facing, width, height, sill), joins partition walls without Z-fighting or micro-gaps, outputs unified collision hulls and visual partitions.
- **H-C2: Cutover `web/main.dart` & Deprecate `geometry.dart`**
  - Switch `web/main.dart` `_roomSurfaceSpecs` to query `HouseAssembler`.
  - Retire the 2,833-line `geometry.dart` into `lib/house/legacy/geometry.dart` and remove from active compilation.
- **H-C3: M1 Route & Collision Verification**
  - Ensure capsule sweeps from Hall through all 8 rooms, stair climbing, and portal transitions execute cleanly with zero tunneling or ledge catching.

---

## 3. Priority 2: New Renderer Capabilities Integration

### Phase H-R: Pixeldart Feature Exploitation
- **H-R1: Per-Room Environment Probes (R-B3 Integration)**
  - Hook `per_room_lighting_rigs.dart` to bake an SH-9 diffuse irradiance + prefiltered specular cubemap for each room.
  - When the player camera enters a room, crossfade the active environment probe block in `shadowed_world.frag` over `roomIrCrossfadeSeconds` (0.2s). Metals and varnished woods reflect the specific room interior.
- **H-R2: PVS-Driven Scene Submission (R-E3 Integration)**
  - Connect `exterior_pvs.dart` to `_PixeldartWebRuntime` in `web/main.dart`.
  - Only submit draw nodes (walls, trims, furnishings) for rooms present in the active room's visible set. Reduces draw calls and vertex count by ~60% in interior spaces.
- **H-R3: HDR Lighting & Candle/Hearth Emissive Radiance (R-B1 & R-C2 Integration)**
  - Elevate hearth, gas mantles, and candle flames to genuine HDR emitters (emissive values > 2.5).
  - Target half-float `RGBA16F` scene buffer. Downsampled 5-pass bloom pyramid creates soft, natural golden halation around Victorian practical lights without clipping to flat white.
- **H-R4: Directional Window Shadows via Atlas CSM (R-B2 Integration)**
  - Configure directional sun/moon light to cast through exterior windows with a 2-cascade shadow atlas.
  - Generates sharp window-frame shadows on interior floorboards and walls, shifting with the 21-day solar cycle.
- **H-R5: Architectural Instancing for Trims & Balusters (R-E1 Integration)**
  - Convert repetitive architectural elements (stair balusters, door hinges, window mullions, picture rail hooks) to instanced attribute-divisor batches (`vertexAttribDivisor`), keeping draw call overhead minimal.

---

## 4. Verification & Testing Matrix

| Component | Test Suite | Verification Criteria |
|---|---|---|
| Arch DSL | `tools/test_arch_dsl.dart` | Non-degenerate triangles, valid normal/tangent vectors, closed manifold AABBs |
| Room Builders | `tools/test_room_builders.dart` | Each room matches `house.json` dimensions, portals cut accurately, zero zero-area faces |
| Stair Continuity | `tools/test_stair_continuity.dart` | Stair risers connect flush with Hall floor and Landing floor without geometry step seams |
| House Assembler | `tools/test_house_assembler.dart` | Portals mate perfectly across rooms; all 8 rooms assemble into valid non-overlapping house |
| PVS Submission | `tools/test_pvs_submission.dart` | Camera in Cellar submits only Cellar nodes; camera in Bedroom submits Bedroom + Landing |
| HDR & Lighting | Browser capture & Shader Lab | Hearth flame blooms gracefully; no white-clipping in HDR buffer; probes reflect room colors |
