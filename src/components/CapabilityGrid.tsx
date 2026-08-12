'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Plus } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Window from '@/components/Window'
import { capabilities } from '@/content/site'

/**
 * Capabilities as a compact grid. Each tile opens a window holding the full
 * description, the checklist and the tile's original destination link —
 * so nothing is lost, it simply stops living in a long scroll.
 */
export default function CapabilityGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const active = openIndex === null ? null : capabilities[openIndex]

  return (
    <>
      <div className="grid md:grid-cols-3 gap-px bg-[var(--hair)] border border-[var(--hair)]">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={i * 90}>
            <button
              onClick={() => setOpenIndex(i)}
              aria-haspopup="dialog"
              className="group relative block w-full h-full text-left bg-[var(--bg)] overflow-hidden"
            >
              <div className="plate aspect-[4/3]">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-55 group-hover:opacity-80 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/55 to-[var(--bg)]/30" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
                <c.icon size={17} className="text-[var(--blue)] mb-5" />
                <h3 className="display text-[var(--ink)] text-[clamp(1.35rem,2.1vw,1.75rem)] mb-4">
                  {c.title}
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
        label={active?.title ?? 'Capability'}
      >
        {active && (
          <div className="grid lg:grid-cols-2">
            <div className="plate relative min-h-[240px] lg:min-h-[520px]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 900px) 100vw, 540px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[var(--bg)]/25" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--surface)] via-[var(--surface)]/25 to-transparent lg:bg-gradient-to-l lg:via-transparent" />
            </div>

            <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-center">
              <span className="mono text-[10px] uppercase text-[var(--blue)] mb-6">
                Capability
              </span>

              <h3 className="display text-[var(--ink)] text-[clamp(1.9rem,3.4vw,2.9rem)] mb-6">
                {active.title}
              </h3>

              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-9">
                {active.desc}
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-7 gap-y-3.5 mb-11">
                {active.checks.map(ck => (
                  <li key={ck} className="flex items-center gap-2.5 text-[13.5px] text-[var(--ink-2)]">
                    <CheckCircle2 size={13} className="text-[var(--blue)] shrink-0" />
                    {ck}
                  </li>
                ))}
              </ul>

              {/* The tile's original destination, unchanged */}
              <Link href={active.link} className="btn btn-solid self-start">
                {active.linkText} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </Window>
    </>
  )
}
