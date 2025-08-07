import { raleway } from './fonts'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John William Davis - Portfolio',
  description: 'Porfolio website for John William Davis - Software Engineer',
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body>{children}</body>
    </html>
  )
}
