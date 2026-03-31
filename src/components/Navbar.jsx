import React from 'react'

const Navbar = ({ currentPage, onNavigate }) => {
  const handleClick = (e, page) => {
    e.preventDefault()
    onNavigate(page)
    // Close mobile menu after navigation
    const navCollapse = document.getElementById('navbarNav')
    if (navCollapse && navCollapse.classList.contains('show')) {
      navCollapse.classList.remove('show')
    }
  }

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white fixed-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
        >
          <strong>JH</strong>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
                href="#about"
                onClick={(e) => handleClick(e, 'about')}
              >
                about me
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
                href="#projects"
                onClick={(e) => handleClick(e, 'projects')}
              >
                projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
                href="#contact"
                onClick={(e) => handleClick(e, 'contact')}
              >
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
