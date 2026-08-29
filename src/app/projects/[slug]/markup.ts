// The inline markup grammar shared by every copy field in projects.ts:
// `backticks` for code, _underscores_ for titles, and [text](href) for links.
// ProjectContent renders these spans; metadata strips them back to plain text.
export const markupSpan = /(`[^`]+`|_[^_]+_|\[[^\]]+\]\([^)]+\))/
export const linkSpan = /^\[([^\]]+)\]\(([^)]+)\)$/

// Plain-text form for places that take a bare string, such as <meta> tags.
// Blank lines are paragraph breaks in the rendered copy, so they flatten to a
// space rather than disappearing.
export function stripMarkup(text: string) {
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\s*\n\n\s*/g, ' ')
}
