import { useLocation } from 'react-router-dom'
import type { WorldId } from '../../shared/world/worlds'
import './PlaceholderPage.css'

export function PlaceholderPage({ world }: { world: WorldId }) {
  const location = useLocation()
  return (
    <section className="placeholder">
      <p className="eyebrow">{world === 'fashion' ? 'Clothing & Accessories' : 'Home & Electronics'}</p>
      <h1>Coming next</h1>
      <p>
        Route <code>{location.pathname}</code> is wired. Catalog pages land in Phase 1.
      </p>
    </section>
  )
}
