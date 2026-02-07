import React from 'react'
import { withBase } from '../utils/assetPath'
import './CaseCompetition.css'

const CaseCompetition = () => {
  const metrics = [
    'Top 50 finish (Round 2)',
    'Top 10 AUC ranking',
    '200+ participating teams'
  ]

  return (
    <section id="case-competition" className="case-competition" data-reveal>
      <h2 className="section-title">Case Competition</h2>
      <article className="case-competition-card card" data-reveal>
        <div className="case-competition-logos">
          <img src={withBase('logo/Texas_AM_University_seal.svg')} alt="Texas A&M University logo" loading="lazy" />
          <img src={withBase('logo/humana_logo.svg')} alt="Humana logo" loading="lazy" />
        </div>

        <div className="case-competition-content">
          <div className="case-competition-header">
            <h3>Humana-Mays 2024 Healthcare Analytics Case Competition</h3>
            <span>Sep 2024 - Nov 2024</span>
          </div>

          <div className="case-competition-metrics">
            {metrics.map((metric) => (
              <span key={metric}>{metric}</span>
            ))}
          </div>

          <ul className="case-competition-bullets">
            <li>
              National healthcare analytics competition hosted by Humana and Texas A&M, with over 900
              graduate participants from 74 universities.
            </li>
            <li>
              Built a model to identify Medicare members least likely to visit primary care providers within one
              year and proposed interventions to raise engagement.
            </li>
            <li>
              Engineered features across 14 datasets with more than 500 variables and optimized an XGBoost
              pipeline for predictive performance.
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default CaseCompetition
