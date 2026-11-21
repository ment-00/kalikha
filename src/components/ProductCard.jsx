import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import { useCart } from '../context/CartContext.jsx'
import { formatPeso } from '../data/products.js'
import ProductImg from './ProductImg.jsx'

// showAddToCart: Shop page shows both buttons; the Home page shows only "View Product".
export default function ProductCard({ product, showAddToCart = true, viewLabel = 'View Details' }) {
  const { addToCart } = useCart()
  const link = `/shop/${product.id}`

  return (
    <Card className="product-card h-100">
      <Link to={link} className="product-card-img">
        <ProductImg product={product} loading="lazy" />
        <span className="category-chip">{product.category}</span>
      </Link>
      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start gap-2 mb-2">
          <Card.Title as="h3" className="product-name mb-0">
            <Link to={link}>{product.name}</Link>
          </Card.Title>
          <span className="product-price">₱{product.price}</span>
        </div>
        <Card.Text className="product-desc flex-grow-1">{product.description}</Card.Text>
        <div className="d-flex gap-2 mt-2">
          <Button as={Link} to={link} variant="outline-forest" className="flex-fill">
            {viewLabel}
          </Button>
          {showAddToCart && (
            <Button
              variant="forest"
              className="flex-fill d-flex align-items-center justify-content-center gap-2"
              onClick={() => addToCart(product.id, 1)}
              aria-label={`Add ${product.name} to cart, ${formatPeso(product.price)}`}
            >
              <FiShoppingBag /> Add to Cart
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  )
}
