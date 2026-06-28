import type { Metadata } from 'next'
import {
  Globe,
  Smartphone,
  Cpu,
  Shield,
  BookOpen,
  Code,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import ServiceBookingForm from './ServiceBookingForm'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Développement web, apps mobiles, robotique, cybersécurité, formation et consulting tech.',
}

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    price: 'À partir de $500',
    description:
      'Sites vitrine, e-commerce, SaaS. Next.js, React, TypeScript.',
  },
  {
    icon: Smartphone,
    title: 'Application Mobile',
    price: 'À partir de $800',
    description:
      'iOS & Android. React Native / Expo. Firebase backend.',
  },
  {
    icon: Cpu,
    title: 'Robotique & Automatisation',
    price: 'À partir de $300',
    description:
      'Arduino, ESP32, capteurs, drones, systèmes embarqués.',
  },
  {
    icon: Shield,
    title: 'Sécurité & Réseaux IT',
    price: 'À partir de $200',
    description:
      'Audit sécurité, configuration réseau, formation équipe.',
  },
  {
    icon: BookOpen,
    title: 'Formation & Mentorat',
    price: '$75/heure',
    description:
      'Sessions 1-on-1 programmation, robotique, développement web.',
  },
  {
    icon: Code,
    title: 'Consulting Tech',
    price: '$100/heure',
    description:
      'Architecture, revue de code, choix technologiques.',
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="circuit-dots relative py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h1 className="mb-4 text-center text-4xl font-extrabold sm:text-5xl">
              NOS <span className="text-[#00AAFF]">SERVICES</span>
            </h1>
            <p className="mx-auto mb-16 max-w-lg text-center text-[#94A3B8]">
              Des solutions technologiques complètes pour transformer vos idées
              en réalité.
            </p>
          </AnimateIn>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.1}>
                <div className="group h-full rounded-xl border border-[#1A3155] bg-[#111D35] p-8 transition-all hover:-translate-y-1 hover:border-[#0066CC] hover:shadow-lg hover:shadow-[#00AAFF]/5">
                  <s.icon className="mb-4 h-10 w-10 text-[#00AAFF]" />
                  <h3 className="mb-1 text-lg font-bold">{s.title}</h3>
                  <p className="mb-4 text-sm font-semibold text-[#0066CC]">
                    {s.price}
                  </p>
                  <p className="text-sm text-[#94A3B8]">{s.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-[#0F2240] py-24">
        <div className="mx-auto max-w-2xl px-6">
          <AnimateIn>
            <h2 className="mb-2 text-center text-3xl font-extrabold">
              Réserver un <span className="text-[#00AAFF]">Service</span>
            </h2>
            <p className="mb-10 text-center text-[#94A3B8]">
              Remplissez le formulaire et nous vous contacterons sous 1-2 jours
              ouvrés.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <ServiceBookingForm />
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
