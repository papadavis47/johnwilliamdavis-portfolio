import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


* {
    margin: 0;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

a {
  text-decoration: none;
}

html, body {
  height: 100%;
}

body{
  min-height:100%;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: 'Abril Fatface', cursive;
}

/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}

`;

export default GlobalStyles;
