import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about John William Davis, a software engineer focused on Rust and TypeScript who also writes Python.',
}

export default function AboutPage() {
  return <AboutContent />
}
