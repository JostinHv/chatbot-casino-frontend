'use client'

import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

export function AnimatedCounter({ 
  value, 
  suffix = '', 
  duration = 2,
  className = '' 
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  useEffect(() => {
    const controls = animate(count, value, { duration })
    
    const unsubscribe = rounded.on('change', (latest) => {
      setDisplayValue(latest)
    })
    
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [value, count, duration, rounded])

  return (
    <motion.span className={className}>
      {displayValue}
      {suffix}
    </motion.span>
  )
} 