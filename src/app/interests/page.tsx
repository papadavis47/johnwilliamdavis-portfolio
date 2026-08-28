import type { Metadata } from 'next'
import InterestsContent from './InterestsContent'

export const metadata: Metadata = {
  title: 'Interests',
  description:
    "John William Davis's interests including reading and trail running.",
}

export default function InterestsPage() {
  return <InterestsContent />
}
