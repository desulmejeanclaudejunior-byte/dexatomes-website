'use client'

import { useState } from 'react'
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
  const path = usePathname()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-5 h-[72px] flex items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image src="/logo.png" alt="Dex Atomes LLC" width={180} height={50} className="h-14 w-auto" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.label} href={l.href}
              className={`text-[13px] font-medium transition-colors ${
                path === l.href
                  ? 'text-[#1a3ab5] border-b-2 border-[#1a3ab5] pb-1'
                  : 'text-slate-600 hover:text-[#1a3ab5]'
              }`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex items-center gap-2 bg-[#1a3ab5] hover:bg-[#152d91] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg transition-colors">
            Get in Touch <span className="text-sm">→</span>
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-slate-800" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-5 py-4 shadow-lg">
          {links.map(l => (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium ${path === l.href ? 'text-[#1a3ab5]' : 'text-slate-600'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block mt-3 text-center bg-[#1a3ab5] text-white font-semibold py-2.5 rounded-lg text-sm">
            Get in Touch →
          </Link>
        </div>
      )}
    </nav>
  )
}
