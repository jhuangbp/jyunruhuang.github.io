import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <div className="contact-details">
            <div className="contact-item">
              <strong>Email:</strong>
              <a href="mailto:jhuangbp@bu.edu">jhuangbp@bu.edu</a>
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
    </section>
  )
}

export default Contact
