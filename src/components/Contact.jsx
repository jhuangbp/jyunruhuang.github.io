import React, { useState } from 'react'
import { withBase } from '../utils/assetPath'
import './Contact.css'

const CONTACT_EMAIL = 'jhuangbp@bu.edu'

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = `Portfolio contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormData({ name: '', email: '', message: '' })
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 1400)
    } catch (_error) {
      window.location.href = `mailto:${CONTACT_EMAIL}`
    }
  }

  return (
    <section id="contact" className="contact" data-reveal>
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">
        <article className="contact-panel card" data-reveal>
          <h3>Contact Information</h3>
          <p>
            I am currently based in Boston and open to full-time data analytics, business analytics, or risk
            management opportunities.
          </p>

          <div className="contact-actions">
            <button type="button" onClick={copyEmail}>
              {isCopied ? 'Email Copied' : 'Copy Email'}
            </button>
            <a href={`mailto:${CONTACT_EMAIL}`}>Send Direct Email</a>
            <a href={withBase('JyunRu_Huang_Resume.pdf')} target="_blank" rel="noopener noreferrer">
              Open Resume
            </a>
          </div>

          <div className="contact-links">
            <a href="https://www.linkedin.com/in/jyun-ru-huang-tw/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/jhuangbp" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </article>

        <form className="contact-form card" onSubmit={handleSubmit} data-reveal>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            maxLength="700"
            required
          />
          <p className="contact-count">{formData.message.length} / 700</p>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
