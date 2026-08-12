import type { Metadata } from 'next'
import { Instrument_Serif, Manrope } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* Display face — used large and sparingly, with italic for accented words.
   Gives the headlines drawn character rather than a default UI face. */
const display = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

/* Reading and interface face — humanist, warmer than a default grotesque. */
const sans = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dexatomes.com'),
  title: { default: 'Dex Atomes LLC — Build · Learn · Innovate', template: '%s | Dex Atomes' },
  description: 'Digital solutions built for the future. Web, mobile, robotics, engineering education. Orlando, FL.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className={`${sans.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
