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
            <div className="img-placeholder">
              <span>multimodal deep learning</span>
            </div>
          </div>
          <div className="col-md-7">
            <h2>Predicting Movie Ratings from Multimodal Data</h2>
            <h5>Deep Learning · Python · PyTorch</h5>
            <p>
              Built a multimodal deep learning framework to predict IMDb movie ratings by integrating structured metadata, text summaries, and poster images. Implemented and compared multiple neural network architectures using MPNet, ConvNeXt V2, and DINOv2, with Residual MLP and FT-Transformer at the final inference stage.
            </p>
            <p>
              <strong>Achievement:</strong> Average prediction error within ±0.6 IMDb rating points on the validation set.
            </p>
            <a
              href="https://medium.com/@jhuangbp/predicting-movie-rating-from-multimodal-data-a-deep-learning-method-a35f8e85f0e5"
              target="_blank"
              rel="noopener noreferrer"
            >
              learn more
            </a>
          </div>
        </div>
      </div>

      {/* Project 2: ICU Demand Forecasting */}
      <div className="container section-block">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="img-placeholder">
              <span>healthcare analytics</span>
            </div>
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
              href={withBase('HealthcareProject_Final%20Presentation.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              presentation
            </a>
            <a
              href={withBase('HealthcareProject_Final%20Report.pdf')}
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
            <div className="img-placeholder">
              <span>data engineering</span>
            </div>
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
              href="https://github.com/BU-Spark/ds-muckrock-liberation"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-3"
            >
              github
            </a>
            <a
              href={withBase('Muckrock%20Final%20Report.pdf')}
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
