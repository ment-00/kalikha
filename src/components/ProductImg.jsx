import { PLACEHOLDER_IMAGE } from '../data/products.js'

// Product image with a fallback: a missing or misnamed file shows the placeholder instead of a broken image
export default function ProductImg({ product, alt, ...rest }) {
  return (
    <img
      src={product.image}
      alt={alt ?? product.name}
      onError={(e) => {
        if (!e.currentTarget.src.endsWith(PLACEHOLDER_IMAGE)) e.currentTarget.src = PLACEHOLDER_IMAGE
      }}
      {...rest}
    />
  )
}
