import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import './App.css'

function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '')
    if (['about', 'projects', 'contact'].includes(hash)) return hash
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash())
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = (page) => {
    window.location.hash = page === 'home' ? '' : page
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home onNavigate={navigate} />
    }
  }

  // Warm up Datasette on Render
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
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

export default App
