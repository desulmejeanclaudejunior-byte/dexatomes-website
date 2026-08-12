'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

/* Destinations are unchanged from the original navigation. */
const links = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Bookstore', href: '/store' },
  { label: 'Portfolio', href: '/services' },
  { label: 'Resources', href: '/courses' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const path = usePathname()

  /* The bar rides over the homepage hero, then solidifies past the fold. */
  const overlay = path === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Lock body scroll while the mobile drawer is open. */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const solid = !overlay || scrolled

  /* Services and Portfolio share the /services destination, so match on the
     first entry only — otherwise two items read as active at once. */
  const activeIndex = links.findIndex(l => l.href === path)

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          solid
            ? 'bg-[rgba(8,9,12,0.82)] backdrop-blur-xl border-b border-[var(--hair)]'
            : 'bg-gradient-to-b from-black/50 to-transparent border-b border-transparent'
        }`}
      >
        <div
          className={`max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between transition-all duration-500 ${
            solid ? 'h-[68px]' : 'h-[86px]'
          }`}
        >
          <Link href="/" className="shrink-0" aria-label="Dex Atomes — Home">
            <Image
              src="/logo-dark.png"
              alt="Dex Atomes LLC"
              width={180}
              height={50}
              priority
              className={`w-auto transition-all duration-500 ${solid ? 'h-8' : 'h-10'}`}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9" aria-label="Primary">
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                data-active={i === activeIndex}
                className={`navlink mono text-[11px] tracking-[0.18em] uppercase transition-colors ${
                  i === activeIndex ? 'text-[var(--ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn btn-ghost !py-3 !px-6 !text-[10px]"
            >
              Get in Touch
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-[var(--ink)] p-1"
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — a full-height panel rather than a shrunken desktop menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/70" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-[84vw] max-w-[360px] bg-[var(--surface)] border-l border-[var(--hair)] px-8 pt-28 pb-10 flex flex-col transition-transform duration-500 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="flex flex-col" aria-label="Mobile">
            {links.map((l, i) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-4 hair-b"
              >
                <span className="mono text-[10px] text-[var(--faint)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className={`text-[17px] tracking-tight ${
                    i === activeIndex ? 'text-[var(--blue)]' : 'text-[var(--ink)]'
                  }`}
                >
                  {l.label}
                </span>
              </Link>
            ))}
          </nav>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn btn-solid justify-center mt-8"
          >
            Get in Touch
          </Link>

          <div className="mt-auto pt-8 mono text-[11px] text-[var(--faint)] space-y-1.5">
            <span className="block">support@dexuslab.com</span>
            <span className="block">Orlando, Florida</span>
          </div>
        </div>
      </div>
    </>
  )
}
