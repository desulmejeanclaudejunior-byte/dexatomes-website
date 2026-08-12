import Image from 'next/image'

/**
 * Atmospheric section background. The photograph sits far back behind a
 * vignette so type stays the subject — never a decorative image competing
 * with the content in front of it.
 */
export default function Backdrop({
  src,
  opacity = 0.3,
  position = '50% 50%',
  priority = false,
}: {
  src: string
  opacity?: number
  position?: string
  priority?: boolean
}) {
  return (
    /* z-0, not a negative index: a negative z-index would paint the plate
       behind the body background and disappear entirely. */
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <Image
        src={src}
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ opacity, objectPosition: position }}
      />
      {/* Vignette — heaviest at the left where headings begin */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/60 to-[var(--bg)]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-[var(--bg)]/70" />
    </div>
  )
}
