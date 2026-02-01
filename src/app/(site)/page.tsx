import type { Metadata } from 'next'
import HomeContent from './HomeContent'

export const metadata: Metadata = {
  title: 'John William Davis | TypeScript, Rust & Go Developer',
  description:
    'Portfolio of John William Davis, a software developer specializing in TypeScript, Rust, and Go.',
}

export default function HomePage() {
  return <HomeContent />
}
