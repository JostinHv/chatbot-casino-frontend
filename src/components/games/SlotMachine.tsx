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
  { id: 'coins', icon: Coins, name: 'Coins', value: 100, color: 'text-casino-amber' },
  { id: 'zap', icon: Zap, name: 'Zap', value: 200, color: 'text-casino-orange' },
  { id: 'star', icon: Star, name: 'Star', value: 300, color: 'text-casino-amber' },
  { id: 'crown', icon: Crown, name: 'Crown', value: 500, color: 'text-casino-orange' },
  { id: 'trophy', icon: Trophy, name: 'Trophy', value: 1000, color: 'text-casino-amber' },
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
  const leverRef = useRef<HTMLDivElement>(null)

  const spin = () => {
    if (credits < bet || isSpinning) return

    setIsSpinning(true)
    setCredits(prev => prev - bet)
    setShowWin(false)

    // Diferentes velocidades y duraciones para cada reel
    const reelConfigs = [
      { speed: 150, duration: 2500, delay: 0 },      // Reel 1: rápido
      { speed: 200, duration: 3000, delay: 200 },    // Reel 2: medio
      { speed: 250, duration: 3500, delay: 400 },    // Reel 3: lento
    ]

    const startTime = Date.now()

    const animateReels = () => {
      const elapsed = Date.now() - startTime
      
      const newPositions = reelPositions.map((pos, index) => {
        const config = reelConfigs[index]
        const reelElapsed = Math.max(0, elapsed - config.delay)
        
        if (reelElapsed < config.duration) {
          // Curva de velocidad: lento -> rápido -> lento
          const progress = reelElapsed / config.duration
          const easeProgress = progress < 0.5 
            ? 2 * progress * progress  // Aceleración
            : 1 - 2 * (1 - progress) * (1 - progress)  // Desaceleración
          
          return (pos + (easeProgress * config.speed / 100)) % symbols.length
        }
        return pos
      })
      
      setReelPositions(newPositions)

      // Continuar animación si algún reel aún está girando
      const stillSpinning = reelConfigs.some((config, index) => {
        const reelElapsed = Math.max(0, elapsed - config.delay)
        return reelElapsed < config.duration
      })

      if (stillSpinning) {
        spinIntervalRef.current = requestAnimationFrame(animateReels)
      } else {
        // Resultado final
        const finalReels = reels.map((reel, reelIndex) => 
          reel.map((symbol, symbolIndex) => {
            if (symbolIndex === 1 && reelIndex === 0) {
              const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)]
              return randomSymbol
            } else if (symbolIndex === 1 && reelIndex > 0) {
              const shouldMatch = Math.random() < 0.3
              if (shouldMatch) {
                return reels[0][1]
              }
            }
            return symbols[Math.floor(Math.random() * symbols.length)]
          })
        )
        
        setReels(finalReels)
        setIsSpinning(false)
        
        const win = calculateWin(finalReels)
        if (win > 0) {
          setLastWin(win)
          setCredits(prev => prev + win)
          setShowWin(true)
          setTimeout(() => setShowWin(false), 3000)
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
    const centerLine = currentReels.map(reel => reel[1])
    const centerSymbol = centerLine[0]
    
    if (centerLine.every(symbol => symbol.id === centerSymbol.id)) {
      return centerSymbol.value * (bet / 10)
    }
    
    return 0
  }

  const increaseBet = () => {
    if (bet < 100 && credits >= bet + 10) {
      setBet(prev => prev + 10)
    }
  }

  const decreaseBet = () => {
    if (bet > 10) {
      setBet(prev => prev - 10)
    }
  }

  const getVisibleSymbols = (reelIndex: number) => {
    const positions = reelPositions[reelIndex]
    const visibleSymbols = []
    
    for (let i = 0; i < 3; i++) {
      const symbolIndex = Math.floor(positions + i) % symbols.length
      visibleSymbols.push(symbols[symbolIndex])
    }
    
    return visibleSymbols
  }

  return (
    <div className={`relative ${className}`}>
      {/* Marco de la máquina tragamonedas - Tamaño reducido */}
      <div className="relative bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl p-6 shadow-2xl border-4 border-casino-amber/30 max-w-sm">
        {/* Panel superior */}
        <div className="bg-gradient-to-r from-casino-amber to-casino-orange rounded-t-xl p-3 mb-4 text-center">
          <h3 className="text-lg font-bold text-white">🎰 ROYALE SLOTS</h3>
          <p className="text-xs text-white/80">Premium Casino Experience</p>
        </div>

        {/* Pantalla principal */}
        <div className="bg-black rounded-xl p-4 mb-4 border-2 border-casino-amber/50 shadow-inner">
          {/* Ventana de los reels */}
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg p-3 border border-casino-amber/30">
            <div className="grid grid-cols-3 gap-1 h-32 relative">
              {/* Reels */}
              {[0, 1, 2].map((reelIndex) => (
                <div key={reelIndex} className="relative overflow-hidden rounded-md bg-gradient-to-b from-gray-800 to-gray-900 border border-casino-amber/20">
                  <div className="relative h-full">
                    {getVisibleSymbols(reelIndex).map((symbol, symbolIndex) => (
                      <motion.div
                        key={`${reelIndex}-${symbolIndex}`}
                        className={`absolute w-full h-1/3 flex items-center justify-center ${
                          symbolIndex === 1 ? 'bg-casino-amber/20 border-y border-casino-amber/50' : ''
                        }`}
                        style={{
                          top: `${symbolIndex * 33.33}%`,
                        }}
                        animate={isSpinning ? {
                          y: [0, -33.33, 0],
                        } : {}}
                        transition={{
                          duration: 0.1,
                          repeat: isSpinning ? Infinity : 0,
                          delay: reelIndex * 0.1,
                          ease: 'linear',
                        }}
                      >
                        <symbol.icon className={`w-6 h-6 ${symbol.color} drop-shadow-lg`} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Línea de pago */}
            <div className="mt-3 text-center">
              <div className="inline-block bg-casino-amber/30 px-4 py-1 rounded-full border border-casino-amber/50">
                <span className="text-xs text-casino-amber font-bold">PAY LINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel de control */}
        <div className="grid grid-cols-2 gap-4">
          {/* Información y controles */}
          <div className="space-y-3">
            {/* Créditos */}
            <div className="bg-casino-navy rounded-lg p-2 border border-casino-amber/30">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <Coins className="w-4 h-4 text-casino-amber" />
                  <span className="font-bold text-sm">{credits}</span>
                </div>
                <span className="text-xs text-gray-300">CRÉDITOS</span>
              </div>
            </div>

            {/* Controles de apuesta */}
            <div className="bg-casino-navy rounded-lg p-2 border border-casino-amber/30">
              <div className="flex items-center justify-between text-white mb-2">
                <span className="text-xs">APUESTA:</span>
                <span className="font-bold text-casino-amber text-sm">{bet}</span>
              </div>
              <div className="flex justify-center space-x-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={decreaseBet}
                  disabled={bet <= 10}
                  className="bg-casino-slate text-white px-2 py-1 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:bg-casino-slate/80"
                >
                  -
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={increaseBet}
                  disabled={bet >= 100 || credits < bet + 10}
                  className="bg-casino-slate text-white px-2 py-1 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed hover:bg-casino-slate/80"
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
              ref={leverRef}
            >
              {/* Base de la palanca */}
              <div className="w-3 h-12 bg-gradient-to-b from-gray-600 to-gray-800 rounded-full mx-auto mb-2 border border-gray-500"></div>
              
              {/* Mango de la palanca */}
              <motion.div
                whileHover={{ scale: credits < bet || isSpinning ? 1 : 1.1 }}
                whileTap={{ scale: credits < bet || isSpinning ? 1 : 0.9 }}
                onMouseDown={handleLeverMouseDown}
                onMouseUp={handleLeverMouseUp}
                onMouseLeave={handleLeverMouseLeave}
                className={`w-10 h-10 bg-gradient-to-br from-casino-amber to-casino-orange rounded-full flex items-center justify-center border-2 border-casino-amber/50 shadow-lg ${
                  credits < bet || isSpinning ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-xl'
                }`}
              >
                <ChevronDown className="w-5 h-5 text-white" />
              </motion.div>
            </motion.div>
            
            <div className="text-center mt-1">
              <span className="text-xs text-gray-400">PALANCA</span>
            </div>
          </div>
        </div>

        {/* Panel inferior */}
        <div className="mt-4 bg-gradient-to-r from-casino-navy to-casino-slate rounded-lg p-3 border border-casino-amber/30">
          <div className="text-center text-white">
            <div className="text-xs text-gray-300 mb-1">ÚLTIMA GANANCIA</div>
            <div className="text-lg font-bold text-casino-amber">
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
              className="absolute inset-0 bg-gradient-to-br from-casino-amber/95 to-casino-orange/95 rounded-2xl flex items-center justify-center backdrop-blur-sm"
            >
              <div className="text-center text-white">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 0.5, repeat: 3 }}
                  className="text-5xl mb-3"
                >
                  🎉
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-2xl font-bold mb-2"
                >
                  ¡GANASTE!
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl font-bold text-casino-dark bg-white/20 px-4 py-2 rounded-lg"
                >
                  +{lastWin} créditos
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-xs text-white/80 mt-2"
                >
                  ¡Sigue jugando!
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Efectos de partículas */}
        {showWin && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-casino-amber rounded-full"
                initial={{
                  x: '50%',
                  y: '50%',
                  opacity: 1,
                  scale: 0,
                }}
                animate={{
                  x: `${Math.random() * 100}%`,
                  y: `${Math.random() * 100}%`,
                  opacity: [1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  delay: Math.random() * 0.5,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}