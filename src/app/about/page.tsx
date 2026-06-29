import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Rocket, Zap, Target, Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <div className="pt-16">
      <section className="hero-bg py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-3">About</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">Built by an engineer</h1>
          <p className="text-slate-400 max-w-md mx-auto text-lg">Building the future through technology, education, and innovation.</p>
        </div>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <Image src="/logo.png" alt="Dex Atomes" width={200} height={80} className="h-16 w-auto mb-6" />
            <h2 className="text-slate-900 text-2xl font-bold mb-1">Jean-Claude Junior Desulme</h2>
            <p className="text-[#1a3ab5] font-semibold text-sm mb-6">Founder & CEO — Dex Atomes LLC</p>
            <p className="text-slate-500 leading-relaxed mb-4">Dex Atomes LLC is a technology company delivering software development, robotics engineering, and technical education for businesses and builders worldwide.</p>
            <p className="text-slate-500 leading-relaxed mb-8">From DexusLab to Robotique Moderne to custom software — everything we build is designed to empower the next generation of engineers and innovators.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: Award, label: 'IT & Security Certified' },
                { icon: Target, label: 'Global service reach' },
                { icon: Zap, label: 'Fast, quality delivery' },
                { icon: Rocket, label: 'DexusLab & Access Lab' },
              ].map(i => (
                <div key={i.label} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#1a3ab5]/10 rounded-lg flex items-center justify-center shrink-0">
                    <i.icon size={14} className="text-[#1a3ab5]" />
                  </div>
                  <span className="text-slate-600 text-sm">{i.label}</span>
                </div>
              ))}
            </div>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-center gap-2"><Mail size={14} className="text-[#1a3ab5]" /> support@dexuslab.com</div>
              <div className="flex items-center gap-2"><Phone size={14} className="text-[#1a3ab5]" /> (863) 207-8619</div>
              <div className="flex items-center gap-2"><MapPin size={14} className="text-[#1a3ab5]" /> Orlando, Florida</div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=700&fit=crop" alt="Engineering" width={600} height={700} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  )
}
