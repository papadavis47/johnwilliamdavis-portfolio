// The canonical origin and the one-line site description. Metadata, JSON-LD,
// the sitemap, llms.txt and the Markdown representations all build absolute
// URLs from here, so the www host is spelled once.
export const siteUrl = 'https://www.johnwilliamdavis.com'

export const siteDescription =
  'Portfolio of John William Davis, a software engineer working in Rust and TypeScript, with Python when needed.'

export const absoluteUrl = (path: string) => new URL(path, siteUrl).href
