// Shared by ProcessContent (HTML) and the Markdown representation of
// /process. Plain strings only: no inline markup is parsed here.

export const intro =
  'Agents write code fast. The rest is my job: deciding what gets built, checking what comes back, and building the checks that catch what a quick review would miss.'

export type ProcessSection = {
  title: string
  paragraphs: string[]
  // excerpts from this site’s AGENTS.md, rendered as blockquotes
  quotes?: string[]
  closing?: string
}

export const sections: ProcessSection[] = [
  {
    title: 'The loop',
    paragraphs: [
      'Every change starts as a plan, not code. The agent reads the codebase, proposes an approach, and asks clarifying questions; I decide what gets built and what gets cut.',
      'Then the agent implements in small, reviewable steps. I read the diff, run it, and check it in the browser or the terminal before anything is committed. Nothing ships just because an agent says it is done.',
    ],
  },
  {
    title: 'Guardrails, not trust',
    paragraphs: [
      'Agents write plausible code quickly, so the real work is building checks that catch the implausible parts mechanically. On this site that means Playwright smoke tests, axe accessibility checks on every page in both themes, and lint rules that reject any color or type style outside the design system.',
      'For a refactor meant to change nothing visible, I prove it: build before and after, then diff the emitted CSS and HTML byte for byte. That diff once caught raw markup leaking into a meta tag after lint, the type checker, and the full test suite had all passed.',
      'Across my other projects the same idea takes other forms: cross-tenant database tests, test suites that refuse to run against a production database, and pre-commit hooks that block any warning.',
    ],
  },
  {
    title: 'Teaching the agents',
    paragraphs: [
      'Every repo I work in has an AGENTS.md: the conventions, the commands, and above all the decisions, each with its reason. An agent that knows why something is the way it is will not quietly undo it. A few excerpts from this site’s file:',
    ],
    quotes: [
      'The build runs Panda’s code generation itself, and must keep doing so. A restored build cache can skip the install step entirely, and then the generated styles do not exist at build time. This once shipped as a red production deploy.',
      'The neutral themes deliberately disagree on hue: light is warm, dark is cool. Do not warm dark mode up to match light. It was tried at several chromas, and every warm value that was visible at all turned the charcoal brown.',
      'Never use em dashes in UI copy, meaning anything a visitor reads. Use commas, periods, colons, semicolons, or parentheses instead.',
    ],
    closing:
      'When an agent gets something wrong, the fix usually lands in two places: the code, and the line in AGENTS.md that keeps it from happening again.',
  },
  {
    title: 'Tools',
    paragraphs: [
      'I always have Chrome, Zed, and Ghostty open while I work, with Claude Code, Amp, and Delta as my preferred coding agents.',
    ],
  },
]
