import React, { useEffect } from 'react';
import { Shield, Lock, Eye, Sparkles } from 'lucide-react';
import './Legal.css'; // Shared legal pages styling sheet

export default function LegalNotice() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="legal-page">
      
      {/* Page Header */}
      <header className="page-header legal-header">
        <div className="header-overlay"></div>
        <div className="container header-content animate-fade-up">
          <span className="page-subtitle">Security & Trust</span>
          <h1 className="page-title">Privacy Policy</h1>
          <div className="header-decoration"><Sparkles size={20} className="text-gold" /></div>
        </div>
      </header>

      {/* Policy Content */}
      <section className="section legal-content-section">
        <div className="container legal-layout-grid">
          
          {/* Left Summary Box */}
          <div className="legal-summary-box glass-panel animate-scale-in">
            <Shield size={36} className="text-gold mb-4" />
            <h3>Your Privacy Guard</h3>
            <p>At Murali Krishna Restaurant, we treat your personal information with the same level of care and respect that we dedicate to preparing our heritage delicacies.</p>
            <div className="key-points mt-4">
              <div className="kp-item">
                <Lock size={16} className="text-gold" />
                <span>Encrypted Billing Details</span>
              </div>
              <div className="kp-item">
                <Eye size={16} className="text-gold" />
                <span>Zero Third-party Selling</span>
              </div>
            </div>
          </div>

          {/* Right Main Policy Text */}
          <div className="legal-main-text glass-panel animate-scale-in">
            <span className="last-updated">Last Updated: May 17, 2026</span>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when placing an order, requesting table reservations, or submitting contact inquiries. This data includes:
            </p>
            <ul>
              <li><strong>Personal Identifiers:</strong> Your full name, delivery address, phone number, and email address.</li>
              <li><strong>Order History:</strong> Information regarding items added to your cart, payment selections, and customized portions.</li>
              <li><strong>Reservation Details:</strong> Guest counts, dining dates, requested times, and special culinary requests.</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
              Your data is utilized strictly to provide our high standard dining services, including:
            </p>
            <ul>
              <li>Processing your checkout invoices and delivering orders securely.</li>
              <li>Confirming and managing your fine table reservations.</li>
              <li>Responding to custom inquiries, event catering queries, or guest relations feedback.</li>
              <li>Sending necessary service notifications (order receipts, table booking confirmations).</li>
            </ul>

            <h2>3. Secure Online Payments</h2>
            <p>
              If you opt to settle transactions via credit or debit card online, all credential parameters are fully processed via encrypted and secure gateways. Murali Krishna Restaurant does not capture, store, or hold any CVV or sensitive card numbers inside our servers.
            </p>

            <h2>4. Cookies & Persistent Storage</h2>
            <p>
              Our React application utilizes local persistent mechanisms (`localStorage`) to secure your shopping cart basket. This ensures that refreshing the web page does not wipe out your selected delicacies. We do not use intrusive tracking cookies.
            </p>

            <h2>5. Data Retention & Deletion Rights</h2>
            <p>
              We retain customer contact details strictly for service delivery and operational accounting history. You possess absolute rights to request complete data deletion. Drop a message to our support desk email: <a href="mailto:contact@muralikrishnarestarunt.me" className="text-gold text-underline">contact@muralikrishnarestarunt.me</a> and we will scrub your personal parameters immediately.
            </p>

            <h2>6. Revisions to This Policy</h2>
            <p>
              We may occasionally update our privacy procedures to match kitchen expansion or regulatory billing policies. Revisions become immediately active upon uploading to this URL.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
