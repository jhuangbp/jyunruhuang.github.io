import React, { useState } from 'react'
import { withBase } from '../utils/assetPath'
import './Experience.css'

const experiences = [
  {
    id: 1,
    company: 'CTBC Bank (Leading Private Commercial Bank in Taiwan)',
    logo: withBase('logo/ctbc_bank.png'),
    logoAlt: 'CTBC Bank logo',
    position: 'Retail Credit Risk Analyst',
    period: 'Jul 2020 - May 2023',
    location: 'Taipei City, Taiwan',
    bullets: [
      'Built loss forecasting models for mortgage loans; reduced 16,000 candidate predictors to 10 key variables with SAS macros.',
      'Improved model discrimination by 18 percent based on Gini coefficient benchmarking.',
      'Led typhoon flood impact research by integrating internal mortgage data with external weather and GIS sources, resulting in a patented geographic risk model.',
      'Owned three cross-functional risk analysis projects for mortgage and personal loan portfolios.'
    ]
  },
  {
    id: 2,
    company: 'Taipei Fubon Commercial Bank',
    logo: withBase('logo/fubon-bank.jpg'),
    logoAlt: 'Taipei Fubon Commercial Bank logo',
    position: 'Institutional Credit Risk Analyst',
    period: 'Jul 2019 - Jun 2020',
    location: 'Taipei City, Taiwan',
    bullets: [
      'Performed industry and financial statement analysis for eight corporate lending cases totaling over USD 100 million exposure.',
      'Extended Excel VBA forecasting templates from large corporates to broader company profiles across industries.'
    ]
  },
  {
    id: 3,
    company: 'E.Sun Commercial Bank',
    logo: withBase('logo/E-Sun-logo.jpg.png'),
    logoAlt: 'E.Sun Commercial Bank logo',
    position: 'Credit Card Marketing Intern',
    period: 'Jul 2018 - Aug 2018',
    location: 'Taipei City, Taiwan',
    bullets: [
      'Supported marketing analysis for a customer base exceeding 4 million using SQL and RFM/cohort segmentation.',
      'Proposed a new credit card dashboard concept adopted by the mobile banking UI team after internship delivery.'
    ]
  }
]

const Experience = () => {
  const [expandedId, setExpandedId] = useState(experiences[0].id)

  return (
    <section id="experience" className="experience" data-reveal>
      <h2 className="section-title">Experience</h2>
      <div className="experience-list">
        {experiences.map((experience) => {
          const isExpanded = expandedId === experience.id

          return (
            <article key={experience.id} className="experience-item card" data-reveal>
              <header className="experience-header">
                <img className="experience-logo" src={experience.logo} alt={experience.logoAlt} loading="lazy" />

                <div className="experience-title-group">
                  <h3 className="experience-position">{experience.position}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <div className="experience-meta">
                    <span>{experience.period}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="experience-toggle"
                  onClick={() => setExpandedId(isExpanded ? -1 : experience.id)}
                  aria-expanded={isExpanded}
                >
                  {isExpanded ? 'Hide details' : 'Show details'}
                </button>
              </header>

              <ul className={`experience-bullets ${isExpanded ? 'open' : ''}`}>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience
