/**
 * Numbered section marker: 01 ——— LABEL
 * The number encodes reading order through the page's scenes, so it is only
 * passed where the sections genuinely form a sequence.
 */
export default function Eyebrow({
  num,
  label,
  className = '',
}: {
  num?: string
  label: string
  className?: string
}) {
  return (
    <div className={`eyebrow ${className}`}>
      {num && <span className="num">{num}</span>}
      <span className="rule" />
      <span className="lbl">{label}</span>
    </div>
  )
}
