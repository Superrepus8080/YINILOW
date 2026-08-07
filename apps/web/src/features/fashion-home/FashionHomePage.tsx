import { ProductCard } from '../../shared/components/ProductCard'
import { FASHION_PRODUCTS } from '../../shared/world/worlds'
import './FashionHomePage.css'

const TILES = [
  {
    title: 'New Drop',
    copy: 'Fresh pieces. Every week.',
    cta: 'SHOP NOW →',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Trending Pieces',
    copy: "See what's hot. Shop trending.",
    cta: 'SHOP TRENDING →',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Shop By Category',
    copy: 'Find your perfect fit.',
    cta: 'BROWSE ALL →',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Curated Looks',
    copy: 'Styled by us. Worn by you.',
    cta: 'GET INSPIRED →',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Dig The Pile',
    copy: 'Hidden gems. Big energy.',
    cta: 'DIG IN →',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    accent: true,
  },
]

export function FashionHomePage() {
  return (
    <div className="fashion">
      <section className="fashion-hero">
        <div className="fashion-hero__copy">
          <h1>DRIP FROM OUR ROOTS</h1>
          <p>Curated thrift. Fresh drops. Real style. Only on YINILOW.</p>
          <div className="fashion-hero__actions">
            <button type="button" className="btn btn-black">
              SHOP NOW <span aria-hidden="true">→</span>
            </button>
            <button type="button" className="btn btn-outline">
              DIG THE PILE <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div className="fashion-hero__stage">
          <img src="/images/fashion-hero.jpg" alt="Models in curated thrift fits" />
          <div className="fashion-hero__decor" aria-hidden="true">
            <div className="badge-curated">
              <span>✦</span>
              CURATED WITH CARE
            </div>
            <div className="doodle doodle-star">✧</div>
            <div className="doodle doodle-wave">〰️</div>
            <div className="badge-sellers">SUPPORT LOCAL SELLERS</div>
            <div className="stack-cards">
              <span>ONE ACCOUNT</span>
              <span>ONE CART</span>
              <span>ONE CHECKOUT</span>
            </div>
          </div>
        </div>
      </section>

      <section className="value-bar" aria-label="Why YINILOW">
        <div className="value-bar__item">
          <span className="value-bar__icon" aria-hidden="true">◇</span>
          <div>
            <strong>ONE-OF-ONES</strong>
            <p>No replicas. Just real finds.</p>
          </div>
        </div>
        <div className="value-bar__item">
          <span className="value-bar__icon" aria-hidden="true">🛡</span>
          <div>
            <strong>TRUSTED SELLERS</strong>
            <p>Verified sellers. Transparent deals.</p>
          </div>
        </div>
        <div className="value-bar__item">
          <span className="value-bar__icon" aria-hidden="true">♻</span>
          <div>
            <strong>SUSTAINABLE CHOICE</strong>
            <p>Wear more. Waste less. Support local.</p>
          </div>
        </div>
        <div className="value-bar__item">
          <span className="value-bar__icon" aria-hidden="true">📍</span>
          <div>
            <strong>LOCAL LOVE</strong>
            <p>From Accra to Kumasi. Made for Ghana.</p>
          </div>
        </div>
        <div className="value-bar__item">
          <span className="value-bar__icon" aria-hidden="true">🔒</span>
          <div>
            <strong>SECURE &amp; EASY</strong>
            <p>Safe payments. Fast checkout.</p>
          </div>
        </div>
      </section>

      <section className="tile-row">
        {TILES.map((tile) => (
          <article key={tile.title} className={tile.accent ? 'tile tile--accent' : 'tile'}>
            <img src={tile.image} alt="" />
            <div className="tile__content">
              <h2>{tile.title}</h2>
              <p>{tile.copy}</p>
              <span>{tile.cta}</span>
            </div>
          </article>
        ))}
      </section>

      <section className="featured-block">
        <div className="featured-block__head">
          <h2>FEATURED PRODUCTS</h2>
          <button type="button" className="view-all">VIEW ALL →</button>
        </div>
        <div className="fashion-grid">
          {FASHION_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} variant="fashion" />
          ))}
        </div>
      </section>

      <section className="service-row">
        <ul>
          <li><span aria-hidden="true">18+</span><strong>18+ only</strong></li>
          <li><span aria-hidden="true">⚖</span><strong>Secure &amp; Fair</strong></li>
          <li><span aria-hidden="true">🚚</span><strong>Free Shipping</strong></li>
          <li><span aria-hidden="true">↩</span><strong>Easy Returns</strong></li>
          <li><span aria-hidden="true">🇬🇭</span><strong>Delivery in Ghana</strong></li>
          <li><span aria-hidden="true">🏪</span><strong>Become a Seller</strong></li>
        </ul>
        <button type="button" className="btn btn-black">SELL ON YINILOW</button>
      </section>
    </div>
  )
}
