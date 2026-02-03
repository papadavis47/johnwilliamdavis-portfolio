import type { Metadata } from 'next'
import OtherInterestsContent from './OtherInterestsContent'

export const metadata: Metadata = {
  title: 'Other Interests | John William Davis',
  description:
    "John William Davis's other interests including reading and trail running.",
}

export default function OtherInterestsPage() {
  return <OtherInterestsContent />
}
