'use client'

import { motion } from 'framer-motion'
import { Star, Crown, Award } from 'lucide-react'
import { BackgroundEffects } from '@/components/effects/BackgroundEffects'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ParallaxElement } from '@/components/ui/ParallaxElement'
import { SlotMachine } from '@/components/games/SlotMachine'

export function HeroSection() {
  return (
    <section className="casino-gradient relative flex min-h-[90vh] items-center overflow-hidden pt-16 lg:min-h-screen lg:pt-0">
      {/* Elementos de fondo animados */}
      <BackgroundEffects />

      <div className="container relative z-10 mx-auto grid grid-cols-1 items-center gap-8 px-4 py-8 lg:grid-cols-2 lg:gap-12">
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
              className="mb-3 flex items-center space-x-2 lg:mb-4"
            >
              <Star className="h-4 w-4 text-casino-amber lg:h-5 lg:w-5" />
              <span className="text-xs font-medium text-gray-200 lg:text-sm">
                Casino Premium Experience
              </span>
            </motion.div>

            <h1 className="gradient-text mb-4 text-4xl font-bold md:text-5xl lg:mb-6 lg:text-7xl">
              Casino Royale
            </h1>

            <p className="mb-6 text-base leading-relaxed text-gray-300 md:text-lg lg:mb-8 lg:text-xl">
              Descubre todo sobre el mundo del casino con nuestro asistente
              virtual inteligente. Información completa sobre regulaciones,
              historia y todo lo que necesitas saber.
            </p>

            {/* Contadores animados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-6 grid grid-cols-3 gap-4 lg:mb-8 lg:gap-6"
            >
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-casino-amber md:text-3xl">
                  <AnimatedCounter value={15} suffix="+" />
                </div>
                <div className="text-[10px] text-gray-200 md:text-sm">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-casino-amber md:text-3xl">
                  <AnimatedCounter value={50000} suffix="+" />
                </div>
                <div className="text-[10px] text-gray-200 md:text-sm">
                  Usuarios Satisfechos
                </div>
              </div>
              <div className="text-center">
                <div className="mb-1 text-2xl font-bold text-casino-amber md:text-3xl">
                  <AnimatedCounter value={99} suffix="%" />
                </div>
                <div className="text-[10px] text-gray-200 md:text-sm">
                  Tasa de Satisfacción
                </div>
              </div>
            </motion.div>

            {/* Estadísticas mejoradas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex items-center space-x-4 text-xs lg:space-x-8 lg:text-sm"
            >
              <div className="flex items-center space-x-2">
                <Crown className="h-3 w-3 text-casino-amber lg:h-4 lg:w-4" />
                <span className="text-gray-200">Información Completa</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-3 w-3 text-casino-amber lg:h-4 lg:w-4" />
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
          <SlotMachine className="w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </motion.div>
      </div>
    </section>
  )
}
