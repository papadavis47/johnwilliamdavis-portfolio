import { emailHref, socialLinks } from '@/design-system/contact'
import {
  absoluteUrl,
  pageMetadata,
  siteDescription,
  siteTitle,
} from '@/design-system/site'
import HomeContent from './HomeContent'

export const metadata = pageMetadata({
  title: { absolute: siteTitle },
  description:
    'Portfolio of John William Davis, a software engineer specializing in TypeScript, Rust, and Python.',
  path: '/',
})

// schema.org Person + WebSite, linked by @id. Only facts the site states: the
// hero's title and languages, the contact links, the site description.
const person = absoluteUrl('/#person')
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': person,
      name: 'John William Davis',
      url: absoluteUrl('/'),
      jobTitle: 'Software Engineer',
      email: emailHref,
      knowsAbout: ['Rust', 'TypeScript', 'Python'],
      sameAs: socialLinks.map(({ href }) => href),
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: absoluteUrl('/'),
      name: 'John William Davis',
      description: siteDescription,
      inLanguage: 'en',
      author: { '@id': person },
      publisher: { '@id': person },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <HomeContent />
    </>
  )
}
