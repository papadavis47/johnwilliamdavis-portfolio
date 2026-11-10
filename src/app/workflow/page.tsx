import { pageMetadata } from '@/design-system/site'
import WorkflowContent from './WorkflowContent'

export const metadata = pageMetadata({
  title: 'Workflow',
  description:
    'How John William Davis builds software with coding agents: plan first, small reviewed steps, mechanical guardrails, and an AGENTS.md in every repo.',
  path: '/workflow',
})

export default function WorkflowPage() {
  return <WorkflowContent />
}
