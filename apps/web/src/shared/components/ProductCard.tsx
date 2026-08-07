import { formatFashionPrice, formatHomePrice, type ProductSeed } from '../world/worlds'
import './ProductCard.css'

export function ProductCard({
  product,
  variant = 'fashion',
}: {
  product: ProductSeed
  variant?: 'fashion' | 'home'
}) {
  const price =
    variant === 'home' ? formatHomePrice(product.price) : formatFashionPrice(product.price)

  return (
    <article className={`p-card p-card--${variant}`}>
      <div className="p-card__media">
        <img src={product.image} alt={product.title} loading="lazy" />
      </div>
      <div className="p-card__body">
        <div className="p-card__meta">
          <h3>{product.title}</h3>
          <strong>{price}</strong>
          {variant === 'home' && product.rating != null ? (
            <p className="p-card__rating">
              <span aria-hidden="true">★</span> {product.rating.toFixed(1)}
              {product.reviews != null ? <span className="p-card__reviews">({product.reviews})</span> : null}
            </p>
          ) : null}
        </div>
        <button type="button" className="p-card__heart" aria-label={`Save ${product.title}`}>
          ♡
        </button>
      </div>
    </article>
  )
}
