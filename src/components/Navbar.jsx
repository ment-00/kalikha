import { useState } from 'react'
import { Navbar as BsNavbar, Nav, Container, Badge } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { FiShoppingBag } from 'react-icons/fi'
import Logo from './Logo.jsx'
import { useCart } from '../context/CartContext.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [expanded, setExpanded] = useState(false)
  const { itemCount } = useCart()
  const close = () => setExpanded(false)

  return (
    <BsNavbar expand="lg" sticky="top" className="site-nav" expanded={expanded} onToggle={setExpanded}>
      <Container>
        <BsNavbar.Brand as={Link} to="/" onClick={close} aria-label="KALIKHA home">
          <Logo size={38} tagline />
        </BsNavbar.Brand>

        <div className="d-flex align-items-center gap-2 order-lg-last">
          <Link to="/cart" className="cart-btn" onClick={close} aria-label={`Shopping cart, ${itemCount} items`}>
            <FiShoppingBag size={22} />
            {itemCount > 0 && (
              <Badge pill className="cart-badge">
                {itemCount}
              </Badge>
            )}
          </Link>
          <BsNavbar.Toggle aria-controls="main-nav" className="nav-toggle" />
        </div>

        <BsNavbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-lg-3">
            {links.map((link) => (
              <Nav.Link key={link.to} as={NavLink} to={link.to} end={link.end} onClick={close} className="site-link">
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  )
}
