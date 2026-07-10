import { Raleway } from 'next/font/google'
import { Merriweather } from 'next/font/google'

export const raleway = Raleway({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-raleway',
})

export const merriweather = Merriweather({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-merriweather',
})
