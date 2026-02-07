import React from 'react'
import { withBase } from '../utils/assetPath'
import './Hero.css'

const Hero = () => {
  const highlights = [
    { value: '3+', label: 'Years in banking credit risk' },
    { value: '200+', label: 'Teams surpassed in healthcare case' },
    { value: 'Top 10', label: 'AUC ranking in Humana-Mays 2024' }
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) {
      return
    }

    const targetTop = element.offsetTop - 80
    window.scrollTo({ top: targetTop, behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <aside className="hero-profile card" data-reveal>
          <img src={withBase('JyunRu_Huang_Headshot.jpg')} alt="JyunRu Huang" className="hero-image" />
          <div className="hero-profile-content">
            <p className="hero-profile-label">Currently in Boston, MA</p>
            <p className="hero-profile-copy">Open to data analytics, business analytics, and risk modeling roles.</p>
          </div>
        </aside>

        <div className="hero-content" data-reveal>
          <p className="hero-eyebrow">Business Analytics | Credit Risk Modeling</p>
          <h1 className="hero-title">JyunRu Huang</h1>
          <p className="hero-subtitle">M.S. in Business Analytics, Boston University</p>
          <p className="hero-description">
            Credit risk analyst with formal machine learning training and hands-on model delivery in banking,
            healthcare analytics, and multimodal deep learning.
          </p>

          <div className="hero-actions">
            <a
              className="hero-btn hero-btn-primary"
              href={withBase('JyunRu_Huang_Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <button type="button" className="hero-btn hero-btn-secondary" onClick={() => scrollToSection('projects')}>
              Explore Projects
            </button>
            <button type="button" className="hero-btn hero-btn-ghost" onClick={() => scrollToSection('contact')}>
              Contact
            </button>
          </div>

          <div className="hero-social-links">
            <a href="https://github.com/jhuangbp" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jyun-ru-huang-tw/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="mailto:jhuangbp@bu.edu">jhuangbp@bu.edu</a>
          </div>

          <div className="hero-highlights">
            {highlights.map((item) => (
              <article key={item.label} className="hero-highlight card" data-reveal>
                <p className="hero-highlight-value">{item.value}</p>
                <p className="hero-highlight-label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
