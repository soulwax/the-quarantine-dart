# Poly Haven Assets Provenance & License Manifest

All assets in this directory were downloaded from [Poly Haven](https://polyhaven.com) and are licensed under **Creative Commons CC0 (Public Domain Dedication)**.
They can be freely used in any commercial or non-commercial game, modified, or bundled.

## License Terms
- **License**: Creative Commons CC0 1.0 Universal Public Domain Dedication
- **License URL**: https://creativecommons.org/publicdomain/zero/1.0/
- **Commercial Use**: Permitted without attribution (attribution provided below for preservation)

## Curated 80s–90s Asset Inventory

| Category | Asset Name | Poly Haven ID | Authors | Size (MB) | Format | URL |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `walls` | **Decrepit Wallpaper** | `decrepit_wallpaper` | Rob Tuytel (All) | 4.15 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [decrepit_wallpaper](https://polyhaven.com/a/decrepit_wallpaper) |
| `walls` | **Dark Paneled Wood** | `dark_paneled_wood` | Dimitrios Savva (All) | 4.56 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [dark_paneled_wood](https://polyhaven.com/a/dark_paneled_wood) |
| `walls` | **Damaged Plaster** | `damaged_plaster` | Amal Kumar (All) | 4.54 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [damaged_plaster](https://polyhaven.com/a/damaged_plaster) |
| `floors` | **Diagonal Parquet** | `diagonal_parquet` | Jenelle van Heerden (Processing), Sergej Majboroda (Photography) | 3.69 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [diagonal_parquet](https://polyhaven.com/a/diagonal_parquet) |
| `floors` | **Dirty Carpet** | `dirty_carpet` | Rohit Seervi (All) | 5.24 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [dirty_carpet](https://polyhaven.com/a/dirty_carpet) |
| `floors` | **Brown Floor Tiles** | `brown_floor_tiles` | Rob Tuytel (All) | 4.15 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [brown_floor_tiles](https://polyhaven.com/a/brown_floor_tiles) |
| `ceilings` | **Ceiling Interior** | `ceiling_interior` | Dimitrios Savva (All) | 4.72 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [ceiling_interior](https://polyhaven.com/a/ceiling_interior) |
| `props` | **Television 01** | `Television_01` | Gabriel Radić (All) | 0.51 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [Television_01](https://polyhaven.com/a/Television_01) |
| `props` | **Desk Lamp Arm 01** | `desk_lamp_arm_01` | Yann Kervran (Rigging), Kuutti Siitonen (Modeling & texturing) | 2.74 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [desk_lamp_arm_01](https://polyhaven.com/a/desk_lamp_arm_01) |
| `props` | **Alarm Clock 01** | `alarm_clock_01` | Yann Kervran (Rigging), James Ray Cock (Modeling & Texturing) | 1.58 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [alarm_clock_01](https://polyhaven.com/a/alarm_clock_01) |
| `props` | **Coffee Table 01** | `CoffeeTable_01` | Fernando Quinn (All) | 0.91 MB | glTF 2.0 + PBR (Diff/Nor/ARM) | [CoffeeTable_01](https://polyhaven.com/a/CoffeeTable_01) |

## Directory Structure

```text
assets-src/polyhaven/
├── PROVENANCE.md
├── walls/
│   ├── decrepit_wallpaper/     # Peeling vintage wallpaper (80s/90s domestic)
│   ├── dark_paneled_wood/      # Dark wood paneling / wainscoting (70s/80s domestic)
│   └── damaged_plaster/        # Distressed plaster wall (quarantine interior)
├── floors/
│   ├── diagonal_parquet/       # Classic hardwood parquet (80s/90s suburban living room)
│   ├── dirty_carpet/           # Stained domestic carpet (80s/90s bedroom/hallway)
│   └── brown_floor_tiles/      # Vintage ceramic tiles (80s/90s kitchen/bathroom)
├── ceilings/
│   └── ceiling_interior/       # Acoustic plaster & grid ceiling tiles (80s/90s domestic)
└── props/
    ├── Television_01/          # Cathode Ray Tube (CRT) woodgrain TV set (80s)
    ├── desk_lamp_arm_01/       # Classic anglepoise articulated desk lamp
    ├── alarm_clock_01/         # Bedside dual-bell retro alarm clock
    └── CoffeeTable_01/         # Classic domestic wooden coffee table
```

## Engine Integration Notes

- **Format**: Khronos glTF 2.0 (`.gltf` json + `.bin` buffer + separate `.jpg` textures).
- **PBR Maps**:
  - `diff`: sRGB Base Color (albedo)
  - `nor_gl`: Linear OpenGL Normal Map (Y+ tangent space)
  - `arm`: Packed linear texture (R = Ambient Occlusion, G = Roughness, B = Metallic)
- Can be baked directly into the Quarantine runtime atlas or rendered via WebGL glTF loader.

### Roof, Attic & Cellar Expansion Assets

| Category | Asset Name | Poly Haven ID | Authors | Size (MB) | Format | URL |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `roof` | **Roof Slates 02** | `roof_slates_02` | Rob Tuytel (All) | 3.77 MB | glTF 2.0 + PBR | [roof_slates_02](https://polyhaven.com/a/roof_slates_02) |
| `props` | **Wooden Ladder** | `wooden_ladder` | Miroslav Turura (All) | 2.47 MB | glTF 2.0 + PBR | [wooden_ladder](https://polyhaven.com/a/wooden_ladder) |
| `props` | **Wooden Crate 01** | `wooden_crate_01` | James Ray Cock (All) | 2.17 MB | glTF 2.0 + PBR | [wooden_crate_01](https://polyhaven.com/a/wooden_crate_01) |
| `props` | **Lantern 01** | `Lantern_01` | Rajil Jose Macatangay (All) | 1.35 MB | glTF 2.0 + PBR | [Lantern_01](https://polyhaven.com/a/Lantern_01) |
| `props` | **Wine Barrel 01** | `wine_barrel_01` | James Ray Cock (All) | 0.88 MB | glTF 2.0 + PBR | [wine_barrel_01](https://polyhaven.com/a/wine_barrel_01) |
