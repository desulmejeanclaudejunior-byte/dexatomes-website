import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/store', label: 'Boutique' },
  { href: '/dexuslab', label: 'DexusLab' },
  { href: '/about', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
]

const socials = [
  { href: 'https://facebook.com/DexAtomes', label: 'FB' },
  { href: 'https://instagram.com/DexAtomes', label: 'IG' },
  { href: 'https://youtube.com/@DexAtomes', label: 'YT' },
  { href: 'https://linkedin.com/company/DexAtomes', label: 'IN' },
  { href: 'https://github.com/desulmejeanclaudejunior-byte', label: 'GH' },
  { href: 'https://discord.gg/dexuslab', label: 'DC' },
]

export default function Footer() {
  return (
    <footer className="border-t border-[#0066CC]/30 bg-[#060E1C]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#0066CC] text-sm font-extrabold text-white">
                DX
              </div>
              <div>
                <span className="font-extrabold text-white">DEX </span>
                <span className="font-semibold text-[#00AAFF]">ATOMES</span>
                <span className="ml-1 text-xs text-[#94A3B8]">LLC</span>
              </div>
            </div>
            <p className="text-sm text-[#94A3B8]">
              Technology. Education. Innovation.
            </p>
            <p className="mt-1 text-sm text-[#94A3B8]">
              Orlando, Florida — USA
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-[#94A3B8] transition-colors hover:text-[#00AAFF]"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Suivez-nous
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-[#1A3155] text-xs font-bold text-[#94A3B8] transition-all hover:border-[#00AAFF] hover:text-[#00AAFF]"
                  aria-label={s.label}
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-[#94A3B8]">
              support@dexuslab.com
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1A3155] pt-6 text-center">
          <p className="text-xs text-[#94A3B8]">
            © {new Date().getFullYear()} Dex Atomes LLC. All rights reserved.
            Built with purpose. Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  )
}
