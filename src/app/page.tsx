'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Code, Cpu, Shield, BookOpen, Rocket, ExternalLink,
  Globe, Smartphone, Wrench, Mail, Phone, MapPin, ChevronRight,
  GraduationCap, Play, Layers, Terminal, Award, Send,
  Laptop, Cog, BrainCircuit, CheckCircle2
} from 'lucide-react'
import Logo from '@/components/Logo'
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

  const inputClass = 'w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all'

  return (
    <div className="circuit-bg min-h-screen pt-14">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-500/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-500/[0.03] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-cyan-500/[0.08] border border-cyan-500/20 rounded-full px-3.5 py-1 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-300 text-[11px] font-medium tracking-wider uppercase">Technology Ecosystem</span>
              </motion.div>

              <motion.h1 {...fade(0.1)} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
                <span className="text-white">Engineering the Future.</span>
                <br />
                <span className="gradient-text-blue">One Project at a Time.</span>
              </motion.h1>

              <motion.p {...fade(0.2)} className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-xl">
                Dex Atomes LLC is a technology company delivering software development, robotics engineering, and technical education — powering innovators, startups, and enterprises.
              </motion.p>

              <motion.div {...fade(0.3)} className="flex flex-wrap gap-3 mb-10">
                <Link href="/services" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-blue-600/20">
                  Explore Services <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/store" className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all">
                  <BookOpen size={14} /> Visit Store
                </Link>
              </motion.div>

              {/* Ecosystem pills */}
              <motion.div {...fade(0.4)} className="flex flex-wrap gap-2">
                {[
                  { label: 'Software', color: 'text-blue-400 border-blue-500/20 bg-blue-500/[0.06]' },
                  { label: 'Robotics', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/[0.06]' },
                  { label: 'Education', color: 'text-purple-400 border-purple-500/20 bg-purple-500/[0.06]' },
                  { label: 'DexusLab', color: 'text-cyan-300 border-cyan-400/20 bg-cyan-400/[0.06]' },
                  { label: 'Bookstore', color: 'text-blue-300 border-blue-400/20 bg-blue-400/[0.06]' },
                ].map(p => (
                  <span key={p.label} className={`text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${p.color}`}>
                    {p.label}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative rounded-2xl overflow-hidden border border-cyan-500/10 glow-cyan">
                <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&h=500&fit=crop" alt="Robotics engineering" width={700} height={500} className="w-full h-auto object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#111a2e]/90 backdrop-blur-md border border-cyan-500/10 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-semibold">Active Project</p>
                    <p className="text-cyan-400 text-[11px]">Autonomous Rover · ESP32</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-700 rounded-full"><div className="w-[72%] h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" /></div>
                    <span className="text-cyan-400 text-[11px] font-bold">72%</span>
                  </div>
                </div>
              </div>

              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-3 top-6 bg-[#111a2e]/90 backdrop-blur-md border border-purple-500/15 rounded-xl px-4 py-3 flex items-center gap-3 glow-purple">
                <div className="w-9 h-9 bg-purple-500/15 rounded-full flex items-center justify-center">
                  <BrainCircuit size={16} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold">AI Module</p>
                  <p className="text-purple-400 text-[10px]">Active</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ 3 SERVICE PILLARS ═══ */}
      <section id="services" className="py-20 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-cyan-400 text-[11px] font-semibold tracking-wider uppercase mb-2">Services</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Three pillars. One company.</h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {[
              {
                icon: Laptop, color: 'blue', title: 'Software Development',
                items: ['Websites & Landing Pages', 'Web Applications & SaaS', 'Mobile Apps (iOS & Android)', 'E-Commerce Platforms'],
                border: 'border-blue-500/15 hover:border-blue-500/30',
                iconBg: 'bg-blue-500/10', iconColor: 'text-blue-400',
                glow: 'hover:shadow-[0_0_40px_rgba(37,99,235,0.08)]',
              },
              {
                icon: Cog, color: 'cyan', title: 'Engineering & Automation',
                items: ['Robotics Systems', 'IoT & Smart Devices', 'Arduino & ESP32 Projects', 'Drones & Autonomous Vehicles'],
                border: 'border-cyan-500/15 hover:border-cyan-500/30',
                iconBg: 'bg-cyan-500/10', iconColor: 'text-cyan-400',
                glow: 'hover:shadow-[0_0_40px_rgba(6,182,212,0.08)]',
              },
              {
                icon: Wrench, color: 'purple', title: 'Technical Consulting',
                items: ['Project Planning & Scoping', 'System Architecture', 'Technology Strategy', 'Code Reviews & Audits'],
                border: 'border-purple-500/15 hover:border-purple-500/30',
                iconBg: 'bg-purple-500/10', iconColor: 'text-purple-400',
                glow: 'hover:shadow-[0_0_40px_rgba(139,92,246,0.08)]',
              },
            ].map((pillar, i) => (
              <motion.div key={pillar.title} {...fade(i * 0.1)}
                className={`panel ${pillar.border} ${pillar.glow} p-7 cursor-pointer`}>
                <div className={`w-12 h-12 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <pillar.icon size={22} className={pillar.iconColor} />
                </div>
                <h3 className="text-white font-bold text-lg mb-4">{pillar.title}</h3>
                <ul className="space-y-2.5">
                  {pillar.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-400 text-[13px]">
                      <ChevronRight size={12} className={pillar.iconColor} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DEXUSLAB — EXPANDED ═══ */}
      <section className="py-20 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-purple-400 text-[11px] font-semibold tracking-wider uppercase mb-2">Flagship Product</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
              Dexus<span className="gradient-text-purple">Lab</span>
            </h2>
            <p className="text-slate-400 text-[15px] mt-3 max-w-lg mx-auto">
              The all-in-one learning platform for engineering, programming, and robotics. Free. Multilingual. Built for builders.
            </p>
          </motion.div>

          {/* Feature grid mimicking app dashboard */}
          <div className="grid lg:grid-cols-4 gap-4 mb-8">
            {/* Main preview panel */}
            <motion.div {...fade(0.1)} className="lg:col-span-2 lg:row-span-2 panel-cyan p-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/[0.06] rounded-full blur-[80px]" />
              <div className="relative">
                <span className="gradient-text-purple text-xs font-bold tracking-wider uppercase">Learning Platform</span>
                <h3 className="text-white text-2xl font-bold mt-2 mb-3">Learn. Build. Certify.</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5">
                  13+ structured courses covering programming, robotics, web development, cybersecurity, and AI. Available in 4 languages with hands-on projects and certificates.
                </p>
                <div className="relative rounded-xl overflow-hidden border border-white/[0.06] mb-5">
                  <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=340&fit=crop" alt="DexusLab dashboard" width={600} height={340} className="w-full h-auto object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="text-[9px] font-bold tracking-wider uppercase text-white bg-purple-500/80 px-2 py-0.5 rounded">Live Courses</span>
                    <span className="text-[9px] font-bold tracking-wider uppercase text-white bg-cyan-500/80 px-2 py-0.5 rounded">Projects</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="inline-flex items-center gap-1.5 bg-white text-slate-900 text-xs font-semibold px-4 py-2 rounded-lg">App Store</a>
                  <a href="#" className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 text-white text-xs font-medium px-4 py-2 rounded-lg">Google Play</a>
                  <a href="https://dexuslab.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-cyan-400 text-xs font-semibold px-3 py-2 hover:text-cyan-300">
                    <ExternalLink size={12} /> dexuslab.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Side feature cards */}
            {[
              { icon: Layers, title: '13+ Courses', desc: 'Robotics, Web Dev, AI, Security', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: GraduationCap, title: 'Certificates', desc: 'Earn credentials on completion', color: 'text-purple-400', bg: 'bg-purple-500/10' },
              { icon: Terminal, title: 'Live Code Editor', desc: 'Write & run code in-browser', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
              { icon: Globe, title: '4 Languages', desc: 'EN · FR · ES · HT', color: 'text-blue-300', bg: 'bg-blue-400/10' },
            ].map((f, i) => (
              <motion.div key={f.title} {...fade(0.15 + i * 0.08)} className="panel p-5">
                <div className={`w-10 h-10 ${f.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <f.icon size={18} className={f.color} />
                </div>
                <p className="text-white font-semibold text-sm">{f.title}</p>
                <p className="text-slate-500 text-[11px] mt-1">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BOOKSTORE PREVIEW ═══ */}
      <section className="py-20 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="flex items-center justify-between mb-10">
            <div>
              <p className="text-blue-400 text-[11px] font-semibold tracking-wider uppercase mb-2">Bookstore</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Engineering Library</h2>
            </div>
            <Link href="/store" className="group hidden sm:inline-flex items-center gap-1.5 text-cyan-400 text-sm font-semibold hover:text-cyan-300">
              Browse All <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Robotique Moderne', sub: 'Complete Robotics Guide', price: '$12.99', tag: 'Available', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop' },
              { title: 'Python for Engineers', sub: 'Zero to Automation', price: '$9.99', tag: 'Coming Soon', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop' },
              { title: 'ESP32 Master Class', sub: 'Advanced IoT Projects', price: '$11.99', tag: 'Coming Soon', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=400&fit=crop' },
              { title: 'Build Your First Drone', sub: 'Assembly & Programming', price: '$14.99', tag: 'Coming Soon', image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=400&fit=crop' },
            ].map((book, i) => (
              <motion.div key={book.title} {...fade(i * 0.08)}>
                <Link href="/store" className="panel block overflow-hidden group">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={book.image} alt={book.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] via-[#111a2e]/40 to-transparent" />
                    <span className={`absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                      book.tag === 'Available' ? 'bg-cyan-500/80 text-white' : 'bg-white/10 text-slate-300 border border-white/10'
                    }`}>{book.tag}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-white font-semibold text-sm">{book.title}</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">{book.sub}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-cyan-400 font-bold text-sm">{book.price}</span>
                      <ChevronRight size={14} className="text-slate-600 group-hover:text-cyan-400 transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-cyan-400 text-[11px] font-semibold tracking-wider uppercase mb-2">Contact</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Start your project</h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            {/* Info */}
            <motion.div {...fade(0.1)} className="lg:col-span-2 space-y-4">
              <div className="panel p-6">
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5">
                  Whether you need software, robotics, consulting, or want to discuss a partnership — we respond within 24 hours.
                </p>
                {[
                  { icon: Mail, label: 'support@dexuslab.com', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                  { icon: Phone, label: '(863) 207-8619', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
                  { icon: MapPin, label: 'Orlando, Florida', color: 'text-purple-400', bg: 'bg-purple-500/10' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 ${c.bg} rounded-lg flex items-center justify-center shrink-0`}>
                      <c.icon size={14} className={c.color} />
                    </div>
                    <span className="text-slate-300 text-[13px]">{c.label}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-white/[0.04]">
                  <p className="text-slate-600 text-[11px]">@DexAtomes on all platforms</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div {...fade(0.2)} className="lg:col-span-3">
              {sent ? (
                <div className="panel p-10 text-center">
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={20} className="text-cyan-400" />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm">We&#39;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="panel p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Name</label>
                      <input name="name" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Email</label>
                      <input name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Service Needed</label>
                    <select name="service" className={inputClass}>
                      <option>Software Development</option>
                      <option>Engineering & Automation</option>
                      <option>Technical Consulting</option>
                      <option>Book / Store Inquiry</option>
                      <option>DexusLab</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors shadow-sm shadow-blue-600/20">
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/[0.04] py-8 px-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <p className="text-slate-600 text-[11px]">© 2026 Dex Atomes LLC · Orlando, FL</p>
          </div>
          <div className="flex gap-5">
            {[
              { label: 'dexuslab.com', href: 'https://dexuslab.com' },
              { label: '@DexAtomes', href: 'https://instagram.com/DexAtomes' },
              { label: 'GitHub', href: 'https://github.com/desulmejeanclaudejunior-byte' },
              { label: 'support@dexuslab.com', href: 'mailto:support@dexuslab.com' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-[11px] transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
