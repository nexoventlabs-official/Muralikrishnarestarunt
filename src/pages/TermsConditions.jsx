import React, { useEffect } from 'react';
import { Scale, FileText, CheckSquare, Sparkles } from 'lucide-react';
import './Legal.css'; // Shared legal pages styling sheet

export default function TermsConditions() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="legal-page">
      
      {/* Page Header */}
      <header className="page-header legal-header">
        <div className="header-overlay"></div>
        <div className="container header-content animate-fade-up">
          <span className="page-subtitle">Rules & Agreements</span>
          <h1 className="page-title">Terms & Conditions</h1>
          <div className="header-decoration"><Sparkles size={20} className="text-gold" /></div>
        </div>
      </header>

      {/* Terms Content */}
      <section className="section legal-content-section">
        <div className="container legal-layout-grid">
          
          {/* Left Summary Box */}
          <div className="legal-summary-box glass-panel animate-scale-in">
            <Scale size={36} className="text-gold mb-4" />
            <h3>Standard Agreement</h3>
            <p>By browsing this React website or placing order checkouts, you agree to comply with and be bound by the operating terms of Murali Krishna Restaurant.</p>
            <div className="key-points mt-4">
              <div className="kp-item">
                <CheckSquare size={16} className="text-gold" />
                <span>Fair Culinary Sourcing</span>
              </div>
              <div className="kp-item">
                <FileText size={16} className="text-gold" />
                <span>Clear Delivery Boundaries</span>
              </div>
            </div>
          </div>

          {/* Right Main Terms Text */}
          <div className="legal-main-text glass-panel animate-scale-in">
            <span className="last-updated">Last Updated: May 17, 2026</span>
            
            <h2>1. Order Eligibility</h2>
            <p>
              By submitting an order checkout, you affirm that you are at least 18 years old or possess legal guardian supervision. You agree that all delivery inputs (phone number, complete physical address) are fully accurate.
            </p>

            <h2>2. Payment & Billing</h2>
            <p>
              We offer both secure online card settlements and Cash on Delivery (COD) options. You agree to pay the total grand sum as itemized in the cart invoice (subtotal + 5% GST + delivery fee if applicable). If COD is selected, payments must be completed in cash or instant UPI to our delivery executive upon arrival.
            </p>

            <h2>3. Delivery Area & Timeframes</h2>
            <p>
              We guarantee fresh, hot delivery within our regional boundary radius in Jayankondam and Tiruchirappalli. While ordinary delivery cycles conclude within 35 to 45 minutes, unexpected factors (inclement monsoons, road closures) may occasionally extend these timeframes.
            </p>

            <h2>4. Cancellations & Genuine Refunds</h2>
            <p>
              Because our biryanis, kebabs, and curries are freshly charred and custom portioned per order:
            </p>
            <ul>
              <li>Cancellations are strictly not accepted once the kitchen dispatches your items.</li>
              <li>Refund requests are reviewed strictly for genuine quality defects or incorrect items dispatched. Contact our desk at: <a href="mailto:contact@muralikrishnarestarunt.me" className="text-gold text-underline">contact@muralikrishnarestarunt.me</a> with photo verification for immediate resolution.</li>
            </ul>

            <h2>5. Table Reservation Grace Holds</h2>
            <p>
              For table bookings requested online:
            </p>
            <ul>
              <li>We maintain your select reserved table for a maximum grace period of 15 minutes past your booked time.</li>
              <li>In the event of a delay, please contact our hotline directly at +91 98765 43210 to adjust the booking slot.</li>
            </ul>

            <h2>6. Intellectual Property</h2>
            <p>
              All website content, custom layout graphics, brand stories, menu copy, and names are the exclusive intellectual property of Murali Krishna Restaurant. Any unauthorized distribution, reproduction, or commercial cloning is strictly prohibited.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
