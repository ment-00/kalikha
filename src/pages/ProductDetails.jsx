import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container, Row, Col, Button, Breadcrumb } from 'react-bootstrap'
import { FiArrowLeft, FiShoppingBag, FiCheck, FiTruck, FiRefreshCw } from 'react-icons/fi'
import products, { getProductById, formatPeso } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import QuantitySelector from '../components/QuantitySelector.jsx'
import ProductCard from '../components/ProductCard.jsx'
import NotFound from './NotFound.jsx'
import ProductImg from '../components/ProductImg.jsx'

export default function ProductDetails() {
  const { productId } = useParams()
  const product = getProductById(productId)

  // key={productId} on the inner component resets quantity when moving between products
  if (!product) return <NotFound />
  return <ProductView key={product.id} product={product} />
}

function ProductView({ product }) {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const related = products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => (b.category === product.category) - (a.category === product.category))
    .slice(0, 3)

  return (
    <>
      <section className="section pt-4">
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/shop' }}>Shop</Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>

          <Row className="g-4 g-lg-5 align-items-start">
            <Col lg={6}>
              <div className="detail-image">
                <ProductImg product={product} />
              </div>
            </Col>

            <Col lg={6}>
              <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="detail-category">
                {product.category}
              </Link>
              <h1 className="detail-name">{product.name}</h1>
              <p className="detail-price">{formatPeso(product.price)}</p>
              <p className="detail-lead">{product.description}</p>
              <p className="detail-text">{product.details}</p>

              <h2 className="detail-subhead">Product Benefits</h2>
              <ul className="benefit-list">
                {product.benefits.map((b) => (
                  <li key={b}>
                    <span className="benefit-check"><FiCheck /></span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="buy-box">
                <div className="d-flex flex-wrap align-items-center gap-3">
                  <QuantitySelector value={quantity} onChange={setQuantity} />
                  <Button
                    variant="forest"
                    size="lg"
                    className="flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                    onClick={() => addToCart(product.id, quantity)}
                  >
                    <FiShoppingBag /> Add to Cart · {formatPeso(product.price * quantity)}
                  </Button>
                </div>
                <div className="buy-notes d-flex flex-wrap gap-4 mt-3">
                  <span><FiTruck /> Ships from Iloilo City, nationwide</span>
                  <span><FiRefreshCw /> Reusable or natural</span>
                </div>
              </div>

              <Button as={Link} to="/shop" variant="link" className="back-link mt-3 px-0 d-inline-flex align-items-center gap-2">
                <FiArrowLeft /> Back to Shop
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section section-beige">
        <Container>
          <h2 className="section-title mb-4">You might also like</h2>
          <Row xs={1} sm={2} lg={3} className="g-4">
            {related.map((p) => (
              <Col key={p.id}>
                <ProductCard product={p} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}
