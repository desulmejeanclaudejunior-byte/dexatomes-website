'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Eye, Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: 'easeOut' as const },
})

export default function HomePage() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    setSent(true)
  }

  return (
    <>
      {/* ═══ HERO — Direct from mockup ═══ */}
      <section className="relative mt-[72px]">
        <div className="relative w-full">
          <Image
            src="/hero-bg.png"
            alt="Dex Atomes — Digital Solutions Built for the Future"
            width={1536}
            height={430}
            className="w-full h-auto"
            priority
          />
          {/* Clickable overlay areas */}
          <Link href="/services" className="absolute left-[4%] bottom-[28%] w-[12%] h-[12%] rounded-xl hover:bg-white/10 transition-colors" aria-label="Explore Services" />
          <Link href="/store" className="absolute left-[18%] bottom-[28%] w-[12%] h-[12%] rounded-xl hover:bg-white/10 transition-colors" aria-label="View Our Work" />
        </div>
      </section>

      {/* ═══ SERVICES — Direct from mockup ═══ */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/services-section.png"
            alt="Our Services — Website Development, Mobile App Development, Bookstore"
            width={1536}
            height={310}
            className="w-full h-auto"
          />
          {/* Clickable service cards */}
          <Link href="/services" className="absolute left-[2%] top-[30%] w-[30%] h-[65%] rounded-2xl hover:bg-blue-600/5 transition-colors" aria-label="Website Development" />
          <Link href="/services" className="absolute left-[35%] top-[30%] w-[30%] h-[65%] rounded-2xl hover:bg-blue-600/5 transition-colors" aria-label="Mobile App Development" />
          <Link href="/store" className="absolute left-[68%] top-[30%] w-[30%] h-[65%] rounded-2xl hover:bg-blue-600/5 transition-colors" aria-label="Bookstore" />
        </div>
      </section>

      {/* ═══ BOOKS ROW — Direct from mockup ═══ */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/books-section.png"
            alt="Featured Books — Engineering Library"
            width={1536}
            height={135}
            className="w-full h-auto"
          />
          <Link href="/store" className="absolute right-[2%] top-[15%] w-[18%] h-[70%] rounded-xl hover:bg-blue-600/10 transition-colors" aria-label="Explore All Books" />
        </div>
      </section>

      {/* ═══ STATS BAR — Direct from mockup ═══ */}
      <section className="relative">
        <div className="relative w-full">
          <Image
            src="/stats-bar.png"
            alt="50+ Happy Clients, 100+ Projects, 5+ Years, Worldwide"
            width={1536}
            height={104}
            className="w-full h-auto"
          />
          <Link href="/contact" className="absolute right-[2%] top-[20%] w-[10%] h-[60%] rounded-lg hover:bg-white/10 transition-colors" aria-label="Get in Touch" />
        </div>
      </section>

      {/* ═══ CONTACT — Real working form ═══ */}
      <section className="py-20 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[#1a3ab5] text-xs font-semibold tracking-[3px] uppercase mb-2">Get in Touch</p>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">Have a project in mind?</h2>
            <div className="w-12 h-1 bg-[#1a3ab5] mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div {...fade(0.1)}>
              <p className="text-slate-500 leading-relaxed mb-8">
                Whether you need a website, mobile app, engineering consultation, or want to explore our books — let&#39;s build something amazing together.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Mail, label: 'support@dexuslab.com' },
                  { icon: Phone, label: '(863) 207-8619' },
                  { icon: MapPin, label: 'Orlando, Florida, USA' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#1a3ab5]/10 rounded-lg flex items-center justify-center shrink-0">
                      <c.icon size={18} className="text-[#1a3ab5]" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.2)}>
              {sent ? (
                <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center shadow-sm">
                  <Send size={32} className="text-[#1a3ab5] mx-auto mb-4" />
                  <h3 className="text-slate-900 text-xl font-bold mb-2">Message sent!</h3>
                  <p className="text-slate-500 text-sm">We&#39;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Name</label>
                      <input name="name" required placeholder="Your name" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                      <input name="email" type="email" required placeholder="you@email.com" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Service</label>
                    <select name="service" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all">
                      <option>Website Development</option>
                      <option>Mobile App Development</option>
                      <option>Robotics & Engineering</option>
                      <option>Technical Consulting</option>
                      <option>Bookstore Inquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your project..." className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all resize-none" />
                  </div>
                  <button type="submit" className="w-full bg-[#1a3ab5] hover:bg-[#152d91] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-lg shadow-blue-900/20">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#060b20] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Dex Atomes" width={120} height={30} className="h-8 w-auto brightness-200" />
            <span className="text-slate-600 text-xs">© 2026 Dex Atomes LLC · Orlando, FL</span>
          </div>
          <div className="flex gap-5 flex-wrap justify-center">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Bookstore', href: '/store' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'DexusLab', href: 'https://dexuslab.com' },
              { label: 'support@dexuslab.com', href: 'mailto:support@dexuslab.com' },
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-slate-500 hover:text-white text-xs transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
