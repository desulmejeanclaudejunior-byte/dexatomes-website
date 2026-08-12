import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'

import Reveal from '@/components/Reveal'
import Eyebrow from '@/components/Eyebrow'
import ContactForm from '@/components/ContactForm'
import { contact } from '@/content/site'

export const metadata: Metadata = { title: 'Contact' }

/* This page's select values differ slightly from the homepage form's and are
   preserved as they were. */
const options = ['Website Development', 'Mobile App', 'Robotics', 'Consulting', 'Bookstore', 'Other']

export default function ContactPage() {
  return (
    <>
      {/* Masthead */}
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20 grid-tex overflow-hidden">
        <div className="absolute inset-0 hero-bg -z-10" />
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <Reveal>
            <Eyebrow num="01" label="Contact" className="mb-12" />
          </Reveal>
          <Reveal delay={90}>
            <h1 className="display text-[var(--ink)] text-[clamp(2.5rem,6.5vw,5rem)] max-w-[12ch]">
              Get in <span className="text-[var(--blue)]">touch</span>
            </h1>
          </Reveal>
          <Reveal delay={170}>
            <p className="text-[var(--muted)] text-[17px] leading-[1.85] mt-8 max-w-lg">
              Have a project? Need a consultation? Let&#39;s talk.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24 hair-t">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-24">
            <Reveal className="lg:col-span-5">
              <p className="text-[var(--muted)] text-[15.5px] leading-[1.9] mb-12 max-w-sm">
                We respond within 24 hours.
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
                  <span className="mono text-[13px] text-[var(--faint)]">Orlando, Florida</span>
                </div>
              </div>

              <p className="mono text-[11px] text-[var(--faint)] mt-10 tracking-[0.12em]">
                @DexAtomes on all platforms
              </p>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-7">
              <ContactForm options={options} successTitle="Sent!" />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
