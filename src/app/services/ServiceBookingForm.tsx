'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

type FormData = {
  name: string
  email: string
  service: string
  description: string
  budget: string
  date: string
}

export default function ServiceBookingForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function onSubmit(data: FormData) {
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

  const inputClass =
    'w-full rounded-lg border border-[#1A3155] bg-[#111D35] px-4 py-3 text-white placeholder-[#4A6A8A] outline-none transition-all focus:border-[#00AAFF] focus:ring-2 focus:ring-[#00AAFF]/20'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
        <option value="" disabled>
          Choisir un service
        </option>
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
          <option value="" disabled>
            Budget estimé
          </option>
          <option>{'< $500'}</option>
          <option>$500 – $1,000</option>
          <option>$1,000 – $5,000</option>
          <option>$5,000+</option>
        </select>
        <input
          {...register('date')}
          type="date"
          className={inputClass}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-lg bg-[#0066CC] py-3.5 font-bold text-white transition-all hover:bg-[#00AAFF] disabled:opacity-50"
      >
        {status === 'sending'
          ? 'Envoi...'
          : status === 'sent'
            ? 'Message envoyé !'
            : status === 'error'
              ? 'Erreur — réessayez'
              : 'Envoyer la demande'}
      </button>
    </form>
  )
}
