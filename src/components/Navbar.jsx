import React, { useState, useEffect } from 'react'
import { withBase } from '../utils/assetPath'
import './Navbar.css'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'case-competition', label: 'Case Competition' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const { scrollHeight } = document.documentElement
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const totalScroll = scrollHeight - windowHeight
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0
      setScrollProgress(progress)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress)
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean)
    if (sections.length === 0) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0.1 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const downloadCV = () => {
    window.open(withBase('JyunRu_Huang_Resume.pdf'), '_blank')
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-progress">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => scrollToSection('hero')}>
          <span>JyunRu Huang</span>
          <span className="navbar-status">Open to opportunities</span>
        </div>
        
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <button className="navbar-cv-btn" onClick={downloadCV}>
          Download CV
        </button>

        <button 
          className="navbar-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
