# ServicesSection Specification

## Overview
- **Target file:** `src/components/ServicesSection.tsx`
- **BG color:** `#f8faf0` (light cream)
- **Height:** ~768px
- **Interaction model:** Static
- **Top border:** 3px solid `#e8620a` (orange/terracotta — full-width border at top of section)

## DOM Structure
```
section (bg #f8faf0, borderTop: 3px solid #e8620a)
  ├── "Services and Packages" heading (centered)
  ├── "*contact for rates and influencer collaborations" (centered subtitle)
  └── 3-column layout
      ├── Column 1: "UGC video scripting, filming, and editing"
      ├── Column 2: "Add-ons"
      └── Column 3: "Package Bundles"
```

## Computed Styles

### Section
- backgroundColor: #f8faf0
- borderTop: 3px solid #e8620a
- padding: ~60px 80px

### "Services and Packages" heading
- font: MelanieDisplay
- fontSize: ~80px, fontWeight: 400
- color: #000000
- textAlign: center

### Subtitle
- "*contact for rates and influencer collaborations"
- font: MelanieSans
- fontSize: ~18px, fontWeight: 400
- color: #383035
- textAlign: center
- fontStyle: italic

### 3-column container
- display: grid, gridTemplateColumns: repeat(3, 1fr)
- gap: ~40px
- marginTop: ~40px
- alignItems: start

### Column heading
- fontSize: ~24px, fontWeight: 700, color: #000000
- marginBottom: ~16px

### List items
- fontSize: ~16-18px, color: #383035
- ul with bullet points (disc)
- Sub-items use circle bullet (open circle ◦)
- lineHeight: ~1.6

## Content (verbatim)

### Column 1: UGC video scripting, filming, and editing
- Concept and script
- UGC photos*
- Hook/CTA iterations*
- Product showcasing & unboxing
- Testimonials and reviews
- Demonstrations and tutorials
- Raw footage*
- Product-related "tips and tricks"
- Script-reads
- *requires additional fees

### Column 2: Add-ons
- Usage rights
  - paid ads
  - full rights
- Raw footage
- Hook, CTA, and restructured variations
- Aspect ratio resizing
- Done-for-you content
- Exclusivity
- Refilms
- UGC + product photography

### Column 3: Package Bundles
- **AD TESTER #1**
  - # concepts
  - # hooks
  - # CTAs
  - # total deliverables
- **AD TESTER #2**
  - # concepts
  - # hooks
  - # CTAs
  - # total deliverables
- *30 days paid ad usage rights included* (italic)

## Responsive
- Desktop: 3 columns
- Mobile: 1 column stacked
