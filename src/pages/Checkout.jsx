import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, MapPin, CreditCard, ChevronRight, CheckCircle2, ArrowRight } from 'lucide-react';
import './Checkout.css';

export default function Checkout() {
  const { cart, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();
  const [orderStatus, setOrderStatus] = useState(''); // '', 'success'
  const [orderId, setOrderId] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    paymentMethod: 'cod', // 'cod' or 'card'
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });

  // Calculate pricing summary details
  const gstTax = Math.round(cartTotal * 0.05); // 5% GST
  const deliveryFee = cartTotal > 500 ? 0 : 40; // Free delivery above 500
  const grandTotal = cartTotal + gstTax + deliveryFee;

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.email) {
      alert('Please fill in all mandatory delivery fields.');
      return;
    }
    
    // Generate a beautiful mock order ID
    const randomId = 'MKR-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);
    setOrderStatus('success');
    
    // Clear the cart on successful order
    clearCart();
    // Scroll page to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (orderStatus === 'success') {
    return (
      <div className="order-success-page">
        <div className="container">
          <div className="success-card glass-panel text-center animate-scale-in">
            <CheckCircle2 size={80} className="text-gold check-icon animate-float" />
            <span className="success-tag text-gold">Order Placed Successfully!</span>
            <h1>Thank You For Your Patronage</h1>
            
            <div className="order-details-summary">
              <div className="detail-line">
                <span className="lbl">Order ID:</span>
                <span className="val text-gold font-bold">{orderId}</span>
              </div>
              <div className="detail-line">
                <span className="lbl">Delivery Address:</span>
                <span className="val">{formData.address}</span>
              </div>
              <div className="detail-line">
                <span className="lbl">Recipient:</span>
                <span className="val">{formData.name} ({formData.phone})</span>
              </div>
              <div className="detail-line">
                <span className="lbl">Estimated Delivery Time:</span>
                <span className="val text-gold-light font-bold">35 - 45 Minutes</span>
              </div>
            </div>

            <p className="success-footer-note">
              We have dispatched a receipt details email to <strong>{formData.email}</strong>. Our delivery executive will contact you when they arrive.
            </p>
            
            <div className="success-actions">
              <Link to="/menu" className="btn btn-primary">Order More Delicacies</Link>
              <Link to="/" className="btn btn-secondary">Return to Home</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="container">
        
        {/* Page title */}
        <div className="section-title text-left" style={{ marginBottom: '30px' }}>
          <p>Order Summary & Cart</p>
          <h2>Your Culinary Checkout</h2>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="empty-cart-card glass-panel text-center animate-scale-in">
            <ShoppingBag size={64} className="text-gold mb-4" style={{ margin: '0 auto 16px' }} />
            <h3>Your Shopping Cart is Empty</h3>
            <p>You haven't added any delicacies to your cart yet. Explore our royal menu of heritage Dum Biryanis, seekh kebabs, and desserts.</p>
            <Link to="/menu" className="btn btn-primary mt-4">
              Explore Our Menu
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          /* Active Cart & Checkout Layout */
          <div className="checkout-grid">
            
            {/* Left Column: Billing / Address form */}
            <div className="checkout-left-col">
              <form onSubmit={handlePlaceOrder} className="checkout-form glass-panel animate-scale-in">
                
                {/* Delivery Information Header */}
                <div className="form-section-header">
                  <span className="step-num">01</span>
                  <h3>Delivery Information</h3>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="billing-name">Full Name</label>
                  <input 
                    type="text" 
                    id="billing-name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange}
                    placeholder="E.g., Rajesh Kumar" 
                    className="form-input" 
                    required 
                  />
                </div>

                <div className="form-row">
                  <div className="form-group flex-1">
                    <label className="form-label" htmlFor="billing-phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="billing-phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange}
                      placeholder="E.g., +91 98765 43210" 
                      className="form-input" 
                      required 
                    />
                  </div>
                  <div className="form-group flex-1">
                    <label className="form-label" htmlFor="billing-email">Email Address</label>
                    <input 
                      type="email" 
                      id="billing-email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange}
                      placeholder="E.g., rajesh@mail.com" 
                      className="form-input" 
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="billing-address">Complete Address</label>
                  <textarea 
                    id="billing-address" 
                    name="address" 
                    value={formData.address} 
                    onChange={handleInputChange}
                    placeholder="Enter complete house number, street details, landmark, city and pincode..." 
                    className="form-input" 
                    required 
                  />
                </div>

                {/* Payment Option Header */}
                <div className="form-section-header" style={{ marginTop: '20px' }}>
                  <span className="step-num">02</span>
                  <h3>Payment Method</h3>
                </div>

                <div className="payment-options-grid">
                  <label className={`payment-label ${formData.paymentMethod === 'cod' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="cod" 
                      checked={formData.paymentMethod === 'cod'} 
                      onChange={handleInputChange} 
                      className="hidden-radio"
                    />
                    <div className="payment-label-content">
                      <MapPin size={18} />
                      <div className="txt">
                        <span className="title">Cash on Delivery (COD)</span>
                        <span className="desc">Pay in cash or UPI at arrival</span>
                      </div>
                    </div>
                  </label>

                  <label className={`payment-label ${formData.paymentMethod === 'card' ? 'active' : ''}`}>
                    <input 
                      type="radio" 
                      name="paymentMethod" 
                      value="card" 
                      checked={formData.paymentMethod === 'card'} 
                      onChange={handleInputChange} 
                      className="hidden-radio"
                    />
                    <div className="payment-label-content">
                      <CreditCard size={18} />
                      <div className="txt">
                        <span className="title">Credit / Debit Card</span>
                        <span className="desc">Pay online securely</span>
                      </div>
                    </div>
                  </label>
                </div>

                {/* Card Fields Conditional Display */}
                {formData.paymentMethod === 'card' && (
                  <div className="card-fields-section animate-scale-in">
                    <div className="form-group">
                      <label className="form-label" htmlFor="card-number">Card Number</label>
                      <input 
                        type="text" 
                        id="card-number" 
                        name="cardNumber" 
                        value={formData.cardNumber} 
                        onChange={handleInputChange}
                        placeholder="XXXX XXXX XXXX XXXX" 
                        className="form-input"
                        required={formData.paymentMethod === 'card'}
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group flex-1">
                        <label className="form-label" htmlFor="card-expiry">Expiry Date</label>
                        <input 
                          type="text" 
                          id="card-expiry" 
                          name="cardExpiry" 
                          value={formData.cardExpiry} 
                          onChange={handleInputChange}
                          placeholder="MM/YY" 
                          className="form-input"
                          required={formData.paymentMethod === 'card'}
                        />
                      </div>
                      <div className="form-group flex-1">
                        <label className="form-label" htmlFor="card-cvv">CVV</label>
                        <input 
                          type="password" 
                          id="card-cvv" 
                          name="cardCvv" 
                          value={formData.cardCvv} 
                          onChange={handleInputChange}
                          placeholder="***" 
                          maxLength="3"
                          className="form-input"
                          required={formData.paymentMethod === 'card'}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-full btn-place-order mt-4">
                  Confirm & Place Order (₹{grandTotal})
                </button>

              </form>
            </div>

            {/* Right Column: Invoice / Items listings */}
            <div className="checkout-right-col">
              <div className="order-summary-panel glass-panel animate-scale-in">
                
                <h3>Your Invoice Details</h3>
                <span className="sub">{cartCount} items in cart</span>
                
                {/* Cart list details */}
                <div className="summary-items-list">
                  {cart.map((item) => (
                    <div key={item.id} className="summary-item-card">
                      <img src={item.image} alt={item.name} className="summary-item-img" />
                      <div className="summary-item-info">
                        <h4>{item.name}</h4>
                        <span className="price">₹{item.price} x {item.quantity}</span>
                        
                        <div className="summary-item-controls">
                          {/* Inner quantity increment controllers */}
                          <div className="inner-counter">
                            <button 
                              type="button" 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="inner-btn"
                            >
                              -
                            </button>
                            <span className="inner-val">{item.quantity}</span>
                            <button 
                              type="button" 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="inner-btn"
                            >
                              +
                            </button>
                          </div>
                          
                          {/* Trash button */}
                          <button 
                            type="button" 
                            className="summary-trash-btn" 
                            onClick={() => removeFromCart(item.id)}
                            aria-label="Remove item from cart"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="summary-item-subtotal">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Subtotals & Taxes breakdown list */}
                <div className="invoice-breakdown">
                  <div className="breakdown-line">
                    <span className="label">Basket Subtotal</span>
                    <span className="val">₹{cartTotal}</span>
                  </div>
                  <div className="breakdown-line">
                    <span className="label">GST & Service Tax (5%)</span>
                    <span className="val">₹{gstTax}</span>
                  </div>
                  <div className="breakdown-line">
                    <span className="label">Delivery Fee</span>
                    <span className="val">
                      {deliveryFee === 0 ? (
                        <span className="text-gold font-bold">FREE</span>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>
                  
                  {/* Delivery Info prompt */}
                  {deliveryFee > 0 && (
                    <div className="free-delivery-tip animate-fade-in">
                      💡 Add <span className="highlight">₹{500 - cartTotal}</span> more to unlock <strong>FREE Delivery!</strong>
                    </div>
                  )}

                  <div className="breakdown-line grand-total-line">
                    <span className="label">Grand Total</span>
                    <span className="val">₹{grandTotal}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
