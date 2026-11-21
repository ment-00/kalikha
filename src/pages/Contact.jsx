import { useState } from 'react'
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { FiMail, FiPhone, FiMapPin, FiShoppingBag, FiSend } from 'react-icons/fi'
import PageBanner from '../components/PageBanner.jsx'
import store, { emailHref, phoneHref } from '../data/store.js'

const contactInfo = [
  { icon: FiShoppingBag, label: 'Business Name', value: store.name },
  { icon: FiMail, label: 'Email', value: store.email, href: emailHref },
  { icon: FiPhone, label: 'Phone', value: store.phone, href: phoneHref },
  { icon: FiMapPin, label: 'Location', value: store.location },
]

const emptyForm = { name: '', email: '', subject: '', message: '' }
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!emailPattern.test(form.email.trim())) errors.email = 'Please enter a valid email address.'
  if (form.subject.trim().length < 3) errors.subject = 'Please enter a subject.'
  if (form.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [sentName, setSentName] = useState('')

  const handleChange = (e) => {
    const next = { ...form, [e.target.name]: e.target.value }
    setForm(next)
    // Re-check live once the user has tried submitting
    if (submitted) setErrors(validate(next))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    setSubmitted(true)
    if (Object.keys(found).length === 0) {
      // No email service is connected for this prototype
      setSentName(form.name.trim().split(' ')[0])
      setForm(emptyForm)
      setSubmitted(false)
    }
  }

  const fieldProps = (name) => ({
    name,
    value: form[name],
    onChange: handleChange,
    isInvalid: !!errors[name],
    isValid: submitted && !errors[name],
  })

  return (
    <>
      <PageBanner
        crumb="Contact Us"
        eyebrow="Contact Us"
        title="We'd Love to Hear From You!"
        text="Have questions about our products or want to learn more about sustainable living? Send us a message. We're happy to help!"
      />

      <section className="section pt-4">
        <Container>
          <Row className="g-4">
            <Col lg={5}>
              <div className="contact-info-card h-100">
                <h2 className="contact-heading">Contact Information</h2>
                <p className="contact-sub">Reach us through any of these channels.</p>
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="contact-row">
                    <span className="contact-icon"><Icon size={20} /></span>
                    <div>
                      <div className="contact-label">{label}</div>
                      <div className="contact-value">{href ? <a href={href}>{value}</a> : value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col lg={7}>
              <div className="contact-form-card">
                <h2 className="contact-heading">Send Us a Message</h2>
                {sentName && (
                  <Alert variant="success" className="success-alert" dismissible onClose={() => setSentName('')}>
                    <strong>Thank you, {sentName}!</strong> Your message has been sent successfully. We'll get back to you
                    soon.
                  </Alert>
                )}
                <Form noValidate onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control placeholder="e.g. Juan Dela Cruz" {...fieldProps('name')} />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="you@example.com" {...fieldProps('email')} />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control placeholder="What is your message about?" {...fieldProps('subject')} />
                    <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={5} placeholder="Write your message here..." {...fieldProps('message')} />
                    <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                  </Form.Group>
                  <Button type="submit" variant="forest" size="lg" className="px-4 d-inline-flex align-items-center gap-2">
                    <FiSend /> Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
