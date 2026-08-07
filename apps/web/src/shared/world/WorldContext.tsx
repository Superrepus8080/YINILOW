import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { WORLDS, type WorldConfig, type WorldId } from './worlds'

interface WorldContextValue {
  world: WorldConfig
  worldId: WorldId
  setWorld: (id: WorldId) => void
  cartCount: number
  savedCount: number
}

const WorldContext = createContext<WorldContextValue | null>(null)

function worldFromPath(pathname: string): WorldId {
  return pathname.startsWith('/home') ? 'home' : 'fashion'
}

export function WorldProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  const worldId = worldFromPath(location.pathname)
  const [cartCount] = useState(2)
  const [savedCount] = useState(0)

  const value = useMemo<WorldContextValue>(
    () => ({
      world: WORLDS[worldId],
      worldId,
      setWorld: (id) => {
        if (id !== worldId) navigate(WORLDS[id].path)
      },
      cartCount,
      savedCount,
    }),
    [worldId, navigate, cartCount, savedCount],
  )

  return <WorldContext.Provider value={value}>{children}</WorldContext.Provider>
}

export function useWorld() {
  const ctx = useContext(WorldContext)
  if (!ctx) throw new Error('useWorld must be used within WorldProvider')
  return ctx
}
