import { defineConfig } from '@pandacss/dev'

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
            50: { value: 'oklch(0.985 0.004 262)' },
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
          indigo: {
            light: { value: '#4338CA' },
            dark: { value: '#818CF8' },
          },
          teal: {
            light: { value: '#0F766E' },
            dark: { value: '#2DD4BF' },
          },
          amber: {
            light: { value: '#D97706' },
            dark: { value: '#FBBF24' },
          },
        },
        sizes: {
          content: { value: '44rem' },
          contentWide: { value: '56rem' },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: {
                base: '{colors.neutral.50}',
                _dark: '{colors.neutral.950}',
              },
            },
          },
          surface: {
            DEFAULT: {
              value: { base: 'white', _dark: '{colors.neutral.900}' },
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
              value: {
                base: '{colors.neutral.200}',
                _dark: '{colors.neutral.800}',
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
          // Legacy — deleted once every route is migrated.
          muted: {
            DEFAULT: {
              value: { base: '#55524B', _dark: '#A9B4C7' },
            },
          },
          primary: {
            DEFAULT: {
              value: {
                base: '{colors.indigo.light}',
                _dark: '{colors.indigo.dark}',
              },
            },
          },
          secondary: {
            DEFAULT: {
              value: {
                base: '{colors.teal.light}',
                _dark: '{colors.teal.dark}',
              },
            },
          },
          highlight: {
            DEFAULT: {
              value: {
                base: '{colors.amber.light}',
                _dark: '{colors.amber.dark}',
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
