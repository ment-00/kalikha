import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { getProductById } from '../data/products.js'

// Each habit is matched with the KALIKHA product that replaces it
const habits = [
  { key: 'bags', label: 'Plastic bags', unit: 'plastic bags', swapId: 'bayan-tote-bag' },
  { key: 'bottles', label: 'Plastic bottles', unit: 'plastic bottles', swapId: 'ecosip-reusable-bottle' },
  { key: 'produce', label: 'Plastic produce bags', unit: 'plastic produce bags', swapId: 'mesh-produce-bags' },
]

const MAX_PER_WEEK = 30
const TOTAL_LEAVES = 9

// Leaf positions along the plant stem: [side (-1 left, 1 right, 0 top), y, upward tilt in degrees]
const leafSpots = [
  [-1, 200, 25], [1, 186, 25], [-1, 166, 30], [1, 150, 30],
  [-1, 128, 35], [1, 112, 35], [-1, 90, 40], [1, 74, 40], [0, 58, 0],
]

export default function ImpactCalculator() {
  const [habitKey, setHabitKey] = useState('bags')
  const [perWeek, setPerWeek] = useState(7)

  const habit = habits.find((h) => h.key === habitKey)
  const swap = getProductById(habit.swapId)
  const perYear = perWeek * 52
  const leaves = Math.max(1, Math.round((perWeek / MAX_PER_WEEK) * TOTAL_LEAVES))
  const stemTop = leafSpots[leaves - 1][1] - 4

  return (
    <div className="impact-card">
      <Row className="align-items-center g-4">
        <Col lg={7}>
          <p className="eyebrow">Your Impact</p>
          <h2 className="section-title mb-3">See what one small swap can do</h2>
          <p className="impact-intro">Pick a habit and move the slider to see how many single-use items you could skip in a year.</p>

          <div className="habit-toggle" role="radiogroup" aria-label="Choose a habit">
            {habits.map((h) => (
              <button
                key={h.key}
                type="button"
                role="radio"
                aria-checked={h.key === habitKey}
                className={`habit-btn ${h.key === habitKey ? 'active' : ''}`}
                onClick={() => setHabitKey(h.key)}
              >
                {h.label}
              </button>
            ))}
          </div>

          <Form.Group controlId="perWeek" className="mt-4">
            <Form.Label className="d-flex justify-content-between">
              <span>{habit.label} I use per week</span>
              <span className="impact-value">{perWeek}</span>
            </Form.Label>
            <Form.Range
              min={1}
              max={MAX_PER_WEEK}
              value={perWeek}
              onChange={(e) => setPerWeek(Number(e.target.value))}
              className="impact-range"
              style={{ '--fill': `${((perWeek - 1) / (MAX_PER_WEEK - 1)) * 100}%` }}
            />
          </Form.Group>

          <div className="impact-result">
            <div className="impact-number">{perYear.toLocaleString('en-PH')}</div>
            <div>
              <strong>{habit.unit} a year</strong> you could skip by switching to the{' '}
              <Link to={`/shop/${swap.id}`}>{swap.name}</Link>.
            </div>
          </div>

          <Button as={Link} to={`/shop/${swap.id}`} variant="forest" className="mt-4 d-inline-flex align-items-center gap-2">
            Make the swap · ₱{swap.price} <FiArrowRight />
          </Button>
        </Col>

        <Col lg={5}>
          {/* The plant grows a leaf as the number goes up */}
          <svg className="impact-plant" viewBox="0 0 240 300" role="img" aria-label={`A plant with ${leaves} leaves`}>
            <circle cx="120" cy="150" r="112" fill="#DFE8DC" />
            <path d={`M120 232 C ${118} ${(232 + stemTop) / 2}, ${122} ${(232 + stemTop) / 2}, 120 ${stemTop}`} stroke="#245B45" strokeWidth="5" fill="none" strokeLinecap="round" className="plant-stem" />
            {leafSpots.map(([side, y, tilt], i) => {
              const shown = i < leaves
              return (
                <g key={i} transform={`translate(${120 + side * 2} ${y}) rotate(${-side * tilt})`}>
                  <path
                    d={side === 0 ? 'M0 0C-14-12-14-30 0-42 14-30 14-12 0 0z' : `M0 0C${side * 14}-10 ${side * 34}-12 ${side * 46} 0 ${side * 34} 12 ${side * 14} 10 0 0z`}
                    fill={i % 2 ? '#245B45' : '#3F7A5E'}
                    className={`plant-leaf ${shown ? 'shown' : ''}`}
                    style={{
                      transitionDelay: shown ? `${i * 40}ms` : '0ms',
                      transformOrigin: side === 0 ? 'center bottom' : side < 0 ? 'right center' : 'left center',
                    }}
                  />
                </g>
              )
            })}
            <path d="M78 232h84l-10 52H88z" fill="#70543E" />
            <rect x="70" y="224" width="100" height="16" rx="6" fill="#5A4230" />
          </svg>
        </Col>
      </Row>
    </div>
  )
}
