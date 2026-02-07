import React from 'react'
import './CaseCompetition.css'

const CaseCompetition = () => {
  return (
    <section id="case-competition" className="case-competition">
      <h2 className="section-title">Case Competition</h2>
      <div className="case-competition-card">
        <div className="case-competition-body">
          <div className="case-competition-logos">
            <div className="case-competition-logo-slot">
              <img
                className="case-competition-logo"
                src="/logo/Texas_AM_University_seal.svg"
                alt="Texas A&M University logo"
              />
            </div>
            <div className="case-competition-logo-slot">
              <img className="case-competition-logo" src="/logo/humana_logo.svg" alt="Humana logo" />
            </div>
          </div>
          <div className="case-competition-content">
            <div className="case-competition-header">
              <h3>Humana-Mays 2024 Healthcare Analytics Case Competition</h3>
              <span className="case-competition-period">Sep 2024 – Nov 2024</span>
            </div>
            <p className="case-competition-highlight">
              Placed in the Top 50 (Round 2) and AUC scored in the Top 10 among 200+ teams
            </p>
            <ul className="case-competition-bullets">
                            <li>
                A national healthcare analytics competition hosted by Humana (NYSE: HUM) and Texas A&M University, bringing together over 900 master’s students from 74 universities and more than 200 teams nationwide.
              </li>
              <li>
                The competition focused on developing data-driven models to identify Medicare members least likely to visit their Primary Care Providers (PCPs) within a year, and on proposing actionable strategies to increase PCP engagement and improve overall health outcomes.
              </li>
              <li>
                Engineered and selected features across 14 datasets (500+ variables), building an optimized
                XGBoost model.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseCompetition
