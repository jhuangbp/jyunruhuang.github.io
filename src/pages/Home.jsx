import React from 'react'
import { withBase } from '../utils/assetPath'

const Home = ({ onNavigate }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="container mt-5 mb-4 text-center">
        <h2>JyunRu Huang</h2>
        <p className="text-muted">Credit Risk Analyst &amp; Data Analytics Enthusiast</p>
      </div>

      {/* Section 1: Background — text left, image right */}
      <div className="container section-block">
        <h3 className="section-label">passionate about</h3>
        <h2 className="section-heading">credit risk &amp; data analytics</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              With <strong>3+ years of banking experience</strong> at CTBC Bank — Taiwan's largest private commercial bank — I specialize in <strong>credit risk modeling</strong> for mortgage and personal loans. I developed loss forecasting models using <strong>SAS</strong> and <strong>SQL</strong>, improving model discrimination by <strong>18%</strong> (measured by Gini coefficient).
            </p>
            <p>
              I led a pioneering geospatial risk research project that analyzed <strong>typhoon flood impacts on mortgage collateral</strong> using ArcGIS, resulting in a <strong>patented geographic risk model</strong> (TW M624436 U) in Taiwan — a first-of-its-kind approach in the domestic banking industry.
            </p>
            <p>
              Currently completing my <strong>M.S. in Business Analytics</strong> at Boston University's Questrom School of Business, I'm bridging my deep domain expertise with cutting-edge <strong>machine learning</strong> and <strong>deep learning</strong> techniques.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={withBase('JyunRu_Huang_Headshot.jpg')}
              className="img-fluid"
              alt="JyunRu Huang"
            />
          </div>
        </div>
      </div>

      {/* Section 2: Technical Skills — image left, text right */}
      <div className="container section-block">
        <h3 className="section-label">areas of</h3>
        <h2 className="section-heading">technical expertise</h2>
        <div className="row align-items-center">
          <div className="col-md-6 order-md-1 order-2">
            <img
              src={withBase('areas_of_expertise.jpg')}
              className="img-fluid rounded"
              alt="Analytics workspace"
              style={{ width: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6 order-md-2 order-1">
            <p>
              My technical toolkit spans <strong>Python</strong>, <strong>SQL</strong>, <strong>SAS</strong>, <strong>PyTorch</strong>, <strong>TensorFlow</strong>, and <strong>PySpark</strong> for data processing and modeling. I use <strong>Tableau</strong> for visualization and <strong>Esri ArcGIS</strong> for geographic information analysis.
            </p>
            <p>
              At Boston University, I've built projects ranging from <strong>multimodal deep learning</strong> (predicting IMDb ratings from text + images) to <strong>ICU demand forecasting</strong> (XGBoost models achieving AUC of 0.96) to <strong>data engineering pipelines</strong> (extracting data from 203-page PDFs).
            </p>
            <p>
              I'm proficient in cloud-based workflows with <strong>Google Cloud Platform</strong> and version control with <strong>Git</strong>, and I hold a <strong>SAS Certified Specialist</strong> credential in Base Programming.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Life — text left, image right */}
      <div className="container section-block">
        <h3 className="section-label">embracing</h3>
        <h2 className="section-heading">life beyond analytics</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Beyond data and models, I bring a global perspective shaped by living and studying across <strong>Taiwan</strong>, <strong>Hong Kong</strong>, and <strong>Boston</strong>. As an exchange student at the Hong Kong University of Science and Technology, I developed cross-cultural communication skills that serve me well in diverse team environments.
            </p>
            <p>
              I'm driven by curiosity — whether it's exploring a new city, diving into a challenging dataset, or learning a new framework. I believe the best analysts combine <strong>technical rigor</strong> with <strong>creative problem-solving</strong> and genuine empathy for end users.
            </p>
            <p>
              I'm enthusiastic about applying my analytical skills and banking industry experience to drive <strong>data-driven innovation</strong> in business analytics, risk management, and beyond.
            </p>
          </div>
          <div className="col-md-6">
            <img
              src={withBase('life_beyond_analytics_2.png')}
              className="img-fluid rounded mb-2"
              alt="Life beyond analytics"
              style={{ width: '100%', height: '260px', objectFit: 'cover' }}
            />
            <div className="row g-2">
              <div className="col-6">
                <img
                  src={withBase('life_beyond_analytics_1.jpg')}
                  className="img-fluid rounded"
                  alt="Life beyond analytics"
                  style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-6">
                <img
                  src={withBase('life_beyond_analytics_3.jpg')}
                  className="img-fluid rounded"
                  alt="Life beyond analytics"
                  style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="container text-center mb-5 pb-4">
        <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about') }}>
          learn more about me
        </a>
        <span className="mx-3 text-muted">or...</span>
        <a href="#projects" onClick={(e) => { e.preventDefault(); onNavigate('projects') }}>
          learn about my projects
        </a>
      </div>
    </>
  )
}

export default Home
