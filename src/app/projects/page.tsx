import { pageMetadata } from '@/design-system/site'
import ProjectsContent from './ProjectsContent'

export const metadata = pageMetadata({
  title: 'Projects',
  description:
    'Featured projects by John William Davis including web apps and terminal UIs.',
  path: '/projects',
})

export default function ProjectsPage() {
  return <ProjectsContent />
}
