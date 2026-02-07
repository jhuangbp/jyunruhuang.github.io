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
      <h2 className="section-title">Skills</h2>
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
    </section>
  )
}

export default Skills

