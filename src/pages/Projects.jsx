import React from 'react'
import { withBase } from '../utils/assetPath'

const Projects = () => {
  return (
    <>
      {/* Page Title */}
      <div className="container mt-5">
        <h1 className="page-title">projects</h1>
      </div>

      {/* Project 1: Movie Ratings */}
      <div className="container section-block">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img
              src={withBase('Movie_project_banner.webp')}
              className="img-fluid"
              alt="Predicting Movie Ratings from Multimodal Data"
            />
          </div>
          <div className="col-md-7">
            <h2>Predicting Movie Ratings from Multimodal Data</h2>
            <h5>Deep Learning · Python · PyTorch</h5>
            <p>
              Consolidated 4,800+ films across nearly 40 years from three film databases and built a multi-page interactive Tableau dashboard with dimensional filters, trend lines, and distribution analysis.
            </p>
            <p>
              Extended EDA findings on studio release strategies in seasonality, budget allocation, and runtime positioning into a multimodal deep learning framework built in PyTorch and trained on NVIDIA A100 GPU.
            </p>
            <p>
              <strong>Achievement:</strong>
            </p>
            <ul>
              <li>Achieved an average prediction error within ±0.6 IMDb rating points (0–10 scale) on the validation set, denoting a 30% reduction compared to traditional ML baselines that use only structured features.</li>
            </ul>
            <a
              href="https://medium.com/@jhuangbp/predicting-movie-rating-from-multimodal-data-a-deep-learning-method-a35f8e85f0e5"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              Report
            </a>
            <a
              href="https://public.tableau.com/app/profile/jyun.ru.huang/viz/Movie_Tableau_17705931201140/Story1?publish=yes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tableau EDA Dashboard
            </a>
          </div>
        </div>
      </div>

      {/* Project 2: ICU Demand Forecasting */}
      <div className="container section-block">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img
              src={withBase('icu_project_banner.png')}
              className="img-fluid"
              alt="ICU Demand Forecasting for Hospital Capacity Planning"
            />
          </div>
          <div className="col-md-7">
            <h2>ICU Demand Forecasting for Hospital Capacity Planning</h2>
            <h5>Forecasting · XGBoost · MIMIC-IV</h5>
            <p>
              Designed a comprehensive ICU bed demand forecasting framework using MIMIC-IV data to support hospital capacity and resource planning. Developed two independent XGBoost-based predictive models to estimate ICU inflow from the emergency department within 12 hours and ICU outflow via 72-hour readmission risk.
            </p>
            <p>
              <strong>Achievement:</strong> AUC of <strong>0.96</strong> for inflow and <strong>0.72</strong> for outflow, outperforming comparable models in prior literature.
            </p>
            <a
              href={withBase('HealthcareProject_Final Presentation.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              presentation
            </a>
            <a
              href={withBase('HealthcareProject_Final Report.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              report
            </a>
          </div>
        </div>
      </div>

      {/* Project 3: Military Slot Machine Revenue */}
      <div className="container section-block">
        <div className="row align-items-center">
          <div className="col-md-5">
            <img
              src={withBase('Military_Slot_project_banner.png')}
              className="img-fluid"
              alt="U.S. Military Base Slot Machine Revenue Explorer"
            />
          </div>
          <div className="col-md-7">
            <h2>U.S. Military Base Slot Machine Revenue Explorer</h2>
            <h5>Data Engineering · Python · SQL · Datasette</h5>
            <p>
              Supported MuckRock, a nonprofit investigative journalism organization, by cleaning and deploying U.S. military slot machine revenue data. Built a layout-aware, rule-based data extraction pipeline in Python to parse borderless, irregular PDF tables into clean, analysis-ready datasets.
            </p>
            <p>
              <strong>Achievement:</strong> Processed a <strong>203-page PDF</strong> in under 3 minutes. Deployed results to an interactive SQLite-backed web dashboard.
            </p>
            <a
              href="https://ds-701-muckrock-data-liberation-project.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              live dashboard
            </a>
            <a
              href="https://github.com/jhuangbp/muckrock-liberation"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              github
            </a>
            <a
              href={withBase('Muckrock Final Report.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              report
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
