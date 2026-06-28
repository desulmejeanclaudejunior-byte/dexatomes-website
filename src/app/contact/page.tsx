'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    setSent(true)
  }

  const inputClass = 'w-full bg-white/[0.04] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all'

  return (
    <>
      <div className="circuit-bg pt-14">
        <section className="border-b border-white/[0.04] py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 text-[11px] font-semibold tracking-wider uppercase mb-3">Contact</p>
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">Let&#39;s work together</h1>
            <p className="text-slate-400 max-w-md mx-auto text-[15px]">Have a project? Need a consultation? Reach out.</p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-5 py-12">
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-5">
              <div className="panel p-5">
                <p className="text-slate-400 text-[13px] leading-relaxed mb-5">We&#39;ll get back to you within 24 hours.</p>
                {[
                  { icon: Mail, label: 'support@dexuslab.com' },
                  { icon: Phone, label: '(863) 207-8619' },
                  { icon: MapPin, label: 'Orlando, Florida' },
                ].map(c => (
                  <div key={c.label} className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <c.icon size={14} className="text-blue-400" />
                    </div>
                    <span className="text-slate-300 text-[13px]">{c.label}</span>
                  </div>
                ))}
                <div className="mt-5 pt-4 border-t border-white/[0.04]">
                  <p className="text-slate-600 text-[11px]">@DexAtomes on all platforms</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="panel p-10 text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={20} className="text-green-400" />
                  </div>
                  <h3 className="text-white text-lg font-bold mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm">We&#39;ll respond within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="panel p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Name</label>
                      <input name="name" required placeholder="Your name" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Email</label>
                      <input name="email" type="email" required placeholder="you@email.com" className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Service</label>
                    <select name="service" className={inputClass}>
                      <option>Web / Mobile Development</option>
                      <option>Robotics & IoT</option>
                      <option>IT Security</option>
                      <option>Training & Mentoring</option>
                      <option>Tech Consulting</option>
                      <option>Book / Store</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-400 mb-1.5 uppercase tracking-wider">Message</label>
                    <textarea name="message" rows={4} placeholder="Tell us about your project..." className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm transition-colors shadow-sm shadow-blue-600/20">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
