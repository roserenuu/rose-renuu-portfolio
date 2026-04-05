# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **BG color:** `#ecede8` (sage)
- **Height:** ~768px
- **Interaction model:** Static
- **Layout:** Two-column — left: arched portrait photo | right: heading + email + social icons

## DOM Structure
```
section (bg #ecede8)
  ├── Left column (~45%)
  │   └── Arched portrait photo (arch/arch-top shape)
  └── Right column (~55%)
      ├── "Let's kick off a great partnership!" heading
      ├── "melanierrenee@gmail.com" email link
      └── Social icons row (X, Instagram, TikTok)
```

## Computed Styles

### Section
- backgroundColor: #ecede8
- padding: ~60px 80px
- display: flex, alignItems: center, gap: ~60px

### Arched photo
- The photo has an arch shape at top (half-circle arch top + rectangle bottom)
- This is achieved with borderRadius: "50% 50% 0 0 / 100% 100% 0 0" or a clip-path
- Photo: woman sitting, smiling, bookcase background
- Height: ~550px, width: ~400px
- overflow: hidden on container with borderRadius applied

### "Let's kick off a great partnership!" heading
- font: MelanieDisplay
- fontSize: ~72px, fontWeight: 400 (but appears bold — the display font has thick strokes)
- color: #704608 (olive/brown)
- lineHeight: 1.1
- marginBottom: ~40px

### Email link
- "melanierrenee@gmail.com"
- font: MelanieSans
- fontSize: ~32px, fontWeight: 700
- color: #704608
- textDecoration: underline
- display as href="mailto:melanierrenee@gmail.com"

### Social icons row
- display: flex, gap: ~16px
- 3 icons: X (Twitter), Instagram, TikTok
- Each icon: ~80px × 80px
- Background color: #704608 (olive/dark gold) — the icons in the screenshot appear with olive/dark backgrounds
- borderRadius: ~16px (rounded square, not circle)
- Contains white SVG icon

## Social Icon Details (from screenshot)
- X icon: olive/dark background, white X logo
- Instagram icon: olive/dark background, white Instagram circle logo
- TikTok icon: olive/dark background, white TikTok logo

Use simple SVG icons (X, Instagram, TikTok) in white on olive rounded-square buttons.

## Assets
- Portrait photo: The contact section uses a DIFFERENT photo than the hero
  - This photo shows woman sitting in front of bookshelves, smiling, wearing blue cardigan
  - This appears to be one of the photography section images repurposed, or a separate file
  - Look at the blob images in section 9 — if not found, use: `/images/c5fb95f045affde92bfe657ceb13ea71.jpg`

## Text Content (verbatim)
- "Let's kick off a great partnership!"
- "melanierrenee@gmail.com"

## Responsive
- Desktop: Two-column
- Mobile: Single column, photo at top (arched), then text below
