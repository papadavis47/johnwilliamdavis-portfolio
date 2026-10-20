import { absoluteUrl } from '@/design-system/site'
import type { Project } from '../projects'

// The Markdown representation of a case study. The projects.ts markup grammar
// (backticks, _underscores_, [text](href)) is already valid Markdown, so copy
// passes through as written. Mirrors ProjectContent's section order.
export function projectMarkdown(project: Project) {
  return [
    `# ${project.title}`,
    // hardcoded beside the h1 in ProjectContent; keep the two in step
    project.slug === 'sokay' &&
      'It’**s okay**, because imperfection is part of the plan.',
    `> ${project.summary}`,
    `Tech stack: ${project.techStack.join(', ')}`,
    project.description,
    '## Why I built it',
    project.why,
    '## Key features',
    project.features.map((feature) => `- ${feature}`).join('\n'),
    ...(project.screenshots ?? []).map(
      ({ src, alt }) => `![${alt}](${absoluteUrl(src)})`,
    ),
    '## Tech notes',
    project.techNotes,
    project.closingNote && `_${project.closingNote}_`,
    '## Links',
    [
      project.github && `- [View on GitHub](${project.github})`,
      project.url && `- [Visit App](${project.url})`,
      `- [All projects](${absoluteUrl('/projects')})`,
    ]
      .filter(Boolean)
      .join('\n'),
  ]
    .filter(Boolean)
    .join('\n\n')
}
