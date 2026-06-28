export default function Logo({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const dims = { sm: 'w-8 h-8 text-[11px]', md: 'w-10 h-10 text-sm', lg: 'w-14 h-14 text-lg' }
  return (
    <div className="flex items-center gap-2.5">
      <div className={`relative ${dims[size]} bg-gradient-to-br from-blue-600 to-[#00E5FF] rounded-xl flex items-center justify-center shadow-lg shadow-[#00E5FF]/15`}>
        <span className="font-bold text-white tracking-wider">DX</span>
      </div>
      <div className="leading-none">
        <span className="font-bold text-white tracking-tight text-sm block">
          DEX <span className="text-[#00E5FF]">ATOMES</span>
        </span>
      </div>
    </div>
  )
}
