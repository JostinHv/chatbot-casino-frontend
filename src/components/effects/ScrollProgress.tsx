'use client'

import { motion, useScroll } from 'framer-motion'

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-0.5">
      <motion.div
        className="h-full bg-gradient-to-r from-casino-amber to-casino-orange"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />
    </div>
  )
}
