'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, ShoppingCart, Cpu, Zap, Users, Globe,
  Monitor, Smartphone, BookOpen, CheckCircle2,
  Mail, Phone, MapPin, Send, Settings, Code,
  Rocket, Wrench, Clock, Heart
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
      {/* ══════════════════════════════════════════════
          HERO — Real mockup bg + coded text overlay
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden mt-[72px]">
        {/* Mockup as bg — covers full section, positioned to show robotic arm */}
        <div className="absolute inset-0">
          <Image src="/hero-bg.png" alt="" fill className="object-cover object-right" priority />
          {/* Overlay: stronger on mobile so text is readable */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#060e24] via-[#060e24]/90 to-[#060e24]/40 lg:from-[#060e24]/95 lg:via-[#060e24]/75 lg:to-transparent" />
        </div>

        {/* Real content */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 sm:py-20 lg:py-28">
          <div className="max-w-xl">
            <motion.p {...fade(0)} className="text-blue-400 text-xs font-bold tracking-[3px] uppercase mb-4">
              Build. Learn. Innovate.
            </motion.p>

            <motion.div {...fade(0.1)}>
              <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-tight">
                Engineering Solutions
              </h1>
              <h1 className="text-blue-400 text-3xl sm:text-4xl lg:text-5xl font-bold italic leading-[1.08] tracking-tight mt-1 mb-5">
                Built for the Future
              </h1>
            </motion.div>

            <motion.p {...fade(0.2)} className="text-slate-300 text-sm sm:text-[15px] leading-relaxed mb-7 max-w-md">
              Dex Atomes LLC designs websites, develops mobile applications, and publishes engineering books for innovators, students, and businesses.
            </motion.p>

            <motion.div {...fade(0.3)} className="flex flex-wrap gap-3 mb-10">
              <Link href="/services" className="group inline-flex items-center gap-2 bg-[#1a3ab5] hover:bg-[#2348c7] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-blue-900/30">
                Explore Services <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/store" className="inline-flex items-center gap-2 bg-white/[0.08] hover:bg-white/[0.12] border border-white/20 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all">
                <ShoppingCart size={14} /> Visit Bookstore
              </Link>
            </motion.div>

            <motion.div {...fade(0.4)} className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-5">
              {[
                { icon: Settings, label: 'Engineering', sub: 'Focused' },
                { icon: Zap, label: 'Custom', sub: 'Solutions' },
                { icon: Users, label: 'Client', sub: 'Focused' },
                { icon: Globe, label: 'Serving Clients', sub: 'Worldwide' },
              ].map(b => (
                <div key={b.label} className="flex items-center gap-2">
                  <div className="w-9 h-9 bg-white/[0.06] border border-white/[0.08] rounded-lg flex items-center justify-center shrink-0">
                    <b.icon size={15} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-semibold leading-tight">{b.label}</p>
                    <p className="text-slate-500 text-[10px] leading-tight">{b.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR SERVICES
      ══════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[#1a3ab5] text-xs font-semibold tracking-[3px] uppercase mb-2">What We Do</p>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">Our Services</h2>
            <div className="w-12 h-1 bg-[#1a3ab5] mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
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
            ].map((s, i) => (
              <motion.div key={s.title} {...fade(i * 0.1)}
                className="group bg-white rounded-2xl border border-slate-200 hover:border-[#1a3ab5]/30 overflow-hidden hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
                <div className="p-6 pb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-11 h-11 bg-[#1a3ab5]/10 rounded-xl flex items-center justify-center shrink-0">
                      <s.icon size={20} className="text-[#1a3ab5]" />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-bold text-[17px]">{s.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">{s.desc}</p>

                  <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-slate-100">
                    <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-[1.03] transition-transform duration-500" />
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {s.checks.map(c => (
                      <li key={c} className="flex items-center gap-2 text-[13px] text-slate-600">
                        <CheckCircle2 size={13} className="text-[#1a3ab5] shrink-0" /> {c}
                      </li>
                    ))}
                  </ul>

                  <Link href={s.link} className="group/link inline-flex items-center gap-1.5 text-[#1a3ab5] text-sm font-semibold hover:gap-2.5 transition-all">
                    {s.linkText} <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FEATURED BOOK + COMING SOON
      ══════════════════════════════════════════════ */}
      <section className="py-16" style={{background:'linear-gradient(135deg,#060e24 0%,#0c1a3d 100%)'}}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-6">
            {/* Featured book — large card */}
            <motion.div {...fade()} className="lg:col-span-3 bg-[#0d1633] border border-blue-900/30 rounded-2xl p-7 flex flex-col sm:flex-row gap-6">
              <div className="shrink-0">
                <p className="text-blue-400 text-[10px] font-bold tracking-[2px] uppercase mb-3">Featured Book</p>
                <h3 className="text-white text-xl font-bold mb-0.5">Robotique Moderne</h3>
                <p className="text-blue-300 text-sm italic mb-4">Guide Complet pour Débutants</p>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5 max-w-xs">
                  The practical guide to robotics, Arduino, ESP32, sensors, AI, drones, and real-world projects. Perfect for beginners and future engineers.
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1"><BookOpen size={12} className="text-blue-400" /> 130+ Pages</span>
                  <span className="flex items-center gap-1"><Wrench size={12} className="text-blue-400" /> Step-by-Step</span>
                  <span className="flex items-center gap-1"><Rocket size={12} className="text-blue-400" /> Real Projects</span>
                  <span className="flex items-center gap-1"><Heart size={12} className="text-blue-400" /> Illustrated</span>
                </div>
                <div className="flex gap-3">
                  <Link href="/store" className="inline-flex items-center gap-1.5 bg-[#1a3ab5] hover:bg-[#2348c7] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-blue-900/30">
                    Buy Now <ArrowRight size={13} />
                  </Link>
                  <Link href="/store" className="inline-flex items-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all">
                    Preview Contents
                  </Link>
                </div>
              </div>
              {/* Book visual */}
              <div className="shrink-0 w-40 hidden sm:block">
                <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden border border-blue-900/30 shadow-2xl shadow-blue-900/40">
                  <Image src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=450&fit=crop" alt="Robotique Moderne" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060e24]/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-[10px] uppercase tracking-wider">Robotique</p>
                    <p className="text-blue-300 font-bold text-[10px] uppercase tracking-wider">Moderne</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Coming soon */}
            <motion.div {...fade(0.1)} className="lg:col-span-2 bg-[#0d1633] border border-blue-900/30 rounded-2xl p-6">
              <p className="text-orange-400 text-[10px] font-bold tracking-[2px] uppercase mb-4">Coming Soon</p>
              <div className="space-y-4">
                {[
                  { title: 'Arduino Mastery', desc: 'Complete guide to Arduino programming and embedded systems.' },
                  { title: 'ESP32 In Action', desc: 'IoT, Wi-Fi, Bluetooth, and advanced ESP32 projects.' },
                  { title: 'Drone Technology', desc: 'Build, program, and fly autonomous drones safely.' },
                ].map(b => (
                  <div key={b.title} className="flex items-start justify-between gap-3 pb-3 border-b border-white/[0.04] last:border-0 last:pb-0">
                    <div>
                      <p className="text-white font-semibold text-sm">{b.title}</p>
                      <p className="text-slate-500 text-[11px] mt-0.5 leading-relaxed">{b.desc}</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-semibold text-slate-500 bg-white/[0.04] border border-white/[0.06] px-2.5 py-1 rounded-lg">
                      Coming 2027
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VALUES BAR
      ══════════════════════════════════════════════ */}
      <section className="bg-[#1a3ab5] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { icon: Settings, title: 'Engineering Expertise', sub: 'Real engineering knowledge behind every solution.' },
              { icon: Code, title: 'Modern Technologies', sub: 'We use the latest tools and frameworks.' },
              { icon: Wrench, title: 'Practical Solutions', sub: 'We build solutions that solve real problems.' },
              { icon: Clock, title: 'Long-Term Support', sub: 'We stay with you beyond delivery.' },
              { icon: MapPin, title: 'Based in Orlando', sub: 'Proudly serving clients worldwide.' },
            ].map((v, i) => (
              <motion.div key={v.title} {...fade(i * 0.05)} className="flex items-start gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <v.icon size={16} className="text-white" />
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{v.title}</p>
                  <p className="text-blue-200 text-[10px] leading-snug mt-0.5">{v.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CONTACT
      ══════════════════════════════════════════════ */}
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
                    <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Name</label>
                      <input name="name" required placeholder="Your name" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all" /></div>
                    <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                      <input name="email" type="email" required placeholder="you@email.com" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all" /></div>
                  </div>
                  <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Service</label>
                    <select name="service" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all">
                      <option>Website Development</option><option>Mobile App</option><option>Robotics & Engineering</option><option>Consulting</option><option>Bookstore</option><option>Other</option>
                    </select></div>
                  <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your project..." className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 transition-all resize-none" /></div>
                  <button type="submit" className="w-full bg-[#1a3ab5] hover:bg-[#152d91] text-white font-semibold py-3 rounded-lg text-sm transition-colors shadow-lg shadow-blue-900/20">Send Message</button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
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
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-slate-500 hover:text-white text-xs transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
