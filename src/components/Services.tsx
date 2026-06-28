'use client'

import { motion } from 'framer-motion'
import { Globe, Smartphone, Cpu, Shield, GraduationCap, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  { icon: Globe, title: 'Web Development', desc: 'Fast, responsive websites and web apps. E-commerce, SaaS, dashboards.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Native-quality iOS & Android applications with React Native.' },
  { icon: Cpu, title: 'Robotics & IoT', desc: 'Custom hardware, Arduino, ESP32, sensors, drones, automation.' },
  { icon: Shield, title: 'IT Security', desc: 'Network protection, security audits, infrastructure monitoring.' },
  { icon: GraduationCap, title: 'Training', desc: 'One-on-one mentoring in programming, robotics, web development.' },
  { icon: Wrench, title: 'Consulting', desc: 'Architecture decisions, code reviews, technology strategy.' },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">Services</p>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight mb-4">What we build for you</h2>
          <p className="text-slate-500 max-w-lg mx-auto">End-to-end technology solutions — from concept to deployment.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-100 p-7 card-hover cursor-pointer"
            >
              <div className="w-11 h-11 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <s.icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-slate-900 font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services" className="group inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-700">
            View all services
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
