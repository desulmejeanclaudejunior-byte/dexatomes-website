'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, CheckCircle2, Bell, Eye, ShoppingCart, ChevronRight } from 'lucide-react'
import Footer from '@/components/Footer'

const fade = (d = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: d, ease: 'easeOut' as const },
})

const categories = [
  { label: 'All', active: true },
  { label: 'Engineering', active: false },
  { label: 'Programming', active: false },
  { label: 'Digital Products', active: false },
]

const books = [
  {
    id: 'robotique-moderne',
    title: 'Robotique Moderne',
    subtitle: 'Guide Complet pour Débutants',
    price: '$12.99',
    pages: '110 pages',
    lang: 'French',
    tag: 'Available',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=520&fit=crop',
    desc: 'Complete robotics guide: Arduino, ESP32, AI, drones, sensors. 10 illustrated chapters.',
    featured: true,
  },
  {
    id: 'python-engineers',
    title: 'Python for Engineers',
    subtitle: 'Zero to Automation',
    price: '$9.99',
    pages: '~120 pages',
    lang: 'English',
    tag: 'Coming Soon',
    category: 'Programming',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=520&fit=crop',
    desc: 'Python from the ground up — built for engineers who want to automate everything.',
    featured: false,
  },
  {
    id: 'esp32-master',
    title: 'ESP32 Master Class',
    subtitle: 'Advanced IoT Projects',
    price: '$11.99',
    pages: '~100 pages',
    lang: 'English',
    tag: 'Coming Soon',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=520&fit=crop',
    desc: 'WiFi, BLE, sensors, cloud — advanced ESP32 projects for real-world IoT.',
    featured: false,
  },
  {
    id: 'drone-build',
    title: 'Build Your First Drone',
    subtitle: 'Assembly & Programming Guide',
    price: '$14.99',
    pages: '~90 pages',
    lang: 'English',
    tag: 'Coming Soon',
    category: 'Engineering',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=520&fit=crop',
    desc: 'Step-by-step drone assembly, flight controller setup, and programming.',
    featured: false,
  },
]

const chapters = [
  'Introduction to Robotics', 'Arduino Fundamentals', 'ESP32 — WiFi & Bluetooth',
  'Sensors & Actuators', 'C/C++ Programming', 'Artificial Intelligence',
  'Drones & Autonomous Vehicles', 'Wireless Communication',
  'Guided Projects', 'Resources & Next Steps',
]

export default function StorePage() {
  const [buying, setBuying] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All' ? books : books.filter(b => b.category === activeCategory)

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
      <div className="circuit-bg pt-14 min-h-screen">
        {/* Hero */}
        <section className="border-b border-white/[0.04] py-16 px-5">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-cyan-400 text-[11px] font-semibold tracking-wider uppercase mb-3">Bookstore</p>
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">Engineering Library</h1>
            <p className="text-slate-400 max-w-md mx-auto text-[15px]">Ebooks, guides, templates, and tools — built by engineers for engineers.</p>
          </div>
        </section>

        {/* Category tabs */}
        <div className="max-w-5xl mx-auto px-5 pt-8">
          <div className="flex gap-2 mb-8 flex-wrap">
            {categories.map(c => (
              <button key={c.label} onClick={() => setActiveCategory(c.label)}
                className={`text-[12px] font-semibold px-4 py-1.5 rounded-lg transition-all ${
                  activeCategory === c.label
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/[0.04] text-slate-400 hover:text-white border border-white/[0.06]'
                }`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured book — expanded */}
        <section className="max-w-5xl mx-auto px-5 mb-12">
          <motion.div {...fade()} className="panel p-6 md:p-8 grid md:grid-cols-5 gap-8 items-start border-cyan-500/15">
            <div className="md:col-span-2">
              <div className="relative rounded-xl overflow-hidden border border-cyan-500/10 glow-cyan">
                <Image src={books[0].image} alt={books[0].title} width={400} height={520} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1222] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-sm">ROBOTIQUE MODERNE</p>
                  <p className="text-cyan-300 text-[10px] mt-0.5">Guide Complet pour Débutants</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="text-[10px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full">PDF — INSTANT DOWNLOAD</span>
              <h2 className="text-white text-2xl font-bold mt-3 mb-1">Robotique Moderne</h2>
              <p className="text-slate-500 text-sm italic mb-4">Guide Complet pour Débutants · {books[0].lang}</p>
              <p className="text-slate-400 text-[13px] leading-relaxed mb-5">{books[0].desc}</p>
              <div className="space-y-2 mb-5">
                {['10 illustrated chapters', '110 pages, 50+ diagrams', 'Arduino, ESP32, AI, drones, sensors', 'Instant PDF download'].map(f => (
                  <div key={f} className="flex items-center gap-2">
                    <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                    <span className="text-slate-300 text-[13px]">{f}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span className="text-white text-3xl font-bold">$12.99</span>
                <button onClick={handleBuy} disabled={buying}
                  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all disabled:opacity-50">
                  <ShoppingCart size={14} /> {buying ? 'Redirecting...' : 'Buy Now'}
                  <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              <p className="text-white font-semibold text-xs mb-2 uppercase tracking-wider text-slate-400">Table of Contents</p>
              <div className="grid sm:grid-cols-2 gap-1.5">
                {chapters.map((ch, i) => (
                  <div key={ch} className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="w-4 h-4 bg-blue-500/10 rounded text-blue-400 text-[9px] font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                    {ch}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Books grid */}
        <section className="max-w-5xl mx-auto px-5 pb-16">
          <h3 className="text-white font-bold text-lg mb-6">{activeCategory === 'All' ? 'All Products' : activeCategory}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map((book, i) => (
              <motion.div key={book.id} {...fade(i * 0.08)} className="panel overflow-hidden group cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  <Image src={book.image} alt={book.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111a2e] via-[#111a2e]/40 to-transparent" />
                  <span className={`absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${
                    book.tag === 'Available' ? 'bg-cyan-500/80 text-white' : 'bg-white/10 text-slate-300 border border-white/10'
                  }`}>{book.tag}</span>
                </div>
                <div className="p-4">
                  <p className="text-white font-semibold text-sm">{book.title}</p>
                  <p className="text-slate-500 text-[11px] mt-0.5">{book.subtitle}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-cyan-400 font-bold text-sm">{book.price}</span>
                    <div className="flex gap-1.5">
                      {book.tag === 'Available' ? (
                        <button onClick={handleBuy} className="text-[10px] font-semibold bg-blue-600 text-white px-2.5 py-1 rounded hover:bg-blue-500 transition-colors">Buy</button>
                      ) : (
                        <button className="text-[10px] font-semibold bg-white/[0.06] text-slate-400 px-2.5 py-1 rounded border border-white/[0.06] flex items-center gap-1">
                          <Bell size={10} /> Notify
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/" className="text-slate-500 hover:text-cyan-400 text-sm transition-colors">&larr; Back to home</Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
