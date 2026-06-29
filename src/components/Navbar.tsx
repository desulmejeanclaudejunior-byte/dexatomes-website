'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Bookstore', href: '/store' },
  { label: 'Resources', href: '/courses' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const path = usePathname()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-[#0a1033]/95 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="Dex Atomes LLC" width={160} height={40} className="h-9 w-auto" priority />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-lg transition-all ${
                path === l.href ? 'text-white bg-white/10' : 'text-slate-400 hover:text-white'
              }`}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex btn-brand text-[13px] px-5 py-2 rounded-lg">
            Get in Touch
          </Link>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white" aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a1033] border-t border-white/[0.05] px-5 py-4">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`block py-2.5 text-sm font-medium ${path === l.href ? 'text-white' : 'text-slate-400'}`}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="block mt-3 text-center btn-brand py-2.5 rounded-lg text-sm">
            Get in Touch
          </Link>
        </div>
      )}
    </nav>
  )
}
