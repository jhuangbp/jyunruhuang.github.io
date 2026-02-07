import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isCopied, setIsCopied] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCopyEmail = async () => {
    const email = 'jhuangbp@bu.edu';
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `Portfolio contact from ${formData.name}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    const mailtoLink = `mailto:jhuangbp@bu.edu?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <p className="section-eyebrow">Connect</p>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let’s connect about analytics, business intelligence, or risk management opportunities.
        </p>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <div className="contact-action">
                  <a href="mailto:jhuangbp@bu.edu">jhuangbp@bu.edu</a>
                  <button type="button" className="copy-btn" onClick={handleCopyEmail}>
                    {isCopied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>
                <a 
                  href="https://www.linkedin.com/in/jyun-ru-huang-tw/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/jyunru-huang
                </a>
              </div>
              <div className="contact-item">
                <strong>GitHub:</strong>
                <a 
                  href="https://github.com/jhuangbp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  github.com/jhuangbp
                </a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong>
                <span>Boston, Massachusetts</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
