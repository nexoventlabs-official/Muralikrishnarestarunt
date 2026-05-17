import React, { useState } from 'react';
import { Mail, MapPin, Phone, Sparkles, Send, CheckCircle2 } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(''); // '', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setFormStatus('error');
      return;
    }

    setFormStatus('success');
    
    // Clear form fields
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setFormStatus('');
    }, 4000);
  };

  return (
    <div className="contact-page">
      
      {/* Contact Header */}
      <header className="page-header contact-header">
        <div className="header-overlay"></div>
        <div className="container header-content animate-fade-up">
          <span className="page-subtitle">Get In Touch</span>
          <h1 className="page-title">Contact Us</h1>
          <div className="header-decoration"><Sparkles size={20} className="text-gold" /></div>
        </div>
      </header>

      {/* Main Details & Form Grid */}
      <section className="section contact-section">
        <div className="container contact-grid">
          
          {/* Left Column: Direct Info Cards */}
          <div className="contact-info-sec animate-scale-in">
            <span className="section-subtitle-small">Information Desk</span>
            <h2>We Welcome Your Visits</h2>
            <p className="contact-lead-desc">
              Have queries about our recipes, catering bookings, table reservations, or hosting heritage celebrations? Contact our hospitality desk directly.
            </p>

            <div className="contact-details-cards">
              
              <div className="contact-detail-card glass-panel">
                <MapPin className="icon text-gold" size={28} />
                <div className="txt">
                  <h3>Restaurant Location</h3>
                  <p className="address-text">
                    NO5, PATHAVANTRADINGCOMPANY UDAYARPALAYAM TK 5TH CROSS THIRUNAGAR JAYANKONDAM, TIRUCHIRAPALLI
                  </p>
                </div>
              </div>

              <div className="contact-detail-card glass-panel">
                <Phone className="icon text-gold" size={24} />
                <div className="txt">
                  <h3>Direct Reservation Hotlines</h3>
                  <p>+91 98765 43210</p>
                  <p>+91 98765 54321</p>
                </div>
              </div>

              <div className="contact-detail-card glass-panel">
                <Mail className="icon text-gold" size={24} />
                <div className="txt">
                  <h3>Email Support Desk</h3>
                  <p className="text-lowercase font-bold">
                    <a href="mailto:contact@muralikrishnarestarunt.me" className="email-anchor">
                      contact@muralikrishnarestarunt.me
                    </a>
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="contact-form-sec">
            <div className="contact-form-panel glass-panel animate-scale-in">
              
              {formStatus === 'success' ? (
                <div className="contact-success-state text-center animate-scale-in">
                  <CheckCircle2 size={64} className="text-gold mb-4" style={{ margin: '0 auto 16px' }} />
                  <h3>Message Dispatched!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We have received your inquiry regarding <strong>"{formData.subject}"</strong>.
                  </p>
                  <p className="note mt-4">
                    Our guest relations manager will reach back within 24 operational hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form">
                  <span className="form-subtitle text-gold">Send An Enquiry</span>
                  <h3>Drop Us A Message</h3>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange}
                      placeholder="E.g., Rajesh Kumar" 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      placeholder="E.g., rajesh@mail.com" 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject</label>
                    <input 
                      type="text" 
                      id="contact-subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleInputChange}
                      placeholder="E.g., Event Catering Query" 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Your Message</label>
                    <textarea 
                      id="contact-message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange}
                      placeholder="Write your detailed query or feedback here..." 
                      className="form-input" 
                      required 
                    />
                  </div>

                  {formStatus === 'error' && (
                    <p className="contact-error">All fields are mandatory. Please fill in details completely.</p>
                  )}

                  <button type="submit" className="btn btn-primary w-full btn-send-message">
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Styled Embed Vector Map */}
      <section className="section map-section">
        <div className="container">
          <div className="map-panel glass-panel animate-scale-in">
            <div className="map-overlay">
              <div className="map-overlay-card glass-panel">
                <MapPin size={24} className="text-gold" />
                <div>
                  <h4>Murali Krishna Restaurant</h4>
                  <p>NO5, Udayarpalayam TK, Jayankondam, Tiruchirapalli</p>
                  <span className="timing">Open daily: 11:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
            {/* Elegant vector-styled dark grid map placeholder */}
            <div className="vector-grid-map">
              <div className="map-grid-pattern"></div>
              <div className="map-center-dot animate-float">
                <div className="radar-ripple"></div>
                <div className="dot"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
