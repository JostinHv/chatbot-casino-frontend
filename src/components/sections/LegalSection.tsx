'use client'

import { motion } from 'framer-motion'
import { Shield, FileText, CheckCircle, AlertTriangle, BookOpen, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const laws = [
  {
    id: 1,
    title: 'LEY 29907',
    description: 'Ley para la prevención y el tratamiento de la ludopatía en las salas de juego de casino y máquinas tragamonedas.',
    icon: Shield,
  },
  {
    id: 2,
    title: 'LEY 29829',
    description: 'Modifica la Ley N° 27796 sobre la explotación de juegos de casino y máquinas tragamonedas.',
    icon: FileText,
  },
  {
    id: 3,
    title: 'LEY 29149',
    description: 'Reprime la tenencia, explotación, fabricación y comercialización de máquinas tragamonedas.',
    icon: AlertTriangle,
  },
  {
    id: 4,
    title: 'LEY 28945',
    description: 'Reordenamiento y formalización de la actividad de explotación de juegos de casino y máquinas tragamonedas.',
    icon: CheckCircle,
  },
  {
    id: 5,
    title: 'LEY 27796',
    description: 'Modifica artículos de la Ley N° 27153 que regula la explotación de juegos de casino y máquinas tragamonedas.',
    icon: BookOpen,
  },
  {
    id: 6,
    title: 'LEY 27153',
    description: 'Regula la explotación de los juegos de casino y máquinas tragamonedas.',
    icon: Users,
  },
]

const requirements = [
  {
    id: 1,
    title: 'Licencia Obligatoria',
    description: 'Contar con una licencia otorgada por la autoridad competente para operar en el país.',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Juego Justo',
    description: 'Garantizar que todos los juegos sean justos, transparentes y auditables para los jugadores.',
    icon: CheckCircle,
  },
  {
    id: 3,
    title: 'Prevención de Fraude',
    description: 'Implementar medidas de control para prevenir el lavado de dinero y otras actividades fraudulentas.',
    icon: AlertTriangle,
  },
]

const resources = [
  {
    id: 1,
    name: 'Ministerio de Comercio Exterior y Turismo (MINCETUR)',
    url: '#',
  },
  {
    id: 2,
    name: 'Asociación Peruana de Entretenimiento y Juegos de Azar (APEJA)',
    url: '#',
  },
  {
    id: 3,
    name: 'Dirección General de Casinos y Máquinas Tragamonedas (DGCMT)',
    url: '#',
  },
]

export function LegalSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Normativas Legales Relacionadas
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Las normativas legales relacionadas con los casinos están diseñadas para garantizar 
            un entorno de juego seguro y justo para todos los jugadores.
          </p>
        </motion.div>

        {/* Leyes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Leyes y Regulaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {laws.map((law, index) => (
              <motion.div
                key={law.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                                                <div className="w-12 h-12 bg-casino-navy rounded-full flex items-center justify-center mb-4 shadow-lg">
                 <law.icon className="w-6 h-6 text-casino-amber" />
               </div>
                <h4 className="text-lg font-bold mb-3 text-gray-900">
                  {law.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {law.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4"
                >
                  Leer más
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Información General */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
                     <div className="bg-gradient-to-r from-casino-purple to-casino-navy rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Información General sobre Normativas Legales
            </h3>
            <p className="text-lg leading-relaxed">
              Las normativas legales relacionadas con los casinos están diseñadas para garantizar 
              un entorno de juego seguro y justo para todos los jugadores. Estas leyes abarcan 
              aspectos como la prevención de la ludopatía, la explotación legal de juegos, y la 
              regulación de las máquinas tragamonedas.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Es fundamental que tanto los operadores como los jugadores estén informados y 
              respeten estas leyes para asegurar que las actividades de los casinos se realicen 
              de manera ética y conforme a la ley.
            </p>
          </div>
        </motion.div>

        {/* Requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Requisitos Legales para Operadores de Casino
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                                                <div className="w-16 h-16 bg-casino-navy rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                 <req.icon className="w-8 h-8 text-casino-amber" />
               </div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {req.title}
                </h4>
                <p className="text-gray-600">
                  {req.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Licencias */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 gradient-text">
              Licencias y Autoridades Reguladoras
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Para operar legalmente, los casinos deben obtener una licencia emitida por la 
              autoridad reguladora del país o región correspondiente. Esta licencia garantiza 
              que las actividades de los casinos sean transparentes y justas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Las autoridades reguladoras realizan auditorías y monitorean las operaciones de 
              los casinos para asegurar que cumplan con las normativas legales y operen de 
              acuerdo con los estándares establecidos.
            </p>
          </div>
        </motion.div>

        {/* Recursos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Recursos Adicionales
          </h3>
          <p className="text-xl text-gray-600 text-center mb-8">
            Aquí te proporcionamos enlaces útiles para más información sobre las leyes y 
            regulaciones de los casinos:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <h4 className="text-lg font-bold mb-3 text-gray-900">
                  {resource.name}
                </h4>
                <Button
                  variant="outline"
                  className="w-full"
                >
                  Visitar Sitio
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 