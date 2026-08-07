import { ProductCard } from '../../shared/components/ProductCard'
import { FASHION_PRODUCTS } from '../../shared/world/worlds'
import './FashionHomePage.css'

const DISCOVERY = [
  {
    title: 'New Drop',
    copy: 'Fresh pieces this week',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Trending Pieces',
    copy: 'What Ghana is wearing',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Shop by Category',
    copy: 'Browse every aisle',
    image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Curated Looks',
    copy: 'Outfit inspiration',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80',
  },
  {
    title: 'Dig the Pile',
    copy: 'Bargains in the crate',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80',
    accent: true,
  },
]

export function FashionHomePage() {
  return (
    <div className="fashion-page">
      <section className="fashion-hero">
        <div className="fashion-hero__copy">
          <p className="fashion-hero__eyebrow">Ghana&apos;s home of youth marketplace</p>
          <h1>DRIP FROM OUR ROOTS</h1>
          <p className="fashion-hero__lede">
            Curated thrift. Fresh drops. Real style. Only on YINILOW.
          </p>
          <div className="fashion-hero__actions">
            <button type="button" className="yl-btn yl-btn--black">SHOP NOW</button>
            <button type="button" className="yl-btn yl-btn--outline">DIG THE PILE</button>
          </div>
          <ul className="fashion-hero__badges">
            <li>CURATED WITH CARE</li>
            <li>SUPPORT LOCAL SELLERS</li>
            <li>ONE ACCOUNT. ONE CART. ONE CHECKOUT.</li>
          </ul>
        </div>
        <div className="fashion-hero__visual">
          <img src="/images/fashion-hero.jpg" alt="Models in curated thrift fits" />
        </div>
      </section>

      <ul className="value-strip">
        <li>
          <strong>ONE-OF-ONES</strong>
          <span>Unique finds. No restocks.</span>
        </li>
        <li>
          <strong>TRUSTED SELLERS</strong>
          <span>Verified sellers. Transparent deals.</span>
        </li>
        <li>
          <strong>SUSTAINABLE CHOICE</strong>
          <span>Wear more. Waste less.</span>
        </li>
        <li>
          <strong>LOCAL LOVE</strong>
          <span>From Accra to Kumasi.</span>
        </li>
        <li>
          <strong>SECURE &amp; EASY</strong>
          <span>Safe payments. Fast checkout.</span>
        </li>
      </ul>

      <section className="discovery-grid" aria-label="Discover">
        {DISCOVERY.map((tile) => (
          <article key={tile.title} className={tile.accent ? 'discovery-tile discovery-tile--accent' : 'discovery-tile'}>
            <img src={tile.image} alt="" />
            <div>
              <h2>{tile.title}</h2>
              <p>{tile.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="engagement">
        <article className="lucky-pull">
          <div className="lucky-pull__copy">
            <p className="eyebrow">Lucky Pull</p>
            <h2>Spin. Win. Drip.</h2>
            <p>Unlock exclusive deals &amp; free items.</p>
            <button type="button" className="yl-btn yl-btn--yellow">PLAY NOW</button>
          </div>
          <img src="/images/lucky-wheel.png" alt="" className="lucky-pull__art" />
        </article>
        <article className="stylist">
          <p className="eyebrow">Stylist recommends</p>
          <h2>Personalized picks. Just for you.</h2>
          <div className="stylist__avatars" aria-hidden="true">
            <span /><span /><span />
          </div>
          <button type="button" className="yl-btn yl-btn--black">GET MY PICKS</button>
        </article>
      </section>

      <section className="featured">
        <div className="section-head">
          <h2>Featured pieces</h2>
          <button type="button" className="text-link">View all</button>
        </div>
        <div className="product-grid">
          {FASHION_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="seller-bar">
        <ul>
          <li><strong>18+ Only</strong><span>Verified participants</span></li>
          <li><strong>Secure &amp; Fair</strong><span>Transparent fees</span></li>
          <li><strong>Live Drops</strong><span>Real-time stock</span></li>
          <li><strong>Easy Returns</strong><span>7-day window</span></li>
          <li><strong>Ghana Delivery</strong><span>Nationwide coverage</span></li>
        </ul>
        <button type="button" className="yl-btn yl-btn--yellow">SELL ON YINILOW</button>
      </section>
    </div>
  )
}
