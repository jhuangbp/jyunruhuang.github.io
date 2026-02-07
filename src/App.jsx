import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import CaseCompetition from './components/CaseCompetition'
import Skills from './components/Skills'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  useEffect(() => {
    const datasetteUrl = 'https://ds-701-muckrock-data-liberation-project.onrender.com'
    const controller = new AbortController()

    fetch(datasetteUrl, {
      mode: 'no-cors',
      cache: 'no-store',
      signal: controller.signal
    }).catch(() => {})

    return () => controller.abort()
  }, [])

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (revealElements.length === 0) {
      return undefined
    }

    revealElements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index * 70, 320)}ms`)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.16 }
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="App">
      <a className="skip-link" href="#about">
        Skip to main content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <CaseCompetition />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      <BackToTop />
    </div>
  )
}

export default App
