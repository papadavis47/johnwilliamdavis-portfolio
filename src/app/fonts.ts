import { IBM_Plex_Sans } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import { Fraunces } from 'next/font/google'

export const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
})

// Not preloaded: mono renders on most pages (tag pills, home TerminalCard),
// but it's secondary to body/heading text, so keep its @font-face lazy and
// non-render-blocking rather than preloaded.
export const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  preload: false,
  variable: '--font-plex-mono',
})

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
  axes: ['opsz'],
  variable: '--font-fraunces',
})
