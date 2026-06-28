'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { BookOpen, Languages, FileText, Clock, Users, Heart } from 'lucide-react'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let n = 0
    const step = Math.max(1, Math.ceil(target / 60))
    const timer = setInterval(() => {
      n += step
      if (n >= target) { setCount(target); clearInterval(timer) }
      else setCount(n)
    }, 20)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: BookOpen, value: 13, suffix: '+', label: 'Courses' },
  { icon: Languages, value: 4, suffix: '', label: 'Languages' },
  { icon: FileText, value: 129, suffix: '', label: 'Pages Written' },
  { icon: Clock, value: 2, suffix: '+', label: 'Years Building' },
  { icon: Users, value: 100, suffix: '+', label: 'Community' },
  { icon: Heart, value: 100, suffix: '%', label: 'Passion' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="text-center"
            >
              <s.icon size={20} className="mx-auto mb-2 text-blue-500" />
              <div className="text-slate-900 text-2xl font-bold tracking-tight">
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-slate-500 text-xs font-medium mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
