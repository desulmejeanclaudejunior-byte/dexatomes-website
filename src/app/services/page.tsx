import type { Metadata } from 'next'
import { Globe, Smartphone, Cpu, Shield, GraduationCap, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = { title: 'Services' }

const services = [
  { icon: Globe, title: 'Web Development', price: 'From $500', desc: 'Responsive websites, web apps, e-commerce, SaaS platforms. Built with Next.js, React, TypeScript.' },
  { icon: Smartphone, title: 'Mobile Apps', price: 'From $800', desc: 'Native-quality iOS & Android apps. React Native, Expo, Firebase backend integration.' },
  { icon: Cpu, title: 'Robotics & IoT', price: 'From $300', desc: 'Custom hardware, Arduino, ESP32, PCB prototyping, sensor integration, drone systems.' },
  { icon: Shield, title: 'IT & Security', price: 'From $200', desc: 'Network configuration, security audits, penetration testing, infrastructure setup.' },
  { icon: GraduationCap, title: 'Training & Mentoring', price: '$75/hour', desc: 'One-on-one sessions in programming, robotics, web development. All skill levels welcome.' },
  { icon: Wrench, title: 'Tech Consulting', price: '$100/hour', desc: 'Architecture decisions, code reviews, technology strategy for startups and enterprises.' },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      <section className="hero-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-wide uppercase mb-4">Services</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">What we build for you</h1>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">End-to-end technology solutions — from concept to deployment.</p>
        </div>
      </section>
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(s => (
            <div key={s.title} className="group bg-slate-50 hover:bg-white rounded-2xl border border-slate-100 hover:border-blue-100 p-7 card-hover">
              <div className="w-11 h-11 bg-blue-50 group-hover:bg-blue-600 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <s.icon size={20} className="text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-slate-900 font-semibold mb-1">{s.title}</h3>
              <p className="text-blue-600 text-sm font-semibold mb-3">{s.price}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/contact" className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-colors">
            Request a Quote <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
