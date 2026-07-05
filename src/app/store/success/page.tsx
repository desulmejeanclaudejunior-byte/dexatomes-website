'use client'

import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Download, BookOpen, Mail } from 'lucide-react'

export default function SuccessPage() {
  return (
    <div className="mt-[72px] min-h-screen bg-[#f0f4ff]">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="bg-white rounded-2xl border border-slate-100 p-8 md:p-12 shadow-sm text-center">
          <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
          <h1 className="text-slate-900 text-2xl font-bold mb-2">Purchase Complete!</h1>
          <p className="text-slate-500 mb-8">Thank you for buying Robotique Moderne. Your eBook is ready to download.</p>

          <div className="flex justify-center mb-8">
            <div className="w-32 rounded-xl overflow-hidden shadow-lg border border-slate-200">
              <Image src="/representation.png" alt="Robotique Moderne" width={200} height={300} className="w-full h-auto" />
            </div>
          </div>

          <div className="space-y-3 mb-8">
            <a
              href="/Robotique_Moderne.epub"
              download="Robotique_Moderne.epub"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#1a3ab5] hover:bg-[#2348c7] text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-900/20">
              <Download size={16} /> Download eBook
            </a>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3 text-left">
              <Mail size={18} className="text-[#1a3ab5] shrink-0 mt-0.5" />
              <div>
                <p className="text-slate-700 text-sm font-semibold">Check your email</p>
                <p className="text-slate-500 text-xs mt-0.5">A confirmation with the download link has been sent to your email address.</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 text-sm">
            <Link href="/store" className="text-[#1a3ab5] font-semibold hover:text-[#2348c7] flex items-center gap-1">
              <BookOpen size={14} /> Browse more books
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/" className="text-slate-500 hover:text-slate-700">Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
