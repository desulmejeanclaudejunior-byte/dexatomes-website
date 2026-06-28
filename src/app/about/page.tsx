import type { Metadata } from 'next'
import { Award, Rocket, Target, Zap, MapPin, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = { title: 'About' }

const timeline = [
  { year: '2024', title: 'Founded Dex Atomes LLC', desc: 'Launched in Orlando, Florida.' },
  { year: '2024', title: 'DexusLab Development Begins', desc: 'Started building the learning platform.' },
  { year: '2025', title: 'Robotique Moderne Published', desc: '129-page robotics guide released.' },
  { year: '2025', title: 'Access Lab R&D', desc: 'Applied research division launched.' },
  { year: '2026', title: 'Expansion', desc: 'Full-service development and consulting.' },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">About</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Built by an engineer</h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">Bridging innovation and practical application.</p>
        </div>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-slate-900 text-2xl font-bold mb-4">Jean-Claude Junior Desulme</h2>
            <p className="text-blue-600 font-semibold text-sm mb-4">Founder & CEO — Dex Atomes LLC</p>
            <p className="text-slate-500 leading-relaxed mb-4">
              Dex Atomes LLC was founded to deliver real technology solutions — software development, robotics, IT consulting, and engineering education — for businesses and the next generation of builders.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              From our learning platform DexusLab to the Robotique Moderne book to custom software projects — everything we build is designed to move industries forward.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, label: 'IT, Security, Robotics Certified' },
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
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3"><Mail size={16} className="text-blue-600" /> support@dexuslab.com</div>
              <div className="flex items-center gap-3"><Phone size={16} className="text-blue-600" /> (863) 207-8619</div>
              <div className="flex items-center gap-3"><MapPin size={16} className="text-blue-600" /> Orlando, Florida</div>
            </div>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <Image
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop"
                alt="Engineering workspace"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              {timeline.map(t => (
                <div key={t.title} className="flex gap-4">
                  <div className="shrink-0 w-12 text-right">
                    <span className="text-blue-600 text-xs font-bold">{t.year}</span>
                  </div>
                  <div className="border-l-2 border-blue-100 pl-4">
                    <p className="text-slate-900 font-semibold text-sm">{t.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
