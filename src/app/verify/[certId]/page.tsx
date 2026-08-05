import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

const FUNCTION_URL = 'https://us-central1-dexus-lab.cloudfunctions.net/verifyCertificate'

interface CertData {
  studentName: string
  courseName: string
  completionDate: string | null
  certificateId: string
}

async function getCertificate(certId: string): Promise<CertData | null> {
  try {
    const res = await fetch(`${FUNCTION_URL}?id=${encodeURIComponent(certId)}`, {
      cache: 'no-store',
    })
    if (!res.ok) return null
    return (await res.json()) as CertData
  } catch {
    return null
  }
}

function formatDate(iso: string | null): string {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ certId: string }>
}): Promise<Metadata> {
  const { certId } = await params
  const cert = await getCertificate(certId)
  if (!cert) {
    return { title: 'Certificate Not Found | DexusLab' }
  }
  return {
    title: `${cert.studentName} — ${cert.courseName} Certificate | DexusLab`,
    description: `Verify that ${cert.studentName} successfully completed the ${cert.courseName} course on DexusLab, issued on ${formatDate(cert.completionDate)}.`,
    openGraph: {
      title: `${cert.studentName} — ${cert.courseName} | DexusLab`,
      description: `Verified certificate of completion issued by DexAtomes LLC`,
      url: `https://www.dexatomes.com/verify/${cert.certificateId}`,
    },
  }
}

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ certId: string }>
}) {
  const { certId } = await params
  const cert = await getCertificate(certId)
  if (!cert) notFound()

  const date = formatDate(cert.completionDate)

  return (
    <div className="pt-16 min-h-screen" style={{ background: '#f1f5f9' }}>
      {/* Hero */}
      <section
        style={{ background: '#04091A' }}
        className="py-14 px-6 text-center"
      >
        <p className="text-blue-300 text-xs font-bold tracking-[0.2em] uppercase mb-4">
          Certificate Verification
        </p>
        <div
          className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
          style={{
            background: 'rgba(34,197,94,0.15)',
            border: '1px solid rgba(34,197,94,0.35)',
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22C55E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span style={{ color: '#22C55E' }} className="text-sm font-semibold">
            Verified — Authentic Certificate
          </span>
        </div>
        <h1 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
          DEXUS<span style={{ color: '#2563EB' }}>Lab</span>
        </h1>
        <p className="text-slate-400 text-sm mt-2">Issued by DexAtomes LLC · Orlando, FL</p>
      </section>

      {/* Certificate card */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto">
          <div
            className="bg-white rounded-2xl overflow-hidden"
            style={{ boxShadow: '0 8px 40px rgba(0,0,0,0.10)', border: '1px solid #e2e8f0' }}
          >
            {/* Top color bar */}
            <div
              className="h-2"
              style={{ background: 'linear-gradient(90deg, #1d4ed8, #3b82f6)' }}
            />

            <div className="px-10 pt-10 pb-8 text-center">
              {/* Seal */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-8"
                style={{
                  background: '#2563EB',
                  boxShadow: '0 4px 20px rgba(37,99,235,0.35)',
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <p
                className="text-xs font-semibold tracking-[0.18em] uppercase mb-3"
                style={{ color: '#94a3b8' }}
              >
                This certifies that
              </p>

              <h2
                className="font-extrabold tracking-tight mb-3"
                style={{ fontSize: '2.25rem', color: '#0f172a', lineHeight: 1.1 }}
              >
                {cert.studentName}
              </h2>

              <p className="text-base mb-3" style={{ color: '#64748b' }}>
                has successfully completed
              </p>

              <h3
                className="font-bold mb-8"
                style={{ fontSize: '1.375rem', color: '#2563EB' }}
              >
                {cert.courseName}
              </h3>

              {/* Meta row */}
              <div
                className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6 text-sm"
                style={{ borderTop: '1px solid #f1f5f9' }}
              >
                <div className="text-center">
                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-1"
                    style={{ color: '#94a3b8' }}
                  >
                    Completion Date
                  </p>
                  <p className="font-semibold" style={{ color: '#334155' }}>
                    {date}
                  </p>
                </div>
                <div
                  className="hidden sm:block w-px h-8"
                  style={{ background: '#e2e8f0' }}
                />
                <div className="text-center">
                  <p
                    className="text-xs font-semibold tracking-wider uppercase mb-1"
                    style={{ color: '#94a3b8' }}
                  >
                    Certificate ID
                  </p>
                  <p
                    className="font-mono font-semibold text-xs"
                    style={{ color: '#334155' }}
                  >
                    {cert.certificateId}
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-10 py-5 flex items-center justify-between"
              style={{ background: '#f8fafc', borderTop: '1px solid #e2e8f0' }}
            >
              <div>
                <p className="text-xs" style={{ color: '#94a3b8' }}>
                  Issued by
                </p>
                <p className="text-sm font-bold" style={{ color: '#334155' }}>
                  DexusLab · DexAtomes LLC
                </p>
              </div>
              <div className="text-right">
                <p className="text-xs" style={{ color: '#94a3b8' }}>
                  Verify at
                </p>
                <p
                  className="text-xs font-mono"
                  style={{ color: '#2563EB' }}
                >
                  dexatomes.com/verify/{cert.certificateId}
                </p>
              </div>
            </div>
          </div>

          {/* Verification note */}
          <p
            className="text-center text-sm mt-8 leading-relaxed"
            style={{ color: '#94a3b8' }}
          >
            This certificate was automatically verified against DexusLab&apos;s secure records.
            <br />
            The student completed all lessons and passed all assessments for this course.
          </p>
        </div>
      </section>
    </div>
  )
}
