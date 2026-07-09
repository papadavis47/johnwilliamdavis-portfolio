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
    title: 'i want you to know',
    summary: 'A communication app for fathers',
    description: 'A communication app for fathers.',
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
    github: 'https://github.com/papadavis47/mountains-tui',
  },
  {
    slug: 'sokay',
    title: 'Sokay',
    summary: 'Terminal UI for managing book collections',
    description: 'Terminal UI for managing book collections.',
    techStack: ['TanStack Start', 'Panda CSS', 'Supabase'],
    url: 'https://sokay-help.netlify.app/',
  },
  {
    slug: 'comfortable-feeling-dumb',
    title: 'Comfortable Feeling Dumb',
    summary: 'Personal blog exploring learning and growth',
    description:
      'A personal blog dedicated to documenting the learning journey. Built with Next.js 16 and the new Tailwind v4, this site uses MDX for rich, interactive content. The blog explores topics around embracing uncertainty and the growth that comes from being comfortable with not knowing everything.',
    techStack: ['Next.js 16', 'Tailwind v4', 'MDX'],
    url: 'https://comfortablefeelingdumb.com',
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
