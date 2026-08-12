'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, ArrowRight, CheckCircle2, Bell, Download, BookOpen, Wrench, Rocket, Heart } from 'lucide-react'

const books = [
  { title: 'Robotique Moderne', sub: 'Complete Robotics Guide · French', price: '$9.99', tag: 'Available', img: '/representation.png', real: true },
  { title: 'Arduino Mastery', sub: 'Fundamentals & Projects', price: '$19.99', tag: 'Coming 2027', img: '/arduino-cover.png', real: false },
  { title: 'ESP32 In Action', sub: 'Advanced IoT Guide', price: '$19.99', tag: 'Coming 2027', img: '/esp32-cover.png', real: false },
  { title: 'Drone Technology', sub: 'Build & Program Drones', price: '$24.99', tag: 'Coming 2027', img: '/drone-cover.png', real: false },
  { title: 'AI & ML Guide', sub: 'Machine Learning Basics', price: '$19.99', tag: 'Coming 2027', img: '/ai-ml-cover.png', real: false },
  { title: 'Python for Engineers', sub: 'Zero to Automation', price: '$14.99', tag: 'Coming 2027', img: '/python-cover.png', real: false },
]

const chapters = [
  'Introduction to Robotics',
  'Arduino Fundamentals',
  'ESP32 — WiFi & Bluetooth',
  'Sensors & Actuators',
  'C/C++ Programming',
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
      else alert('Payment system is being configured. Please check back soon or contact support@dexuslab.com')
    } catch { alert('Something went wrong. Please try again.') }
    finally { setBuying(false) }
  }

  return (
    <div className="mt-[72px]">
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#060e24 0%,#0c1a3d 100%)'}} className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-xs font-bold tracking-[3px] uppercase mb-3">Bookstore</p>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">Engineering Library</h1>
          <p className="text-slate-400 max-w-md mx-auto">Ebooks, guides, and resources for engineers and builders.</p>
        </div>
      </section>

      {/* Featured book */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#f0f4ff] rounded-2xl border border-blue-100 p-6 md:p-10 grid md:grid-cols-5 gap-8 items-start">
            {/* Cover */}
            <div className="md:col-span-2">
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-slate-200">
                <Image src="/representation.png" alt="Robotique Moderne — Guide Complet pour Débutants" width={600} height={900} className="w-full h-auto" />
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-3">
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-[10px] font-bold text-[#1a3ab5] bg-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider">Available Now · eBook</span>
                {/* Language selector */}
                <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5">
                  <span className="text-[11px] font-bold bg-[#1a3ab5] text-white px-3 py-1 rounded-md">FR</span>
                  <span className="text-[11px] font-semibold text-slate-400 px-3 py-1 rounded-md cursor-not-allowed" title="English version coming soon">EN</span>
                </div>
                <span className="text-[10px] text-slate-400 italic">English version coming soon</span>
              </div>
              <h2 className="text-slate-900 text-2xl md:text-3xl font-bold mb-1">Robotique Moderne</h2>
              <p className="text-slate-500 italic mb-1">Guide Complet pour Débutants</p>
              <p className="text-slate-400 text-sm mb-4">By Jean-Claude J. Desulme · Dex Atomes LLC</p>

              <p className="text-slate-600 text-sm leading-relaxed mb-5">
                The practical guide to robotics, Arduino, ESP32, sensors, AI, drones, and real-world projects. Written in French for beginners and future engineers. From theory to practice — learn, understand, and build your own robots.
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 mb-5 text-[12px] text-slate-500">
                <span className="flex items-center gap-1"><BookOpen size={13} className="text-[#1a3ab5]" /> 129 Pages</span>
                <span className="flex items-center gap-1"><Wrench size={13} className="text-[#1a3ab5]" /> 10 Chapters</span>
                <span className="flex items-center gap-1"><Rocket size={13} className="text-[#1a3ab5]" /> Hands-on Projects</span>
                <span className="flex items-center gap-1"><Heart size={13} className="text-[#1a3ab5]" /> Fully Illustrated</span>
              </div>

              <div className="space-y-1.5 mb-6">
                {['Arduino & ESP32 programming', 'Sensors, motors & electronics', 'AI & machine learning for robotics', 'Drones & autonomous vehicles', 'Step-by-step practical projects'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-[#1a3ab5] shrink-0" />
                    <span className="text-slate-600 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4 mb-8 flex-wrap">
                <span className="text-slate-900 text-3xl font-bold">$9.99</span>
                <button onClick={handleBuy} disabled={buying}
                  className="group inline-flex items-center gap-2 bg-[#1a3ab5] hover:bg-[#2348c7] text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-lg shadow-blue-900/20 disabled:opacity-50">
                  <ShoppingCart size={15} />
                  {buying ? 'Processing...' : 'Buy eBook — $9.99'}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>

              <div className="bg-white rounded-xl border border-slate-100 p-4">
                <p className="text-slate-900 font-semibold text-sm mb-3">Table of Contents</p>
                <div className="grid sm:grid-cols-2 gap-1.5">
                  {chapters.map((ch, i) => (
                    <div key={ch} className="flex items-center gap-2 text-[12px] text-slate-500">
                      <span className="w-5 h-5 bg-[#1a3ab5]/10 rounded text-[#1a3ab5] text-[10px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                      {ch}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All books grid */}
      <section className="py-16 bg-[#f0f4ff] px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-slate-900 text-xl font-bold mb-8">All Books</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map(b => (
              <div key={b.title} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="relative overflow-hidden">
                  <Image src={b.img} alt={b.title} width={400} height={520} className={`w-full h-auto group-hover:scale-105 transition-transform duration-500 ${!b.real ? 'brightness-50' : ''}`} />
                  {b.real ? (
                    <span className="absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-[#1a3ab5] text-white">{b.tag}</span>
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <span className="text-4xl">🔒</span>
                      <span className="text-white font-extrabold text-base tracking-wide uppercase">Coming Soon</span>
                      <span className="text-slate-300 text-[11px] font-semibold tracking-widest uppercase">2027</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-slate-900 font-bold text-sm">{b.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{b.sub}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#1a3ab5] font-bold">{b.price}</span>
                    {b.tag === 'Available' ? (
                      <button onClick={handleBuy} className="group/btn inline-flex items-center gap-1.5 text-[11px] font-semibold bg-[#1a3ab5] text-white px-3 py-1.5 rounded-lg hover:bg-[#2348c7] transition-colors">
                        <Download size={12} /> Buy eBook
                      </button>
                    ) : (
                      <button className="text-[11px] font-semibold bg-slate-100 text-slate-500 px-3 py-1.5 rounded-lg flex items-center gap-1">
                        <Bell size={11} /> Notify Me
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link href="/" className="text-slate-500 hover:text-[#1a3ab5] text-sm transition-colors">&larr; Back to home</Link>
        </div>
      </section>
    </div>
  )
}
