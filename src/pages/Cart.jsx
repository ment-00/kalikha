import { useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiArrowLeft, FiShoppingBag, FiCheckCircle } from 'react-icons/fi'
import { useCart } from '../context/CartContext.jsx'
import CartItem from '../components/CartItem.jsx'
import PageBanner from '../components/PageBanner.jsx'
import { formatPeso } from '../data/products.js'

const FREE_SHIPPING_MIN = 500
// Set a fee here (e.g. 60) to charge shipping on orders below FREE_SHIPPING_MIN
const SHIPPING_FEE = 0

export default function Cart() {
  const { items, itemCount, total, clearCart } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  const shipping = total === 0 || total >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE
  const grandTotal = total + shipping

  const finishCheckout = () => {
    setShowCheckout(false)
    clearCart()
  }

  return (
    <>
      <PageBanner crumb="Cart" title="Your Shopping Cart" text={itemCount ? `${itemCount} item${itemCount > 1 ? 's' : ''} in your cart` : undefined} />

      <section className="section pt-4">
        <Container>
          {items.length === 0 ? (
            <div className="empty-cart text-center">
              <div className="empty-icon"><FiShoppingBag size={40} /></div>
              <h2>Your cart is empty</h2>
              <p>Start your sustainable journey with a few everyday swaps.</p>
              <Button as={Link} to="/shop" variant="forest" size="lg" className="px-4">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <Row className="g-4">
              <Col lg={8}>
                <div className="cart-panel">
                  <div className="cart-head d-none d-md-grid">
                    <span>Product</span>
                    <span>Quantity</span>
                    <span className="text-end">Subtotal</span>
                    <span />
                  </div>
                  {items.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
                <Button as={Link} to="/shop" variant="link" className="back-link mt-3 px-0 d-inline-flex align-items-center gap-2">
                  <FiArrowLeft /> Continue Shopping
                </Button>
              </Col>

              <Col lg={4}>
                <div className="summary-card">
                  <h2 className="summary-title">Order Summary</h2>
                  <div className="summary-row">
                    <span>Items ({itemCount})</span>
                    <span>{formatPeso(total)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : formatPeso(shipping)}</span>
                  </div>
                  {shipping > 0 && SHIPPING_FEE > 0 && (
                    <p className="summary-hint">
                      Add {formatPeso(FREE_SHIPPING_MIN - total)} more for free shipping.
                    </p>
                  )}
                  <div className="summary-row summary-total">
                    <span>Total</span>
                    <span>{formatPeso(grandTotal)}</span>
                  </div>
                  <Button variant="forest" size="lg" className="w-100 mt-3" onClick={() => setShowCheckout(true)}>
                    Proceed to Checkout
                  </Button>
                  <Button as={Link} to="/shop" variant="outline-forest" className="w-100 mt-2">
                    Continue Shopping
                  </Button>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Checkout confirmation (no payment gateway is connected) */}
      <Modal show={showCheckout} onHide={() => setShowCheckout(false)} centered>
        <Modal.Body className="text-center p-5">
          <FiCheckCircle size={52} className="text-forest mb-3" />
          <h3 className="section-title fs-3 mb-4">Salamat sa pagpili sa KALIKHA!</h3>
          <Button variant="forest" onClick={finishCheckout}>
            Done
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}
