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
        <h3 className="section-label">credit risk analytics &amp;</h3>
        <h2 className="section-heading">data driven impact</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Hi, I'm <strong>Jyun Ru (Jin)</strong>. I recently completed my <strong>M.S. in Business Analytics</strong> at Boston University's Questrom School of Business. Previously, I spent nearly three years at <strong>CTBC Bank</strong>, Taiwan's largest private commercial bank, as a <strong>Retail Credit Risk Analyst</strong>, where I developed internal loss forecasting models for mortgage and personal loans using <strong>SAS</strong> and <strong>SQL</strong>.
            </p>
            <p>
              One project I'm especially proud of: I led a <strong>geospatial risk research initiative</strong> that integrated meteorological open data with internal mortgage data to quantify <strong>typhoon flood impacts on collateral</strong>, resulting in a <strong>patented geographic risk model</strong> in Taiwan — a first of its kind approach in the domestic banking industry.
            </p>
            <p>
              I believe data is only as powerful as our ability to translate it into decisions that <strong>manage risk</strong> and <strong>create real value</strong>. I'm excited to keep learning, building, and applying analytics to meaningful, real world challenges.
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
        <h3 className="section-label">areas of expertise</h3>
        <h2 className="section-heading">Python, SQL, SAS, PyTorch</h2>
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
              With dual experience in <strong>banking credit risk</strong> and <strong>graduate level business analytics</strong>, I work across <strong>Python</strong>, <strong>SQL</strong>, <strong>SAS</strong>, and <strong>PyTorch</strong> to build models, automate workflows, and uncover insights from complex data.
            </p>
            <p>
              During my graduate studies, I developed a <strong>multimodal deep learning model</strong> to predict IMDb movie ratings using movie plot summaries and poster images, without relying on audience reviews or box office data. Built with Python and PyTorch on <strong>cloud based GPU infrastructure</strong>, this project represents the culmination of my graduate training in bridging unstructured data with advanced modeling techniques.
            </p>
            <p>
              Beyond deep learning, I built an <strong>ICU demand forecasting model</strong> using XGBoost that achieved an <strong>AUC of 0.96</strong>, helping healthcare teams anticipate patient surges and allocate critical resources more effectively. I also designed a <strong>data engineering pipeline</strong> to extract and structure information from 500+ page regulatory PDF documents, transforming dense unstructured text into clean, queryable datasets ready for downstream analysis.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3: Life — image grid left, text card right */}
      <div className="container my-4">
        <div className="home-card-block">
          <div className="home-card-images grid-top-split">
            <img
              src={withBase('life_beyond_analytics_1.jpg')}
              className="img-span-full"
              alt="Life beyond analytics"
            />
            <img src={withBase('life_beyond_analytics_2.png')} alt="Life beyond analytics" />
            <img src={withBase('life_beyond_analytics_3.jpg')} alt="Life beyond analytics" />
          </div>
          <div className="home-card-text-side">
            <div className="home-card-text-inner">
              <h3 className="section-label">life beyond the screen —</h3>
              <h2 className="section-heading">mountains, snow, and miles</h2>
              <p>
                Outside of work and analytics, I spend my time chasing elevation and endurance. I've completed the <strong>half Taipei Marathon</strong>, summited over <strong>20 peaks above 10,000 feet</strong> across Taiwan's mountain ranges, and picked up <strong>snowboarding</strong> after moving to Boston.
              </p>
              <p>
                Whether it's pushing through the final kilometers of a race, navigating a steep ridge, or linking turns on a snowy slope, these experiences teach me <strong>patience</strong>, <strong>adaptability</strong>, and how to stay focused when things get uncomfortable. They also remind me why curiosity matters — and I bring that same energy back to my work every day.
              </p>
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
