import React from 'react'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    window.open('/JyunRu_Huang_Resume.pdf', '_blank')
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src="/JyunRu_Huang_Headshot.jpg" 
              alt="JyunRu Huang" 
              className="hero-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">JyunRu Huang</span>
              <span className="hero-subtitle">Boston University MSBA | Credit Risk Analyst @ CTBC Bank</span>
            </h1>

            <p className="hero-description">
              <span className="hero-description-line">3+ years of banking credit risk modeling experience</span>
              <span className="hero-description-line">
                Formal training in analytics, machine learning, and deep learning
              </span>
              <span className="hero-description-line hero-description-nowrap">
                Seeking opportunities in data analytics, business analytics, or risk management
              </span>
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={downloadCV}>
                Download CV
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </button>
              <a 
                href="https://github.com/jhuangbp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/jyun-ru-huang-tw/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
