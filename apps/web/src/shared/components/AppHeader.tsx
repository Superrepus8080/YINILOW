import { Link } from 'react-router-dom'
import { useWorld } from '../world/WorldContext'
import { WorldSwitcher } from './WorldSwitcher'
import './AppHeader.css'

export function AppHeader() {
  const { world, cartCount, savedCount } = useWorld()

  return (
    <header className="yl-header">
      <div className="yl-header__top">
        <div className="yl-header__inner">
          <Link to={world.path} className="yl-brand" aria-label="YINILOW home">
            <span className="yl-brand__star" aria-hidden="true">✦</span>
            <span className="yl-brand__word">YINILOW</span>
          </Link>

          <WorldSwitcher />

          <label className="yl-search">
            <span className="sr-only">Search</span>
            <svg className="yl-search__icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input type="search" placeholder={world.searchPlaceholder} />
          </label>

          <div className="yl-utils">
            <button type="button" className="yl-util">
              <span className="yl-util__flag" aria-hidden="true">🇬🇭</span>
              <span className="yl-util__label">Ghana</span>
            </button>
            <button type="button" className="yl-util">
              <span aria-hidden="true">♡</span>
              <span className="yl-util__label">Saved{savedCount > 0 ? ` ${savedCount}` : ''}</span>
            </button>
            <button type="button" className="yl-util">
              <span aria-hidden="true">👤</span>
              <span className="yl-util__label">Account</span>
            </button>
            <button type="button" className="yl-util yl-util--cart">
              <span aria-hidden="true">🛍️</span>
              <span className="yl-util__label">Cart</span>
              <span className="yl-cart-badge">{cartCount}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="yl-subnav">
        <div className="yl-subnav__inner">
          <nav className="yl-subnav__links" aria-label={`${world.label} categories`}>
            {world.nav.map((item) => (
              <Link key={item.href} to={item.href} className="yl-subnav__link">
                {item.label}
                {item.badge ? <span className="yl-pill">{item.badge}</span> : null}
              </Link>
            ))}
          </nav>
          <p className="yl-subnav__tag">ONE MARKETPLACE. TWO SHOPPING WORLDS.</p>
        </div>
      </div>
    </header>
  )
}
