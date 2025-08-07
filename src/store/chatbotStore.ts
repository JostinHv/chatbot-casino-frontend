import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { ChatbotState, ChatMessage } from '@/types'
import { generateId } from '@/lib/utils'

interface ChatbotActions {
  toggleChat: () => void
  minimizeChat: () => void
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void
  clearMessages: () => void
  setMessages: (messages: ChatMessage[]) => void
}

const initialState: ChatbotState = {
  isOpen: false,
  isMinimized: false,
  messages: [],
}

export const useChatbotStore = create<ChatbotState & ChatbotActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      toggleChat: () =>
        set((state) => ({
          isOpen: !state.isOpen,
          isMinimized: false,
        })),

      minimizeChat: () =>
        set((state) => ({
          isMinimized: !state.isMinimized,
        })),

      addMessage: (message) =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              ...message,
              id: generateId(),
              timestamp: new Date(),
            },
          ],
        })),

      clearMessages: () => set({ messages: [] }),

      setMessages: (messages) => set({ messages }),
    }),
    {
      name: 'chatbot-store',
    }
  )
) 