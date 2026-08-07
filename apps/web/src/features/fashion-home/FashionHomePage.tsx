import '../../shared/styles/storefront.css'
import './FashionHomePage.css'

export function FashionHomePage() {
  return (
    <section className="world-home fashion-home">
      <div className="hero fashion-hero">
        <div className="hero__copy">
          <p className="eyebrow">Ghana&apos;s home of youth marketplace</p>
          <h1>DRIP FROM OUR ROOTS</h1>
          <p className="lede">
            Curated thrift. Fresh drops. Real style. Only on YINILOW.
          </p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary">Shop now</button>
            <button type="button" className="btn btn--ghost">Dig the pile</button>
          </div>
          <ul className="hero__badges">
            <li>Curated with care</li>
            <li>Support local sellers</li>
            <li>One account, one cart, one checkout</li>
          </ul>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__photo-plane" />
        </div>
      </div>

      <ul className="value-row">
        <li><strong>One-of-ones</strong><span>Unique finds, no restocks</span></li>
        <li><strong>Trusted sellers</strong><span>Verified &amp; transparent</span></li>
        <li><strong>Sustainable choice</strong><span>Wear more. Waste less.</span></li>
        <li><strong>Local love</strong><span>Accra to Kumasi</span></li>
        <li><strong>Secure &amp; easy</strong><span>Safe payments</span></li>
      </ul>

      <div className="tile-grid">
        {['New Drop', 'Trending Pieces', 'Shop by Category', 'Curated Looks', 'Dig the Pile'].map((label) => (
          <article key={label} className={`tile ${label === 'Dig the Pile' ? 'tile--accent' : ''}`}>
            <h2>{label}</h2>
            <p>Coming in Phase 1 catalog</p>
          </article>
        ))}
      </div>

      <div className="engagement-row">
        <article className="panel panel--dark">
          <h2>Lucky Pull</h2>
          <p>Spin. Win. Drip. Unlock exclusive deals &amp; free items.</p>
          <button type="button" className="btn btn--yellow">Play now</button>
        </article>
        <article className="panel panel--yellow">
          <h2>Stylist recommends</h2>
          <p>Personalized picks. Just for you.</p>
          <button type="button" className="btn btn--primary">Get my picks</button>
        </article>
      </div>
    </section>
  )
}
