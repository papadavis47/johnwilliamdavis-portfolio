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
- **Prose text uses the Panda `prose` `textStyle`** (`textStyles.prose` in `panda.config.ts` → `fontSize: 1.1rem`, `lineHeight: 1.8`). Apply it via `css({ textStyle: 'prose', ... })` for regular body `<p>` text instead of re-declaring `fontSize`/`lineHeight`. Per-instance `color`, `mb`, and `textAlign` stay inline. The hero (`HeroIntro.tsx`) keeps a `sm: { fontSize: '1.2rem' }` responsive bump inline — this is intentionally **not** in the token, so about/projects/404 prose stays `1.1rem` at all widths. If site-wide responsive prose is ever wanted, fold `sm: { fontSize: '1.2rem' }` into the token and drop the hero's inline overrides.

## Deployment (Vercel)

- `pnpm-workspace.yaml` is **gitignored** — pnpm 11 regenerates it locally to hold the native build-script allowlist, but Vercel's older pnpm rejects a workspace file without a `packages:` field (`packages field missing or empty` → install fails). Keep it out of git.
- Vercel does **not** honor the `pnpm@11.5.0` pin (Corepack isn't enabled); it builds with its own pnpm. To make Vercel use pnpm 11, set env var `ENABLE_EXPERIMENTAL_COREPACK=1` in project settings.

## Directory map

```
src/
  app/                      # routes only + layout/not-found/fonts/globals
    (home)/                 # "/" route group
    about-me/  other-interests/  projects/[slug]/
  layout/                   # app-shell components (consumed by layout.tsx)
  design-system/            # cross-route UI (icons)
  providers/                # context providers (keeps its barrel)
```
