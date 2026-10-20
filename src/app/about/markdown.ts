import { introParagraphs } from './content'
import { skillCategories } from './skill-data'

// The Nala paragraph and the Skills section are JSX in Intro and Skills, so
// they are mirrored here; the agents e2e spec fails if the two drift.
export function aboutMarkdown() {
  return [
    '# About',
    ...introParagraphs,
    'We have a beautiful [golden retriever](https://nala-the-astronaut.netlify.app/) at home, and I spend as much free time as possible outdoors, especially hiking and trail running.',
    '## Skills',
    'I work across the stack: Next.js, Astro, and TanStack on the frontend, with Node, Rust, and Python on the backend and in systems work.',
    "Lately I've been exploring Turso, the embedded SQLite platform, and adopting Panda CSS, a design token system for styling.",
    'I also spend a lot of time with agentic coding tools like Claude Code, Amp, and Delta, learning the new craft of steering AI agents to build software.',
    '## Tech I Know Well',
    ...skillCategories.map(({ title, skills }) =>
      [`### ${title}`, skills.map(({ name }) => `- ${name}`).join('\n')].join(
        '\n\n',
      ),
    ),
  ].join('\n\n')
}
