import { absoluteUrl } from '@/design-system/site'
import { books } from './books'

// Reading, Writing and TrailRunning hold their prose as JSX, so it is mirrored
// here; the agents e2e spec fails if the two drift.
export function interestsMarkdown() {
  return [
    '# Interests',
    '## Reading',
    'I love reading books on diverse subjects. These are some of my recent favorites:',
    ...books.map((book) =>
      [
        `### _${book.title}_ by ${book.author}`,
        `Summary: ${book.summary}`,
        `Why I read it: ${book.takeaway}`,
      ].join('\n\n'),
    ),
    '## Writing',
    'Writing helps me clarify what I actually think. The process of putting ideas into words, whether on paper or on a screen, tends to reveal whether I really know something. Writing, while difficult to do well, is like exercise - pushups for the brain.',
    'I write about software, agentic engineering, and other topics that interest me on my blog.',
    'Blog: [Comfortable Feeling Dumb](https://www.comfortablefeelingdumb.com/)',
    '## Trail Running',
    'Trail running is my way of disconnecting from screens and reconnecting with nature and with my own body. On a beautiful trail, the noise of a complicated world quiets. There are few things more core to who we humans are as a species than moving on foot across a landscape.',
    `My love for the mountains inspired [Mountains](${absoluteUrl('/projects/mountains')}), a terminal user interface for tracking runs and exploring trail data.`,
    'I am currently working on an early-stage [web version](https://github.com/papadavis47/mountains-web) of Mountains.',
  ].join('\n\n')
}
