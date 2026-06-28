'use client'

import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Download, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">Products</p>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">
            Built for engineers
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* DexusLab */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl p-8 lg:p-10"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px]" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DL</span>
                </div>
                <div>
                  <p className="text-white font-bold">DexusLab</p>
                  <p className="text-slate-400 text-xs">Learning Platform</p>
                </div>
              </div>

              <h3 className="text-white text-2xl font-bold mb-3">
                Learn to code. Build real projects.
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Free multilingual learning platform with 13+ courses covering programming, robotics, web development, and cybersecurity.
              </p>

              <div className="space-y-2.5 mb-8">
                {['13 structured courses', '4 languages — EN, FR, ES, HT', 'iOS & Android'].map(f => (
                  <div key={f} className="flex items-center gap-2.5">
                    <CheckCircle2 size={15} className="text-blue-400 shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-2 bg-white text-slate-900 text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors">
                  <Download size={14} />
                  App Store
                </a>
                <a href="#" className="inline-flex items-center gap-2 bg-white/10 border border-white/15 text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-white/15 transition-colors">
                  Google Play
                </a>
              </div>
            </div>
          </motion.div>

          {/* Book */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 lg:p-10 flex flex-col"
          >
            <div className="flex items-start gap-5 mb-6">
              {/* Mini book cover */}
              <div className="shrink-0 w-20 h-28 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg shadow-lg flex flex-col items-center justify-center p-2">
                <span className="text-white font-bold text-[8px] text-center leading-tight tracking-wide">ROBOTIQUE MODERNE</span>
                <div className="w-8 h-px bg-white/30 my-1.5" />
                <span className="text-white/60 text-[6px] tracking-widest">DEX ATOMES</span>
              </div>
              <div>
                <p className="text-blue-600 text-xs font-semibold tracking-wide uppercase mb-1">New Release</p>
                <h3 className="text-slate-900 text-xl font-bold">Robotique Moderne</h3>
                <p className="text-slate-500 text-sm mt-1">Guide Complet pour Débutants</p>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              A 129-page illustrated robotics guide in French. Covers Arduino, ESP32, AI, drones, sensors, and hands-on projects. Written for the next generation of engineers.
            </p>

            <div className="space-y-2.5 mb-8">
              {['10 chapters of hands-on robotics', '129 pages, 50+ illustrations', 'PDF instant download'].map(f => (
                <div key={f} className="flex items-center gap-2.5">
                  <CheckCircle2 size={15} className="text-blue-600 shrink-0" />
                  <span className="text-slate-600 text-sm">{f}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto flex items-center gap-4 flex-wrap">
              <span className="text-slate-900 text-3xl font-bold">$12.99</span>
              <Link href="/store" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm">
                <BookOpen size={15} />
                Buy Now
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
