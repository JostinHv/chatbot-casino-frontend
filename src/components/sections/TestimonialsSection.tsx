'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'María García',
    text: '¡El mejor casino en línea que he probado! Las tragamonedas son increíbles.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Pedro López',
    text: 'La ruleta en vivo es emocionante, ¡me encanta!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juan Pérez',
    text: 'La experiencia en el blackjack es única, ¡nunca me canso de jugar!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Carlos Martínez',
    text: 'Las mesas de póker son fantásticas, la competencia es intensa y divertida.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ana Ruiz',
    text: 'Me encanta el ambiente del casino, ¡es como estar en Las Vegas desde casa!',
    rating: 5,
  },
  {
    id: 6,
    name: 'Luis Fernández',
    text: 'La atención al cliente es excepcional, siempre me ayudan con cualquier duda.',
    rating: 5,
  },
]

function initialsFromName(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 3)
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4500)
    return () => clearInterval(id)
  }, [])

  const prevIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length
  const nextIndex = (activeIndex + 1) % testimonials.length

  const positions = [
    { key: prevIndex, x: -120, rotate: -2, scale: 0.96, opacity: 0.7, z: 10 },
    { key: activeIndex, x: 0, rotate: 0, scale: 1, opacity: 1, z: 30 },
    { key: nextIndex, x: 120, rotate: 2, scale: 0.96, opacity: 0.7, z: 10 },
  ]

  const smooth = { duration: 0.6, ease: [0.22, 1, 0.36, 1] }

  return (
    <section className="overflow-x-hidden bg-gradient-to-br from-casino-dark via-casino-navy to-casino-slate py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="gradient-text mb-4 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            Lo que dicen nuestros jugadores
          </h2>
          <p className="mx-auto max-w-3xl text-base text-gray-300 md:text-xl">
            Descubre por qué miles de jugadores confían en Casino Royale para su
            experiencia de juego online.
          </p>
        </motion.div>

        {/* Carrusel con tarjetas apiladas */}
        <div className="relative mx-auto h-[420px] w-full max-w-5xl overflow-hidden sm:h-[360px] md:h-[340px]">
          <AnimatePresence initial={false}>
            {positions.map((p) => {
              const t = testimonials[p.key]
              const isActive = p.key === activeIndex
              return (
                <motion.div
                  key={t.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.94, x: p.x * 0.5 }}
                  animate={{
                    opacity: p.opacity,
                    scale: p.scale,
                    x: p.x,
                    rotate: p.rotate,
                    zIndex: p.z,
                  }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={smooth}
                >
                  <article
                    className={`relative w-full rounded-2xl px-5 py-5 shadow-2xl sm:w-5/6 md:w-3/4 md:px-8 md:py-8 lg:w-2/3 ${
                      isActive
                        ? 'border border-casino-amber/60 bg-[rgba(12,14,19,0.92)] ring-2 ring-casino-amber/20'
                        : 'bg-white/12 border border-white/15'
                    } backdrop-blur-md`}
                    aria-live={isActive ? 'polite' : undefined}
                  >
                    {/* Halo radial para la tarjeta activa */}
                    {isActive && (
                      <div className="pointer-events-none absolute -inset-1 rounded-[20px] bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08),transparent_60%)]" />
                    )}

                    <div className="relative z-10">
                      <div className="mb-3 flex items-center md:mb-4">
                        <Quote className="mr-3 h-6 w-6 text-casino-amber md:h-8 md:w-8" />
                        <div className="flex">
                          {Array.from({ length: t.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-3.5 w-3.5 fill-current text-casino-amber md:h-4 md:w-4"
                            />
                          ))}
                        </div>
                      </div>

                      <p
                        className={`mb-5 text-sm leading-relaxed md:mb-6 md:text-base ${isActive ? 'text-gray-100' : 'text-gray-300'}`}
                      >
                        &ldquo;{t.text}&rdquo;
                      </p>

                      <div className="flex items-center">
                        <motion.div
                          className="mr-3 flex h-9 w-9 items-center justify-center rounded-full border border-casino-amber/30 bg-casino-navy shadow-lg md:h-10 md:w-10"
                          animate={{ y: isActive ? [0, -3, 0] : 0 }}
                          transition={{
                            duration: 2.2,
                            repeat: isActive ? Infinity : 0,
                          }}
                          aria-hidden
                        >
                          <span className="text-xs font-bold text-white md:text-sm">
                            {initialsFromName(t.name)}
                          </span>
                        </motion.div>
                        <span className="text-sm font-semibold text-white md:text-base">
                          {t.name}
                        </span>
                      </div>
                    </div>
                  </article>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
