import { test, expect } from '@playwright/test'
import { projects } from '../src/app/projects/projects'

// The agent-facing surface: Markdown content negotiation (src/proxy.ts),
// JSON-LD on the home page, sitemap.xml, robots.txt and llms.txt.

const site = 'https://www.johnwilliamdavis.com'
const browserAccept =
  'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8'

const pages = [
  { path: '/', h1: 'John William Davis' },
  { path: '/projects', h1: 'Projects' },
  { path: '/about', h1: 'About' },
  { path: '/interests', h1: 'Interests' },
  ...projects.map(({ slug, title }) => ({ path: `/projects/${slug}`, h1: title })),
]

// Markdown back to the text a reader sees, for comparing with the HTML.
const plain = (markdown: string) =>
  markdown
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*|`/g, '')
    .replace(/(^|\W)_([^_]+)_(?=\W|$)/g, '$1$2')
    .replace(/\s+/g, ' ')

test.describe('markdown content negotiation', () => {
  for (const { path, h1 } of pages) {
    test(`${path} serves Markdown to text/markdown`, async ({ request }) => {
      const response = await request.get(path, {
        headers: { Accept: 'text/markdown' },
      })
      expect(response.status()).toBe(200)
      expect(response.headers()['content-type']).toBe('text/markdown; charset=utf-8')
      expect(response.headers()['vary']).toMatch(/\bAccept\b/)
      const body = await response.text()
      expect(body).toMatch(new RegExp(`^# ${h1}\n`))
      expect(body).not.toContain('—')
    })

    // Every paragraph a visitor reads is in the Markdown too, so the mirrored
    // copy in each route's markdown.ts can't silently drift from the JSX.
    test(`${path} Markdown carries every paragraph of the page`, async ({
      page,
      request,
    }) => {
      const markdown = plain(
        await (await request.get(path, { headers: { Accept: 'text/markdown' } })).text(),
      )
      await page.goto(path)
      const paragraphs = await page.locator('main p').allInnerTexts()
      const uiHints = ['Click below to go to my blog']
      const missing = paragraphs
        .map((text) => text.replace(/\s+/g, ' ').trim())
        .filter((text) => text && !uiHints.includes(text) && !markdown.includes(text))
      expect(paragraphs.length).toBeGreaterThan(0)
      expect(missing).toEqual([])
    })
  }

  const cases = [
    { accept: browserAccept, markdown: false },
    { accept: '*/*', markdown: false },
    { accept: 'text/*', markdown: false },
    { accept: 'text/markdown;q=0', markdown: false },
    { accept: 'text/html, text/markdown;q=0.5', markdown: false },
    { accept: 'text/markdown, text/html;q=0.9', markdown: true },
    { accept: 'text/html;q=0.5, TEXT/MARKDOWN', markdown: true },
    { accept: 'text/markdown, text/html', markdown: true },
  ]
  for (const { accept, markdown } of cases) {
    test(`Accept: ${accept} gets ${markdown ? 'Markdown' : 'HTML'}`, async ({
      request,
    }) => {
      const response = await request.get('/about', { headers: { Accept: accept } })
      expect(response.status()).toBe(200)
      expect(response.headers()['content-type']).toContain(
        markdown ? 'text/markdown' : 'text/html',
      )
    })
  }

  test('a request with no Accept header gets HTML', async ({ request }) => {
    const response = await request.get('/', { headers: { Accept: '' } })
    expect(response.headers()['content-type']).toContain('text/html')
  })

  for (const path of ['/does-not-exist', '/projects/does-not-exist']) {
    test(`${path} 404s with a Markdown body for text/markdown`, async ({
      request,
    }) => {
      const response = await request.get(path, {
        headers: { Accept: 'text/markdown' },
      })
      expect(response.status()).toBe(404)
      expect(response.headers()['content-type']).toBe('text/markdown; charset=utf-8')
      expect(response.headers()['vary']).toMatch(/\bAccept\b/)
      const body = await response.text()
      expect(body).toMatch(/^# Page not found\n/)
      expect(body).toContain(`${site}/sitemap.xml`)
      expect(body).toContain(`${site}/llms.txt`)
    })

    test(`${path} 404s with HTML for a browser`, async ({ request }) => {
      const response = await request.get(path, {
        headers: { Accept: browserAccept },
      })
      expect(response.status()).toBe(404)
      expect(response.headers()['content-type']).toContain('text/html')
    })
  }

  test('static files are not negotiated', async ({ request }) => {
    for (const path of ['/robots.txt', '/sitemap.xml', '/john-william-davis-resume.pdf']) {
      const response = await request.get(path, {
        headers: { Accept: 'text/markdown' },
      })
      expect(response.status()).toBe(200)
      expect(response.headers()['content-type']).not.toContain('text/markdown')
    }
  })
})

test('home page JSON-LD describes the Person and the WebSite', async ({ page }) => {
  await page.goto('/')
  const scripts = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents()
  expect(scripts).toHaveLength(1)

  const data = JSON.parse(scripts[0])
  expect(data['@context']).toBe('https://schema.org')
  const byType = Object.fromEntries(
    data['@graph'].map((node: { '@type': string }) => [node['@type'], node]),
  )
  expect(byType.Person).toMatchObject({
    '@id': `${site}/#person`,
    name: 'John William Davis',
    url: `${site}/`,
    sameAs: ['https://github.com/papadavis47', 'https://www.linkedin.com/in/john-william-davis/'],
  })
  expect(byType.WebSite).toMatchObject({
    '@id': `${site}/#website`,
    url: `${site}/`,
    author: { '@id': `${site}/#person` },
  })
})

test('sitemap lists exactly the canonical pages, each live', async ({
  page,
  request,
}) => {
  const response = await request.get('/sitemap.xml')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toContain('xml')

  // parse with the browser's XML parser rather than regex
  await page.goto('/')
  const entries = await page.evaluate((xml) => {
    const doc = new DOMParser().parseFromString(xml, 'application/xml')
    if (doc.querySelector('parsererror')) throw new Error('sitemap is not well-formed XML')
    return [...doc.getElementsByTagName('url')].map((url) => ({
      loc: url.getElementsByTagName('loc')[0]?.textContent ?? '',
      lastmod: url.getElementsByTagName('lastmod')[0]?.textContent ?? null,
    }))
  }, await response.text())

  expect(entries.map(({ loc }) => loc).sort()).toEqual(
    pages.map(({ path }) => new URL(path, site).href).sort(),
  )
  for (const { slug, updated } of projects) {
    expect(updated).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    const entry = entries.find(({ loc }) => loc === `${site}/projects/${slug}`)
    expect(entry?.lastmod, slug).toBe(updated)
  }
  for (const { loc, lastmod } of entries) {
    if (lastmod) expect(Number.isNaN(Date.parse(lastmod))).toBe(false)
    const live = await request.get(new URL(loc).pathname)
    expect(live.status(), loc).toBe(200)
  }
})

test('robots.txt points at the sitemap', async ({ request }) => {
  const body = await (await request.get('/robots.txt')).text()
  expect(body).toContain(`Sitemap: ${site}/sitemap.xml`)
})

test('llms.txt follows the format and every site link resolves', async ({
  request,
}) => {
  const response = await request.get('/llms.txt')
  expect(response.status()).toBe(200)
  expect(response.headers()['content-type']).toBe('text/plain; charset=utf-8')

  const body = await response.text()
  expect(body).toMatch(/^# John William Davis\n\n> \S/)
  expect(body).toContain('\n## When to use this\n')
  for (const { slug } of projects) expect(body).toContain(`${site}/projects/${slug}`)
  expect(body).not.toContain('—')

  const links = [...body.matchAll(/\]\((https:\/\/www\.johnwilliamdavis\.com[^)]*)\)/g)]
  expect(links.length).toBeGreaterThan(0)
  for (const [, href] of links) {
    const live = await request.get(new URL(href).pathname)
    expect(live.status(), href).toBe(200)
  }
})
