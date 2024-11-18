import { raleway } from './fonts'
import { Metadata } from 'next'
import '@pigment-css/react/styles.css'
import { globalCss } from '@pigment-css/react'

export const metadata: Metadata = {
  title: 'John William Davis - Portfolio',
  description: 'Porfolio website for John William Davis - Software Engineer',
}

// Global styles from Josh Comeau
globalCss`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  *::before {
    box-sizing: border-box;
  }

  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  html, body {
    height: 100%;
  }

  body {
    min-height: 100%;
    line-height: 1.5;
    WebkitFontSmoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word,
  }
  #root, #__next {
    isolation: isolate;
  }
`

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  )
}
