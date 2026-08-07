import { Link } from 'react-router-dom'
import { useWorld } from '../world/WorldContext'
import { WorldSwitcher } from './WorldSwitcher'
import './AppHeader.css'

export function AppHeader() {
  const { world, cartCount, savedCount, apiStatus } = useWorld()

  return (
    <header className="app-header">
      <div className="app-header__top">
        <Link to={world.path} className="brand" aria-label="YINILOW home">
          <span className="brand__mark" aria-hidden="true">✦</span>
          <span className="brand__name">YINILOW</span>
        </Link>

        <WorldSwitcher />

        <label className="search">
          <span className="sr-only">Search</span>
          <input type="search" placeholder={world.searchPlaceholder} />
        </label>

        <div className="utils">
          <button type="button" className="util" aria-label="Location Ghana">
            <span className="util__flag" aria-hidden="true">🇬🇭</span>
            <span>Ghana</span>
          </button>
          <button type="button" className="util">
            Saved{savedCount > 0 ? ` (${savedCount})` : ''}
          </button>
          <button type="button" className="util">Account</button>
          <button type="button" className="util util--cart">
            Cart
            <span className="cart-badge">{cartCount}</span>
          </button>
        </div>
      </div>

      <nav className="subnav" aria-label={`${world.label} categories`}>
        <div className="subnav__links">
          {world.nav.map((item) => (
            <Link key={item.href} to={item.href} className="subnav__link">
              {item.label}
              {item.badge ? <span className="subnav__badge">{item.badge}</span> : null}
            </Link>
          ))}
        </div>
        <p className="subnav__tagline">
          One marketplace. Two shopping worlds.
          <span className={`api-pill api-pill--${apiStatus}`} title="API health">
            {apiStatus === 'ok' ? 'API online' : apiStatus === 'checking' ? 'API…' : 'API offline'}
          </span>
        </p>
      </nav>
    </header>
  )
}
