import Link from 'next/link'
import {
  Globe,
  Cpu,
  ChevronDown,
  Smartphone,
  BookOpen,
  ArrowRight,
  Download,
  GraduationCap,
  Code,
  Lightbulb,
} from 'lucide-react'
import AnimateIn from '@/components/AnimateIn'

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    price: 'À partir de $500',
    desc: 'Sites vitrine, e-commerce, SaaS avec les technologies modernes.',
  },
  {
    icon: Smartphone,
    title: 'Application Mobile',
    price: 'À partir de $800',
    desc: 'iOS & Android natif avec React Native et Firebase.',
  },
  {
    icon: Cpu,
    title: 'Robotique & IoT',
    price: 'À partir de $300',
    desc: 'Arduino, ESP32, capteurs, drones et systèmes embarqués.',
  },
  {
    icon: Code,
    title: 'Consulting Tech',
    price: '$100/heure',
    desc: 'Architecture, revue de code et choix technologiques.',
  },
]

const pillars = [
  {
    icon: GraduationCap,
    title: 'Éducation Tech',
    desc: 'Livres, cours et mentorat pour la prochaine génération de développeurs et ingénieurs.',
  },
  {
    icon: Code,
    title: 'Développement',
    desc: 'Web, mobile, embarqué — des solutions logicielles complètes pour chaque besoin.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Recherche appliquée, robotique et automatisation via Access Lab, notre division R&D.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="circuit-dots relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,170,255,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <div className="animate-glow mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#00AAFF]">
            <span className="text-3xl font-extrabold text-white">DX</span>
          </div>
          <h1 className="mb-4 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            DEX ATOMES <span className="text-[#00AAFF]">LLC</span>
          </h1>
          <p className="mb-3 text-xl font-semibold text-[#00AAFF] italic">
            Technology. Education. Innovation.
          </p>
          <p className="mx-auto mb-10 max-w-xl text-base text-[#94A3B8]">
            Développement web & mobile, robotique, cybersécurité, DexusLab et
            livres éducatifs. Nous aidons les innovateurs à construire le futur.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="rounded-lg bg-[#0066CC] px-8 py-3.5 font-bold text-white transition-all hover:bg-[#00AAFF] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00AAFF]/20"
            >
              Voir nos services
            </Link>
            <Link
              href="/dexuslab"
              className="rounded-lg border-2 border-[#0066CC] px-8 py-3.5 font-bold text-[#00AAFF] transition-all hover:bg-[#0066CC] hover:text-white hover:-translate-y-0.5"
            >
              <Download className="mr-2 inline-block h-4 w-4" />
              Télécharger DexusLab
            </Link>
          </div>
        </div>
        <div className="animate-bounce-slow absolute bottom-8 left-1/2 -translate-x-1/2 text-[#00AAFF]">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* ── 3 PILLARS ── */}
      <section className="bg-[#0F2240] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((p, i) => (
              <AnimateIn key={p.title} delay={i * 0.1}>
                <div className="rounded-xl border border-[#1A3155] bg-[#111D35] p-8 text-center transition-all hover:-translate-y-1 hover:border-[#00AAFF]/40 hover:shadow-lg hover:shadow-[#00AAFF]/5">
                  <p.icon className="mx-auto mb-4 h-10 w-10 text-[#00AAFF]" />
                  <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
                  <p className="text-sm text-[#94A3B8]">{p.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ── */}
      <section className="circuit-dots relative py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <AnimateIn>
            <h2 className="mb-4 text-center text-3xl font-extrabold">
              NOS <span className="text-[#00AAFF]">SERVICES</span>
            </h2>
            <p className="mx-auto mb-12 max-w-lg text-center text-[#94A3B8]">
              Des solutions technologiques complètes adaptées à vos besoins.
            </p>
          </AnimateIn>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <AnimateIn key={s.title} delay={i * 0.1}>
                <div className="group rounded-xl border border-[#1A3155] bg-[#111D35] p-6 transition-all hover:-translate-y-1 hover:border-[#0066CC] hover:shadow-lg hover:shadow-[#00AAFF]/5">
                  <s.icon className="mb-4 h-8 w-8 text-[#00AAFF]" />
                  <h3 className="mb-1 font-bold">{s.title}</h3>
                  <p className="mb-3 text-sm font-semibold text-[#0066CC]">
                    {s.price}
                  </p>
                  <p className="mb-4 text-sm text-[#94A3B8]">{s.desc}</p>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-[#00AAFF] transition-colors group-hover:text-white"
                  >
                    En savoir plus →
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEXUSLAB HIGHLIGHT ── */}
      <section className="bg-[#060E1C] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimateIn>
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-3xl border-2 border-[#0066CC] bg-[#111D35]">
                <span className="text-5xl font-extrabold text-[#00AAFF]">
                  DL
                </span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h2 className="mb-4 text-3xl font-extrabold">
                DexusLab — <span className="text-[#00AAFF]">Apprendre le Code</span>
              </h2>
              <p className="mb-6 text-[#94A3B8]">
                Notre plateforme éducative avec 13+ cours couvrant la
                programmation, la robotique, le développement web et plus.
                Disponible en 4 langues.
              </p>
              <div className="mb-6 flex flex-wrap gap-2">
                {['13+ Cours', '4 Langues', 'Projets Pratiques', 'Certifications'].map(
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
                  className="rounded-lg bg-[#0066CC] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-[#00AAFF]"
                >
                  App Store
                </a>
                <a
                  href="#"
                  className="rounded-lg border-2 border-[#0066CC] px-6 py-3 text-sm font-bold text-[#00AAFF] transition-all hover:bg-[#0066CC] hover:text-white"
                >
                  Google Play
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── BOOK FEATURE ── */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimateIn>
              <div className="mx-auto w-64">
                <div className="circuit-dots relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0A1628] to-[#111D35] p-8 shadow-2xl">
                  <div className="relative text-center">
                    <p className="mb-1 text-2xl font-extrabold tracking-widest text-white">
                      ROBOTIQUE
                    </p>
                    <p className="mb-6 text-2xl font-extrabold tracking-widest text-[#00AAFF]">
                      MODERNE
                    </p>
                    <div className="mb-6 flex flex-wrap justify-center gap-1.5">
                      {['Arduino', 'ESP32', 'IA', 'Drones'].map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#00AAFF]/30 bg-[#00AAFF]/10 px-3 py-1 text-[10px] font-semibold text-[#00AAFF]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mx-auto h-16 w-16 rounded-full bg-[radial-gradient(circle,rgba(0,170,255,0.4)_0%,transparent_70%)]" />
                    <p className="mt-6 text-xs text-[#94A3B8]">
                      Guide Complet pour Débutants
                    </p>
                    <p className="mt-1 text-xs text-[#94A3B8]">
                      129 pages · 10 chapitres
                    </p>
                  </div>
                </div>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <span className="mb-4 inline-block rounded-full bg-[#0066CC]/10 px-4 py-1.5 text-xs font-bold text-[#00AAFF]">
                10 Chapitres · 50 Illustrations
              </span>
              <h2 className="mb-2 text-3xl font-extrabold">
                Robotique Moderne
              </h2>
              <p className="mb-2 text-lg text-[#94A3B8] italic">
                Guide Complet pour Débutants
              </p>
              <p className="mb-4 text-sm font-semibold text-[#0066CC]">
                Arduino · ESP32 · IA · Drones · Capteurs · Projets Pratiques
              </p>
              <p className="mb-6 text-[#94A3B8]">
                Un guide complet de robotique pour débutants publié par Dex
                Atomes LLC. Apprenez les microcontrôleurs, l&#39;IA et
                l&#39;automatisation avec des projets pratiques illustrés.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-extrabold text-white">
                  $14.99
                </span>
                <Link
                  href="/store"
                  className="rounded-lg bg-[#0066CC] px-6 py-3 font-bold text-white transition-all hover:bg-[#00AAFF]"
                >
                  <BookOpen className="mr-2 inline-block h-4 w-4" />
                  Acheter le PDF
                </Link>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="bg-[#0F2240] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <AnimateIn>
              <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-full border-4 border-[#0066CC] bg-[#111D35]">
                <span className="text-4xl font-extrabold text-white">JCD</span>
              </div>
            </AnimateIn>
            <AnimateIn delay={0.2}>
              <h2 className="mb-4 text-3xl font-extrabold">
                Jean-Claude Junior{' '}
                <span className="text-[#00AAFF]">Desulme</span>
              </h2>
              <p className="mb-2 text-sm font-semibold text-[#0066CC]">
                Founder & CEO — Dex Atomes LLC
              </p>
              <p className="mb-6 text-[#94A3B8]">
                Étudiant en ingénierie aérospatiale à l&#39;Université de Central
                Florida (UCF). Certifié en IT, Sécurité Réseau, Robotique et
                Programmation. Créateur de DexusLab et auteur de Robotique
                Moderne.
              </p>
              <Link
                href="/about"
                className="text-sm font-semibold text-[#00AAFF] transition-colors hover:text-white"
              >
                En savoir plus →
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0066CC] to-[#00AAFF] py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <AnimateIn>
            <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Réservez une consultation gratuite et discutons de vos objectifs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-bold text-[#0066CC] transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Réserver une consultation gratuite
              <ArrowRight size={18} />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  )
}
