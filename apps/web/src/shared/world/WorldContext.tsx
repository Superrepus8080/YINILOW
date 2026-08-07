import {
  createContext,
  useContext,
  useEffect,
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
  apiStatus: 'checking' | 'ok' | 'down'
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
  const [apiStatus, setApiStatus] = useState<'checking' | 'ok' | 'down'>('checking')

  useEffect(() => {
    let cancelled = false
    fetch('/api/v1/health')
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then(() => {
        if (!cancelled) setApiStatus('ok')
      })
      .catch(() => {
        if (!cancelled) setApiStatus('down')
      })
    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo<WorldContextValue>(
    () => ({
      world: WORLDS[worldId],
      worldId,
      setWorld: (id) => {
        if (id !== worldId) navigate(WORLDS[id].path)
      },
      cartCount,
      savedCount,
      apiStatus,
    }),
    [worldId, navigate, cartCount, savedCount, apiStatus],
  )

  return <WorldContext.Provider value={value}>{children}</WorldContext.Provider>
}

export function useWorld() {
  const ctx = useContext(WorldContext)
  if (!ctx) throw new Error('useWorld must be used within WorldProvider')
  return ctx
}
