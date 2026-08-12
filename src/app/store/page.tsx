'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, ArrowRight, CheckCircle2, Bell, Download, BookOpen, Wrench, Rocket, Heart } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { contact } from '@/content/site'

const books = [
  { title: 'Robotique Moderne', sub: 'Complete Robotics Guide · French', price: '$9.99', tag: 'Available', img: '/representation.png', real: true },
  { title: 'Arduino Mastery', sub: 'Fundamentals & Projects', price: '$19.99', tag: 'Coming 2027', img: '/arduino-cover.png', real: false },
  { title: 'ESP32 In Action', sub: 'Advanced IoT Guide', price: '$19.99', tag: 'Coming 2027', img: '/esp32-cover.png', real: false },
  { title: 'Drone Technology', sub: 'Build & Program Drones', price: '$24.99', tag: 'Coming 2027', img: '/drone-cover.png', real: false },
  { title: 'AI & ML Guide', sub: 'Machine Learning Basics', price: '$19.99', tag: 'Coming 2027', img: '/ai-ml-cover.png', real: false },
  { title: 'Python for Engineers', sub: 'Zero to Automation', price: '$14.99', tag: 'Coming 2027', img: '/python-cover.png', real: false },
]

const chapters = [
  'Introduction to Robotics',
  'Arduino Fundamentals',
  'ESP32 — WiFi & Bluetooth',
  'Sensors & Actuators',
  'C/C++ Programming',
  'Artificial Intelligence',
  'Drones & Autonomous Vehicles',
  'Wireless Communication',
  'Guided Hands-on Projects',
  'Resources & Next Steps',
]

const features = [
  'Arduino & ESP32 programming',
  'Sensors, motors & electronics',
  'AI & machine learning for robotics',
  'Drones & autonomous vehicles',
  'Step-by-step practical projects',
]

export default function StorePage() {
  const [buying, setBuying] = useState(false)

  /* Checkout behaviour is unchanged from the original implementation. */
  async function handleBuy() {
    setBuying(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) window.location.href = data.url
      else alert('Payment system is being configured. Please check back soon or contact support@dexuslab.com')
    } catch {
      alert('Something went wrong. Please try again.')
    } finally {
      setBuying(false)
    }
  }

  return (
    <>
      {/* Masthead */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 grid-tex overflow-hidden">
        <div className="absolute inset-0 hero-bg -z-10" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="01" label="Bookstore" className="mb-12" />
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display text-[var(--ink)] text-[clamp(2.5rem,6.5vw,5rem)] font-semibold max-w-[14ch]">
              Engineering <span className="text-[var(--blue)]">Library</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="text-[var(--muted)] text-[17px] leading-[1.85] mt-8 max-w-lg">
              Ebooks, guides, and resources for engineers and builders.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured title */}
      <section className="py-20 lg:py-24 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal className="lg:col-span-5">
              <div className="plate ticks aspect-[2/3]">
                <Image
                  src="/representation.png"
                  alt="Robotique Moderne — Guide Complet pour Débutants"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-7 flex-wrap">
                <span className="mono text-[10px] tracking-[0.22em] uppercase text-[var(--blue)] border border-[var(--blue)]/40 px-3 py-1.5">
                  Available Now · eBook
                </span>
                <div className="flex items-center border border-[var(--hair-2)]">
                  <span className="mono text-[10px] tracking-[0.14em] bg-[var(--blue)] text-[#05070a] px-3 py-1.5">FR</span>
                  <span
                    className="mono text-[10px] tracking-[0.14em] text-[var(--faint)] px-3 py-1.5 cursor-not-allowed"
                    title="English version coming soon"
                  >
                    EN
                  </span>
                </div>
                <span className="mono text-[10px] text-[var(--faint)] italic">English version coming soon</span>
              </div>

              <h2 className="display text-[var(--ink)] text-[clamp(1.9rem,4vw,3.2rem)] font-semibold mb-3">
                Robotique Moderne
              </h2>
              <p className="text-[var(--muted)] text-[16px] italic mb-2">Guide Complet pour Débutants</p>
              <p className="mono text-[11px] text-[var(--faint)] mb-9">
                By Jean-Claude J. Desulme · Dex Atomes LLC
              </p>

              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-9 max-w-xl">
                The practical guide to robotics, Arduino, ESP32, sensors, AI, drones, and real-world
                projects. Written in French for beginners and future engineers. From theory to
                practice — learn, understand, and build your own robots.
              </p>

              <div className="flex flex-wrap gap-x-7 gap-y-3 mb-9 mono text-[11px] text-[var(--faint)]">
                <span className="flex items-center gap-2"><BookOpen size={13} className="text-[var(--blue)]" /> 129 Pages</span>
                <span className="flex items-center gap-2"><Wrench size={13} className="text-[var(--blue)]" /> 10 Chapters</span>
                <span className="flex items-center gap-2"><Rocket size={13} className="text-[var(--blue)]" /> Hands-on Projects</span>
                <span className="flex items-center gap-2"><Heart size={13} className="text-[var(--blue)]" /> Fully Illustrated</span>
              </div>

              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-11">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-2.5 text-[13.5px] text-[var(--ink-2)]">
                    <CheckCircle2 size={13} className="text-[var(--blue)] shrink-0" /> {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-7 flex-wrap mb-14">
                <span className="display text-[var(--ink)] text-4xl font-semibold">$9.99</span>
                <button onClick={handleBuy} disabled={buying} className="btn btn-solid disabled:opacity-50">
                  <ShoppingCart size={15} />
                  {buying ? 'Processing...' : 'Buy eBook — $9.99'}
                  <ArrowRight size={14} />
                </button>
              </div>

              {/* Table of contents */}
              <div className="hair-t pt-8">
                <p className="mono text-[10px] tracking-[0.22em] uppercase text-[var(--faint)] mb-7">
                  Table of Contents
                </p>
                <div className="grid sm:grid-cols-2 gap-x-10">
                  {chapters.map((ch, i) => (
                    <div key={ch} className="flex items-baseline gap-4 py-3 hair-b">
                      <span className="mono text-[10px] text-[var(--blue)]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13.5px] text-[var(--ink-2)]">{ch}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Full catalogue */}
      <section className="py-20 lg:py-24 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="02" label="All Books" className="mb-14" />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
            {books.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 70}>
                <article className="group">
                  <div className="plate aspect-[3/4] mb-6">
                    <Image
                      src={b.img}
                      alt={b.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={`object-cover ${!b.real ? 'opacity-35' : ''}`}
                    />
                    {b.real ? (
                      <span className="absolute top-4 left-4 mono text-[9px] tracking-[0.2em] uppercase text-[var(--blue)] border border-[var(--blue)]/50 px-2.5 py-1 bg-[var(--bg)]/60">
                        {b.tag}
                      </span>
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <span className="mono text-[11px] tracking-[0.24em] uppercase text-[var(--ink-2)]">
                          Coming Soon
                        </span>
                        <span className="mono text-[10px] tracking-[0.24em] text-[var(--faint)]">2027</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[var(--ink)] text-[15px] font-medium">{b.title}</p>
                  <p className="text-[var(--muted)] text-[12.5px] mt-1.5">{b.sub}</p>

                  <div className="flex items-center justify-between mt-5 pt-4 hair-t">
                    <span className="mono text-[13px] text-[var(--blue)]">{b.price}</span>

                    {b.tag === 'Available' ? (
                      <button
                        onClick={handleBuy}
                        disabled={buying}
                        className="mono text-[10px] tracking-[0.16em] uppercase text-[var(--ink)] inline-flex items-center gap-2 hover:text-[var(--blue)] transition-colors disabled:opacity-50"
                      >
                        <Download size={12} /> Buy eBook
                      </button>
                    ) : (
                      /* Was an inert button; now a real mailto so the control does what it says. */
                      <a
                        href={`mailto:${contact.email}?subject=${encodeURIComponent(`Notify me — ${b.title}`)}`}
                        className="mono text-[10px] tracking-[0.16em] uppercase text-[var(--faint)] inline-flex items-center gap-2 hover:text-[var(--blue)] transition-colors"
                      >
                        <Bell size={11} /> Notify Me
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="flex flex-wrap gap-4 mt-20">
              <Link href="/contact" className="btn btn-ghost">
                Ask a Question
              </Link>
              <Link href="/" className="btn btn-ghost">
                Back Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
