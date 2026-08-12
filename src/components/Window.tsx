'use client'

import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

/**
 * An overlay "window" the visitor opens from a card.
 *
 * Purely presentational: it relocates content that would otherwise sit in a
 * long scroll. Any link or button placed inside keeps its original behaviour.
 *
 * Handles Escape, backdrop click, body scroll lock, and returns focus to the
 * control that opened it.
 */
export default function Window({
  open,
  onClose,
  label,
  children,
}: {
  open: boolean
  onClose: () => void
  label: string
  children: React.ReactNode
}) {
  const panelRef = useRef<HTMLDivElement>(null)
  const opener = useRef<HTMLElement | null>(null)

  /* Remember what had focus, lock scroll, restore both on close. */
  useEffect(() => {
    if (!open) return
    opener.current = document.activeElement as HTMLElement

    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const id = requestAnimationFrame(() => {
      panelRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus()
    })

    return () => {
      cancelAnimationFrame(id)
      document.body.style.overflow = prev
      opener.current?.focus?.()
    }
  }, [open])

  /* Escape to close; keep Tab inside the panel while it is open. */
  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab') return

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      )
      if (!focusables || focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <>
      <div
        className="win-backdrop"
        data-open={open}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={panelRef}
        className="win"
        data-open={open}
        style={{ pointerEvents: open ? 'auto' : 'none' }}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        aria-hidden={!open}
      >
        <button
          onClick={onClose}
          data-autofocus
          aria-label="Close"
          className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center border border-[var(--hair-2)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--blue)] transition-colors bg-[var(--surface)]"
        >
          <X size={16} />
        </button>
        {children}
      </div>
    </>
  )
}
