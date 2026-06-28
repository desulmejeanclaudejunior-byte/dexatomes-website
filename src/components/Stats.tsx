'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = (target / duration) * 16
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const stats = [
  { value: 13, suffix: '+', label: 'Courses Live', icon: '🎓' },
  { value: 4, suffix: '', label: 'Languages', icon: '🌍' },
  { value: 129, suffix: '', label: 'Pages Written', icon: '📖' },
  { value: 2, suffix: '+', label: 'Years Building', icon: '📅' },
  { value: 100, suffix: '+', label: 'Global Community', icon: '👥' },
  { value: 100, suffix: '%', label: 'Passion Driven', icon: '🛡️' },
]

export default function Stats() {
  return (
    <section className="bg-[#f0f4fa] py-16 px-6 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center gap-2"
          >
            <span className="text-2xl">{s.icon}</span>
            <div className="font-extrabold text-[#0A1628] text-2xl tracking-tight">
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div className="text-slate-500 text-xs font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
