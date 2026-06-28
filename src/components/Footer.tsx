import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] py-8 px-5">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Logo size="sm" />
          <p className="text-slate-600 text-[11px]">© 2026 Dex Atomes LLC · Orlando, FL</p>
        </div>
        <div className="flex gap-4">
          {[
            { label: 'dexuslab.com', href: 'https://dexuslab.com' },
            { label: '@DexAtomes', href: 'https://instagram.com/DexAtomes' },
            { label: 'GitHub', href: 'https://github.com/desulmejeanclaudejunior-byte' },
            { label: 'support@dexuslab.com', href: 'mailto:support@dexuslab.com' },
          ].map(l => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-400 text-[11px] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
