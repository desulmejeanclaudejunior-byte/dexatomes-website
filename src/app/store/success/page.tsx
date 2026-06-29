import Link from 'next/link'
import { CheckCircle2, Download } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center bg-[#f0f4ff]">
      <div className="text-center px-6">
        <CheckCircle2 size={48} className="text-[#1a3ab5] mx-auto mb-4" />
        <h1 className="text-slate-900 text-2xl font-bold mb-2">Purchase complete!</h1>
        <p className="text-slate-500 text-sm mb-6 max-w-sm mx-auto">Your book is ready. Check your email for the download link.</p>
        <a href="#" className="btn-brand inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm"><Download size={14} /> Download PDF</a>
        <div className="mt-6"><Link href="/" className="text-slate-500 hover:text-[#1a3ab5] text-sm">&larr; Home</Link></div>
      </div>
    </div>
  )
}
