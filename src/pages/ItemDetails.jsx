import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { menuData } from '../data/menuData';
import { useCart } from '../context/CartContext';
import DishCard from '../components/DishCard';
import { Star, Clock, Flame, ShoppingCart, ArrowLeft, Heart, Sparkles, Check, CheckCircle } from 'lucide-react';
import './ItemDetails.css';

export default function ItemDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [quantity, setQuantity] = useState(1);
  const [portionSize, setPortionSize] = useState('Regular'); // 'Regular', 'Sharing', 'Royal Feast'
  const [addedNotification, setAddedNotification] = useState(false);
  const [isLoved, setIsLoved] = useState(false);

  // Find corresponding dish
  const dish = useMemo(() => {
    return menuData.find((item) => item.id === parseInt(id));
  }, [id]);

  // Reset local interactive states when dynamic dish ID changes
  useEffect(() => {
    setQuantity(1);
    setPortionSize('Regular');
    setAddedNotification(false);
    // Scroll page to top on navigation
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [id]);

  if (!dish) {
    return (
      <div className="container item-not-found section text-center">
        <h2>Heritage Delicacy Not Found</h2>
        <p className="mt-4 mb-4">The dynamic item you are requesting does not exist in our royal culinary archives.</p>
        <Link to="/menu" className="btn btn-primary">Return to Complete Menu</Link>
      </div>
    );
  }

  // Calculate adjusted price based on selected portion size
  const adjustedPrice = useMemo(() => {
    if (portionSize === 'Sharing') {
      return Math.round(dish.price * 1.8);
    } else if (portionSize === 'Royal Feast') {
      return Math.round(dish.price * 2.6);
    }
    return dish.price;
  }, [portionSize, dish.price]);

  const handleAddToCart = () => {
    // Construct cart item with portion metadata
    const cartItem = {
      ...dish,
      id: `${dish.id}-${portionSize}`, // Unique cart ID for different portion sizes
      name: `${dish.name} (${portionSize})`,
      price: adjustedPrice,
      selectedPortion: portionSize
    };
    
    addToCart(cartItem, quantity);
    setAddedNotification(true);
    
    setTimeout(() => {
      setAddedNotification(false);
    }, 3000);
  };

  // Find related recommended items
  const recommendedItems = useMemo(() => {
    return menuData
      .filter((item) => item.category === dish.category && item.id !== dish.id)
      .slice(0, 3);
  }, [dish.category, dish.id]);

  return (
    <div className="item-details-page">
      <div className="container">
        
        {/* Navigation Breadcrumb back link */}
        <div className="breadcrumb-nav">
          <Link to="/menu" className="back-link">
            <ArrowLeft size={16} />
            Back to Culinary Menu
          </Link>
        </div>

        {/* Dynamic Split Layout Panel */}
        <div className="details-card glass-panel animate-scale-in">
          
          {/* Left Column: Image & Health Badges */}
          <div className="details-image-sec">
            <div className="main-image-wrapper">
              <img src={dish.image} alt={dish.name} className="product-image" />
              {dish.badge && <span className="product-badge badge badge-gold">{dish.badge}</span>}
            </div>
            
            <div className="nutritional-row">
              <div className="nutri-item">
                <Clock size={18} className="text-gold" />
                <div className="nutri-text">
                  <span className="label">Prep Time</span>
                  <span className="val">{dish.prepTime}</span>
                </div>
              </div>
              <div className="nutri-item">
                <Flame size={18} className="text-gold" />
                <div className="nutri-text">
                  <span className="label">Calories</span>
                  <span className="val">{dish.calories} kcal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Portion Modifiers */}
          <div className="details-info-sec">
            <span className="dish-label text-gold">
              <Sparkles size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} />
              {dish.category} Special
            </span>
            
            <div className="details-title-row">
              <h1 className="dish-name">{dish.name}</h1>
              <button 
                className={`love-btn ${isLoved ? 'loved' : ''}`}
                onClick={() => setIsLoved(!isLoved)}
                aria-label="Add to favorites list"
              >
                <Heart size={20} fill={isLoved ? 'var(--gold)' : 'none'} />
              </button>
            </div>

            <div className="rating-row">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < Math.floor(dish.rating) ? 'var(--gold)' : 'none'} 
                    className="star-icon" 
                  />
                ))}
              </div>
              <span className="rating-score">{dish.rating} out of 5</span>
              <span className="divider">|</span>
              <span className="reviews-count">{dish.reviews} Verified reviews</span>
            </div>

            <p className="dish-description">{dish.longDescription}</p>

            {/* Ingredients block */}
            <div className="ingredients-section">
              <h3>Signature Ingredients</h3>
              <div className="ingredients-grid">
                {dish.ingredients.map((ing, i) => (
                  <div key={i} className="ingredient-tag">
                    <Check size={12} className="text-gold" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Portion Selectors */}
            <div className="portion-selector-section">
              <h3>Choose Portion Size</h3>
              <div className="portion-options">
                <button 
                  className={`portion-btn ${portionSize === 'Regular' ? 'active' : ''}`}
                  onClick={() => setPortionSize('Regular')}
                >
                  <span className="portion-title">Regular</span>
                  <span className="portion-desc">Single Serving</span>
                </button>
                <button 
                  className={`portion-btn ${portionSize === 'Sharing' ? 'active' : ''}`}
                  onClick={() => setPortionSize('Sharing')}
                >
                  <span className="portion-title">Sharing (Double)</span>
                  <span className="portion-desc">Good for 2 Guests (+80%)</span>
                </button>
                <button 
                  className={`portion-btn ${portionSize === 'Royal Feast' ? 'active' : ''}`}
                  onClick={() => setPortionSize('Royal Feast')}
                >
                  <span className="portion-title">Royal Feast</span>
                  <span className="portion-desc">Good for 3-4 Guests (+160%)</span>
                </button>
              </div>
            </div>

            {/* Price & Action Triggers */}
            <div className="actions-section">
              <div className="price-display">
                <span className="price-label">Price Tag</span>
                <span className="price-val">₹{adjustedPrice * quantity}</span>
              </div>

              <div className="cart-controls">
                <div className="quantity-counter">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="counter-btn"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="counter-val">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="counter-btn"
                  >
                    +
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart} 
                  className="btn btn-primary btn-add-cart-detail"
                >
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Added notification banner */}
            {addedNotification && (
              <div className="success-banner animate-scale-in">
                <CheckCircle size={18} className="text-gold" />
                <span>Added to cart: {quantity}x {dish.name} ({portionSize})</span>
              </div>
            )}

          </div>

        </div>

        {/* Recommended Items section */}
        {recommendedItems.length > 0 && (
          <section className="section recommendations-section">
            <div className="section-title text-left">
              <p>Complementary Flavors</p>
              <h2>You May Also Delight In</h2>
            </div>
            <div className="recommendations-grid">
              {recommendedItems.map((recItem) => (
                <DishCard key={recItem.id} dish={recItem} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
