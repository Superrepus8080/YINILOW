import { ProductCard } from '../../shared/components/ProductCard'
import { HOME_CATEGORIES, HOME_PRODUCTS } from '../../shared/world/worlds'
import './HomeElectronicsPage.css'

export function HomeElectronicsPage() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="eyebrow">Energy-smart living</p>
          <h1>Smarter homes. Lower bills. Better living.</h1>
          <p className="home-hero__lede">
            Restored appliances, power essentials, and tech that works harder for Ghana homes.
          </p>
          <div className="home-hero__actions">
            <button type="button" className="yl-btn yl-btn--black">Shop now</button>
            <button type="button" className="yl-btn yl-btn--outline">Explore categories</button>
            <button type="button" className="yl-btn yl-btn--outline">Find My Match</button>
          </div>
          <ul className="home-hero__trust">
            <li>1-year warranty</li>
            <li>Islandwide delivery</li>
            <li>Easy returns</li>
          </ul>
        </div>
        <div className="home-hero__visual">
          <img src="/images/home-hero.jpg" alt="Energy-smart appliances for the home" />
          <aside className="home-hero__card">
            <strong>Save on energy</strong>
            <p>Lower bills with Energy Smart picks.</p>
            <button type="button" className="text-link">Learn more</button>
          </aside>
        </div>
      </section>

      <div className="category-rail" aria-label="Shop by category">
        {HOME_CATEGORIES.map((cat) => (
          <button key={cat.label} type="button" className="category-chip">
            <span className="category-chip__icon" aria-hidden="true">{cat.icon}</span>
            {cat.label}
          </button>
        ))}
        <button type="button" className="category-chip category-chip--all">View all</button>
      </div>

      <div className="home-trust-strip">
        <span>Not sure what you need? <strong>Find My Match</strong></span>
        <span>Trusted sellers</span>
        <span>Secure payments</span>
        <span>24/7 customer support</span>
        <span>Proudly for Ghana</span>
      </div>

      <section className="featured">
        <div className="section-head">
          <h2>Energy Smart picks</h2>
          <button type="button" className="text-link">View all</button>
        </div>
        <div className="product-grid home-products">
          {HOME_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} showRating />
          ))}
        </div>
      </section>

      <section className="featured">
        <div className="section-head">
          <h2>Top picks</h2>
          <button type="button" className="text-link">View all</button>
        </div>
        <div className="product-grid home-products">
          {[...HOME_PRODUCTS].reverse().map((product) => (
            <ProductCard key={`top-${product.id}`} product={product} showRating />
          ))}
        </div>
      </section>
    </div>
  )
}
