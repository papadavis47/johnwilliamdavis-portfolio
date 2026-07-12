import { defineConfig, defineRecipe } from '@pandacss/dev'

const button = defineRecipe({
  className: 'button',
  description: 'Primary call-to-action control',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2',
    fontWeight: '500',
    borderRadius: 'control',
    border: '1px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    transition: 'background-color 200ms, border-color 200ms, color 200ms',
  },
  variants: {
    visual: {
      solid: {
        bg: 'accent.emphasis',
        borderColor: 'accent.emphasis',
        color: 'accent.fg',
        // Deepen on hover in both themes; a lighter fill would sink white text.
        _hover: {
          bg: { base: 'accent.700', _dark: 'accent.600' },
          borderColor: { base: 'accent.700', _dark: 'accent.600' },
        },
      },
      outline: {
        bg: 'transparent',
        borderColor: 'accent',
        color: 'accent',
        _hover: {
          bg: 'accent.emphasis',
          borderColor: 'accent.emphasis',
          color: 'accent.fg',
        },
      },
    },
    size: {
      sm: { px: '5', py: '2.5', fontSize: 'sm' },
      md: { px: '6', py: '3', fontSize: 'md' },
    },
  },
  defaultVariants: { visual: 'solid', size: 'md' },
})

const card = defineRecipe({
  className: 'card',
  description: 'Bordered surface panel',
  base: {
    bg: 'surface',
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 'card',
    p: { base: '6', md: '8' },
  },
  variants: {
    interactive: {
      true: {
        transition: 'border-color 200ms, transform 200ms, box-shadow 200ms',
        _hover: {
          borderColor: 'accent/40',
          transform: 'translateY(-4px)',
          boxShadow: 'hover',
        },
      },
    },
  },
})

const tag = defineRecipe({
  className: 'tag',
  description: 'Small metadata pill',
  base: {
    display: 'inline-block',
    px: '3',
    py: '1',
    fontSize: 'xs',
    fontWeight: '500',
    color: 'accent',
    bg: 'accent.subtle',
    borderRadius: 'tag',
    whiteSpace: 'nowrap',
  },
})

const link = defineRecipe({
  className: 'link',
  description: 'Inline text link',
  base: {
    color: 'accent',
    textDecoration: 'underline',
    textDecorationColor: 'accent/40',
    textUnderlineOffset: '3px',
    transition: 'color 200ms, text-decoration-color 200ms',
    _hover: {
      color: 'accent.hover',
      textDecorationColor: 'accent.hover',
    },
  },
})

export default defineConfig({
  preflight: true,

  include: ['./src/**/*.{ts,tsx,js,jsx}'],

  exclude: [],

  globalCss: {
    html: {
      fontFamily: 'body',
    },
  },

  theme: {
    extend: {
      recipes: { button, card, tag, link },
      textStyles: {
        display: {
          description: 'Hero title',
          value: {
            fontFamily: 'heading',
            fontWeight: '700',
            fontSize: { base: '4xl', md: '5xl' },
            lineHeight: '1.1',
            letterSpacing: '-0.02em',
          },
        },
        h1: {
          description: 'Page title',
          value: {
            fontFamily: 'heading',
            fontWeight: '700',
            fontSize: { base: '3xl', md: '4xl' },
            lineHeight: '1.2',
            letterSpacing: '-0.015em',
          },
        },
        h2: {
          description: 'Section heading',
          value: {
            fontFamily: 'heading',
            fontWeight: '700',
            fontSize: '2xl',
            lineHeight: '1.3',
            letterSpacing: '-0.01em',
          },
        },
        h3: {
          description: 'Subsection heading',
          value: {
            fontFamily: 'heading',
            fontWeight: '700',
            fontSize: 'xl',
            lineHeight: '1.4',
          },
        },
        subtitle: {
          description: 'Hero subtitle / lede',
          value: {
            fontFamily: 'heading',
            fontWeight: '400',
            fontSize: { base: 'xl', md: '2xl' },
            lineHeight: '1.4',
          },
        },
        prose: {
          description: 'Standard body/prose paragraph text',
          value: {
            fontSize: 'lg',
            lineHeight: '1.75',
          },
        },
        body: {
          description: 'Default UI text',
          value: {
            fontSize: 'md',
            lineHeight: '1.6',
          },
        },
        small: {
          description: 'Secondary/supporting text',
          value: {
            fontSize: 'sm',
            lineHeight: '1.5',
          },
        },
        caption: {
          description: 'Labels, tags, metadata',
          value: {
            fontSize: 'xs',
            lineHeight: '1.4',
            letterSpacing: '0.02em',
          },
        },
      },
      tokens: {
        fonts: {
          body: { value: 'var(--font-raleway), system-ui, sans-serif' },
          heading: { value: 'var(--font-merriweather), Georgia, serif' },
        },
        colors: {
          // Cool, indigo-tinted neutral ramp.
          neutral: {
            50: { value: 'oklch(0.955 0.004 262)' },
            100: { value: 'oklch(0.965 0.006 262)' },
            200: { value: 'oklch(0.925 0.008 262)' },
            300: { value: 'oklch(0.87 0.010 262)' },
            400: { value: 'oklch(0.71 0.014 262)' },
            500: { value: 'oklch(0.56 0.016 262)' },
            600: { value: 'oklch(0.46 0.016 262)' },
            700: { value: 'oklch(0.38 0.016 262)' },
            800: { value: 'oklch(0.30 0.015 262)' },
            900: { value: 'oklch(0.24 0.014 262)' },
            950: { value: 'oklch(0.19 0.013 262)' },
          },
          // Every step shares hue 272 — change the hue to restyle the whole site.
          accent: {
            50: { value: 'oklch(0.962 0.018 272)' },
            100: { value: 'oklch(0.93 0.034 272)' },
            200: { value: 'oklch(0.87 0.065 272)' },
            300: { value: 'oklch(0.785 0.115 272)' },
            400: { value: 'oklch(0.673 0.182 272)' },
            500: { value: 'oklch(0.585 0.233 272)' },
            600: { value: 'oklch(0.511 0.245 272)' },
            700: { value: 'oklch(0.457 0.222 272)' },
            800: { value: 'oklch(0.398 0.180 272)' },
            900: { value: 'oklch(0.359 0.140 272)' },
            950: { value: 'oklch(0.257 0.090 272)' },
          },
        },
        sizes: {
          content: { value: '44rem' },
          contentWide: { value: '56rem' },
          // Sticky header height. The mobile drawer and its scrim hang off this,
          // so they always meet the header's bottom edge exactly.
          navHeight: { value: '5rem' },
        },
      },
      semanticTokens: {
        colors: {
          // Dark mode sits one ramp step lighter than the steps' names suggest
          // (bg=900, surface=800, border=700): feedback was that 950 read too
          // dark, and 900/800 can't be lightened in place — 900 is also light
          // text. Light bg is softened via the 50 step itself; surface drops
          // off pure white for the same reason.
          bg: {
            DEFAULT: {
              value: {
                base: '{colors.neutral.50}',
                _dark: '{colors.neutral.900}',
              },
            },
          },
          surface: {
            DEFAULT: {
              value: {
                base: 'oklch(0.988 0.004 262)',
                _dark: '{colors.neutral.800}',
              },
            },
          },
          text: {
            DEFAULT: {
              value: {
                base: '{colors.neutral.900}',
                _dark: '{colors.neutral.200}',
              },
            },
            muted: {
              value: {
                base: '{colors.neutral.600}',
                _dark: '{colors.neutral.400}',
              },
            },
          },
          border: {
            DEFAULT: {
              // base is 300, not 200: the cream bg (L 0.955) sits too close to
              // 200 (0.925) for a hairline to read; 200 can't darken in place —
              // it's also dark-mode text.
              value: {
                base: '{colors.neutral.300}',
                _dark: '{colors.neutral.700}',
              },
            },
          },
          accent: {
            DEFAULT: {
              value: {
                base: '{colors.accent.600}',
                _dark: '{colors.accent.300}',
              },
            },
            hover: {
              value: {
                base: '{colors.accent.700}',
                _dark: '{colors.accent.200}',
              },
            },
            emphasis: {
              value: {
                base: '{colors.accent.600}',
                _dark: '{colors.accent.500}',
              },
            },
            fg: { value: 'white' },
            subtle: {
              value: {
                base: '{colors.accent.100}',
                _dark: '{colors.accent.950}',
              },
            },
          },
        },
        shadows: {
          hover: {
            value: {
              base: '0 4px 16px oklch(0 0 0 / 0.08)',
              _dark: '0 4px 16px oklch(0 0 0 / 0.45)',
            },
          },
          lifted: {
            value: {
              base: '0 8px 20px oklch(0 0 0 / 0.12)',
              _dark: '0 8px 20px oklch(0 0 0 / 0.55)',
            },
          },
        },
        radii: {
          card: { value: '{radii.xl}' },
          control: { value: '{radii.lg}' },
          tag: { value: '{radii.md}' },
        },
      },
    },
  },

  outdir: 'styled-system',
})
