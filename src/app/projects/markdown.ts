import { absoluteUrl } from '@/design-system/site'
import { projects } from './projects'

export function projectsMarkdown() {
  return [
    '# Projects',
    ...projects.map((project) =>
      [
        `## [${project.title}](${absoluteUrl(`/projects/${project.slug}`)})`,
        project.summary,
        `Tech stack: ${project.techStack.join(', ')}`,
      ].join('\n\n'),
    ),
  ].join('\n\n')
}
