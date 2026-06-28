'use client'

import { motion } from 'framer-motion'
import { Award, Rocket, Target, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">About</p>
            <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Built by an engineer,<br />for engineers.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Dex Atomes LLC was founded by Jean-Claude Junior Desulme in Orlando, Florida. We bridge the gap between cutting-edge technology and practical application.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              From custom software and robotics to our learning platform DexusLab and the Robotique Moderne book — everything we build is designed to empower the next generation of builders and innovators.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, label: 'Certified in IT, Security, Robotics' },
                { icon: Target, label: 'Startup to enterprise clients' },
                { icon: Zap, label: 'Fast delivery, quality code' },
                { icon: Rocket, label: 'DexusLab & Access Lab R&D' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    <item.icon size={15} className="text-blue-600" />
                  </div>
                  <span className="text-slate-600 text-sm leading-snug">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">DX</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Dex Atomes LLC</h3>
                <p className="text-blue-200 text-sm mb-6">Technology. Education. Innovation.</p>
                <div className="space-y-3 text-sm text-blue-100">
                  <p>Founder & CEO — Jean-Claude Junior Desulme</p>
                  <p>Orlando, Florida, USA</p>
                  <p>(863) 207-8619</p>
                  <p>support@dexuslab.com</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
