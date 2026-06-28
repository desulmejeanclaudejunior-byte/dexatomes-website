'use client'

import { useState } from 'react'
import { ShoppingCart } from 'lucide-react'

export default function BuyButton() {
  const [loading, setLoading] = useState(false)

  async function handleBuy() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', { method: 'POST' })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      alert('Erreur lors du paiement. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="inline-flex items-center gap-2 rounded-lg bg-[#0066CC] px-8 py-4 font-bold text-white transition-all hover:bg-[#00AAFF] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#00AAFF]/20 disabled:opacity-50"
    >
      <ShoppingCart size={18} />
      {loading ? 'Redirection...' : 'Acheter en PDF — $14.99'}
    </button>
  )
}
