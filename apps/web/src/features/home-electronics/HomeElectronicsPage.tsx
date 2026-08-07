import '../../shared/styles/storefront.css'
import './HomeElectronicsPage.css'

const CATEGORIES = [
  'Kitchen',
  'Small Appliances',
  'Cooling & Fans',
  'Home Décor',
  'Laundry',
  'Entertainment',
  'Power & Energy',
  'Smart Home',
]

export function HomeElectronicsPage() {
  return (
    <section className="world-home home-electronics">
      <div className="hero home-hero">
        <div className="hero__copy">
          <p className="eyebrow">Energy-smart living</p>
          <h1>Smarter homes. Lower bills. Better living.</h1>
          <p className="lede">
            Restored appliances, power essentials, and tech that works harder for Ghana homes.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary">Shop now</button>
            <button type="button" className="btn btn--ghost">Explore categories</button>
          </div>
          <ul className="trust-inline">
            <li>1-year warranty</li>
            <li>Nationwide delivery</li>
            <li>Easy returns</li>
          </ul>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__photo-plane home-plane" />
        </div>
      </div>

      <div className="category-rail" aria-label="Shop by category">
        {CATEGORIES.map((label) => (
          <button key={label} type="button" className="category-chip">
            <span className="category-chip__dot" aria-hidden="true" />
            {label}
          </button>
        ))}
        <button type="button" className="category-chip category-chip--all">View all</button>
      </div>

      <div className="trust-strip">
        <span>Not sure what you need? Find My Match</span>
        <span>Trusted sellers</span>
        <span>Secure payments</span>
        <span>24/7 customer support</span>
        <span>Proudly for Ghana</span>
      </div>

      <section className="carousel-block">
        <header>
          <h2>Energy Smart picks</h2>
          <p>Phase 1 will load live catalog cards here.</p>
        </header>
        <div className="skeleton-row">
          {[1, 2, 3, 4].map((n) => (
            <article key={n} className="product-skeleton">
              <div className="product-skeleton__media" />
              <div className="product-skeleton__line" />
              <div className="product-skeleton__line short" />
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}
