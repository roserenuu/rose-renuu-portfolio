# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **BG color:** `#ecede8` (sage green-white)
- **Height:** ~882px
- **Interaction model:** Static
- **Layout:** Two-column, roughly 45% left / 55% right. No header/nav.

## DOM Structure
```
section (bg #ecede8, full-width)
  ├── Left column
  │   ├── Portrait photo (square, ~430px)
  │   ├── "Based in Los Angeles, CA"
  │   ├── "Contact: melanierrenee@gmail.com"
  │   └── Social icons row (TikTok, Instagram, X)
  └── Right column
      ├── "UGC CREATOR" (label)
      ├── "Meet Melanie" (hero heading)
      ├── Bullet list (5 items)
      ├── Body paragraph
      └── TikTok stats screenshots (images)
```

## Computed Styles

### Section
- backgroundColor: #ecede8
- display: block (use flex internally)
- padding: ~60px 80px
- gap between columns: ~60px

### Left column
- width: ~45%
- display: flex, flexDirection: column, alignItems: center
- gap: ~20px

### Portrait photo
- width: ~430px, height: ~430px
- borderRadius: 0px (square, not rounded)
- objectFit: cover

### "Based in Los Angeles, CA"
- font: MelanieDisplay (font-display.woff2)
- fontSize: 24px, fontWeight: 400
- color: #60590c (olive-mid)

### "Contact:" + "melanierrenee@gmail.com"
- font: MelanieDisplay
- fontSize: 27.4384px (~27px), fontWeight: 400
- color: #60590c
- "melanierrenee@gmail.com" is a link (underlined)
- Display inline: "Contact: melanierrenee@gmail.com"

### Social icons (TikTok, Instagram, X)
- Row of 3 circular/rounded-square icons
- Approximate size: ~80x80px each
- TikTok: dark green background (#00c853 or dark), with TikTok logo
- Instagram: gradient/dark background, Instagram logo
- X (Twitter): dark/black background, X logo
- From screenshots: large rounded square buttons, approximately 80px
- These are actual image files from the site: use the downloaded images
  - TikTok icon: inline SVG or image
  - Instagram icon: inline SVG or image
  - X icon: inline SVG or image
- Use actual href links: TikTok profile, Instagram @melanierrenee, X

### Right column
- width: ~55%
- display: flex, flexDirection: column
- paddingTop: ~80px
- gap: ~16px

### "UGC CREATOR" label
- font: MelanieSans (font-sans-bold.woff2)
- fontSize: 32px, fontWeight: 700
- color: #704608 (olive)
- textTransform: none (already uppercase in content)

### "Meet Melanie" heading
- font: MelanieDisplay (font-display.woff2)
- fontSize: 86.67px, fontWeight: 400
- color: #704608 (olive)
- letterSpacing: -3.47px
- lineHeight: ~86px
- This is the dominant visual element — must be very large

### Bullet list
- font: MelanieSans
- fontSize: 32px, fontWeight: 400
- color: #383035 (charcoal)
- List items (bullet points, use standard ul/li):
  - Gen Z creator (26 years old)
  - Avid fitness enthusiast
  - Coffee lover ☕
  - Mental health advocate
  - Speaks English and basic Mandarin

### Body paragraph
- font: MelanieSans
- fontSize: ~24px, fontWeight: 400
- color: #383035
- textAlign: center
- Content: "You're not paying for videos alone, you're paying for a **strategic creative partner** focused on **performance and results.**"
- Bold words: "strategic creative partner" and "performance and results."

### TikTok stats images
- These are screenshot images of TikTok/social media metrics
- Use the downloaded images as `<img>` tags:
  - `afa39608c9a30684a99dad12b8c85622.jpg` — TikTok stats screenshot (31.7K likes, 340, 697)
  - `ec74f22aa3426b0487e0b8ea575474aa.png` — TikTok stats row 2 (22.5K likes, 180, 1852)
  - `76c14698ca1ffb3c64ec673af48f31ab.png` — Views: 236,382
  - `1e96a1e0db2731ff7ccec03d4681b678.png` — "Professional dashboard" screenshot
- Display these stacked vertically, full width of right column

## Assets
- Portrait photo: `/images/2875727fbfa1beae3add6aaeeeb2c2b5.png`
- TikTok stats 1: `/images/afa39608c9a30684a99dad12b8c85622.jpg`
- TikTok stats 2: `/images/ec74f22aa3426b0487e0b8ea575474aa.png`
- Views stat: `/images/76c14698ca1ffb3c64ec673af48f31ab.png`
- Dashboard: `/images/1e96a1e0db2731ff7ccec03d4681b678.png`

## Text Content (verbatim)
- "UGC CREATOR"
- "Meet Melanie"
- "Based in Los Angeles, CA"
- "Contact: melanierrenee@gmail.com"
- Bullets: "Gen Z creator (26 years old)", "Avid fitness enthusiast", "Coffee lover ☕", "Mental health advocate", "Speaks English and basic Mandarin"
- "You're not paying for videos alone, you're paying for a strategic creative partner focused on performance and results."

## Responsive
- Desktop (1440px): Two-column flex row
- Mobile (390px): Stack to single column, photo at top, text below
