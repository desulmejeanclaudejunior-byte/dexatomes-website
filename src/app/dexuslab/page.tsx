import type { Metadata } from 'next'
import {
  Code,
  Cpu,
  Globe,
  Shield,
  Smartphone,
  Database,
  Zap,
  Terminal,
  Layout,
  Brain,
  Wifi,
  Settings,
  Gamepad2,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

export const metadata: Metadata = {
  title: 'DexusLab',
  description:
    'DexusLab — Plateforme éducative avec 13+ cours: programmation, robotique, web dev, IA. 4 langues.',
}

const courses = [
  { icon: Code, title: 'Python pour Débutants' },
  { icon: Terminal, title: 'JavaScript & TypeScript' },
  { icon: Globe, title: 'Développement Web (React)' },
  { icon: Smartphone, title: 'Développement Mobile' },
  { icon: Cpu, title: 'Arduino & Microcontrôleurs' },
  { icon: Wifi, title: 'ESP32 & IoT' },
  { icon: Brain, title: 'Intelligence Artificielle' },
  { icon: Shield, title: 'Cybersécurité' },
  { icon: Database, title: 'Bases de Données & SQL' },
  { icon: Layout, title: 'UI/UX Design' },
  { icon: Settings, title: 'DevOps & Cloud' },
  { icon: Zap, title: 'Robotique Avancée' },
  { icon: Gamepad2, title: 'Game Development' },
]

const languages = [
  { code: 'EN', label: 'English' },
  { code: 'FR', label: 'Français' },
  { code: 'ES', label: 'Español' },
  { code: 'HT', label: 'Kreyòl' },
]

export default function DexusLabPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="circuit-dots relative py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimateIn>
              <span className="mb-4 inline-block rounded-full bg-[#0066CC]/10 px-4 py-1.5 text-xs font-bold text-[#00AAFF]">
                2+ ans de développement
              </span>
              <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl">
                Dexus<span className="text-[#00AAFF]">Lab</span>
              </h1>
              <p className="mb-6 text-lg text-[#94A3B8]">
                La plateforme éducative de Dex Atomes LLC. Apprenez la
                programmation, la robotique, le développement web et plus avec
                des cours interactifs et des projets pratiques.
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {['13+ Cours', 'Projets Pratiques', 'Certifications', 'Gratuit + Premium'].map(
                  (chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-[#0066CC] bg-[#0066CC]/10 px-4 py-1.5 text-xs font-semibold text-[#00AAFF]"
                    >
                      {chip}
                    </span>
                  )
                )}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="rounded-lg bg-[#0066CC] px-8 py-3.5 font-bold text-white transition-all hover:bg-[#00AAFF]"
                >
                  App Store
                </a>
                <a
                  href="#"
                  className="rounded-lg border-2 border-[#0066CC] px-8 py-3.5 font-bold text-[#00AAFF] transition-all hover:bg-[#0066CC] hover:text-white"
                >
                  Google Play
                </a>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <div className="mx-auto flex h-72 w-72 items-center justify-center rounded-3xl border-2 border-[#0066CC] bg-[#111D35] shadow-2xl">
                <div className="text-center">
                  <span className="text-6xl font-extrabold text-[#00AAFF]">
                    DL
                  </span>
                  <p className="mt-2 text-sm font-semibold text-[#94A3B8]">
                    Learn. Build. Innovate.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-[#0F2240] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h2 className="mb-8 text-center text-2xl font-extrabold">
              Disponible en <span className="text-[#00AAFF]">4 langues</span>
            </h2>
          </AnimateIn>
          <div className="flex flex-wrap justify-center gap-4">
            {languages.map((lang, i) => (
              <AnimateIn key={lang.code} delay={i * 0.1}>
                <div className="flex items-center gap-3 rounded-xl border border-[#1A3155] bg-[#111D35] px-6 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC] text-sm font-extrabold text-white">
                    {lang.code}
                  </span>
                  <span className="font-semibold">{lang.label}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h2 className="mb-4 text-center text-3xl font-extrabold">
              13+ <span className="text-[#00AAFF]">Cours</span>
            </h2>
            <p className="mx-auto mb-12 max-w-lg text-center text-[#94A3B8]">
              Du débutant au niveau avancé — chaque cours inclut des leçons
              interactives et des projets concrets.
            </p>
          </AnimateIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => (
              <AnimateIn key={c.title} delay={i * 0.05}>
                <div className="flex items-center gap-4 rounded-xl border border-[#1A3155] bg-[#111D35] p-5 transition-all hover:border-[#0066CC] hover:-translate-y-0.5">
                  <c.icon className="h-8 w-8 shrink-0 text-[#00AAFF]" />
                  <span className="font-semibold">{c.title}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* App Screenshots placeholder */}
      <section className="bg-[#060E1C] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimateIn>
            <h2 className="mb-4 text-3xl font-extrabold">
              Bientôt <span className="text-[#00AAFF]">Disponible</span>
            </h2>
            <p className="mb-8 text-[#94A3B8]">
              DexusLab est en cours de développement. Inscrivez-vous pour être
              notifié du lancement.
            </p>
            <a
              href="https://discord.gg/dexuslab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#0066CC] px-8 py-3.5 font-bold text-white transition-all hover:bg-[#00AAFF]"
            >
              Rejoindre la communauté Discord
            </a>
          </AnimateIn>
        </div>
      </section>
    </div>
  )
}
