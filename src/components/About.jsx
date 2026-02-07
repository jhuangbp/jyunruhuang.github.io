import React from 'react'
import './About.css'

const About = () => {
  const facts = [
    { label: 'Credit Risk Experience', value: '3+ years' },
    { label: 'Graduate Degree', value: 'M.S. Business Analytics' },
    { label: 'Modeling Scope', value: 'Retail lending + healthcare + media' },
    { label: 'Start Date', value: 'Available immediately' }
  ]

  const strengths = [
    {
      title: 'Banking Domain Depth',
      points: [
        'Built mortgage and personal loan risk models using SAS and SQL.',
        'Led a patented geospatial mortgage risk initiative in Taiwan.'
      ]
    },
    {
      title: 'Production-Minded Analytics',
      points: [
        'Reduce high-dimensional features into explainable predictors.',
        'Translate technical findings into decisions business teams can adopt.'
      ]
    },
    {
      title: 'Modern ML Toolkit',
      points: [
        'Hands-on with PyTorch, TensorFlow, XGBoost, and PySpark.',
        'Experienced across supervised, unsupervised, and multimodal modeling.'
      ]
    }
  ]

  return (
    <section id="about" className="about" data-reveal>
      <h2 className="section-title">About Me</h2>

      <div className="about-intro card" data-reveal>
        <p>
          Hi, I am Jyun-Ru (Jin). I recently completed an M.S. in Business Analytics at Boston University
          Questrom School of Business. Before graduate school, I worked as a Retail Credit Risk Analyst at CTBC
          Bank and developed forecasting models for mortgage and personal loans.
        </p>
        <p>
          I combine finance context with machine learning execution, and I am looking for roles where data
          products can improve risk decisions, operational planning, and customer outcomes.
        </p>
      </div>

      <div className="about-facts">
        {facts.map((fact) => (
          <article key={fact.label} className="about-fact card" data-reveal>
            <p className="about-fact-value">{fact.value}</p>
            <p className="about-fact-label">{fact.label}</p>
          </article>
        ))}
      </div>

      <div className="about-strengths">
        {strengths.map((item) => (
          <article key={item.title} className="about-strength card" data-reveal>
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
