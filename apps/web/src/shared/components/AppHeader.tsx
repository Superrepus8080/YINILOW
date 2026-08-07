import { Link } from 'react-router-dom'
import { useWorld } from '../world/WorldContext'
import { WorldSwitcher } from './WorldSwitcher'
import './AppHeader.css'

export function AppHeader() {
  const { world, worldId, cartCount } = useWorld()

  return (
    <header className={`yl-header yl-header--${worldId}`}>
      <div className="yl-header__top">
        <div className="yl-container yl-header__row">
          <Link to={world.path} className="yl-logo" aria-label="YINILOW home">
            <span className="yl-logo__text">YINILOW</span>
            <span className="yl-logo__star" aria-hidden="true">✦</span>
          </Link>

          <WorldSwitcher />

          <label className="yl-search">
            <span className="sr-only">Search</span>
            <input type="search" placeholder={world.searchPlaceholder} />
            <svg className="yl-search__icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </label>

          <div className="yl-utils">
            <button type="button" className="yl-util">
              <span className="yl-util__ico" aria-hidden="true">🇬🇭</span>
              Ghana
              <span className="yl-chevron" aria-hidden="true">▾</span>
            </button>
            <button type="button" className="yl-util">
              <span className="yl-util__ico" aria-hidden="true">♡</span>
              Saved
            </button>
            <button type="button" className="yl-util">
              <span className="yl-util__ico" aria-hidden="true">👤</span>
              Account
            </button>
            <button type="button" className="yl-util yl-util--cart">
              <span className="yl-util__ico" aria-hidden="true">🛒</span>
              Cart
              <span className="yl-badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="yl-header__sub">
        <div className="yl-container yl-subnav">
          <nav className="yl-subnav__links" aria-label={`${world.label} navigation`}>
            {world.nav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={item.href === world.path ? 'yl-subnav__link is-active' : 'yl-subnav__link'}
              >
                {item.label}
                {item.badge ? <span className="yl-new">{item.badge}</span> : null}
              </Link>
            ))}
          </nav>
          <p className="yl-subnav__tag">ONE MARKETPLACE. TWO SHOPPING WORLDS.</p>
        </div>
      </div>
    </header>
  )
}
