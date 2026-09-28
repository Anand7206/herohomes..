# Hero Homes Lucknow — Asset Slot Swap Guide

Drop a file with the exact name above into this folder and commit. Nothing else needs to change. Wrong name = placeholder stays visible.

---

## Fixed Asset Slots Table

| Slot filename (in `/assets/`) | Format | Minimum Size | Usage / Placement |
|---|---|---|---|
| `logo-hero-homes.svg` | SVG (or PNG) | 260x84 px @1x | Header + Footer Developer Logo |
| `logo-lucknow-homes.svg` | SVG (or PNG) | 200x64 px @1x | Footer Channel Partner Co-Brand Logo |
| `hero-desktop.webp` | WebP | 1920x1080 px | Hero Background (Desktop ≥768px) |
| `hero-mobile.webp` | WebP | 800x1000 px | Hero Background (Mobile <768px) |
| `gallery-master-plan.webp` | WebP | 1600x900 px | Township Master Plan Layout |
| `gallery-entrance-gate.webp` | WebP | 1200x800 px | Grand Entrance Gate Visual |
| `gallery-green-parks.webp` | WebP | 1200x800 px | Landscaped Green Parks |
| `gallery-clubhouse.webp` | WebP | 1200x800 px | Luxury Clubhouse Elevation |
| `gallery-sports-zone.webp` | WebP | 1200x800 px | Sports & Recreation Zone |
| `gallery-villa-elevation.webp` | WebP | 1200x800 px | Villa & Plot Elevation Concept |
| `map-thumbnail.webp` | WebP | 1200x600 px | Click-to-Load Location Map Poster |
| `og-share.jpg` | **JPG only** | 1200x630 px | WhatsApp & Meta Social Share Preview |
| `favicon.svg` | SVG | Vector | Browser Tab Icon |
| `favicon.ico` | ICO | 32x32 px | Browser Legacy Favicon |
| `apple-touch-icon.png` | PNG | 180x180 px | iOS Home Screen Bookmark Icon |

---

## Strict Naming Rules
1. **Lowercase, hyphens only**: Use exact filenames in lowercase with hyphens. Never use spaces, uppercase letters, or special characters.
2. **Root-absolute reference**: All site assets resolve from `/assets/slot-name.ext`.
3. **`og-share.jpg` MUST be JPG**: WhatsApp and Facebook will not render WebP previews for social cards.
4. **Dimensions**: All replacement images will be cropped cleanly using `object-fit: cover` and fixed aspect ratios.
