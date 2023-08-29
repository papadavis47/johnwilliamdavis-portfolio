import { defineConfig } from '@pandacss/dev';
import { globalCss } from '@/globals/globalStyling';

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

  globalCss,

  // The output directory for your css system
  outdir: 'styled-system',
});
