import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 rounded-lg w-8 h-8 flex items-center justify-center">
              <span className="text-white font-bold text-xs">DX</span>
            </div>
            <span className="text-white font-semibold text-sm">Dex Atomes LLC</span>
          </div>
          <div className="flex flex-wrap gap-6">
            {[
              { label: 'Services', href: '#services' },
              { label: 'Products', href: '#products' },
              { label: 'Store', href: '/store' },
              { label: 'Contact', href: '#contact' },
            ].map(l => (
              <Link key={l.label} href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; 2026 Dex Atomes LLC. Orlando, Florida. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { label: 'dexuslab.com', href: 'https://dexuslab.com' },
              { label: '@DexAtomes', href: 'https://instagram.com/DexAtomes' },
              { label: 'GitHub', href: 'https://github.com/desulmejeanclaudejunior-byte' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
