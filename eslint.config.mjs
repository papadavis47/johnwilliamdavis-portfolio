import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'
import panda from '@pandacss/eslint-plugin'

// Loads panda.config.ts so the rules resolve against the real theme.
const pandaRecommended = await panda.configs.recommended({ configPath: './panda.config.ts' })

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ...pandaRecommended,
    rules: {
      ...pandaRecommended.rules,
      // Opacity modifiers resolve to color-mix(), not var(), so the plugin
      // misreads them as hardcoded. They are tokens; allow each one used.
      '@pandacss/prefer-token': [
        'warn',
        { categories: ['colors'], allow: ['accent/40', 'text.muted/40', 'black/40'] },
      ],
      // AGENTS.md: colors are semantic tokens only, never a raw ramp step.
      // Colors only: radii like `full` (circles) have no semantic equivalent.
      // accent.fg IS semantic, but its value is a literal ('white'), which the
      // plugin misreads as primitive. transparent/black are theme-independent.
      '@pandacss/no-primitive-token': [
        'error',
        { categories: ['colors'], allow: ['accent.fg', 'transparent', 'black'] },
      ],
      // AGENTS.md: typography is textStyle, never inline fontSize/fontWeight.
      '@pandacss/prefer-text-style': 'error',
    },
  },
  {
    ignores: ['.next/**', 'node_modules/**', 'styled-system/**'],
  },
]

export default eslintConfig
