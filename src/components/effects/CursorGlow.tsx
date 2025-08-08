'use client'

import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const move = (e: MouseEvent) => {
      node.style.transform = `translate(${e.clientX - 150}px, ${e.clientY - 150}px)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-[5] h-[300px] w-[300px] rounded-full bg-casino-amber/5 blur-3xl"
      style={{ transition: 'transform 120ms linear' }}
    />
  )
}
