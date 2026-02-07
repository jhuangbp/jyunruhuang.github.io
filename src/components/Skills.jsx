import React from 'react'
import './Skills.css'

const skillCategories = [
  {
    category: 'Modeling & Programming',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 88 },
      { name: 'PyTorch', level: 80 },
      { name: 'TensorFlow', level: 72 }
    ]
  },
  {
    category: 'Analytics Delivery',
    skills: [
      { name: 'SAS', level: 85 },
      { name: 'PySpark', level: 70 },
      { name: 'Tableau', level: 78 },
      { name: 'ArcGIS', level: 74 }
    ]
  },
  {
    category: 'Platform & Workflow',
    skills: [
      { name: 'Google Cloud Platform', level: 70 },
      { name: 'Git', level: 78 },
      { name: 'Excel VBA', level: 80 }
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="skills" data-reveal>
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillCategories.map((group) => (
          <article key={group.category} className="skill-category card" data-reveal>
            <h3>{group.category}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-item-row">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-track" role="presentation">
                    <span style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
