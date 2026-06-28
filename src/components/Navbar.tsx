'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '#services' },
  { label: 'Store', href: '#store' },
  { label: 'DexusLab', href: '#dexuslab' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-sm'
          : 'bg-white/60 backdrop-blur-xl'
      } border-b border-slate-200/60`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md group-hover:bg-blue-500/30 transition-all" />
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg p-1.5">
              <span className="font-extrabold text-white text-sm tracking-wider">DX</span>
            </div>
          </div>
          <span className="font-bold text-[#0A1628] text-sm tracking-tight">DEX ATOMES LLC</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="hidden md:block">
            <Link
              href="#contact"
              className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
            >
              Get Started →
            </Link>
          </motion.div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#0A1628]"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200/60 px-6 py-6">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center bg-blue-600 text-white font-semibold py-3 rounded-xl"
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
