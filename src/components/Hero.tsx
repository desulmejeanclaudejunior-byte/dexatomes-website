'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Cpu, Shield, BookOpen } from 'lucide-react'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' as const },
})

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-sky-400/8 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span className="text-blue-200 text-xs font-medium tracking-wide">Orlando, Florida</span>
          </motion.div>

          <motion.h1 {...fade(0.1)} className="text-white text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight mb-6">
            We build software
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
              that moves industries.
            </span>
          </motion.h1>

          <motion.p {...fade(0.2)} className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg">
            Dex Atomes LLC delivers web & mobile development, robotics, IT consulting, and engineering education — for startups, businesses, and the next generation of builders.
          </motion.p>

          <motion.div {...fade(0.3)} className="flex flex-wrap gap-4">
            <a href="#services" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition-all">
              View Services
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a href="#products" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white font-medium px-6 py-3 rounded-lg transition-all backdrop-blur-sm">
              Our Products
            </a>
          </motion.div>
        </div>

        {/* Right — feature grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="hidden lg:grid grid-cols-2 gap-3"
        >
          {[
            { icon: Code, label: 'Software Development', desc: 'Web, mobile & custom platforms' },
            { icon: Cpu, label: 'Robotics & IoT', desc: 'Arduino, ESP32, automation' },
            { icon: Shield, label: 'IT Security', desc: 'Network protection & audits' },
            { icon: BookOpen, label: 'Education', desc: 'DexusLab & Robotique Moderne' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
              className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] backdrop-blur-md rounded-2xl p-5 transition-colors cursor-default"
            >
              <item.icon size={22} className="text-blue-400 mb-3" />
              <p className="text-white font-semibold text-sm mb-1">{item.label}</p>
              <p className="text-slate-500 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
