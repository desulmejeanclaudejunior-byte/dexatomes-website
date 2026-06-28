'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import AnimateIn from '@/components/AnimateIn'

type GeneralForm = { name: string; email: string; message: string }
type BookingForm = {
  name: string
  email: string
  service: string
  description: string
  budget: string
  date: string
}

const inputClass =
  'w-full rounded-lg border border-[#1A3155] bg-[#111D35] px-4 py-3 text-white placeholder-[#4A6A8A] outline-none transition-all focus:border-[#00AAFF] focus:ring-2 focus:ring-[#00AAFF]/20'

function GeneralContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<GeneralForm>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(data: GeneralForm) {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'general' }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="mb-2 text-xl font-bold">Message Général</h3>
      <input
        {...register('name', { required: true })}
        placeholder="Votre nom"
        className={inputClass}
      />
      {errors.name && <p className="text-xs text-red-400">Requis</p>}
      <input
        {...register('email', { required: true })}
        type="email"
        placeholder="Votre email"
        className={inputClass}
      />
      {errors.email && <p className="text-xs text-red-400">Requis</p>}
      <textarea
        {...register('message', { required: true })}
        rows={5}
        placeholder="Votre message..."
        className={inputClass}
      />
      {errors.message && <p className="text-xs text-red-400">Requis</p>}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-[#0066CC] py-3.5 font-bold text-white transition-all hover:bg-[#00AAFF] disabled:opacity-50"
      >
        {status === 'sending'
          ? 'Envoi...'
          : status === 'sent'
            ? 'Envoyé !'
            : status === 'error'
              ? 'Erreur — réessayez'
              : 'Envoyer'}
      </button>
    </form>
  )
}

function ServiceBookingForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BookingForm>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(data: BookingForm) {
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'booking' }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      reset()
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="mb-2 text-xl font-bold">Réserver un Service</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <input
            {...register('name', { required: true })}
            placeholder="Votre nom"
            className={inputClass}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">Requis</p>}
        </div>
        <div>
          <input
            {...register('email', { required: true })}
            type="email"
            placeholder="Votre email"
            className={inputClass}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">Requis</p>}
        </div>
      </div>
      <select
        {...register('service', { required: true })}
        className={inputClass}
        defaultValue=""
      >
        <option value="" disabled>Choisir un service</option>
        <option>Développement Web</option>
        <option>Application Mobile</option>
        <option>Robotique & Automatisation</option>
        <option>Sécurité & Réseaux IT</option>
        <option>Formation & Mentorat</option>
        <option>Consulting Tech</option>
      </select>
      <textarea
        {...register('description', { required: true })}
        rows={4}
        placeholder="Décrivez votre projet..."
        className={inputClass}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <select {...register('budget')} className={inputClass} defaultValue="">
          <option value="" disabled>Budget estimé</option>
          <option>{'< $500'}</option>
          <option>$500 – $1,000</option>
          <option>$1,000 – $5,000</option>
          <option>$5,000+</option>
        </select>
        <input {...register('date')} type="date" className={inputClass} />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-[#0066CC] py-3.5 font-bold text-white transition-all hover:bg-[#00AAFF] disabled:opacity-50"
      >
        {status === 'sending'
          ? 'Envoi...'
          : status === 'sent'
            ? 'Demande envoyée !'
            : status === 'error'
              ? 'Erreur — réessayez'
              : 'Envoyer la demande'}
      </button>
    </form>
  )
}

export default function ContactForms() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <AnimateIn>
        <div className="rounded-xl border border-[#1A3155] bg-[#111D35]/50 p-8">
          <GeneralContactForm />
        </div>
      </AnimateIn>
      <AnimateIn delay={0.2}>
        <div className="rounded-xl border border-[#1A3155] bg-[#111D35]/50 p-8">
          <ServiceBookingForm />
        </div>
      </AnimateIn>
    </div>
  )
}
