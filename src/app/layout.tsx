import { raleway } from './fonts'
import { Metadata } from 'next'
import './globals.css'

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
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
