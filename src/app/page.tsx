'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, BookOpen, Rocket, ExternalLink, Mail, Phone, MapPin,
  ChevronRight, Globe, Layers, Terminal, GraduationCap, Send,
  Laptop, Cog, Wrench, BrainCircuit, CheckCircle2, ShoppingCart
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

  const inputClass = 'w-full bg-white/[0.03] border border-[#00E5FF]/[0.1] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#00E5FF]/40 focus:ring-1 focus:ring-[#00E5FF]/20 transition-all'

  return (
    <div className="circuit-bg min-h-screen pt-14">

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#00E5FF]/[0.04] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/[0.05] rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-[#00FFC6]/[0.03] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-[#00E5FF]/[0.06] border border-[#00E5FF]/15 rounded-full px-3.5 py-1 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="text-[#00E5FF] text-[11px] font-medium tracking-wider uppercase">Technology Ecosystem</span>
              </motion.div>

              <motion.h1 {...fade(0.1)} className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-5">
                <span className="text-white">Engineering the Future.</span>
                <br />
                <span className="gradient-blue-cyan">One Project at a Time.</span>
              </motion.h1>

              <motion.p {...fade(0.2)} className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-xl">
                Dex Atomes LLC is a technology company delivering software development, robotics engineering, and technical education — powering innovators and enterprises.
              </motion.p>

              <motion.div {...fade(0.3)} className="flex flex-wrap gap-3 mb-10">
                <Link href="/services" className="group btn-accent inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm">
                  Explore Services <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/store" className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] border border-[#00E5FF]/15 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all hover:border-[#00E5FF]/30">
                  <BookOpen size={14} className="text-[#00E5FF]" /> Visit Store
                </Link>
              </motion.div>

              <motion.div {...fade(0.4)} className="flex flex-wrap gap-2">
                {[
                  { label: 'Software', c: 'text-blue-400 border-blue-500/20 bg-blue-500/[0.06]' },
                  { label: 'Robotics', c: 'text-[#00E5FF] border-[#00E5FF]/20 bg-[#00E5FF]/[0.06]' },
                  { label: 'Education', c: 'text-[#00FFC6] border-[#00FFC6]/20 bg-[#00FFC6]/[0.06]' },
                  { label: 'DexusLab', c: 'text-[#00E5FF] border-[#00E5FF]/15 bg-[#00E5FF]/[0.04]' },
                  { label: 'Bookstore', c: 'text-blue-300 border-blue-400/20 bg-blue-400/[0.06]' },
                ].map(p => (
                  <span key={p.label} className={`text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full border ${p.c}`}>{p.label}</span>
                ))}
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95, x: 20 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-[#00E5FF]/10 glow-cyan">
                <Image src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=700&h=500&fit=crop" alt="Robotics" width={700} height={500} className="w-full h-auto object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#111a2e]/90 backdrop-blur-md border border-[#00E5FF]/10 rounded-xl px-4 py-3 flex items-center justify-between">
                  <div><p className="text-white text-xs font-semibold">Active Project</p><p className="text-[#00E5FF] text-[11px]">Autonomous Rover · ESP32</p></div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-700 rounded-full"><div className="w-[72%] h-full bg-gradient-to-r from-blue-500 to-[#00E5FF] rounded-full" /></div>
                    <span className="text-[#00E5FF] text-[11px] font-bold">72%</span>
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-3 top-6 bg-[#111a2e]/90 backdrop-blur-md border border-[#00FFC6]/15 rounded-xl px-4 py-3 flex items-center gap-3 glow-teal">
                <div className="w-9 h-9 bg-[#00FFC6]/10 rounded-full flex items-center justify-center">
                  <BrainCircuit size={16} className="text-[#00FFC6]" />
                </div>
                <div><p className="text-white text-[11px] font-semibold">AI Module</p><p className="text-[#00FFC6] text-[10px]">Active</p></div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="divider-cyan" />
      </section>

      {/* ═══ 3 SERVICE PILLARS ═══ */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[#00E5FF] text-[11px] font-semibold tracking-wider uppercase mb-2">Services</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Three pillars. <span className="gradient-cyan">One company.</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {[
              { icon: Laptop, title: 'Software Development', items: ['Websites & Landing Pages', 'Web Applications & SaaS', 'Mobile Apps (iOS & Android)', 'E-Commerce Platforms'],
                accent: '#3b82f6', border: 'hover:border-blue-500/25', iconBg: 'bg-blue-500/10', iconColor: 'text-blue-400' },
              { icon: Cog, title: 'Engineering & Automation', items: ['Robotics Systems', 'IoT & Smart Devices', 'Arduino & ESP32 Projects', 'Drones & Autonomous Vehicles'],
                accent: '#00E5FF', border: 'hover:border-[#00E5FF]/25', iconBg: 'bg-[#00E5FF]/10', iconColor: 'text-[#00E5FF]' },
              { icon: Wrench, title: 'Technical Consulting', items: ['Project Planning & Scoping', 'System Architecture', 'Technology Strategy', 'Code Reviews & Audits'],
                accent: '#00FFC6', border: 'hover:border-[#00FFC6]/25', iconBg: 'bg-[#00FFC6]/10', iconColor: 'text-[#00FFC6]' },
            ].map((p, i) => (
              <motion.div key={p.title} {...fade(i * 0.1)} className={`panel ${p.border} p-7 cursor-pointer`}>
                <div className={`w-12 h-12 ${p.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  <p.icon size={22} className={p.iconColor} />
                </div>
                <h3 className="text-white font-bold text-lg mb-4">{p.title}</h3>
                <ul className="space-y-2.5">
                  {p.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-slate-400 text-[13px]">
                      <ChevronRight size={12} className={p.iconColor} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-cyan mt-20" />
      </section>

      {/* ═══ DEXUSLAB ═══ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[#00FFC6] text-[11px] font-semibold tracking-wider uppercase mb-2">Flagship Product</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Dexus<span className="gradient-cyan">Lab</span></h2>
            <p className="text-slate-400 text-[15px] mt-3 max-w-lg mx-auto">The all-in-one learning platform for engineering, programming, and robotics.</p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-4 mb-8">
            <motion.div {...fade(0.1)} className="lg:col-span-2 lg:row-span-2 panel border-[#00E5FF]/10 p-6 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#00E5FF]/[0.04] rounded-full blur-[80px]" />
              <div className="relative">
                <span className="gradient-cyan text-xs font-bold tracking-wider uppercase">Learning Platform</span>
                <h3 className="text-white text-2xl font-bold mt-2 mb-3">Learn. Build. Certify.</h3>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5">13+ courses covering programming, robotics, web development, cybersecurity, and AI. Available in 4 languages.</p>
                <div className="relative rounded-xl overflow-hidden border border-[#00E5FF]/[0.08] mb-5">
                  <Image src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=340&fit=crop" alt="DexusLab" width={600} height={340} className="w-full h-auto object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="text-[9px] font-bold tracking-wider uppercase text-[#0c1222] bg-[#00E5FF]/90 px-2 py-0.5 rounded">Courses</span>
                    <span className="text-[9px] font-bold tracking-wider uppercase text-[#0c1222] bg-[#00FFC6]/90 px-2 py-0.5 rounded">Projects</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <a href="#" className="btn-accent inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-lg">App Store</a>
                  <a href="#" className="inline-flex items-center gap-1.5 bg-white/[0.06] border border-[#00E5FF]/15 text-white text-xs font-medium px-4 py-2 rounded-lg hover:border-[#00E5FF]/30 transition-all">Google Play</a>
                  <a href="https://dexuslab.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[#00E5FF] text-xs font-semibold px-3 py-2 hover:text-[#00FFC6] transition-colors">
                    <ExternalLink size={12} /> dexuslab.com
                  </a>
                </div>
              </div>
            </motion.div>

            {[
              { icon: Layers, title: '13+ Courses', desc: 'Robotics, Web Dev, AI, Security', color: 'text-blue-400', bg: 'bg-blue-500/10' },
              { icon: GraduationCap, title: 'Certificates', desc: 'Earn credentials on completion', color: 'text-[#00FFC6]', bg: 'bg-[#00FFC6]/10' },
              { icon: Terminal, title: 'Code Editor', desc: 'Write & run code in-browser', color: 'text-[#00E5FF]', bg: 'bg-[#00E5FF]/10' },
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
        <div className="divider-cyan" />
      </section>

      {/* ═══ BOOKSTORE ═══ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#00E5FF] text-[11px] font-semibold tracking-wider uppercase mb-2">Bookstore</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Engineering <span className="gradient-cyan">Library</span></h2>
            </div>
            <Link href="/store" className="group hidden sm:inline-flex items-center gap-1.5 text-[#00E5FF] text-sm font-semibold hover:text-[#00FFC6] transition-colors">
              Browse All <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Robotique Moderne', sub: 'Complete Robotics Guide', price: '$12.99', tag: 'Available', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=400&fit=crop' },
              { title: 'Python for Engineers', sub: 'Zero to Automation', price: '$9.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=400&fit=crop' },
              { title: 'ESP32 Master Class', sub: 'Advanced IoT Projects', price: '$11.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=400&fit=crop' },
              { title: 'Build Your First Drone', sub: 'Assembly & Programming', price: '$14.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=300&h=400&fit=crop' },
            ].map((b, i) => (
              <motion.div key={b.title} {...fade(i * 0.08)}>
                <Link href="/store" className="panel block overflow-hidden group">
                  <div className="relative h-44 overflow-hidden">
                    <Image src={b.img} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-75" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] via-[#111a2e]/40 to-transparent" />
                    <span className={`absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                      b.tag === 'Available' ? 'bg-[#00E5FF] text-[#0c1222]' : 'bg-white/10 text-slate-300 border border-white/10'
                    }`}>{b.tag}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-white font-semibold text-sm">{b.title}</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">{b.sub}</p>
                    <div className="flex items-center justify-between mt-3">
                      <span className="text-[#00E5FF] font-bold text-sm">{b.price}</span>
                      <ChevronRight size={14} className="text-slate-600 group-hover:text-[#00E5FF] transition-colors" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="divider-cyan mt-20" />
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div {...fade()} className="text-center mb-14">
            <p className="text-[#00E5FF] text-[11px] font-semibold tracking-wider uppercase mb-2">Contact</p>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight">Start your <span className="gradient-cyan">project</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
            <motion.div {...fade(0.1)} className="lg:col-span-2">
              <div className="panel border-[#00E5FF]/10 p-6">
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5">We respond within 24 hours. Whether it&#39;s software, robotics, consulting, or partnerships.</p>
                {[
                  { icon: Mail, label: 'support@dexuslab.com', color: 'text-[#00E5FF]', bg: 'bg-[#00E5FF]/10' },
                  { icon: Phone, label: '(863) 207-8619', color: 'text-[#00FFC6]', bg: 'bg-[#00FFC6]/10' },
                  { icon: MapPin, label: 'Orlando, Florida', color: 'text-blue-400', bg: 'bg-blue-500/10' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3 mb-3">
                    <div className={`w-8 h-8 ${c.bg} rounded-lg flex items-center justify-center shrink-0`}><c.icon size={14} className={c.color} /></div>
                    <span className="text-slate-300 text-[13px]">{c.label}</span>
                  </div>
                ))}
                <div className="divider-cyan my-4" />
                <p className="text-slate-600 text-[11px]">@DexAtomes on all platforms</p>
              </div>
            </motion.div>

            <motion.div {...fade(0.2)} className="lg:col-span-3">
              {sent ? (
                <div className="panel border-[#00E5FF]/15 p-10 text-center">
                  <div className="w-12 h-12 bg-[#00FFC6]/10 rounded-full flex items-center justify-center mx-auto mb-4"><Send size={20} className="text-[#00FFC6]" /></div>
                  <h3 className="text-white text-lg font-bold mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm">We&#39;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="panel border-[#00E5FF]/10 p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div><label className="block text-[11px] font-semibold text-[#00E5FF]/60 mb-1.5 uppercase tracking-wider">Name</label><input name="name" required placeholder="Your name" className={inputClass} /></div>
                    <div><label className="block text-[11px] font-semibold text-[#00E5FF]/60 mb-1.5 uppercase tracking-wider">Email</label><input name="email" type="email" required placeholder="you@email.com" className={inputClass} /></div>
                  </div>
                  <div><label className="block text-[11px] font-semibold text-[#00E5FF]/60 mb-1.5 uppercase tracking-wider">Service Needed</label>
                    <select name="service" className={inputClass}><option>Software Development</option><option>Engineering & Automation</option><option>Technical Consulting</option><option>Book / Store</option><option>DexusLab</option><option>Other</option></select>
                  </div>
                  <div><label className="block text-[11px] font-semibold text-[#00E5FF]/60 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="w-full btn-accent py-2.5 rounded-lg text-sm">Send Message</button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00E5FF]/[0.06] py-8 px-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4"><Logo size="sm" /><p className="text-slate-600 text-[11px]">© 2026 Dex Atomes LLC · Orlando, FL</p></div>
          <div className="flex gap-5">
            {[
              { label: 'dexuslab.com', href: 'https://dexuslab.com' },
              { label: '@DexAtomes', href: 'https://instagram.com/DexAtomes' },
              { label: 'GitHub', href: 'https://github.com/desulmejeanclaudejunior-byte' },
              { label: 'support@dexuslab.com', href: 'mailto:support@dexuslab.com' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#00E5FF] text-[11px] transition-colors">{l.label}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
