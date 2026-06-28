'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="bg-blue-600 rounded-lg w-8 h-8 flex items-center justify-center">
            <span className="text-white font-bold text-xs">DX</span>
          </div>
          <span className={`font-semibold text-sm ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Dex Atomes
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className={`text-sm font-medium transition-colors ${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'}`}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors">
            Get Started
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? 'text-slate-900' : 'text-white'}`} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-5 shadow-lg">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block mt-3 text-center bg-blue-600 text-white font-semibold py-2.5 rounded-lg text-sm">
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
