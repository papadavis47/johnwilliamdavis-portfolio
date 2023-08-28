import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Template string syntax
  syntax: 'template-literal',

  // JSX flavor
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/components/*.{js,jsx,ts,tsx}', './src/app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // Global styles from Josh Comeau
  globalCss: {
    '*': {
      margin: 0,
      boxSizing: 'border-box',
    },
    '*::before': {
      boxSizing: 'border-box',
    },
    '*::after': {
      boxSizing: 'border-box',
    },
    'a': {
      textDecoration: 'none',
    },
    'html, body': {
      height: '100%',
    },
    'body': {
      minHeight: '100%',
      lineHeight: 1.5,
      WebkitFontSmoothing: 'antialiased',
    },
    'img, picture, video, canvas, svg': {
      display: 'block',
      maxWidth: '100%',
    },
    'input, button, textarea, select': {
      font: 'inherit',
    },
    'p, h1, h2, h3, h4, h5, h6': {
      overflowWrap: 'break-word',
    },
    '#root, #__next': {
      isolation: 'isolate',
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
