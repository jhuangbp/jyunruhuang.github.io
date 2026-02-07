import React from 'react'
import { withBase } from '../utils/assetPath'
import './Education.css'

const Education = () => {
  const education = [
    {
      id: 1,
      school: 'Boston University, Questrom School of Business',
      logo: withBase('logo/Boston_University_seal.png'),
      logoAlt: 'Boston University seal',
      degree: 'M.S. in Business Analytics',
      period: 'Aug 2024 ~ Jan 2026',
      gpa: 'GPA: 3.58 / 4.00',
      courses: [
        'Advanced Analytics Topics (Neural Network)',
        'Unsupervised Machine Learning',
        'Supervised Machine Learning',
        'Machine Learning in Healthcare',
        'Introduction to Data Analytics (Python)',
        'Business Analytics Toolbox (SQL + Tableau)',
        'Big Data Analytics (PySpark)'
      ],
    },
    {
      id: 2,
      school: 'National Taiwan Normal University',
      logo: withBase('logo/National_Taiwan_Normal_University.png'),
      logoAlt: 'National Taiwan Normal University logo',
      degree: 'Non-Degree Program',
      period: 'Sep 2023 ~ Dec 2023',
      gpa: 'GPA: 3.65 / 4.30',
      courses: [
        'Big Data Programming (Python Programming)',
        'Theory of Probability'
      ]
    },
    {
      id: 3,
      school: 'National Taiwan University',
      logo: withBase('logo/National_Taiwan_University.png'),
      logoAlt: 'National Taiwan University logo',
      degree: 'B.A. in Economics, Minor in Political Science',
      period: 'Aug 2014 ~ Jan 2019',
      gpa: '',
      courses: []
    },
    {
      id: 4,
      school: 'Hong Kong University of Science and Technology, School of Business and Management',
      logo: withBase('logo/HKUST.svg'),
      logoAlt: 'Hong Kong University of Science and Technology logo',
      degree: 'Exchange Student Programme',
      period: 'Aug 2018 ~ Dec 2018',
      gpa: '',
      courses: []
    }
  ]

  return (
    <section id="education" className="education">
      <div className="section-container">
        <p className="section-eyebrow">Education</p>
        <h2 className="section-title">Academic Background</h2>
        <p className="section-subtitle">
          Graduate analytics training combined with economics foundations and exchange programs.
        </p>
        <div className="education-container">
          {education.map((edu) => (
            <div key={edu.id} className="education-card">
              <div className="education-header">
                <img className="education-logo" src={edu.logo} alt={edu.logoAlt} />
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <div className="education-school">{edu.school}</div>
                </div>
              </div>
              <div className="education-meta">
                <span>{edu.period}</span>
                {edu.gpa && <span>{edu.gpa}</span>}
              </div>
              {edu.courses.length > 0 && (
                <div className="education-courses">
                  <h4>Coursework: </h4>
                  <ul>
                    {edu.courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
