'use client'

import { useState } from 'react'
import { Send, ArrowRight } from 'lucide-react'

/**
 * Contact form. The submit behaviour is carried over unchanged from the
 * original pages: POST the serialised form to /api/contact, then swap in the
 * confirmation panel. Field names, `required` flags and the select option
 * values are preserved exactly, since the API and the downstream Cloud
 * Function read them by name.
 */
export default function ContactForm({
  options,
  successTitle = 'Message sent!',
  successBody = "We'll respond within 24 hours.",
}: {
  options: string[]
  successTitle?: string
  successBody?: string
}) {
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

  if (sent) {
    return (
      <div className="border border-[var(--hair-2)] px-8 py-16 text-center">
        <Send size={26} className="text-[var(--blue)] mx-auto mb-5" />
        <h3 className="text-[var(--ink)] text-xl mb-2 tracking-tight">{successTitle}</h3>
        <p className="text-[var(--muted)] text-sm">{successBody}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid sm:grid-cols-2 gap-8">
        <div>
          <label className="field-label" htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" required placeholder="Your name" className="field" />
        </div>
        <div>
          <label className="field-label" htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" required placeholder="you@email.com" className="field" />
        </div>
      </div>

      <div>
        <label className="field-label" htmlFor="cf-service">Service</label>
        <select id="cf-service" name="service" className="field">
          {options.map(o => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="field-label" htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message"
          name="message"
          rows={4}
          placeholder="Tell us about your project..."
          className="field"
        />
      </div>

      <button type="submit" className="btn btn-solid justify-center mt-2">
        Send Message <ArrowRight size={14} />
      </button>
    </form>
  )
}
