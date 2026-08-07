import { ProductCard } from '../../shared/components/ProductCard'
import { HOME_CATEGORIES, HOME_PRODUCTS } from '../../shared/world/worlds'
import './HomeElectronicsPage.css'

const CATEGORY_ICONS = ['🍳', '🔌', '❄️', '🛋️', '🧺', '📺', '⚡', '🏠']

export function HomeElectronicsPage() {
  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero__copy">
          <p className="home-kicker">ENERGY SMART LIVING</p>
          <h1>
            Smarter homes.
            <br />
            Lower bills. Better living.
          </h1>
          <p className="home-lede">
            Energy-efficient essentials for Ghana homes — restored appliances, lower bills, better living.
          </p>
          <div className="home-hero__actions">
            <button type="button" className="btn btn-black">
              Shop now <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="btn btn-outline">Explore categories</button>
          </div>
          <ul className="home-trust">
            <li><span aria-hidden="true">🛡</span>1-year warranty</li>
            <li><span aria-hidden="true">🚚</span>Islandwide delivery</li>
            <li><span aria-hidden="true">↩</span>Easy returns</li>
          </ul>
        </div>

        <div className="home-hero__visual">
          <img src="/images/home-hero.jpg" alt="Energy-smart appliances" />
          <aside className="home-float-card">
            <span className="home-float-card__leaf" aria-hidden="true">🌿</span>
            <strong>Save energy. Save money.</strong>
            <button type="button" className="text-link">Learn more →</button>
          </aside>
        </div>
      </section>

      <section className="cat-grid" aria-label="Categories">
        {HOME_CATEGORIES.map((label, i) => (
          <button key={label} type="button" className="cat-card">
            <span className="cat-card__icon" aria-hidden="true">{CATEGORY_ICONS[i]}</span>
            <span>{label}</span>
          </button>
        ))}
        <button type="button" className="cat-card">
          <span className="cat-card__icon" aria-hidden="true">▦</span>
          <span>View all</span>
        </button>
      </section>

      <section className="home-value" aria-label="Trust">
        <div><span aria-hidden="true">💡</span> Not sure what you need?</div>
        <div><span aria-hidden="true">🛡</span> Trusted sellers</div>
        <div><span aria-hidden="true">🔒</span> Secure payments</div>
        <div><span aria-hidden="true">🎧</span> 24/7 customer support</div>
        <div><span aria-hidden="true">🇬🇭</span> Proudly for Ghana</div>
      </section>

      <div className="home-picks">
        <section className="pick-block">
          <div className="pick-block__head">
            <h2>Energy Smart Picks</h2>
            <button type="button" className="view-all">View all</button>
          </div>
          <div className="pick-block__track">
            <div className="home-grid">
              {HOME_PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} variant="home" />
              ))}
            </div>
            <button type="button" className="pick-next" aria-label="Next">›</button>
          </div>
        </section>

        <section className="pick-block">
          <div className="pick-block__head">
            <h2>Top Picks</h2>
            <button type="button" className="view-all">View all</button>
          </div>
          <div className="pick-block__track">
            <div className="home-grid">
              {[...HOME_PRODUCTS].reverse().map((product) => (
                <ProductCard key={`top-${product.id}`} product={product} variant="home" />
              ))}
            </div>
            <button type="button" className="pick-next" aria-label="Next">›</button>
          </div>
        </section>
      </div>
    </div>
  )
}
