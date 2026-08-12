import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingCart, BookOpen, Wrench, Rocket, Heart } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import ContactForm from '@/components/ContactForm'
import CapabilityGrid from '@/components/CapabilityGrid'
import { values, badges, comingSoon, contact, serviceOptions } from '@/content/site'

export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════
          HERO — the image is atmosphere, faded far back so the
          statement carries the screen. Almost no copy up front.
      ════════════════════════════════════════════════════ */}
      <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
        {/* Ambient plate, heavily faded */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.28]"
            style={{ objectPosition: '78% 50%' }}
          />
          <div className="absolute inset-0 bg-[var(--bg)]/45" />
          {/* Vignette: darkest where the type sits */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/70 to-[var(--bg)]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]/85" />
        </div>
        <div className="absolute inset-0 grid-tex" />

        {/* Soft cobalt bloom */}
        <div className="pointer-events-none absolute top-1/4 -left-40 w-[720px] h-[720px] rounded-full bg-[var(--blue)]/[0.07] blur-[160px]" />

        <div className="relative flex-1 flex items-center w-full pt-32 pb-16 lg:pt-24 lg:pb-10">
          <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="max-w-[900px]">
              <Reveal>
                <Eyebrow label="Build · Learn · Innovate" className="mb-12" />
              </Reveal>

              <Reveal delay={110}>
                <h1 className="display text-[var(--ink)] text-[clamp(3rem,8.5vw,7rem)]">
                  Engineering solutions
                  <br />
                  built <em>for the future</em>
                </h1>
              </Reveal>

              <Reveal delay={220}>
                <p className="text-[var(--muted)] text-[17px] leading-[1.8] mt-10 max-w-[400px]">
                  Software, robotics, and engineering education.
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="flex flex-wrap gap-4 mt-12">
                  <Link href="/services" className="btn btn-solid">
                    Explore Services <ArrowRight size={14} />
                  </Link>
                  <Link href="/store" className="btn btn-ghost">
                    <ShoppingCart size={14} /> Visit Bookstore
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Baseline rail */}
        <Reveal delay={400} className="relative w-full">
          <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
            <div className="hair-t grid grid-cols-2 lg:grid-cols-4">
              {badges.map(b => (
                <div key={b.label} className="py-6 pr-6 flex items-center gap-3.5">
                  <b.icon size={15} className="text-[var(--blue)] shrink-0" />
                  <div>
                    <p className="text-[var(--ink)] text-[12.5px] font-medium leading-tight">{b.label}</p>
                    <p className="text-[11px] text-[var(--faint)] leading-tight mt-0.5">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ════════════════════════════════════════════════════
          01 — ABOUT: asymmetric, image-led
      ════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="01" label="About Dex Atomes" className="mb-16" />
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <Reveal className="lg:col-span-7">
              <div className="plate ticks aspect-[16/11]">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1400&h=1000&fit=crop"
                  alt="Engineer working on electronics at a bench"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/75 via-transparent to-transparent" />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <h2 className="display text-[var(--ink)] text-[clamp(1.9rem,3.6vw,3rem)] mb-8">
                A technology company
                <br />
                <span className="text-[var(--blue)]">built by an engineer</span>
              </h2>
              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-6">
                Dex Atomes LLC delivers software development, robotics engineering, and technical
                education for businesses and builders worldwide.
              </p>
              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-10">
                From DexusLab to Robotique Moderne to custom software — everything we build is
                designed to empower the next generation of engineers and innovators.
              </p>
              <Link
                href="/about"
                className="navlink mono text-[11px] tracking-[0.18em] uppercase text-[var(--blue)] inline-flex items-center gap-2"
              >
                Read the full story <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          02 — CAPABILITIES: alternating full-width scenes
      ════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-36 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="02" label="What we build" className="mb-14" />
          </Reveal>

          <CapabilityGrid />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          03 — DEXUS LAB: its own environment
      ════════════════════════════════════════════════════ */}
      <section className="relative py-28 lg:py-40 hair-t overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=1800&h=1000&fit=crop"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/92 to-[var(--bg)]/70" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="03" label="Dexus Lab" className="mb-14" />
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 items-end">
            <Reveal className="lg:col-span-7">
              <h2 className="display text-[var(--ink)] text-[clamp(2rem,4.6vw,3.6rem)] mb-8">
                A free multilingual
                <br />
                <span className="text-[var(--blue)]">learning platform</span>
              </h2>
              <p className="text-[var(--muted)] text-[16px] leading-[1.9] max-w-lg mb-11">
                Learn by building. DexusLab hosts our course tracks in robotics, web development,
                cybersecurity, AI, drones and more — open to anyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href={contact.dexusLab} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                  Open DexusLab <ArrowRight size={14} />
                </a>
                <Link href="/courses" className="btn btn-ghost">
                  Browse Tracks
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5">
              <div className="hair-t">
                {['Robotics & Automation', 'Web Development', 'Cybersecurity', 'AI & Machine Learning'].map(t => (
                  <Link key={t} href="/courses" className="group flex items-center justify-between py-5 hair-b">
                    <span className="text-[var(--ink-2)] text-[15px] group-hover:text-[var(--ink)] transition-colors">
                      {t}
                    </span>
                    <ArrowRight
                      size={14}
                      className="text-[var(--faint)] group-hover:text-[var(--blue)] group-hover:translate-x-1 transition-all"
                    />
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          04 — LIBRARY: the published work
      ════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-36 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="04" label="Engineering Library" className="mb-14" />
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Featured title */}
            <Reveal className="lg:col-span-7">
              <div className="grid sm:grid-cols-5 gap-10 items-center">
                <Link href="/store" className="sm:col-span-2 block">
                  <div className="plate aspect-[2/3]">
                    <Image
                      src="/representation.png"
                      alt="Robotique Moderne — Guide Complet pour Débutants"
                      fill
                      sizes="(max-width: 640px) 100vw, 220px"
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="sm:col-span-3">
                  <span className="mono text-[10px] tracking-[0.22em] uppercase text-[var(--blue)]">
                    Available now · eBook
                  </span>
                  <h3 className="display text-[var(--ink)] text-[clamp(1.7rem,3vw,2.4rem)] mt-4">
                    Robotique Moderne
                  </h3>
                  <p className="text-[var(--muted)] text-[15px] italic mt-1 mb-6">
                    Guide Complet pour Débutants
                  </p>
                  <p className="text-[var(--muted)] text-[14.5px] leading-[1.85] mb-7">
                    The practical guide to robotics, Arduino, ESP32, sensors, AI, drones, and
                    real-world projects. Perfect for beginners and future engineers.
                  </p>

                  <div className="flex flex-wrap gap-x-6 gap-y-2.5 mb-8 mono text-[11px] text-[var(--faint)]">
                    <span className="flex items-center gap-1.5"><BookOpen size={12} className="text-[var(--blue)]" /> 130+ Pages</span>
                    <span className="flex items-center gap-1.5"><Wrench size={12} className="text-[var(--blue)]" /> Step-by-Step</span>
                    <span className="flex items-center gap-1.5"><Rocket size={12} className="text-[var(--blue)]" /> Real Projects</span>
                    <span className="flex items-center gap-1.5"><Heart size={12} className="text-[var(--blue)]" /> Illustrated</span>
                  </div>

                  <div className="flex items-center gap-6 flex-wrap">
                    <span className="display text-[var(--ink)] text-3xl">$9.99</span>
                    <Link href="/store" className="btn btn-solid">
                      Buy Now <ArrowRight size={14} />
                    </Link>
                    <Link href="/store" className="navlink mono text-[11px] tracking-[0.18em] uppercase text-[var(--ink-2)]">
                      Preview Contents
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pipeline */}
            <Reveal delay={120} className="lg:col-span-5">
              <p className="mono text-[10px] tracking-[0.22em] uppercase text-[var(--faint)] mb-7">
                In production
              </p>
              <div className="hair-t">
                {comingSoon.map(b => (
                  <div key={b.title} className="py-5 hair-b flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[var(--ink)] text-[15px] mb-1.5">{b.title}</p>
                      <p className="text-[var(--muted)] text-[13px] leading-relaxed">{b.desc}</p>
                    </div>
                    <span className="mono text-[10px] text-[var(--faint)] whitespace-nowrap pt-1">2027</span>
                  </div>
                ))}
              </div>
              <Link
                href="/store"
                className="navlink mono text-[11px] tracking-[0.18em] uppercase text-[var(--blue)] inline-flex items-center gap-2 mt-8"
              >
                See the full library <ArrowRight size={13} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          05 — WHY: hairline ledger
      ════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="05" label="Why Dex Atomes" className="mb-14" />
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
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          06 — CONTACT
      ════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-36 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="06" label="Get in touch" className="mb-16" />
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-14 lg:gap-24">
            <Reveal className="lg:col-span-5">
              <h2 className="display text-[var(--ink)] text-[clamp(1.9rem,4vw,3.2rem)] mb-8">
                Have a project
                <br />
                in mind?
              </h2>
              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-12 max-w-sm">
                Whether you need a website, mobile app, engineering consultation, or want to explore
                our books — let&#39;s build something together.
              </p>

              <div className="hair-t">
                <a href={`mailto:${contact.email}`} className="group flex items-center justify-between py-5 hair-b">
                  <span className="mono text-[13px] text-[var(--ink-2)] group-hover:text-[var(--blue)] transition-colors">
                    {contact.email}
                  </span>
                  <ArrowRight size={13} className="text-[var(--faint)] group-hover:text-[var(--blue)] transition-colors" />
                </a>
                <a href="tel:+18632078619" className="group flex items-center justify-between py-5 hair-b">
                  <span className="mono text-[13px] text-[var(--ink-2)] group-hover:text-[var(--blue)] transition-colors">
                    {contact.phone}
                  </span>
                  <ArrowRight size={13} className="text-[var(--faint)] group-hover:text-[var(--blue)] transition-colors" />
                </a>
                <div className="py-5 hair-b">
                  <span className="mono text-[13px] text-[var(--faint)]">{contact.location}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <ContactForm options={serviceOptions} />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
