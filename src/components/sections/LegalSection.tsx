'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Shield,
  FileText,
  CheckCircle,
  AlertTriangle,
  BookOpen,
  Users,
  ChevronDown,
  BadgeCheck,
  ClipboardList,
  Scale,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const laws = [
  {
    id: 1,
    title: 'LEY 29907',
    description:
      'Ley para la prevención y el tratamiento de la ludopatía en las salas de juego de casino y máquinas tragamonedas.',
    icon: Shield,
    href: 'https://consultasenlinea.mincetur.gob.pe/casinos/archivos/2012LEY29829.pdf',
  },
  {
    id: 2,
    title: 'LEY 29829',
    description:
      'Modifica la Ley N° 27796 sobre la explotación de juegos de casino y máquinas tragamonedas.',
    icon: FileText,
    href: 'https://consultasenlinea.mincetur.gob.pe/casinos/archivos/2012LEY29829.pdf',
  },
  {
    id: 3,
    title: 'LEY 29149',
    description:
      'Reprime la tenencia, explotación, fabricación y comercialización de máquinas tragamonedas.',
    icon: AlertTriangle,
    href: 'https://consultasenlinea.mincetur.gob.pe/casinos/archivos/2007LEY29149.pdf',
  },
  {
    id: 4,
    title: 'LEY 28945',
    description:
      'Reordenamiento y formalización de la actividad de explotación de juegos de casino y máquinas tragamonedas.',
    icon: CheckCircle,
    href: 'https://consultasenlinea.mincetur.gob.pe/casinos/archivos/2006LEY28945.pdf',
  },
  {
    id: 5,
    title: 'LEY 27796',
    description:
      'Modifica artículos de la Ley N° 27153 que regula la explotación de juegos de casino y máquinas tragamonedas.',
    icon: BookOpen,
    href: 'https://consultasenlinea.mincetur.gob.pe/casinos/archivos/2002LEY27796.pdf',
  },
  {
    id: 6,
    title: 'LEY 27153',
    description:
      'Regula la explotación de los juegos de casino y máquinas tragamonedas.',
    icon: Users,
    href: 'https://consultasenlinea.mincetur.gob.pe/casinos/archivos/1999LEY27153.pdf',
  },
]

const requirements = [
  {
    id: 1,
    title: 'Licencia Obligatoria',
    description:
      'Contar con una licencia otorgada por la autoridad competente para operar en el país.',
    icon: Shield,
  },
  {
    id: 2,
    title: 'Juego Justo',
    description:
      'Garantizar que todos los juegos sean justos, transparentes y auditables para los jugadores.',
    icon: CheckCircle,
  },
  {
    id: 3,
    title: 'Prevención de Fraude',
    description:
      'Implementar medidas de control para prevenir el lavado de dinero y otras actividades fraudulentas.',
    icon: AlertTriangle,
  },
]

const authorities = [
  {
    id: 1,
    name: 'MINCETUR — Dirección General de Juegos de Casino y Máquinas Tragamonedas',
    full: 'Ministerio de Comercio Exterior y Turismo (DGJCMT)',
    url: 'https://www.gob.pe/mincetur',
  },
  {
    id: 2,
    name: 'RENIEC — Registro Nacional de Identificación y Estado Civil',
    full: 'Identidad digital y verificación de mayores de edad (DNI)',
    url: 'https://www.gob.pe/reniec',
  },
  {
    id: 3,
    name: 'MINJUSDH — Autoridad Nacional de Protección de Datos Personales',
    full: 'Protección de Datos Personales (ANPD)',
    url: 'https://www.gob.pe/minjus',
  },
]

const resources = [
  {
    id: 1,
    name: 'MINCETUR — Salas de juego y normativa',
    url: 'https://www.gob.pe/mincetur',
    desc: 'Información oficial, trámites y normativa del sector (casinos y tragamonedas).',
  },
  {
    id: 2,
    name: 'GLI — Gaming Laboratories International',
    url: 'https://gaminglabs.com/',
    desc: 'Laboratorio de certificación y ensayos (RNG, cumplimiento y juego responsable).',
  },
  {
    id: 3,
    name: 'BMM Testlabs — Certificación',
    url: 'https://bmm.com/',
    desc: 'Certificación y pruebas para juego regulado (RNG, iGaming, cumplimiento).',
  },
]

const licenseSteps = [
  {
    id: 1,
    title: 'Solicitud',
    text: 'Presentación de documentación y requisitos formales.',
    icon: ClipboardList,
  },
  {
    id: 2,
    title: 'Evaluación',
    text: 'Revisión técnica, legal y financiera por parte de la autoridad.',
    icon: Scale,
  },
  {
    id: 3,
    title: 'Auditoría',
    text: 'Verificación de procesos y medidas de seguridad.',
    icon: Shield,
  },
  {
    id: 4,
    title: 'Aprobación',
    text: 'Emisión de la licencia y registro oficial.',
    icon: BadgeCheck,
  },
]

export function LegalSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.2'],
  })
  const progressX = useTransform(scrollYProgress, [0, 1], [0, 1])
  const [openId, setOpenId] = useState<number | null>(laws[0].id)

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section className="bg-white py-16 md:py-20">
      <div ref={sectionRef} className="container mx-auto px-4">
        {/* Barra de progreso de lectura */}
        <div className="sticky top-16 z-20 mb-8 h-1 overflow-hidden rounded-full bg-gray-200/70 md:mb-10 lg:top-20">
          <motion.div
            style={{ scaleX: progressX }}
            className="h-full w-full origin-left bg-gradient-to-r from-casino-amber to-casino-orange"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="gradient-text mb-4 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            Normativas Legales Relacionadas
          </h2>
          <p className="mx-auto max-w-4xl text-base text-gray-600 md:text-xl">
            Las normativas legales relacionadas con los casinos están diseñadas
            para garantizar un entorno de juego seguro y justo para todos los
            jugadores.
          </p>
        </motion.div>

        {/* Leyes: acordeón interactivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl md:mb-20"
        >
          <h3 className="gradient-text mb-6 text-center text-2xl font-bold md:mb-10 md:text-3xl">
            Leyes y Regulaciones
          </h3>
          <div className="divide-y divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {laws.map((law) => {
              const Icon = law.icon
              const isOpen = openId === law.id
              return (
                <div key={law.id}>
                  <button
                    onClick={() => toggle(law.id)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-gray-50 md:px-5 md:py-4"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: isOpen ? 1.05 : 1 }}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-casino-amber/30 bg-casino-navy shadow md:h-10 md:w-10"
                      >
                        <Icon
                          className={`h-4 w-4 md:h-5 md:w-5 ${isOpen ? 'text-casino-amber' : 'text-gray-200'}`}
                        />
                      </motion.div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 md:text-base">
                          {law.title}
                        </div>
                        <div className="line-clamp-1 text-xs text-gray-500 md:text-sm">
                          {law.description}
                        </div>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-gray-400"
                    >
                      <ChevronDown className="h-4 w-4 md:h-5 md:w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="bg-white px-4 pb-4 text-gray-600 md:px-5 md:pb-5"
                      >
                        <p className="text-sm leading-relaxed md:text-base">
                          {law.description}
                        </p>
                        <div className="mt-3 md:mt-4">
                          <a
                            href={law.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium text-casino-amber hover:underline"
                          >
                            Ver documento <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Información General (mejorada) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow">
            <div
              className="h-1.5 w-full bg-gradient-to-r from-casino-amber to-casino-orange"
              aria-hidden
            />
            <div className="grid grid-cols-1 gap-6 p-6 md:gap-8 md:p-8 lg:grid-cols-2">
              <div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl">
                  Información General sobre Normativas Legales
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                  Las normativas garantizan un entorno de juego seguro y justo.
                  Abarcan prevención de ludopatía, explotación legal de juegos,
                  transparencia operativa y control de máquinas tragamonedas.
                </p>
                <ul className="mt-5 space-y-3 md:mt-6">
                  {[
                    'Prevención y tratamiento de la ludopatía',
                    'Transparencia y auditorías periódicas',
                    'Requisitos de licenciamiento y control',
                    'Protección al jugador y juego responsable',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-4 w-4 text-casino-amber md:h-5 md:w-5" />
                      <span className="text-sm text-gray-700 md:text-base">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="rounded-xl border border-casino-amber/30 bg-white p-5 shadow-sm md:p-6">
                  <div className="mb-3 flex items-center gap-2">
                    <BadgeCheck className="h-5 w-5 text-casino-amber" />
                    <h4 className="font-semibold text-gray-900">
                      Buenas prácticas clave
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: 'KYC y AML',
                        text: 'Verificación de identidad y prevención de lavado de dinero.',
                      },
                      {
                        title: 'RNG Certificado',
                        text: 'Motores aleatorios auditados por terceros.',
                      },
                      {
                        title: 'Datos cifrados',
                        text: 'Comunicación y almacenamiento con cifrado fuerte.',
                      },
                      {
                        title: 'Atención al cliente',
                        text: 'Canales disponibles y tiempos de respuesta claros.',
                      },
                    ].map((c) => (
                      <div
                        key={c.title}
                        className="rounded-lg border border-gray-200 p-4"
                      >
                        <div className="mb-1 text-sm font-semibold text-gray-900">
                          {c.title}
                        </div>
                        <div className="text-sm text-gray-600">{c.text}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Licencias y Autoridades Reguladoras (mejorada) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2">
            {/* Paso a paso */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-6">
              <div className="mb-4 flex items-center gap-2">
                <ClipboardList className="h-5 w-5 text-casino-amber" />
                <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                  Proceso para obtener licencia
                </h3>
              </div>
              <ol className="space-y-4">
                {licenseSteps.map((s, idx) => {
                  const Icon = s.icon
                  return (
                    <li key={s.id} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-casino-amber/40 bg-casino-navy font-semibold text-white">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4 text-casino-amber" />
                          <span className="font-semibold text-gray-900">
                            {s.title}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{s.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>

            {/* Autoridades */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow md:p-6">
              <div className="mb-4 flex items-center gap-2">
                <Scale className="h-5 w-5 text-casino-amber" />
                <h3 className="text-lg font-bold text-gray-900 md:text-xl">
                  Autoridades Reguladoras
                </h3>
              </div>
              <div className="space-y-4">
                {authorities.map((r) => (
                  <div
                    key={r.id}
                    className="flex items-center justify-between rounded-xl border border-gray-200 p-4 transition-colors hover:bg-gray-50"
                  >
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {r.full}
                      </div>
                      <div className="text-xs text-gray-500">{r.name}</div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <a href={r.url} target="_blank" rel="noreferrer">
                        Visitar
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Requisitos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <h3 className="gradient-text mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl">
            Requisitos Legales para Operadores de Casino
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {requirements.map((req, index) => (
              <motion.div
                key={req.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-casino-navy shadow-lg md:mb-4 md:h-16 md:w-16">
                  <req.icon className="h-7 w-7 text-casino-amber md:h-8 md:w-8" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900 md:mb-3 md:text-xl">
                  {req.title}
                </h4>
                <p className="text-sm text-gray-600 md:text-base">
                  {req.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recursos (no redundantes) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="gradient-text mb-8 text-center text-2xl font-bold md:mb-12 md:text-3xl">
            Recursos Adicionales
          </h3>
          <p className="mb-6 text-center text-base text-gray-600 md:mb-8 md:text-xl">
            Guías, normas y referencias técnicas para profundizar:
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            {resources.map((resource, index) => (
              <motion.a
                key={resource.id}
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-gray-900 md:text-lg">
                    {resource.name}
                  </h4>
                  <ExternalLink className="h-4 w-4 text-gray-400 transition-colors group-hover:text-casino-amber" />
                </div>
                <p className="mt-2 text-sm text-gray-600">{resource.desc}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
