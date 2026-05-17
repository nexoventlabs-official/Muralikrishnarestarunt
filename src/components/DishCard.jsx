import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Star, Clock, ShoppingCart, Eye } from 'lucide-react';
import './DishCard.css';

export default function DishCard({ dish }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevents triggers if nested inside a link
    addToCart(dish, 1);
  };

  return (
    <div className="dish-card animate-scale-in">
      {/* Category Badge & Image Overlay */}
      <div className="dish-image-wrapper">
        <img src={dish.image} alt={dish.name} className="dish-img" loading="lazy" />
        <div className="dish-overlay">
          <div className="dish-overlay-actions">
            <Link to={`/menu/${dish.id}`} className="action-btn" aria-label="Quick View Details">
              <Eye size={18} />
            </Link>
            <button onClick={handleAddToCart} className="action-btn" aria-label="Add to Shopping Cart">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
        {dish.badge && <span className="dish-badge badge badge-gold">{dish.badge}</span>}
      </div>

      {/* Card Content details */}
      <div className="dish-info">
        <div className="dish-meta">
          <span className="dish-category">{dish.category}</span>
          <div className="dish-rating">
            <Star className="star-icon" size={14} fill="var(--gold)" />
            <span>{dish.rating}</span>
          </div>
        </div>

        <h3 className="dish-name">
          <Link to={`/menu/${dish.id}`}>{dish.name}</Link>
        </h3>
        
        <p className="dish-desc">{dish.shortDescription}</p>

        <div className="dish-footer">
          <span className="dish-price">₹{dish.price}</span>
          <button onClick={handleAddToCart} className="btn btn-primary btn-sm btn-add-cart">
            <ShoppingCart size={14} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
