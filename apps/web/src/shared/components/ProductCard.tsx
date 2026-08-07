import { formatGhc, type ProductSeed } from '../world/worlds'
import './ProductCard.css'

export function ProductCard({
  product,
  showRating = false,
}: {
  product: ProductSeed
  showRating?: boolean
}) {
  return (
    <article className="product-card">
      <div className="product-card__media">
        {product.badge ? <span className="product-card__badge">{product.badge}</span> : null}
        <button type="button" className="product-card__fav" aria-label={`Save ${product.title}`}>
          ♡
        </button>
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="product-card__body">
        <h3>{product.title}</h3>
        {showRating && product.rating != null ? (
          <p className="product-card__rating">
            ★ {product.rating.toFixed(1)}
            {product.reviews != null ? <span> ({product.reviews})</span> : null}
          </p>
        ) : null}
        <div className="product-card__row">
          <strong>{formatGhc(product.priceGhc)}</strong>
          <button type="button" className="product-card__add" aria-label={`Add ${product.title} to cart`}>
            +
          </button>
        </div>
      </div>
    </article>
  )
}
