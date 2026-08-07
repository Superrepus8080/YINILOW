import { useWorld } from '../world/WorldContext'
import './WorldSwitcher.css'

export function WorldSwitcher() {
  const { worldId, setWorld } = useWorld()

  return (
    <div className="world-switcher" role="group" aria-label="Shopping world">
      <button
        type="button"
        className={worldId === 'fashion' ? 'ws-btn is-active' : 'ws-btn'}
        onClick={() => setWorld('fashion')}
      >
        Clothing &amp; Accessories
      </button>
      <button
        type="button"
        className={worldId === 'home' ? 'ws-btn is-active' : 'ws-btn'}
        onClick={() => setWorld('home')}
      >
        Home &amp; Electronics
      </button>
    </div>
  )
}
