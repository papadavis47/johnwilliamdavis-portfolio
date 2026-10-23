import type { Metadata } from 'next'

// The canonical origin and the one-line site description. Metadata, JSON-LD,
// the sitemap, llms.txt and the Markdown representations all build absolute
// URLs from here, so the www host is spelled once.
export const siteUrl = 'https://www.johnwilliamdavis.com'

export const siteDescription =
  'Portfolio of John William Davis, a software engineer working in Rust and TypeScript, with Python when needed.'

export const absoluteUrl = (path: string) => new URL(path, siteUrl).href

export const siteTitle = 'John William Davis | Software Engineer'

// Next merges `openGraph`/`twitter` as whole objects, so a page that sets only
// `title`/`description` still previews with the layout's site-wide og: tags.
// Every page builds its metadata here so link previews match the page. og:title
// gets no `title.template`, hence the suffix spelled out. Setting `openGraph`
// also drops the root `opengraph-image` inherited from the layout, so it is
// named again here. Case studies (`article`) have their own `opengraph-image`
// file, which a config `images` would override, so they leave it unset.
export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
}: {
  title: string | { absolute: string }
  description: string
  path: string
  type?: 'website' | 'article'
}): Metadata {
  const fullTitle =
    typeof title === 'string' ? `${title} | John William Davis` : title.absolute

  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: absoluteUrl(path),
      siteName: 'John William Davis',
      type,
      ...(type === 'website' && { images: '/opengraph-image' }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}
