export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: 'w-8 h-8 text-[11px]', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-lg' }
  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative ${dims[size]} bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/20`}>
        <span className="font-bold text-white tracking-wider">DX</span>
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
      </div>
      <div className="leading-none">
        <span className="font-bold text-white tracking-tight text-sm block">
          DEX <span className="text-blue-400">ATOMES</span>
        </span>
      </div>
    </div>
  )
}
