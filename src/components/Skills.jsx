import React from 'react'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'SQL', 'PyTorch', 'TensorFlow', 'PySpark', 'Excel VBA']
    },
    {
      category: 'Analytics & Geographic Information System',
      skills: ['SAS', 'Esri ArcGIS']
    },
    {
      category: 'Visualization',
      skills: ['Tableau']
    },
    {
      category: 'Cloud',
      skills: ['Google Cloud Platform', 'Git']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <p className="section-eyebrow">Toolkit</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          A modern analytics stack covering machine learning, visualization, cloud, and GIS tools.
        </p>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.category}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
