import { Container, Row, Col, Nav } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import products, { categories } from '../data/products.js'
import ProductCard from '../components/ProductCard.jsx'
import PageBanner from '../components/PageBanner.jsx'

export default function Shop() {
  // Keeping the filter in the URL (?category=...) means the Back button and refresh keep the selection
  const [params, setParams] = useSearchParams()
  const active = categories.includes(params.get('category')) ? params.get('category') : 'All Products'

  const selectCategory = (cat) => {
    if (cat === 'All Products') setParams({})
    else setParams({ category: cat })
  }

  const visible = active === 'All Products' ? products : products.filter((p) => p.category === active)

  return (
    <>
      <PageBanner
        crumb="Shop"
        eyebrow="Our Products"
        title="Shop Sustainable Essentials"
        text="Reusable, natural, and affordable alternatives for your everyday routine."
      />

      <section className="section pt-4">
        <Container>
          <div className="filter-bar d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <Nav variant="pills" className="category-filter flex-nowrap" activeKey={active} onSelect={selectCategory}>
              {categories.map((cat) => (
                <Nav.Item key={cat}>
                  <Nav.Link eventKey={cat}>{cat}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <span className="result-count">
              {visible.length} {visible.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          <Row xs={1} sm={2} lg={3} className="g-4">
            {visible.map((p) => (
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
