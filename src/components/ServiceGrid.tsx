'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plus } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Window from '@/components/Window'
import { services } from '@/content/site'

/**
 * The five services as an editorial grid. Each opens a window carrying the
 * full description, price and the original "Request a Quote" link to /contact.
 */
export default function ServiceGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const active = openIndex === null ? null : services[openIndex]

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-px bg-[var(--hair)] border border-[var(--hair)]">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={(i % 3) * 80}
            /* First two run wide so the grid reads as a composition, not a row of clones */
            className={i < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}
          >
            <button
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              className="group relative block w-full h-full text-left bg-[var(--bg)] overflow-hidden"
            >
              <div className={`plate ${i < 2 ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/60 to-[var(--bg)]/35" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <div className="flex items-center gap-3 mb-5">
                  <s.icon size={16} className="text-[var(--blue)]" />
                  <span className="serif italic text-[var(--blue)] text-[14px]">{s.price}</span>
                </div>
                <h3 className="display text-[var(--ink)] text-[clamp(1.25rem,2vw,1.7rem)] mb-4">
                  {s.title}
                </h3>
                <span className="win-open">
                  <span className="plus">
                    <Plus size={12} />
                  </span>
                  Open
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Window
        open={openIndex !== null}
        onClose={() => setOpenIndex(null)}
        label={active?.title ?? 'Service'}
      >
        {active && (
          <div className="grid lg:grid-cols-2">
            <div className="plate relative min-h-[240px] lg:min-h-[500px]">
              <Image
                src={active.img}
                alt={active.title}
                fill
                sizes="(max-width: 900px) 100vw, 540px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--bg)]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/25 to-transparent lg:bg-gradient-to-l lg:via-transparent" />
            </div>

            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-6">
                <active.icon size={17} className="text-[var(--blue)]" />
                <span className="mono text-[10px] uppercase text-[var(--muted)]">Service</span>
              </div>

              <h3 className="display text-[var(--ink)] text-[clamp(1.9rem,3.4vw,2.9rem)] mb-4">
                {active.title}
              </h3>

              <p className="serif italic text-[var(--blue)] text-[19px] mb-8">{active.price}</p>

              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-11">{active.desc}</p>

              {/* Original destination, unchanged */}
              <Link href="/contact" className="btn btn-solid self-start">
                Request a Quote <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </Window>
    </>
  )
}
