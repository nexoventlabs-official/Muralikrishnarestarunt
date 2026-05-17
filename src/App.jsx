import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import Menu from './pages/Menu';
import ItemDetails from './pages/ItemDetails';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import TermsConditions from './pages/TermsConditions';

import './App.css';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          {/* Global Sticky Navigation Header */}
          <Navbar />
          
          {/* Main Layout Area - Offset by Nav Height */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/menu/:id" element={<ItemDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<LegalNotice />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
