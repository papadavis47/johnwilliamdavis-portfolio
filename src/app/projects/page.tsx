import type { Metadata } from 'next'
import ProjectsContent from './ProjectsContent'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Featured projects by John William Davis including web apps and terminal UIs.',
}

export default function ProjectsPage() {
  return <ProjectsContent />
}
