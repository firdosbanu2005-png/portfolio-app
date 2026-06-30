import React from 'react';
import './About.css';

function About() {
  const highlights = [
    { label: 'Degree', value: 'B.E. Computer Science & Design Engineering' },
    { label: 'Role', value: 'Frontend Developer' },
    { label: 'Email', value: 'firdosbanu350@gmail.com' },
    { label: 'Status', value: 'Open to Opportunities' },
  ];

  return (
    <section className="about" id="about">
      <h2 className="section-heading">About <span>Me</span></h2>

      <div className="about-container">
        <div className="about-text">
          <h3>Who am I?</h3>
          <p>
            I'm <strong>Firdos Banu</strong>, a Computer Science &amp; Design Engineering student
            with a strong passion for frontend development. I love turning ideas into
            clean, interactive, and visually appealing web interfaces.
          </p>
          <p>
            My journey in tech started with HTML &amp; CSS, and I've since expanded
            into JavaScript, React, and SQL. I enjoy solving UI challenges and
            crafting seamless user experiences.
          </p>
          <p>
            When I'm not coding, I'm exploring UI design trends, working on personal
            projects, and continuously upskilling in modern web technologies.
          </p>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <div className="highlight-card" key={index}>
              <span className="highlight-label">{item.label}</span>
              <span className="highlight-value">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
