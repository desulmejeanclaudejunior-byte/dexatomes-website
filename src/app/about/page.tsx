import type { Metadata } from 'next'
import {
  Award,
  BookOpen,
  Cpu,
  GraduationCap,
  Rocket,
  Shield,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Jean-Claude Junior Desulme — Founder & CEO de Dex Atomes LLC. Ingénierie aérospatiale, UCF, Orlando.',
}

const certs = [
  { icon: Shield, label: 'IT Certifié' },
  { icon: Shield, label: 'Sécurité Réseau' },
  { icon: Cpu, label: 'Robotique' },
  { icon: BookOpen, label: 'Programmation' },
]

const timeline = [
  {
    year: '2024',
    title: 'Fondation de Dex Atomes LLC',
    desc: 'Création de l\'entreprise à Orlando, Florida.',
  },
  {
    year: '2024',
    title: 'Début de DexusLab',
    desc: 'Lancement du développement de la plateforme éducative.',
  },
  {
    year: '2025',
    title: 'Robotique Moderne',
    desc: 'Publication du guide complet de robotique pour débutants.',
  },
  {
    year: '2025',
    title: 'Access Lab',
    desc: 'Lancement de la division R&D pour la recherche appliquée.',
  },
  {
    year: '2026',
    title: 'Expansion',
    desc: 'Développement web, consulting et services tech pour entreprises.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="circuit-dots relative py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimateIn>
              <div className="mx-auto flex h-64 w-64 items-center justify-center rounded-full border-4 border-[#0066CC] bg-[#111D35]">
                <span className="text-5xl font-extrabold text-white">JCD</span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h1 className="mb-2 text-4xl font-extrabold">
                Jean-Claude Junior{' '}
                <span className="text-[#00AAFF]">Desulme</span>
              </h1>
              <p className="mb-2 font-semibold text-[#0066CC]">
                Founder & CEO — Dex Atomes LLC
              </p>
              <p className="mb-6 flex items-center gap-2 text-sm text-[#94A3B8]">
                <GraduationCap className="h-4 w-4 text-[#00AAFF]" />
                Aerospace Engineering Student — University of Central Florida
              </p>
              <p className="mb-4 text-[#94A3B8]">
                Passionné de technologie, d&#39;ingénierie et d&#39;éducation.
                Jean-Claude a fondé Dex Atomes LLC pour combler le fossé entre
                l&#39;innovation de pointe et son application pratique.
              </p>
              <p className="mb-6 text-[#94A3B8]">
                Avec des certifications en IT, Sécurité Réseau, Robotique et
                Programmation, il dirige des projets allant du développement web
                aux systèmes embarqués, en passant par l&#39;édition de livres
                techniques et la création de DexusLab.
              </p>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#0F2240] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h2 className="mb-8 text-center text-2xl font-extrabold">
              Certifications
            </h2>
          </AnimateIn>
          <div className="flex flex-wrap justify-center gap-4">
            {certs.map((c, i) => (
              <AnimateIn key={c.label} delay={i * 0.1}>
                <div className="flex items-center gap-3 rounded-xl border border-[#1A3155] bg-[#111D35] px-6 py-4">
                  <c.icon className="h-6 w-6 text-[#00AAFF]" />
                  <span className="font-semibold">{c.label}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <AnimateIn>
            <h2 className="mb-12 text-center text-3xl font-extrabold">
              Notre <span className="text-[#00AAFF]">Parcours</span>
            </h2>
          </AnimateIn>
          <div className="relative border-l-2 border-[#1A3155] pl-8">
            {timeline.map((t, i) => (
              <AnimateIn key={i} delay={i * 0.1}>
                <div className="relative mb-10 last:mb-0">
                  <div className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#0066CC] bg-[#0A1628]">
                    <div className="h-2 w-2 rounded-full bg-[#00AAFF]" />
                  </div>
                  <span className="mb-1 inline-block rounded bg-[#0066CC]/10 px-3 py-1 text-xs font-bold text-[#00AAFF]">
                    {t.year}
                  </span>
                  <h3 className="mb-1 text-lg font-bold">{t.title}</h3>
                  <p className="text-sm text-[#94A3B8]">{t.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#0F2240] py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <AnimateIn>
            <Rocket className="mx-auto mb-6 h-12 w-12 text-[#00AAFF]" />
            <h2 className="mb-4 text-3xl font-extrabold">
              Notre <span className="text-[#00AAFF]">Mission</span>
            </h2>
            <p className="text-lg text-[#94A3B8]">
              Démocratiser l&#39;accès à la technologie et à l&#39;éducation
              technique de qualité. Nous croyons que chaque innovateur mérite les
              outils, les connaissances et le soutien nécessaires pour
              transformer ses idées en réalité — peu importe d&#39;où il vient.
            </p>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
