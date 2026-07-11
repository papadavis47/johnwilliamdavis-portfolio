export type Project = {
  slug: string
  title: string
  summary: string
  description: string
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
      'A shared memory and communication platform for fathers to leave wisdom and memories for their children.',
    techStack: ['TanStack Start', 'Supabase', 'Panda CSS'],
    url: 'https://github.com/papadavis47/iwantyoutoknow',
  },
  {
    slug: 'mountains',
    title: 'Mountains',
    summary: 'Terminal UI for tracking nutrition and trail running adventures',
    description:
      'A terminal user interface application for trail runners to track and plan their mountain adventures. Built with Rust for performance and reliability, using ratatui for the TUI framework and libsql for local data persistence. Features include route planning, elevation tracking, and run history.',
    techStack: ['Rust', 'ratatui', 'libsql'],
    github: 'https://github.com/papadavis47/mountains',
  },
  {
    slug: 'sokay',
    title: 'Sokay',
    summary: 'A mindful eating tracker',
    description:
      'Set a limit of "sokay items," log indulgences without guilt, build sustainable habits through realistic goals and self-forgiveness.',
    techStack: ['TanStack Start', 'Panda CSS', 'Supabase'],
    url: 'https://sokay-help.netlify.app/',
  },
  {
    slug: 'rattlesnake',
    title: 'Rattlesnake',
    summary: 'A tool for learning Python concepts - inspired by Rustlings',
    description: 'Forked from Rustlings - Small exercises for learning Python.',
    techStack: ['Rust', 'Python'],
    url: 'https://github.com/papadavis47/rattlesnake',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
