'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Download, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-3">Products</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight">Built for builders</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* DexusLab */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-[#111936] border border-white/[0.06] rounded-2xl"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/[0.06] rounded-full blur-[80px]" />
            <div className="relative p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DL</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">DexusLab</p>
                  <p className="text-slate-500 text-xs">Learning Platform</p>
                </div>
              </div>
              <h3 className="text-white text-2xl font-bold mb-3">Learn to code. Build real projects.</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Free multilingual learning platform with 13+ courses covering programming, robotics, web development, and cybersecurity.</p>
              <div className="space-y-2 mb-6">
                {['13 structured courses', '4 languages — EN, FR, ES, HT', 'iOS & Android — free'].map(f => (
                  <div key={f} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-400 shrink-0" /><span className="text-slate-300 text-sm">{f}</span></div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-900 text-xs font-semibold px-4 py-2.5 rounded-lg"><Download size={13} /> App Store</a>
                <a href="#" className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-xs font-medium px-4 py-2.5 rounded-lg">Google Play</a>
              </div>
            </div>
          </motion.div>

          {/* Book */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-slate-100 rounded-2xl overflow-hidden"
          >
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop"
                alt="Technology and circuits"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md">New Release</span>
            </div>
            <div className="p-8 -mt-8 relative">
              <h3 className="text-slate-900 text-xl font-bold mb-1">Robotique Moderne</h3>
              <p className="text-slate-500 text-sm italic mb-4">Guide Complet pour Débutants · 129 pages</p>
              <div className="space-y-2 mb-6">
                {['10 chapters of hands-on robotics', 'Arduino, ESP32, AI, drones, sensors', 'PDF instant download'].map(f => (
                  <div key={f} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-blue-600 shrink-0" /><span className="text-slate-600 text-sm">{f}</span></div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <span className="text-slate-900 text-2xl font-bold">$12.99</span>
                <Link href="/store" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                  <BookOpen size={14} /> Buy Now <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
