'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Target, Shield, Heart, Rocket, Flag, Trophy } from 'lucide-react'

const values = [
  {
    id: 1,
    title: 'Compromiso',
    description:
      'Nos dedicamos a brindar un servicio de alta calidad con transparencia.',
    icon: Target,
  },
  {
    id: 2,
    title: 'Seguridad',
    description: 'Protegemos tus datos con tecnología avanzada.',
    icon: Shield,
  },
  {
    id: 3,
    title: 'Integridad',
    description:
      'Actuamos con honestidad y responsabilidad en cada interacción.',
    icon: Heart,
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

const timeline = [
  {
    id: 1,
    year: '2009',
    title: 'Fundación',
    text: 'Nacemos con la misión de ofrecer entretenimiento seguro y responsable.',
    icon: Flag,
  },
  {
    id: 2,
    year: '2015',
    title: 'Expansión',
    text: 'Ampliamos nuestra presencia y consolidamos procesos y estándares.',
    icon: Trophy,
  },
  {
    id: 3,
    year: '2020',
    title: 'Transformación Digital',
    text: 'Modernizamos la plataforma con tecnologías modernas y escalables.',
    icon: Rocket,
  },
  {
    id: 4,
    year: '2024',
    title: 'IA Conversacional',
    text: 'Integramos un asistente virtual para guiar y resolver dudas al instante.',
    icon: Shield,
  },
]

export function AboutSection() {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.9', 'end 0.2'],
  })
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Historia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="gradient-text mb-6 text-4xl font-bold lg:text-5xl">
            Sobre Nosotros
          </h2>
          <p className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600">
            Desde nuestros inicios, <strong>Casino Royale</strong> se ha
            destacado por ofrecer experiencias de juego únicas y emocionantes.
            Con una sólida reputación y años de experiencia, hemos construido un
            espacio seguro y divertido para nuestros jugadores.
          </p>
        </motion.div>

        {/* Misión y Visión primero */}
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-casino-navy p-8 text-white shadow-xl"
          >
            <h3 className="mb-4 text-2xl font-bold text-casino-amber">
              Nuestra Misión
            </h3>
            <p className="text-lg leading-relaxed text-gray-200">
              Proporcionar entretenimiento de calidad, garantizando la seguridad
              y confianza de nuestros usuarios en cada jugada.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-casino-slate p-8 text-white shadow-xl"
          >
            <h3 className="mb-4 text-2xl font-bold text-casino-amber">
              Nuestra Visión
            </h3>
            <p className="text-lg leading-relaxed text-gray-200">
              Convertirnos en el casino en línea líder a nivel mundial,
              ofreciendo innovación constante y experiencias inolvidables.
            </p>
          </motion.div>
        </div>

        {/* Timeline interactivo después */}
        <div className="relative mb-20">
          <motion.div
            className="pointer-events-none absolute -top-6 right-6 text-casino-amber/40"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Rocket className="h-6 w-6" />
          </motion.div>
          <motion.div
            className="pointer-events-none absolute -bottom-4 left-8 text-casino-orange/40"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Trophy className="h-6 w-6" />
          </motion.div>

          <div ref={timelineRef} className="relative mx-auto max-w-4xl">
            <div className="absolute bottom-0 left-4 top-0 w-px -translate-x-1/2 bg-gray-200 md:left-1/2" />
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: 'top' }}
              className="absolute bottom-0 left-4 top-0 w-1 -translate-x-1/2 rounded bg-gradient-to-b from-casino-amber to-casino-orange md:left-1/2"
            />

            <div className="space-y-10">
              {timeline.map((item, index) => {
                const Icon = item.icon
                const isLeft = index % 2 === 0
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 ${isLeft ? '' : 'md:direction-rtl'}`}
                  >
                    <div
                      className={`order-2 md:order-${isLeft ? '2' : '1'} text-center md:text-right`}
                    >
                      <div className="inline-flex items-center gap-2 text-gray-800">
                        <span className="text-sm font-semibold tracking-wide text-casino-amber">
                          {item.year}
                        </span>
                        <span className="text-xl font-bold">{item.title}</span>
                      </div>
                      <p className="mt-2 text-gray-600 md:ml-auto md:max-w-sm">
                        {item.text}
                      </p>
                    </div>
                    <div
                      className={`order-1 md:order-${isLeft ? '1' : '2'} flex md:justify-start`}
                    >
                      <div className="relative ml-10 md:ml-0">
                        <div className="absolute -left-8 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-casino-amber bg-white shadow md:-right-8 md:left-auto" />
                        <div className="max-w-md rounded-2xl border border-casino-amber/30 bg-casino-navy px-6 py-5 text-white shadow-lg">
                          <div className="mb-2 flex items-center gap-3">
                            <Icon className="h-5 w-5 text-casino-amber" />
                            <span className="text-sm text-gray-200">Hito</span>
                          </div>
                          <p className="leading-relaxed text-gray-100">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="gradient-text mb-12 text-center text-3xl font-bold">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-casino-navy shadow-lg">
                  <value.icon className="h-8 w-8 text-casino-amber" />
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-600">{value.description}</p>
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
          <h3 className="gradient-text mb-12 text-center text-3xl font-bold">
            Nuestro Equipo
          </h3>
          <p className="mx-auto mb-12 max-w-3xl text-center text-xl text-gray-600">
            Detrás de <strong>Casino Royale</strong> hay un equipo apasionado y
            profesional, comprometido con ofrecer la mejor experiencia de juego.
          </p>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-casino-navy shadow-lg">
                  <span className="text-xl font-bold text-white">
                    {member.avatar}
                  </span>
                </div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  {member.name}
                </h4>
                <p className="mb-2 font-semibold text-casino-amber">
                  {member.position}
                </p>
                <p className="text-gray-600">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
