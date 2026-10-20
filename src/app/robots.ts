import type { MetadataRoute } from 'next'
import { absoluteUrl } from '@/design-system/site'

// Everything is crawlable; this exists to point crawlers at the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: absoluteUrl('/sitemap.xml'),
  }
}
