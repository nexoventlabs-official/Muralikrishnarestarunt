import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuData } from '../data/menuData';
import DishCard from '../components/DishCard';
import { Clock, Users, Calendar, ShieldCheck, Award, Heart, CheckCircle2 } from 'lucide-react';
import './Home.css';

export default function Home() {
  const [bookingStatus, setBookingStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '2',
    date: '',
    time: '19:00',
  });

  const featuredDishes = menuData.filter((dish) => dish.featured);

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.date) {
      setBookingStatus('error');
      return;
    }
    setBookingStatus('success');
    // Clear booking form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        guests: '2',
        date: '',
        time: '19:00',
      });
      setBookingStatus('');
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const testimonials = [
    {
      id: 1,
      name: "Rishi Vardhan",
      role: "Culinary Critic",
      text: "The Mutton Dum Biryani here is absolutely divine. Saffron grains are perfectly separated, lamb is incredibly tender, and the spice blend is perfectly balanced. Truly royal!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ananya Sen",
      role: "Gourmet Enthusiast",
      text: "I booked Murali Krishna Restaurant for a family dinner. The ambience is deeply atmospheric and the Malabar Prawn Curry reminded me of authentic coastal cooking. Five stars!",
      rating: 5,
    },
    {
      id: 3,
      name: "Dr. Karthik Rajan",
      role: "Regular Patron",
      text: "Their Royal Elaneer Payasam is a must-try. Subtle, chilled, sweet tender coconut pulp is perfect after eating their paneer tikka. A highly recommended dining destination.",
      rating: 5,
    }
  ];

  return (
    <div className="home-page">
      
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="container hero-content animate-fade-up">
          <span className="hero-subtitle">Murali Krishna Restaurant</span>
          <h1 className="hero-title">
            Where Royal Culinary <span className="text-gold">Tradition</span> Meets Modern Elegance
          </h1>
          <p className="hero-desc">
            Savor authentic heritage Indian cuisine cooked in clay tandoors, enriched with pure ghee, hand-ground spices, and pure Kashmiri saffron.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
            <a href="#reserve-section" className="btn btn-secondary">Reserve a Table</a>
          </div>
        </div>
      </header>

      {/* Brand Pillars Section */}
      <section className="section pillars-section">
        <div className="container">
          <div className="pillars-grid">
            <div className="pillar-card glass-panel text-center">
              <Award className="pillar-icon" size={40} />
              <h3>Heritage Recipes</h3>
              <p>Dishes passed down through generations, preserved with authentic clay cooking and rich royal spices.</p>
            </div>
            <div className="pillar-card glass-panel text-center">
              <Heart className="pillar-icon" size={40} />
              <h3>Premium Ingredients</h3>
              <p>We source only high-grade basmati, direct-farm vegetables, local premium meats, and pure organic saffron.</p>
            </div>
            <div className="pillar-card glass-panel text-center">
              <ShieldCheck className="pillar-icon" size={40} />
              <h3>Gold Standard Hygiene</h3>
              <p>A zero-compromise kitchen with top safety certifications, preparing your foods in pure clean surroundings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Heritage / About Teaser */}
      <section className="section heritage-section">
        <div className="container heritage-grid">
          <div className="heritage-image animate-scale-in">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" alt="Heritage clay handi cooking" className="rounded-image" />
            <div className="heritage-experience-badge">
              <span className="years">25+</span>
              <span className="exp-text">Years of Legacy</span>
            </div>
          </div>
          <div className="heritage-text">
            <span className="section-subtitle-small">Our Culinary Journey</span>
            <h2>We Craft Memories, One Plate at a Time</h2>
            <p>
              At Murali Krishna Restaurant, dining is not merely a meal; it is an exploration of deep culinary history. Our chefs dedicate hours to slow-simmering lentils, curing tender skewers, and layering spiced rice in heavy copper handis.
            </p>
            <p>
              We honor old-world culinary standards by importing authentic red saffron from Kashmir and extracting cold-pressed oils. Every dish represents a celebration of taste, texture, and royal hospitality.
            </p>
            <Link to="/about" className="btn btn-secondary mt-4">Learn Our Full Story</Link>
          </div>
        </div>
      </section>

      {/* Chef's Special / Featured Dishes */}
      <section className="section specials-section">
        <div className="container">
          <div className="section-title">
            <p>Chef's Recommendation</p>
            <h2>The Culinary Specials</h2>
          </div>
          <div className="specials-grid">
            {featuredDishes.slice(0, 3).map((dish) => (
              <div key={dish.id} className="special-item">
                <DishCard dish={dish} />
              </div>
            ))}
          </div>
          <div className="text-center mt-4" style={{ marginTop: '50px' }}>
            <Link to="/menu" className="btn btn-secondary">View Complete Menu</Link>
          </div>
        </div>
      </section>

      {/* Testimonials / Reviews */}
      <section className="section reviews-section">
        <div className="reviews-bg-overlay"></div>
        <div className="container relative-z">
          <div className="section-title">
            <p>Guest Feedbacks</p>
            <h2>Beloved by Connoisseurs</h2>
          </div>
          <div className="reviews-grid">
            {testimonials.map((test) => (
              <div key={test.id} className="review-card glass-panel">
                <div className="stars">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <span key={i} className="text-gold">★</span>
                  ))}
                </div>
                <p className="review-text">"{test.text}"</p>
                <div className="review-author">
                  <span className="author-name">{test.name}</span>
                  <span className="author-role">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Table Reservation Form */}
      <section id="reserve-section" className="section reserve-section">
        <div className="container">
          <div className="reserve-grid glass-panel">
            <div className="reserve-info">
              <span className="reserve-label">Fine Dining Reservation</span>
              <h2>Book A Royal Table</h2>
              <p>
                Whether a business dinner, a romantic candlelight evening, or a family heritage feast, secure your select table in advance.
              </p>
              <ul className="reserve-features-list">
                <li><Users size={16} className="text-gold" /> Accommodate groups up to 25 guests</li>
                <li><Clock size={16} className="text-gold" /> 15-minute grace holding period</li>
                <li><Calendar size={16} className="text-gold" /> Custom dietary pre-requests available</li>
              </ul>
              <div className="support-call mt-4">
                <span>Direct Booking Support:</span>
                <span className="phone">+91 98765 43210</span>
              </div>
            </div>
            
            <div className="reserve-form-container">
              {bookingStatus === 'success' ? (
                <div className="booking-success-message text-center animate-scale-in">
                  <CheckCircle2 size={64} className="text-gold" style={{ margin: '0 auto 20px' }} />
                  <h3>Reservation Requested!</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. We have received your booking request for <strong>{formData.guests} guests</strong> on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                  </p>
                  <p className="success-note">
                    A confirmation SMS & email will be dispatched to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="reserve-form">
                  <div className="form-group">
                    <label className="form-label" htmlFor="reserve-name">Your Full Name</label>
                    <input 
                      type="text" 
                      id="reserve-name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange}
                      placeholder="E.g., Rajesh Kumar" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label" htmlFor="reserve-email">Email Address</label>
                    <input 
                      type="email" 
                      id="reserve-email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange}
                      placeholder="E.g., rajesh@mail.com" 
                      className="form-input" 
                      required 
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group flex-1">
                      <label className="form-label" htmlFor="reserve-guests">Number of Guests</label>
                      <select 
                        id="reserve-guests" 
                        name="guests" 
                        value={formData.guests} 
                        onChange={handleChange}
                        className="form-input select-input"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5-8">5 - 8 Guests</option>
                        <option value="8+">More than 8</option>
                      </select>
                    </div>
                    
                    <div className="form-group flex-1">
                      <label className="form-label" htmlFor="reserve-date">Select Date</label>
                      <input 
                        type="date" 
                        id="reserve-date" 
                        name="date" 
                        value={formData.date} 
                        onChange={handleChange}
                        className="form-input" 
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="reserve-time">Preferred Time</label>
                    <input 
                      type="time" 
                      id="reserve-time" 
                      name="time" 
                      value={formData.time} 
                      onChange={handleChange}
                      className="form-input" 
                      required 
                    />
                  </div>

                  {bookingStatus === 'error' && (
                    <p className="booking-error">Please fill in all the required fields correctly.</p>
                  )}

                  <button type="submit" className="btn btn-primary w-full btn-submit-booking">
                    Request Table Reservation
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
