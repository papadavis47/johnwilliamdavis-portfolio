import { projects } from '@/app/projects/projects'

// Shared by the hero (HTML) and the Markdown representation of `/`.

// The thesis stands alone; the projects that back it up follow. Fused into one
// paragraph, the thesis reads as a lead-in to the list rather than a claim.
export const heroParagraphs = [
  'I care most about building software that adds health and happiness to people’s lives.',
  'My projects include a legacy vault for parents, a guilt-free eating tracker, and terminal tools for training and focus.',
  'Things are shifting fast in the software industry, most of all toward agentic engineering. Adapting quickly is my main skill; lately that means getting real leverage from agents.',
]

const featuredSlugs = ['iwantyoutoknow', 'mountains', 'mija']
export const featured = projects.filter((project) =>
  featuredSlugs.includes(project.slug),
)
