'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, ShoppingCart, Zap, Users, Globe,
  Monitor, Smartphone, BookOpen, CheckCircle2,
  Mail, Phone, MapPin, Send, Settings, Code,
  Rocket, Wrench, Clock, Heart, Cpu, FlaskConical, Building2,
} from 'lucide-react'
import { useState } from 'react'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay: d, ease: 'easeOut' as const },
})

const rise = (d = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: d, ease: [0.2, 0.7, 0.3, 1] as const },
})

/* Destination cards — every one points at a route that already exists. */
const destinations = [
  { n: '01', icon: Settings, label: 'Engineering', line: 'Robotics · IoT · Hardware', href: '/services', external: false },
  { n: '02', icon: Code, label: 'Software', line: 'Web · Mobile · Systems', href: '/services', external: false },
  { n: '03', icon: FlaskConical, label: 'Dexus Lab', line: 'Learning platform', href: 'https://dexuslab.com', external: true },
  { n: '04', icon: BookOpen, label: 'Bookstore', line: 'Engineering titles', href: '/store', external: false },
  { n: '05', icon: Building2, label: 'About', line: 'Orlando, Florida', href: '/about', external: false },
]

const services = [
  {
    icon: Monitor, title: 'Website Development',
    desc: 'Modern, responsive websites built to represent your brand and drive results.',
    checks: ['Custom Design', 'SEO Optimized', 'Fast & Secure', 'Mobile Friendly'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=280&fit=crop',
    link: '/services', linkText: 'Learn More',
  },
  {
    icon: Smartphone, title: 'Mobile App Development',
    desc: 'High-performance mobile applications for iOS and Android platforms.',
    checks: ['iOS & Android Apps', 'User Friendly UI/UX', 'API Integration', 'App Store Deployment'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=280&fit=crop',
    link: '/services', linkText: 'Learn More',
  },
  {
    icon: BookOpen, title: 'Engineering Education',
    desc: 'Books and resources to help you learn, build, and innovate with confidence.',
    checks: ['Robotics', 'Arduino & ESP32', 'AI & Automation', 'Practical Projects'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=280&fit=crop',
    link: '/store', linkText: 'Visit Bookstore',
  },
]

const comingSoon = [
  { title: 'Arduino Mastery', desc: 'Complete guide to Arduino programming and embedded systems.' },
  { title: 'ESP32 In Action', desc: 'IoT, Wi-Fi, Bluetooth, and advanced ESP32 projects.' },
  { title: 'Drone Technology', desc: 'Build, program, and fly autonomous drones safely.' },
]

const values = [
  { icon: Settings, title: 'Engineering Expertise', sub: 'Real engineering knowledge behind every solution.' },
  { icon: Code, title: 'Modern Technologies', sub: 'We use the latest tools and frameworks.' },
  { icon: Wrench, title: 'Practical Solutions', sub: 'We build solutions that solve real problems.' },
  { icon: Clock, title: 'Long-Term Support', sub: 'We stay with you beyond delivery.' },
  { icon: MapPin, title: 'Based in Orlando', sub: 'Proudly serving clients worldwide.' },
]

const badges = [
  { icon: Settings, label: 'Engineering', sub: 'Focused' },
  { icon: Zap, label: 'Custom', sub: 'Solutions' },
  { icon: Users, label: 'Client', sub: 'Focused' },
  { icon: Globe, label: 'Serving Clients', sub: 'Worldwide' },
]

const tabs = [
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'library', label: 'Library' },
  { id: 'company', label: 'Company' },
] as const

type TabId = (typeof tabs)[number]['id']

export default function HomePage() {
  const [sent, setSent] = useState(false)
  const [tab, setTab] = useState<TabId>('capabilities')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    setSent(true)
  }

  return (
    <div className="bg-[#04070f]">
      {/* ══════════════════════════════════════════════
          SCREEN 1 — full-viewport interface
      ══════════════════════════════════════════════ */}
      <section className="da-grid relative min-h-[100svh] lg:h-[100svh] flex flex-col overflow-hidden">
        {/* Ambient brand glow */}
        <div className="pointer-events-none absolute -top-40 -left-40 w-[680px] h-[680px] rounded-full bg-[#1a3ab5]/20 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-[#3d7bff]/10 blur-[130px]" />

        <div className="relative flex-1 flex items-center pt-[96px] pb-10 lg:pt-[72px] lg:pb-0">
          <div className="w-full max-w-[1400px] mx-auto px-5 sm:px-8">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* ── Left: headline ── */}
              <div className="lg:col-span-6 xl:col-span-5">
                <motion.div {...rise(0)} className="flex items-center gap-3 mb-7">
                  <span className="h-px w-8 bg-[#3d7bff]" />
                  <p className="text-[#5f92ff] text-[10px] font-semibold tracking-[0.28em] uppercase">
                    Build · Learn · Innovate
                  </p>
                </motion.div>

                <motion.h1
                  {...rise(0.08)}
                  className="text-white text-[2.3rem] sm:text-5xl lg:text-[3.4rem] xl:text-[4rem] font-bold leading-[1] tracking-[-0.03em]"
                >
                  Engineering
                  <br />
                  Solutions
                  <br />
                  <span className="text-[#3d7bff]">Built for the Future</span>
                </motion.h1>

                <motion.p {...rise(0.16)} className="text-slate-400 text-[15px] leading-relaxed mt-6 max-w-sm">
                  Software, robotics, and engineering education — from Orlando to the world.
                </motion.p>

                <motion.div {...rise(0.24)} className="flex flex-wrap gap-3 mt-8">
                  <Link
                    href="/services"
                    className="group inline-flex items-center gap-2 bg-[#1a3ab5] hover:bg-[#2348c7] text-white font-semibold px-6 py-3.5 rounded-full text-[13px] tracking-wide transition-all shadow-lg shadow-blue-900/40"
                  >
                    Explore Services
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/store"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 hover:bg-white/[0.04] text-white font-medium px-6 py-3.5 rounded-full text-[13px] tracking-wide transition-all"
                  >
                    <ShoppingCart size={14} /> Visit Bookstore
                  </Link>
                </motion.div>
              </div>

              {/* ── Right: dominant visual ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.15, ease: [0.2, 0.7, 0.3, 1] }}
                className="lg:col-span-6 xl:col-span-7"
              >
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#070d1e]">
                  <div className="relative aspect-[16/11] sm:aspect-[2/1] lg:aspect-[5/4] xl:aspect-[16/11]">
                    <Image
                      src="/hero-bg.png"
                      alt="Dex Atomes robotics engineering"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="object-cover scale-[1.02] group-hover:scale-[1.05] transition-transform duration-[1200ms] ease-out"
                      style={{ objectPosition: '72% 50%' }}
                    />
                    {/* Blend the plate into the page */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#04070f] via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04070f]/70 via-transparent to-transparent" />
                  </div>

                  {/* Instrument ticks */}
                  <span className="absolute top-4 left-4 w-6 h-px bg-[#3d7bff]/70" />
                  <span className="absolute top-4 left-4 w-px h-6 bg-[#3d7bff]/70" />
                  <span className="absolute bottom-4 right-4 w-6 h-px bg-[#3d7bff]/70" />
                  <span className="absolute bottom-4 right-4 w-px h-6 bg-[#3d7bff]/70" />

                  {/* Caption chip */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2.5 da-panel rounded-full px-4 py-2">
                    <Cpu size={13} className="text-[#3d7bff]" />
                    <span className="text-white/90 text-[11px] font-medium tracking-wide">
                      Robotics · Software · Education
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Lower interactive strip: destinations ── */}
        <motion.div {...rise(0.4)} className="relative border-t border-white/[0.07] bg-[#04070f]/60 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
            <div className="da-scroll flex lg:grid lg:grid-cols-5 overflow-x-auto snap-x snap-mandatory">
              {destinations.map(d => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between mb-6">
                      <d.icon size={17} className="text-[#3d7bff]" />
                      <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-600">{d.n}</span>
                    </div>
                    <p className="text-white text-[15px] font-semibold tracking-tight">{d.label}</p>
                    <p className="text-slate-500 text-[11px] mt-1">{d.line}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-medium text-slate-400 group-hover:text-[#3d7bff] transition-colors">
                      Enter <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </>
                )
                const cls =
                  'da-card group block shrink-0 w-[62vw] sm:w-[38vw] lg:w-auto snap-start px-6 py-7 border-r border-white/[0.06] last:border-r-0 hover:bg-white/[0.03]'
                return d.external ? (
                  <a key={d.label} href={d.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <Link key={d.label} href={d.href} className={cls}>
                    {inner}
                  </Link>
                )
              })}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════
          SCREEN 2 — one scene, three tabbed views
          (replaces the old stacked Services / Books / Values sections)
      ══════════════════════════════════════════════ */}
      <section className="da-grid relative bg-[#070d1e] border-t border-white/[0.06] py-20 lg:py-24 overflow-hidden">
        <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8">
          <motion.div {...fade()} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#3d7bff]" />
                <p className="text-[#5f92ff] text-[10px] font-semibold tracking-[0.28em] uppercase">Explore</p>
              </div>
              <h2 className="text-white text-3xl md:text-[2.6rem] font-bold tracking-[-0.02em] leading-tight">
                What we build
              </h2>
            </div>

            {/* Tab switcher */}
            <div className="flex items-center gap-1 da-panel rounded-full p-1 self-start md:self-auto">
              {tabs.map(t => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={`relative px-5 py-2.5 rounded-full text-[12px] font-semibold tracking-wide transition-colors ${
                    tab === t.id ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab === t.id && (
                    <motion.span
                      layoutId="tab-pill"
                      className="absolute inset-0 rounded-full bg-[#1a3ab5]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{t.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            {/* ── Capabilities ── */}
            {tab === 'capabilities' && (
              <motion.div
                key="capabilities"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid lg:grid-cols-3 gap-5"
              >
                {services.map(s => (
                  <div
                    key={s.title}
                    className="group da-panel rounded-2xl overflow-hidden hover:border-[#3d7bff]/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#161f3c] via-[#161f3c]/40 to-transparent" />
                      <div className="absolute bottom-4 left-5 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#1a3ab5] flex items-center justify-center shrink-0">
                          <s.icon size={16} className="text-white" />
                        </div>
                        <h3 className="text-white font-semibold text-[15px] tracking-tight">{s.title}</h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-slate-400 text-[13px] leading-relaxed mb-5">{s.desc}</p>
                      <ul className="space-y-2 mb-6">
                        {s.checks.map(c => (
                          <li key={c} className="flex items-center gap-2 text-[12px] text-slate-500">
                            <CheckCircle2 size={12} className="text-[#3d7bff] shrink-0" /> {c}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={s.link}
                        className="inline-flex items-center gap-1.5 text-[#3d7bff] text-[12px] font-semibold tracking-wide hover:gap-3 transition-all"
                      >
                        {s.linkText} <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {/* ── Library ── */}
            {tab === 'library' && (
              <motion.div
                key="library"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid lg:grid-cols-5 gap-5"
              >
                {/* Featured */}
                <div className="lg:col-span-3 da-panel rounded-2xl p-7 flex flex-col sm:flex-row gap-7">
                  <div className="flex-1">
                    <p className="text-[#5f92ff] text-[10px] font-semibold tracking-[0.24em] uppercase mb-4">Featured Book</p>
                    <h3 className="text-white text-2xl font-bold tracking-tight">Robotique Moderne</h3>
                    <p className="text-slate-400 text-sm italic mb-5">Guide Complet pour Débutants</p>
                    <p className="text-slate-500 text-[13px] leading-relaxed mb-6 max-w-xs">
                      The practical guide to robotics, Arduino, ESP32, sensors, AI, drones, and real-world projects. Perfect for beginners and future engineers.
                    </p>
                    <div className="flex flex-wrap gap-x-5 gap-y-2 mb-6 text-[11px] text-slate-500">
                      <span className="flex items-center gap-1.5"><BookOpen size={12} className="text-[#3d7bff]" /> 130+ Pages</span>
                      <span className="flex items-center gap-1.5"><Wrench size={12} className="text-[#3d7bff]" /> Step-by-Step</span>
                      <span className="flex items-center gap-1.5"><Rocket size={12} className="text-[#3d7bff]" /> Real Projects</span>
                      <span className="flex items-center gap-1.5"><Heart size={12} className="text-[#3d7bff]" /> Illustrated</span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-white text-2xl font-bold">$9.99</span>
                      <Link
                        href="/store"
                        className="group inline-flex items-center gap-2 bg-[#1a3ab5] hover:bg-[#2348c7] text-white text-[13px] font-semibold px-5 py-3 rounded-full transition-colors shadow-lg shadow-blue-900/30"
                      >
                        Buy Now <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/store"
                        className="inline-flex items-center gap-2 border border-white/15 hover:border-white/35 text-white text-[13px] font-medium px-5 py-3 rounded-full transition-all"
                      >
                        Preview Contents
                      </Link>
                    </div>
                  </div>

                  <div className="shrink-0 w-40 hidden sm:block">
                    <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-900/40">
                      <Image
                        src="/representation.png"
                        alt="Robotique Moderne — Guide Complet pour Débutants"
                        fill
                        sizes="160px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Coming soon */}
                <div className="lg:col-span-2 da-panel rounded-2xl p-7">
                  <p className="text-orange-400/90 text-[10px] font-semibold tracking-[0.24em] uppercase mb-5">Coming Soon</p>
                  <div className="space-y-4">
                    {comingSoon.map(b => (
                      <div key={b.title} className="flex items-start justify-between gap-3 pb-4 border-b border-white/[0.05] last:border-0 last:pb-0">
                        <div>
                          <p className="text-white font-semibold text-sm">{b.title}</p>
                          <p className="text-slate-500 text-[11px] mt-1 leading-relaxed">{b.desc}</p>
                        </div>
                        <span className="shrink-0 text-[10px] font-semibold text-slate-500 border border-white/[0.08] px-2.5 py-1 rounded-full">
                          Coming 2027
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── Company ── */}
            {tab === 'company' && (
              <motion.div
                key="company"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
                  {badges.map(b => (
                    <div key={b.label} className="da-panel rounded-xl px-5 py-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#1a3ab5]/20 border border-[#3d7bff]/20 flex items-center justify-center shrink-0">
                        <b.icon size={15} className="text-[#3d7bff]" />
                      </div>
                      <div>
                        <p className="text-white text-[12px] font-semibold leading-tight">{b.label}</p>
                        <p className="text-slate-500 text-[11px] leading-tight">{b.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {values.map(v => (
                    <div key={v.title} className="da-card da-panel rounded-xl p-5 hover:border-[#3d7bff]/40">
                      <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center mb-4">
                        <v.icon size={15} className="text-[#3d7bff]" />
                      </div>
                      <p className="text-white text-[13px] font-semibold leading-snug">{v.title}</p>
                      <p className="text-slate-500 text-[11px] leading-relaxed mt-1.5">{v.sub}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-[#3d7bff] text-[12px] font-semibold tracking-wide hover:gap-3 transition-all"
                  >
                    More about Dex Atomes <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT — compact band (form unchanged)
      ══════════════════════════════════════════════ */}
      <section className="relative bg-[#04070f] border-t border-white/[0.06] py-20">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div {...fade()} className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px w-8 bg-[#3d7bff]" />
                <p className="text-[#5f92ff] text-[10px] font-semibold tracking-[0.28em] uppercase">Get in Touch</p>
              </div>
              <h2 className="text-white text-3xl md:text-[2.4rem] font-bold tracking-[-0.02em] leading-tight mb-5">
                Have a project in mind?
              </h2>
              <p className="text-slate-400 text-[15px] leading-relaxed mb-9 max-w-sm">
                Website, mobile app, or engineering consultation — let&#39;s build it together.
              </p>

              <div className="space-y-3">
                {[
                  { icon: Mail, label: 'support@dexuslab.com' },
                  { icon: Phone, label: '(863) 207-8619' },
                  { icon: MapPin, label: 'Orlando, Florida, USA' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center shrink-0">
                      <c.icon size={16} className="text-[#3d7bff]" />
                    </div>
                    <span className="text-slate-300 text-sm">{c.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fade(0.1)} className="lg:col-span-7">
              {sent ? (
                <div className="da-panel rounded-2xl p-12 text-center">
                  <Send size={30} className="text-[#3d7bff] mx-auto mb-4" />
                  <h3 className="text-white text-xl font-bold mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm">We&#39;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="da-panel rounded-2xl p-7 sm:p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-2">Name</label>
                      <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3d7bff] focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-2">Email</label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3d7bff] focus:bg-white/[0.05] transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-2">Service</label>
                    <select
                      name="service"
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#3d7bff] transition-all [&>option]:bg-[#0b1226]"
                    >
                      <option>Website Development</option>
                      <option>Mobile App</option>
                      <option>Robotics &amp; Engineering</option>
                      <option>Consulting</option>
                      <option>Bookstore</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#3d7bff] focus:bg-white/[0.05] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1a3ab5] hover:bg-[#2348c7] text-white font-semibold py-3.5 rounded-full text-[13px] tracking-wide transition-colors shadow-lg shadow-blue-900/30"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#04070f] border-t border-white/[0.06] py-9 px-5 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="flex items-center gap-4">
            <Image src="/logo-dark.png" alt="Dex Atomes" width={120} height={30} className="h-7 w-auto" />
            <span className="text-slate-600 text-[11px]">© 2026 Dex Atomes LLC · Orlando, FL</span>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            {[
              { label: 'Services', href: '/services' },
              { label: 'Bookstore', href: '/store' },
              { label: 'About', href: '/about' },
              { label: 'Contact', href: '/contact' },
              { label: 'DexusLab', href: 'https://dexuslab.com' },
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-slate-500 hover:text-white text-[11px] tracking-wide transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
