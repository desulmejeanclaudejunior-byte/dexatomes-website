import Link from 'next/link'
import { CheckCircle2, Download } from 'lucide-react'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  return (
    <>
      <div className="circuit-bg pt-14 min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={28} className="text-green-400" />
          </div>
          <h1 className="text-white text-2xl font-bold mb-2">Purchase complete!</h1>
          <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">Your copy of Robotique Moderne is ready. Check your email for the download link.</p>
          <a href="#" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
            <Download size={14} /> Download PDF
          </a>
          <div className="mt-6">
            <Link href="/" className="text-slate-500 hover:text-blue-400 text-sm transition-colors">&larr; Home</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
