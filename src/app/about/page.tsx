import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Rocket, Zap, Target, Mail, Phone, MapPin } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'About' }

export default function AboutPage() {
  return (
    <>
      <div className="circuit-bg pt-14">
        <section className="border-b border-white/[0.04] py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 text-[11px] font-semibold tracking-wider uppercase mb-3">About</p>
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">Built by an engineer</h1>
            <p className="text-slate-400 max-w-md mx-auto text-[15px]">Bridging innovation and practical application.</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 py-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="panel p-8">
                <h2 className="text-white text-xl font-bold mb-1">Jean-Claude Junior Desulme</h2>
                <p className="text-blue-400 text-sm font-semibold mb-4">Founder & CEO</p>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-4">
                  Dex Atomes LLC delivers real technology solutions — software development, robotics, IT consulting, and engineering education — for businesses and builders worldwide.
                </p>
                <p className="text-slate-400 text-[13px] leading-relaxed mb-6">
                  From DexusLab to Robotique Moderne to custom software — everything we build moves industries forward.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Award, label: 'IT & Security Certified' },
                    { icon: Target, label: 'Startup to enterprise' },
                    { icon: Zap, label: 'Fast delivery' },
                    { icon: Rocket, label: 'Access Lab R&D' },
                  ].map(i => (
                    <div key={i.label} className="flex items-center gap-2">
                      <i.icon size={14} className="text-blue-400 shrink-0" />
                      <span className="text-slate-300 text-[12px]">{i.label}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-[13px]">
                  <div className="flex items-center gap-2 text-slate-300"><Mail size={14} className="text-blue-400" /> support@dexuslab.com</div>
                  <div className="flex items-center gap-2 text-slate-300"><Phone size={14} className="text-blue-400" /> (863) 207-8619</div>
                  <div className="flex items-center gap-2 text-slate-300"><MapPin size={14} className="text-blue-400" /> Orlando, Florida</div>
                </div>
              </div>
            </div>
            <div>
              <div className="panel overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop" alt="Engineering workspace" width={600} height={400} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-4">
                  {[
                    { y: '2024', t: 'Founded Dex Atomes LLC' },
                    { y: '2024', t: 'DexusLab Development Begins' },
                    { y: '2025', t: 'Robotique Moderne Published' },
                    { y: '2025', t: 'Access Lab R&D Launched' },
                    { y: '2026', t: 'Full-Service Expansion' },
                  ].map(e => (
                    <div key={e.t} className="flex items-center gap-3">
                      <span className="text-blue-400 text-[11px] font-bold w-8 shrink-0">{e.y}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="text-slate-300 text-[13px]">{e.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
