import React from 'react';
import './Skills.css';
import skills from '../../data/skills';

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-heading">My <span>Skills</span></h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-top">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar-bg">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
