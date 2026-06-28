import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Purchase Complete',
}

export default function SuccessPage() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-[#f0f4fa] pt-16">
        <div className="mx-auto max-w-md px-6 text-center">
          <div className="text-5xl mb-6">✅</div>
          <h1 className="mb-4 text-3xl font-extrabold text-[#0A1628]">
            Thank you for your purchase!
          </h1>
          <p className="mb-8 text-slate-500">
            Your copy of Robotique Moderne is ready. You&#39;ll also receive a
            confirmation email with the download link.
          </p>
          <a
            href="#"
            className="mb-4 inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-colors"
          >
            Download PDF
          </a>
          <div className="mt-6">
            <Link href="/" className="text-sm text-blue-600 hover:text-blue-500 transition-colors">
              ← Back to home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
