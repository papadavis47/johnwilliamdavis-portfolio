import { projects } from '@/app/projects/projects'
import { stripMarkup } from '@/app/projects/[slug]/markup'
import { skillCategories } from '@/app/about/skill-data'
import { emailHref, resumeHref, socialLinks } from '@/design-system/contact'
import { absoluteUrl, siteDescription } from '@/design-system/site'

// llms.txt (https://llmstxt.org): an H1, a blockquote summary, free text, then
// H2 sections of links. Projects and skills come from the same data the pages
// render, so this stays current as they change.
export const dynamic = 'force-static'

const link = (title: string, path: string, note: string) =>
  `- [${title}](${absoluteUrl(path)}): ${note}`

const body = [
  '# John William Davis',
  `> ${siteDescription}`,
  'A static personal portfolio: project case studies, background and skills, and personal interests. Every page listed here also returns a Markdown version of itself when requested with `Accept: text/markdown`.',
  '## When to use this',
  [
    'Use this site for factual information about John William Davis and his software work:',
    '',
    `- His personal projects: ${projects.map(({ title }) => title).join(', ')}. Each case study covers what it is, why he built it, its key features, and its technical design.`,
    `- The languages and tools he works with: ${skillCategories.map(({ title, skills }) => `${title.toLowerCase()} (${skills.map(({ name }) => name).join(', ')})`).join('; ')}.`,
    '- Technical topics the project write-ups cover: Rust terminal user interfaces with ratatui and crossterm; offline-first data with libsql and optional Turso sync; full-stack TypeScript apps on TanStack Start with Supabase, Drizzle and row-level security; Panda CSS design tokens; and a Python exercise runner forked from Rustlings.',
    '- His use of agentic coding tools such as Claude Code, Amp and Delta.',
    '- How to reach him, and where to find his resume, GitHub and LinkedIn.',
    '',
    'This site is read-only content. It has no API and offers no tools, services or actions an agent can invoke. For a fuller professional summary, see the resume.',
  ].join('\n'),
  '## Pages',
  [
    link('Home', '/', 'introduction and selected work'),
    link('Projects', '/projects', 'every project, with a one-line summary and tech stack'),
    link('About', '/about', 'background, skills, and technologies'),
    link('Interests', '/interests', 'reading, writing, and trail running'),
  ].join('\n'),
  '## Projects',
  projects
    .map((project) =>
      link(
        project.title,
        `/projects/${project.slug}`,
        `${stripMarkup(project.summary)}. Built with ${project.techStack.join(', ')}.`,
      ),
    )
    .join('\n'),
  '## Contact',
  [
    link('Resume (PDF)', resumeHref, 'resume'),
    ...socialLinks.map(({ href, label }) => `- [${label}](${href}): profile`),
    `- [Email](${emailHref}): ${emailHref.replace('mailto:', '')}`,
  ].join('\n'),
  '## Optional',
  [
    link('Sitemap', '/sitemap.xml', 'every page on this site'),
    '- [Comfortable Feeling Dumb](https://www.comfortablefeelingdumb.com/): his blog about software, agentic engineering, and other topics',
  ].join('\n'),
].join('\n\n')

export function GET() {
  return new Response(`${body}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
