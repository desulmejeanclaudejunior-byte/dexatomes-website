import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { services } from '@/content/site'

export const metadata: Metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <>
      {/* Masthead */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 grid-tex overflow-hidden">
        <div className="absolute inset-0 hero-bg -z-10" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="01" label="Services" className="mb-12" />
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display text-[var(--ink)] text-[clamp(2.5rem,6.5vw,5rem)] font-semibold max-w-[16ch]">
              What we build <span className="text-[var(--blue)]">for you</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="text-[var(--muted)] text-[17px] leading-[1.85] mt-8 max-w-lg">
              End-to-end digital solutions from concept to deployment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service scenes — each row is an editorial band, not a card */}
      <section className="hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <article className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center py-16 lg:py-24 hair-b">
                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="plate aspect-[16/10]">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/55 to-transparent" />
                  </div>
                </div>

                <div className={`lg:col-span-6 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="mono text-[11px] text-[var(--faint)] tracking-[0.2em]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <s.icon size={16} className="text-[var(--blue)]" />
                  </div>

                  <h2 className="display text-[var(--ink)] text-[clamp(1.6rem,3vw,2.4rem)] font-semibold mb-4">
                    {s.title}
                  </h2>

                  <p className="mono text-[12px] tracking-[0.16em] uppercase text-[var(--blue)] mb-7">
                    {s.price}
                  </p>

                  <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] max-w-md mb-9">
                    {s.desc}
                  </p>

                  <Link
                    href="/contact"
                    className="navlink mono text-[11px] tracking-[0.18em] uppercase text-[var(--ink-2)] inline-flex items-center gap-2 hover:text-[var(--blue)] transition-colors"
                  >
                    Request a Quote <ArrowRight size={13} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <h2 className="display text-[var(--ink)] text-[clamp(1.8rem,4vw,3rem)] font-semibold mb-8 max-w-[18ch]">
              Have something else in mind?
            </h2>
            <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] max-w-md mb-11">
              If your project falls outside these categories, get in touch and we&#39;ll talk it
              through.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-solid">
                Request a Quote <ArrowRight size={14} />
              </Link>
              <Link href="/store" className="btn btn-ghost">
                Visit Bookstore
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
