'use client'

import { motion } from 'framer-motion'
import { Star, Crown, Award } from 'lucide-react'
import { BackgroundEffects } from '@/components/effects/BackgroundEffects'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ParallaxElement } from '@/components/ui/ParallaxElement'
import { SlotMachine } from '@/components/games/SlotMachine'

export function HeroSection() {
  return (
    <section className="min-h-screen casino-gradient flex items-center relative overflow-hidden">
      {/* Elementos de fondo animados */}
      <BackgroundEffects />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Contenido principal - Lado izquierdo */}
        <ParallaxElement speed={0.3}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-2 mb-4"
            >
              <Star className="w-5 h-5 text-casino-amber" />
              <span className="text-sm font-medium text-gray-200">Casino Premium Experience</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 gradient-text">
              Casino Royale
            </h1>
            
            <p className="text-xl mb-8 text-gray-300 leading-relaxed">
              Descubre todo sobre el mundo del casino con nuestro asistente virtual inteligente. 
              Información completa sobre regulaciones, historia y todo lo que necesitas saber.
            </p>

            {/* Contadores animados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-casino-amber mb-1">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <div className="text-sm text-gray-200">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-casino-amber mb-1">
                  <AnimatedCounter value={50000} suffix="+" />
                </div>
                <div className="text-sm text-gray-200">Usuarios Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-casino-amber mb-1">
                  <AnimatedCounter value={99} suffix="%" />
                </div>
                <div className="text-sm text-gray-200">Tasa de Satisfacción</div>
              </div>
            </motion.div>

            {/* Estadísticas mejoradas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-8 text-sm"
            >
              <div className="flex items-center space-x-2">
                <Crown className="w-4 h-4 text-casino-amber" />
                <span className="text-gray-200">Información Completa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-casino-amber" />
                <span className="text-gray-200">Asistente Virtual</span>
              </div>
            </motion.div>
          </motion.div>
        </ParallaxElement>

        {/* Juego de Casino - Lado derecho */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <SlotMachine className="w-full max-w-md" />
        </motion.div>
      </div>
    </section>
  )
} 