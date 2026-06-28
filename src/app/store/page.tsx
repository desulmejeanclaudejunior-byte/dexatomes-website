'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BookOpen, ArrowRight, CheckCircle2, Bell } from 'lucide-react'
import Footer from '@/components/Footer'

const chapters = [
  'Introduction to Robotics', 'Arduino Fundamentals', 'ESP32 — WiFi & Bluetooth',
  'Sensors & Actuators', 'Programming in C/C++', 'Artificial Intelligence',
  'Drones & Autonomous Vehicles', 'Wireless Communication',
  'Guided Hands-on Projects', 'Resources & Next Steps',
]

export default function StorePage() {
  const [buying, setBuying] = useState(false)

  async function handleBuy() {
    setBuying(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else alert('Store is being configured. Check back soon!')
    } catch { alert('Something went wrong.') }
    finally { setBuying(false) }
  }

  return (
    <>
      <div className="circuit-bg pt-14">
        <section className="border-b border-white/[0.04] py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 text-[11px] font-semibold tracking-wider uppercase mb-3">Store</p>
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">Resources for builders</h1>
            <p className="text-slate-400 max-w-md mx-auto text-[15px]">Ebooks, guides, and tools made by engineers.</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 py-12">
          <div className="panel p-6 md:p-8 grid md:grid-cols-5 gap-8 items-start">
            {/* Cover */}
            <div className="md:col-span-2">
              <div className="relative rounded-xl overflow-hidden border border-white/[0.06] glow-sm">
                <Image
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=520&fit=crop"
                  alt="Robotique Moderne"
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

            {/* Info */}
            <div className="md:col-span-3">
              <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">PDF — INSTANT DOWNLOAD</span>
              <h2 className="text-white text-2xl font-bold mt-3 mb-1">Robotique Moderne</h2>
              <p className="text-slate-500 text-sm italic mb-4">Guide Complet pour Débutants</p>

              <p className="text-slate-400 text-[13px] leading-relaxed mb-5">
                110 pages covering Arduino, ESP32, AI, drones, sensors, and hands-on projects. 10 illustrated chapters written for the next generation of engineers.
              </p>

              <div className="space-y-2 mb-5">
                {['10 illustrated chapters', '110 pages, 50+ diagrams', 'Arduino, ESP32, AI, drones, sensors', 'Instant PDF download'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
                    <span className="text-slate-300 text-[13px]">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <span className="text-white text-3xl font-bold">$12.99</span>
                <button onClick={handleBuy} disabled={buying}
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all disabled:opacity-50 shadow-sm shadow-blue-600/20">
                  <BookOpen size={14} />
                  {buying ? 'Redirecting...' : 'Buy Now — $12.99'}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <p className="text-white font-semibold text-sm mb-3">Table of Contents</p>
              <div className="grid sm:grid-cols-2 gap-2">
                {chapters.map((ch, i) => (
                  <div key={ch} className="flex items-center gap-2 text-[12px] text-slate-400">
                    <span className="w-5 h-5 bg-blue-500/10 rounded text-blue-400 text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <h3 className="text-white font-bold text-lg text-center mt-12 mb-6">Coming Soon</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { title: 'Python for Engineers', desc: 'Zero to automation.', tag: 'Q3 2026' },
              { title: 'ESP32 Master Class', desc: 'Advanced IoT projects.', tag: 'Q4 2026' },
              { title: 'Build Your First Drone', desc: 'Assembly & programming.', tag: '2027' },
            ].map(p => (
              <div key={p.title} className="panel p-5">
                <span className="text-[9px] font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full">{p.tag}</span>
                <h4 className="text-white font-semibold text-[13px] mt-2 mb-1">{p.title}</h4>
                <p className="text-slate-500 text-[11px] mb-3">{p.desc}</p>
                <button className="inline-flex items-center gap-1 text-blue-400 text-[11px] font-semibold hover:text-blue-300">
                  <Bell size={11} /> Notify me
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">&larr; Back to home</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
