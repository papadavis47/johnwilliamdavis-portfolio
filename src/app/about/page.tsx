import { pageMetadata } from '@/design-system/site'
import AboutContent from './AboutContent'

export const metadata = pageMetadata({
  title: 'About',
  description:
    'Learn about John William Davis, a software engineer focused on Rust and TypeScript who also writes Python.',
  path: '/about',
})

export default function AboutPage() {
  return <AboutContent />
}
