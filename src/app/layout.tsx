import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const font = Space_Grotesk({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dexatomes.com'),
  title: { default: 'Dex Atomes LLC', template: '%s — Dex Atomes' },
  description: 'Technology. Education. Innovation. Software, robotics, IT consulting & engineering education.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body className="antialiased bg-[#0c1222] text-white min-h-screen">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
