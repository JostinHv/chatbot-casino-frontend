'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Crown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const navItems = [
  { name: 'Inicio', href: '#home' },
  { name: 'Testimonios', href: '#testimonials' },
  { name: 'Sobre Nosotros', href: '#about' },
  { name: 'Legal', href: '#legal' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOnHero, setIsOnHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const hero = document.querySelector('#home')
    if (!hero) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setIsOnHero(entry.isIntersecting)
      },
      { root: null, threshold: 0.3 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null
    const nav = document.querySelector('nav') as HTMLElement | null
    if (element) {
      // calcular altura real del nav, incluyendo menú abierto móvil
      const navHeight = (nav?.getBoundingClientRect().height ?? 0) + 4
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({ top: elementTop - navHeight, behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  const isTransparent = isOnHero && !isOpen && !isScrolled

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent'
          : 'bg-white/90 shadow-lg backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-casino-amber to-casino-orange">
              <Crown
                className={`h-6 w-6 ${isTransparent ? 'text-white' : 'text-black'}`}
              />
            </div>
            <span
              className={`text-lg font-bold lg:text-xl ${isTransparent ? 'text-white' : 'text-gray-900'}`}
            >
              Casino Royale
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-casino-amber ${
                  isTransparent ? 'text-white' : 'text-gray-700'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              className={isTransparent ? 'text-white' : 'text-gray-700'}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden rounded-b-2xl bg-white/95 shadow-xl backdrop-blur-md lg:hidden"
            >
              <div className="space-y-1 py-3">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full px-4 py-3 text-left text-gray-700 transition-colors duration-200 hover:bg-gray-100 hover:text-casino-amber"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
