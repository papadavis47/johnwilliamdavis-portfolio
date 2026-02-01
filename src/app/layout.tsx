import { raleway } from './fonts'
import { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipToContent from '@/components/SkipToContent'
import PageTransition from '@/components/PageTransition'
import { css } from '../../styled-system/css'

export const metadata: Metadata = {
  metadataBase: new URL('https://johnwilliamdavis.dev'),
  title: {
    template: '%s | John William Davis',
    default: 'John William Davis | Developer Portfolio',
  },
  description: 'Portfolio website for John William Davis - Software Engineer',
  openGraph: {
    title: 'John William Davis | Developer Portfolio',
    description: 'Portfolio website for John William Davis - Software Engineer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John William Davis | Developer Portfolio',
    description: 'Portfolio website for John William Davis - Software Engineer',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className} suppressHydrationWarning>
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
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
