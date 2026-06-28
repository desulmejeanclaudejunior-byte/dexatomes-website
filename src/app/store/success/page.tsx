import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Achat Réussi',
}

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-16">
      <div className="mx-auto max-w-md px-6 text-center">
        <CheckCircle className="mx-auto mb-6 h-16 w-16 text-green-400" />
        <h1 className="mb-4 text-3xl font-extrabold">Merci pour votre achat !</h1>
        <p className="mb-8 text-[#94A3B8]">
          Votre copie de Robotique Moderne est prête. Vous recevrez également un
          email de confirmation avec le lien de téléchargement.
        </p>
        <a
          href="#"
          className="mb-4 inline-flex items-center gap-2 rounded-lg bg-[#0066CC] px-8 py-4 font-bold text-white transition-all hover:bg-[#00AAFF]"
        >
          <Download size={18} />
          Télécharger le PDF
        </a>
        <div className="mt-6">
          <Link
            href="/"
            className="text-sm text-[#00AAFF] transition-colors hover:text-white"
          >
            ← Retour à l&#39;accueil
          </Link>
        </div>
      </div>
    </div>
  )
}
