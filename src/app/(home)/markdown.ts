import { stripMarkup } from '@/app/projects/[slug]/markup'
import { emailHref, resumeHref, socialLinks } from '@/design-system/contact'
import { absoluteUrl } from '@/design-system/site'
import { featured, heroParagraphs } from './content'

export function homeMarkdown() {
  return [
    '# John William Davis',
    'Software Engineer · Rust & TypeScript (mostly)',
    ...heroParagraphs,
    '## Selected work',
    ...featured.map((project) =>
      [
        `### [${project.title}](${absoluteUrl(`/projects/${project.slug}`)})`,
        project.summary,
        stripMarkup(project.description),
      ].join('\n\n'),
    ),
    `[All projects](${absoluteUrl('/projects')})`,
    '## Contact',
    [
      `- [Resume (PDF)](${absoluteUrl(resumeHref)})`,
      ...socialLinks.map(({ href, label }) => `- [${label}](${href})`),
      `- [Email](${emailHref})`,
    ].join('\n'),
  ].join('\n\n')
}
