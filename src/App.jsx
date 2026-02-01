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

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <CaseCompetition />
      <Skills />
      <Certificates />
      <Contact />
    </div>
  )
}

export default App
