export interface Game {
  id: string
  name: string
  description: string
  image: string
  category: GameCategory
  isPopular: boolean
  isNew: boolean
}

export type GameCategory = 'slots' | 'table' | 'live' | 'jackpot' | 'scratch'

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface ChatbotState {
  isOpen: boolean
  isMinimized: boolean
  messages: ChatMessage[]
}

export interface ChatMessage {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  balance: number
  isLoggedIn: boolean
}

export interface CasinoState {
  user: User | null
  games: Game[]
  features: Feature[]
  isLoading: boolean
  error: string | null
} 