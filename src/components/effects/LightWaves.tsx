'use client'

import { motion } from 'framer-motion'

export function LightWaves() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Onda de luz principal */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 rounded-full bg-gradient-to-r from-casino-amber/10 to-casino-slate/10 blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Onda de luz secundaria */}
      <motion.div
        className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-casino-slate/10 to-casino-navy/10 blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Onda de luz terciaria */}
      <motion.div
        className="absolute bottom-1/4 left-1/3 h-80 w-80 rounded-full bg-gradient-to-r from-casino-amber/5 to-casino-slate/5 blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />
    </div>
  )
}
