import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LogoMark } from '../components/Logo.jsx'

export default function NotFound() {
  return (
    <section className="section">
      <Container className="text-center py-5">
        <LogoMark size={90} />
        <h1 className="section-title mt-4">Page not found</h1>
        <p className="text-muted mb-4">The page you’re looking for doesn’t exist or may have moved.</p>
        <div className="d-flex justify-content-center gap-3">
          <Button as={Link} to="/" variant="outline-forest">Back to Home</Button>
          <Button as={Link} to="/shop" variant="forest">Go to Shop</Button>
        </div>
      </Container>
    </section>
  )
}
