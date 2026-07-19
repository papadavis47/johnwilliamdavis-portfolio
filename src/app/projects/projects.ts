export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  descriptionLink?: { text: string; href: string }
  logo?: { src: string; alt: string }
  why: string
  features: string[]
  techNotes: string
  closingNote?: string
  screenshot?: { src: string; alt: string; width: number; height: number }
  techStack: string[]
  github?: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'iwantyoutoknow',
    title: 'I want you to know',
    summary: 'A shared memory and communication vault for fathers',
    description:
      'A digital legacy platform where a father builds a curated collection of letters, text notes, voice notes and photos for his children, preserved for when he is no longer around. It is a love letter platform: forward-looking and personal.',
    logo: {
      src: '/images/projects/iwantyoutoknow/mark.svg',
      alt: 'I want you to know mark: a folded note signed with a heart',
    },
    why: 'I built this because I want my kids to have my words in my own voice: stories, counsel, the things I would say to them at every age, even if I am not there to say them. Most tools in this space feel like estate paperwork. I wanted something that feels like writing a love letter: a father should be able to sit down, write or record or upload something meaningful, and close the app in a few minutes.',
    features: [
      'Letters, text or voice notes, and photo entries, each taggable and addressed to specific children',
      'A vault system: a hashed master unlock code for an executor, who generates per-child access codes',
      'Children return anytime with their code to see everything written for them',
      'Individual entries shareable via temporary password-protected links that expire after seven days',
      'Warm, personal design: cream backgrounds, amber accents, generous whitespace',
    ],
    techNotes:
      'Built with TanStack Start: React 19 with SSR, file-based routing, and type-safe server functions validated with Zod. Data lives in Supabase Postgres through Drizzle ORM, with photos in Supabase Storage. Vault and share-link codes are hashed with scrypt and never stored in plain text. The codebase is organized vertically by feature, and styling is Panda CSS with semantic design tokens.',
    closingNote: 'The design will continue to evolve as I refine the idea.',
    techStack: ['TanStack Start', 'React', 'Supabase', 'Drizzle', 'Panda CSS'],
    url: 'https://iwantyoutoknow-dad.netlify.app/',
  },
  {
    slug: 'mountains',
    title: 'Mountains',
    summary:
      'A terminal training log for trail running and nutrition awareness',
    description:
      'A Rust terminal application for trail runners who want to improve generally while focusing more intensely on vertical gain. It is a daily training log for the command line: nutrition, body measurements, miles, elevation gain, strength and mobility work, and free-form notes. Streak tracking nudges you toward 1,000+ feet of climbing a day.',
    why: 'Trail running is where I experience mindfulness and motivation to live a healthy lifestyle. As a person building software, the terminal is where I already spend my working day. I wanted a log that lives in that same place: no browser tab, no account, no friction. Open a terminal, record the day, get a gentle push to chase elevation. Building this tool was also a chance to go deep on Rust and TUI development.',
    features: [
      'Daily entries for nutrition, body measurements, miles, elevation gain, strength and mobility work, and notes',
      'Streak tracking for 1,000+ feet of daily vert, with monthly and yearly totals on the start screen',
      'Offline-first: a local libsql database at `~/.mountains/`, no connection required',
      'Optional Turso cloud sync, configured in-app and synced in the background on startup and quit',
      "Markdown backups of every day's entry, readable outside the app",
    ],
    techNotes:
      'Written in Rust with `ratatui` and `crossterm` for the terminal interface, and `tokio` for async background sync. Data persistence is `libsql`, the same engine locally and in Turso Cloud, so sync is opt-in rather than required. Installed with `cargo install`; the app creates and manages its own `~/.mountains/` directory.',
    closingNote:
      'I’ll continue refining the app as I use it in my own training.',
    screenshot: {
      src: '/images/projects/mountains/tui-screenshot.png',
      alt: 'Mountains TUI start screen showing the title, monthly vert streak, and yearly elevation total',
      width: 1204,
      height: 536,
    },
    techStack: ['Rust', 'ratatui', 'libsql', 'Turso'],
    github: 'https://github.com/papadavis47/mountains',
  },
  {
    slug: 'sokay',
    title: 'Sokay',
    summary: 'A mindful eating tracker',
    description:
      'A mindful-eating tracker built around a simple idea: set a small budget of "sokay" items over a few weeks or months, and log indulgences against it without guilt. The goal is sustainable habits through realistic limits and self-forgiveness: progress, not perfection.',
    logo: {
      src: '/images/projects/sokay/sokay-ring.svg',
      alt: 'Sokay mark: an open ring with a gap where a stumble lands',
    },
    why: 'Most food tracking apps are built on restriction and streaks, and breaking the streak feels like failure. I wanted the opposite: an app that budgets for imperfection up front. The brand mark says it: an open ring with the gap right where a stumble lands, and the loop continues past it. Logging a treat is not falling off the wagon; it is the plan working.',
    features: [
      'Flexible goals: 1–100 items over a window of weeks or months',
      'Log items against the budget with optional notes: no calories, no shame',
      'A full goal lifecycle: finish the window or end early, review the cycle, start fresh',
      'Nothing is deleted; history keeps every past goal and its entries for honest review',
      'Accounts with email or GitHub sign-in, profiles, and avatars',
    ],
    techNotes:
      'Built with TanStack Start: React 19, file-based routing, and server functions that gate every query by the authenticated user. Auth is Supabase with row-level security; the schema is managed with Drizzle migrations. The UI is Panda CSS with config recipes and Ark UI primitives, and the logic is covered by Vitest unit tests plus Playwright end-to-end flows.',
    closingNote: 'The design is still evolving as I refine the idea.',
    techStack: ['TanStack Start', 'Supabase', 'Drizzle', 'Panda CSS'],
    url: 'https://sokay-help.netlify.app/',
  },
  {
    slug: 'rattlesnake',
    title: 'Rattlesnake',
    summary: 'A tool for learning Python concepts, inspired by Rustlings',
    description:
      'An interactive exercise runner for learning Python, from basic syntax through advanced language features. It is a fork of Rustlings that keeps the fast Rust CLI, including its file watcher, progress tracking, and hints, while replacing the curriculum and validation pipeline with Python: fix the code, save, and get immediate feedback.',
    descriptionLink: {
      text: 'Rustlings',
      href: 'https://rustlings.rust-lang.org/',
    },
    logo: {
      src: '/images/projects/rattlesnake/logo.png',
      alt: 'Rattlesnake logo: a coiled rattlesnake wrapped around the Python mark',
    },
    why: 'Rustlings was my introduction to Rust programming. Through a tight loop of broken code, failing checks, and immediate feedback it was extremely helpful as an introduction to the language. I wanted to create that exact loop for people learning Python. Nothing quite like it existed for Python as far as I was aware, so I forked Rustlings and rebuilt its exercise pipeline for a new language.',
    features: [
      '50 hands-on exercises with matching reference solutions, from a gentle 11-exercise intro to metaclasses and asyncio',
      'Watch mode reruns the current exercise automatically on every save',
      'Built-in hints, progress tracking, exercise reset, and a check-all command',
      'Per-exercise validation stages: run, test, lint, and type-check',
      'Covers decorators, context managers, generators, concurrency, protocols, and more',
    ],
    techNotes:
      'The CLI is Rust, preserved from Rustlings; the validation pipeline is rebuilt on the Astral toolchain: `uv` bootstraps the Python 3.12 environment, then each exercise runs through `python`, `pytest`, `ruff`, and the `ty` type checker as configured per exercise. Curriculum, ordering, and hints live in a single `.toml` file.',
    closingNote: 'This project served as a great Rust codebase tour.',
    techStack: ['Rust', 'Python', 'uv', 'pytest'],
    github: 'https://github.com/papadavis47/rattlesnake',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
