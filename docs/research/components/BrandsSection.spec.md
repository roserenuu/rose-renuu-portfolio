# BrandsSection Specification

## Overview
- **Target file:** `src/components/BrandsSection.tsx`
- **BG color:** `#e9e9e9` (light gray)
- **Height:** ~745px
- **Interaction model:** Static
- **Layout:** Centered heading, then 3-row grid of circular brand logo images

## DOM Structure
```
section (bg #e9e9e9)
  ├── Heading: "Trusted by 40+ brands"
  └── Logo grid (3 rows × 6 cols = 18 logos)
      └── Each logo: circular image, ~160px diameter
```

## Computed Styles

### Section
- backgroundColor: #e9e9e9
- padding: ~60px 80px

### Heading
- font: MelanieDisplay
- fontSize: ~72px, fontWeight: 400
- color: #000000 (black)
- textAlign: center
- marginBottom: ~40px

### Logo grid
- display: flex, flexWrap: wrap or grid
- gap: ~20px
- justifyContent: center
- Each logo: ~160px × 160px, borderRadius: 50% (circular)
- Logos are actual images (PNG/JPG files), many have circular colored backgrounds

## Assets — Brand Logo Images
All brand images are in `/images/`:
- Row 1: Blanc Nature, Rezi, Todoist/Toggl (red), Loona (gray), Bend Skincare, Budgety
  - `6076283524f4985a4ca15a289073d4a5.png`
  - `732f171fa2e57dd3aa6243bb786a1993.jpg`
  - `6167db00c2a780812d3fdf7075b32f85.png`
  - `f85141762d733c66d95683e618198160.jpg`
  - `e0af249812fdf1921a8bccccb3229ec2.png`
  - `b28f7445a50c6e8dcb45d2c609f0440a.jpg`
- Row 2: Mosh/Movement app (black), Hanskin (pink), Hostinger (purple), Temu (orange), Perplexity (black), LXB (brown)
  - `92a531bb0470870e3cd564220a0ed08c.jpg`
  - `43e29b4b43e3c2eea153922b81e0c381.jpg`
  - `035cbc30f22164a9325b12ee611d404e.jpg`
  - `23fb167bffc1655fcc09a036e755769c.jpg`
  - `2967b5d4add4e1879dca85719555cd9d.png`
  - `b531b21bbfec5655621f315eb9e4a91c.jpg`
- Row 3: Pestie (green), Numbuzin (purple), OneNote/One (gray), Mug+analytics (blue), Anker (blue), Notion (black)
  - `0a2b00caa5988dd13b6313f7a16a34db.png`
  - `cad79d94d6c76422aada75ee043d99e8.jpg`
  - `7db2ac181b62c91add52cb8fc629f522.png`
  - `29c2f1be6bdc60ae61cc0ac549181040.jpg`
  - `6e0778bf085de0dcb2e8946eff249b34.jpg`
  - `fc9e8c2a48140accb94709af85035ff8.png`

## Text Content
- "Trusted by 40+ brands"

## Responsive
- Desktop: 6 columns, 3 rows
- Mobile: 3 columns, 6 rows or similar wrap
