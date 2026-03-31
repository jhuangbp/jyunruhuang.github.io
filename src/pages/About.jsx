import React from 'react'
import { withBase } from '../utils/assetPath'

const About = () => {
  return (
    <>
      {/* Page Title */}
      <div className="container mt-5 mb-2">
        <h1 className="page-title">more about me</h1>
        <h5 className="mb-0">Jyun-Ru (Jin) Huang</h5>
      </div>

      {/* Section 1: Work Experience */}
      <div className="container section-block">
        <h3 className="section-label">internship &amp; work</h3>
        <h2 className="section-heading">experience</h2>

        {/* CTBC Bank */}
        <div className="row align-items-stretch">
          <div className="col-md-5 d-flex">
            <img src={withBase('ctbc_experience.jpg')} alt="CTBC Bank workplace" className="rounded" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/ctbc_bank.png')} height="28" className="mr-2" alt="CTBC Bank" />
              <h5 className="mb-0"><strong>CTBC Bank</strong></h5>
            </div>
            <h6 className="mb-0">Retail Credit Risk Analyst</h6>
            <h6 className="text-muted mb-2">Jul 2020 – May 2023 · Taipei, Taiwan</h6>
            <ul className="content-bullets">
              <li>Developed loss forecasting models for mortgage loans, streamlining the process by narrowing <strong>16,000</strong> predictors to <strong>10</strong> key variables with SAS Macros, increasing model discrimination by <strong>18%</strong> (Gini coefficient).</li>
              <li>Led research and modeling of typhoon flood impact on mortgage collateral using <strong>ArcGIS</strong>, resulting in a <strong>patented geographic risk model</strong> in Taiwan (TW M624436 U).</li>
              <li>Owned three risk analysis projects for mortgage and personal loans as a Management Associate, with one key finding successfully implemented after years of internal discussion.</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Taipei Fubon */}
        <div className="row align-items-stretch">
          <div className="col-md-5 d-flex">
            <img src={withBase('fubon_experience.jpg')} alt="Taipei Fubon workplace" className="rounded" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/fubon-bank.jpg')} height="28" className="mr-2" alt="Taipei Fubon" />
              <h5 className="mb-0"><strong>Taipei Fubon Commercial Bank</strong></h5>
            </div>
            <h6 className="mb-0">Institutional Credit Risk Analyst</h6>
            <h6 className="text-muted mb-2">Jul 2019 – Jun 2020 · Taipei, Taiwan</h6>
            <ul className="content-bullets">
              <li>Conducted industry and financial statement analyses supporting corporate lending, accounting for <strong>8</strong> cases with total credit exposure over <strong>USD 100 million</strong>.</li>
              <li>Modified Excel VBA financial forecasting models to expand applicability from large corporates to companies of various sizes and industries.</li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* E.Sun */}
        <div className="row align-items-stretch">
          <div className="col-md-5 d-flex">
            <img src={withBase('esun_experience.jpg')} alt="E.Sun workplace" className="rounded" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/E-Sun-logo.jpg.png')} height="28" className="mr-2" alt="E.Sun Bank" />
              <h5 className="mb-0"><strong>E.Sun Commercial Bank</strong></h5>
            </div>
            <h6 className="mb-0">Credit Card Marketing Intern</h6>
            <h6 className="text-muted mb-2">Jul 2018 – Aug 2018 · Taipei, Taiwan</h6>
            <ul className="content-bullets">
              <li>Supported targeted marketing for over <strong>4 million</strong> customers using SQL, leveraging RFM and cohort analysis to inform campaign strategies.</li>
              <li>Designed a new UI layout for the mobile banking credit card dashboard — officially adopted by the UI design team after my internship.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Education */}
      <div className="container section-block">
        <h2 className="section-heading">education</h2>

        {/* Boston University */}
        <div className="row align-items-stretch">
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/Boston_University_seal.png')} height="32" className="mr-2" alt="Boston University" />
              <h5 className="mb-0"><strong>Boston University, Questrom School of Business</strong></h5>
            </div>
            <h6 className="mb-0">M.S. in Business Analytics</h6>
            <h6 className="text-muted mb-2">Aug 2024 – Jan 2026 · GPA: 3.58 / 4.00</h6>
            <ul className="content-bullets">
              <li>Neural Networks · Unsupervised &amp; Supervised Machine Learning · ML in Healthcare</li>
              <li>Data Analytics (Python) · Analytics Toolbox (SQL + Tableau) · Big Data Analytics (PySpark)</li>
            </ul>
          </div>
          <div className="col-md-5 d-flex">
            <img src={withBase('BU_Life.jpg')} alt="Boston University campus" className="rounded" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <hr className="my-4" />

        {/* NTNU */}
        <div className="row align-items-stretch">
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/National_Taiwan_Normal_University.png')} height="32" className="mr-2" alt="NTNU" />
              <h5 className="mb-0"><strong>National Taiwan Normal University</strong></h5>
            </div>
            <h6 className="mb-0">Non-Degree Program</h6>
            <h6 className="text-muted mb-2">Sep 2023 – Dec 2023 · GPA: 3.65 / 4.30</h6>
            <ul className="content-bullets">
              <li>Big Data Programming (Python) · Theory of Probability</li>
            </ul>
          </div>
          <div className="col-md-5 d-flex">
            <img src={withBase('NTNU_Life.jpg')} alt="NTNU campus" className="rounded" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <hr className="my-4" />

        {/* NTU */}
        <div className="row align-items-stretch">
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/National_Taiwan_University.png')} height="32" className="mr-2" alt="NTU" />
              <h5 className="mb-0"><strong>National Taiwan University</strong></h5>
            </div>
            <h6 className="mb-0">B.A. in Economics, Minor in Political Science</h6>
            <h6 className="text-muted mb-2">Aug 2014 – Jan 2019</h6>
          </div>
          <div className="col-md-5 d-flex">
            <img src={withBase('NTU_Life.jpg')} alt="NTU campus" className="rounded" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <hr className="my-4" />

        {/* HKUST */}
        <div className="row align-items-stretch">
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/HKUST.svg')} height="32" className="mr-2" alt="HKUST" />
              <h5 className="mb-0"><strong>Hong Kong University of Science and Technology</strong></h5>
            </div>
            <h6 className="mb-0">Exchange Student Programme, School of Business and Management</h6>
            <h6 className="text-muted mb-2">Aug 2018 – Dec 2018</h6>
          </div>
          <div className="col-md-5 d-flex">
            <img src={withBase('HKUST_Life.jpg')} alt="HKUST campus" className="rounded" style={{ width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* Section 3: Other */}
      <div className="container section-block">
        <h2 className="section-heading">other</h2>
        <div className="row align-items-start">
          <div className="col-md-12">

            {/* Patent */}
            <h5><strong>Inventor — Patented Geographic Risk Model</strong></h5>
            <h6 className="mb-0">CTBC Bank</h6>
            <h6 className="text-muted mb-2">Taiwan Patent TW M624436 U · Granted 2022</h6>
            <ul className="content-bullets">
              <li>Designed a novel geospatial risk assessment framework integrating meteorological open data with internal mortgage data.</li>
              <li>Quantified typhoon flood impacts on mortgage collateral using <strong>ArcGIS</strong> — a first-of-its-kind approach in the domestic banking industry.</li>
            </ul>

            <hr className="my-4" />

            {/* Case Competition */}
            <div className="d-flex align-items-center mb-1">
              <img src={withBase('logo/humana_logo.svg')} height="24" className="mr-2" alt="Humana" />
              <img src={withBase('logo/Texas_AM_University_seal.svg')} height="28" className="mr-2" alt="Texas A&M" />
              <h5 className="mb-0"><strong>Humana-Mays 2024 Healthcare Analytics Case Competition</strong></h5>
            </div>
            <h6 className="mb-0">Team Member</h6>
            <h6 className="text-muted mb-2">Sep 2024 – Nov 2024</h6>
            <ul className="content-bullets">
              <li>Placed in the <strong>Top 50</strong> (Round 2) and AUC scored in the <strong>Top 10</strong> among <strong>200+</strong> teams from 74 universities nationwide.</li>
              <li>Built an optimized XGBoost model to identify Medicare members least likely to visit their Primary Care Providers; engineered features across <strong>14 datasets</strong> (500+ variables).</li>
            </ul>

            <hr className="my-4" />

            {/* SAS Certification */}
            <h5><strong>SAS Certified Specialist: Base Programming Using SAS 9.4</strong></h5>
            <h6 className="mb-0">Professional Certification</h6>
            <h6 className="text-muted mb-2">Issued Dec 2025 · Credential ID: 522568756</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
