import { IBM_Plex_Sans } from 'next/font/google'
import { IBM_Plex_Mono } from 'next/font/google'
import { Fraunces } from 'next/font/google'

export const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-plex-sans',
})

// Not preloaded: @font-face is lazy, so no bytes load until something renders
// in the `mono` token. Wired ahead of first use on purpose.
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
