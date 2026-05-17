import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Gold Top Border line glow */}
      <div className="footer-glow-line"></div>

      <div className="container footer-container">
        <div className="footer-grid">
          
          {/* Brand Introduction */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <span className="logo-icon"><Sparkles size={16} /></span>
              <div className="logo-text">
                <span className="brand-name">MURALI KRISHNA</span>
                <span className="brand-sub">RESTAURANT</span>
              </div>
            </Link>
            <p className="brand-desc">
              Savor the authentic taste of heritage Indian cuisine. Combining traditional recipes with modern culinary excellence to create an unforgettable fine dining experience.
            </p>
            <div className="social-links">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Navigations */}
          <div className="footer-col Links-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home Screen</Link></li>
              <li><Link to="/menu">Explore Menu</Link></li>
              <li><Link to="/about">Our Story & Heritage</Link></li>
              <li><Link to="/contact">Get in Touch</Link></li>
              <li><Link to="/checkout">View Cart / Checkout</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="footer-col Hours-col">
            <h3 className="footer-title">Operating Hours</h3>
            <ul className="footer-hours">
              <li>
                <span className="day">Monday - Thursday</span>
                <span className="time">11:00 AM - 10:00 PM</span>
              </li>
              <li>
                <span className="day">Friday - Saturday</span>
                <span className="time">11:00 AM - 11:00 PM</span>
              </li>
              <li>
                <span className="day">Sunday (Brunch & Dinner)</span>
                <span className="time">10:00 AM - 10:30 PM</span>
              </li>
              <li className="note-item">
                <span className="note-label">Chef's Special Service:</span>
                <span className="note-text">Evenings from 6:30 PM onwards</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col contact-col">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-contact-info">
              <li className="contact-item align-top">
                <span className="contact-icon"><MapPin size={22} className="text-gold" /></span>
                <span className="contact-text">
                  NO5, PATHAVANTRADINGCOMPANY UDAYARPALAYAM TK 5TH CROSS THIRUNAGAR JAYANKONDAM, TIRUCHIRAPALLI
                </span>
              </li>
              <li className="contact-item">
                <span className="contact-icon"><Phone size={18} className="text-gold" /></span>
                <span className="contact-text">+91 98765 43210</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon"><Mail size={18} className="text-gold" /></span>
                <span className="contact-text text-lowercase">
                  <a href="mailto:contact@muralikrishnarestarunt.me" className="contact-email-link">
                    contact@muralikrishnarestarunt.me
                  </a>
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer copyright / terms block */}
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {currentYear} Murali Krishna Restaurant. All rights reserved.
          </div>
          <div className="bottom-links">
            <Link to="/privacy-policy" className="bottom-link">Privacy Policy</Link>
            <span className="divider">|</span>
            <Link to="/terms-conditions" className="bottom-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
