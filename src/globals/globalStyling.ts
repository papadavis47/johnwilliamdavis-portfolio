import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  // Global styles from Josh Comeau
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
});
