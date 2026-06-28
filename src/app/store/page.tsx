'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const chapters = [
  'Introduction à la Robotique',
  'Arduino — Les Bases',
  'ESP32 — WiFi & Bluetooth',
  'Capteurs & Actionneurs',
  'Programmation en C/C++',
  'Intelligence Artificielle',
  'Drones & Véhicules Autonomes',
  'Communication Sans Fil',
  'Projets Pratiques Guidés',
  'Ressources & Prochaines Étapes',
]

const comingSoon = [
  { title: 'Python for Engineers', desc: 'Complete Python course from zero to automation.', tag: 'Q3 2026' },
  { title: 'ESP32 Master Class', desc: 'Advanced IoT projects with WiFi, BLE, and sensors.', tag: 'Q4 2026' },
  { title: 'Build Your First Drone', desc: 'Step-by-step drone assembly and programming guide.', tag: '2027' },
]

export default function StorePage() {
  const [buying, setBuying] = useState(false)

  async function handleBuy() {
    setBuying(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else alert('Store is not configured yet. Please check back soon.')
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setBuying(false)
    }
  }

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#0d1f3c] to-[#0e2248] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold text-blue-400 tracking-[2.5px] uppercase mb-4">
            Digital Store
          </p>
          <h1 className="font-extrabold text-white text-4xl md:text-5xl tracking-tight mb-4">
            Tools for <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Engineers</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Ebooks, guides, and resources built by engineers, for engineers.
          </p>
        </div>
      </section>

      {/* Featured Product */}
      <section className="bg-[#f0f4fa] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_8px_32px_rgba(0,85,204,0.08)] p-8 md:p-12 grid md:grid-cols-2 gap-12 items-start">
            {/* Book visual */}
            <div className="flex justify-center">
              <div className="relative w-56">
                <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 rounded-2xl shadow-2xl p-8 aspect-[2/3] flex flex-col items-center justify-center">
                  <div className="font-black text-white text-lg text-center leading-tight tracking-wide mb-3">
                    ROBOTIQUE
                    <br />
                    MODERNE
                  </div>
                  <div className="w-full h-px bg-white/20 mb-3" />
                  <div className="font-bold text-white/60 text-xs text-center tracking-widest uppercase mb-4">
                    DEX ATOMES
                  </div>
                  <div className="flex flex-wrap justify-center gap-1">
                    {['Arduino', 'ESP32', 'IA'].map((t) => (
                      <span key={t} className="text-[8px] text-white/50 border border-white/20 rounded-full px-2 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <span className="inline-block text-xs font-bold tracking-[2px] uppercase text-blue-500 mb-4">
                FEATURED · PDF
              </span>
              <h2 className="font-extrabold text-[#0A1628] text-3xl tracking-tight mb-2">
                Robotique Moderne
              </h2>
              <p className="text-lg text-slate-500 italic mb-4">
                Guide Complet pour Débutants
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                A 129-page illustrated French robotics guide covering Arduino, ESP32,
                AI, drones, sensors, and hands-on projects. Written by an aerospace
                engineering student for the next generation of engineers.
              </p>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-400">129 pages · 10 chapters · French</span>
              </div>

              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <span className="font-extrabold text-[#0A1628] text-4xl">$12.99</span>
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0,102,204,0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBuy}
                  disabled={buying}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-colors disabled:opacity-50"
                >
                  {buying ? 'Redirecting...' : 'Buy Now — $12.99'}
                </motion.button>
              </div>

              <div className="space-y-2">
                {chapters.map((ch, i) => (
                  <div key={ch} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className="w-6 h-6 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center text-xs font-bold text-blue-600">
                      {i + 1}
                    </span>
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="bg-[#f0f4fa] pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-extrabold text-[#0A1628] text-2xl tracking-tight mb-8 text-center">
            Coming Soon
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {comingSoon.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-6"
              >
                <span className="inline-block text-[10px] font-bold tracking-wider uppercase text-blue-500 bg-blue-50 px-2.5 py-1 rounded-full mb-3">
                  {p.tag}
                </span>
                <h4 className="font-bold text-[#0A1628] text-sm mb-2">{p.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{p.desc}</p>
                <button className="text-blue-600 text-xs font-semibold hover:text-blue-500 transition-colors">
                  Notify me →
                </button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
