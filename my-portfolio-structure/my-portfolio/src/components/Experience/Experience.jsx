import React from 'react';
import './Experience.css';
import experience from '../../data/experience';

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-heading">My <span>Experience</span></h2>

      <div className="experience-list">
        {experience.map((exp) => (
          <div className="experience-card" key={exp.id}>
            <div className="exp-left">
              <span className="exp-duration">{exp.duration}</span>
            </div>
            <div className="exp-right">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.description}</p>
              <div className="exp-tags">
                {exp.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
