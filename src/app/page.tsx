'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight, Code, Cpu, Shield, BookOpen, Rocket,
  Globe, Smartphone, Mail, ExternalLink, ChevronRight,
  GraduationCap, Wrench, Play
} from 'lucide-react'
import Logo from '@/components/Logo'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay: d, ease: 'easeOut' as const },
})

export default function HomePage() {
  return (
    <div className="circuit-bg min-h-screen pt-14">
      {/* Hero strip */}
      <section className="relative overflow-hidden border-b border-white/[0.04]">
        <div className="absolute inset-0 circuit-lines opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/[0.06] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-blue-500/[0.04] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-5 py-16 lg:py-20">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Left — headline */}
            <motion.div {...fade(0)} className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-blue-500/[0.08] border border-blue-500/20 rounded-full px-3.5 py-1 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-blue-300 text-[11px] font-medium tracking-wider uppercase">Technology · Education · Innovation</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-4">
                Engineering the Future.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500">
                  One Project at a Time.
                </span>
              </h1>

              <p className="text-slate-400 text-[15px] leading-relaxed mb-8 max-w-xl">
                Dex Atomes LLC builds software, delivers engineering services, and empowers the next generation through DexusLab and our published robotics guide.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/services" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-blue-600/20">
                  Explore Services <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link href="/store" className="inline-flex items-center gap-2 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all">
                  <BookOpen size={14} /> Visit Store
                </Link>
              </div>
            </motion.div>

            {/* Right — hero image */}
            <motion.div {...fade(0.2)} className="lg:col-span-2 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] glow-border">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=420&fit=crop"
                  alt="Robotics and technology"
                  width={600} height={420}
                  className="w-full h-auto object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 bg-[#111a2e]/90 backdrop-blur-md border border-white/[0.08] rounded-xl px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="text-white text-xs font-semibold">Featured Project</p>
                    <p className="text-slate-500 text-[11px]">Autonomous Rover · ESP32</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-slate-700 rounded-full"><div className="w-[72%] h-full bg-blue-500 rounded-full" /></div>
                    <span className="text-blue-400 text-[11px] font-bold">72%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTERFACE PANELS ── */}
      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid lg:grid-cols-3 gap-4">

          {/* ── PANEL 1: SERVICES ── */}
          <motion.div {...fade(0.1)} className="panel p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Wrench size={16} className="text-blue-400" />
                <h2 className="text-white font-bold text-sm tracking-tight">Services</h2>
              </div>
              <Link href="/services" className="text-blue-400 text-[11px] font-semibold hover:text-blue-300 flex items-center gap-1">
                View All <ChevronRight size={12} />
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { icon: Globe, title: 'Web & Mobile', desc: 'Apps, sites, SaaS' },
                { icon: Cpu, title: 'Robotics & IoT', desc: 'Arduino, ESP32, drones' },
                { icon: Shield, title: 'IT Security', desc: 'Audits, networks' },
                { icon: Code, title: 'Custom Software', desc: 'End-to-end builds' },
                { icon: GraduationCap, title: 'Training', desc: '1-on-1 mentoring' },
                { icon: Smartphone, title: 'Consulting', desc: 'Tech strategy' },
              ].map((s, i) => (
                <div key={s.title} className="panel-light rounded-xl p-4 cursor-pointer group">
                  <s.icon size={18} className="text-blue-400 mb-2 group-hover:text-blue-300 transition-colors" />
                  <p className="text-white text-[13px] font-semibold">{s.title}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── PANEL 2: DEXUSLAB ── */}
          <motion.div {...fade(0.2)} className="panel p-6 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Rocket size={16} className="text-blue-400" />
                <h2 className="text-white font-bold text-sm tracking-tight">DexusLab</h2>
              </div>
              <span className="text-[10px] font-semibold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">Platform</span>
            </div>

            <p className="text-slate-400 text-[13px] leading-relaxed mb-4">
              Free multilingual learning platform. 13+ courses in programming, robotics, web dev, cybersecurity.
            </p>

            <div className="space-y-2 mb-5">
              {['13+ Courses', '4 Languages', 'iOS & Android'].map(f => (
                <div key={f} className="flex items-center gap-2 text-[12px]">
                  <div className="w-1 h-1 rounded-full bg-blue-400" />
                  <span className="text-slate-300">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex gap-2">
              <a href="https://dexuslab.com" target="_blank" rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-semibold py-2 rounded-lg transition-colors">
                <ExternalLink size={12} /> Open DexusLab
              </a>
            </div>
          </motion.div>
        </div>

        {/* Row 2 */}
        <div className="grid lg:grid-cols-3 gap-4 mt-4">

          {/* ── PANEL 3: BOOKSTORE ── */}
          <motion.div {...fade(0.3)} className="panel p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <BookOpen size={16} className="text-blue-400" />
                <h2 className="text-white font-bold text-sm tracking-tight">Bookstore</h2>
              </div>
              <Link href="/store" className="text-blue-400 text-[11px] font-semibold hover:text-blue-300 flex items-center gap-1">
                Visit Store <ChevronRight size={12} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-5 gap-5 items-start">
              {/* Book cover */}
              <div className="sm:col-span-2">
                <div className="relative rounded-xl overflow-hidden border border-white/[0.06] glow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=520&fit=crop"
                    alt="Robotique Moderne book cover"
                    width={400} height={520}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-white font-bold text-sm">ROBOTIQUE MODERNE</p>
                    <p className="text-blue-300 text-[10px] mt-0.5">Guide Complet pour Débutants</p>
                  </div>
                </div>
              </div>

              {/* Book info */}
              <div className="sm:col-span-3">
                <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">NEW RELEASE</span>
                <h3 className="text-white font-bold text-lg mt-3 mb-1">Robotique Moderne</h3>
                <p className="text-slate-500 text-xs italic mb-3">Guide Complet pour Débutants</p>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-4">
                  110 pages covering Arduino, ESP32, AI, drones, sensors, and hands-on projects. 10 illustrated chapters.
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { val: '10', label: 'Chapters' },
                    { val: '110', label: 'Pages' },
                    { val: '$12.99', label: 'PDF' },
                  ].map(s => (
                    <div key={s.label} className="bg-white/[0.03] border border-white/[0.06] rounded-lg p-2.5 text-center">
                      <p className="text-white font-bold text-sm">{s.val}</p>
                      <p className="text-slate-500 text-[10px]">{s.label}</p>
                    </div>
                  ))}
                </div>

                <Link href="/store" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg text-[13px] transition-all shadow-sm shadow-blue-600/20">
                  Buy Now — $12.99 <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* ── PANEL 4: CONTACT ── */}
          <motion.div {...fade(0.4)} className="panel p-6 flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Mail size={16} className="text-blue-400" />
              <h2 className="text-white font-bold text-sm tracking-tight">Contact</h2>
            </div>

            <p className="text-slate-400 text-[13px] leading-relaxed mb-5">
              Have a project in mind? Let&#39;s talk.
            </p>

            <div className="space-y-3 mb-5">
              {[
                { label: 'support@dexuslab.com', sub: 'Email' },
                { label: '(863) 207-8619', sub: 'Phone' },
                { label: 'Orlando, Florida', sub: 'Location' },
                { label: '@DexAtomes', sub: 'Social' },
              ].map(c => (
                <div key={c.label} className="flex items-center justify-between">
                  <span className="text-slate-300 text-[12px]">{c.label}</span>
                  <span className="text-slate-600 text-[10px] uppercase tracking-wider">{c.sub}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="mt-auto inline-flex items-center justify-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 text-white text-[12px] font-semibold py-2 rounded-lg transition-all">
              <Mail size={12} /> Send Message
            </Link>
          </motion.div>
        </div>

        {/* Row 3 — Courses preview + quick links */}
        <div className="grid lg:grid-cols-4 gap-4 mt-4">
          {/* Course cards */}
          {[
            { title: 'Robotics & Automation', img: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=300&h=200&fit=crop', count: '12 courses' },
            { title: 'Cybersecurity', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=300&h=200&fit=crop', count: '10 courses' },
            { title: 'Web Development', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop', count: '11 courses' },
            { title: 'AI & Machine Learning', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=300&h=200&fit=crop', count: '9 courses' },
          ].map((c, i) => (
            <motion.div key={c.title} {...fade(0.3 + i * 0.08)}>
              <Link href="/courses" className="panel block overflow-hidden group">
                <div className="relative h-28 overflow-hidden">
                  <Image src={c.img} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] to-transparent" />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-white text-[13px] font-semibold">{c.title}</p>
                    <p className="text-slate-500 text-[11px] mt-0.5">{c.count}</p>
                  </div>
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-blue-400 transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <motion.div {...fade(0.5)} className="mt-8 mb-6 border-t border-white/[0.04] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo size="sm" />
            <p className="text-slate-600 text-[11px]">© 2026 Dex Atomes LLC · Orlando, FL</p>
          </div>
          <div className="flex gap-4">
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
        </motion.div>
      </div>
    </div>
  )
}
