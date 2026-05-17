import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Menu as MenuIcon, X, Sparkles } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle header background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo">
          <span className="logo-icon"><Sparkles size={20} /></span>
          <div className="logo-text">
            <span className="brand-name">MURALI KRISHNA</span>
            <span className="brand-sub">RESTAURANT</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path} 
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Action Controls */}
        <div className="nav-actions">
          <Link to="/checkout" className="cart-trigger" aria-label="View Shopping Cart">
            <ShoppingBag className="cart-icon" size={24} />
            {cartCount > 0 && (
              <span className="cart-badge animate-scale-in">
                {cartCount}
              </span>
            )}
          </Link>

          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <MenuIcon size={26} />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
          <div className="mobile-nav-header">
            <span className="mobile-brand">Murali Krishna</span>
            <button className="mobile-close" onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <ul className="mobile-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mobile-cart-item">
              <Link 
                to="/checkout" 
                className="mobile-btn-cart btn btn-primary"
                onClick={() => setIsOpen(false)}
              >
                <ShoppingBag size={18} />
                View Cart ({cartCount})
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Drawer Overlay */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
}
