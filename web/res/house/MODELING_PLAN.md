# Two-storey house and exterior modelling plan

## Intent

Model a believable, modest British urban house whose fabric was built in the late
Victorian period and is occupied in the early post-Victorian/Edwardian period. The
visible mass is two storeys. The existing cellar remains a below-grade service
volume, not a third storey. The result should feel accumulated, repaired and lived
in rather than like a pristine museum interior.

The MVP keeps the canonical blueprint values in `assets/house/house.json`, then
applies its explicit `modelScale: 2.25` uniformly to the runtime shell. This is a
hard envelope requirement: rooms are 50% wider, deeper and taller while their
topology, portal graph and authored IDs remain unchanged. The plan does not
change canonical simulation facts in `lib/house/house.dart`: eight rooms, nine
portals, the stair transition, room dimensions, eleven exterior windows with
nine observable from inside, or the opposite-house 10-to-11 window change.
Decorative geometry wraps those facts; it never replaces them.

Current checkpoint: the scaled interior shell, thick walls, modeled portal doors,
room fixture pass, and first exterior envelope are implemented. Remaining production work is
material/texture replacement, higher-fidelity kit variants, and fixed-camera review;
the Pixeldart next runtime now consumes the QHMX-compatible
shell through its indexed adapter and PVS mask without changing collision or room
graph ownership. The exterior material is explicitly double-sided so the
thick facade remains visible from interior window views; it is still a separate
retained item from room collision geometry.

## Architectural read

- Form: compact two-storey brick terrace/end-terrace or narrow semi-detached house.
- Construction: 1880–1900 red brick, stone lintels/sills, timber sash windows,
  slate roof, brick chimney stacks, cast-iron drainage and restrained ornament.
- Occupancy: 1900–1910 inherited furniture, patched finishes, newer household
  goods, visible maintenance and economical reuse.
- Silhouette: rectangular main block, shallow front bay or expressed paired sash
  grouping, rear service projection implied around the kitchen, steep simple roof,
  two chimney stacks, narrow side/back service yard.
- Mood: ordinary first, uncanny only through authored light, sound, weather and
  later house drift.

## Canonical spatial envelope

Treat the current world coordinates as the interior truth and build wall thickness
outward from them. Nominal external wall thickness is 0.28 m; internal partitions
are 0.12 m. Keep finish build-up visual only unless a canonical collision change is
approved.

| Level | Canonical spaces | Modelling treatment |
| --- | --- | --- |
| Cellar | cellar at y=-2.0 m | Below-grade masonry box, joists/pipes overhead, light well and coal/service access visible outside. |
| Ground | living room, hall, kitchen | 2.5–2.6 m ceilings, stronger public-room trim at front, plainer service finish at rear. |
| First | bedroom, landing, bathroom, spare room | 2.1–2.4 m ceilings, simpler cornices, localized sloped-roof implications only where they do not alter room bounds. |

For the MVP runtime these pre-scale ceiling bands become approximately 3.75–3.9 m
on the ground floor and 3.15–3.6 m on the first floor. Cellar depth is 3.0 m;
the first-floor datum is y=4.2 m and stair landings are y=2.1, 4.2 and 6.3 m.

The stair is a real connecting volume, not a teleport seam. Model strings, treads,
risers, newels, balusters, handrail, underside plaster and three canonical landing
heights while preserving the existing swept route.

### Exact interior reference table

These values come from `lib/house/house.dart` and are inputs, not artistic
suggestions. Origins are the lower north-west corner in world space; sizes are
`x width × y height × z depth` in metres.

| Room | Level | Origin | Size | Openings that control the shell |
| --- | --- | --- | --- | --- |
| Living room | Ground | (0, 0, 0) | 4.5 × 2.6 × 4.0 | Two north sashes; hall and kitchen doors. |
| Hall | Ground | (4.5, 0, 0) | 2.5 × 2.6 × 7.0 | North front door/fanlight; living, kitchen, cellar and stair portals. |
| Kitchen | Ground | (0, 0, 4.0) | 4.5 × 2.5 × 3.0 | South and west sashes; hall and living doors. |
| Cellar | Below grade | (1, -2, 2) | 4.0 × 2.0 × 4.0 | Hall cellar portal; exterior light/service openings are visual until canonically bound. |
| Bedroom | First | (0, 2.8, 0) | 4.5 × 2.4 × 4.0 | Two north sashes; landing door. |
| Landing | First | (4.5, 2.8, 0) | 2.5 × 2.4 × 3.0 | Stair, bedroom, bathroom and spare-room portals. |
| Bathroom | First | (4.5, 2.8, 3.0) | 2.5 × 2.4 × 2.5 | East frosted sash; landing door. |
| Spare room | First | (0, 2.8, 4.0) | 4.5 × 2.1 × 3.0 | South sash; landing door. |

The table above is the readable authored blueprint. At runtime the uniform 2.25×
contract yields (in the same order) living 6.75×3.9×6.0 m, hall
3.75×3.9×10.5 m, kitchen 6.75×3.75×4.5 m, cellar 6×3.0×6 m, bedroom
6.75×3.6×6 m, landing 3.75×3.6×4.5 m, bathroom 3.75×3.6×3.75 m and
spare 6.75×3.15×4.5 m. First-floor origins are y=4.2 m and the cellar origin
is y=-3.0 m.

The readable blueprint ground-floor interior footprint is 7.0 × 7.0 m. Under the
runtime 2.25× envelope it is 15.75 × 15.75 m; with 0.63 m exterior walls, the
first-pass outside wall envelope is approximately 11.34 × 11.34 m. This is a
modelling envelope only: setbacks, bays, chimney breasts and roof overhangs may
project outside it, while no interior face may move without a canonical geometry
decision.

### Datum and snapping rules

- World metres are authoritative; never rescale the assembled house to make an
  imported asset fit.
- Use a 0.10 m coarse construction grid, 0.025 m finish grid and 0.005 m trim grid.
- `y=0` is the ground-floor finished-floor datum; `y=4.2` is the first-floor
  finished-floor datum in the scaled MVP shell. Model floor thickness and joists inside the 0.2 m band
  between ground ceilings and the first-floor datum where possible.
- Wall module pivots sit on the finished interior face at floor level. Window and
  door module pivots sit at the lower-left aperture corner when viewed from inside.
- Repeated kit pieces must use exact transforms; small age variation belongs in
  material parameters or approved variant meshes, not accidental vertex drift.
- Use consistent normals and UV orientation: wall U follows clockwise horizontal
  travel when viewed from inside, V points upward; floor U follows world +X and V
  follows world +Z.

### Proposed external massing dimensions

The following are visual targets and should be recorded as authored asset data,
not copied into simulation code:

| Element | First-pass target | Notes |
| --- | --- | --- |
| External wall | 0.28 m | Build outward from canonical room faces; reveal depth must remain visible. |
| Internal partition | 0.12 m | Keep collision on existing canonical planes until shared geometry is migrated. |
| Ground floor structure | 0.20 m | Timber joists/boards over ventilated void except cellar-bearing zone. |
| First floor structure | 0.20 m | Joist zone between room ceiling and first-floor datum. |
| Eaves | y≈8.03 m | Clear the highest first-floor ceiling and cornice without changing room bounds. |
| Ridge | y≈10.88 m | Initial 40–45° roof study; adjust silhouette after fixed-camera review. |
| Roof overhang | 0.18–0.25 m | Enough for fascia/gutter shadow without a suburban deep eave. |
| Front plinth | 0.35–0.50 m high | Darker engineering brick or stone, weathered by splashback. |
| Front step | 0.15–0.18 m rise | Stack only as needed for the fixed exterior presentation; front portal remains canonical. |
| Chimney stack | 0.65–0.85 m above ridge | Brick stack with separate pots and lead flashing. |

## Modular kit

Build the kit in measured, reusable families. Every module gets a stable ID,
metre units, Y-up orientation, floor-centre or wall-anchor pivot, simple collision
proxy, material slots and explicit end/corner variants.

1. Structure: external brick wall, internal plaster partition, floor/ceiling slab,
   cellar masonry, chimney breast and wall returns.
2. Openings: sash window, frosted bathroom sash, sill, stone lintel, reveal,
   architrave, front door, fanlight, internal door, cellar door and grille.
3. Trim: skirting, dado rail, picture rail, cornice, ceiling rose, threshold,
   panelling and stair trim. Provide straight, inside-corner, outside-corner and end
   caps so no trim terminates raw.
4. Fireplace: chimney breast, mantel shelf, surround, tiled inset, iron grate,
   hearth slab, ash door and blocked/broken variants.
5. Stair: lower/upper strings, treads, risers, quarter landing, newels, balusters,
   handrail, apron and under-stair enclosure.
6. Exterior envelope: brick courses, bay/sash surround, corbel, plinth, foundation,
   front step, porch/fanlight surround, cellar light well and boot scraper.
7. Roof/drainage: slate field, ridge, verge, lead flashing, valley where needed,
   chimney stack/pots, fascia, gutter, downpipe, hopper and drain connection.
8. Grounds/context: boundary wall, iron gate/railings, path, yard paving, coal hatch,
   water butt, drain, clothes line, planting cards/meshes, opposite facade and roof
   silhouettes.

### MVP shell realization

The first implementation emits actual wall solids, not only interior wall planes.
Exterior wall sections use 0.63 m runtime thickness (the authored 0.28 m section
at 2.25×); internal partitions use 0.27 m (authored 0.12 m at 2.25×). Each section
is capped and watertight enough to show jamb reveals, shadow lines and the outside
silhouette while collision remains on the canonical room planes.

Every non-stair portal carries a door kit in `house.json` and the runtime portal
graph. The MVP geometry emits a framed, thresholded door assembly with a tangible
leaf: passable doors swing into the room from their hinge edge, while closed doors
remain seated in the opening. The front door uses the recessed hero kit, the cellar
uses the grille kit, and interior rooms use the four-panel kit. The stair portal
deliberately remains a modeled open stair throat rather than a door.

The current room mesh also carries a deterministic lived-in fixture pass. It adds
the living-room fireplace and grate, hall stair treads/table/clock, kitchen range
and worktable, cellar coal stack and pipe, bedroom bed/washstand, landing guard,
bathroom tub/cistern, and spare-room sheeted furniture. These are render-only
boxes authored from the scaled room envelope; they are deliberately kept out of
collision and focus queries, and the stair run is clipped to the hall's canonical
render bounds at the landing transition. A second micro-detail pass adds fireplace
tiles/brackets and mantel objects, hall hooks and umbrella stand, kitchen sink,
faucet and crockery, cellar valve/pipe fittings, bed pillows/legs, landing
balusters, bath taps, and spare-room crate bindings. The latest dressing pass adds
separate curtain rods, tied-back fabric drops, sash hardware, three hinge plates
per modeled door, and a brass front-door mail slot; these pieces remain
render-only and do not make glazing opaque or alter portal state.

The floor pass now carries shallow, non-collision finish geometry: alternating
wood-board courses in domestic rooms, a worn inset runner and border in the hall
and landing, a subdued living-room rug, service-grade linoleum seams in the
kitchen, a checker tile grid in the bathroom, and a damp concrete slab/drain
patch in the cellar. These overlays sit on a controlled millimetre offset to
avoid z-fighting with the canonical floor planes.

The opening-detail pass now gives every authored window a visible sash meeting
rail, centre bar, projecting sill, and frosted lower rail where applicable.
Modeled door assemblies also carry jamb-side hardware and a recessed front-door
kick plate. These details stay view-only and do not change the canonical
opening, traversal, or collision contracts.

### Data-driven inventory

`assets/house/inventory.json` is the placement authority for future normalized
models. It contains a stable asset catalog and 60 exact room-local placements
covering all eight rooms. Every placement records its role, socket, position,
Y-up Euler rotation, scale, visibility layer/state key, interaction affordance,
and clearance radius. Positions are canonical metres; the validator applies the
house `modelScale` exactly once before checking transformed bounds, room escape,
socket uniqueness and route-safe margins. The catalog intentionally points at
future normalized model paths and declares `room-fixture` proxies, so the current
authored fixture mesh remains the visual fallback until those models are imported.

The lived-in packet now covers two rugs, a hall runner, ration tin and ration
book, bread, enamel mug and bowl, firewood basket, table lamp, coat hooks, and
kitchen jars. These are deliberately small, inspectable or story-supporting
objects: they add occupancy and period texture without narrowing the authored
movement corridors. Their source paths are briefs for normalized model import,
not claims that binary production assets have already landed.

The second lived-in packet adds a newspaper, tea service, mail bundle, gloves,
potato sack, kettle, coal shovel, folded blanket, soap dish, and knitting
basket. Together the two packets make domestic routines legible in the living
room, hall, kitchen, cellar, bedroom, bathroom, and spare room without turning
every surface into noise.

The furniture packet adds six larger silhouettes: a living armchair and
sideboard, bedroom washstand, landing bench, bathroom stool, and spare-room
sewing table. Each has a normalized source brief plus a deterministic proxy in
the room mesh, with wall-biased placement and route-safe clearance.

The occupancy packet adds six asymmetric life cues: a living fern, hall family
photographs, a kitchen tea towel, bedroom slippers, a bathroom towel, and a
cellar bottle crate. They are intentionally room-specific and quiet in the
composition, making routine visible without turning the house into a prop pile.

`assets/house/soundscape.json` is the matching acoustic placement authority. It
binds eight emitters to inventory placement IDs: the hall clock (hourly tick,
three-hour cuckoo/bell call and six-hour chime), kitchen range (metal settling),
cellar drain (drip), bathroom cistern (tank settling), front-door knocker,
landing window wind, bedroom timber, and kitchen pipe. Cue files are authored deterministic WAVs in
`web/res/sfx/`; the runtime resolves their room-local positions through the
house model scale, listener room, and portal graph so closed doors attenuate the
source naturally. Clock scheduling is simulation-owned and emits no historical
backlog after sleep or restore.

### Kit dimensions and variants

These bands keep independently authored pieces compatible. Final measurements are
stored on kit records and verified at assembly.

| Family | Nominal section or interval | Required variants |
| --- | --- | --- |
| Skirting | 0.15–0.20 m high, 0.02–0.03 m proud | 0.5/1/2 m straights, inside/outside corners, door stop, damaged end. |
| Dado rail | centre at 0.85–1.00 m | Straights, returns, stair rake, interrupted/repair patch. |
| Picture rail | centre at 1.95–2.15 m | Straights, corners, chimney-breast returns. |
| Cornice | 0.10–0.18 m drop/projection | Plain service, modest domestic, richer front-room profiles. |
| Architrave | 0.075–0.10 m face | Door/window heads, jambs, plinth blocks, left/right damaged feet. |
| Internal door leaf | canonical 0.9 × 2.1 m opening | Four-panel, plainer service, cellar, closed/open proxy states. |
| Sash frame | aperture-specific | Two-over-two front, plainer rear, frosted bathroom, shutter-ready inside frame. |
| Floorboards | 0.11–0.18 m visual width | Clean, traffic-worn, patched and service-grade material variants. |
| Stair balusters | 0.09–0.12 m centres visually | Straight flight, rake ends, landing guard, missing/repaired variant if route-safe. |
| Gutter/downpipe | 0.10–0.13 m / 0.07–0.09 m diameter | Straight, stop end, corner, outlet, hopper, offsets, shoe and drain connection. |
| Slate exposure | 0.18–0.25 m visual course | Broad material field plus geometry at eaves, ridge, verge and broken silhouette spots. |

### Topology and shading rules

- Use watertight thickness where silhouette, reveal or contact shadow exposes it;
  broad unseen wall backs may remain simple capped shells.
- Bevel player-near hard edges with a world-consistent 3–8 mm radius. Hero stone,
  wood and cast-iron edges can reach 10–15 mm where wear justifies it.
- Weighted/edited normals are permitted only when exported deterministically and
  tested by the importer; do not rely on Blender-only modifiers surviving by luck.
- Avoid coplanar overlays. Decals sit on a controlled offset or use an explicit
  decal/material path once the renderer supports it.
- Keep broad wall/floor UVs continuous across modular seams. Trim and carved pieces
  may use atlases; unique room-sized unwraps are a last resort.
- Geometry carries silhouette and parallax-critical depth. Normal/displacement maps
  carry brick pores, plaster grain, shallow mortar and board scratches.

## Facade and roof assembly

### Front elevation

Read as one restrained composition: dark plinth, red-brick field, paired front
sashes aligned between levels, stone or painted lintel/sill accents, recessed front
door and fanlight, then a dark slate roof with brick stacks. If a bay is tested, it
must wrap the existing living-room apertures without inventing a window or changing
their canonical positions. Prefer shallow brick/reveal articulation over a large
new volume.

Model real aperture depth: exterior sill and lintel, brick return, timber box frame,
upper/lower sash, meeting rail, glass, interior reveal and architrave. Curtains and
shutters are separate dressing layers so their state can change without rebuilding
the wall.

### Rear and side elevations

Use cheaper, plainer construction: more visible repairs, fewer stone accents,
service pipes, patched brick, kitchen drain staining and an economical rear step.
The west kitchen window can justify a narrow side passage. Do not infer a new side
door. All external service clutter remains view-only and stays clear of fixed
window/threshold sight lines.

### Roof and chimney logic

- Start with one simple pitched roof spanning the main block; use attached lower
  service planes only if they do not imply a new room.
- Place chimney stacks above modeled chimney breasts/fireplaces where possible.
  Avoid decorative stacks that cannot connect plausibly through the house.
- Slate field is instanced or material-driven; eave, verge, ridge and a few damaged
  courses receive geometry for silhouette.
- Flash every roof/stack junction. Gutters receive fall toward a real outlet;
  downpipes terminate at a drain or water butt rather than disappearing into soil.
- Weathering follows gravity: soot rises from pots, rain streaks run below copings
  and joints, moss favors shaded slow-draining areas, and lead oxidizes differently
  from iron.

## Exterior cells and visibility

Keep all exterior space view-only. Divide it into `front`, `rear-service`,
`side-boundary`, `roof-drainage`, `street`, `opposite-house` and `neighbor-roofs`.
Each cell owns its placements and LOD group. Window, front-door, cellar-threshold
and fixed ration-run cameras enumerate only the cells they can actually see.

- Front: red-brick elevation, stone bands/sills, timber sash, front step, fanlight,
  railings, boot scraper, soot streaks and rain marks.
- Rear service: plainer brick, kitchen sash, kitchen steps, drain, water butt,
  coal hatch, crates, line and restrained clutter.
- Roof: mostly dark slate with individually modelled silhouette courses only near
  gutters/ridges; use material displacement for the broad field.
- Opposite house: low-cost facade shell with real window recesses, curtains and one
  lit interior vignette. Preserve the canonical 10-window base and isolated Day-20
  eleventh-window variant.
- Neighbor context: layered roof/chimney silhouettes, sparse vegetation and street
  furniture; no traversable geometry.

### Exterior depth stack

Use four depth bands so the view through windows never looks like a flat backdrop:

1. **Threshold band, 0–2 m:** reveal, sill, step, railings, drain, nearby planting
   and service clutter; highest detail and strongest contact shadows.
2. **Property band, 2–8 m:** path, boundary wall, yard, tree/shrub silhouettes and
   facade returns; medium detail with small props grouped into atlases.
3. **Street/opposite band, 8–25 m:** curb, road, opposite facade, window recesses,
   curtains and one interior vignette; simplified materials but real parallax.
4. **Context band, 25 m+:** neighboring roofs, chimneys, tree crowns and sky masks;
   aggressively simplified and excluded when not visible.

The fixed daylight and night cameras should be reviewed with each band independently
enabled. A band that contributes no readable silhouette, layer or light cue is cut.

## Room compositions

| Room | Focal anchor | Architecture and density |
| --- | --- | --- |
| Hall | front door/fanlight and clock | Dado, runner, stair/newel, narrow table, under-stair cupboard-room with paneled door and shelf, umbrella stand, coat hooks and Board papers; preserve clear front-to-stair route. |
| Living | fireplace and wireless cabinet | Chimney breast, cornice/picture rail, paired front sashes, sofa, mismatched chairs, rug, bookcase and clustered framed art. |
| Kitchen | range/flue and worktable | Plain painted plaster, dresser, sink/plumbing, pantry/cupboards, pans, crockery, ration goods and visibly used storage. |
| Cellar | coal/service wall | Rough masonry, joists, pipes, shelves, coal bin, crates, bottles, drain, damp tide line and debris bands. |
| Bedroom | bed/fireplace relationship | Iron or brass bed, wardrobe, washstand, desk/journal, bedside table, layered textiles and personal photographs. |
| Landing | stair/newel view | Runner, narrow table, picture group and displaced objects while preserving both stair directions. |
| Bathroom | bath and high cistern | Tile/plaster transition, roll-top bath, basin, cabinet, mirror, exposed plumbing, towels and bottles. |
| Spare room | sheet-covered furniture | Simpler trim, trunks, boxes, empty frames, repair tools, peeling finish and purposeful negative space. |

### Placement discipline

- Reserve a continuous 0.75 m practical route through ordinary circulation and
  the canonical 0.3 m-radius capsule sweep through every portal/stair approach.
- Keep 0.60 m clear in front of required interactions and enough lateral space for
  focus/highlight readability at the normal camera height.
- Furniture clusters should have a reason: conversation around the living-room
  hearth, work around kitchen preparation, washing around bathroom plumbing and
  storage against structurally plausible walls.
- Put tall furniture on uninterrupted walls, not across windows, door swings,
  mantles or canonical height marks. Let some walls remain deliberately quiet.
- Small objects form groups of three to seven with mixed height, orientation and
  function. Avoid evenly spaced single-prop noise.
- Reuse models through material/state variants and different compositions. No room
  should repeat the exact same clutter cluster or damage decal arrangement.
- Story objects get contrast and breathing room. Decorative objects may support
  them but never create a competing interaction silhouette.

### Room finish hierarchy

| Zone | Wall finish | Floor finish | Trim/metal character |
| --- | --- | --- | --- |
| Hall/living | Restrained damask/stripe above dado, painted or papered lower wall | Varnished boards plus runner/rug | Dark stained timber, tarnished brass, blackened grate. |
| Kitchen | Scrubbable paint/plaster with local tile splashback | Linoleum field with threshold board/stone | Painted joinery, enamel, dull steel and copper accents. |
| Cellar | Limewash/rough masonry with damp failure | Concrete/stone and drain zone | Black iron, galvanized repairs, oxidized pipework. |
| Bedroom | Faded patterned paper with cleaner protected zones | Duller boards plus rug | Painted/stained mixed furniture, brass/iron bed. |
| Landing | Hall paper simplified upstairs | Worn boards plus runner | Dark stair timber, painted room architraves. |
| Bathroom | Painted plaster over tiled wet zone | Small ceramic tile | White enamel, nickel/brass fittings, exposed dark pipework. |
| Spare room | Peeling paper and repair patches | Dry worn boards | Mismatched stored furniture and unfinished repairs. |

## Material system and eye-candy pass

Use reusable base materials plus small masks/decals. Do not bake every stain into a
unique texture. Target 1K runtime maps for ordinary props, 2K for room-scale
surfaces and 4K only for hero sheets or atlases; keep higher-resolution sources in
the content-addressed source cache.

- Brick: two compatible red-brick bases, mortar-tone control, soot/rain vertex
  masks, damp foundation blend and sparse chipped-brick decals.
- Roof: dark slate as the canonical choice; terracotta remains a visual comparison
  candidate, not the default for this British house.
- Interior walls: clean plaster, aged plaster, restrained wallpaper families,
  localized peeling edges and damp transitions.
- Wood: varnished public-room boards, dull bedroom boards, worn service boards,
  painted joinery and darker stair/handrail timber.
- Stone/ceramic: hearth stone, front-step stone, bathroom tile, kitchen splashback
  and cellar/drain masonry.
- Metal: blackened cast iron, painted iron, oxidized copper/lead, tarnished brass
  and enamelled fixtures.
- Micro-detail: edge wear, hand grime near switches/handles, soot above grates,
  water streaks below sills/downpipes, floor traffic lanes, rug compression and
  dust occlusion. Every mark must have a plausible cause.

### Shader and texture packing contract

The current proxy house has a house-owned surface binding manifest at
`assets/house/materials.json` (mirrored under `web/res/house/`). It is the
interim bridge between canonical room surface IDs and the renderer's existing
texture keys: every wall, floor, and ceiling variant records its texture key,
display tint, roughness intent, and target UV repeat. `lib/house/geometry.dart`
uses the tint and UV density immediately, while Pixeldart remains responsible
for texture handles and future normal/ORM/source-map expansion. Do not add a
second room-material mapping in the renderer or silently invent a texture key;
promote a variant here first and validate it with `tools/test_house_materials.dart`.

Spatial resizing follows the same rule: change the authored and presentation
factors in `lib/house/scale_profile.dart`, update the manifest `modelScale`
mirrors, and run the house contract suite. Spawn anchors, exterior dimensions,
wall thickness, inventory scale validation, and room geometry consume that
profile; do not hand-edit a second runtime scale constant.

- Preserve linear data for roughness, metalness, AO, normal and height; colour
  textures use sRGB. Never gamma-correct packed data channels.
- Prefer one consistent ORM packing once renderer/importer support is confirmed:
  R=AO, G=roughness, B=metalness. Until then retain named source channels and record
  conversions in provenance.
- Normal maps use the renderer's declared tangent convention; store the source
  convention and generate the alternate DirectX/OpenGL form deterministically.
- Height is a normalization input. Runtime parallax/displacement is optional and
  must prove cost and edge behavior; never let it move canonical collision.
- Author reusable macro masks for damp, soot, dust and traffic. Combine them with
  per-placement scalar controls so one base material can cover several rooms
  without obvious cloning.
- Give all glass actual thickness only at hero/near windows. Use restrained dirt,
  imperfect roughness and interior reflections; avoid modern perfectly clear panes.
- Set texel-density targets before normalization: approximately 256 px/m for broad
  context, 512 px/m for ordinary room surfaces and 1024 px/m for player-near hero
  details at the retained source level. Runtime resolution still obeys measured
  package and live-texture budgets.

### Causal weathering map

| Cause | Where it appears | Where it must not appear |
| --- | --- | --- |
| Hand contact | Door edges, knobs, stair rail, switches, drawer pulls | High wall centres or unreachable ceiling trim. |
| Foot traffic | Door thresholds, stair centres, hall route, worktable/range approach | Uniformly across entire floor. |
| Rain/splash | Below sills, copings, downpipe joints, plinth and front step | Protected interior faces. |
| Soot/heat | Above grates, range flue, chimney pots and nearby ceiling | Random cold corners. |
| Damp | Cellar base, failed exterior drainage, cold service corners | Dry sunny upper facade without a path. |
| Dust | Shelf tops, frame tops, unused spare-room objects and floor edges | Frequently handled story surfaces unless narratively intentional. |
| Repairs | Plumbing access, roof flashing, patched brick, replaced boards | Repeated as the same decal everywhere. |

## LOD, batching and resource intent

### Triangle policy: detail may be high, visibility may not be careless

The finished authored house may contain a very high aggregate triangle count. A
rich two-storey shell, reusable kit, furniture collection, exterior cells and all
LOD levels can reasonably reach several million triangles in source and normalized
storage. Do not flatten mouldings, ironwork, turned stair parts, sash hardware or
hero furniture merely to keep the *whole-house* number small.

The meaningful runtime number is the submitted visible working set from a frozen
camera, not the sum of every asset on disk. The masterplan currently carries a
provisional 110k submitted-triangle p95 view cap at 384×216. This modelling plan
cannot silently override that gate. If high-detail contact sheets prove that a
higher cap materially improves the image, PERF-01 should ratify a new limit with
named-hardware CPU/GPU, draw, memory and package evidence. Until then:

- Source/high-poly triangle count is unrestricted within storage and tool sanity.
- Normalized LOD0 may retain dense silhouette-critical detail.
- Total authored/placed triangles may be very high because hidden rooms/cells do
  not submit.
- PVS, room/cell ownership, occlusion, LOD and instancing control the live set.
- Hero exceptions are explicit records; they are not permission for every asset to
  ship as an unreviewed scan.
- Optimization targets invisible density, duplicate vertices, excessive material
  splits and tiny sub-pixel features before it targets readable silhouette.

### Five representations of every serious asset

Keep these representations separate. They solve different problems and must never
be inferred from one another at runtime.

| Representation | Purpose | Stored result |
| --- | --- | --- |
| Reference | Period evidence, dimensions, material and construction logic | Catalogue evidence, measurements and annotated images. |
| Source/high-poly | Filigree, carving, cast texture, cloth folds and clean bake source | Ignored acquisition cache or tracked redistributable source when permitted. |
| Normalized render mesh | Deterministic metres/Y-up/triangulated parts with UVs, normals, pivots and LODs | `assets-src/models/<id>/` with normalization record and hashes. |
| Collision/query proxy | Player/physics/focus truth using simple boxes, capsules or authored convex/static shapes | Game-side house/physics data, never renderer mesh metadata. |
| Placement | Room/cell transform, material variant, state, importance, sockets and visibility ownership | `assets/house/rooms/**` or `assets/house/exterior/**`. |

The present procedural trim in `lib/house/geometry.dart` is a renderer-parity
placeholder and visual baseline. Final kit meshes should replace it through the
authored house scene path only after they reproduce the same canonical bounds and
aperture tests.

The exterior MVP now has a concrete generated shell at
`assets/house/exterior/main_shell.qhmx`. It is view-only and wraps the runtime
15.75 × 15.75 m interior envelope with the 0.63 m exterior wall thickness. The
front elevation has a recessed threshold and railings; all four elevations have
opening-aware masonry, stone sill/lintel blocks, a plinth, eaves and downpipes;
the roof has two slate planes, ridge/fascia, twin chimney stacks and gutters;
the street cell adds a low boundary wall and gate. Cellar/service and context
cells remain separate placements around this shell rather than becoming physics
geometry. The current checked export is 9,390 indexed vertices, 4,694
triangles, 178,444 bytes, with 33.3% exact-attribute index reuse; the latest
detail pass adds timber sash bars, recessed front-door leaf geometry, paired
chimney pots, repeated downpipe brackets and shoes, a string course, dressed
front corners, opening-aware masonry course shadow lines, closed brick gable
ends, repeated raised slate courses, window boxes, roof
flashing, a lantern, boot scraper, coal hatch, water butt and ventilation bricks
without changing collision truth.

## Technical realization pipeline

### DCC scene organization

Use one DCC source scene per kit family or substantial unique asset, not one giant
mutable house file. A house assembly scene may reference/export those assets for
review but is not the sole source of truth.

Recommended collections/layers inside each source scene:

```text
REF_measurements      non-exported dimensions and image planes
HP_source             high-poly/sculpt/scan cleanup
LOD0_render           highest runtime mesh
LOD1_render           medium silhouette-preserving mesh
LOD2_render           low/context mesh
COL_proxy             collision/query reference shapes
SOCKETS               named empties/locators
BAKE_cage             explicit cages where baking is used
REVIEW                 turntable lights/cameras only, never exported
```

- Set scene units to metres with scale 1.0 and apply object scale before export.
- Author in Y-up or use one pinned, recorded conversion. Never hand-rotate exported
  objects after normalization.
- Object names and exported part keys are stable lowercase kebab-case. DCC duplicate
  suffixes such as `.001` are rejected by normalization.
- Freeze modifiers intentionally. Record subdivision, bevel, weighted-normal,
  triangulation and decimation settings with DCC/tool versions.
- Mirror instances must apply transforms with correct winding/tangent handedness.
  Negative-scale objects cannot enter normalized output.

### Geometry construction by house system

**Walls and partitions**

- Generate walls from canonical interior planes plus explicit outward thickness.
- Split at room, portal, window, storey and exterior-cell boundaries; do not split
  merely at every brick or decorative strip.
- Model reveals, wall caps and exposed returns. Hidden inter-room back faces may be
  removed only when portal/PVS tests prove they can never be seen.
- Keep structural wall mesh separate from removable wallpaper, panelling, curtains,
  shutters and stateful doors.

**Openings and sash windows**

- One opening assembly contains exterior sill/lintel, masonry return, box frame,
  upper sash, lower sash, meeting rail, glazing bars, glass, interior reveal,
  architrave and optional shutter/curtain sockets.
- Glazing bars and frame profiles use geometry at LOD0 when their silhouette is
  larger than roughly one pixel in the nearest fixed view. LOD1 may merge moulding
  steps; LOD2 retains the recess, major bars and glass plane.
- Separate sash/glass/shutter/curtain parts so material and visibility state do not
  require a wall rebuild.
- Bind the model to an existing window ID. An ornamental pane division never
  becomes an additional canonical window.

**Trim, filigree and plaster ornament**

- Sweep cornice, picture rail, dado, architrave and skirting from reusable profile
  curves with controlled segments. Export baked mesh profiles; runtime does not
  tessellate splines.
- Use dedicated corner and return pieces where a swept mitre would shade poorly.
- Ceiling roses may use 24–64 radial segments at LOD0 with separate inner/outer
  relief rings; LOD1 keeps the outer silhouette and two relief steps; LOD2 becomes
  a shallow disc or is culled by screen size.
- Cast-iron filigree—grilles, vent covers, boot scraper, rail panels and fireplace
  fretwork—uses true geometry for the outer contour and largest voids. Fine relief
  is baked or represented by masked texture only after alpha coverage is measured.
- Turned balusters/newels use enough radial segments to avoid visible faceting at
  the nearest stair camera; produce low radial-segment LODs instead of using one
  dense mesh at every distance.
- Never scatter procedural ornament at runtime. Author exact instances so hashes,
  counts, PVS ownership and rebuilds are deterministic.

**Staircase**

- Derive tread/landing placement from the canonical transition extents and landing
  heights; treat the generated values as a checked export input.
- Treads, risers and strings can combine per flight. Newels, handrails, landing
  guards and state/damage variants remain separately addressable kit pieces.
- Maintain a simple continuous ramp/step collision representation independent of
  decorative nosings and balusters. The player capsule must not snag on filigree.
- Model believable joinery: string-to-newel intersection, handrail easing, landing
  apron, baluster mortises and the plastered stair underside.

**Roof and drainage**

- Build a clean watertight roof substrate first. Slate fields may be dense instanced
  geometry at LOD0 near silhouette cameras, but must have merged/texture-based LODs.
- Author eave starter course, ridge, verge, flashing and stack intersections as
  separate reusable strips. Prevent T-junction cracks and coplanar flashing.
- Use curve-derived gutters/downpipes frozen to mesh with circular/ogee sections.
  LOD segment counts may decrease without changing outside diameter or connection
  sockets.
- Every downpipe has named sockets for gutter outlet, wall brackets, hopper, offset,
  shoe and ground drain/water butt.

**Furniture, textiles and clutter**

- Preserve construction: separate doors/drawers/lids, visible thickness, joint
  lines, hardware and credible backs/interiors where the player can inspect them.
- State-bearing parts use stable keys and pivots at their physical hinge/slider
  axes. Do not bake an open drawer into a single static mesh.
- Cloth can be dense at source and LOD0, but collision uses a coarse static form.
  Maintain hem and sheet silhouettes before micro-wrinkles during reduction.
- Small repeated clutter may use a curated cluster model only when each constituent
  is noninteractive and the cluster has one honest placement purpose.

### High-poly, retopology and baking

High-poly work is encouraged for fireplace castings, carved wood, ceiling roses,
brass hardware, worn stone, textiles and hero furniture. Use it deliberately:

1. Establish real-world dimensions and the LOD0 silhouette first.
2. Build/sculpt high-frequency relief without destroying construction seams.
3. Retopologize the runtime mesh around silhouette, deformation/state boundaries,
   UV seams and material borders.
4. Create an explicit cage and bake tangent normal, AO and optional curvature/
   height at a recorded resolution.
5. Inspect gradients, hard-edge/UV alignment, skew, mirrored tangents and cage
   leakage on the actual runtime shader.
6. Preserve the high-poly source and record hashes/tool settings. Bakes are derived
   artifacts, never unexplained hand-edited inputs.

Do not bake geometry that needs to change silhouette, cast a stable close shadow,
form a real void or communicate mechanical state. Do bake shallow carving, cast
grain, dents, scratches, woven relief and sub-centimetre surface variation.

### Topology and normal policy

- Runtime output is explicitly triangulated with stable triangle order. N-gons and
  nonmanifold edges are rejected before conversion.
- Remove zero-area triangles, duplicate faces, isolated vertices and degenerate UV
  islands. Preserve intentional coincident boundaries only with documented need.
- Put hard normals at genuine sharp construction breaks. Align UV splits with hard
  edges unless a verified tangent workflow supports otherwise.
- Keep continuous normals over broad turned/carved forms; avoid weighted normals
  that erase intentional small bevels.
- Prefer even, deformation-aware topology around hinges, cloth folds and curved
  profiles. Static planar faces may use long triangles if shading remains stable.
- Use indexed reuse in the eventual runtime format when available. Triangle count,
  unique vertex count and expanded QMSH vertex count are reported separately.

#### QHMX v1 exterior interchange

QHMX is the house-owned compact interchange used for the generated exterior. Its
40-byte little-endian header is `QHMX`, version, 16-byte vertex stride, vertex
count, index count and six float32 AABB values. Each vertex is 16 bytes:
quantized position `u16×3`, octahedral normal `u16×2`, UV `u16×2`, material `u8`
and flags `u8`. A trailing `u16` index buffer stores triangles. Decoding is
strict (magic/version/stride/count/bounds/index checks), and the decoded indexed
arrays map directly to Pixeldart `MeshData.indices` without expanding triangles.
The app-side handoff is implemented by `lib/house/exterior_mesh_adapter.dart`;
it preserves the indexed buffer and only expands the compact vertex records into
the renderer's compatibility attribute stride at registration time.

`lib/house/exterior_pvs.dart` supplies the next renderer boundary: five fixed
camera bands map to at most three exterior cells each. The PVS is conservative,
deterministic and view-only; it does not alter room collision or story state.

The checked-in shell currently contains 9,390 unique vertices and 4,694
triangles in 178,444 bytes, with 33.3% index reuse. Generate it with
`dart run tools/build_house_exterior.dart` and verify it with
`dart run tools/test_house_exterior.dart`; do not hand-edit the binary. Numeric
material slots are resolved by `assets/house/exterior/materials.json`, keeping
texture/roughness decisions out of the packed triangle stream.

### UV and material realization

- UV0 is the render UV set. UV1/lightmap data is not assumed unless a later renderer
  contract explicitly adopts it.
- Give architectural tilers consistent world density and orientation. Unique trim,
  hardware and furniture may use packed atlases with at least 4–8 pixels of padding
  at the retained source resolution.
- Stack identical UV islands only when wear/state variation is not required. Avoid
  mirrored text, asymmetric carving or directional wood grain.
- Align wood grain with actual construction: along rails/stiles/boards and around
  turned parts. Brick bond must continue through compatible modular pieces.
- Material boundaries define Pixeldart model parts, so avoid gratuitous slots. A
  visually complex asset can retain high triangles while still using a small stable
  part/material set.
- Maintain a material-variant key independently of geometry identity. The same sash
  mesh can bind clean, dirty, frosted or night-lit material variants without mesh
  duplication.

### Pivot, socket and state contract

- Static furniture and props use `floorCenter`; wall pieces use `wallBack`;
  openings use `openingOrigin`; exceptional inherited pivots are explicit.
- Door pivots sit on the hinge axis, drawers on the slider centreline, shutters on
  their hinge edges and clock hands on their arbor.
- Useful sockets include `surface-top`, `shelf-<n>`, `drawer-<n>`, `handle`,
  `hinge`, `wall-anchor`, `floor-contact`, `light-origin`, `audio-origin` and
  named attachment points for curtains, pipes and drainage.
- Sockets are finite transforms in model-local space. Placement data may bind them;
  renderer code may not invent story or collision meaning from socket names.
- Closed/open/broken/Q24 states share stable logical IDs and either swap named parts
  or rebuild from an explicit variant. State changes never mutate anonymous vertex
  ranges.

### Collision, interaction and acoustics realization

- Architecture collision follows canonical walls, floors, stairs and apertures,
  not high-poly render surfaces.
- Furniture proxies use the fewest boxes/capsules/approved convex shapes that keep
  routes and contact believable. Decorative legs, mouldings and handles do not
  become capsule snags.
- Pickable props receive mass/material/damping, carry bounds, recovery point and
  impact family in game data. Render triangles do not determine mass.
- Interaction/focus query shapes are explicit and may be slightly more generous
  than physical collision while remaining within the visible object.
- Door and window openness feeds the single canonical portal/acoustic state. A
  detailed frame cannot introduce a parallel occlusion boolean.

### Normalization and Pixeldart handoff

The deterministic normalized directory remains:

```text
assets-src/models/<id>/source.json
assets-src/models/<id>/model.obj
assets-src/models/<id>/materials.json
assets-src/models/<id>/normalization.json
assets-src/models/<id>/textures/<content-hash>.<ext>
```

One normalized model may emit several QMSH parts. Pixeldart's `ModelDefinition`
then composes stable `ModelPart` keys, mesh/material handles and local transforms,
plus `combinedBounds` and optional `ModelSocket` transforms. Room, story,
interaction and collision meaning remains in game-side placement data.

Normalization must report at least source/output hashes, importer and version,
units, axis/handedness, applied transform, triangulation policy, normal/tangent
policy, material remap, texture conversions, per-part vertices/triangles, bounds,
LOD metrics and modification notes. A clean build converts normalized inputs
without Blender, network access or ignored cache dependencies.

### Technical inspection artifacts

Every accepted kit/model should produce:

- neutral turntable at LOD0/1/2 with wireframe and normal visualization;
- orthographic dimensions and pivot/socket overlay;
- UV occupancy/padding and texture-channel contact sheet;
- material-part and draw-call list;
- triangle, unique-vertex, expanded-vertex and compressed-byte report;
- collision/query overlay and player-scale reference;
- fixed in-house daylight/night shots at nearest, typical and LOD-transition views;
- deterministic rebuild hashes from two clean conversions.

An asset can be very dense and still pass when its silhouette/detail contribution is
visible, its parts and bytes are controlled, and PVS/LOD keep the working set within
the ratified hardware envelope. A cheap asset fails when it wastes draws, material
switches, expanded vertices or memory despite a low headline triangle count.

### Runtime LOD levels

- `LOD0`: player-near thresholds, current room and near exterior band; full trim,
  bevels and silhouette pieces.
- `LOD1`: adjacent room or 2–8 m exterior band; retain major profiles, merge small
  fasteners, reduce curved segments and use material detail for shallow carving.
- `LOD2`: opposite facade and neighbor context; retain aperture depth, roofline and
  chimney silhouettes, collapse trim and atlas materials.
- `LOD3`: distant roof/tree silhouettes only; no interior backs, small props or
  unique roughness maps.
- Batch only pieces sharing visibility lifetime, material and light behavior. Do
  not merge a door/shutter/stateful item into a static wall batch.
- Repeated trim and balusters should instance where the renderer path supports it;
  otherwise normalize into deterministic combined meshes per room/cell.
- Every room and exterior cell reports placements, expanded instances, triangles,
  materials, textures and live handles at each fixed camera before dressing grows.

## IDs and storage

Use lowercase kebab-case stable IDs. Suggested prefixes are `kit-`, `room-`,
`ext-`, `threshold-`, `mat-`, `decal-` and `placement-`. Separate the logical asset
from placement and material variant, for example:

```text
kit-skirting-modest-1m
mat-wallpaper-damask-faded
ext-front-downpipe-a
placement-living-bookcase-west-01
threshold-living-north-west
```

Store reusable kit definitions under `assets/house/kits/`, room bases and dressing
under `assets/house/rooms/<room-id>/`, exterior cells under
`assets/house/exterior/<cell-id>/`, and fixed cameras/PVS facts under
`assets/house/verification/`. Source models and textures do not enter those paths
until catalogue inspection, hash, licence and normalization are complete.

## Production sequence

1. Freeze measured references: export room/portal/window/stair facts from the
   canonical Dart source and create fixed daylight cameras.
2. Greybox the two-storey external mass, cellar cut, roof and stair. Prove every
   route and aperture before trim.
3. Build the opening and trim kits; place them through anchors, not hand-copied
   transforms.
4. Finish front/rear envelope, roof and drainage, then cellar/service construction.
5. Compose one room at a time with proxy furniture: focal anchor first, routes
   second, furniture third, micro-dressing last.
6. Replace proxies with accepted normalized assets and bind material variants.
7. Add causal weathering, decals and exterior context only after clean daylight
   silhouettes read at 384x216.
8. Generate PVS/LOD, collision, aperture and resource reports; run fixed-camera
   contact sheets before accepting any room or exterior cell.

### Stage deliverables

| Stage | Deliverable | Exit signal |
| --- | --- | --- |
| A — measured shell | Two-storey exterior block, cellar, partitions, all canonical apertures and stair proxy | Exact room/portal/window checks and bidirectional route sweep pass. |
| B — architecture kit | Openings, trim, fireplace, stair and surface modules | No raw ends, z-fighting or unresolved pivots in daylight contact sheet. |
| C — envelope | Front/rear/side facade, roof, stacks, drainage, foundations and thresholds | Every exterior fixed camera has layered depth and every drain has a destination. |
| D — room proxies | Eight focal compositions with route-safe proxy furniture | Focal/readability and interaction-clearance review passes at 384×216. |
| E — accepted assets | Normalized models/materials replace proxies | Every placement resolves to accepted hash/licence/provenance and correct bounds. |
| F — dressing | Surface wear, textiles, art, props, service clutter and context | Density bands met without repetition, route loss or story competition. |
| G — proof | PVS/LOD/collision/resource reports and fixed-camera contact sheets | All acceptance checks fingerprint the same build. |

## Acceptance checks

- Eight rooms and nine portals resolve exactly; no decorative mesh becomes a new
  room, door, window or route.
- Exterior count is eleven windows, nine visible from inside; opposite facade is
  ten windows until the isolated Day-20 variant makes eleven.
- A 0.3 m-radius player capsule can traverse every required route in both
  directions and reach every story interaction.
- Trim has no raw ends, openings have real wall thickness/reveals, and exterior
  drainage connects roof to ground.
- Each major room has one readable focal composition, 5–12 furniture-scale pieces,
  15–35 small dressing placements and intentional negative space.
- Clean daylight frames read at 384x216 before atmosphere/post effects are judged.
- Current plus adjacent/PVS cells stay within ratified draw, triangle, texture and
  live-resource budgets; visual density never relies on rendering the whole house.
