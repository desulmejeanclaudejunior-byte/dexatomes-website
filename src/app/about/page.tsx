import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Rocket, Zap, Target, ArrowRight } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { values, contact } from '@/content/site'

export const metadata: Metadata = { title: 'About' }

const credentials = [
  { icon: Award, label: 'IT & Security Certified' },
  { icon: Target, label: 'Global service reach' },
  { icon: Zap, label: 'Fast, quality delivery' },
  { icon: Rocket, label: 'DexusLab & Access Lab' },
]

export default function AboutPage() {
  return (
    <>
      {/* Masthead */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 grid-tex overflow-hidden">
        <div className="absolute inset-0 hero-bg -z-10" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="01" label="About" className="mb-12" />
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display text-[var(--ink)] text-[clamp(2.5rem,6.5vw,5rem)] max-w-[14ch]">
              Built by an <span className="text-[var(--blue)]">engineer</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="text-[var(--muted)] text-[17px] leading-[1.85] mt-8 max-w-lg">
              Building the future through technology, education, and innovation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 lg:py-24 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal className="lg:col-span-6">
              <div className="plate ticks aspect-[4/5]">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1000&h=1250&fit=crop"
                  alt="Engineering workbench"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6">
              <Image
                src="/logo-dark.png"
                alt="Dex Atomes"
                width={200}
                height={54}
                className="h-11 w-auto mb-10"
              />
              <h2 className="display text-[var(--ink)] text-[clamp(1.7rem,3vw,2.5rem)] mb-2">
                Jean-Claude Junior Desulme
              </h2>
              <p className="mono text-[11px] tracking-[0.2em] uppercase text-[var(--blue)] mb-10">
                Founder &amp; CEO — Dex Atomes LLC
              </p>

              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-6">
                Dex Atomes LLC is a technology company delivering software development, robotics
                engineering, and technical education for businesses and builders worldwide.
              </p>
              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-12">
                From DexusLab to Robotique Moderne to custom software — everything we build is
                designed to empower the next generation of engineers and innovators.
              </p>

              <div className="grid sm:grid-cols-2 gap-px bg-[var(--hair)] border border-[var(--hair)] mb-12">
                {credentials.map(c => (
                  <div key={c.label} className="bg-[var(--bg)] flex items-center gap-3.5 px-5 py-5">
                    <c.icon size={15} className="text-[var(--blue)] shrink-0" />
                    <span className="text-[var(--ink-2)] text-[13.5px]">{c.label}</span>
                  </div>
                ))}
              </div>

              <div className="hair-t">
                <a href={`mailto:${contact.email}`} className="group flex items-center justify-between py-4 hair-b">
                  <span className="mono text-[13px] text-[var(--ink-2)] group-hover:text-[var(--blue)] transition-colors">
                    {contact.email}
                  </span>
                  <ArrowRight size={13} className="text-[var(--faint)] group-hover:text-[var(--blue)] transition-colors" />
                </a>
                <a href="tel:+18632078619" className="group flex items-center justify-between py-4 hair-b">
                  <span className="mono text-[13px] text-[var(--ink-2)] group-hover:text-[var(--blue)] transition-colors">
                    {contact.phone}
                  </span>
                  <ArrowRight size={13} className="text-[var(--faint)] group-hover:text-[var(--blue)] transition-colors" />
                </a>
                <div className="py-4 hair-b">
                  <span className="mono text-[13px] text-[var(--faint)]">Orlando, Florida</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 lg:py-24 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="02" label="How we work" className="mb-14" />
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--hair)] border border-[var(--hair)]">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div className="bg-[var(--bg)] h-full px-7 py-9">
                  <v.icon size={17} className="text-[var(--blue)] mb-7" />
                  <p className="text-[var(--ink)] text-[14px] font-medium leading-snug mb-2.5">{v.title}</p>
                  <p className="text-[var(--muted)] text-[12.5px] leading-relaxed">{v.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="flex flex-wrap gap-4 mt-16">
              <Link href="/services" className="btn btn-solid">
                Explore Services <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in Touch
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
