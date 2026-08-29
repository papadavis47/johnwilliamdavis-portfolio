export type Project = {
  slug: string
  title: string
  summary: string
  description: string
  descriptionLink?: { text: string; href: string }
  logo?: { src: string; alt: string }
  logoDark?: string
  why: string
  features: string[]
  techNotes: string
  closingNote?: string
  screenshots?: { src: string; alt: string; width: number; height: number }[]
  techStack: string[]
  github?: string
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'iwantyoutoknow',
    title: 'I want you to know',
    summary: 'A shared memory and communication vault for parents',
    description:
      'A digital legacy platform where a parent builds a curated collection of letters, text notes, voice notes and photos for their children, preserved for when they are no longer around. It is a love letter platform: forward-looking and personal.',
    logo: {
      src: '/images/projects/iwantyoutoknow/mark.svg',
      alt: 'I want you to know mark: a folded note signed with a heart',
    },
    why: 'I built this because I want my kids to have my words in my own voice: stories, counsel, the things I would say to them at every age, even if I am not there to say them. Most tools in this space feel like estate paperwork. I wanted something that feels like writing a love letter: a parent should be able to sit down, write or record or upload something meaningful, and close the app in a few minutes.',
    features: [
      'Letters, text or voice notes, and photo entries, each taggable and addressed to specific children',
      'A vault system: a hashed master unlock code for an executor, who generates per-child access codes',
      'Children return anytime with their code to see everything written for them',
      'Individual entries shareable via temporary password-protected links that expire after seven days',
      'Warm, personal design: a modern neutral background with warm amber accents in light mode, a midnight blue background in dark mode, and generous whitespace throughout',
    ],
    techNotes:
      'Built with TanStack Start: React 19 with SSR, file-based routing, and type-safe server functions validated with Zod. Data lives in Supabase Postgres through Drizzle ORM, with photos in Supabase Storage. Vault and share-link codes are hashed with scrypt and never stored in plain text. The codebase is organized vertically by feature, and styling is Panda CSS with semantic design tokens.',
    closingNote: 'The design will continue to evolve as I refine the idea.',
    techStack: ['TanStack Start', 'React', 'Supabase', 'Drizzle', 'Panda CSS'],
    url: 'https://iwantyoutoknow.app/',
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
    screenshots: [
      {
        src: '/images/projects/mountains/tui-screenshot.png',
        alt: 'Mountains TUI start screen showing the title, monthly vert streak, and yearly elevation total',
        width: 1204,
        height: 536,
      },
    ],
    techStack: ['Rust', 'ratatui', 'libsql', 'Turso'],
    github: 'https://github.com/papadavis47/mountains',
  },
  {
    slug: 'caleb',
    title: 'caleb',
    summary: 'A terminal task manager for coding sessions',
    description:
      'A Rust terminal application that holds a to-do list for the length of one coding session. Tasks sit in two panes side by side, Active and Completed, and checking one off moves it across. Each session is a single GitHub-flavored markdown file on disk, so the list stays readable in any editor long after the terminal is closed.',
    logo: {
      src: '/images/projects/caleb/iris-light.svg',
      alt: 'caleb mark: an iris cut into a circular plate, with a blue check drawn through it',
    },
    logoDark: '/images/projects/caleb/iris-dark.svg',
    why: 'I wanted a list that begins when I sit down to build software and ends with the terminal, instead of a permanent backlog that follows me around. Sessions expiring is the point: yesterday is a file I can pull from, not a debt I carry.\n\nThe name is the personal half. It is for Caleb Smith in _Ex Machina_, a film I keep going back to for its story and its look, which this app borrows from.',
    features: [
      'Two panes, Active and Completed, with a task crossing over the moment you check it off',
      'Every session is one GitHub-flavored markdown file under `~/.local/share/caleb/`, editable outside the app',
      'Pull unfinished work forward from a past session, which ticks those tasks off where they came from',
      'A resume picker with a live preview pane, so you can read a session before opening it',
      'Mouse aware: wheel to scroll, click to select, double-click to toggle a task done',
      'Clear sessions containing all completed tasks with `caleb --clean`',
    ],
    techNotes:
      'Written in Rust on the 2024 edition with `ratatui` and `crossterm` for the interface and `clap` for the command line. Errors are typed per module with `thiserror` and surface through `anyhow` at the entry point, and `unsafe` code is forbidden crate-wide. Dates come from `jiff`, which resolves the local time zone in pure Rust.\n\nThere is no database and no network: the markdown file is the state, parsed and reserialized on every save. Around 246 tests cover it, from in-file unit tests and `ratatui` buffer assertions to pty-driven smoke scripts, all gated in CI alongside `clippy` at pedantic.',
    closingNote: 'Linux only for now, since that is where I work.',
    screenshots: [
      {
        src: '/images/projects/caleb/tui-resume-picker.png',
        alt: 'caleb resume picker listing four past sessions on the left, with a live markdown preview of the selected session on the right',
        width: 1103,
        height: 627,
      },
      {
        src: '/images/projects/caleb/tui-task-panes.png',
        alt: 'caleb showing its two panes, Active on the left with three open tasks and Completed on the right with three struck-through tasks',
        width: 1190,
        height: 670,
      },
    ],
    techStack: ['Rust', 'ratatui', 'crossterm', 'clap'],
    github: 'https://github.com/papadavis47/caleb',
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
