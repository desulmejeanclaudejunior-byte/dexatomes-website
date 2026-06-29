import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Globe, Smartphone, Cpu, Shield, Wrench, ArrowRight } from 'lucide-react'

export const metadata: Metadata = { title: 'Services' }

const services = [
  { icon: Globe, title: 'Website Development', price: 'From $500', desc: 'Professional websites, web apps, e-commerce, SaaS. Built with Next.js, React, TypeScript.', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop' },
  { icon: Smartphone, title: 'Mobile App Development', price: 'From $800', desc: 'Native-quality iOS & Android apps. React Native, Expo, Firebase backend.', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop' },
  { icon: Cpu, title: 'Robotics & IoT', price: 'From $300', desc: 'Custom hardware, Arduino, ESP32, PCB prototyping, drones, smart devices.', img: 'https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=300&fit=crop' },
  { icon: Shield, title: 'IT & Network Security', price: 'From $200', desc: 'Security audits, network setup, infrastructure monitoring and hardening.', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&h=300&fit=crop' },
  { icon: Wrench, title: 'Technical Consulting', price: '$100/hr', desc: 'Architecture, code reviews, system design, technology strategy.', img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop' },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="hero-bg py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-300 text-sm font-semibold tracking-wider uppercase mb-3">Services</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">What we build for you</h1>
          <p className="text-slate-400 max-w-md mx-auto text-lg">End-to-end digital solutions from concept to deployment.</p>
        </div>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="relative h-40 overflow-hidden">
                <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                <div className="absolute top-3 left-3 w-9 h-9 bg-[#1a3ab5] rounded-lg flex items-center justify-center shadow">
                  <s.icon size={16} className="text-white" />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-slate-900 font-bold mb-1">{s.title}</h3>
                <p className="text-[#1a3ab5] text-sm font-semibold mb-2">{s.price}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="group btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm">
            Request a Quote <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
