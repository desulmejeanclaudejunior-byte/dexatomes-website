'use client'

import { motion } from 'framer-motion'

const services = [
  { icon: '💻', title: 'Web & Mobile Development', desc: 'Modern, scalable web and mobile applications.', href: '#contact' },
  { icon: '🤖', title: 'Robotics & Automation', desc: 'Smart systems using Arduino, ESP32, and AI.', href: '#contact' },
  { icon: '🔐', title: 'IT & Network Security', desc: 'Protect your systems and strengthen your network.', href: '#contact' },
  { icon: '🎓', title: '1-on-1 Mentoring', desc: 'Personalized guidance in tech and engineering.', href: '#contact' },
  { icon: '💡', title: 'Tech Consulting', desc: 'Architecture, audits, and technical strategy.', href: '#contact' },
  { icon: '</>', title: 'Custom Software Projects', desc: 'End-to-end solutions built for your needs.', href: '#contact' },
]

export default function Services() {
  return (
    <section id="services" className="bg-[#f0f4fa] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold text-blue-600 tracking-[2.5px] uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-extrabold text-[#0A1628] text-3xl md:text-4xl tracking-tight">
            What we build for you
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,85,204,0.12)' }}
              className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-2xl p-6 flex flex-col gap-4 cursor-pointer transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl flex items-center justify-center text-xl group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                <span className="group-hover:grayscale group-hover:brightness-200 transition-all">
                  {s.icon}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-[#0A1628] text-sm leading-snug mb-2">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
              <a
                href={s.href}
                className="text-blue-600 text-xs font-semibold group-hover:text-blue-500 transition-colors mt-auto"
              >
                Learn more →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
