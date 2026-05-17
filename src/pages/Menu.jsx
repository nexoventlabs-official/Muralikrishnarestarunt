import React, { useState, useMemo } from 'react';
import { menuData } from '../data/menuData';
import DishCard from '../components/DishCard';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import './Menu.css';

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Appetizers', 'Biryanis', 'Main Course', 'Desserts', 'Beverages'];

  const filteredDishes = useMemo(() => {
    return menuData.filter((dish) => {
      const matchesCategory = selectedCategory === 'All' || dish.category === selectedCategory;
      
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = 
        dish.name.toLowerCase().includes(searchLower) ||
        dish.shortDescription.toLowerCase().includes(searchLower) ||
        dish.ingredients.some(ing => ing.toLowerCase().includes(searchLower));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="menu-page">
      
      {/* Menu Page Header */}
      <header className="page-header menu-header">
        <div className="header-overlay"></div>
        <div className="container header-content animate-fade-up">
          <span className="page-subtitle">Exquisite Creations</span>
          <h1 className="page-title">The Culinary Menu</h1>
          <div className="header-decoration"><Sparkles size={20} className="text-gold" /></div>
        </div>
      </header>

      {/* Menu Listing & Search Section */}
      <section className="section menu-section">
        <div className="container">
          
          {/* Controls Bar: Search & Category filter */}
          <div className="menu-controls-bar glass-panel animate-scale-in">
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input 
                type="text" 
                placeholder="Search dishes, ingredients (e.g. mutton, saffron)..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="category-scroll-container">
              <div className="categories-list">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`category-tab-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="results-summary">
            <p>
              Showing <span className="highlight">{filteredDishes.length}</span> {filteredDishes.length === 1 ? 'delicacy' : 'delicacies'} 
              {selectedCategory !== 'All' && <span> under <span className="highlight">{selectedCategory}</span></span>}
              {searchTerm && <span> matching "<span className="highlight">{searchTerm}</span>"</span>}
            </p>
          </div>

          {/* Menu Items Grid */}
          {filteredDishes.length > 0 ? (
            <div className="menu-items-grid">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          ) : (
            <div className="no-results-panel glass-panel text-center animate-scale-in">
              <SlidersHorizontal size={48} className="text-gold mb-4" style={{ margin: '0 auto 16px' }} />
              <h3>No Delicacies Found</h3>
              <p>We couldn't find any dishes matching your specific selection. Try clearing your search filters or exploring a different category.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }} 
                className="btn btn-primary mt-4"
              >
                Reset Filters & View All
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
