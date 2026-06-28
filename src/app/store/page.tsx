import type { Metadata } from 'next'
import { BookOpen, Check } from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'
import BuyButton from './BuyButton'

export const metadata: Metadata = {
  title: 'Boutique',
  description:
    'Achetez Robotique Moderne — guide complet de robotique pour débutants. Arduino, ESP32, IA, drones.',
}

const chapters = [
  'Introduction à la Robotique',
  'Arduino — Les Bases',
  'ESP32 — WiFi & Bluetooth',
  'Capteurs & Actionneurs',
  'Programmation en C/C++',
  'Intelligence Artificielle',
  'Drones & Véhicules Autonomes',
  'Communication Sans Fil',
  'Projets Pratiques Guidés',
  'Ressources & Prochaines Étapes',
]

export default function StorePage() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            {/* Book cover */}
            <AnimateIn>
              <div className="mx-auto max-w-sm">
                <div className="circuit-dots relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A1628] to-[#111D35] p-10 shadow-2xl">
                  <div className="relative text-center">
                    <p className="mb-1 text-3xl font-extrabold tracking-widest text-white">
                      ROBOTIQUE
                    </p>
                    <p className="mb-8 text-3xl font-extrabold tracking-widest text-[#00AAFF]">
                      MODERNE
                    </p>
                    <div className="mb-8 flex flex-wrap justify-center gap-2">
                      {['Arduino', 'ESP32', 'IA', 'Drones', 'Capteurs'].map(
                        (t) => (
                          <span
                            key={t}
                            className="rounded-full border border-[#00AAFF]/30 bg-[#00AAFF]/10 px-3 py-1 text-xs font-semibold text-[#00AAFF]"
                          >
                            {t}
                          </span>
                        )
                      )}
                    </div>
                    <div className="animate-glow mx-auto h-20 w-20 rounded-full bg-[radial-gradient(circle,rgba(0,170,255,0.4)_0%,transparent_70%)]" />
                    <p className="mt-8 text-sm text-[#94A3B8]">
                      Guide Complet pour Débutants
                    </p>
                    <p className="mt-1 text-xs text-[#94A3B8]">
                      par Dex Atomes LLC
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Details */}
            <AnimateIn delay={0.2}>
              <span className="mb-4 inline-block rounded-full bg-[#0066CC]/10 px-4 py-1.5 text-xs font-bold text-[#00AAFF]">
                PDF — Téléchargement Immédiat
              </span>
              <h1 className="mb-2 text-4xl font-extrabold">
                Robotique Moderne
              </h1>
              <p className="mb-4 text-lg text-[#94A3B8] italic">
                Guide Complet pour Débutants
              </p>

              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-white">
                  $14.99
                </span>
                <span className="text-sm text-[#94A3B8]">PDF</span>
              </div>

              <div className="mb-6 flex flex-wrap gap-4 text-sm text-[#94A3B8]">
                <span>
                  <BookOpen className="mr-1 inline h-4 w-4 text-[#00AAFF]" />
                  129 pages
                </span>
                <span>10 chapitres</span>
                <span>50+ illustrations</span>
              </div>

              <BuyButton />

              <div className="mt-10">
                <h3 className="mb-4 text-lg font-bold">Table des matières</h3>
                <div className="space-y-2">
                  {chapters.map((ch, i) => (
                    <div
                      key={ch}
                      className="flex items-center gap-3 rounded-lg border border-[#1A3155] bg-[#111D35] px-4 py-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded bg-[#0066CC]/20 text-xs font-bold text-[#00AAFF]">
                        {i + 1}
                      </span>
                      <span className="text-sm">{ch}</span>
                      <Check className="ml-auto h-4 w-4 text-[#00AAFF]/50" />
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </div>
  )
}
