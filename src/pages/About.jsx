import React from 'react'
import { withBase } from '../utils/assetPath'

const About = () => {
  return (
    <>
      {/* Page Title */}
      <div className="container mt-5">
        <h1 className="page-title">more about me</h1>
        <h5>Jyun-Ru (Jin) Huang</h5>
      </div>

      {/* Section 1: Work Experience — image left, text right */}
      <div className="container section-block">
        <h3 className="section-label">professional</h3>
        <h2 className="section-heading">experience</h2>
        <div className="row align-items-start">
          <div className="col-md-5">
            <img
              src={withBase('logo/ctbc_bank.png')}
              className="img-fluid mb-4"
              alt="CTBC Bank"
            />
            <img
              src={withBase('logo/fubon-bank.jpg')}
              className="img-fluid mb-4"
              alt="Taipei Fubon Commercial Bank"
            />
            <img
              src={withBase('logo/E-Sun-logo.jpg.png')}
              className="img-fluid"
              alt="E.Sun Commercial Bank"
            />
          </div>
          <div className="col-md-7">
            {/* CTBC Bank */}
            <h5><strong>CTBC Bank</strong></h5>
            <h6>Retail Credit Risk Analyst</h6>
            <h6 className="text-muted mb-2">Jul 2020 – May 2023 · Taipei, Taiwan</h6>
            <ul className="content-bullets">
              <li>Developed loss forecasting models for mortgage loans, streamlining the process by narrowing <strong>16,000</strong> predictors to <strong>10</strong> key variables with SAS Macros, and increasing model discrimination by <strong>18%</strong> (measured by Gini coefficient).</li>
              <li>Led research and modeling of typhoon flood impact on mortgage collateral by analyzing meteorological open data with <strong>ArcGIS</strong>, resulting in a <strong>patented geographic risk model</strong> in Taiwan (TW M624436 U).</li>
              <li>Owned three risk analysis projects for mortgage and personal loans as a Management Associate, with one key finding successfully implemented after years of internal discussion.</li>
            </ul>

            <hr className="my-4" />

            {/* Taipei Fubon */}
            <h5><strong>Taipei Fubon Commercial Bank</strong></h5>
            <h6>Institutional Credit Risk Analyst</h6>
            <h6 className="text-muted mb-2">Jul 2019 – Jun 2020 · Taipei, Taiwan</h6>
            <ul className="content-bullets">
              <li>Conducted industry and financial statement analyses to support credit work in the corporate lending business, accounting for <strong>8</strong> lending cases with a total credit exposure of over <strong>USD 100 million</strong>.</li>
              <li>Modified Excel VBA financial forecasting models to expand applicability from large corporate clients to companies of various sizes and industries.</li>
            </ul>

            <hr className="my-4" />

            {/* E.Sun */}
            <h5><strong>E.Sun Commercial Bank</strong></h5>
            <h6>Credit Card Marketing Intern</h6>
            <h6 className="text-muted mb-2">Jul 2018 – Aug 2018 · Taipei, Taiwan</h6>
            <ul className="content-bullets">
              <li>Supported targeted marketing initiatives for over <strong>4 million</strong> customers using SQL databases, leveraging RFM and cohort analysis to inform campaign strategies.</li>
              <li>Designed a new UI layout for the credit card dashboard of the mobile banking app, which was officially adopted and implemented by the UI design team.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Education — text left, image right */}
      <div className="container section-block">
        <h2 className="section-heading">education</h2>
        <div className="row align-items-start">
          <div className="col-md-7">
            {/* Boston University */}
            <h5><strong>Boston University, Questrom School of Business</strong></h5>
            <h6>M.S. in Business Analytics</h6>
            <h6 className="text-muted mb-2">Aug 2024 – Jan 2026 · GPA: 3.58 / 4.00</h6>
            <ul className="content-bullets">
              <li>Advanced Analytics Topics (Neural Network)</li>
              <li>Unsupervised &amp; Supervised Machine Learning</li>
              <li>Machine Learning in Healthcare</li>
              <li>Data Analytics (Python) · Analytics Toolbox (SQL + Tableau)</li>
              <li>Big Data Analytics (PySpark)</li>
            </ul>

            <hr className="my-4" />

            {/* NTNU */}
            <h5><strong>National Taiwan Normal University</strong></h5>
            <h6>Non-Degree Program</h6>
            <h6 className="text-muted mb-2">Sep 2023 – Dec 2023 · GPA: 3.65 / 4.30</h6>
            <ul className="content-bullets">
              <li>Big Data Programming (Python)</li>
              <li>Theory of Probability</li>
            </ul>

            <hr className="my-4" />

            {/* NTU */}
            <h5><strong>National Taiwan University</strong></h5>
            <h6>B.A. in Economics, Minor in Political Science</h6>
            <h6 className="text-muted mb-2">Aug 2014 – Jan 2019</h6>

            <hr className="my-4" />

            {/* HKUST */}
            <h5><strong>Hong Kong University of Science and Technology</strong></h5>
            <h6>Exchange Student Programme, School of Business and Management</h6>
            <h6 className="text-muted mb-2">Aug 2018 – Dec 2018</h6>
          </div>
          <div className="col-md-5">
            <img
              src={withBase('logo/Boston_University_seal.png')}
              className="img-fluid mb-4"
              alt="Boston University"
            />
            <img
              src={withBase('logo/National_Taiwan_University.png')}
              className="img-fluid"
              alt="National Taiwan University"
            />
          </div>
        </div>
      </div>

      {/* Section 3: Leadership & Involvement — image left, text right */}
      <div className="container section-block">
        <h3 className="section-label">leadership</h3>
        <h2 className="section-heading">&amp; involvement</h2>
        <div className="row align-items-start">
          <div className="col-md-5">
            <img
              src={withBase('logo/Texas_AM_University_seal.svg')}
              className="img-fluid mb-4"
              alt="Texas A&M University"
            />
            <img
              src={withBase('logo/humana_logo.svg')}
              className="img-fluid"
              alt="Humana"
            />
          </div>
          <div className="col-md-7">
            {/* Patent */}
            <h5><strong>Inventor — Patented Geographic Risk Model</strong></h5>
            <h6>CTBC Bank · Taiwan Patent TW M624436 U</h6>
            <h6 className="text-muted mb-2">Granted 2022</h6>
            <ul className="content-bullets">
              <li>Designed and developed a novel geospatial risk assessment framework integrating meteorological open data with internal mortgage data.</li>
              <li>Quantified typhoon flood impacts on mortgage collateral using <strong>ArcGIS</strong>, creating a first-of-its-kind approach in the domestic banking industry.</li>
            </ul>

            <hr className="my-4" />

            {/* Case Competition */}
            <h5><strong>Humana-Mays 2024 Healthcare Analytics Case Competition</strong></h5>
            <h6>Team Member</h6>
            <h6 className="text-muted mb-2">Sep 2024 – Nov 2024</h6>
            <ul className="content-bullets">
              <li>Placed in the <strong>Top 50</strong> (Round 2) and AUC scored in the <strong>Top 10</strong> among <strong>200+</strong> teams from 74 universities nationwide.</li>
              <li>Built an optimized XGBoost model to identify Medicare members least likely to visit their Primary Care Providers, engineering features across <strong>14 datasets</strong> (500+ variables).</li>
            </ul>

            <hr className="my-4" />

            {/* SAS Certification */}
            <h5><strong>SAS Certified Specialist: Base Programming Using SAS 9.4</strong></h5>
            <h6>Professional Certification</h6>
            <h6 className="text-muted mb-2">Issued Dec 2025 · Credential ID: 522568756</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
