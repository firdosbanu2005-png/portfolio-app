import React from 'react';
import './Education.css';

function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Science & Design Engineering',
      institution: 'Your Engineering College',
      duration: '2022 – 2026',
      description: 'Studying core CS subjects alongside UI/UX design principles, frontend development, databases, and software engineering.',
    },
    {
      degree: 'Pre-University (12th)',
      field: 'Science (PCM)',
      institution: 'Your PU College',
      duration: '2020 – 2022',
      description: 'Completed higher secondary education with a focus on Mathematics and Computer Science.',
    },
  ];

  return (
    <section className="education" id="education">
      <h2 className="section-heading">My <span>Education</span></h2>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-duration">{edu.duration}</span>
              <h3>{edu.degree}</h3>
              <h4>{edu.field}</h4>
              <p className="institution">🏛 {edu.institution}</p>
              <p className="edu-desc">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
