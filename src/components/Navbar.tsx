'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/store', label: 'Boutique' },
  { href: '/dexuslab', label: 'DexusLab' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A1628]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#0A1628]'
      } border-b border-[#0066CC]/30`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded bg-[#0066CC] font-extrabold text-white text-sm">
            DX
          </div>
          <div className="hidden sm:block">
            <span className="font-extrabold text-white">DEX </span>
            <span className="font-semibold text-[#00AAFF]">ATOMES</span>
            <span className="ml-1 text-xs text-[#94A3B8]">LLC</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#94A3B8] transition-colors hover:text-[#00AAFF]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-[#0066CC] px-5 py-2 text-sm font-bold text-white transition-all hover:bg-[#00AAFF] hover:-translate-y-0.5"
          >
            Réserver →
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#0066CC]/30 bg-[#0A1628] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-semibold text-[#94A3B8] transition-colors hover:text-[#00AAFF]"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-md bg-[#0066CC] px-5 py-3 text-center text-sm font-bold text-white"
            >
              Réserver →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
