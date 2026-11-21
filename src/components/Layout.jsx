import { useEffect } from 'react'
import { Outlet, useLocation, Link } from 'react-router-dom'
import { Toast, ToastContainer } from 'react-bootstrap'
import { FiCheckCircle } from 'react-icons/fi'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useCart } from '../context/CartContext.jsx'
import ProductImg from './ProductImg.jsx'

export default function Layout() {
  const { pathname } = useLocation()
  const { toast, dismissToast } = useCart()

  // Start each page at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />

      {/* "Added to cart" confirmation shown on every page */}
      <ToastContainer position="bottom-end" className="p-3 position-fixed" style={{ zIndex: 1080 }}>
        <Toast key={toast?.key} show={!!toast} onClose={dismissToast} delay={2800} autohide className="cart-toast">
          {toast && (
            <Toast.Body className="d-flex align-items-center gap-3">
              <ProductImg product={toast.product} alt="" className="toast-img" />
              <div className="flex-grow-1">
                <div className="d-flex align-items-center gap-1 toast-title">
                  <FiCheckCircle /> Added to cart
                </div>
                <div className="small">
                  {toast.quantity} × {toast.product.name}
                </div>
              </div>
              <Link to="/cart" className="toast-link" onClick={dismissToast}>
                View cart
              </Link>
            </Toast.Body>
          )}
        </Toast>
      </ToastContainer>
    </div>
  )
}
