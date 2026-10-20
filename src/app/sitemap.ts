import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import type { MetadataRoute } from 'next'
import { projects } from '@/app/projects/projects'
import { absoluteUrl } from '@/design-system/site'

// Every canonical, indexable page. /kitchen-sink is left out (it 404s on
// production), as are the OG image routes and the PDF.

// lastModified is the last commit touching a page's own content, or absent
// when git can't say. Vercel builds from a shallow clone, where a file last
// changed before the clone's cutoff shows the cutoff commit instead; that date
// would be wrong, so it is dropped rather than reported.
function git(...args: string[]) {
  return execFileSync('git', args, { encoding: 'utf8' }).trim()
}

let shallowCutoffs: Set<string> | undefined
function lastCommitted(paths: string[]) {
  try {
    shallowCutoffs ??= new Set(
      git('rev-parse', '--is-shallow-repository') === 'true'
        ? readFileSync(git('rev-parse', '--git-path', 'shallow'), 'utf8').split('\n')
        : [],
    )
    const [hash, date] = git('log', '-1', '--format=%H %cI', '--', ...paths).split(' ')
    return hash && !shallowCutoffs.has(hash) ? new Date(date) : undefined
  } catch {
    return undefined
  }
}

const projectsData = 'src/app/projects/projects.ts'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '/', sources: ['src/app/(home)', projectsData] },
    {
      path: '/projects',
      sources: ['src/app/projects/ProjectsContent.tsx', 'src/app/projects/markdown.ts', projectsData],
    },
    { path: '/about', sources: ['src/app/about'] },
    {
      path: '/interests',
      sources: ['src/app/interests', 'public/images/books', 'public/images/trail', 'public/images/writing'],
    },
  ]

  // A shared projects.ts would date every case study by the latest edit to
  // any of them, so each project carries its own date.
  const caseStudies = projects.map(({ slug, updated }) => ({
    url: absoluteUrl(`/projects/${slug}`),
    lastModified: updated,
  }))

  return [
    ...pages.map(({ path, sources }) => ({
      url: absoluteUrl(path),
      lastModified: lastCommitted(sources),
    })),
    ...caseStudies,
  ]
}
