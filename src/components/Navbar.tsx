'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Search } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Courses', href: '/courses' },
  { label: 'Store', href: '/store' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0a0f1e]/95 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <div className="bg-blue-600 rounded-lg w-8 h-8 flex items-center justify-center">
            <span className="text-white font-extrabold text-[11px] tracking-wider">DX</span>
          </div>
          <span className="text-white font-bold text-sm tracking-tight hidden sm:block">DEX ATOMES</span>
        </Link>

        {/* Center nav */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === l.href
                  ? 'text-blue-400 bg-blue-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="text-slate-400 hover:text-white p-2 transition-colors hidden md:block" aria-label="Search">
            <Search size={18} />
          </button>
          <Link href="/contact" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
            Get Started
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-1" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0a0f1e] border-t border-white/[0.06] px-6 py-5">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium transition-colors ${
                pathname === l.href ? 'text-blue-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block mt-4 text-center bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-sm">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
