import { projects } from '@/app/projects/projects'

// Shared by the hero (HTML) and the Markdown representation of `/`.

// Identity first (builder: fluent in Rust/TS, reach via agents), then the why
// and the projects behind it, then how the work gets built.
export const heroParagraphs = [
  'I’m a builder. Rust and TypeScript are where I’m fluent, and with coding agents I can build in just about any stack a project calls for.',
  'I care most about software that adds health and happiness to people’s lives. My projects include a legacy vault for parents, a guilt-free eating tracker, and terminal tools for training and focus.',
  'All of my recent projects have been built with the help of coding agents. I set the direction, make the calls, and build the guardrails that keep the output honest: tests, accessibility checks, and written instructions for the agents themselves.',
]

export const workflowLinkLabel = 'How I build with agents →'

const featuredSlugs = ['iwantyoutoknow', 'mountains', 'mija']
export const featured = projects.filter((project) =>
  featuredSlugs.includes(project.slug),
)
