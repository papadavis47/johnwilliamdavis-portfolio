import { pageMetadata } from '@/design-system/site'
import InterestsContent from './InterestsContent'

export const metadata = pageMetadata({
  title: 'Interests',
  description:
    "John William Davis's interests including reading and trail running.",
  path: '/interests',
})

export default function InterestsPage() {
  return <InterestsContent />
}
