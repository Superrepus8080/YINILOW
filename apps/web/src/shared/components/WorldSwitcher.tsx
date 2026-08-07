import { useWorld } from '../world/WorldContext'
import './WorldSwitcher.css'

export function WorldSwitcher() {
  const { worldId, setWorld } = useWorld()

  return (
    <div className="world-switcher" role="group" aria-label="Shopping world">
      <button
        type="button"
        className={worldId === 'fashion' ? 'world-switcher__btn is-active' : 'world-switcher__btn'}
        onClick={() => setWorld('fashion')}
      >
        Clothing &amp; Accessories
      </button>
      <button
        type="button"
        className={worldId === 'home' ? 'world-switcher__btn is-active' : 'world-switcher__btn'}
        onClick={() => setWorld('home')}
      >
        Home &amp; Electronics
      </button>
    </div>
  )
}
