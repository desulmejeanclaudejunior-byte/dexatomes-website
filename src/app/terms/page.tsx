import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — DEXUS Lab',
  description: 'Terms of Service for the DEXUS Lab mobile application by DexAtomes LLC.',
}

export default function TermsPage() {
  return (
    <div className="legal">
      <section className="hero-bg grid-tex pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="mono text-[11px] tracking-[0.26em] uppercase text-[var(--blue)] mb-8">Legal</p>
          <h1 className="display text-[var(--ink)] text-[clamp(2.25rem,5.5vw,4rem)] mb-6">
            Terms of Service
          </h1>
          <p className="text-[var(--muted)] text-[16px]">DEXUS Lab — DexAtomes LLC</p>
          <p className="mono text-[11px] text-[var(--faint)] mt-3">Last updated: July 2025</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 sm:px-10 hair-t">
        <div className="max-w-3xl mx-auto">

          <div className="text-slate-600 leading-relaxed space-y-8">

            <div>
              <p className="text-slate-500">
                These Terms of Service ("Terms") govern your use of the DEXUS Lab mobile application
                operated by DexAtomes LLC ("we", "our", "us"). By downloading or using DEXUS Lab,
                you agree to be bound by these Terms. If you do not agree, do not use the App.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">1. Acceptance of Terms</h2>
              <p className="text-slate-500">
                By creating an account or using DEXUS Lab, you confirm that you are at least 13 years old
                and have the legal capacity to enter into this agreement. If you are under 18, you confirm
                that your parent or guardian has reviewed and agreed to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">2. Permitted Use</h2>
              <p className="text-slate-500 mb-3">You agree to use DEXUS Lab only for lawful, personal, non-commercial educational purposes. You must not:</p>
              <ul className="space-y-2 text-slate-500 list-disc pl-5">
                <li>Copy, distribute, or resell any course content without written permission</li>
                <li>Reverse engineer, decompile, or attempt to extract the source code of the App</li>
                <li>Use the App to harass, abuse, or harm any other person</li>
                <li>Attempt to gain unauthorized access to any part of our systems</li>
                <li>Use automated tools to scrape or download course content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">3. Account Responsibility</h2>
              <p className="text-slate-500">
                You are responsible for maintaining the confidentiality of your account credentials and for
                all activity that occurs under your account. Notify us immediately if you suspect unauthorized
                access. We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">4. Subscriptions & Payments</h2>
              <ul className="space-y-3 text-slate-500 list-none pl-0">
                <li><strong className="text-slate-700">Free tier:</strong> The App is free to download and includes access to selected free content.</li>
                <li><strong className="text-slate-700">Premium subscription:</strong> Unlocks the full course library. Billed through your Apple ID at the price shown at the time of purchase.</li>
                <li><strong className="text-slate-700">Auto-renewal:</strong> Subscriptions renew automatically unless cancelled at least 24 hours before the end of the current period.</li>
                <li><strong className="text-slate-700">Cancellation:</strong> You can cancel at any time through your Apple ID account settings. No refunds are provided for the current billing period.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">5. Intellectual Property</h2>
              <p className="text-slate-500">
                All content in DEXUS Lab — including course materials, videos, text, graphics, logos, and
                the DEXUS Lab name — is the exclusive property of DexAtomes LLC and is protected by
                copyright law. Your subscription grants you a personal, non-transferable license to access
                content for your own learning. No content may be reproduced or distributed without our
                prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">6. Disclaimers</h2>
              <p className="text-slate-500">
                DEXUS Lab is provided "as is" without warranties of any kind. We do not guarantee that the
                App will be error-free, uninterrupted, or that course content will lead to any specific
                career outcome. Educational content is for informational purposes only.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">7. Limitation of Liability</h2>
              <p className="text-slate-500">
                To the maximum extent permitted by law, DexAtomes LLC shall not be liable for any indirect,
                incidental, special, or consequential damages arising from your use of DEXUS Lab, even if
                we have been advised of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">8. Changes to Terms</h2>
              <p className="text-slate-500">
                We may update these Terms at any time. We will notify you of significant changes through
                the App or by email. Continued use of DEXUS Lab after changes take effect constitutes
                acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">9. Governing Law</h2>
              <p className="text-slate-500">
                These Terms are governed by the laws of the State of Florida, USA, without regard to
                conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">10. Contact</h2>
              <p className="text-slate-500">For questions about these Terms, contact us:</p>
              <div className="mt-4 p-5 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-semibold text-slate-800">DexAtomes LLC</p>
                <p className="text-slate-500 mt-1">Orlando, Florida, USA</p>
                <p className="text-slate-500">
                  Email:{' '}
                  <a href="mailto:desulmejeanclaudejunior@gmail.com" className="text-[#1a3ab5] hover:underline">
                    desulmejeanclaudejunior@gmail.com
                  </a>
                </p>
                <p className="text-slate-500">
                  Website:{' '}
                  <a href="https://www.dexatomes.com" className="text-[#1a3ab5] hover:underline">
                    www.dexatomes.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
