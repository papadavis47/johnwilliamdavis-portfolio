import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectContent from './ProjectContent'
import { getProjectBySlug, projects } from '../projects'

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
  const project = getProjectBySlug(slug)

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
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectContent project={project} />
}
