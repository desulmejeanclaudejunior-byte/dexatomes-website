'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

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
  const path = usePathname()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0c1222]/90 backdrop-blur-xl border-b border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/"><Logo size="sm" /></Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-all ${
                path === l.href ? 'text-blue-400 bg-blue-500/10' : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
              }`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-semibold px-4 py-1.5 rounded-lg transition-colors shadow-sm shadow-blue-600/20">
            Get Started
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0c1222] border-t border-white/[0.04] px-5 py-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${path === l.href ? 'text-blue-400' : 'text-slate-400'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block mt-3 text-center bg-blue-600 text-white font-semibold py-2 rounded-lg text-sm">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
