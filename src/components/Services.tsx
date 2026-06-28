'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Cpu, Shield, GraduationCap, Wrench } from 'lucide-react'

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Fast, responsive websites and web apps built with modern frameworks. E-commerce, SaaS, dashboards.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native-quality iOS & Android applications. React Native, Expo, Firebase backend.' },
  { icon: Cpu, title: 'Robotics & IoT', desc: 'Custom hardware, Arduino, ESP32, sensors, drones. From prototype to production.' },
  { icon: Shield, title: 'IT & Security', desc: 'Network configuration, security audits, infrastructure setup and monitoring.' },
  { icon: GraduationCap, title: 'Training & Mentoring', desc: 'One-on-one sessions in programming, robotics, web development. All skill levels.' },
  { icon: Wrench, title: 'Tech Consulting', desc: 'Architecture decisions, code reviews, technology strategy for startups and teams.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">Services</p>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">
            What we do best
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-white rounded-2xl border border-slate-100 p-7 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <s.icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-slate-900 font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
