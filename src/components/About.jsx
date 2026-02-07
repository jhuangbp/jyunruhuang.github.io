import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <p className="section-eyebrow">Profile</p>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Credit risk analyst turned analytics specialist with a focus on building predictive systems that
          translate complex data into actionable decisions.
        </p>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hi, I am Jyun-Ru (Jin). I am currently completing an M.S. in Business Analytics at Boston University’s Questrom School of Business. Previously, I spent nearly three years at CTBC Bank, Taiwan’s largest bank, as a Retail Credit Risk Analyst, where I developed internal loss forecasting models for mortgage and personal loans using SAS and SQL. Notably, I led a geospatial risk research project that integrated meteorological open data with internal mortgage data to quantify typhoon flood impacts on collateral, resulting in a patented geographic risk model in Taiwan.
            </p>
            <p>
              During my graduate studies, I developed a multimodal deep learning model to predict IMDb movie ratings using movie plot summaries and poster images, without relying on audience reviews or box office information. This project integrated Python and PyTorch and utilized cloud-based GPU acceleration, representing the culmination of my graduate training in analytics.
            </p>
            <p>
              I am enthusiastic about applying my analytical skills and banking industry experience to drive data-driven innovation in business analytics and risk management.
            </p>
          </div>

          <div className="about-metrics">
            <div className="about-metric">
              <span className="metric-value">3+ Years</span>
              <span className="metric-label">Credit risk modeling</span>
            </div>
            <div className="about-metric">
              <span className="metric-value">200+ Teams</span>
              <span className="metric-label">Case competition finalist</span>
            </div>
            <div className="about-metric">
              <span className="metric-value">1 Patent</span>
              <span className="metric-label">Geospatial risk research</span>
            </div>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <h3>Employment status</h3>
              <ul className="check-list">
                <li>Boston University — M.S. in Business Analytics</li>
                <li>Graduating in January 2026</li>
                <li>Available to start immediately</li>
              </ul>
            </div>
            <div className="highlight-card">
              <h3>Skills snapshot</h3>
              <ul className="skills-list">
                <li>Python</li>
                <li>SQL</li>
                <li>Tableau</li>
                <li>PyTorch</li>
                <li>TensorFlow</li>
                <li>SAS</li>
                <li>PySpark</li>
                <li>Esri ArcGIS</li>
                <li>Google Cloud Platform</li>
                <li>Excel VBA Programming</li>
              </ul>
            </div>
            <div className="highlight-card">
              <h3>Focus areas</h3>
              <ul className="check-list">
                <li>Credit risk modeling for mortgage and personal loans</li>
                <li>Patented geospatial risk model with external data enrichment</li>
                <li>End-to-end deep learning framework development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
