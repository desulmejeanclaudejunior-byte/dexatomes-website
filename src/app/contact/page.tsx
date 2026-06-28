import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = { title: 'Contact' }

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">Contact</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Let&#39;s work together</h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">Have a project? Need a consultation? Reach out.</p>
        </div>
      </section>
      <Contact />
    </div>
  )
}
