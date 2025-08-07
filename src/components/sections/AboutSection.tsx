'use client'

import { motion } from 'framer-motion'
import { Target, Shield, Heart } from 'lucide-react'

const values = [
  {
    id: 1,
    title: 'Compromiso',
    description: 'Nos dedicamos a brindar un servicio de alta calidad con transparencia.',
    icon: Target,
    color: 'text-casino-gold',
  },
  {
    id: 2,
    title: 'Seguridad',
    description: 'Protegemos tus datos con tecnología avanzada.',
    icon: Shield,
    color: 'text-casino-green',
  },
  {
    id: 3,
    title: 'Integridad',
    description: 'Actuamos con honestidad y responsabilidad en cada interacción.',
    icon: Heart,
    color: 'text-casino-purple',
  },
]

const team = [
  {
    id: 1,
    name: 'Fernando Solano',
    position: 'CEO',
    description: 'Estudiante de X ciclo de la UNS',
    avatar: 'FS',
  },
  {
    id: 2,
    name: 'Bryan Arteaga',
    position: 'CTO',
    description: 'Estudiante de X ciclo de la UNS',
    avatar: 'BA',
  },
]

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Historia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Sobre Nosotros
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Desde nuestros inicios, <strong>Casino Royale</strong> se ha destacado por ofrecer 
            experiencias de juego únicas y emocionantes. Con una sólida reputación y años de 
            experiencia, hemos construido un espacio seguro y divertido para nuestros jugadores.
          </p>
        </motion.div>

                 {/* Misión y Visión */}
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="bg-casino-navy rounded-2xl p-8 text-white shadow-xl"
           >
             <h3 className="text-2xl font-bold mb-4 text-casino-amber">Nuestra Misión</h3>
             <p className="text-lg leading-relaxed text-gray-200">
               Proporcionar entretenimiento de calidad, garantizando la seguridad y confianza 
               de nuestros usuarios en cada jugada.
             </p>
           </motion.div>

           <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="bg-casino-slate rounded-2xl p-8 text-white shadow-xl"
           >
             <h3 className="text-2xl font-bold mb-4 text-casino-amber">Nuestra Visión</h3>
             <p className="text-lg leading-relaxed text-gray-200">
               Convertirnos en el casino en línea líder a nivel mundial, ofreciendo innovación 
               constante y experiencias inolvidables.
             </p>
           </motion.div>
         </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
                             <motion.div
                 key={value.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="text-center"
               >
                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-casino-navy flex items-center justify-center shadow-lg">
                   <value.icon className="w-8 h-8 text-casino-amber" />
                 </div>
                 <h4 className="text-xl font-bold mb-2 text-gray-900">
                   {value.title}
                 </h4>
                 <p className="text-gray-600">
                   {value.description}
                 </p>
               </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Equipo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Nuestro Equipo
          </h3>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Detrás de <strong>Casino Royale</strong> hay un equipo apasionado y profesional, 
            comprometido con ofrecer la mejor experiencia de juego.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
                             <motion.div
                 key={member.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300"
               >
                 <div className="w-20 h-20 bg-casino-navy rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                   <span className="text-white font-bold text-xl">
                     {member.avatar}
                   </span>
                 </div>
                 <h4 className="text-xl font-bold mb-2 text-gray-900">
                   {member.name}
                 </h4>
                 <p className="text-casino-amber font-semibold mb-2">
                   {member.position}
                 </p>
                 <p className="text-gray-600">
                   {member.description}
                 </p>
               </motion.div>
            ))}
          </div>
        </motion.div>

        
      </div>
    </section>
  )
} 