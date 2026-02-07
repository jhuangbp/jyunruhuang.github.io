import React from 'react'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: 'CTBC Bank (a leading private commercial bank in Taiwan)',
      logo: '/logo/ctbc_bank.png',
      logoAlt: 'CTBC Bank logo',
      position: 'Retail Credit Risk Analyst',
      period: 'Jul 2020 – May 2023',
      location: 'Taipei City, Taiwan',
      bullets: [
        'Developed loss forecasting models for mortgage loans, streamlining the process by narrowing 16,000 predictors to 10 key variables with SAS Macros, and increasing model discrimination by 18% (measured by Gini coefficient).',
        'Led research and modeling of typhoon flood impact on mortgage collateral by analyzing meteorological open data with ArcGIS (geographic information analysis software), resulting in a patented geographic risk model in Taiwan',
        'Owned three risk analysis projects for mortgage and personal loans as a Management Associate, with one key finding successfully implemented after years of internal discussion.'
      ]
    },
    {
      id: 2,
      company: 'Taipei Fubon Commercial Bank',
      logo: '/logo/fubon-bank.jpg',
      logoAlt: 'Taipei Fubon Commercial Bank logo',
      position: 'Institutional Credit Risk Analyst',
      period: 'Jul 2019 – Jun 2020',
      location: 'Taipei City, Taiwan',
      bullets: [
        'Conducted industry and financial statement analyses to support credit work in the corporate lending business, accounting for 8 lending cases with a total credit exposure of over USD 100 million.',
        'Modified Excel VBA financial forecasting models to expand applicability from large corporate clients to companies of various sizes and industries.'
      ]
    },
    {
      id: 3,
      company: 'E.Sun Commercial Bank',
      logo: '/logo/E-Sun-logo.jpg.png',
      logoAlt: 'E.Sun Commercial Bank logo',
      position: 'Credit Card Marketing Intern',
      period: 'Jul 2018 – Aug 2018',
      location: 'Taipei City, Taiwan',
      bullets: [
        'Supported targeted marketing initiatives for over 4 million customers using SQL databases, leveraging RFM (Recency, Frequency, Monetary) and cohort analysis to inform campaign strategies',
        'Conducted credit card marketing research and designed a new UI layout for the credit card dashboard of the mobile banking app, which was officially adopted and implemented by the UI design team after my internship'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-marker"></div>
            <div className="experience-content">
              <div className="experience-header">
                <img className="experience-logo" src={exp.logo} alt={exp.logoAlt} />
                <div className="experience-header-text">
                  <h3 className="experience-position">{exp.position}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
              </div>
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                <span className="experience-location">{exp.location}</span>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
