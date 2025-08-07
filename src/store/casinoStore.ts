import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import type { CasinoState, User, Game, Feature } from '@/types'

interface CasinoActions {
  setUser: (user: User | null) => void
  setGames: (games: Game[]) => void
  setFeatures: (features: Feature[]) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  updateUserBalance: (balance: number) => void
  resetState: () => void
}

const initialState: CasinoState = {
  user: null,
  games: [],
  features: [],
  isLoading: false,
  error: null,
}

export const useCasinoStore = create<CasinoState & CasinoActions>()(
  devtools(
    (set, get) => ({
      ...initialState,

      setUser: (user) => set({ user }),

      setGames: (games) => set({ games }),

      setFeatures: (features) => set({ features }),

      setLoading: (isLoading) => set({ isLoading }),

      setError: (error) => set({ error }),

      updateUserBalance: (balance) =>
        set((state) => ({
          user: state.user ? { ...state.user, balance } : null,
        })),

      resetState: () => set(initialState),
    }),
    {
      name: 'casino-store',
    }
  )
) 