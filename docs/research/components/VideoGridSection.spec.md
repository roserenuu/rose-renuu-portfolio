# VideoGridSection Specification (Paid Ad Usage + Organic Examples)

## Overview
- **Target files:**
  - `src/components/PaidAdSection.tsx` (section 3)
  - `src/components/OrganicRow1Section.tsx` (section 4)
  - `src/components/OrganicExamplesSection.tsx` (section 5)
- **Interaction model:** Static (thumbnails are images with play button overlay, NOT real videos)

## Section 3: Paid Ad Usage
- **BG color:** `#ddc7ab` (warm tan)
- **Height:** ~702px

### Layout
```
section (bg #ddc7ab, padding ~60px 80px)
  ├── "Paid Ad Usage" heading (top-left)
  └── 4-column video grid
      └── Each item: thumbnail image + play icon overlay + label below
```

### "Paid Ad Usage" heading
- font: MelanieDisplay
- fontSize: ~64px, fontWeight: 700
- color: #fffaf1 (cream white)
- Positioned top-left

### Video grid
- display: grid, gridTemplateColumns: repeat(4, 1fr)
- gap: ~16px

### Each video card
- position: relative
- Image: portrait aspect ratio (~3:5 or 9:16)
- Play button overlay: centered dark circle (~60px), white triangle icon
  - backgroundColor: rgba(0, 0, 0, 0.6)
  - borderRadius: 50%
  - width/height: ~60px
  - position: absolute, top: 50%, left: 50%, transform: translate(-50%, -50%)
- Label below image: two lines
  - Line 1: style label (e.g., "Strong hook") — fontSize: 24px, fontWeight: 400, color: #fffaf1
  - Line 2: category (e.g., "Digital media") — fontSize: 24px, fontWeight: 700, color: #fffaf1
  - font: MelanieSans

### Paid Ad cards (4 items):
1. image: `/videos/1c2f54d64a1e1009823a8f0da0cd7883.jpg`, labels: "Strong hook" / "Digital media"
2. image: `/videos/2e5e6d7243c87c1ff667604b07773105.jpg`, labels: "Talking head" / "SaaS"
3. image: `/videos/d90b77abab2c70be6788b8fc359900e6.jpg`, labels: "Product demo" / "SaaS"
4. image: `/videos/7b93774a1f25897faada9c8cf73cf61e.jpg`, labels: "Competitor Comparison" / "Tech"

---

## Section 4: Organic Row 1 (no heading)
- **BG color:** `#c8bbaa` (darker sand)
- **Height:** ~702px

### Layout
Same as above but NO heading, just 4 video cards centered/full-width.

### Organic Row 1 cards (4 items):
1. image: `/videos/29e7f6bcdbf1a61dac8473b05cb05745.jpg`, labels: "Walk and talk" / "SaaS"
2. image: `/videos/7e0952da2e2ae9e0d370296248fb82bf.jpg`, labels: "7 day before/after" / "Skincare"
3. image: `/videos/a942c6d5ab2d36aef6d8ef9549272dcf.jpg`, labels: "Before/after" / "Home"
4. image: `/videos/a417fca9ab285806ae28377c14c35ffc.jpg`, labels: "Testimonial" / "Money app"

---

## Section 5: Organic Examples
- **BG color:** `#c8bbaa` (darker sand)
- **Height:** ~792px

### Layout
```
section (bg #c8bbaa, padding ~60px 80px)
  ├── "Organic Examples" heading (top-left)
  └── 4-column video grid (same as above)
```

### "Organic Examples" heading
- font: MelanieDisplay
- fontSize: ~64px, fontWeight: 700 (or 400)
- color: #fffaf1 (cream white)

### Organic Examples cards (4 items):
1. image: `/videos/797f719e2a225d100f7ee0f2d7477d34.jpg`, labels: "Demo" / "Naturelo"
2. image: `/videos/9f53bf6edbf0714a42e1050e1d2420aa.jpg`, labels: "Greenscreen" / "Skincare"
3. image: `/videos/3f437b48b104fe8ca23224861ade0dfa.jpg`, labels: "Without vs. With" / "Productivity"
4. image: `/videos/313a107d4cfb4a63304e7bfc8543dbc9.jpg`, labels: "Reply to comment" / "SaaS"

## Responsive
- Desktop: 4 columns
- Mobile: 2 columns
