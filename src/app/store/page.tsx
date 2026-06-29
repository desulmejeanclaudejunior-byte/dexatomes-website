'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, ArrowRight, CheckCircle2, Bell } from 'lucide-react'

const books = [
  { title: 'Robotique Moderne', sub: 'Complete Robotics Guide', price: '$22.99', tag: 'Available', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=520&fit=crop' },
  { title: 'Arduino Essentials', sub: 'Fundamentals & Projects', price: '$24.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?w=400&h=520&fit=crop' },
  { title: 'ESP32 Projects', sub: 'Advanced IoT Guide', price: '$24.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=520&fit=crop' },
  { title: 'Drone Engineering', sub: 'Build & Program Drones', price: '$34.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=520&fit=crop' },
  { title: 'AI & ML Guide', sub: 'Machine Learning Basics', price: '$29.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=520&fit=crop' },
  { title: 'Python for Engineers', sub: 'Zero to Automation', price: '$19.99', tag: 'Coming Soon', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=520&fit=crop' },
]

const chapters = ['Introduction', 'Arduino Basics', 'ESP32 WiFi/BLE', 'Sensors & Actuators', 'C/C++ Programming', 'AI Applications', 'Drone Systems', 'Wireless Comm', 'Guided Projects', 'Next Steps']

export default function StorePage() {
  const [buying, setBuying] = useState(false)

  async function handleBuy() {
    setBuying(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else alert('Store coming soon!')
    } catch { alert('Error') }
    finally { setBuying(false) }
  }

  return (
    <div className="pt-16">
      <section className="hero-bg py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-3">Bookstore</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Engineering Library</h1>
          <p className="text-slate-400 max-w-md mx-auto text-lg">Ebooks, guides, and resources for engineers and builders.</p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-5xl mx-auto bg-[#f0f4ff] rounded-2xl border border-blue-100 p-8 md:p-10 grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <Image src={books[0].img} alt={books[0].title} width={400} height={520} className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1033]/60 to-transparent" />
              <div className="absolute bottom-3 left-3"><p className="text-white font-bold text-sm">ROBOTIQUE MODERNE</p></div>
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="text-[10px] font-bold text-[#1a3ab5] bg-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider">Featured · Available Now</span>
            <h2 className="text-slate-900 text-2xl font-bold mt-3 mb-1">Robotique Moderne</h2>
            <p className="text-slate-500 italic mb-4">Complete Robotics Guide · French · 110 pages</p>
            <div className="space-y-2 mb-6">
              {['10 illustrated chapters', 'Arduino, ESP32, AI, Drones, Sensors', '110 pages, 50+ diagrams', 'Instant PDF download'].map(f => (
                <div key={f} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#1a3ab5] shrink-0" /><span className="text-slate-600 text-sm">{f}</span></div>
              ))}
            </div>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="text-slate-900 text-3xl font-bold">$22.99</span>
              <button onClick={handleBuy} disabled={buying} className="btn-brand inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm disabled:opacity-50">
                <ShoppingCart size={14} /> {buying ? 'Loading...' : 'Buy Now'} <ArrowRight size={13} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {chapters.map((ch, i) => (
                <div key={ch} className="flex items-center gap-2 text-[12px] text-slate-500">
                  <span className="w-5 h-5 bg-[#1a3ab5]/10 rounded text-[#1a3ab5] text-[10px] font-bold flex items-center justify-center shrink-0">{i+1}</span>{ch}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#f0f4ff] px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-slate-900 text-xl font-bold mb-8">All Books</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map(b => (
              <div key={b.title} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image src={b.img} alt={b.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  <span className={`absolute top-2 left-2 text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded ${b.tag === 'Available' ? 'bg-[#1a3ab5] text-white' : 'bg-slate-200 text-slate-600'}`}>{b.tag}</span>
                </div>
                <div className="p-5">
                  <p className="text-slate-900 font-bold text-sm">{b.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{b.sub}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-[#1a3ab5] font-bold">{b.price}</span>
                    {b.tag === 'Available' ? (
                      <button onClick={handleBuy} className="text-[10px] font-semibold bg-[#1a3ab5] text-white px-3 py-1 rounded-lg hover:bg-[#2952d9] transition-colors">Buy</button>
                    ) : (
                      <button className="text-[10px] font-semibold bg-slate-100 text-slate-500 px-3 py-1 rounded-lg flex items-center gap-1"><Bell size={10} /> Notify</button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10"><Link href="/" className="text-slate-500 hover:text-[#1a3ab5] text-sm transition-colors">&larr; Back to home</Link></div>
      </section>
    </div>
  )
}
