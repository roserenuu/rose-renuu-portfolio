# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **BG color:** `#f8faf0` (light cream)
- **Height:** ~626px
- **Interaction model:** Static

## DOM Structure
```
section (bg #f8faf0)
  ├── "Client Testimonials" heading (centered)
  └── 2×2 grid of review cards
      └── Each card: stars + review text + reviewer (avatar logo + name + company)
```

## Computed Styles

### Section
- backgroundColor: #f8faf0
- padding: ~60px 80px
- Has a horizontal divider line at top (from prev section)

### "Client Testimonials" heading
- font: MelanieDisplay (or similar heavy display)
- fontSize: 72px, fontWeight: 400
- color: #000000
- textAlign: center
- marginBottom: ~40px

### Review card
- backgroundColor: #ffffff (white)
- borderRadius: ~8px
- padding: ~24px 32px
- border: 1px solid rgba(0,0,0,0.08) or similar subtle border
- boxShadow: subtle or none

### Stars
- 5 gold/yellow stars: color #f5b100
- fontSize: ~24px, displayed as ★★★★★

### Review text
- font: MelanieSans or similar body
- fontSize: ~16-18px, fontWeight: 400
- color: #383035
- marginBottom: ~16px

### Reviewer row
- display: flex, alignItems: center, gap: 12px
- Avatar: circular logo image, ~40px
- Name: fontSize ~14px, fontWeight: 700, color: #383035
- Company: fontSize ~14px, fontWeight: 400, color: #383035

## Review Content (verbatim)

### Card 1 (top-left)
- Stars: ★★★★★
- Text: "Melanie was awesome to work with! The content created was amazing and super creative and engaging! Melanie responded to emails quickly and sent over content on time! Would love to work together again!"
- Reviewer: Bianca | Pestie
- Logo: `/images/1fbac946f340ba3ba1d87b3ac40bae53.jpg`

### Card 2 (top-right)
- Stars: ★★★★★
- Text: "We'd like to say a huge thank you to Melanie. Her UGC video was absolutely great and she was so easy to collaborate with. Melanie captured our brand perfectly and made the message feel natural, engaging, and authentic. It was such a pleasure working with her. We'll definitely keep her in mind for future campaigns."
- Reviewer: Moradeke | Budgety
- Logo: `/images/3ed0476240796281d1d6caa99cbbe91a.jpg`

### Card 3 (bottom-left)
- Stars: ★★★★★
- Text: "Wow Melanie! Thanks for the great pictures! Great work and we'd love to work with you again in the future!"
- Reviewer: Thrive | Thrive
- Logo: `/images/eaaa9eeeda2c6af7679e8dd24e191efa.jpg`

### Card 4 (bottom-right)
- Stars: ★★★★★
- Text: "Melanie went above and beyond on our projects. Completed in a very timely manner and her quality and performance were spot on. Would HIGHLY recommend."
- Reviewer: Ryan | Adver LLC
- Logo: `/images/24bc0a57d1d35f95ca101cd1df0c17cf.jpg`

## Responsive
- Desktop: 2×2 grid
- Mobile: 1 column, stacked cards
