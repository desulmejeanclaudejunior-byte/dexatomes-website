'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Eye, Globe, Smartphone, BookOpen, ShoppingCart, MapPin, Mail, Phone, Send, ChevronRight, Users, Briefcase, Clock, Award } from 'lucide-react'
import { useState } from 'react'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease: 'easeOut' as const },
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
      {/* ═══ HERO — Dark blue, robotic arm, DX watermark ═══ */}
      <section className="hero-bg circuit-dots relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&h=900&fit=crop" alt="" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1033]/95 via-[#0a1033]/80 to-[#0a1033]/60" />

        {/* DX watermark */}
        <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[20rem] font-black text-white/[0.03] tracking-widest select-none pointer-events-none hidden lg:block">
          DX
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-2xl">
            <motion.p {...fade(0)} className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-4">
              Website · Mobile Apps · Robotics
            </motion.p>

            <motion.h1 {...fade(0.1)} className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              Digital Solutions
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
                Built for the Future
              </span>
            </motion.h1>

            <motion.p {...fade(0.2)} className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              Dex Atomes LLC helps businesses and individuals turn ideas into powerful digital experiences. We build websites, mobile applications, and provide knowledge through our engineering books.
            </motion.p>

            <motion.div {...fade(0.3)} className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-brand inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px]">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link href="/store" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl text-[15px] transition-all">
                <Eye size={16} /> View Our Work
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="h-16 bg-gradient-to-b from-transparent to-white" />
      </section>

      {/* ═══ OUR SERVICES — White bg, 3 cards with images ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[#1a3ab5] text-sm font-semibold tracking-wider uppercase mb-2">Our Services</p>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">What we offer</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe, title: 'Website Development',
                desc: 'Professional websites, web applications, SaaS platforms, and e-commerce solutions built with modern technologies.',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
              },
              {
                icon: Smartphone, title: 'Mobile App Development',
                desc: 'Native-quality iOS and Android applications. React Native, cross-platform development with Firebase backend.',
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
              },
              {
                icon: BookOpen, title: 'Bookstore',
                desc: 'Engineering ebooks and technical guides — robotics, Arduino, ESP32, drones, AI. Written by engineers for engineers.',
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
              },
            ].map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.1)}
                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 bg-[#1a3ab5] rounded-xl flex items-center justify-center shadow-lg">
                    <s.icon size={18} className="text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOOKSTORE ROW — Dark blue bg, book covers ═══ */}
      <section className="hero-bg circuit-dots py-16 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="flex items-center justify-between mb-10">
            <div>
              <p className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-1">Bookstore</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Engineering Library</h2>
            </div>
            <Link href="/store" className="group hidden sm:inline-flex items-center gap-1 text-blue-300 font-semibold text-sm hover:text-white transition-colors">
              View All <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { title: 'Arduino Essentials', price: '$24.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=300&h=400&fit=crop' },
              { title: 'ESP32 Projects', price: '$24.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=400&fit=crop' },
              { title: 'Drone Engineering', price: '$34.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=400&fit=crop' },
              { title: 'Robotique Moderne', price: '$22.99', tag: 'Available', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop' },
              { title: 'AI & ML Guide', price: '$29.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=400&fit=crop' },
            ].map((book, i) => (
              <motion.div key={book.title} {...fade(i * 0.08)}>
                <Link href="/store" className="group block">
                  <div className="relative rounded-xl overflow-hidden border border-white/10 mb-3">
                    <Image src={book.img} alt={book.title} width={300} height={400} className="w-full aspect-[3/4] object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1033] via-transparent to-transparent" />
                    <span className={`absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                      book.tag === 'Available' ? 'bg-blue-600 text-white' : 'bg-white/15 text-white/80'
                    }`}>{book.tag}</span>
                  </div>
                  <p className="text-white font-semibold text-sm">{book.title}</p>
                  <p className="text-blue-300 font-bold text-sm mt-0.5">{book.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="bg-[#1a3ab5] py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Briefcase, value: '50+', label: 'Projects Delivered' },
              { icon: Users, value: '100+', label: 'Happy Clients' },
              { icon: Clock, value: '5+', label: 'Years Experience' },
              { icon: Award, value: 'Worldwide', label: 'Service Reach' },
            ].map((s, i) => (
              <motion.div key={s.label} {...fade(i * 0.08)} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <s.icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-2xl font-bold">{s.value}</p>
                  <p className="text-blue-200 text-xs">{s.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section className="py-20 bg-[#f0f4ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fade()}>
              <p className="text-[#1a3ab5] text-sm font-semibold tracking-wider uppercase mb-2">Have a project in mind?</p>
              <h2 className="text-slate-900 text-3xl font-bold tracking-tight mb-6">Let&#39;s build together</h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Whether you need a website, mobile app, engineering consultation, or want to explore our books and courses — we&#39;re ready to help.
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

            <motion.div {...fade(0.1)}>
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
                  <button type="submit" className="w-full btn-brand py-3 rounded-lg text-sm">Send Message</button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#0a1033] py-10 px-6 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Dex Atomes" width={120} height={30} className="h-7 w-auto opacity-80" />
            <span className="text-slate-600 text-xs">© 2026 Dex Atomes LLC · Orlando, FL</span>
          </div>
          <div className="flex gap-5 flex-wrap justify-center">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Bookstore', href: '/store' },
              { label: 'DexusLab', href: 'https://dexuslab.com' },
              { label: '@DexAtomes', href: 'https://instagram.com/DexAtomes' },
              { label: 'Contact', href: '/contact' },
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-slate-500 hover:text-white text-xs transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
