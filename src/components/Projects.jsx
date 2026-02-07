import React, { useMemo, useState } from 'react'
import { withBase } from '../utils/assetPath'
import './Projects.css'

const projects = [
  {
    id: 1,
    name: 'Predicting Movie Ratings from Multimodal Data',
    category: 'Deep Learning',
    year: '2025',
    description:
      'Built a multimodal pipeline to predict IMDb scores using movie metadata, text plot summaries, and poster images.',
    role:
      'Compared MPNet, ConvNeXt V2, and DINOv2 feature extractors, then tested residual MLP and FT-Transformer for final inference.',
    impact:
      'Achieved average prediction error within plus/minus 0.6 IMDb points on validation data.',
    tech: ['Python', 'PyTorch', 'ConvNeXt V2', 'DINOv2', 'Transformer'],
    links: [
      {
        label: 'Project Write-up',
        href: 'https://medium.com/@jhuangbp/predicting-movie-rating-from-multimodal-data-a-deep-learning-method-a35f8e85f0e5'
      }
    ]
  },
  {
    id: 2,
    name: 'Real-Time ICU Demand Forecasting',
    category: 'Healthcare Analytics',
    year: '2025',
    description:
      'Designed an ICU capacity forecasting framework with MIMIC-IV to estimate inflow from ED and outflow via post-discharge readmission.',
    role:
      'Developed two independent XGBoost models for 12-hour inflow and 72-hour readmission risk.',
    impact:
      'Reached AUC 0.96 for inflow and AUC 0.72 for outflow, outperforming comparable approaches in referenced studies.',
    tech: ['Python', 'XGBoost', 'Scikit-learn', 'MIMIC-IV', 'Pandas'],
    links: [
      { label: 'Presentation', href: withBase('HealthcareProject_Final%20Presentation.pdf') },
      { label: 'Technical Report', href: withBase('HealthcareProject_Final%20Report.pdf') },
      { label: 'Dataset', href: 'https://physionet.org/content/mimiciv/3.1/' }
    ]
  },
  {
    id: 3,
    name: 'U.S. Military Base Slot Revenue Explorer',
    category: 'Data Engineering',
    year: '2024',
    description:
      'Supported MuckRock by transforming irregular slot machine revenue records into structured datasets and publishing a queryable dashboard.',
    role:
      'Built a layout-aware Python parser for borderless tables and deployed a SQLite + Datasette interface.',
    impact:
      'Reduced a 203-page PDF extraction workflow from days of manual cleanup to under 3 minutes.',
    tech: ['Python', 'SQLite', 'Datasette', 'PDF Parsing', 'Data Visualization'],
    links: [
      { label: 'Interactive Dashboard', href: 'https://ds-701-muckrock-data-liberation-project.onrender.com' },
      { label: 'GitHub', href: 'https://github.com/BU-Spark/ds-muckrock-liberation' },
      { label: 'Final Report', href: withBase('Muckrock%20Final%20Report.pdf') },
      {
        label: 'Raw Data Source',
        href: 'https://www.data-liberation-project.org/datasets/dod-army-slot-machines/'
      }
    ]
  }
]

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const unique = projects.map((project) => project.category)
    return ['All', ...new Set(unique)]
  }, [])

  const visibleProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  )

  return (
    <section id="projects" className="projects" data-reveal>
      <h2 className="section-title">Featured Projects</h2>

      <div className="project-filters" data-reveal>
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`project-filter ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article key={project.id} className="project-card card" data-reveal>
            <div className="project-card-header">
              <p className="project-badge">{project.category}</p>
              <span>{project.year}</span>
            </div>

            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <p className="project-role">{project.role}</p>
            <p className="project-impact">
              <strong>Impact:</strong> {project.impact}
            </p>

            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.links.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
