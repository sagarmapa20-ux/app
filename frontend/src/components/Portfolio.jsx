import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/mock';
import '../styles/portfolio.css';
import { 
  Cloud, 
  Code, 
  Shield, 
  Server, 
  Users, 
  Award,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ExternalLink,
  Calendar,
  Building,
  Star,
  Quote
} from 'lucide-react';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '', 
    subject: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const skillIcons = {
    'Multi-Cloud Platforms': <Cloud className="w-6 h-6" />,
    'Architecture & Design': <Server className="w-6 h-6" />,
    'DevOps & Automation': <Code className="w-6 h-6" />,
    'Migration & Integration': <ExternalLink className="w-6 h-6" />,
    'Security & Compliance': <Shield className="w-6 h-6" />,
    'Leadership & Strategy': <Users className="w-6 h-6" />
  };

  // Initialize name animation
  useEffect(() => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      heroTitle.classList.add('hero-title-animated');
    }
  }, []);

  return (
    <div className="portfolio-container">
      {/* Grid Background */}
      <div className="grid-background"></div>

      {/* Navigation Header */}
      <nav className="nav-header">
        <div className="container">
          <div className="nav-content">
            <div className="header-logo">MCA_PORTFOLIO</div>
            <div className="nav-links">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#experience" className="nav-link">Experience</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section section-hero">
        <div className="container">
          <div className="grid-container">
            <div className="hero-content">
              <div className="label">MULTI-CLOUD ARCHITECT</div>
              <h1 className="hero-title">{portfolioData.personal.name}</h1>
              <p className="text-big hero-tagline">{portfolioData.personal.tagline}</p>
              <p className="text-body hero-description" style={{ maxWidth: '600px', marginTop: '2rem' }}>
                {portfolioData.personal.description}
              </p>
              <div className="hero-actions" style={{ marginTop: '3rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#contact" className="btn-accent">Get In Touch</a>
                <a href="#projects" className="btn-primary">View Projects</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="grid-container">
            <div className="label">ABOUT ME</div>
            <h2 className="title-big">18 Years of Multi-Cloud Excellence</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', marginTop: '3rem', alignItems: 'start' }}>
              <div>
                <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                  As a results-driven Multi-Cloud Architect with 18 years of extensive IT experience, 
                  I specialize in designing and implementing cutting-edge multi-cloud solutions that drive business transformation.
                </p>
                <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                  My expertise spans across major cloud platforms including AWS, Azure, and Google Cloud, 
                  with a proven track record in the banking and healthcare domains. I excel at addressing 
                  complex challenges and delivering scalable, secure, and cost-effective solutions.
                </p>
                <p className="text-body">
                  Having managed diverse global clientele from the US, UK, and India, I focus on driving 
                  innovation and achieving optimal business outcomes through strategic multi-cloud adoption and digital transformation.
                </p>
              </div>
              
              <div className="card">
                <h3 className="label" style={{ marginBottom: '1rem' }}>EDUCATION</h3>
                {portfolioData.education.map((edu, index) => (
                  <div key={index} style={{ marginBottom: '1.5rem' }}>
                    <p className="text-regular" style={{ fontSize: '16px', fontWeight: '500', marginBottom: '0.5rem' }}>
                      {edu.degree}
                    </p>
                    <p className="text-body" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                      {edu.institution} • {edu.year}
                    </p>
                  </div>
                ))}
                
                <h3 className="label" style={{ marginTop: '2rem', marginBottom: '1rem' }}>CERTIFICATIONS</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <Award className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                  <p className="text-body" style={{ fontSize: '14px' }}>40+ Professional Certifications</p>
                </div>
                <p className="text-body" style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  Major cloud platforms, DevOps, servers, networks, email, and database technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="grid-container">
            <div className="label">PROFESSIONAL JOURNEY</div>
            <h2 className="title-big">Experience</h2>
            
            <div className="experience-timeline" style={{ marginTop: '3rem' }}>
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="experience-item">
                  <div className="card">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <h3 className="text-regular">{exp.title}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem' }}>
                          <Building className="w-4 h-4" />
                          <p className="text-body" style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Calendar className="w-4 h-4" />
                        <span className="label-small">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="label-small" style={{ marginBottom: '0.75rem' }}>KEY ACHIEVEMENTS</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="text-body" style={{ 
                            fontSize: '14px', 
                            marginBottom: '0.5rem',
                            paddingLeft: '1rem',
                            position: 'relative'
                          }}>
                            <span style={{
                              content: '•',
                              position: 'absolute',
                              left: 0,
                              color: 'var(--accent-primary)'
                            }}>•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="grid-container">
            <div className="label">CORE COMPETENCIES</div>
            <h2 className="title-big">Skills</h2>
            
            <div className="skills-grid">
              {portfolioData.skills.map((skillGroup, index) => (
                <div key={index} className="skill-category">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    {skillIcons[skillGroup.category]}
                    <h3 className="label">{skillGroup.category}</h3>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="label-small" 
                        style={{ 
                          background: 'var(--blue-50)', 
                          color: 'var(--accent-primary)',
                          padding: '0.5rem 0.75rem', 
                          border: '1px solid var(--accent-light)',
                          borderRadius: '4px',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = 'var(--accent-primary)';
                          e.target.style.color = 'var(--accent-foreground)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'var(--blue-50)';
                          e.target.style.color = 'var(--accent-primary)';
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="grid-container">
            <div className="label">SELECTED WORK</div>
            <h2 className="title-big">Projects</h2>
            
            <div className="projects-grid">
              {portfolioData.projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div>
                      <h3 className="text-regular">{project.title}</h3>
                      <p className="text-body" style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                        {project.client}
                      </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span className={`label-small ${project.status === 'Completed' ? '' : ''}`} 
                            style={{ color: project.status === 'Completed' ? 'var(--color-success)' : 'var(--accent-primary)' }}>
                        {project.status}
                      </span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeProject === project.id ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  <p className="text-body" style={{ marginBottom: '1.5rem' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ marginBottom: '1rem' }}>
                    <p className="label-small" style={{ marginBottom: '0.5rem' }}>TECHNOLOGIES</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="label-small" 
                          style={{ 
                            background: 'var(--accent-primary)', 
                            color: 'var(--accent-foreground)', 
                            padding: '0.25rem 0.5rem',
                            borderRadius: '4px'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {activeProject === project.id && (
                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
                      <h4 className="label-small" style={{ marginBottom: '0.75rem' }}>PROJECT OUTCOMES</h4>
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {project.achievements.map((achievement, index) => (
                          <li key={index} className="text-body" style={{ 
                            fontSize: '14px', 
                            marginBottom: '0.5rem',
                            paddingLeft: '1rem',
                            position: 'relative'
                          }}>
                            <span style={{
                              content: '•',
                              position: 'absolute',
                              left: 0,
                              color: 'var(--accent-primary)'
                            }}>•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span className="label-small">Timeline: {project.timeline}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="grid-container">
            <div className="label">CLIENT FEEDBACK</div>
            <h2 className="title-big">Testimonials</h2>
            
            <div className="testimonials-grid">
              {portfolioData.testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="testimonial-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                      <p style={{ color: 'var(--accent-primary)', fontSize: '12px' }}>{testimonial.company}</p>
                    </div>
                  </div>
                  
                  <Quote className="w-6 h-6" style={{ color: 'var(--accent-primary)', marginBottom: '1rem' }} />
                  
                  <p className="testimonial-text">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 star" fill="currentColor" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="grid-container">
            <div className="label">GET IN TOUCH</div>
            <h2 className="title-big">Contact</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '3rem' }}>
              <div>
                <p className="text-body" style={{ marginBottom: '2rem' }}>
                  Ready to discuss your next multi-cloud transformation project? 
                  Let's explore how we can architect scalable, secure solutions across AWS, Azure, and GCP for your business.
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Mail className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                    <span className="text-body">{portfolioData.personal.email}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                    <span className="text-body">{portfolioData.personal.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MapPin className="w-5 h-5" style={{ color: 'var(--accent-primary)' }} />
                    <span className="text-body">{portfolioData.personal.location}</span>
                  </div>
                </div>
              </div>
              
              <form className="contact-form" onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="5"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-accent" style={{ width: '100%' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="text-body">
            © 2024 Multi-Cloud Architect. Designed with precision and passion for multi-cloud excellence.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;