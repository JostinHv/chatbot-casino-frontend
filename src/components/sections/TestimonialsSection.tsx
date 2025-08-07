'use client'

import { motion } from 'framer-motion'
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function TestimonialsSection() {
  return (
         <section className="py-20 bg-gradient-to-br from-casino-dark via-casino-navy to-casino-slate">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Lo que dicen nuestros jugadores
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre por qué miles de jugadores confían en Casino Royale para su 
            experiencia de juego online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white/15 backdrop-blur-sm border border-white/25 rounded-2xl p-6 hover:bg-white/25 transition-all duration-300"
            >
                             <div className="flex items-center mb-4">
                 <Quote className="w-8 h-8 text-casino-amber mr-3" />
                 <div className="flex">
                   {[...Array(testimonial.rating)].map((_, i) => (
                     <Star key={i} className="w-4 h-4 text-casino-amber fill-current" />
                   ))}
                 </div>
               </div>
              
              <p className="text-gray-200 mb-4 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              
              <div className="flex items-center">
                               <div className="w-10 h-10 bg-casino-navy rounded-full flex items-center justify-center mr-3 shadow-lg">
                 <span className="text-white font-bold text-sm">
                   {testimonial.name.split(' ').map(n => n[0]).join('')}
                 </span>
               </div>
                <span className="text-white font-semibold">
                  {testimonial.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 