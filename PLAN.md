# Design-System Overhaul: quiet-minimal, oklch tokens, Panda recipes

> Temporary working plan — delete this file after implementation is complete.

## Context

Site feels visually harsh (esp. dark mode) and inconsistent: two accents (indigo `primary` vs teal `secondary` on Interests/About icons), ~18 ad-hoc font sizes, container widths 500–1200px, radii mixing literals and tokens, zero Panda recipes, fonts applied via className-concatenation hacks. Goal: "quiet minimal" direction (Mitchell Hashimoto / Thorsten Ball camp) — narrow reading column, mostly monochrome, one restrained accent, generous whitespace — built the idiomatic Panda way (oklch tokens, semantic layer, textStyles, config recipes) per Refactoring UI principles (docs at `~/priority-projects/design-information/`).

**User decisions (locked):**
- Single accent: indigo, oklch, easy to swap later (all accent steps share one hue number — user may adjust hue later in-session)
- Neutrals: one cool indigo-tinted ramp replacing warm sand + navy `ink` (light mode becomes cool near-white)
- Fonts: keep Raleway (body) + Merriweather (headings), systematized as tokens
- Trail Running: TWO photos (view all 5 HEICs, pick two, user can veto), "offset pair" layout — side-by-side portraits, second nudged down, stacks on mobile
- Writing card: screenshot of the blog landing page (https://www.comfortablefeelingdumb.com/ — same site as the Mountains web app) as a clickable image linking to the blog

**Future content note:** site will grow substantially — more projects with screenshots and long-form build stories on `/projects` and `/projects/[slug]`. The token/recipe/PageContainer architecture is the point of this overhaul: `contentWide` grid + card/tag recipes absorb more project cards with zero new CSS; `content` width + `prose`/heading textStyles serve long-form detail pages; establish `public/images/projects/<slug>/` as the convention for future project screenshots (the blog-screenshot pipeline below is the reusable pattern).

**Verified environment:** ImageMagick 6 `convert` reads HEIC (delegate confirmed); `cwebp` available as fallback encoder. Photos: 5× HEIC 3024×4032 in `~/Pictures/trail-pics/`.

## Phase 0 — Baseline

`pnpm prepare && pnpm lint && pnpm build`; view all routes light+dark for reference.

## Phase 1 — Tokens (`panda.config.ts`, `src/app/fonts.ts`, `src/app/layout.tsx`)

**Additive**: new tokens land alongside old `primary`/`secondary`/`muted` so every phase builds green; legacy deleted in Phase 5.

### Color ramps (raw tokens, oklch)

```ts
colors: {
  neutral: {  // cool, indigo-tinted; replaces warm sand + ink
    50:  { value: 'oklch(0.985 0.004 262)' },
    100: { value: 'oklch(0.965 0.006 262)' },
    200: { value: 'oklch(0.925 0.008 262)' },
    300: { value: 'oklch(0.87 0.010 262)' },
    400: { value: 'oklch(0.71 0.014 262)' },
    500: { value: 'oklch(0.56 0.016 262)' },
    600: { value: 'oklch(0.46 0.016 262)' },
    700: { value: 'oklch(0.38 0.016 262)' },
    800: { value: 'oklch(0.30 0.015 262)' },
    900: { value: 'oklch(0.24 0.014 262)' },
    950: { value: 'oklch(0.19 0.013 262)' },
  },
  accent: {   // indigo; hue 272 everywhere → later swap = change one number
    50:  { value: 'oklch(0.962 0.018 272)' },
    100: { value: 'oklch(0.93 0.034 272)' },
    200: { value: 'oklch(0.87 0.065 272)' },
    300: { value: 'oklch(0.785 0.115 272)' },
    400: { value: 'oklch(0.673 0.182 272)' },
    500: { value: 'oklch(0.585 0.233 272)' },
    600: { value: 'oklch(0.511 0.245 272)' },
    700: { value: 'oklch(0.457 0.222 272)' },
    800: { value: 'oklch(0.398 0.180 272)' },
    900: { value: 'oklch(0.359 0.140 272)' },
    950: { value: 'oklch(0.257 0.090 272)' },
  },
}
```

Anti-harshness lever: dark bg becomes neutral.950 (L 0.19) vs current #0B0F14 (L≈0.13) — lifted off near-black.

### Semantic tokens

```ts
semanticTokens: {
  colors: {
    bg:      { value: { base: '{colors.neutral.50}', _dark: '{colors.neutral.950}' } },
    surface: { value: { base: 'white', _dark: '{colors.neutral.900}' } },
    text: {
      DEFAULT: { value: { base: '{colors.neutral.900}', _dark: '{colors.neutral.200}' } },
      muted:   { value: { base: '{colors.neutral.600}', _dark: '{colors.neutral.400}' } },
    },
    border:  { value: { base: '{colors.neutral.200}', _dark: '{colors.neutral.800}' } },
    accent: {
      DEFAULT:  { value: { base: '{colors.accent.600}', _dark: '{colors.accent.300}' } },  // links, icons
      hover:    { value: { base: '{colors.accent.700}', _dark: '{colors.accent.200}' } },
      emphasis: { value: { base: '{colors.accent.600}', _dark: '{colors.accent.500}' } },  // solid button bg
      fg:       { value: 'white' },                                                        // text on emphasis
      subtle:   { value: { base: '{colors.accent.100}', _dark: '{colors.accent.950}' } },  // tag bg
    },
  },
  shadows: {
    hover:  { value: { base: '0 4px 16px oklch(0 0 0 / 0.08)', _dark: '0 4px 16px oklch(0 0 0 / 0.45)' } },
    lifted: { value: { base: '0 8px 20px oklch(0 0 0 / 0.12)', _dark: '0 8px 20px oklch(0 0 0 / 0.55)' } },
  },
  radii: {
    card:    { value: '{radii.xl}' },  // 12px cards
    control: { value: '{radii.lg}' },  // 8px buttons/panels/photos
    tag:     { value: '{radii.md}' },  // 6px pills (unify; drop [slug]'s full-radius pill)
  },
  sizes: {
    content:     { value: '44rem' },   // 704px prose pages
    contentWide: { value: '56rem' },   // 896px grids + nav
  },
}
```

Dark-mode softening baked in: text = neutral.200 not white-hot, borders = low-contrast hairlines, accent = accent.300 (much softer than current #818CF8).

### Spacing & fontSizes — keep Panda defaults, add nothing

Panda's default spacing (4px-base non-linear) and fontSizes (xs 12 / sm 14 / md 16 / lg 18 / xl 20 / 2xl 24 / 3xl 30 / 4xl 36 / 5xl 48…) are already the Refactoring UI scales. Ad-hoc rems snap onto them during migration (1.1rem→lg, 0.95rem→sm, 1.75rem→2xl…). Consistency comes from PageContainer, not new tokens.

### Fonts + textStyles

- `fonts.ts`: add `variable: '--font-raleway'` / `'--font-merriweather'` to both fonts.
- `layout.tsx`: `<html className={`${raleway.variable} ${merriweather.variable}`}>` (drop `raleway.className`).
- `panda.config.ts`:

```ts
tokens: { fonts: {
  body:    { value: 'var(--font-raleway), system-ui, sans-serif' },
  heading: { value: 'var(--font-merriweather), Georgia, serif' },
}},
globalCss: { html: { fontFamily: 'body' } },
textStyles: {
  display: { value: { fontFamily: 'heading', fontWeight: '700', fontSize: { base: '4xl', md: '5xl' }, lineHeight: '1.1', letterSpacing: '-0.02em' } },
  h1:      { value: { fontFamily: 'heading', fontWeight: '700', fontSize: { base: '3xl', md: '4xl' }, lineHeight: '1.2', letterSpacing: '-0.015em' } },
  h2:      { value: { fontFamily: 'heading', fontWeight: '700', fontSize: '2xl', lineHeight: '1.3', letterSpacing: '-0.01em' } },
  h3:      { value: { fontFamily: 'heading', fontWeight: '700', fontSize: 'xl', lineHeight: '1.4' } },
  subtitle:{ value: { fontFamily: 'heading', fontWeight: '400', fontSize: { base: 'xl', md: '2xl' }, lineHeight: '1.4' } },
  prose:   { value: { fontSize: 'lg', lineHeight: '1.75' } },
  body:    { value: { fontSize: 'md', lineHeight: '1.6' } },
  small:   { value: { fontSize: 'sm', lineHeight: '1.5' } },
  caption: { value: { fontSize: 'xs', lineHeight: '1.4', letterSpacing: '0.02em' } },
}
```

Kills the `${merriweather.className} ${css(...)}` concatenation in every heading; fixes Footer's broken `fontFamily: 'merriweather'`.

- **Delete custom `conditions: { dark: '.dark &' }`** — Panda's built-in `_dark` covers `.dark &` already.

**Verify:** `pnpm prepare && pnpm lint && pnpm build`; site looks unchanged; devtools shows `--font-raleway` on `<html>`, Raleway still renders.

## Phase 2 — Recipes + PageContainer

Config recipes in `panda.config.ts` `theme.extend.recipes` (cross-route primitives, 3+ call sites each; route one-offs stay plain `css()`):

- **button** — base: inline-flex, weight 500, radius `control`, transition; variants `visual: solid` (bg `accent.emphasis`, color `accent.fg`) / `outline` (1px `accent` border — down from loud 2px; hover fills with `accent.emphasis` so text stays legible in dark), `size: sm|md`.
- **card** — bg `surface`, 1px `border`, radius `card`, p `{base:'6', md:'8'}`; variant `interactive: true` → hover `borderColor: accent/40`, translateY(-4px), `boxShadow: hover`.
- **tag** — px 3 / py 1, fontSize xs, weight 500, color `accent`, bg `accent.subtle`, radius `tag`.
- **link** — color `accent`, underline w/ `textUnderlineOffset: 3px`, decoration `accent/40`, hover `accent.hover`.

Headings are **textStyles, not a recipe** (pure typography, no variants).

**New `src/design-system/PageContainer.tsx`** (every route uses it — qualifies for design-system; no barrel):
- props `width: 'content' | 'wide'` (maxWidth token), `hero?: boolean`
- `mx: auto`, `px: '6'` (up from 4 — mobile breathing room), pt hero `{base:'20', md:'28'}` else `{base:'12', md:'16'}`, pb `{base:'20', md:'24'}`

**Layout/space decisions:**
- Text pages (home, about, project detail, not-found): `content` (704px). Projects grid + interests: `wide` (896px).
- **Navigation maxWidth 1200px → `contentWide` (896px)** — nav aligned to reading column is the strongest quiet-minimal cue.
- Section gaps via parent flex-column `gap: '12'–'16'`, not per-child `mb`.

**Verify:** `pnpm prepare && pnpm lint && pnpm build` (recipes generate into `styled-system/recipes`).

## Phase 3 — Layout shell (`src/layout/*`, `not-found.tsx`, `src/app/icon.svg`)

Order: `Navigation.tsx` (896px, px 6, `border` token) → `BrandLink.tsx` (`fontFamily: 'heading'` replaces `merriweather.style.fontFamily`; keep letterSpacing) → `Footer.tsx` (fix broken fontFamily → `heading`; colors → `text.muted`) → `ThemeToggle`/`SkipToContent` (token sweep) → `not-found.tsx` (PageContainer, textStyles, button recipe) → `icon.svg` (hardcoded indigo hex → hex equivalent of accent.600; SVG favicon shouldn't rely on oklch parsing).

**Verify:** build + shell visual check all routes, both themes.

## Phase 4 — Per-route migration (one commit per route)

Per route: wrap in PageContainer; inline fontSizes/weights → textStyles; `primary`→`accent`; `secondary`→`accent` (icons) or `text.muted`; `muted`→`text.muted`; `muted/20` borders→`border`; radius literals→semantic radii; buttons/cards/tags/links→recipes; `color:'white'`→`accent.fg`.

1. **Home** — `HomeContent.tsx` (hero container), `HeroIntro.tsx`: h1→`display` (drops 4rem→48px md — quiet hero relies on whitespace not size), h2→`subtitle` + `text.muted`, drop `textAlign: 'justify'`, buttons→recipe.
2. **Projects** — `ProjectsContent.tsx` (wide, h1), `ProjectCard.tsx` (card interactive, h2→`h3`, tag recipe, rgba shadow→`hover` token), `[slug]/ProjectContent.tsx` (content width, tag radius unified, buttons/links→recipes).
3. **About** — `AboutContent/Intro/Skills/Technologies/SkillSection` (icons `secondary`→`accent`), `SkillBadge`.
4. **Interests** — `InterestsContent` (wide), `InterestCard` (card recipe, icon→`accent`, h2 textStyle), `Reading` (rgba shadow→`lifted`, `secondary`→`accent`), `TrailRunning`/`Writing` (link recipe; delete commented-out stats block in TrailRunning).

**Verify per route:** build + visual both themes. After all: `grep -rn "secondary\|rgba(\|merriweather.className" src` → only fonts.ts exports remain.

## Phase 5 — Delete legacy tokens

Remove from `panda.config.ts`: `ink`/`teal`/`amber` ramps + old hex `neutral` values; `primary`/`secondary`/`highlight`/top-level `muted` semantics. `pnpm prepare && pnpm build` green + grep for orphaned usages proves cleanup.

## Phase 6 — Images: trail photos + blog screenshot

### Trail photos (offset pair in TrailRunning.tsx)

1. Convert all 5 HEICs to small previews in scratchpad, view, pick two complementary; user can veto.
2. Pipeline (strip GPS/EXIF — phone photos):

```bash
mkdir -p public/images/trail
convert ~/Pictures/trail-pics/IMG_XXXX.HEIC -auto-orient -strip -resize 1200x1600 -quality 80 public/images/trail/trail-1.webp
# fallback if IM6 lacks webp write: convert → png → cwebp -q 80
```

One 1200×1600 source per photo; `next/image` generates the srcset.

3. Offset pair inline in `TrailRunning.tsx` (route-owned, single use), between intro and Mountains panel: 2-col grid (`base: 1fr`, `sm: repeat(2,1fr)`), maxWidth ~520px, gap 5; each `<Image width={600} height={800} sizes="(max-width:640px) 100vw, 250px">`, radius `control`, shadow `lifted`; second image `sm:{ mt:'10' }` (offset collapses on mobile stack). Optional `whileInView` fade matching InterestCard's motion vocabulary. Real alt text after viewing.

**Verify:** build, visual both themes + mobile viewport, `identify -verbose … | grep -i gps` shows nothing.

### Blog screenshot in Writing.tsx

1. Capture (deterministic, no repo deps):

```bash
npx playwright screenshot --viewport-size=1440,900 --wait-for-timeout=3000 \
  https://www.comfortablefeelingdumb.com/ <scratchpad>/blog.png
cwebp -q 80 <scratchpad>/blog.png -o public/images/writing/blog-screenshot.webp
```

(Fallback: Claude-in-Chrome tools or user-provided screenshot. Review the capture before committing — no cookie banners/blank render.)

2. `src/app/interests/Writing.tsx`: replace the "I write publicly on my blog here" `muted/10` panel with a clickable framed screenshot:
   - `<Link href="https://www.comfortablefeelingdumb.com/" target="_blank" rel="noopener noreferrer">` wrapping `<Image src="/images/writing/blog-screenshot.webp" width={1440} height={900} sizes="(max-width: 768px) 100vw, 600px">`
   - Frame: 1px `border`, radius `control`, `boxShadow: 'hover'`; hover: `borderColor: accent/40` + slight lift (match card-interactive vocabulary)
   - Short caption line beneath in `small` textStyle + `text.muted` (e.g. "comfortablefeelingdumb.com — where I write publicly") so the link target is explicit
   - Alt: "Landing page of my blog, Comfortable Feeling Dumb"

**Verify:** build, click-through opens blog in new tab, image crisp at mobile + desktop widths, both themes.

## Judgment calls baked in (veto any)

- Hero h1 shrinks 4rem→3rem/48px (md) via `display` textStyle
- Nav width 1200px→896px
- Hero `textAlign: justify` → left/ragged-right
- Outline buttons 2px→1px border
- Hero subtitle color: `text.muted` instead of accent (accent reserved for interactive elements)
- Tag pills unified to 6px radius (the `[slug]` full-radius pill goes away)

## Critical files

`panda.config.ts` · `src/app/fonts.ts` · `src/app/layout.tsx` · new `src/design-system/PageContainer.tsx` · `src/layout/Navigation.tsx`, `BrandLink.tsx`, `Footer.tsx` · all `*Content`/card components under `src/app/` · `src/app/interests/TrailRunning.tsx`, `Writing.tsx` · `src/app/icon.svg`

## Verification (every phase)

`pnpm prepare` after any panda.config.ts change → `pnpm lint && pnpm build` → dev server visual pass light + dark (+ mobile width for Phases 4/6). Delete this PLAN.md when all phases are done.
