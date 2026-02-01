import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectContent from './ProjectContent'

type Project = {
  slug: string
  title: string
  description: string
  techStack: string[]
  github?: string
  url?: string
}

const projects: Project[] = [
  {
    slug: 'comfortable-feeling-dumb',
    title: 'Comfortable Feeling Dumb',
    description:
      'A personal blog dedicated to documenting the learning journey. Built with Next.js 16 and the new Tailwind v4, this site uses MDX for rich, interactive content. The blog explores topics around embracing uncertainty and the growth that comes from being comfortable with not knowing everything.',
    techStack: ['Next.js 16', 'Tailwind v4', 'MDX'],
    url: 'https://comfortablefeelingdumb.com',
  },
  {
    slug: 'mountains',
    title: 'Mountains TUI',
    description:
      'A terminal user interface application for trail runners to track and plan their mountain adventures. Built with Rust for performance and reliability, using ratatui for the TUI framework and libsql for local data persistence. Features include route planning, elevation tracking, and run history.',
    techStack: ['Rust', 'ratatui', 'libsql'],
    github: 'https://github.com/papadavis47/mountains-tui',
  },
  {
    slug: 'libros',
    title: 'Libros TUI',
    description:
      'A terminal-based book collection manager built with Go and the Bubble Tea TUI framework. Organize your reading list, track progress, and manage your personal library all from the command line. Features a beautiful, intuitive interface with keyboard-driven navigation.',
    techStack: ['Go', 'Bubble Tea'],
    github: 'https://github.com/papadavis47/libros-tui',
  },
  {
    slug: 'victor-fuentes-art',
    title: 'Victor Fuentes Art',
    description:
      'A portfolio website for artist Victor Fuentes, showcasing his artwork and creative process. Built with vanilla web technologies for simplicity and performance. Features a clean, gallery-focused design that puts the artwork front and center.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    url: 'https://victorfuentesart.netlify.app',
  },
]

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: 'Project Not Found | John William Davis',
    }
  }

  return {
    title: `${project.title} | John William Davis`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return <ProjectContent project={project} />
}
