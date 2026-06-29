'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    setSent(true)
  }

  return (
    <div className="pt-16">
      <section className="hero-bg py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-3">Contact</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in touch</h1>
          <p className="text-slate-400 max-w-md mx-auto text-lg">Have a project? Need a consultation? Let&#39;s talk.</p>
        </div>
      </section>

      <section className="py-20 bg-[#f0f4ff] px-6">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <p className="text-slate-500 text-sm leading-relaxed mb-5">We respond within 24 hours.</p>
              {[
                { icon: Mail, label: 'support@dexuslab.com' },
                { icon: Phone, label: '(863) 207-8619' },
                { icon: MapPin, label: 'Orlando, Florida' },
              ].map(c => (
                <div key={c.label} className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-[#1a3ab5]/10 rounded-lg flex items-center justify-center shrink-0"><c.icon size={16} className="text-[#1a3ab5]" /></div>
                  <span className="text-slate-700 text-sm">{c.label}</span>
                </div>
              ))}
              <div className="border-t border-slate-100 mt-4 pt-4">
                <p className="text-slate-400 text-xs">@DexAtomes on all platforms</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center shadow-sm">
                <Send size={32} className="text-[#1a3ab5] mx-auto mb-4" />
                <h3 className="text-slate-900 text-xl font-bold mb-2">Sent!</h3>
                <p className="text-slate-500 text-sm">We&#39;ll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Name</label><input name="name" required placeholder="Your name" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20" /></div>
                  <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Email</label><input name="email" type="email" required placeholder="you@email.com" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20" /></div>
                </div>
                <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Service</label>
                  <select name="service" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20">
                    <option>Website Development</option><option>Mobile App</option><option>Robotics</option><option>Consulting</option><option>Bookstore</option><option>Other</option>
                  </select>
                </div>
                <div><label className="block text-xs font-semibold text-slate-600 mb-1.5">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your project..." className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]/20 resize-none" />
                </div>
                <button type="submit" className="w-full btn-brand py-3 rounded-lg text-sm">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
