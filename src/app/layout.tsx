import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dexatomes.com'),
  title: { default: 'Dex Atomes LLC — Build · Learn · Innovate', template: '%s | Dex Atomes' },
  description: 'Digital solutions built for the future. Web, mobile, robotics, engineering education. Orlando, FL.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased bg-white text-slate-800">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
