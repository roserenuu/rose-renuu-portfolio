# Behaviors — melaniereneeugc.com

## Scroll Behavior
- **Scroll container:** `.ZRRuDw` div with `overflow-y: scroll`, NOT the window
- **Scroll style:** Native browser scroll (no Lenis, no Locomotive Scroll detected)
- **No scroll-snap** detected
- **No header** — there is no fixed/sticky navigation element

## Scroll-Triggered Animations
- **None detected.** Sections are statically rendered; no IntersectionObserver-based entrance animations observed during slow scroll.

## Click/Hover Interactions
- **Video thumbnails:** Have a circular play button overlay (dark semi-transparent circle with white triangle). NOT actual `<video>` elements — they are `<img>` JPG thumbnails with a play icon overlaid.
- **Social icons (hero):** TikTok, Instagram, X — circular icon buttons, likely link to profiles
- **Email links:** Styled as text with underline
- **Brand logos:** Appear to be non-interactive images
- **Review cards:** Static, no hover effects observed

## Responsive
- Desktop (1440px): All sections are wide. 4-column video grids. 2-column hero/contact.
- Tablet/Mobile: Not fully tested — likely stacks to single column. Section backgrounds remain the same color.

## Key UI Notes
- **Play icon on video thumbnails:** Dark circle (~60px diameter) with white play triangle. Positioned center of thumbnail.
- **Social icons in hero:** Rounded square buttons (TikTok green/dark, Instagram gradient-ish, X black) — approximately 80x80px
- **Star ratings:** Gold/yellow filled star SVGs, 5 stars per review
- **Brand logos section:** Circular logos arranged in a 3-row grid, ~160px diameter each
- **Orange top border on Services section** — 3px solid orange/terracotta line
