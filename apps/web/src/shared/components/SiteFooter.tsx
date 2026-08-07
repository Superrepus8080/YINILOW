import './SiteFooter.css'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="yl-container site-footer__grid">
        <div className="site-footer__brand">
          <div className="yl-logo site-footer__logo">
            <span className="yl-logo__text">YINILOW</span>
            <span className="yl-logo__star" aria-hidden="true">✦</span>
          </div>
          <p>
            Ghana&apos;s home of youth marketplace. Curated thrift, energy-smart living, one account.
          </p>
          <div className="site-footer__social" aria-label="Social">
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
            <li>All Categories</li>
            <li>New Drop</li>
            <li>Dig the Pile</li>
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
            <li>About Us</li>
            <li>Careers</li>
            <li>Become a Seller</li>
            <li>Press</li>
          </ul>
        </div>

        <div className="site-footer__connect">
          <h3>Stay Connected</h3>
          <p>Get deals, drops &amp; energy smart tips.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" aria-label="Email" />
            <button type="submit" aria-label="Subscribe">→</button>
          </form>
          <div className="site-footer__apps">
            <span>App Store</span>
            <span>Google Play</span>
          </div>
        </div>

        <div className="site-footer__map">
          <h3>We Deliver in Ghana</h3>
          <div className="ghana-map" aria-hidden="true">
            <div className="ghana-map__shape" />
            <span className="ghana-map__pin">📍</span>
          </div>
        </div>
      </div>

      <div className="yl-container site-footer__legal">
        <p>© {new Date().getFullYear()} YINILOW. All rights reserved.</p>
        <p className="site-footer__culture">
          Made in Ghana with <span aria-hidden="true">💛</span> for the culture
        </p>
        <div>
          <a href="#terms">Terms &amp; Conditions</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#cookies">Cookies Policy</a>
        </div>
      </div>
    </footer>
  )
}
