# IGStatsSection Specification

## Overview
- **Target file:** `src/components/IGStatsSection.tsx`
- **BG color:** `#ecede8` (sage)
- **Height:** ~1146px
- **Interaction model:** Static
- **Layout:** Two areas — upper area has left text + right heading; lower area has screenshot images of Instagram stats

## DOM Structure
```
section (bg #ecede8)
  ├── Upper area (two-column)
  │   ├── Left: "@melanierrenee [23K+ community}" + stat boxes
  │   └── Right: "IG analytics & stats" (large heading)
  ├── Top video grid (4 Instagram reel thumbnails)
  └── Lower area
      ├── Left: stat text + analytics screenshots
      └── Right: 2 more video thumbnails
```

## Computed Styles

### Section
- backgroundColor: #ecede8
- padding: ~60px 80px

### @melanierrenee handle
- font: MelanieDisplay or similar
- fontSize: ~24px
- color: #60590c (olive-mid)
- "@melanierrenee" is a link (underlined), "[23K+ community}" is normal text

### "IG analytics & stats" heading
- font: MelanieDisplay
- fontSize: ~96px, fontWeight: 400
- color: #704608 (olive)
- Positioned right side, top of section
- textAlign: right

### Top video grid
- 4 video thumbnail images in a row
- Each ~270px wide
- Images are portrait orientation (roughly 9:16 ratio)
- View counts overlaid on images (these are baked into the image files)

### "grew community from 100 → 23K within 150 days"
- font: MelanieSans
- fontSize: ~24px, color: #383035

### Stat box (dark background)
- backgroundColor: #000000 or very dark
- padding: ~16px 24px
- borderRadius: ~8px
- Contains: heart icon + "36K", speech-bubble icon + "389", send icon + "2.6K", refresh icon + "480", bookmark icon + "11K"
- Two stat rows shown

### "Reels interactions: 7,303" table
- White/light background box
- "Reels interactions" | "7,303"
- "Likes" | "3,494"
- "Comments" | "142"
- fontSize: ~18px

## Assets
### Top row video thumbnails
- `/images/4888fef0562b99667435aa50e491a8df.jpg` — "Day 1: $0" (157K views)
- `/images/62e900d323dbca691212d24149b486a7.jpg` — "My museum of failures" (2.1M views)
- `/images/184342807e9129ec29a7ebb84b37b05e.png` — coffee/drink video (39.8K views)
- `/images/e06529e1f2c0961f3bea232cd30742d9.png` — "day 1 to day 71" (18.8K views)

### Stat screenshots
- `/images/c5636acdc74fefbd9f60c21af842a335.png` — dark stat box (36K, 389, 2.6K, 480, 11K)
- `/images/e2c174202b704a6e78eaa21276f37f59.png` — dark stat box row 2 (586, 69, 50, 0, 193)
- `/images/78decf9fe65502f24f30020d60c1939f.png` — Reels interactions table
- `/images/3451f24fb0de76ad186544cae86403cb.png` — additional analytics
- `/images/029e44ced7e4f3c01b464f271544e078.png` — more analytics

### Lower right thumbnails
- Images of Melanie in different settings (75.1K views, 60.9K views)
- These appear to be additional IG content screenshots

## Text Content (verbatim)
- "@melanierrenee [23K+ community}"
- "IG analytics & stats"
- "grew community from 100 → 23K within 150 days"

## Responsive
- Desktop: Two-column layout with stacked images
- Mobile: Single column, everything stacked
