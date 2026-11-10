import { intro, sections } from './content'

export function workflowMarkdown() {
  return [
    '# How I build',
    intro,
    ...sections.flatMap(({ title, paragraphs, quotes = [], closing }) => [
      `## ${title}`,
      ...paragraphs,
      ...quotes.map((quote) => `> ${quote}`),
      ...(closing ? [closing] : []),
    ]),
  ].join('\n\n')
}
