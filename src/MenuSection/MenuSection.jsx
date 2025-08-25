import React, { useState } from 'react';
import { Coffee, Star, Heart, ChefHat } from 'lucide-react';

const MenuSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
const menuItems = [
  { 
    name: 'Paneer Butter Masala', 
    price: '₹280 /', 
    description: 'Cottage cheese cubes in creamy tomato-butter gravy with spices', 
    category: 'mains', 
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Dal Tadka', 
    price: '₹200 / $2.5', 
    description: 'Yellow lentils tempered with cumin, garlic, and chili', 
    category: 'mains', 
    image: 'https://i0.wp.com/spicediary.com/wp-content/uploads/2017/08/aIMG_2572_Fotor_Fotor.png?fit=1070%2C713&ssl=1' 
  },
    { 
    name: 'Tandoori Roti', 
    price: '₹25 / $0.3', 
    description: 'Whole wheat flatbread cooked in a clay oven, soft yet slightly crisp', 
    category: 'mains', 
    image: 'https://indianflavorscuisine.com/wp-content/uploads/2024/10/tandoori-roti.jpg'
    },
  { 
    name: 'Jeera Rice', 
    price: '₹150 / $1.8', 
    description: 'Basmati rice tempered with cumin seeds and mild spices', 
    category: 'mains', 
    image: 'https://masalachilli.com/wp-content/uploads/2020/06/Instant-Pot-Jeera-Rice-2.jpg' 
  },
  { 
    name: 'Salad', 
    price: '₹90 / $1.1', 
    description: 'Fresh cucumbers, tomatoes, onions, and lettuce served with lemon', 
    category: 'mains', 
    image: 'https://theyummybowl.com/wp-content/uploads/cucumber-tomato-onion-salad-9.jpg' 
  },
  { 
    name: 'Samosa', 
    price: '₹60 / $0.7', 
    description: 'Crispy pastry filled with spiced potatoes and peas', 
    category: 'starters', 
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80' 
  },
  { 
    name: 'Pani Puri', 
    price: '₹80 / $1', 
    description: 'Hollow puris with spicy tangy water, potatoes, and chickpeas', 
    category: 'starters', 
    image: 'https://www.jkcart.com/uploads/blogs/blogImg_922615519295768484897326741316.jpg' 
  },
  { 
    name: 'Gulab Jamun', 
    price: '₹120 / $1.5', 
    description: 'Fried milk dumplings in saffron-cardamom sugar syrup', 
    category: 'desserts', 
    image: 'https://5.imimg.com/data5/SELLER/Default/2024/2/384944363/DN/MV/KT/144303146/gulab-jamun-desi-ghee.jpg' 
  },
  { 
    name: 'Rasgulla', 
    price: '₹100 / $1.2', 
    description: 'Spongy cheese balls soaked in light sugar syrup', 
    category: 'desserts', 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSob3EerZuChoGLlNXmz5-YZSC4-W-fmFxXSA&s' 
  }
];




  const categories = [
    { id: 'all', name: 'All Menu', icon: Coffee },
    { id: 'starters', name: 'Snacks', icon: Star },
    { id: 'mains', name: 'Main Courses', icon: ChefHat },
    { id: 'desserts', name: 'Dessert', icon: Heart }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <style jsx>{`
        /* Fix: prevent header from cutting section */
        #menu {
          scroll-margin-top: 120px; /* navbar ki height ke hisaab se adjust karna */
        }

        /* Modern Animations & Effects */
        @keyframes floatingParticles {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes slideInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
          50% { box-shadow: 0 0 40px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 107, 53, 0.4); }
        }
        
        @keyframes morphingBorder {
          0% { border-radius: 25px; }
          25% { border-radius: 35px 15px; }
          50% { border-radius: 15px 35px; }
          75% { border-radius: 35px 15px; }
          100% { border-radius: 25px; }
        }
        
        .culinary-masterpiece-section {
          background: linear-gradient(-45deg, #dcd1ce);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .culinary-masterpiece-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 30%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
                           radial-gradient(circle at 80% 70%, rgba(255, 165, 0, 0.02) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .floating-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #85494a);
          border-radius: 50%;
          animation: floatingParticles 8s ease-in-out infinite;
        }
        
        .particle:nth-child(1) { top: 10%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 20%; left: 80%; animation-delay: 2s; }
        .particle:nth-child(3) { top: 60%; left: 20%; animation-delay: 4s; }
        .particle:nth-child(4) { top: 80%; left: 90%; animation-delay: 6s; }
        
        .masterpiece-header { }
        
        .gradient-text {
          background: linear-gradient(135deg,#85494a);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hhh{ color: #85494a; }
        .texttt{ color: #3d2940; }

        .category-filter-btn {
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 2px solid transparent;
          background: linear-gradient(45deg, #3d2940);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: morphingBorder 6s ease-in-out infinite;
          -webkit-text-fill-color: #f8f6f6;
        }
        .lead{ color:#3d2940; }

        .category-filter-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.2), transparent);
          transition: left 0.5s;
        }
        .category-filter-btn:hover::before { left: 100%; }
        .category-filter-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(255, 107, 53, 0.3);
        }
        .category-filter-btn.active {
          background: linear-gradient(135deg, #ff6b35, #ffa500);
          animation: pulseGlow 2s ease-in-out infinite;
          transform: scale(1.1);
          -webkit-text-fill-color: #150e0e;
        }
        
        .premium-dish-card {
          background: linear-gradient(145deg, rgba(140, 12, 12, 0.05), rgba(255, 255, 255, 0.01));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        .premium-dish-card:nth-child(1) { animation-delay: 0.1s; }
        .premium-dish-card:nth-child(2) { animation-delay: 0.2s; }
        .premium-dish-card:nth-child(3) { animation-delay: 0.3s; }
        .premium-dish-card:nth-child(4) { animation-delay: 0.4s; }
        .premium-dish-card:nth-child(5) { animation-delay: 0.5s; }
        .premium-dish-card:nth-child(6) { animation-delay: 0.6s; }

        .dish-image-container { position: relative; overflow: hidden; border-radius: 20px 20px 0 0; }
        .luxury-dish-img { transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .premium-dish-card:hover .luxury-dish-img {
          transform: scale(1.15) rotate(2deg);
          filter: brightness(1.2) saturate(1.3);
        }

        .price-badge-premium {
          background: linear-gradient(135deg, #702c13, #ffa500);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
          animation: pulseGlow 3s ease-in-out infinite;
        }

        .order-btn-deluxe {
          background: linear-gradient(135deg, #24130d, #0c0b08, #ff6b35);
          background-size: 200% 200%;
          border: none;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: gradientShift 4s ease infinite;
        }

        .text-white { color: white !important; }
        .text-dark { color: black !important; }
      `}</style>
      
      <section id="menu" className="culinary-masterpiece-section py-5">
        <div className="floating-particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>
        
        <div className="container position-relative">
          <div className="text-center mb-5 masterpiece-header">
            <h2 className="display-3 fw-bold gradient-text mb-4">
              Culinary Masterpieces
            </h2>
            <p className="lead opacity-75 mx-auto" style={{maxWidth: '700px'}}>
              Each dish is a work of art, carefully crafted with premium ingredients and passionate expertise
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`btn btn-lg d-flex align-items-center gap-2 category-filter-btn ${
                  selectedCategory === category.id ? 'active' : ''
                }`}
              >
                <category.icon 
                  size={18} 
                  className={selectedCategory === category.id ? "text-dark" : "text-white"} 
                />
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Menu Items */}
          <div className="row g-4">
            {filteredItems.map((item, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="premium-dish-card h-100">
                  <div className="dish-image-container">
  <img 
    src={item.image} 
    alt={item.name}
    className="card-img-top luxury-dish-img w-100"
    style={{height: '250px', objectFit: 'cover'}}
  />
  <div 
    className="position-absolute top-0 end-0 price-badge-premium text-white px-3 py-2 fw-bold"
    style={{margin: "10px"}}  // add spacing
  >
    {item.price}
  </div>
</div>

                  <div className="card-body p-4">
                    <h3 className="hhh mb-3 fw-semibold">{item.name}</h3>
                    <p className="texttt opacity-75 mb-4 lh-lg">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuSection;
