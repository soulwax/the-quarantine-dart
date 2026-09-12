// Generated canonical house manifest data.
// Source: assets/house/house.json
// Authoritative topology for the 8 canonical rooms, 9 portals, and 1 stair.

/// Raw JSON representation of the canonical authored house manifest.
const String canonicalHouseJson = r'''{
  "houseId": "quarantine-house-main",
  "sourceRef": "lib/house/house.dart",
  "status": "canonical-v1",
  "presentationScope": "provisional-visible-place",
  "storyAuthority": "external-story-data",
  "modelScale": 2.25,
  "exteriorMesh": {"format":"QHMX","version":1,"path":"assets/house/exterior/main_shell.qhmx","materialsPath":"assets/house/exterior/materials.json","viewOnly":true,"wallThickness":0.63,"partitionThickness":0.27},
  "inventoryPath": "assets/house/inventory.json",
  "soundscapePath": "assets/house/soundscape.json",
  "surfaceMaterialsPath": "assets/house/materials.json",
  "residence": {"roomId":"living-room","spawn":[1.55,0,2.35],"restAnchor":"placement-living-sofa","returnPortalId":"hall-living"},
  "levels": [
    {"id":"cellar","kind":"below-grade","floorY":-2.0},
    {"id":"ground","kind":"ground","floorY":0.0},
    {"id":"first","kind":"first","floorY":2.8}
  ],
  "rooms": [
    {"id":"living-room","floor":"ground","origin":[0,0,0],"size":[4.5,2.6,4.0],"surface":{"wall":"wallpaper-stripes","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"living-north-west","facing":"north","offset":0.5,"sill":0.6,"width":1.2,"height":1.2},{"id":"living-north-east","facing":"north","offset":2.7,"sill":0.6,"width":1.2,"height":1.2}],"portalIds":["hall-living","kitchen-living"],"focalComposition":{"anchor":"fireplace-wireless","clearRoute":[[3.85,0.0,0.35],[4.5,0.0,1.8]],"furnitureScale":5,"microScale":20}},
    {"id":"hall","floor":"ground","origin":[4.5,0,0],"size":[2.5,2.6,7.0],"surface":{"wall":"wallpaper-damask","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"hall-fanlight","facing":"north","offset":0.85,"sill":2.15,"width":0.8,"height":0.35}],"portalIds":["front-door","hall-living","hall-kitchen","hall-cellar","hall-landing"],"focalComposition":{"anchor":"front-door-clock","clearRoute":[[5.75,0.0,0.2],[5.75,2.8,5.9]],"furnitureScale":6,"microScale":24}},
    {"id":"kitchen","floor":"ground","origin":[0,0,4.0],"size":[4.5,2.5,3.0],"surface":{"wall":"wallpaper-floral","floor":"floor-linoleum","ceiling":"ceiling-plaster"},"windows":[{"id":"kitchen-south","facing":"south","offset":1.5,"sill":0.7,"width":1.2,"height":1.1},{"id":"kitchen-west","facing":"west","offset":1.0,"sill":0.8,"width":0.9,"height":1.0}],"portalIds":["hall-kitchen","kitchen-living"],"focalComposition":{"anchor":"range-worktable","clearRoute":[[4.2,0.0,4.45],[3.4,0.0,6.5]],"furnitureScale":7,"microScale":28}},
    {"id":"cellar","floor":"cellar","origin":[1.0,-2.0,2.0],"size":[4.0,2.0,4.0],"surface":{"wall":"wallpaper-damp","floor":"floor-concrete","ceiling":"ceiling-pipes"},"windows":[],"portalIds":["hall-cellar"],"focalComposition":{"anchor":"coal-service-wall","clearRoute":[[4.2,-2.0,3.0],[2.0,-2.0,5.6]],"furnitureScale":4,"microScale":15}},
    {"id":"bedroom","floor":"first","origin":[0,2.8,0],"size":[4.5,2.4,4.0],"surface":{"wall":"wallpaper-faded","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"bedroom-north-west","facing":"north","offset":0.7,"sill":0.7,"width":1.1,"height":1.1},{"id":"bedroom-north-east","facing":"north","offset":2.7,"sill":0.7,"width":1.0,"height":1.1}],"portalIds":["landing-bedroom"],"focalComposition":{"anchor":"bed-journal-desk","clearRoute":[[4.2,2.8,0.3],[3.6,2.8,3.4]],"furnitureScale":6,"microScale":22}},
    {"id":"landing","floor":"first","origin":[4.5,2.8,0],"size":[2.5,2.4,3.0],"surface":{"wall":"wallpaper-damask","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[],"portalIds":["hall-landing","landing-bedroom","landing-bathroom","landing-spare"],"focalComposition":{"anchor":"stair-newel","clearRoute":[[5.7,2.8,0.3],[5.7,2.8,2.7]],"furnitureScale":3,"microScale":12}},
    {"id":"bathroom","floor":"first","origin":[4.5,2.8,3.0],"size":[2.5,2.4,2.5],"surface":{"wall":"wallpaper-tiles","floor":"floor-tiles","ceiling":"ceiling-plaster"},"windows":[{"id":"bathroom-east","facing":"east","offset":0.9,"sill":1.0,"width":0.7,"height":1.0,"frosted":true}],"portalIds":["landing-bathroom"],"focalComposition":{"anchor":"bath-cistern","clearRoute":[[4.8,2.8,3.2],[6.7,2.8,4.5]],"furnitureScale":4,"microScale":16}},
    {"id":"spare-room","floor":"first","origin":[0,2.8,4.0],"size":[4.5,2.1,3.0],"surface":{"wall":"wallpaper-peeling","floor":"floor-wood","ceiling":"ceiling-plaster"},"windows":[{"id":"spare-south","facing":"south","offset":1.8,"sill":0.7,"width":0.9,"height":0.9}],"portalIds":["landing-spare"],"focalComposition":{"anchor":"sheeted-furniture","clearRoute":[[4.1,2.8,4.3],[2.6,2.8,6.6]],"furnitureScale":5,"microScale":18}}
  ],
  "portals": [
    {"id":"front-door","a":"hall","b":"outside","facingA":"north","facingB":"south","offsetA":0.8,"offsetB":0.0,"width":0.9,"height":2.1,"doorKit":"kit-front-door-recessed","exterior":true},
    {"id":"hall-living","a":"hall","b":"living-room","facingA":"west","facingB":"east","offsetA":1.8,"offsetB":1.8,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},
    {"id":"hall-kitchen","a":"hall","b":"kitchen","facingA":"west","facingB":"east","offsetA":4.9,"offsetB":1.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},
    {"id":"kitchen-living","a":"kitchen","b":"living-room","facingA":"north","facingB":"south","offsetA":2.0,"offsetB":2.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},
    {"id":"hall-cellar","a":"hall","b":"cellar","facingA":"south","facingB":"east","offsetA":0.5,"offsetB":1.5,"width":0.9,"height":2.0,"doorKit":"kit-cellar-door-grille","open":false,"sticks":true},
    {"id":"hall-landing","a":"hall","b":"landing","facingA":"east","facingB":"east","offsetA":4.0,"offsetB":0.7,"width":1.2,"height":2.1,"stair":true},
    {"id":"landing-bedroom","a":"landing","b":"bedroom","facingA":"west","facingB":"east","offsetA":1.0,"offsetB":1.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},
    {"id":"landing-bathroom","a":"landing","b":"bathroom","facingA":"south","facingB":"north","offsetA":1.0,"offsetB":0.8,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"},
    {"id":"landing-spare","a":"landing","b":"spare-room","facingA":"south","facingB":"north","offsetA":0.1,"offsetB":2.0,"width":0.9,"height":2.1,"doorKit":"kit-internal-four-panel-door"}
  ],
  "stairs": [{"id":"hall-stairs","portalId":"hall-landing","landingHeights":[1.4,2.8,4.2],"min":[5.0,0,2.8],"max":[6.5,4.2,6.0],"lowerEye":[5.75,1.65,5.8],"upperEye":[5.75,4.45,2.2]}],
  "exteriorCells":["front","rear-service","side-boundary","roof-drainage","street","opposite-house","neighbor-roofs"]
}''';
