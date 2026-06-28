'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { BookOpen, ArrowRight, CheckCircle2, Bell } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const chapters = [
  'Introduction to Robotics',
  'Arduino Fundamentals',
  'ESP32 — WiFi & Bluetooth',
  'Sensors & Actuators',
  'Programming in C/C++',
  'Artificial Intelligence',
  'Drones & Autonomous Vehicles',
  'Wireless Communication',
  'Guided Hands-on Projects',
  'Resources & Next Steps',
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
    } catch {
      alert('Something went wrong.')
    } finally {
      setBuying(false)
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-blue-950 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">Store</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Resources for builders
          </h1>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            Ebooks, guides, and tools — made by engineers, for engineers.
          </p>
        </div>
      </section>

      {/* Featured Book */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 grid md:grid-cols-5 gap-10 items-start">
            {/* Cover */}
            <div className="md:col-span-2 flex justify-center">
              <div className="w-48 aspect-[2/3] bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl shadow-xl flex flex-col items-center justify-center p-6">
                <span className="text-white font-bold text-sm text-center leading-tight tracking-wide mb-2">ROBOTIQUE MODERNE</span>
                <div className="w-12 h-px bg-white/30 mb-2" />
                <span className="text-white/60 text-[10px] tracking-widest">DEX ATOMES</span>
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-3">
              <p className="text-blue-600 text-xs font-semibold tracking-wide uppercase mb-2">PDF — Instant Download</p>
              <h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-2">Robotique Moderne</h2>
              <p className="text-slate-500 italic mb-4">Guide Complet pour Débutants</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                129 pages covering Arduino, ESP32, AI, drones, sensors, and practical projects. Written in French for the next generation of engineers.
              </p>

              <div className="space-y-2 mb-8">
                {['10 illustrated chapters', '129 pages, 50+ diagrams', 'Instant PDF download'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-10 flex-wrap">
                <span className="text-slate-900 text-3xl font-bold">$12.99</span>
                <button
                  onClick={handleBuy}
                  disabled={buying}
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm disabled:opacity-50"
                >
                  <BookOpen size={15} />
                  {buying ? 'Redirecting...' : 'Buy Now'}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div>
                <p className="text-slate-900 font-semibold text-sm mb-3">Table of Contents</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {chapters.map((ch, i) => (
                    <div key={ch} className="flex items-center gap-2.5 text-sm text-slate-600">
                      <span className="w-5 h-5 bg-blue-50 rounded text-blue-600 text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      {ch}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 bg-slate-50 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-slate-900 text-xl font-bold text-center mb-8">Coming Soon</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { title: 'Python for Engineers', desc: 'Complete Python course from zero to automation.', tag: 'Q3 2026' },
              { title: 'ESP32 Master Class', desc: 'Advanced IoT projects with WiFi, BLE, and sensors.', tag: 'Q4 2026' },
              { title: 'Build Your First Drone', desc: 'Step-by-step drone assembly and programming.', tag: '2027' },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-100 rounded-xl p-6"
              >
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-blue-600 bg-blue-50 px-2 py-1 rounded mb-3">
                  {p.tag}
                </span>
                <h4 className="text-slate-900 font-semibold text-sm mb-2">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{p.desc}</p>
                <button className="inline-flex items-center gap-1.5 text-blue-600 text-xs font-semibold hover:text-blue-700">
                  <Bell size={12} />
                  Notify me
                </button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
              &larr; Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
