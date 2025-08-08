'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Coins, Zap, Star, Crown, Trophy, ChevronDown } from 'lucide-react'

interface Symbol {
  id: string
  icon: React.ComponentType<{ className?: string }>
  name: string
  value: number
  color: string
}

const symbols: Symbol[] = [
  {
    id: 'coins',
    icon: Coins,
    name: 'Coins',
    value: 100,
    color: 'text-casino-amber',
  },
  {
    id: 'zap',
    icon: Zap,
    name: 'Zap',
    value: 200,
    color: 'text-casino-orange',
  },
  {
    id: 'star',
    icon: Star,
    name: 'Star',
    value: 300,
    color: 'text-casino-amber',
  },
  {
    id: 'crown',
    icon: Crown,
    name: 'Crown',
    value: 500,
    color: 'text-casino-orange',
  },
  {
    id: 'trophy',
    icon: Trophy,
    name: 'Trophy',
    value: 1000,
    color: 'text-casino-amber',
  },
]

interface SlotMachineProps {
  className?: string
}

export function SlotMachine({ className = '' }: SlotMachineProps) {
  const [reels, setReels] = useState<Symbol[][]>([
    [symbols[0], symbols[1], symbols[2]],
    [symbols[1], symbols[2], symbols[3]],
    [symbols[2], symbols[3], symbols[4]],
  ])
  const [isSpinning, setIsSpinning] = useState(false)
  const [credits, setCredits] = useState(1000)
  const [bet, setBet] = useState(10)
  const [lastWin, setLastWin] = useState(0)
  const [showWin, setShowWin] = useState(false)
  const [leverPosition, setLeverPosition] = useState(0)
  const [reelPositions, setReelPositions] = useState([0, 0, 0])
  const [isLeverPressed, setIsLeverPressed] = useState(false)
  const spinIntervalRef = useRef<number | null>(null)
  // leverRef no se usa; eliminado para limpieza

  const spin = () => {
    if (credits < bet || isSpinning) return

    setIsSpinning(true)
    setCredits((prev) => prev - bet)
    setShowWin(false)

    const reelConfigs = [
      { speed: 150, duration: 2500, delay: 0 },
      { speed: 200, duration: 3000, delay: 200 },
      { speed: 250, duration: 3500, delay: 400 },
    ]

    const startTime = Date.now()

    const animateReels = () => {
      const elapsed = Date.now() - startTime

      const newPositions = reelPositions.map((pos, index) => {
        const config = reelConfigs[index]
        const reelElapsed = Math.max(0, elapsed - config.delay)

        if (reelElapsed < config.duration) {
          const progress = reelElapsed / config.duration
          const easeProgress =
            progress < 0.5
              ? 2 * progress * progress
              : 1 - 2 * (1 - progress) * (1 - progress)
          return (pos + (easeProgress * config.speed) / 100) % symbols.length
        }
        return pos
      })

      setReelPositions(newPositions)

      const stillSpinning = reelConfigs.some((config) => {
        const reelElapsed = Math.max(0, elapsed - config.delay)
        return reelElapsed < config.duration
      })

      if (stillSpinning) {
        spinIntervalRef.current = requestAnimationFrame(animateReels)
      } else {
        // Resultado con 50% de probabilidad de ganar
        const isWin = Math.random() < 0.5
        const baseSymbol = symbols[Math.floor(Math.random() * symbols.length)]
        const differentFrom = (s: Symbol) =>
          symbols.filter((x) => x.id !== s.id)[
            Math.floor(Math.random() * (symbols.length - 1))
          ]

        const centers: [Symbol, Symbol, Symbol] = isWin
          ? [baseSymbol, baseSymbol, baseSymbol]
          : [
              baseSymbol,
              differentFrom(baseSymbol),
              symbols[Math.floor(Math.random() * symbols.length)],
            ]

        const finalReels = reels.map((reel, reelIndex) =>
          reel.map((symbol, symbolIndex) => {
            if (symbolIndex === 1) {
              return centers[reelIndex]
            }
            return symbols[Math.floor(Math.random() * symbols.length)]
          })
        )

        setReels(finalReels)
        setIsSpinning(false)

        const win = calculateWin(finalReels)
        if (win > 0) {
          setLastWin(win)
          setCredits((prev) => prev + win)
          setShowWin(true)
          setTimeout(() => setShowWin(false), 2500)
        }
      }
    }

    animateReels()
  }

  const handleLeverMouseDown = () => {
    if (credits < bet || isSpinning) return
    setIsLeverPressed(true)
    setLeverPosition(1)
  }

  const handleLeverMouseUp = () => {
    if (isLeverPressed && !isSpinning) {
      spin()
    }
    setIsLeverPressed(false)
    setLeverPosition(0)
  }

  const handleLeverMouseLeave = () => {
    if (isLeverPressed) {
      setIsLeverPressed(false)
      setLeverPosition(0)
    }
  }

  useEffect(() => {
    return () => {
      if (spinIntervalRef.current) {
        cancelAnimationFrame(spinIntervalRef.current)
      }
    }
  }, [])

  const calculateWin = (currentReels: Symbol[][]) => {
    const centerLine = currentReels.map((reel) => reel[1])
    const centerSymbol = centerLine[0]
    if (centerLine.every((symbol) => symbol.id === centerSymbol.id)) {
      return centerSymbol.value * (bet / 10)
    }
    return 0
  }

  const increaseBet = () => {
    if (bet < 100 && credits >= bet + 10) {
      setBet((prev) => prev + 10)
    }
  }

  const decreaseBet = () => {
    if (bet > 10) {
      setBet((prev) => prev - 10)
    }
  }

  const getVisibleSymbols = (reelIndex: number) => {
    const positions = reelPositions[reelIndex]
    const visibleSymbols = [] as Symbol[]
    for (let i = 0; i < 3; i++) {
      const symbolIndex = Math.floor(positions + i) % symbols.length
      visibleSymbols.push(symbols[symbolIndex])
    }
    return visibleSymbols
  }

  return (
    <div className={`relative ${className}`}>
      {/* Marco de la máquina tragamonedas - Tamaño adaptativo */}
      <div className="relative max-w-xs rounded-2xl border-4 border-casino-amber/30 bg-gradient-to-b from-gray-800 via-gray-900 to-black p-4 shadow-xl sm:max-w-sm sm:p-6 sm:shadow-2xl md:max-w-sm">
        {/* Panel superior */}
        <div className="mb-3 rounded-t-xl bg-gradient-to-r from-casino-amber to-casino-orange p-2 text-center sm:mb-4 sm:p-3">
          <h3 className="text-base font-bold text-white sm:text-lg">
            🎰 ROYALE SLOTS
          </h3>
          <p className="text-[10px] text-white/80 sm:text-xs">
            Premium Casino Experience
          </p>
        </div>

        {/* Pantalla principal */}
        <div className="mb-3 rounded-xl border-2 border-casino-amber/50 bg-black p-3 shadow-inner sm:mb-4 sm:p-4">
          {/* Ventana de los reels */}
          <div className="rounded-lg border border-casino-amber/30 bg-gradient-to-b from-gray-900 to-black p-2 sm:p-3">
            <div className="relative grid h-28 grid-cols-3 gap-1 sm:h-32">
              {/* Reels */}
              {[0, 1, 2].map((reelIndex) => (
                <div
                  key={reelIndex}
                  className="relative overflow-hidden rounded-md border border-casino-amber/20 bg-gradient-to-b from-gray-800 to-gray-900"
                >
                  <div className="relative h-full">
                    {getVisibleSymbols(reelIndex).map((symbol, symbolIndex) => (
                      <motion.div
                        key={`${reelIndex}-${symbolIndex}`}
                        className={`absolute flex h-1/3 w-full items-center justify-center ${symbolIndex === 1 ? 'border-y border-casino-amber/50 bg-casino-amber/20' : ''}`}
                        style={{ top: `${symbolIndex * 33.33}%` }}
                        animate={isSpinning ? { y: [0, -33.33, 0] } : {}}
                        transition={{
                          duration: 0.1,
                          repeat: isSpinning ? Infinity : 0,
                          delay: reelIndex * 0.1,
                          ease: 'linear',
                        }}
                      >
                        <symbol.icon
                          className={`h-5 w-5 sm:h-6 sm:w-6 ${symbol.color} drop-shadow-lg`}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Línea de pago */}
            <div className="mt-2 text-center sm:mt-3">
              <div className="inline-block rounded-full border border-casino-amber/50 bg-casino-amber/30 px-3 py-0.5 sm:px-4 sm:py-1">
                <span className="text-[10px] font-bold text-casino-amber sm:text-xs">
                  PAY LINE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel de control */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Información y controles */}
          <div className="space-y-2 sm:space-y-3">
            {/* Créditos */}
            <div className="rounded-lg border border-casino-amber/30 bg-casino-navy p-2">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <Coins className="h-4 w-4 text-casino-amber" />
                  <span className="text-xs font-bold sm:text-sm">
                    {credits}
                  </span>
                </div>
                <span className="text-[10px] text-gray-300 sm:text-xs">
                  CRÉDITOS
                </span>
              </div>
            </div>

            {/* Controles de apuesta */}
            <div className="rounded-lg border border-casino-amber/30 bg-casino-navy p-2">
              <div className="mb-2 flex items-center justify-between text-white">
                <span className="text-[10px] sm:text-xs">APUESTA:</span>
                <span className="text-xs font-bold text-casino-amber sm:text-sm">
                  {bet}
                </span>
              </div>
              <div className="flex justify-center space-x-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={decreaseBet}
                  disabled={bet <= 10}
                  className="rounded bg-casino-slate px-2 py-1 text-[10px] text-white hover:bg-casino-slate/80 disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs"
                >
                  -
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={increaseBet}
                  disabled={bet >= 100 || credits < bet + 10}
                  className="rounded bg-casino-slate px-2 py-1 text-[10px] text-white hover:bg-casino-slate/80 disabled:cursor-not-allowed disabled:opacity-50 sm:text-xs"
                >
                  +
                </motion.button>
              </div>
            </div>
          </div>

          {/* Palanca interactiva */}
          <div className="flex flex-col items-center">
            <motion.div
              animate={{ rotate: leverPosition * 45 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative"
            >
              {/* Base de la palanca */}
              <div className="mx-auto mb-2 h-10 w-3 rounded-full border border-gray-500 bg-gradient-to-b from-gray-600 to-gray-800 sm:h-12"></div>
              {/* Mango de la palanca */}
              <motion.div
                whileHover={{ scale: credits < bet || isSpinning ? 1 : 1.1 }}
                whileTap={{ scale: credits < bet || isSpinning ? 1 : 0.9 }}
                onMouseDown={handleLeverMouseDown}
                onMouseUp={handleLeverMouseUp}
                onMouseLeave={handleLeverMouseLeave}
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-casino-amber/50 bg-gradient-to-br from-casino-amber to-casino-orange shadow-lg sm:h-10 sm:w-10 ${credits < bet || isSpinning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:shadow-xl'}`}
              >
                <ChevronDown className="h-4 w-4 text-white sm:h-5 sm:w-5" />
              </motion.div>
            </motion.div>
            <div className="mt-1 text-center">
              <span className="text-[10px] text-gray-400 sm:text-xs">
                PALANCA
              </span>
            </div>
          </div>
        </div>

        {/* Panel inferior */}
        <div className="mt-3 rounded-lg border border-casino-amber/30 bg-gradient-to-r from-casino-navy to-casino-slate p-2 sm:mt-4 sm:p-3">
          <div className="text-center text-white">
            <div className="mb-1 text-[10px] text-gray-300 sm:text-xs">
              ÚLTIMA GANANCIA
            </div>
            <div className="text-base font-bold text-casino-amber sm:text-lg">
              {lastWin > 0 ? `+${lastWin}` : '---'}
            </div>
          </div>
        </div>

        {/* Mensaje de ganancia */}
        <AnimatePresence>
          {showWin && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-casino-amber/95 to-casino-orange/95 backdrop-blur-sm"
            >
              <div className="px-4 text-center text-white">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="mb-2 text-4xl sm:mb-3 sm:text-5xl"
                >
                  🎉
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-1 text-xl font-bold sm:mb-2 sm:text-2xl"
                >
                  ¡GANASTE!
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="rounded-lg bg-white/20 px-3 py-1.5 text-lg font-bold text-casino-dark sm:px-4 sm:py-2 sm:text-xl"
                >
                  +{lastWin} créditos
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-2 text-[10px] text-white/80 sm:text-xs"
                >
                  ¡Sigue jugando!
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Efectos de partículas */}
        {showWin && (
          <div className="pointer-events-none absolute inset-0">
            {[...Array(16)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-1.5 w-1.5 rounded-full bg-casino-amber sm:h-2 sm:w-2"
                initial={{ x: '50%', y: '50%', opacity: 1, scale: 0 }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: [1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{ duration: 1.8, delay: Math.random() * 0.4 }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
