import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — DEXUS Lab',
  description: 'Privacy Policy for the DEXUS Lab mobile application by DexAtomes LLC.',
}

export default function PrivacyPage() {
  return (
    <div className="legal">
      <section className="hero-bg grid-tex pt-36 pb-16 lg:pt-44 lg:pb-20 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <p className="mono text-[11px] tracking-[0.26em] uppercase text-[var(--blue)] mb-8">Legal</p>
          <h1 className="display text-[var(--ink)] text-[clamp(2.25rem,5.5vw,4rem)] font-semibold mb-6">
            Privacy Policy
          </h1>
          <p className="text-[var(--muted)] text-[16px]">DEXUS Lab — DexAtomes LLC</p>
          <p className="mono text-[11px] text-[var(--faint)] mt-3">Last updated: July 2025</p>
        </div>
      </section>

      <section className="py-20 lg:py-28 px-6 sm:px-10 hair-t">
        <div className="max-w-3xl mx-auto prose prose-slate max-w-none">

          <div className="text-slate-600 leading-relaxed space-y-8">

            <div>
              <p className="text-slate-500">
                DexAtomes LLC ("we", "our", or "us") operates the DEXUS Lab mobile application (the "App").
                This Privacy Policy explains how we collect, use, and protect your information when you use DEXUS Lab.
                By using the App you agree to the practices described here.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">1. Information We Collect</h2>
              <ul className="space-y-3 text-slate-500 list-none pl-0">
                <li><strong className="text-slate-700">Account Information:</strong> When you register, we collect your name and email address.</li>
                <li><strong className="text-slate-700">Learning Activity:</strong> We track your course progress, completed lessons, XP points, streaks, and achievement badges so we can save your progress and personalize your experience.</li>
                <li><strong className="text-slate-700">Device Information:</strong> We collect basic device identifiers (device type, operating system version) for performance and compatibility purposes.</li>
                <li><strong className="text-slate-700">Language Preference:</strong> We store your selected language so the App displays in your preferred language.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">2. How We Use Your Information</h2>
              <ul className="space-y-2 text-slate-500 list-disc pl-5">
                <li>To create and manage your account</li>
                <li>To save and sync your course progress across devices</li>
                <li>To send optional daily reminder notifications (which you can disable at any time)</li>
                <li>To improve app performance and fix bugs</li>
                <li>To process subscription payments through Apple's secure payment system</li>
              </ul>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">3. Data Storage & Security</h2>
              <p className="text-slate-500">
                Your data is stored securely using Google Firebase (Firestore and Firebase Authentication).
                We use industry-standard encryption in transit (HTTPS/TLS) and at rest.
                We do not sell, rent, or share your personal information with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">4. Third-Party Services</h2>
              <p className="text-slate-500 mb-3">The App uses the following third-party services, each governed by their own privacy policies:</p>
              <ul className="space-y-2 text-slate-500 list-disc pl-5">
                <li><strong className="text-slate-700">Google Firebase</strong> — authentication and cloud database</li>
                <li><strong className="text-slate-700">RevenueCat</strong> — subscription management and payment processing</li>
                <li><strong className="text-slate-700">Apple App Store</strong> — in-app purchases are processed directly by Apple</li>
              </ul>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">5. Subscriptions</h2>
              <p className="text-slate-500">
                DEXUS Lab offers an optional premium subscription. All payment transactions are processed
                by Apple through your Apple ID. We do not store your credit card or payment details.
                Subscriptions auto-renew unless cancelled at least 24 hours before the renewal date.
                You can manage or cancel subscriptions in your Apple ID account settings at any time.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">6. Children's Privacy</h2>
              <p className="text-slate-500">
                DEXUS Lab is not directed at children under 13. We do not knowingly collect personal
                information from children under 13. If you believe a child has provided us with personal
                information, please contact us and we will delete it promptly.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">7. Your Rights</h2>
              <p className="text-slate-500 mb-3">You have the right to:</p>
              <ul className="space-y-2 text-slate-500 list-disc pl-5">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your account and associated data</li>
                <li>Opt out of marketing communications</li>
              </ul>
              <p className="text-slate-500 mt-3">To exercise any of these rights, contact us at the email below.</p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">8. Changes to This Policy</h2>
              <p className="text-slate-500">
                We may update this Privacy Policy from time to time. We will notify you of significant changes
                by updating the "Last updated" date above and, where appropriate, through the App.
                Continued use of the App after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-slate-900 text-xl font-bold mb-3">9. Contact Us</h2>
              <p className="text-slate-500">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
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
