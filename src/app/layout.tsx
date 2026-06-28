import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://dexatomes.com'),
  title: {
    default: 'Dex Atomes LLC — Technology, Education & Innovation',
    template: '%s | Dex Atomes LLC',
  },
  description:
    'Software development, robotics consulting, and engineering education. DexusLab learning platform and Robotique Moderne — the 129-page robotics guide.',
  keywords: [
    'Dex Atomes',
    'DexusLab',
    'robotics',
    'Arduino',
    'web development',
    'mobile app',
    'Orlando developer',
    'robotics ebook',
    'Jean-Claude Desulme',
  ],
  authors: [
    { name: 'Jean-Claude Junior Desulme', url: 'https://dexatomes.com' },
  ],
  openGraph: {
    type: 'website',
    url: 'https://dexatomes.com',
    siteName: 'Dex Atomes LLC',
    title: 'Dex Atomes LLC',
    description: 'Where engineers are built.',
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
    <html lang="en" className={jakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="font-[family-name:var(--font-jakarta)] antialiased">
        {children}
      </body>
    </html>
  )
}
