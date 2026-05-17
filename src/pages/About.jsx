import React from 'react';
import { Sparkles, Compass, ShieldCheck, Heart, Award } from 'lucide-react';
import './About.css';

export default function About() {
  const chefs = [
    {
      name: "Chef Murali Krishna",
      role: "Grand Master & Founder",
      bio: "With over 35 years of heritage culinary expertise, Chef Murali preserves our original family spice formulations and monitors clay ovens.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Master Raghav Prasad",
      role: "Head Tandoori Artisan",
      bio: "A master of intense clay charcoal heat, Chef Raghav balances perfect marinations to ensure skewers and kebabs remain incredibly juicy.",
      image: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=400&auto=format&fit=crop"
    },
    {
      name: "Chef Priya Sundar",
      role: "Lead Heritage Pâtissier",
      bio: "Chef Priya masterfully reduces organic sweet milk to craft cold Payasams and syrup-drenched golden dumplings.",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="about-page">
      
      {/* About Header */}
      <header className="page-header about-header">
        <div className="header-overlay"></div>
        <div className="container header-content animate-fade-up">
          <span className="page-subtitle">A Rich Culinary Legacy</span>
          <h1 className="page-title">About Our Heritage</h1>
          <div className="header-decoration"><Sparkles size={20} className="text-gold" /></div>
        </div>
      </header>

      {/* The Story Section */}
      <section className="section story-section">
        <div className="container story-grid">
          
          <div className="story-text">
            <span className="section-subtitle-small">The Roots of Taste</span>
            <h2>The Legend of Murali Krishna</h2>
            <p>
              Founded in the rich historical heartland of Tiruchirappalli, Murali Krishna Restaurant began as a small family kitchen dedicated to bringing authentic, slow-cooked royal Indian delicacies to local food lovers. Our founder, Chef Murali Krishna, believed that true food is a form of deep spiritual expression.
            </p>
            <p>
              By using authentic heavy copper handis and seasoned clay tandoors, we have preserved the ancestral techniques of slow dum cooking. Generations later, we remain fiercely committed to these time-honored methods.
            </p>
            <p>
              We have expanded our dining spaces, but our core mission has never shifted: serving extraordinary recipes prepared in small, careful batches, seasoned with hand-pounded spices and infused with a touch of modern luxury.
            </p>
          </div>

          <div className="story-image animate-scale-in">
            <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop" alt="Heritage copper kitchen utensils" className="rounded-image" />
            <div className="story-experience-overlay glass-panel">
              <Compass size={32} className="text-gold" />
              <div>
                <h4>Ancestral Techniques</h4>
                <p>Authentic clay oven charring and sealed coal baking</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Sourcing Slogans / Quality Standards */}
      <section className="section standards-section">
        <div className="container">
          <div className="section-title">
            <p>Zero Compromise Sourcing</p>
            <h2>Gold Quality Standards</h2>
          </div>
          
          <div className="standards-grid">
            <div className="standard-card glass-panel">
              <Award size={36} className="standard-icon" />
              <h3>100% Hand-Ground Spices</h3>
              <p>We avoid pre-packaged powders. All our spices—from cloves and cardamom to dried chilies—are hand-ground inside our kitchens every morning to retain fresh volatile aromatic oils.</p>
            </div>
            
            <div className="standard-card glass-panel">
              <ShieldCheck size={36} className="standard-icon" />
              <h3>Direct-Farm Ingredients</h3>
              <p>We source long-grain Basmati directly from verified crop clusters in northern India, and our local meats are sourced daily from premium, sanitary regional supply networks.</p>
            </div>

            <div className="standard-card glass-panel">
              <Heart size={36} className="standard-icon" />
              <h3>Zero Chemical Colorings</h3>
              <p>The golden yellow in our biryani comes purely from real Kashmiri saffron; the fiery red in seekh kebabs comes strictly from authentic Kashmiri chili pods. We never use artificial chemicals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culinary Team Section */}
      <section className="section team-section">
        <div className="container">
          
          <div className="section-title">
            <p>The Master Craftsmen</p>
            <h2>Meet Our Legendary Chefs</h2>
          </div>

          <div className="chefs-grid">
            {chefs.map((chef, index) => (
              <div key={index} className="chef-card glass-panel animate-scale-in">
                <div className="chef-img-wrapper">
                  <img src={chef.image} alt={chef.name} className="chef-img" />
                </div>
                <div className="chef-info">
                  <span className="chef-role">{chef.role}</span>
                  <h3>{chef.name}</h3>
                  <p>{chef.bio}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Experience Gallery */}
      <section className="section gallery-section">
        <div className="container">
          
          <div className="section-title">
            <p>The Visual Ambience</p>
            <h2>The Fine Dining Experience</h2>
          </div>

          <div className="gallery-grid">
            <div className="gallery-item animate-scale-in">
              <img src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop" alt="Premium candlelit restaurant seating" />
              <div className="gallery-caption">Royal Dining Room</div>
            </div>
            <div className="gallery-item animate-scale-in">
              <img src="https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=500&auto=format&fit=crop" alt="Biryani close-up detail" />
              <div className="gallery-caption">Heritage Saffron Dum Biryani</div>
            </div>
            <div className="gallery-item animate-scale-in">
              <img src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500&auto=format&fit=crop" alt="Skewers grilling over tandoor" />
              <div className="gallery-caption">Tandoor Clay Oven Selections</div>
            </div>
            <div className="gallery-item animate-scale-in">
              <img src="https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=500&auto=format&fit=crop" alt="Mango lassi in clay cup" />
              <div className="gallery-caption">Mango Lassi & Refreshments</div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
