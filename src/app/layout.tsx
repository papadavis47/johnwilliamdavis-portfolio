import { plexSans, plexMono, fraunces } from './fonts'
import { Metadata } from 'next'
import './globals.css'
import { MotionProvider } from '@/providers/MotionProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Navigation from '@/layout/Navigation'
import Footer from '@/layout/Footer'
import SkipToContent from '@/layout/SkipToContent'
import PageTransition from '@/layout/PageTransition'
import { css } from 'styled-system/css'
import {
  siteDescription as description,
  siteTitle,
  siteUrl,
} from '@/design-system/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s | John William Davis',
    default: siteTitle,
  },
  description,
  openGraph: {
    title: siteTitle,
    description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          <SkipToContent />
          <div
            className={css({
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              bg: 'bg',
              color: 'text',
              transition: 'background-color 0.3s, color 0.3s',
            })}
          >
            <Navigation />
            <main id="main-content" className={css({ flex: 1 })}>
              <MotionProvider>
                <PageTransition>{children}</PageTransition>
              </MotionProvider>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
