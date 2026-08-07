import './SiteFooter.css'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="yl-brand site-footer__logo">
            <span className="yl-brand__star" aria-hidden="true">✦</span>
            <span className="yl-brand__word">YINILOW</span>
          </div>
          <p>Ghana&apos;s home of youth marketplace. Curated thrift, energy-smart living, one account.</p>
          <div className="site-footer__social" aria-label="Social links">
            <span>IG</span>
            <span>TT</span>
            <span>X</span>
            <span>FB</span>
            <span>YT</span>
          </div>
        </div>

        <div>
          <h3>Shop</h3>
          <ul>
            <li>New Drop</li>
            <li>Dig the Pile</li>
            <li>Home &amp; Electronics</li>
            <li>Energy Smart</li>
            <li>Stock Drops</li>
          </ul>
        </div>

        <div>
          <h3>Help &amp; Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Track My Order</li>
            <li>Returns</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div>
          <h3>About YINILOW</h3>
          <ul>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Become a Seller</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="site-footer__connect">
          <h3>Stay Connected</h3>
          <form className="site-footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Email address" aria-label="Email address" />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
          <div className="site-footer__apps">
            <span>App Store</span>
            <span>Google Play</span>
          </div>
          <p className="site-footer__ghana">Delivery across Ghana 🇬🇭</p>
        </div>
      </div>

      <div className="site-footer__legal">
        <p>© {new Date().getFullYear()} YINILOW. All rights reserved.</p>
        <div>
          <a href="#terms">Terms</a>
          <a href="#privacy">Privacy</a>
          <a href="#cookies">Cookies</a>
        </div>
      </div>
    </footer>
  )
}
