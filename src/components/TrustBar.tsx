'use client'

import { motion } from 'framer-motion'

const techs = ['Arduino', 'Python', 'TensorFlow', 'Espressif', 'React', 'Next.js']

const stats = [
  { value: '5K+', label: 'Active Learners' },
  { value: '98%', label: 'Satisfaction' },
  { value: '45+', label: 'Countries' },
]

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left — trust label + tech names */}
          <div className="flex items-center gap-8 flex-wrap justify-center">
            <p className="text-blue-100 text-sm font-medium shrink-0">Trusted Technologies</p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              {techs.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-white/70 text-sm font-semibold tracking-wide"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Right — stats */}
          <div className="flex items-center gap-10">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <p className="text-white text-2xl font-bold">{s.value}</p>
                <p className="text-blue-100 text-[11px] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
