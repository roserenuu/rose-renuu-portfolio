# PhotographySection Specification

## Overview
- **Target file:** `src/components/PhotographySection.tsx`
- **BG color:** `#f8faf0` (light cream)
- **Height:** ~768px
- **Interaction model:** Static
- **Layout:** Left side has heading text; right side has a collage of overlapping photos

## DOM Structure
```
section (bg #f8faf0)
  ├── Left area (~40% width)
  │   ├── "Photography" heading (large, olive)
  │   └── "lifestyle +\nproduct photography" subtitle
  └── Right area (~60% width)
      └── Photo collage (5-6 overlapping photos at various positions)
```

## Computed Styles

### Section
- backgroundColor: #f8faf0
- padding: ~60px 80px
- display: flex, alignItems: center

### "Photography" heading
- font: MelanieDisplay
- fontSize: ~100px (very large), fontWeight: 400
- color: #704608 (olive)
- lineHeight: 1

### Subtitle "lifestyle +\nproduct photography"
- font: MelanieSans (or similar)
- fontSize: ~28px, fontWeight: 400
- color: #383035
- textAlign: center (or left)

### Photo collage (right side)
- position: relative, height: ~600px
- Photos are absolutely positioned at different locations
- Photos overlap each other
- Some photos are full-size landscape, some portrait
- No consistent grid — it's a freeform collage

## Assets
All photos from Photography section:
- `/images/e94006ed224ad700c9afed969c58ceac.jpg` — city view from hotel window with laptop
- `/images/c5fb95f045affde92bfe657ceb13ea71.jpg` — woman holding phone showing app
- `/images/3485c7a6ec6b31ed6d7df70936cc1c78.jpg` — woman smiling holding coffee cup shirt
- `/images/100b362726a9e9e3e95471a277f8b5bb.jpg` — woman outdoor mountain gondola holding skincare
- `/images/782a5b87c7b122066517cefa823e22a9.jpg` — woman smiling holding water bottle/can
- `/images/cee1b316847c1d4e8a0c49075134521a.jpg` — woman outdoors with snack/drink

### Collage layout approximation (desktop 1440px):
- Large image bottom-left: ~320px × 450px
- Overlapping image center: ~340px × 450px
- Top-right large: ~360px × 300px
- Middle-right: ~230px × 280px
- Bottom-right: ~360px × 220px

Position them with `position: absolute` in a relative container, creating a natural overlap effect.

## Text Content
- "Photography"
- "lifestyle +"
- "product photography"

## Responsive
- Desktop: Two-column with collage
- Mobile: Single column, text then photos stacked (grid 2×3)
