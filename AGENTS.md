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
```

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

### Design system

- **Colors are semantic tokens only.** Never reach for a raw ramp step (`accent.600`, `neutral.200`) in a component — use `bg`, `surface`, `text`, `text.muted`, `border`, `accent`, `accent.hover`, `accent.emphasis`, `accent.fg`, `accent.subtle`. Both ramps are oklch; every `accent` step shares hue `272`, so re-hueing the site means editing one number per step in `panda.config.ts`.
- **Typography is `textStyle`, never inline `fontSize`/`fontWeight`/`fontFamily`.** `display` (hero) · `h1`/`h2`/`h3` · `subtitle` · `prose` (body `<p>`) · `body` · `small` · `caption`. Headings pull `fontFamily: heading` themselves — do not concatenate `merriweather.className`. Fonts are CSS vars (`--font-raleway`/`--font-merriweather`) set on `<html>`; `globalCss` puts `fontFamily: body` on `html`.
- **Recipes for repeated primitives**: `button` (`visual: solid|outline`, `size: sm|md`), `card` (`interactive: true`), `tag`, `link` — import from `styled-system/recipes`. Route one-offs stay plain `css()`. Combine a recipe with extra styles via `cx(card({...}), css({...}))`; the `utilities` layer wins over `recipes`, so `css()` overrides land.
- **Every route wraps in `src/design-system/PageContainer.tsx`** — one 56rem frame for every page (`hero` only bumps top padding), so all `h1`s share a left edge with the nav brand. It owns `mx/px/py`, so routes should not set their own page gutters, and must not render a `<main>` (`layout.tsx` already does). Long-form text sets `maxWidth: 'content'` (44rem) on its own block to hold a readable measure; **never narrow the frame itself** — that is what knocked headings out of alignment before.
- Semantic `radii`: `card` (12px) · `control` (8px, buttons/panels/photos) · `tag` (6px). Semantic `shadows`: `hover`, `lifted`. No raw `rgba()`.
- Panda extracts styles **statically** — never build a `css()` object from a runtime conditional (`...(i === 1 ? {...} : {})`). Hoist each branch to its own `css()` and pick with `cx()`.
- Project screenshots live under `public/images/projects/<slug>/`; strip EXIF/GPS from any photo (`convert … -auto-orient -strip`) before committing.

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
