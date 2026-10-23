import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProjectContent from './ProjectContent'
import { getProjectBySlug, projects } from '../projects'
import { stripMarkup } from './markup'
import { pageMetadata } from '@/design-system/site'

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
      title: 'Project Not Found',
    }
  }

  return pageMetadata({
    title: project.title,
    description: stripMarkup(project.description),
    path: `/projects/${project.slug}`,
    type: 'article',
  })
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
