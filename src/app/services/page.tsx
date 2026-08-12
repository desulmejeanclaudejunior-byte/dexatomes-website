import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import Backdrop from '@/components/Backdrop'
import ServiceGrid from '@/components/ServiceGrid'

export const metadata: Metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <>
      {/* Masthead */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 grid-tex overflow-hidden">
        <div className="absolute inset-0 hero-bg z-0" />
        <Backdrop src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1800&h=1000&fit=crop" opacity={0.26} position="60% 50%" priority />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="01" label="Services" className="mb-12" />
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display text-[var(--ink)] text-[clamp(2.5rem,6.5vw,5rem)] max-w-[16ch]">
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

      {/* Service grid — each tile opens a window with the full detail */}
      <section className="py-20 lg:py-24 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="02" label="Capabilities" className="mb-14" />
          </Reveal>
          <ServiceGrid />
        </div>
      </section>

      {/* Close */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <h2 className="display text-[var(--ink)] text-[clamp(1.8rem,4vw,3rem)] mb-8 max-w-[18ch]">
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
