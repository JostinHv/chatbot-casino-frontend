'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Play, Star, TrendingUp } from 'lucide-react'

const games = [
  {
    id: 1,
    name: 'Golden Slots',
    category: 'slots',
    image: '/api/placeholder/300/200',
    isPopular: true,
    isNew: false,
    description: 'Tragamonedas clásica con premios dorados',
  },
  {
    id: 2,
    name: 'Royal Poker',
    category: 'table',
    image: '/api/placeholder/300/200',
    isPopular: true,
    isNew: true,
    description: 'Poker de alta calidad con torneos reales',
  },
  {
    id: 3,
    name: 'Live Blackjack',
    category: 'live',
    image: '/api/placeholder/300/200',
    isPopular: false,
    isNew: true,
    description: 'Blackjack en vivo con crupieres profesionales',
  },
  {
    id: 4,
    name: 'Mega Jackpot',
    category: 'jackpot',
    image: '/api/placeholder/300/200',
    isPopular: true,
    isNew: false,
    description: 'Jackpot progresivo con premios millonarios',
  },
  {
    id: 5,
    name: 'Lucky Scratch',
    category: 'scratch',
    image: '/api/placeholder/300/200',
    isPopular: false,
    isNew: true,
    description: 'Rasca y gana con premios instantáneos',
  },
  {
    id: 6,
    name: 'Diamond Roulette',
    category: 'table',
    image: '/api/placeholder/300/200',
    isPopular: true,
    isNew: false,
    description: 'Ruleta europea con gráficos de diamante',
  },
]

const categories = [
  { id: 'all', name: 'Todos', count: games.length },
  { id: 'slots', name: 'Tragamonedas', count: games.filter(g => g.category === 'slots').length },
  { id: 'table', name: 'Mesa', count: games.filter(g => g.category === 'table').length },
  { id: 'live', name: 'En Vivo', count: games.filter(g => g.category === 'live').length },
  { id: 'jackpot', name: 'Jackpot', count: games.filter(g => g.category === 'jackpot').length },
  { id: 'scratch', name: 'Rasca', count: games.filter(g => g.category === 'scratch').length },
]

export function GamesSection() {
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
            Nuestros Juegos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora nuestra amplia colección de juegos de casino con las mejores 
            probabilidades y premios garantizados.
          </p>
        </motion.div>

        {/* Filtros de categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              className="rounded-full px-6 py-2 hover:bg-casino-purple hover:text-white transition-all duration-300"
            >
              {category.name}
              <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </Button>
          ))}
        </motion.div>

        {/* Grid de juegos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <div className="w-full h-48 bg-gradient-to-br from-casino-purple to-casino-gold flex items-center justify-center">
                  <Play className="w-16 h-16 text-white opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {game.isPopular && (
                    <span className="bg-casino-gold text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Popular
                    </span>
                  )}
                  {game.isNew && (
                    <span className="bg-casino-green text-white px-3 py-1 rounded-full text-xs font-bold">
                      Nuevo
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 flex items-center bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                  <Star className="w-3 h-3 mr-1 fill-yellow-400" />
                  4.8
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {game.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {game.description}
                </p>
                
                <Button
                  variant="casino"
                  className="w-full"
                >
                  Jugar Ahora
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Ver más juegos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg"
          >
            Ver Todos los Juegos
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 