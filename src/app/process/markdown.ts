import { intro, sections } from './content'

export function processMarkdown() {
  return [
    '# How I build',
    intro,
    ...sections.flatMap(({ title, aside, paragraphs, quotes = [], closing }) => [
      aside ? `## ${title} ${aside}` : `## ${title}`,
      ...paragraphs,
      ...quotes.map((quote) => `> ${quote}`),
      ...(closing ? [closing] : []),
    ]),
  ].join('\n\n')
}
