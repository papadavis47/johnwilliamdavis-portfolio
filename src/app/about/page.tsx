import type { Metadata } from 'next'
import AboutContent from './AboutContent'

export const metadata: Metadata = {
  title: 'About | John William Davis',
  description:
    'Learn about John William Davis, a developer passionate about TypeScript, Rust, and Python.',
}

export default function AboutPage() {
  return <AboutContent />
}
