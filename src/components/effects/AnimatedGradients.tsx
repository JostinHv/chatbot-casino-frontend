'use client'

import { motion } from 'framer-motion'

export function AnimatedGradients() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Gradiente animado principal */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-casino-dark via-casino-navy to-casino-slate"
        animate={{
          background: [
            'linear-gradient(135deg, #111827 0%, #1E293B 50%, #334155 100%)',
            'linear-gradient(135deg, #1E293B 0%, #111827 50%, #334155 100%)',
            'linear-gradient(135deg, #334155 0%, #1E293B 50%, #111827 100%)',
            'linear-gradient(135deg, #111827 0%, #1E293B 50%, #334155 100%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Overlay de gradiente dorado */}
      <motion.div
        className="from-casino-amber/3 to-casino-amber/3 absolute inset-0 bg-gradient-to-r via-transparent"
        animate={{
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Efecto de brillo superior */}
      <motion.div
        className="absolute left-0 right-0 top-0 h-32 bg-gradient-to-b from-casino-amber/5 to-transparent"
        animate={{
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
