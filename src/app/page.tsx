import { Navigation } from '@/components/layout/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { LegalSection } from '@/components/sections/LegalSection'
import { ChatbotWidget } from '@/components/chatbot/ChatbotWidget'

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div id="home">
          <HeroSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="legal">
          <LegalSection />
        </div>
        <ChatbotWidget />
      </main>
    </>
  )
} 