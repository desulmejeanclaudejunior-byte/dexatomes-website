import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dexatomes.com'),
  title: {
    default: 'Dex Atomes LLC — Technology. Education. Innovation.',
    template: '%s | Dex Atomes LLC',
  },
  description:
    'Développement web & mobile, robotique, cybersécurité, DexusLab et livres éducatifs. Orlando, Florida.',
  keywords: [
    'Dex Atomes',
    'DexusLab',
    'robotique',
    'Arduino',
    'développement web',
    'mobile app',
    'programmeur Orlando',
    'ebook robotique',
    'Jean-Claude Desulme',
  ],
  authors: [
    { name: 'Jean-Claude Junior Desulme', url: 'https://dexatomes.com/about' },
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    alternateLocale: 'en_US',
    url: 'https://dexatomes.com',
    siteName: 'Dex Atomes LLC',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@DexAtomes',
    creator: '@DexAtomes',
  },
  robots: { index: true, follow: true },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dex Atomes LLC',
  url: 'https://dexatomes.com',
  founder: {
    '@type': 'Person',
    name: 'Jean-Claude Junior Desulme',
    jobTitle: 'Founder & CEO',
    alumniOf: 'University of Central Florida',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Orlando',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  sameAs: [
    'https://facebook.com/DexAtomes',
    'https://instagram.com/DexAtomes',
    'https://tiktok.com/@DexAtomes',
    'https://linkedin.com/company/DexAtomes',
    'https://youtube.com/@DexAtomes',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0A1628] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
