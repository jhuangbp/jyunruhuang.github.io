import React from 'react'
import { withBase } from '../utils/assetPath'
import './Education.css'

const education = [
  {
    id: 1,
    school: 'Boston University, Questrom School of Business',
    logo: withBase('logo/Boston_University_seal.png'),
    logoAlt: 'Boston University seal',
    degree: 'M.S. in Business Analytics',
    period: 'Aug 2024 - Jan 2026',
    gpa: 'GPA 3.58 / 4.00',
    courses: [
      'Advanced Analytics Topics (Neural Network)',
      'Unsupervised Machine Learning',
      'Supervised Machine Learning',
      'Machine Learning in Healthcare',
      'Big Data Analytics (PySpark)'
    ]
  },
  {
    id: 2,
    school: 'National Taiwan Normal University',
    logo: withBase('logo/National_Taiwan_Normal_University.png'),
    logoAlt: 'National Taiwan Normal University logo',
    degree: 'Non-Degree Program',
    period: 'Sep 2023 - Dec 2023',
    gpa: 'GPA 3.65 / 4.30',
    courses: ['Big Data Programming (Python)', 'Theory of Probability']
  },
  {
    id: 3,
    school: 'National Taiwan University',
    logo: withBase('logo/National_Taiwan_University.png'),
    logoAlt: 'National Taiwan University logo',
    degree: 'B.A. in Economics, Minor in Political Science',
    period: 'Aug 2014 - Jan 2019',
    gpa: '',
    courses: []
  },
  {
    id: 4,
    school: 'Hong Kong University of Science and Technology',
    logo: withBase('logo/HKUST.svg'),
    logoAlt: 'Hong Kong University of Science and Technology logo',
    degree: 'Exchange Student Programme',
    period: 'Aug 2018 - Dec 2018',
    gpa: '',
    courses: []
  }
]

const Education = () => {
  return (
    <section id="education" className="education" data-reveal>
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {education.map((item, index) => (
          <article key={item.id} className="education-card card" data-reveal>
            <div className="education-header">
              <img className="education-logo" src={item.logo} alt={item.logoAlt} loading="lazy" />
              <div className="education-heading">
                <h3>{item.degree}</h3>
                <p>{item.school}</p>
                <div className="education-meta">
                  <span>{item.period}</span>
                  {item.gpa && <span>{item.gpa}</span>}
                </div>
              </div>
            </div>

            {item.courses.length > 0 && (
              <details className="education-courses" open={index === 0}>
                <summary>Relevant Coursework</summary>
                <ul>
                  {item.courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </details>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
