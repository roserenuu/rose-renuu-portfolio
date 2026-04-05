# Page Topology — melaniereneeugc.com

## Site Architecture
- **Builder:** Canva website builder (custom scroll container `.ZRRuDw`, overflow-y: scroll)
- **Total page height:** 7890px inside scroll container
- **Scroll:** Custom container — NOT window scroll. Must implement `overflow-y: scroll` on main wrapper
- **Fonts:** Canva proprietary self-hosted woff2 fonts (downloaded to `public/fonts/`)
  - `font-display.woff2` → display/serif-ish large heading font (YACgEcnJpjs_0) — "Meet Melanie", "Based in LA", "Photography"
  - `font-sans-bold.woff2` → bold sans font (YAFdJs2qTWQ_0) — "UGC CREATOR", bullet points, labels
  - `font-alt.woff2` → alternate font (YAEnTI0o408_0)
- **Interaction model:** Static scroll page — no tabs, no scroll-driven animations detected. Elements are statically positioned within sections.

## Color Palette
| Token | Value | Used in |
|-------|-------|---------|
| `--bg-sage` | `#ecede8` (rgb 236,237,232) | Hero, IG Stats, Contact |
| `--bg-gray` | `#e9e9e9` (rgb 233,233,233) | Brands section |
| `--bg-tan` | `#ddc7ab` (rgb 221,199,171) | Paid Ad Usage |
| `--bg-sand` | `#c8bbaa` (rgb 200,187,170) | Organic Examples (2 sections) |
| `--bg-cream` | `#f8faf0` (rgb 248,250,240) | Testimonials, Services, Photography |
| `--color-olive` | `#704608` (rgb 112,70,8) | Primary headings (hero, photography) |
| `--color-olive-mid` | `#60590c` (rgb 96,89,12) | Secondary text (contact, location) |
| `--color-charcoal` | `#383035` (rgb 56,48,53) | Bullet point body text |
| `--color-cream-text` | `#fffaf1` (rgb 255,250,241) | Text on tan/sand sections |
| `--color-black` | `#000000` | Brands heading, Testimonials heading |
| `--color-gold` | `#f5b100` | Star ratings |
| `--color-orange` | `#e8620a` | Top border on Services section |

## Section Map (top → bottom)

### S0: Hero — `#PBJrwqp00PLQrq6d`
- **Position:** 0–882px
- **BG:** `#ecede8` (sage)
- **Layout:** Two-column — left: portrait photo + location + contact + social icons | right: heading + subtitle + bullet list + stats/metrics
- **Interaction:** Static

### S1: Brands — `#PB5M8NgzTNnkCSC2`
- **Position:** 881–1626px
- **BG:** `#e9e9e9` (gray)
- **Layout:** Full-width heading centered, 3-row grid of circular brand logos (18+ logos)
- **Interaction:** Static

### S2: IG Analytics — `#PBzkgqv5Xvfz39Y0`
- **Position:** 1625–2771px
- **BG:** `#ecede8` (sage)
- **Layout:** Two-column — left: handle + stat boxes | right: large heading "IG analytics & stats" + video grid
- **Interaction:** Static

### S3: Paid Ad Usage — `#PBvT0FzjltTTCd8Z`
- **Position:** 2770–3472px
- **BG:** `#ddc7ab` (tan)
- **Layout:** Large heading top-left, 4-column video thumbnail grid with labels below each
- **Interaction:** Static (video thumbnails are JPG images with play icon overlay)

### S4: Organic Row 1 — `#PBm6cB0YJb7X6kNT`
- **Position:** 3471–4173px
- **BG:** `#c8bbaa` (sand)
- **Layout:** Same 4-column video thumbnail grid, no section heading (continuation)
- **Interaction:** Static

### S5: Organic Examples — `#PB771vQhSPxCC55X`
- **Position:** 4172–4964px
- **BG:** `#c8bbaa` (sand)
- **Layout:** "Organic Examples" heading top-left, 4-column video thumbnail grid
- **Interaction:** Static

### S6: Client Testimonials — `#PB8T5YK58qhSPmG5`
- **Position:** 4963–5589px
- **BG:** `#f8faf0` (cream)
- **Layout:** Centered large heading, 2x2 grid of review cards with stars, quote, reviewer name + logo
- **Interaction:** Static

### S7: Services and Packages — `#PBHS9Kns4VRbY5qr`
- **Position:** 5588–6356px
- **BG:** `#f8faf0` (cream)
- **Top border:** 3px solid `#e8620a` (orange)
- **Layout:** Centered heading + subtitle, 3-column list (UGC services | Add-ons | Package Bundles)
- **Interaction:** Static

### S8: Photography — `#PB38gj24nmN3JzVd`
- **Position:** 6355–7123px
- **BG:** `#f8faf0` (cream)
- **Layout:** Left side: large "Photography" heading (olive) + subtitle, right side: collage of overlapping photos
- **Interaction:** Static

### S9: Contact/CTA — `#PBrCNn673XPchfTr`
- **Position:** 7122–7890px
- **BG:** `#ecede8` (sage)
- **Layout:** Left: arched portrait photo | Right: bold heading + email + social icons (X, Instagram, TikTok)
- **Interaction:** Static
