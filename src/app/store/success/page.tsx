'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Download, BookOpen, Mail, ArrowRight } from 'lucide-react'

import Reveal from '@/components/Reveal'

export default function SuccessPage() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-32 pb-24 grid-tex overflow-hidden">
      <div className="absolute inset-0 hero-bg -z-10" />

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <Reveal className="lg:col-span-4">
            <div className="plate ticks aspect-[2/3] max-w-[300px]">
              <Image
                src="/representation.png"
                alt="Robotique Moderne"
                fill
                sizes="300px"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 size={18} className="text-[var(--blue)]" />
              <span className="mono text-[11px] tracking-[0.24em] uppercase text-[var(--blue)]">
                Purchase Complete
              </span>
            </div>

            <h1 className="display text-[var(--ink)] text-[clamp(2rem,5vw,3.8rem)] mb-7 max-w-[16ch]">
              Your eBook is ready
            </h1>

            <p className="text-[var(--muted)] text-[16px] leading-[1.85] mb-12 max-w-md">
              Thank you for buying Robotique Moderne. Download your copy below.
            </p>

            {/* Download destinations unchanged */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="/Robotique_Moderne.epub"
                download="Robotique_Moderne.epub"
                className="btn btn-solid"
              >
                <Download size={15} /> Download .epub
              </a>
              <a
                href="/Robotique_Moderne_Web.pdf"
                download="Robotique_Moderne_Web.pdf"
                className="btn btn-ghost"
              >
                <Download size={15} /> Download PDF
              </a>
            </div>

            <div className="hair-t hair-b py-6 flex items-start gap-4 mb-12 max-w-lg">
              <Mail size={16} className="text-[var(--blue)] shrink-0 mt-0.5" />
              <div>
                <p className="text-[var(--ink)] text-[14px] mb-1">Check your email</p>
                <p className="text-[var(--muted)] text-[13px] leading-relaxed">
                  A confirmation with the download link has been sent to your email address.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-8">
              <Link
                href="/store"
                className="navlink mono text-[11px] tracking-[0.18em] uppercase text-[var(--blue)] inline-flex items-center gap-2"
              >
                <BookOpen size={13} /> Browse more books
              </Link>
              <Link
                href="/"
                className="navlink mono text-[11px] tracking-[0.18em] uppercase text-[var(--muted)] inline-flex items-center gap-2"
              >
                Home <ArrowRight size={13} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
