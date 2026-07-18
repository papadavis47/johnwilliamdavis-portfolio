# AGENTS.md

Shared instructions for AI agents (Claude Code, amp, etc.) working in this repo.

## Project

Personal developer portfolio for John William Davis. Next.js App Router site, statically rendered, deployed on Vercel.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript 6**
- **PandaCSS** for styling (`styled-system/` is generated, gitignored, `outdir: styled-system`)
- **motion** (framer-motion successor) for animation · **lucide-react** icons · **next-themes** for dark mode
- **pnpm 11.5.0** (pinned via `packageManager`) · Node 22

## Commands

```bash
pnpm dev      # dev server
pnpm build    # production build (runs panda codegen via prepare + tsc)
pnpm lint     # eslint . (flat config)
pnpm test:e2e # Playwright smoke + axe suite (builds, serves on :3100)
```

## Testing

Playwright smoke suite in `e2e/` — no unit tests by design (no logic to unit-test; `tsc` + SSG prerender cover static correctness). `playwright.config.ts` builds and serves the prod app on **:3100** (never collides with dev on :3000). `e2e/smoke.spec.ts` covers routes, the projects.ts↔routes contract (imports `projects` directly), theme toggle persistence, and the mobile drawer. `e2e/a11y.spec.ts` runs axe (WCAG A/AA) on every page in both themes — keep it green; a contrast violation is a defect. Run optionally before pushing; there is no CI gate.

`pnpm prepare` runs `panda codegen` to regenerate `styled-system/`. Run it after changing `panda.config.ts`.

## Code organization — VERTICAL (by feature/route)

Organize by feature, not by type. Code that changes together lives together.

- `src/app/` — **routes only**. Each route folder owns its components + data, kept flat (no `_components/` subfolder until a folder gets busy). Home lives in the `app/(home)/` route group (still serves `/`).
- `src/layout/` — app-shell vertical: everything `layout.tsx` renders (Navigation, BrandLink, ThemeToggle, Footer, PageTransition, SkipToContent).
- `src/design-system/` — genuinely cross-route UI (e.g. `icons`). Promote code here **only on second use**, never preemptively.
- `src/providers/` — React context providers.

Rules:

- Single-consumer helpers live **beside** their consumer, not in a shared bucket.
- **No barrel files** (`index.ts` re-exports). Import directly. Sole exception: `src/providers/index.ts` (kept intentionally).

## Imports

- `@/*` → `src/*`
- `styled-system/*` → `styled-system/*` (depth-independent — always prefer over `../../styled-system`)

## Conventions & constraints

- **ESLint pinned to 9.x** (`9.39.4`). ESLint 10 breaks the Next 16 lint toolchain (`scopeManager.addGlobals`), so `pnpm outdated` will always flag eslint — expected. Don't run blanket `pnpm up --latest` (it bumps eslint to 10); update packages individually.
- Lint uses **flat config** (`eslint.config.mjs`); `next lint` was removed in Next 16.
- **lucide-react 1.x dropped brand icons** (GitHub/LinkedIn). Local SVG replacements live in `src/design-system/icons.tsx` — use those, not lucide, for brand marks.
- Commit messages: **single subject line** + `Co-Authored-By` trailer. No body.
- **Never use em dashes in prose.** Use commas, periods, colons, semicolons, or parentheses instead. This applies especially to **outward-facing website copy** (project descriptions, page text, alt text, metadata): no em dashes, ever. Reword or repunctuate to keep it grammatical.

### Design system

- **Colors are semantic tokens only.** Never reach for a raw ramp step (`accent.600`, `neutral.200`) in a component — use `bg`, `surface`, `text`, `text.muted`, `border`, `accent`, `accent.hover`, `accent.emphasis`, `accent.fg`, `accent.subtle`, `accent.subtleFg`. All ramps are oklch and driven by hue constants at the top of `panda.config.ts` (`LIGHT_HUE` · `DARK_HUE` · `ACCENT_HUE`) — re-hueing anything is one number.
- **One neutral ramp per theme, never shared**: `neutral` (light) and `neutralDark` (dark). No step serves both themes, so each ramp moves freely in L, C and H — edit a step and only its own theme changes. Keep each ramp monotonic in lightness. Dark `bg`/`surface`/`border` intentionally sit one step lighter than their names suggest (900/800/700); light `bg` is the `100` step, with `50` reserved for the lighter card `surface` above it, and light `border` is `neutral.300`.
- **The accent is rust (`ACCENT_HUE` 45), one ramp shared by both themes** — analogous to the warm light ground, complementary to the cool dark one. Its chroma sits deliberately *below* the gamut ceiling: at full chroma the dark-mode solid button reads safety-orange, not terracotta. Don't brighten it. (The neutrals split per theme; the accent does **not** — one accent hue is what keeps the theme toggle a lighting change rather than a different site.)
- **The neutral themes deliberately disagree on hue** — light is warm (`LIGHT_HUE` 65, warm paper), dark is cool (`DARK_HUE` 262, blue-charcoal). Do **not** "warm dark mode up to match light." It was tried at several chromas: chroma reads far stronger at low lightness, and every warm value that was visible at all turned the charcoal brown/taupe. For the same reason the light ramp tapers chroma toward its dark end — those steps are body *text*, and full chroma there reads brown. Warm hues below ~55 read pink at these lightnesses, not rust; rust needs a dark step, not a pale one.
- **Typography is `textStyle`, never inline `fontSize`/`fontWeight`/`fontFamily`.** `display` (hero) · `h1`/`h2`/`h3` · `subtitle` · `prose` (body `<p>`) · `body` · `small` · `caption` · `mono` (monospace facts/key-value text). Headings pull `fontFamily: heading` themselves — do not concatenate `fraunces.className`. Fonts are CSS vars (`--font-plex-sans`/`--font-plex-mono`/`--font-fraunces`) set on `<html>`; `globalCss` puts `fontFamily: body` on `html`. The `mono` token (IBM Plex Mono) is in use — the `tag` recipe renders in it and the home `TerminalCard` uses the `mono` textStyle — so the font loads. It stays `preload: false` (lazy `@font-face`, non-render-blocking); the comment in `src/app/fonts.ts` calling it wired-ahead-of-first-use is stale.
- **Recipes for repeated primitives**: `button` (`visual: solid|outline`, `size: sm|md`), `card` (`interactive: true`), `tag`, `link` — import from `styled-system/recipes`. Route one-offs stay plain `css()`. Combine a recipe with extra styles via `cx(card({...}), css({...}))`; the `utilities` layer wins over `recipes`, so `css()` overrides land.
- **The tag pill is a token pair — `accent.subtle` (fill) + `accent.subtleFg` (text) — and they move together.** In dark the fill must stay *lighter* than its backdrop: at `accent.950` it was darker than the card (L 0.25 vs 0.30) and invisible against the page (1.01:1), so it now sits at `800`. That fill is too light for the plain `accent` token as text (`accent.300` → 4.29:1, fails AA), which is why the pill carries its own fg at `accent.200`. Lower the fill and you must re-check the fg; axe in `e2e/a11y.spec.ts` is the gate.
- **`/kitchen-sink` (`src/app/kitchen-sink/page.tsx`) is the design-system catalog** — swatches for every semantic color, all `textStyle`s, and each recipe/radius/shadow, wired to the live Panda setup so a token or recipe edit shows up there in both themes (flip the toggle). Gated: `notFound()` when `process.env.VERCEL_ENV === 'production'`, so it renders in local dev and on preview deploys but 404s on production. When a primitive graduates to `design-system/` (on second use), add it here. Token-driven swatches use `token.var('…')` in inline `style` (theme-aware CSS var, sidesteps static extraction); each `textStyle` is a literal `css()` call in a lookup array for the same reason.
- **Every route wraps in `src/design-system/PageContainer.tsx`** — one 56rem frame for every page (`hero` only bumps top padding), so all `h1`s share a left edge with the nav brand. It owns `mx/px/py`, so routes should not set their own page gutters, and must not render a `<main>` (`layout.tsx` already does). Long-form text sets `maxWidth: 'content'` (44rem) on its own block to hold a readable measure; **never narrow the frame itself** — that is what knocked headings out of alignment before.
- Semantic `radii`: `card` (12px) · `control` (8px, buttons/panels/photos) · `tag` (6px). Semantic `shadows`: `hover`, `lifted`. No raw `rgba()`.
- Panda extracts styles **statically** — never build a `css()` object from a runtime conditional (`...(i === 1 ? {...} : {})`). Hoist each branch to its own `css()` and pick with `cx()`.
- **Never pair a directional border shorthand with `borderColor`** (`borderBottom: '1px solid'` + `borderColor: 'border'`). Panda emits `.bd-b_1px_solid` *after* `.bd-c_border`, so the shorthand resets that edge to `currentColor` — a near-white hairline in dark mode. Use longhands: `borderBottomWidth` / `borderBottomStyle` / `borderBottomColor`. The all-sides `border: '1px solid'` + `borderColor` pairing is fine.
- Overlay panels (the mobile drawer) get **elevation, not outlines** — `boxShadow: 'lifted'` over the scrim. A border on the drawer crosses the header's bottom hairline at its corner. Its top offset comes from `top: 'token(sizes.navHeight)'`, matching the header's `height: 'navHeight'`; never hardcode a pixel offset.
- Project screenshots live under `public/images/projects/<slug>/`; strip EXIF/GPS from any photo (`convert … -auto-orient -strip`) before committing.
- **OG images** (`src/app/opengraph-image.tsx`, `src/app/projects/[slug]/opengraph-image.tsx`) share `src/design-system/og/og.tsx`. Satori can't parse oklch, so that file holds **hex mirrors of the dark-theme tokens** — if a ramp step moves in `panda.config.ts`, re-derive them (source oklch noted inline). Fonts are vendored woff (satori can't read woff2) in `og/fonts/`; satori also drops `space-between`/`margin:auto` in the footer row — the flexGrow spacer is deliberate. The per-slug route renders on demand, so `next.config.mjs` pins the woffs into the function bundle via `outputFileTracingIncludes`.

## Deployment (Vercel)

- `pnpm-workspace.yaml` is **gitignored** — pnpm 11 regenerates it locally to hold the native build-script allowlist, but Vercel's older pnpm rejects a workspace file without a `packages:` field (`packages field missing or empty` → install fails). Keep it out of git.
- Vercel does **not** honor the `pnpm@11.5.0` pin (Corepack isn't enabled); it builds with its own pnpm. To make Vercel use pnpm 11, set env var `ENABLE_EXPERIMENTAL_COREPACK=1` in project settings.

## Directory map

```
src/
  app/                      # routes only + layout/not-found/fonts/globals
    (home)/                 # "/" route group
    about/  interests/  projects/[slug]/
  layout/                   # app-shell components (consumed by layout.tsx)
  design-system/            # cross-route UI (icons, PageContainer)
  providers/                # context providers (keeps its barrel)
```

## Styling with Panda CSS

Documentation for Panda CSS can be found at https://panda-css.com/llms.txt - or for a more full version at the following link:
https://panda-css.com/llms-full.txt
