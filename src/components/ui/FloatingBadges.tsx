'use client'

import { motion } from 'framer-motion'
import { Star, Trophy, Crown, Zap } from 'lucide-react'

const badges = [
  { icon: Star, text: 'Premium', color: 'text-casino-gold' },
  { icon: Trophy, text: 'Ganador', color: 'text-casino-purple' },
  { icon: Crown, text: 'VIP', color: 'text-casino-gold' },
  { icon: Zap, text: 'Rápido', color: 'text-casino-purple' },
]

export function FloatingBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${20 + (index * 20)}%`,
            top: `${30 + (index * 15)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center space-x-2">
            <badge.icon className={`w-4 h-4 ${badge.color}`} />
            <span className="text-white text-sm font-medium">{badge.text}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
} 