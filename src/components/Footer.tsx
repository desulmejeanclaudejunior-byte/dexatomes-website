import Link from 'next/link'
import Image from 'next/image'

/**
 * Shared site footer. Every destination here already existed in the project;
 * /privacy and /terms were live routes with no inbound link, so they are
 * surfaced here rather than left orphaned.
 */
const columns = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Products',
    links: [
      { label: 'Bookstore', href: '/store' },
      { label: 'Resources', href: '/courses' },
      { label: 'DexusLab', href: 'https://dexuslab.com', external: true },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="hair-t bg-[var(--bg)]">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-12">
          {/* Identity */}
          <div className="lg:col-span-5">
            <Image
              src="/logo-dark.png"
              alt="Dex Atomes LLC"
              width={160}
              height={42}
              className="h-9 w-auto mb-7"
            />
            <p className="text-[var(--muted)] text-[15px] leading-relaxed max-w-xs mb-8">
              Software, robotics, and engineering education — built in Orlando, delivered worldwide.
            </p>
            <div className="space-y-2.5 mono text-[12px] text-[var(--ink-2)]">
              <a href="mailto:support@dexuslab.com" className="block hover:text-[var(--blue)] transition-colors">
                support@dexuslab.com
              </a>
              <a href="tel:+18632078619" className="block hover:text-[var(--blue)] transition-colors">
                (863) 207-8619
              </a>
              <span className="block text-[var(--faint)]">Orlando, Florida, USA</span>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map(col => (
              <div key={col.title}>
                <p className="mono text-[10px] tracking-[0.22em] uppercase text-[var(--faint)] mb-5">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map(l => (
                    <li key={l.label}>
                      {'external' in l && l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[14px] text-[var(--ink-2)] hover:text-[var(--blue)] transition-colors"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-[14px] text-[var(--ink-2)] hover:text-[var(--blue)] transition-colors"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hair-t mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-4">
          <span className="mono text-[11px] text-[var(--faint)]">
            © 2026 Dex Atomes LLC — All rights reserved.
          </span>
          <span className="mono text-[11px] text-[var(--faint)]">Build · Learn · Innovate</span>
        </div>
      </div>
    </footer>
  )
}
