import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import { tracks, contact } from '@/content/site'

export const metadata: Metadata = { title: 'Courses & Resources' }

/* Asymmetric tile spans — the first tile in each row of three runs wide. */
const spans = [
  'lg:col-span-4 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-4',
  'lg:col-span-2',
]

export default function CoursesPage() {
  return (
    <>
      {/* Masthead */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 grid-tex overflow-hidden">
        <div className="absolute inset-0 hero-bg -z-10" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="01" label="DexusLab Courses" className="mb-12" />
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display text-[var(--ink)] text-[clamp(2.5rem,6.5vw,5rem)] font-semibold max-w-[14ch]">
              Learn by <span className="text-[var(--blue)]">building</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="text-[var(--muted)] text-[17px] leading-[1.85] mt-8 max-w-lg mb-11">
              Available on DexusLab — free multilingual learning platform.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <a href={contact.dexusLab} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              Open DexusLab <ArrowRight size={14} />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Track mosaic */}
      <section className="py-20 lg:py-24 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="02" label="Tracks" className="mb-14" />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:auto-rows-[240px]">
            {tracks.map((t, i) => (
              <Reveal key={t.title} delay={(i % 3) * 70} className={spans[i] ?? 'lg:col-span-2'}>
                <a
                  href={contact.dexusLab}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full min-h-[240px]"
                >
                  <div className="plate h-full">
                    <Image
                      src={t.img}
                      alt={t.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/25 to-transparent" />

                    {t.tag && (
                      <span className="absolute top-4 left-4 mono text-[9px] tracking-[0.2em] uppercase text-[var(--blue)] border border-[var(--blue)]/50 px-2.5 py-1">
                        {t.tag}
                      </span>
                    )}

                    <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[var(--ink)] text-[16px] font-medium leading-tight">
                          {t.title}
                        </p>
                        <p className="mono text-[10px] text-[var(--muted)] mt-1.5">{t.count}</p>
                      </div>
                      <ArrowRight
                        size={15}
                        className="text-[var(--faint)] group-hover:text-[var(--blue)] group-hover:translate-x-1 transition-all shrink-0"
                      />
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="flex flex-wrap gap-4 mt-16">
              <a href={contact.dexusLab} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
                Open DexusLab <ArrowRight size={14} />
              </a>
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
