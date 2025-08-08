import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ScrollProgressBar } from '@/components/effects/ScrollProgress'
import { PageTransition } from '@/components/effects/PageTransition'
import { CursorGlow } from '@/components/effects/CursorGlow'
import { ScrollToTopOnLoad } from '@/components/effects/ScrollToTopOnLoad'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Casino Royale - Chatbot Gaming Experience',
  description:
    'Disfruta de una experiencia de juego única con nuestro asistente virtual inteligente',
  keywords: 'casino, chatbot, gaming, virtual assistant, juegos',
  authors: [{ name: 'Casino Royale Team' }],
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>
        <ScrollProgressBar />
        <CursorGlow />
        <ScrollToTopOnLoad />
        <PageTransition>{children}</PageTransition>
        <script
          src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"
          async
        />
      </body>
    </html>
  )
}
