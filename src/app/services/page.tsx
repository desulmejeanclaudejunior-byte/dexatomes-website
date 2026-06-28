import type { Metadata } from 'next'
import Link from 'next/link'
import { Globe, Smartphone, Cpu, Shield, GraduationCap, Wrench, ArrowRight } from 'lucide-react'
import Footer from '@/components/Footer'

export const metadata: Metadata = { title: 'Services' }

const services = [
  { icon: Globe, title: 'Web Development', price: 'From $500', desc: 'Responsive websites, web apps, e-commerce, SaaS platforms. Next.js, React, TypeScript.' },
  { icon: Smartphone, title: 'Mobile Apps', price: 'From $800', desc: 'Native-quality iOS & Android applications. React Native, Expo, Firebase.' },
  { icon: Cpu, title: 'Robotics & IoT', price: 'From $300', desc: 'Custom hardware, Arduino, ESP32, PCB prototyping, drones, automation.' },
  { icon: Shield, title: 'IT & Security', price: 'From $200', desc: 'Network setup, security audits, infrastructure monitoring and hardening.' },
  { icon: GraduationCap, title: 'Training', price: '$75/hr', desc: 'One-on-one mentoring in programming, robotics, web development.' },
  { icon: Wrench, title: 'Consulting', price: '$100/hr', desc: 'Architecture decisions, code reviews, technology strategy for teams.' },
]

export default function ServicesPage() {
  return (
    <>
      <div className="circuit-bg pt-14">
        <section className="border-b border-white/[0.04] py-16 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-blue-400 text-[11px] font-semibold tracking-wider uppercase mb-3">Services</p>
            <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">What we build for you</h1>
            <p className="text-slate-400 max-w-md mx-auto text-[15px]">End-to-end technology solutions — from concept to deployment.</p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(s => (
              <div key={s.title} className="panel p-6 group cursor-pointer">
                <s.icon size={20} className="text-blue-400 mb-3 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-white font-semibold text-[15px] mb-1">{s.title}</h3>
                <p className="text-blue-400 text-xs font-semibold mb-2">{s.price}</p>
                <p className="text-slate-400 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/contact" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all">
              Request a Quote <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
