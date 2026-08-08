'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, Smartphone, ClipboardList, Key, AlertCircle } from 'lucide-react'

const MONTHLY_HTG    = '~1,350 HTG'
const SIXMONTH_HTG   = '~6,750 HTG'
const ANNUAL_HTG     = '~13,000 HTG'
const MONTHLY_USD    = '~$10 USD'
const SIXMONTH_USD   = '~$50 USD'
const ANNUAL_USD     = '~$100 USD'
const MONCASH_NUMBER = '+509 34214531'

export default function SubscribeHTPage() {
  const [plan, setPlan]           = useState<'monthly' | 'six_months' | 'annual'>('annual')
  const [name, setName]           = useState('')
  const [email, setEmail]         = useState('')
  const [txRef, setTxRef]         = useState('')
  const [loading, setLoading]     = useState(false)
  const [done, setDone]           = useState(false)
  const [error, setError]         = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !txRef) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/moncash-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, plan, transactionRef: txRef }),
      })
      if (!res.ok) throw new Error()
      setDone(true)
    } catch {
      setError('Something went wrong. Please try again or contact support@dexuslab.com')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-[72px]">

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg,#060e24 0%,#0c1a3d 100%)' }} className="py-14 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-blue-400 text-xs font-bold tracking-[3px] uppercase mb-4">
            🇭🇹 Pou Ayisyen — For Haitian Users
          </span>
          <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">
            Abòne ak MonCash
          </h1>
          <p className="text-slate-400 text-base max-w-md mx-auto leading-relaxed">
            Pa bezwen kat kredi. Peye ak MonCash epi resevwa yon kòd aksè pou DexusLab Premium.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            No credit card needed. Pay with MonCash and receive a DexusLab Premium access code.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-slate-900 text-xl font-bold text-center mb-6">Chwazi plan ou — Choose your plan</h2>
          <div className="grid grid-cols-3 gap-3">
            {/* Monthly */}
            <button
              onClick={() => setPlan('monthly')}
              className={`rounded-2xl border-2 p-4 text-left transition-all ${
                plan === 'monthly'
                  ? 'border-[#1a3ab5] bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Mansyèl · Monthly</p>
              <p className="text-slate-900 text-2xl font-bold">{MONTHLY_HTG}</p>
              <p className="text-slate-400 text-xs mt-1">chak mwa · per month</p>
              <p className="text-slate-400 text-xs">{MONTHLY_USD}</p>
              {plan === 'monthly' && (
                <div className="mt-3 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#1a3ab5]" />
                  <span className="text-[#1a3ab5] text-xs font-semibold">Seleksyone · Selected</span>
                </div>
              )}
            </button>

            {/* 6 months */}
            <button
              onClick={() => setPlan('six_months')}
              className={`rounded-2xl border-2 p-4 text-left relative transition-all ${
                plan === 'six_months'
                  ? 'border-[#1a3ab5] bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-slate-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide whitespace-nowrap">
                6 mwa · 6 months
              </span>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">6 Mwa · 6 Months</p>
              <p className="text-slate-900 text-2xl font-bold">{SIXMONTH_HTG}</p>
              <p className="text-slate-400 text-xs mt-1">pou 6 mwa · for 6 months</p>
              <p className="text-slate-400 text-xs">{SIXMONTH_USD}</p>
              {plan === 'six_months' && (
                <div className="mt-3 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#1a3ab5]" />
                  <span className="text-[#1a3ab5] text-xs font-semibold">Seleksyone · Selected</span>
                </div>
              )}
            </button>

            {/* Annual */}
            <button
              onClick={() => setPlan('annual')}
              className={`rounded-2xl border-2 p-4 text-left relative transition-all ${
                plan === 'annual'
                  ? 'border-[#1a3ab5] bg-blue-50'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <span className="absolute -top-2.5 right-3 bg-[#1a3ab5] text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                Meyè valè · Best value
              </span>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Anyèl · Annual</p>
              <p className="text-slate-900 text-2xl font-bold">{ANNUAL_HTG}</p>
              <p className="text-slate-400 text-xs mt-1">pa ane · per year</p>
              <p className="text-slate-400 text-xs">{ANNUAL_USD}</p>
              {plan === 'annual' && (
                <div className="mt-3 flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-[#1a3ab5]" />
                  <span className="text-[#1a3ab5] text-xs font-semibold">Seleksyone · Selected</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-10 px-6 bg-[#f0f4ff]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-slate-900 text-lg font-bold text-center mb-6">Kijan sa travay — How it works</h2>
          <div className="space-y-4">
            {[
              { icon: Smartphone,    title: 'Peye ak MonCash',          sub: 'Skane QR a oswa voye lajan dirèkteman nan nimewo a anba a. — Scan the QR or send directly to the number below.' },
              { icon: ClipboardList, title: 'Notе referans tranzaksyon', sub: 'Apre peman an, MonCash ap ba ou yon nimewo referans. Ekri li. — After payment, MonCash gives you a transaction reference. Note it down.' },
              { icon: Key,           title: 'Ranpli fòm nan',            sub: 'Antre non ou, imèl, ak referans la anba a. Nou ap voye kòd ou nan 24è. — Fill the form below. We\'ll email your code within 24 hours.' },
            ].map(({ icon: Icon, title, sub }, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl p-4 border border-blue-100">
                <div className="w-9 h-9 rounded-lg bg-[#1a3ab5]/10 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-[#1a3ab5]" />
                </div>
                <div>
                  <p className="text-slate-900 font-semibold text-sm">{`${i + 1}. ${title}`}</p>
                  <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QR + Number ── */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-sm mx-auto text-center">
          <h2 className="text-slate-900 text-lg font-bold mb-6">Peye isit — Pay here</h2>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
            <Image
              src="/moncash-qr.png"
              alt="MonCash QR Code — DexusLab"
              width={220}
              height={220}
              className="mx-auto rounded-xl"
            />
            <p className="text-slate-500 text-xs mt-3">Skane QR a nan aplikasyon MonCash ou · Scan with your MonCash app</p>
          </div>

          <div className="bg-[#f0f4ff] border border-blue-100 rounded-xl py-4 px-6">
            <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-1">Oswa voye nan · Or send to</p>
            <p className="text-[#1a3ab5] text-2xl font-bold tracking-wider">{MONCASH_NUMBER}</p>
            <p className="text-slate-400 text-xs mt-1">Sylvester Saintluc · DexusLab</p>
          </div>

          <p className="text-slate-400 text-xs mt-4">
            Voye{' '}
            <span className="font-bold text-slate-600">
              {plan === 'annual' ? ANNUAL_HTG : plan === 'six_months' ? SIXMONTH_HTG : MONTHLY_HTG}
            </span>{' '}
            pou plan{' '}
            {plan === 'annual' ? 'anyèl' : plan === 'six_months' ? '6 mwa' : 'mansyèl'} ou.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-12 px-6 bg-[#f0f4ff]">
        <div className="max-w-md mx-auto">
          <h2 className="text-slate-900 text-lg font-bold text-center mb-2">Konfime peman ou — Confirm your payment</h2>
          <p className="text-slate-500 text-sm text-center mb-8">Apre ou fin peye, ranpli fòm sa a. · After paying, fill this form.</p>

          {done ? (
            <div className="bg-white border border-green-200 rounded-2xl p-8 text-center">
              <CheckCircle2 size={44} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-slate-900 font-bold text-lg mb-2">Nou resevwa peman ou!</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                We received your payment confirmation. Your access code will be sent to <span className="font-semibold text-slate-700">{email}</span> within 24 hours.
              </p>
              <p className="text-slate-400 text-xs mt-4">
                Pwoblèm? · Problems? <a href="mailto:support@dexuslab.com" className="text-[#1a3ab5] font-semibold">support@dexuslab.com</a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
              {/* Plan confirmation */}
              <div className="bg-[#f0f4ff] rounded-xl p-3 flex items-center justify-between">
                <span className="text-slate-600 text-sm font-medium">
                  {plan === 'annual' ? 'Annual plan' : plan === 'six_months' ? '6-month plan' : 'Monthly plan'}
                </span>
                <span className="text-[#1a3ab5] font-bold">
                  {plan === 'annual' ? ANNUAL_HTG : plan === 'six_months' ? SIXMONTH_HTG : MONTHLY_HTG}
                </span>
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-1.5">Non · Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Antre non ou · Enter your name"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-1.5">Imèl · Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Kòd ou ap vini isit · Your code will come here"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5]"
                />
              </div>

              <div>
                <label className="block text-slate-700 text-sm font-semibold mb-1.5">
                  Referans tranzaksyon MonCash · MonCash Transaction Reference
                </label>
                <input
                  type="text"
                  required
                  value={txRef}
                  onChange={e => setTxRef(e.target.value)}
                  placeholder="ex: 1234567890"
                  className="w-full border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1a3ab5] focus:ring-1 focus:ring-[#1a3ab5] font-mono"
                />
                <p className="text-slate-400 text-xs mt-1">
                  Ou ka jwenn li nan istwa tranzaksyon MonCash ou · Found in your MonCash transaction history
                </p>
              </div>

              {error && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-lg p-3">
                  <AlertCircle size={15} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-red-600 text-xs">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading || !name || !email || !txRef}
                className="w-full bg-[#1a3ab5] hover:bg-[#2348c7] disabled:opacity-50 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
              >
                {loading ? 'Ap voye...' : 'Soumèt — Submit'}
              </button>

              <p className="text-slate-400 text-xs text-center">
                Ou ap resevwa kòd ou nan imèl nan 24è. · You will receive your code by email within 24 hours.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer note ── */}
      <section className="py-8 px-6 bg-white border-t border-slate-100">
        <div className="max-w-md mx-auto text-center">
          <p className="text-slate-400 text-xs leading-relaxed">
            Kòd la ap travay sèlman yon fwa epi li pa transferab. Pou sipò, kontakte{' '}
            <a href="mailto:support@dexuslab.com" className="text-[#1a3ab5] font-semibold">support@dexuslab.com</a>
            . Peman yo final epi yo pa ranbousab. · Codes are single-use and non-transferable.
          </p>
        </div>
      </section>

    </div>
  )
}
