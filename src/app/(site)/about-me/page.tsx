import type { Metadata } from 'next'
import AboutMeContent from './AboutMeContent'

export const metadata: Metadata = {
  title: 'About Me | John William Davis',
  description:
    'Learn about John William Davis, a developer passionate about TypeScript, Rust, and Go.',
}

export default function AboutMePage() {
  return <AboutMeContent />
}
