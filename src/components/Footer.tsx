export default function Footer() {
  return (
    <footer className="bg-[#060d18] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-blue-600 rounded-lg px-2 py-1 font-black text-white text-xs tracking-wide">
              DX
            </div>
            <span className="font-bold text-white text-sm">DEX ATOMES LLC</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Technology · Education · Innovation
            <br />
            Orlando, Florida, USA · © 2026 Dex Atomes LLC
          </p>
        </div>
        <div className="grid grid-cols-2 md:flex gap-3 flex-wrap">
          {[
            { label: '@DexAtomes', href: 'https://instagram.com/DexAtomes' },
            { label: 'dexuslab.com', href: 'https://dexuslab.com' },
            { label: 'GitHub', href: 'https://github.com/desulmejeanclaudejunior-byte' },
            { label: 'support@dexuslab.com', href: 'mailto:support@dexuslab.com' },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0d1f3c] hover:border-blue-800 rounded-lg px-3 py-2 text-xs text-slate-500 hover:text-slate-300 font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
