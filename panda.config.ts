import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,

  include: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/app/**/*.{ts,tsx,js,jsx}",
  ],

  exclude: [],

  conditions: {
    dark: ".dark &",
  },

  theme: {
    extend: {
      tokens: {
        colors: {
          neutral: {
            50: { value: "#FAF9F7" },
            100: { value: "#F5F3EF" },
            200: { value: "#E8E5DE" },
            300: { value: "#D4D0C6" },
            400: { value: "#A9A498" },
            500: { value: "#7A756A" },
            600: { value: "#55524B" },
            700: { value: "#3D3A35" },
            800: { value: "#252320" },
            900: { value: "#141412" },
            950: { value: "#0A0A09" },
          },
          ink: {
            50: { value: "#E7ECF5" },
            100: { value: "#D0D9E8" },
            200: { value: "#A9B4C7" },
            300: { value: "#7A8BA6" },
            400: { value: "#4E6285" },
            500: { value: "#334766" },
            600: { value: "#243550" },
            700: { value: "#1A283D" },
            800: { value: "#121B27" },
            900: { value: "#0B0F14" },
            950: { value: "#050709" },
          },
          indigo: {
            light: { value: "#4338CA" },
            dark: { value: "#818CF8" },
          },
          teal: {
            light: { value: "#0F766E" },
            dark: { value: "#2DD4BF" },
          },
          amber: {
            light: { value: "#D97706" },
            dark: { value: "#FBBF24" },
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            DEFAULT: {
              value: { base: "#FBFAF7", _dark: "#0B0F14" },
            },
          },
          surface: {
            DEFAULT: {
              value: { base: "#FFFFFF", _dark: "#121B27" },
            },
          },
          text: {
            DEFAULT: {
              value: { base: "#141412", _dark: "#E7ECF5" },
            },
          },
          muted: {
            DEFAULT: {
              value: { base: "#55524B", _dark: "#A9B4C7" },
            },
          },
          primary: {
            DEFAULT: {
              value: { base: "{colors.indigo.light}", _dark: "{colors.indigo.dark}" },
            },
          },
          secondary: {
            DEFAULT: {
              value: { base: "{colors.teal.light}", _dark: "{colors.teal.dark}" },
            },
          },
          highlight: {
            DEFAULT: {
              value: { base: "{colors.amber.light}", _dark: "{colors.amber.dark}" },
            },
          },
        },
      },
    },
  },

  outdir: "styled-system",
});
