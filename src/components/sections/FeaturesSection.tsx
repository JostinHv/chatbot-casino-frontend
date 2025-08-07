'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, Gift, Users, Star, Trophy } from 'lucide-react'

const features = [
  {
    id: 1,
    title: 'Seguridad Garantizada',
    description: 'Tu información y fondos están protegidos con la más alta tecnología de encriptación.',
    icon: Shield,
    color: 'text-casino-green',
  },
  {
    id: 2,
    title: 'Pagos Rápidos',
    description: 'Recibe tus ganancias en tiempo real con métodos de pago seguros y confiables.',
    icon: Zap,
    color: 'text-casino-gold',
  },
  {
    id: 3,
    title: 'Bonos Exclusivos',
    description: 'Aprovecha nuestras promociones especiales y bonos de bienvenida.',
    icon: Gift,
    color: 'text-casino-purple',
  },
  {
    id: 4,
    title: 'Soporte 24/7',
    description: 'Nuestro equipo de soporte está disponible las 24 horas para ayudarte.',
    icon: Users,
    color: 'text-casino-red',
  },
  {
    id: 5,
    title: 'Juegos Premium',
    description: 'Accede a la mejor colección de juegos de casino del mercado.',
    icon: Star,
    color: 'text-casino-gold',
  },
  {
    id: 6,
    title: 'Torneos Diarios',
    description: 'Participa en emocionantes torneos con premios increíbles.',
    icon: Trophy,
    color: 'text-casino-purple',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre las ventajas que hacen de Casino Royale la mejor opción para 
            tu experiencia de juego online.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r from-casino-gold to-casino-purple flex items-center justify-center mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-casino-purple to-casino-gold rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Únete a miles de jugadores que ya confían en Casino Royale
            </p>
            <button className="bg-white text-casino-purple px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              Crear Cuenta Gratis
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 