import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from 'react-icons/fi'
import Logo from './Logo.jsx'
import store, { emailHref, phoneHref } from '../data/store.js'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <Row className="gy-4 pb-4">
          <Col lg={5} md={12}>
            <Logo size={44} light />
            <p className="footer-tagline mt-3 mb-4">“Inspired by Nature, Made for Living.”</p>
            <div className="d-flex flex-wrap gap-2">
              <a href={emailHref} className="footer-chip">
                <FiMail size={16} /> {store.email}
              </a>
              <a href={phoneHref} className="footer-chip">
                <FiPhone size={16} /> {store.phone}
              </a>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <h6 className="footer-heading">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </Col>
          <Col lg={4} sm={6}>
            <h6 className="footer-heading">Contact Details</h6>
            <ul className="list-unstyled footer-links">
              <li className="d-flex align-items-center gap-2"><FiMapPin /> {store.location}</li>
              <li>
                <Link to="/contact" className="d-inline-flex align-items-center gap-2">
                  Send us a message <FiArrowRight />
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom text-center">© 2026 KALIKHA. All Rights Reserved.</div>
      </Container>
    </footer>
  )
}
