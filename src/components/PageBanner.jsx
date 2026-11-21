import { Container, Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// Shared page header so every inner page opens the same way
export default function PageBanner({ eyebrow, title, text, crumb }) {
  return (
    <section className="page-banner leaf-pattern">
      <Container>
        {crumb && (
          <Breadcrumb className="mb-2">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: '/' }}>Home</Breadcrumb.Item>
            <Breadcrumb.Item active>{crumb}</Breadcrumb.Item>
          </Breadcrumb>
        )}
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="page-title">{title}</h1>
        {text && <p className="page-text">{text}</p>}
      </Container>
    </section>
  )
}
