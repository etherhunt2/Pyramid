import './globals.css'
import type { Metadata } from 'next'
import { Inter, Barlow } from 'next/font/google'
import { Providers } from './providers'

// Load the Barlow font for the entire app
const barlow = Barlow({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
})

// Define default metadata for the app
export const metadata: Metadata = {
  title: {
    default: 'STELIOS - Talent, Tech & Training Solutions',
    template: '%s | STELIOS',
  },
  description: 'Supercharge your future with innovative talent, technology and training solutions. We transform business challenges into opportunities.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={barlow.variable}>
      <head>
        {/* Add Swiper CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
      </head>
      <body>
        <Providers>{children}</Providers>
        
        {/* Add Swiper and other scripts */}
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
      </body>
    </html>
  )
}