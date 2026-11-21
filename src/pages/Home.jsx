import { useRef } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiRefreshCw, FiTag, FiHeart } from 'react-icons/fi'
import products from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import ProductImg from '../components/ProductImg.jsx'
import VideoShowcase from '../components/VideoShowcase.jsx'
import ImpactCalculator from '../components/ImpactCalculator.jsx'
import Reveal from '../components/Reveal.jsx'
import heroBg from '../assets/hero-bg.svg'

const featured = products.filter((p) => p.featured)
const lowestPrice = Math.min(...products.map((p) => p.price))
const heroCollage = ['bayan-tote-bag', 'ecosip-reusable-bottle', 'bamboo-cup-set', 'cococlean-natural-soap']
  .map((id) => products.find((p) => p.id === id))
  .filter(Boolean)

const reasons = [
  {
    icon: FiRefreshCw,
    title: 'Eco-Friendly Choices',
    text: 'Discover reusable and sustainable alternatives for everyday needs.',
  },
  {
    icon: FiTag,
    title: 'Affordable Essentials',
    text: 'Make environmentally responsible shopping accessible to more Filipinos.',
  },
  {
    icon: FiHeart,
    title: 'Support Sustainable Living',
    text: 'Encourage conscious consumption and responsible everyday habits.',
  },
]

export default function Home() {
  const heroRef = useRef(null)

  // Hero collage drifts slightly with the mouse (CSS variables read in App.css)
  const handleHeroMove = (e) => {
    const el = heroRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width - 0.5).toFixed(3))
    el.style.setProperty('--my', ((e.clientY - rect.top) / rect.height - 0.5).toFixed(3))
  }
  const resetHero = () => {
    heroRef.current?.style.setProperty('--mx', 0)
    heroRef.current?.style.setProperty('--my', 0)
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        onMouseMove={handleHeroMove}
        onMouseLeave={resetHero}
      >
        <div className="hero-overlay" />
        <Container className="position-relative">
          <Row className="align-items-center min-hero">
            <Col lg={6} className="py-5">
              <p className="eyebrow">Sustainable Filipino Essentials</p>
              <h1 className="hero-title">
                Live Naturally. <br />
                <span>Choose Sustainably.</span>
              </h1>
              <p className="hero-text">
                Discover thoughtfully selected everyday essentials that make sustainable living easier, more
                affordable, and accessible to every Filipino.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Button as={Link} to="/shop" variant="forest" size="lg" className="px-4">
                  Shop Now
                </Button>
                <Button as={Link} to="/about" variant="outline-forest" size="lg" className="px-4">
                  Discover Our Story
                </Button>
              </div>
              <div className="hero-stats d-flex gap-4 mt-5">
                <div><strong>{products.length}</strong><span>everyday essentials</span></div>
                <div><strong>₱{lowestPrice}+</strong><span>affordable prices</span></div>
                <div><strong>100%</strong><span>reusable or natural</span></div>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="hero-collage">
                {heroCollage.map((p, i) => (
                  <div key={p.id} className={`collage-slot collage-${i + 1}`} style={{ '--depth': [18, 30, 24, 36][i] }}>
                    <Link to={`/shop/${p.id}`} className="collage-item" aria-label={p.name}>
                      <ProductImg product={p} />
                    </Link>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="section">
        <Container>
          <div className="section-head d-flex flex-wrap justify-content-between align-items-end gap-3">
            <div>
              <p className="eyebrow">Featured Products</p>
              <h2 className="section-title">Everyday swaps we love</h2>
            </div>
            <Link to="/shop" className="text-link d-inline-flex align-items-center gap-1">
              View all products <FiArrowRight />
            </Link>
          </div>
          <Row xs={1} sm={2} lg={4} className="g-4">
            {featured.map((p, i) => (
              <Col key={p.id}>
                <Reveal delay={i * 80} className="h-100">
                  <ProductCard product={p} showAddToCart={false} viewLabel="View Product" />
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== VIDEO ===== */}
      <section className="section video-section">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={4}>
              <Reveal>
                <p className="eyebrow eyebrow-light">Meet KALIKHA</p>
                <h2 className="section-title text-cream mb-3">Every small choice makes a difference.</h2>
                <p className="video-text">
                  Watch our short film and see how simple, everyday swaps can make sustainable living part of your
                  routine.
                </p>
                <Button as={Link} to="/shop" variant="cream" className="mt-2">
                  Shop the Collection
                </Button>
              </Reveal>
            </Col>
            <Col lg={8}>
              <Reveal delay={120}>
                <VideoShowcase />
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== WHY CHOOSE KALIKHA ===== */}
      <section className="section section-beige leaf-pattern">
        <Container>
          <div className="text-center mb-5">
            <p className="eyebrow">Why Choose KALIKHA?</p>
            <h2 className="section-title">Sustainable living, made simple</h2>
          </div>
          <Row xs={1} md={3} className="g-4">
            {reasons.map(({ icon: Icon, title, text }, i) => (
              <Col key={title}>
                <Reveal delay={i * 100} className="h-100">
                <div className="feature-card h-100">
                  <div className="feature-icon">
                    <Icon size={26} />
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== IMPACT CALCULATOR ===== */}
      <section className="section pb-0">
        <Container>
          <Reveal>
            <ImpactCalculator />
          </Reveal>
        </Container>
      </section>

      {/* ===== MISSION BANNER ===== */}
      <section className="section">
        <Container>
          <Reveal className="mission-banner">
            <svg className="mission-leaf" viewBox="0 0 200 200" aria-hidden="true">
              <path d="M100 190C40 150 30 70 100 10c70 60 60 140 0 180z" fill="currentColor" />
              <path d="M100 30v160M100 90l-30-25M100 125l35-30M100 160l-25-20" stroke="#245B45" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
            <Row className="align-items-center position-relative">
              <Col lg={8}>
                <h2 className="mission-title">Small Choices. Meaningful Changes.</h2>
                <p className="mission-text mb-lg-0">
                  Every sustainable choice brings us one step closer to a greener future. Start your journey with
                  KALIKHA.
                </p>
              </Col>
              <Col lg={4} className="text-lg-end">
                <Button as={Link} to="/shop" variant="cream" size="lg" className="px-4">
                  Shop Now
                </Button>
              </Col>
            </Row>
          </Reveal>
        </Container>
      </section>
    </>
  )
}
