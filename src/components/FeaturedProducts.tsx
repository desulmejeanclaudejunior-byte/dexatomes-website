'use client'

import { motion } from 'framer-motion'

export default function FeaturedProducts() {
  return (
    <section id="store" className="bg-[#0A1628] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* LEFT: DEXUSLAB */}
        <motion.div
          id="dexuslab"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-gradient-to-br from-[#0d1f3c] to-[#0a1425] border border-white/[0.08] rounded-3xl p-8 flex flex-col"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/[0.08] rounded-full blur-2xl pointer-events-none" />

          <div className="relative">
            <span className="inline-block text-xs font-bold tracking-[2px] uppercase bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
              DEXUSLAB
            </span>
          </div>

          <h2 className="font-extrabold text-white text-3xl tracking-tight leading-tight mb-4">
            Learn. Build.
            <br />
            Succeed.
          </h2>

          <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
            DexusLab is a free multilingual learning platform with courses in IT,
            Networks, Robotics, Programming, and more.
          </p>

          <ul className="space-y-2.5 mb-8">
            {[
              '13 structured courses',
              '4 languages: EN · FR · ES · HT',
              'iOS & Android — free to download',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 mt-auto">
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#"
              className="flex items-center gap-2 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              App Store
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              href="#"
              className="flex items-center gap-2 bg-white/[0.08] border border-white/15 text-white text-xs font-semibold px-4 py-2.5 rounded-xl backdrop-blur-sm"
            >
              ▶ Google Play
            </motion.a>
            <a
              href="https://dexuslab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xs font-semibold px-4 py-2.5 transition-colors flex items-center"
            >
              Visit dexuslab.com →
            </a>
          </div>

          <div className="absolute right-6 bottom-6 opacity-20 select-none pointer-events-none text-[80px]">
            📱
          </div>
        </motion.div>

        {/* RIGHT: BOOK STORE */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/50 border border-blue-100 rounded-3xl p-8 flex flex-col"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-blue-400/[0.08] rounded-full blur-2xl pointer-events-none" />

          <span className="text-xs font-bold tracking-[2px] uppercase text-blue-500 mb-4">
            NEW RELEASE · 2026
          </span>

          <h2 className="font-extrabold text-[#0A1628] text-2xl md:text-3xl tracking-tight leading-tight mb-2">
            Robotique Moderne
            <br />
            <span className="text-xl font-bold text-slate-500">
              Guide Complet pour Débutants
            </span>
          </h2>

          <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
            A 129-page illustrated French robotics guide written by an engineer.
            From fundamentals to advanced projects.
          </p>

          <ul className="space-y-2.5 mb-6">
            {[
              '10 chapters of hands-on robotics',
              'PDF instant download — $12.99',
              'Print edition coming soon',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-[#0A1628]/80">
                <div className="w-5 h-5 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0">
                  <svg className="w-3 h-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {f}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-slate-400 font-medium">
              Engineering & Robotics · French
            </span>
          </div>

          <div className="flex items-center gap-4 mt-auto flex-wrap">
            <div>
              <span className="font-extrabold text-[#0A1628] text-3xl tracking-tight">
                $12.99
              </span>
              <span className="text-slate-400 text-sm ml-2">PDF</span>
            </div>
            <motion.a
              whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(0,102,204,0.3)' }}
              whileTap={{ scale: 0.97 }}
              href="/store"
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-colors"
            >
              Buy Now — $12.99
            </motion.a>
            <a
              href="/store"
              className="text-slate-500 hover:text-[#0A1628] text-sm font-medium transition-colors"
            >
              Learn more →
            </a>
          </div>

          <div className="absolute right-6 top-8 w-28 hidden sm:block">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl" />
              <div className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 rounded-lg shadow-2xl p-3 aspect-[2/3] flex flex-col items-center justify-center">
                <div className="font-black text-white text-[10px] text-center leading-tight tracking-wide mb-2">
                  ROBOTIQUE
                  <br />
                  MODERNE
                </div>
                <div className="w-full h-px bg-white/20 mb-2" />
                <div className="font-bold text-white/60 text-[7px] text-center tracking-widest uppercase">
                  DEX ATOMES
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
