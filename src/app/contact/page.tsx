import type { Metadata } from 'next'
import { Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import ContactForms from './ContactForms'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Dex Atomes LLC. Email: support@dexuslab.com. Orlando, Florida.',
}

const contactCards = [
  {
    icon: Mail,
    title: 'Email',
    value: 'support@dexuslab.com',
    href: 'mailto:support@dexuslab.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Orlando, Florida — USA',
  },
  {
    icon: Clock,
    title: 'Temps de réponse',
    value: '1–2 jours ouvrés',
  },
  {
    icon: MessageCircle,
    title: 'Discord',
    value: 'discord.gg/dexuslab',
    href: 'https://discord.gg/dexuslab',
  },
]

export default function ContactPage() {
  return (
    <div className="pt-16">
      <section className="circuit-dots relative py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h1 className="mb-4 text-center text-4xl font-extrabold sm:text-5xl">
              CONTACTEZ-<span className="text-[#00AAFF]">NOUS</span>
            </h1>
            <p className="mx-auto mb-16 max-w-lg text-center text-[#94A3B8]">
              Un projet en tête ? Discutons ensemble et construisons quelque
              chose de génial.
            </p>
          </AnimateIn>

          {/* Contact Info Cards */}
          <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => (
              <AnimateIn key={c.title} delay={i * 0.1}>
                <div className="rounded-xl border border-[#1A3155] bg-[#111D35] p-6 text-center">
                  <c.icon className="mx-auto mb-3 h-8 w-8 text-[#00AAFF]" />
                  <h3 className="mb-1 text-sm font-bold text-[#94A3B8]">
                    {c.title}
                  </h3>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm font-semibold text-[#00AAFF] transition-colors hover:text-white"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold">{c.value}</p>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Forms */}
          <ContactForms />

          {/* Social Links */}
          <AnimateIn delay={0.3}>
            <div className="mt-16 text-center">
              <h3 className="mb-4 text-lg font-bold">Suivez-nous</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { label: 'Facebook', href: 'https://facebook.com/DexAtomes' },
                  { label: 'Instagram', href: 'https://instagram.com/DexAtomes' },
                  { label: 'TikTok', href: 'https://tiktok.com/@DexAtomes' },
                  { label: 'LinkedIn', href: 'https://linkedin.com/company/DexAtomes' },
                  { label: 'YouTube', href: 'https://youtube.com/@DexAtomes' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg border border-[#1A3155] bg-[#111D35] px-5 py-2.5 text-sm font-semibold text-[#94A3B8] transition-all hover:border-[#00AAFF] hover:text-[#00AAFF]"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
