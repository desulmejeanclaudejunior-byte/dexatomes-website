import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dexatomes.com'),
  title: 'Dex Atomes LLC — Technology, Education & Innovation',
  description:
    'Software development, robotics consulting, and engineering education. Based in Orlando, Florida.',
  openGraph: {
    title: 'Dex Atomes LLC',
    description: 'Technology. Education. Innovation.',
    url: 'https://dexatomes.com',
    siteName: 'Dex Atomes LLC',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', site: '@DexAtomes' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased text-slate-800 bg-white">{children}</body>
    </html>
  )
}
