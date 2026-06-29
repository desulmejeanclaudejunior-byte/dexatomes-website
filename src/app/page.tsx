'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Eye, Globe, Smartphone, BookOpen, ShoppingCart,
  MapPin, Mail, Phone, Send, ChevronRight, ChevronLeft,
  Users, Briefcase, Clock, Award, Lightbulb, Shield, Heart, Zap,
  CheckCircle2, Monitor, Cpu
} from 'lucide-react'
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
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-[#0a1033] via-[#101845] to-[#0d1540] overflow-hidden mt-[72px]">
        {/* Circuit dot pattern */}
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(circle,rgba(26,58,181,0.08) 1px,transparent 0)',backgroundSize:'24px 24px'}} />

        {/* Robotic arm background */}
        <div className="absolute right-0 top-0 bottom-0 w-[60%] hidden lg:block">
          <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop" alt="" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1033] via-[#0a1033]/70 to-transparent" />
        </div>

        {/* Code text overlay (decorative) */}
        <div className="absolute right-8 top-20 text-[11px] font-mono text-blue-400/20 leading-relaxed hidden xl:block select-none">
          {'function DexAtomes() {'}<br />
          {'  let ideas = {'}<br />
          {'    success: true,'}<br />
          {'    innovation: true,'}<br />
          {'  };'}<br />
          {'  return solutions;'}<br />
          {'}'}<br />
          {'// Building the future'}
        </div>

        {/* DX watermark */}
        <div className="absolute right-[15%] top-1/2 -translate-y-1/2 text-[18rem] font-black text-white/[0.04] tracking-wider select-none pointer-events-none hidden lg:block">
          DX
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="max-w-xl">
            <motion.p {...fade(0)} className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-4">
              Innovate. Build. Empower.
            </motion.p>

            <motion.h1 {...fade(0.1)} className="text-white text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.08] tracking-tight mb-2">
              Digital Solutions
            </motion.h1>
            <motion.h1 {...fade(0.15)} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 text-4xl sm:text-5xl lg:text-[3.5rem] font-bold italic leading-[1.08] tracking-tight mb-6">
              Built for the Future
            </motion.h1>

            <motion.p {...fade(0.2)} className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              Dex Atomes LLC helps businesses and individuals turn ideas into powerful digital experiences. We build websites, mobile applications, and provide knowledge through our engineering books.
            </motion.p>

            <motion.div {...fade(0.3)} className="flex flex-wrap gap-4 mb-12">
              <Link href="/services" className="inline-flex items-center gap-2 bg-[#1a3ab5] hover:bg-[#152d91] text-white font-semibold px-7 py-3.5 rounded-xl text-[15px] transition-colors shadow-lg shadow-blue-900/30">
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link href="/store" className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 hover:border-white/50 text-white font-semibold px-7 py-3.5 rounded-xl text-[15px] transition-all">
                View Our Work <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div {...fade(0.4)} className="flex flex-wrap gap-6">
              {[
                { icon: Lightbulb, label: 'Innovative', sub: 'Solutions' },
                { icon: Shield, label: 'Reliable &', sub: 'Secure' },
                { icon: Heart, label: 'Client', sub: 'Focused' },
                { icon: Zap, label: 'Fast &', sub: 'Efficient' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2.5">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <b.icon size={18} className="text-blue-300" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold leading-tight">{b.label}</p>
                    <p className="text-slate-400 text-xs leading-tight">{b.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ OUR SERVICES ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[#1a3ab5] text-xs font-semibold tracking-[3px] uppercase mb-2">What We Do</p>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
            <div className="w-12 h-1 bg-[#1a3ab5] mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-7">
            {[
              {
                icon: Monitor, title: 'Website Development',
                desc: 'We design and develop modern, responsive websites that represent your brand and drive results.',
                checks: ['Custom Design', 'Responsive Layout', 'SEO Optimized', 'Fast & Secure'],
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=240&fit=crop',
                link: '/services',
                linkText: 'Learn More',
              },
              {
                icon: Smartphone, title: 'Mobile App Development',
                desc: 'We build high-performance mobile applications for iOS and Android tailored to your needs.',
                checks: ['iOS & Android Apps', 'User Friendly UI/UX', 'Scalable Solutions', 'API Integration'],
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=240&fit=crop',
                link: '/services',
                linkText: 'Learn More',
              },
              {
                icon: BookOpen, title: 'Bookstore',
                desc: 'Explore our collection of engineering and robotics books to learn, build and innovate.',
                checks: ['Engineering Books', 'Robotics & Automation', 'Practical Guides', 'Digital & Print'],
                image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop',
                link: '/store',
                linkText: 'Visit Bookstore',
              },
            ].map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.1)}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#1a3ab5]/10 rounded-xl flex items-center justify-center shrink-0">
                      <s.icon size={22} className="text-[#1a3ab5]" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-lg">{s.title}</h3>
                      <p className="text-slate-500 text-sm mt-1 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>

                  <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                    <Image src={s.image} alt={s.title} fill className="object-cover" />
                  </div>

                  <ul className="space-y-2 mb-4">
                    {s.checks.map(c => (
                      <li key={c} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 size={14} className="text-[#1a3ab5] shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <Link href={s.link} className="inline-flex items-center gap-1 text-[#1a3ab5] text-sm font-semibold hover:gap-2 transition-all">
                    {s.linkText} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED BOOKS ═══ */}
      <section className="py-14 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-start gap-6">
            {/* Left label */}
            <div className="shrink-0 hidden md:block">
              <p className="text-[#1a3ab5] text-[10px] font-bold tracking-[3px] uppercase mb-1">Featured</p>
              <p className="text-[#1a3ab5] text-[10px] font-bold tracking-[3px] uppercase">Books</p>
            </div>

            {/* Books scroll */}
            <div className="flex-1 overflow-x-auto">
              <div className="flex gap-5 pb-2">
                {[
                  { title: 'Robotique Moderne', sub: 'Modern Robotics\nComplete Guide', price: '$29.99', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=260&fit=crop' },
                  { title: 'Arduino Mastery', sub: 'Arduino\nMastery', price: '$24.99', img: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=200&h=260&fit=crop' },
                  { title: 'ESP32 in Action', sub: 'ESP32\nIn Action', price: '$24.99', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=260&fit=crop' },
                  { title: 'Drone Technology', sub: 'Drone\nTechnology', price: '$22.99', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=200&h=260&fit=crop' },
                ].map((book, i) => (
                  <motion.div key={book.title} {...fade(i * 0.08)} className="shrink-0 w-44">
                    <Link href="/store" className="group block">
                      <div className="relative h-52 rounded-xl overflow-hidden mb-2 shadow-md">
                        <Image src={book.img} alt={book.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1033]/70 to-transparent" />
                        <div className="absolute bottom-2 left-2 right-2">
                          <p className="text-white font-bold text-[11px] uppercase tracking-wide leading-tight whitespace-pre-line">{book.sub}</p>
                        </div>
                      </div>
                      <p className="text-slate-900 font-bold text-sm">{book.price}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Knowledge card */}
            <motion.div {...fade(0.2)} className="shrink-0 w-64 bg-[#1a3ab5] rounded-2xl p-6 hidden lg:block">
              <BookOpen size={28} className="text-white mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Knowledge Empowers</h3>
              <p className="text-blue-200 text-xs leading-relaxed mb-4">
                Our books are written for students, engineers, and makers who want to turn knowledge into real-world solutions.
              </p>
              <Link href="/store" className="inline-flex items-center gap-1.5 bg-white text-[#1a3ab5] text-xs font-semibold px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Explore All Books <ArrowRight size={12} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS + CTA BAR ═══ */}
      <section className="bg-[#0a1033] py-8 border-t-4 border-[#1a3ab5]">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6">
          {[
            { icon: Users, value: '50+', label: 'Happy Clients' },
            { icon: Briefcase, value: '100+', label: 'Projects Completed' },
            { icon: Cpu, value: '5+', label: 'Years of Experience' },
            { icon: Globe, value: 'Worldwide', label: 'Clients & Customers' },
          ].map((s, i) => (
            <motion.div key={s.label} {...fade(i * 0.08)} className="flex items-center gap-3">
              <s.icon size={24} className="text-blue-400" />
              <div>
                <p className="text-white text-xl font-bold">{s.value}</p>
                <p className="text-slate-500 text-xs">{s.label}</p>
              </div>
            </motion.div>
          ))}

          <div className="flex items-center gap-4">
            <div>
              <p className="text-white font-bold text-sm">Have a project in mind?</p>
              <p className="text-slate-500 text-xs">Let&#39;s build something amazing together.</p>
            </div>
            <Link href="/contact" className="inline-flex items-center gap-1.5 bg-white text-[#0a1033] text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors shrink-0">
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#060b20] py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Dex Atomes" width={120} height={30} className="h-8 w-auto brightness-200" />
            <span className="text-slate-600 text-xs">© 2026 Dex Atomes LLC</span>
          </div>
          <div className="flex gap-5 flex-wrap justify-center">
            {['Services', 'Bookstore', 'About', 'Contact'].map(l => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="text-slate-500 hover:text-white text-xs transition-colors">{l}</Link>
            ))}
            <a href="https://dexuslab.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white text-xs transition-colors">DexusLab</a>
            <a href="mailto:support@dexuslab.com" className="text-slate-500 hover:text-white text-xs transition-colors">support@dexuslab.com</a>
          </div>
        </div>
      </footer>
    </>
  )
}
