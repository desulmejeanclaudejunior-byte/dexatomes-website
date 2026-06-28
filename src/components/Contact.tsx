'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold text-blue-600 tracking-[2.5px] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-extrabold text-[#0A1628] text-3xl md:text-4xl tracking-tight mb-6">
            Let&#39;s build something
            <br />
            together.
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8 max-w-sm">
            Whether you need a web app, mobile product, robotics consulting, or
            want to explore our courses and books — we&#39;re ready.
          </p>
          <div className="space-y-4">
            {[
              { label: 'Email', val: 'support@dexuslab.com' },
              { label: 'Social', val: '@DexAtomes everywhere' },
              { label: 'Location', val: 'Orlando, Florida, USA' },
            ].map((c) => (
              <div key={c.label} className="flex gap-4">
                <span className="text-[10px] font-bold text-slate-400 tracking-[1.5px] uppercase w-16 mt-0.5">
                  {c.label}
                </span>
                <span className="text-sm text-[#0A1628] font-medium">
                  {c.val}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {submitted ? (
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-10 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="font-bold text-[#0A1628] text-xl mb-2">
                Message received!
              </h3>
              <p className="text-slate-500 text-sm">
                We&#39;ll get back to you within 24–48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { name: 'name', label: 'Full name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@email.com' },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
                    {f.label}
                  </label>
                  <input
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
                  Service needed
                </label>
                <select
                  name="service"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
                >
                  <option>Web / Mobile Development</option>
                  <option>Robotics & Automation</option>
                  <option>IT Security & Networks</option>
                  <option>1-on-1 Mentoring</option>
                  <option>Tech Consulting</option>
                  <option>Book / Store inquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what you're building..."
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.01, boxShadow: '0 8px 30px rgba(0,85,204,0.25)' }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full bg-[#0A1628] hover:bg-[#0d1f3c] text-white font-semibold py-3.5 rounded-xl text-[15px] transition-all"
              >
                Send message →
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
