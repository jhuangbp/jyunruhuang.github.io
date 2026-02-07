import React, { useEffect, useMemo, useState } from 'react'
import { withBase } from '../utils/assetPath'
import './Navbar.css'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'case-competition', label: 'Case' },
  { id: 'skills', label: 'Skills' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' }
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  const sectionIds = useMemo(() => ['hero', ...navItems.map((item) => item.id)], [])

  useEffect(() => {
    const updateNavigationState = () => {
      const y = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const nextProgress = docHeight > 0 ? Math.min((y / docHeight) * 100, 100) : 0

      setIsScrolled(y > 16)
      setScrollProgress(nextProgress)

      if (y + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        setActiveSection(sectionIds[sectionIds.length - 1])
        return
      }

      const position = y + window.innerHeight * 0.38
      let currentSection = 'hero'

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) {
          return
        }

        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight

        if (position >= sectionTop && position < sectionBottom) {
          currentSection = id
        }
      })

      setActiveSection(currentSection)
    }

    updateNavigationState()
    window.addEventListener('scroll', updateNavigationState)
    window.addEventListener('resize', updateNavigationState)

    return () => {
      window.removeEventListener('scroll', updateNavigationState)
      window.removeEventListener('resize', updateNavigationState)
    }
  }, [sectionIds])

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (!element) {
      return
    }

    const navbarOffset = 78
    const targetTop = id === 'hero' ? 0 : element.offsetTop - navbarOffset

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth'
    })

    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
        <div className="navbar-container">
          <button type="button" className="navbar-logo" onClick={() => scrollToSection('hero')}>
            <span className="navbar-logo-mark">JRH</span>
            <span className="navbar-logo-text">Portfolio</span>
          </button>

          <button
            type="button"
            className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-nav-menu"
          >
            <span />
            <span />
            <span />
          </button>

          <div className={`navbar-menu-wrap ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul id="site-nav-menu" className="navbar-menu">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className={`navbar-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <a
              className="navbar-cv-btn"
              href={withBase('JyunRu_Huang_Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
      <button
        type="button"
        className={`navbar-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-label="Close navigation menu"
        aria-hidden={!isMobileMenuOpen}
        tabIndex={isMobileMenuOpen ? 0 : -1}
      />
    </>
  )
}

export default Navbar
