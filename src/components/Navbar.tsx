'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

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

  // Presentation only: the bar is transparent over the homepage hero and
  // solidifies once the user leaves the first screen.
  const overlay = path === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = !overlay || scrolled || open

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        solid
          ? 'bg-[#04070f]/90 backdrop-blur-xl border-b border-white/[0.07]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/logo-dark.png"
            alt="Dex Atomes LLC"
            width={180}
            height={50}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.label}
              href={l.href}
              data-active={path === l.href}
              className={`da-navlink text-[12px] font-medium tracking-[0.06em] uppercase transition-colors ${
                path === l.href ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 border border-white/20 hover:border-[#3d7bff] hover:bg-[#3d7bff]/10 text-white text-[12px] font-semibold tracking-[0.06em] uppercase px-5 py-2.5 rounded-full transition-all"
          >
            Get in Touch <span className="text-sm">→</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#04070f] border-t border-white/[0.07] px-5 py-4">
          {links.map(l => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium tracking-wide border-b border-white/[0.05] last:border-0 ${
                path === l.href ? 'text-[#3d7bff]' : 'text-slate-300'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center bg-[#1a3ab5] hover:bg-[#2348c7] text-white font-semibold py-3 rounded-full text-sm transition-colors"
          >
            Get in Touch →
          </Link>
        </div>
      )}
    </nav>
  )
}
