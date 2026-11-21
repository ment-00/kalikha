import { Container, Row, Col, Card } from 'react-bootstrap'
import { FiGlobe, FiUnlock, FiShield, FiUsers, FiTarget, FiEye } from 'react-icons/fi'
import PageBanner from '../components/PageBanner.jsx'
import { LogoMark } from '../components/Logo.jsx'

const values = [
  { icon: FiGlobe, title: 'Sustainability', text: 'We choose products that reduce waste and respect the environment.' },
  { icon: FiUnlock, title: 'Accessibility', text: 'Eco-friendly living should be affordable and easy for every Filipino.' },
  { icon: FiShield, title: 'Responsibility', text: 'We are mindful of the impact of every product we offer.' },
  { icon: FiUsers, title: 'Community', text: 'Small changes grow when we make them together.' },
]

// Team photos live in public/images/team/
const team = [
  {
    name: 'Angelika Juan',
    photo: '/images/team/angelika-juan.jpg',
    role: 'Co-Founder · Brand & Marketing',
    section: 'BSIT 3 - A',
  },
  {
    name: 'John Clement Navarro',
    photo: '/images/team/john-clement-navarro.jpg',
    role: 'Co-Founder · Website & Operations',
    section: 'BSIT 3 - A',
  },
  {
    name: 'Raven Glaze Moldes',
    photo: '/images/team/raven-glaze-moldes.jpg',
    role: 'Co-Founder · Products & Sourcing',
    section: 'BSIT 3 - A',
  },
]

export default function About() {
  return (
    <>
      <PageBanner
        crumb="About Us"
        eyebrow="About KALIKHA"
        title="Inspired by Nature, Made for Living."
        text="Get to know the story, mission, and people behind KALIKHA."
      />

      {/* ===== OUR STORY ===== */}
      <section className="section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={5}>
              <div className="story-visual">
                <LogoMark size={190} />
              </div>
            </Col>
            <Col lg={7}>
              <p className="eyebrow">Our Story</p>
              <h2 className="section-title mb-4">Sustainable living, made simple</h2>
              <p className="story-text">
                KALIKHA was founded on the belief that sustainable living should be simple, practical, and accessible
                to everyone. Inspired by the beauty of nature and the importance of protecting our environment, we
                created an online shop that brings together reusable, eco-friendly, and everyday essentials. Through
                our products, we hope to encourage Filipinos to make more conscious choices and develop habits that
                contribute to a cleaner and greener future.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="section section-beige leaf-pattern">
        <Container>
          <Row xs={1} md={2} className="g-4">
            <Col>
              <div className="mv-card h-100">
                <div className="mv-icon"><FiTarget size={26} /></div>
                <h2>Our Mission</h2>
                <p>
                  To make sustainable living more accessible by providing affordable, practical, and environmentally
                  friendly products that encourage responsible everyday choices among Filipinos.
                </p>
              </div>
            </Col>
            <Col>
              <div className="mv-card mv-card-dark h-100">
                <div className="mv-icon"><FiEye size={26} /></div>
                <h2>Our Vision</h2>
                <p>
                  To become a trusted Filipino online destination for sustainable essentials, inspiring individuals and
                  communities to embrace environmentally responsible lifestyles.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== CORE VALUES ===== */}
      <section className="section">
        <Container>
          <div className="text-center mb-5">
            <p className="eyebrow">What We Stand For</p>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <Row xs={1} sm={2} lg={4} className="g-4">
            {values.map(({ icon: Icon, title, text }) => (
              <Col key={title}>
                <div className="value-card h-100">
                  <div className="feature-icon"><Icon size={24} /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* ===== MEET OUR TEAM ===== */}
      <section className="section team-section">
        <Container>
          <div className="text-center mb-5">
            <p className="eyebrow eyebrow-light">The People Behind KALIKHA</p>
            <h2 className="section-title text-cream">Meet Our Team</h2>
          </div>
          <Row xs={1} md={3} className="g-4 justify-content-center">
            {team.map(({ name, photo, role, section }) => (
              <Col key={name}>
                <Card className="team-card h-100">
                  <Card.Body className="d-flex flex-column align-items-center text-center">
                    <div className="team-avatar">
                      <img src={photo} alt={`Photo of ${name}`} loading="lazy" />
                      <span className="team-leaf" aria-hidden="true">
                        <LogoMark size={22} color="#FFFDF5" accent="#245B45" />
                      </span>
                    </div>
                    <h3 className="team-name">{name}</h3>
                    <p className="team-role">KALIKHA Team Member</p>
                    <p className="team-position">{role}</p>
                    <p className="team-course">{section}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}
