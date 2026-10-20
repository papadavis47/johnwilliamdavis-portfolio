import { NextResponse, type NextRequest } from 'next/server'
import { homeMarkdown } from '@/app/(home)/markdown'
import { aboutMarkdown } from '@/app/about/markdown'
import { interestsMarkdown } from '@/app/interests/markdown'
import { projectsMarkdown } from '@/app/projects/markdown'
import { projectMarkdown } from '@/app/projects/[slug]/markdown'
import { projects } from '@/app/projects/projects'
import { absoluteUrl } from '@/design-system/site'

// Markdown content negotiation. Every page URL also has a Markdown
// representation, served from the same URL to a client that prefers
// `text/markdown` over `text/html`. Browsers never list text/markdown, so they
// always take the HTML branch, which this leaves untouched.
//
// Only the Markdown side carries `Vary: Accept`. The HTML side can't: Vercel
// serves prerendered pages with the vary Next stored at build time, ignoring
// proxy and next.config headers, and on dynamic renders (404s) a proxy Vary
// replaces Next's own rather than joining it. The two can't mix in a cache
// anyway: Markdown is answered here, before Vercel's cache, and is never stored
// in it, and both sides are `max-age=0, must-revalidate`, so any cache
// downstream has to come back here, where Accept is negotiated again.

const pages = new Map<string, () => string>([
  ['/', homeMarkdown],
  ['/about', aboutMarkdown],
  ['/interests', interestsMarkdown],
  ['/projects', projectsMarkdown],
  ...projects.map(
    (project) =>
      [`/projects/${project.slug}`, () => projectMarkdown(project)] as const,
  ),
])

// The q-value the Accept header gives `type`, taken from its most specific
// matching range (text/markdown beats text/* beats */*). Missing means 0.
function quality(accept: string, type: string) {
  const ranges = [type, `${type.split('/')[0]}/*`, '*/*']
  let best = { rank: ranges.length, q: 0 }
  for (const entry of accept.toLowerCase().split(',')) {
    const [range, ...params] = entry.split(';').map((part) => part.trim())
    const rank = ranges.indexOf(range)
    if (rank === -1 || rank >= best.rank) continue
    const q = params.find((param) => param.startsWith('q='))
    const value = q ? Number(q.slice(2)) : 1
    best = { rank, q: Number.isFinite(value) ? value : 0 }
  }
  return best
}

// Markdown only when the client names it outright and ranks it at least as
// high as HTML: `*/*` or `text/*` alone stays HTML.
function prefersMarkdown(accept: string | null) {
  if (!accept) return false
  const markdown = quality(accept, 'text/markdown')
  return markdown.rank === 0 && markdown.q > 0 && markdown.q >= quality(accept, 'text/html').q
}

function markdownResponse(body: string, status: number) {
  return new NextResponse(`${body}\n`, {
    status,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      Vary: 'Accept',
    },
  })
}

function notFoundMarkdown(pathname: string) {
  return [
    '# Page not found',
    `There is no page at \`${pathname}\`.`,
    [
      `- [Home](${absoluteUrl('/')})`,
      `- [Sitemap](${absoluteUrl('/sitemap.xml')}): every page on this site`,
      `- [llms.txt](${absoluteUrl('/llms.txt')}): a guide to this site for language models`,
    ].join('\n'),
  ].join('\n\n')
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const negotiable = request.method === 'GET' || request.method === 'HEAD'

  if (negotiable && prefersMarkdown(request.headers.get('accept'))) {
    const page = pages.get(pathname)
    return page
      ? markdownResponse(page(), 200)
      : markdownResponse(notFoundMarkdown(pathname), 404)
  }

  return NextResponse.next()
}

export const config = {
  // Page URLs only: skip Next internals, anything with a file extension
  // (public assets, sitemap.xml, robots.txt, llms.txt, icon.svg) and the
  // generated OG images.
  matcher: ['/((?!_next/|.*\\.[^/]*$|.*opengraph-image).*)'],
}
