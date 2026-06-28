'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-600 text-sm font-semibold tracking-wide uppercase mb-3">Contact</p>
          <h2 className="text-slate-900 text-3xl md:text-4xl font-bold tracking-tight">
            Let&#39;s work together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-slate-500 leading-relaxed">
              Have a project in mind? Need a consultation? We&#39;d love to hear from you. Reach out and we&#39;ll get back within 24 hours.
            </p>

            {[
              { icon: Mail, label: 'support@dexuslab.com' },
              { icon: Phone, label: '(863) 207-8619' },
              { icon: MapPin, label: 'Orlando, Florida' },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                  <c.icon size={18} className="text-blue-600" />
                </div>
                <span className="text-slate-700 text-sm font-medium">{c.label}</span>
              </div>
            ))}

            <div className="pt-4">
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-2">Find us</p>
              <p className="text-sm text-slate-600">@DexAtomes on all platforms</p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send size={22} className="text-green-600" />
                </div>
                <h3 className="text-slate-900 text-xl font-bold mb-2">Message sent!</h3>
                <p className="text-slate-500 text-sm">We&#39;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-slate-100 rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Name</label>
                    <input name="name" required placeholder="Your name" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label>
                    <input name="email" type="email" required placeholder="you@email.com" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Service</label>
                  <select name="service" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all">
                    <option>Web / Mobile Development</option>
                    <option>Robotics & IoT</option>
                    <option>IT Security & Networks</option>
                    <option>Training & Mentoring</option>
                    <option>Tech Consulting</option>
                    <option>Book / Store Inquiry</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your project..." className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" />
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-colors text-sm">
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
