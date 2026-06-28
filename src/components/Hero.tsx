'use client'

import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
})

const featureTiles = [
  { icon: '</>', title: 'Custom Software', sub: 'Web, mobile & automation' },
  { icon: '📚', title: 'Engineering Education', sub: 'Courses for the next gen' },
  { icon: '🛒', title: 'Digital Store', sub: 'Ebooks, tools & products' },
  { icon: '🎧', title: 'Expert Support', sub: 'Consulting & mentoring' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0A1628] via-[#0d1f3c] to-[#0e2248] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,204,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,102,204,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/[0.08] rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-violet-600/[0.06] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-blue-300 text-xs font-semibold tracking-[2px] uppercase">
              Technology · Education · Innovation
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-extrabold text-white text-5xl md:text-6xl leading-[1.03] tracking-tight mb-6"
          >
            Building Solutions.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Empowering Engineers.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md"
          >
            Dex Atomes LLC builds software, ships products, and teaches
            engineering through powerful tools like DexusLab and our robotics
            book.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(0,102,204,0.5)' }}
              whileTap={{ scale: 0.97 }}
              href="#services"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-7 py-3.5 rounded-xl text-[15px] transition-colors"
            >
              Explore Services →
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#dexuslab"
              className="bg-white/[0.08] hover:bg-white/[0.12] border border-white/15 text-white font-semibold px-7 py-3.5 rounded-xl text-[15px] transition-all backdrop-blur-sm"
            >
              Discover DexusLab
            </motion.a>
          </motion.div>

          <motion.p {...fadeUp(0.4)} className="text-slate-500 text-sm">
            Trusted by students, engineers, and innovators worldwide.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative bg-gradient-to-br from-[#0d1f3c] to-[#061020] border border-white/[0.08] rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5)]">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="relative flex flex-col items-center justify-center py-12 px-8">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mb-6"
              >
                <div className="absolute inset-0 scale-150 bg-blue-500/10 rounded-3xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-6 glow-blue">
                  <span className="font-black text-white text-5xl tracking-widest">DX</span>
                </div>
              </motion.div>

              <h2 className="font-extrabold text-white text-2xl tracking-tight mb-1">
                DEX ATOMES
              </h2>
              <p className="text-slate-400 text-sm tracking-[2px] uppercase">
                Software · Education · Innovation
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-white/5 border-t border-white/[0.08]">
              {featureTiles.map((tile, i) => (
                <motion.div
                  key={i}
                  whileHover={{ backgroundColor: 'rgba(0,102,204,0.08)' }}
                  className="bg-[#0a1628]/60 p-5 flex flex-col gap-2 cursor-pointer transition-colors"
                >
                  <span className="text-xl">{tile.icon}</span>
                  <div className="font-semibold text-white text-sm">{tile.title}</div>
                  <div className="text-slate-500 text-xs leading-snug">{tile.sub}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
