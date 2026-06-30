import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:firdosbanu350@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Firdos,\n\n${formData.message}\n\nFrom: ${formData.name}\nEmail: ${formData.email}`)}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'firdosbanu350@gmail.com',
      href: 'mailto:firdosbanu350@gmail.com',
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/firdosbanu',
      href: 'https://linkedin.com/in/firdosbanu',
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: 'github.com/firdosbanu',
      href: 'https://github.com/firdosbanu',
    },
  ];

  return (
    <section className="contact" id="contact">
      <h2 className="section-heading">Get In <span>Touch</span></h2>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>
          <p>
            I'm open to internship opportunities, freelance projects, and collaborations.
            Feel free to reach out — I'd love to hear from you!
          </p>

          <div className="contact-links">
            {contactInfo.map((item, index) => (
              <a href={item.href} className="contact-link-card" key={index} target="_blank" rel="noreferrer">
                <span className="contact-icon">{item.icon}</span>
                <div>
                  <span className="contact-link-label">{item.label}</span>
                  <span className="contact-link-value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Firdos Banu"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Internship Opportunity"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Hi Firdos, I'd like to discuss..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            Send Email
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
