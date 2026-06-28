import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dexatomes.com'),
  title: { default: 'Dex Atomes LLC — Technology. Education. Innovation.', template: '%s | Dex Atomes' },
  description: 'Software development, robotics, IT consulting, and engineering education. Orlando, Florida.',
  openGraph: { title: 'Dex Atomes LLC', description: 'Technology. Education. Innovation.', url: 'https://dexatomes.com', siteName: 'Dex Atomes LLC', type: 'website' },
  twitter: { card: 'summary_large_image', site: '@DexAtomes' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased bg-white text-slate-800">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
