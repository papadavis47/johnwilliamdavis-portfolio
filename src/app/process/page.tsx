import { pageMetadata } from '@/design-system/site'
import ProcessContent from './ProcessContent'

export const metadata = pageMetadata({
  title: 'Process',
  description:
    'How John William Davis builds software with coding agents: plan first, small reviewed steps, mechanical guardrails, and an AGENTS.md in every repo.',
  path: '/process',
})

export default function ProcessPage() {
  return <ProcessContent />
}
