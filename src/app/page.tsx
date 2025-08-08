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
        <div id="home" className="scroll-mt-20 lg:scroll-mt-24">
          <HeroSection />
        </div>
        <div id="testimonials" className="scroll-mt-20 lg:scroll-mt-24">
          <TestimonialsSection />
        </div>
        <div id="about" className="scroll-mt-20 lg:scroll-mt-24">
          <AboutSection />
        </div>
        <div id="legal" className="scroll-mt-20 lg:scroll-mt-24">
          <LegalSection />
        </div>
        <ChatbotWidget />
      </main>
    </>
  )
}
