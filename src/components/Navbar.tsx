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
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0c1222]/90 backdrop-blur-xl border-b border-[#00E5FF]/[0.06]">
      <div className="max-w-7xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/"><Logo size="sm" /></Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-all ${
                path === l.href ? 'text-[#00E5FF] bg-[#00E5FF]/[0.08]' : 'text-slate-400 hover:text-[#00E5FF] hover:bg-[#00E5FF]/[0.04]'
              }`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn-accent text-[13px] px-4 py-1.5 rounded-lg">
            Get Started
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0c1222] border-t border-[#00E5FF]/[0.06] px-5 py-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${path === l.href ? 'text-[#00E5FF]' : 'text-slate-400'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block mt-3 text-center btn-accent py-2 rounded-lg text-sm">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
