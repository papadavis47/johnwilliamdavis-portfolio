import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'John William Davis | TypeScript, Rust & Python Developer',
  description:
    'Portfolio of John William Davis, a software developer specializing in TypeScript, Rust, and Python.',
}

export default function HomePage() {
  return <HomeContent />
}
