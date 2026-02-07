import React from 'react'
import { withBase } from '../utils/assetPath'
import './Hero.css'

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    window.open(withBase('JyunRu_Huang_Resume.pdf'), '_blank')
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <img 
              src={withBase('JyunRu_Huang_Headshot.jpg')} 
              alt="JyunRu Huang" 
              className="hero-image"
            />
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="hero-name">JyunRu Huang</span>
              <span className="hero-subtitle">Boston University MSBA | Credit Risk Analyst @ CTBC Bank</span>
            </h1>

            <div className="hero-badges">
              <span>Risk Modeling</span>
              <span>Business Analytics</span>
              <span>Machine Learning</span>
            </div>

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

            <div className="hero-stats">
              <div>
                <span className="stat-value">3+ Years</span>
                <span className="stat-label">Credit risk analytics</span>
              </div>
              <div>
                <span className="stat-value">1 Patent</span>
                <span className="stat-label">Geospatial model</span>
              </div>
              <div>
                <span className="stat-value">MSBA 2026</span>
                <span className="stat-label">Boston University</span>
              </div>
            </div>

            <button
              className="hero-scroll"
              type="button"
              onClick={() => scrollToSection('about')}
              aria-label="Scroll to about section"
            >
              <span>Scroll to explore</span>
              <span className="hero-scroll-arrow">↓</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
