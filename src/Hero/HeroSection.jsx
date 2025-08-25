import React, { useState, useEffect } from 'react';
import { Chrome } from "lucide-react";   // 👈 This line goes here
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Exquisite Italian Cuisine",
      subtitle: "Where Tradition Meets Innovation"
    },
    {
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Handcrafted Perfection",
      subtitle: "Every Dish Tells a Story"
    },
    {
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Unforgettable Moments",
      subtitle: "Create Memories That Last"
    }
  ];

  useEffect(() => {
    setIsLoaded(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
        }
        
        .aura-hero-container {
          background: linear-gradient(-45deg, #000000, #0d0d0d, #111111, #000000);         
          min-height: 94vh;
          position: relative;
          overflow: hidden;
        }
        
        .stellar-gradient-text {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: stellar-wave 4s ease-in-out infinite;
          filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.3));
        }
        
        @keyframes stellar-wave {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 0%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        .cosmic-background-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.1) 0%, transparent 50%);
          animation: cosmic-pulse 8s ease-in-out infinite;
        }
        
        @keyframes cosmic-pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        .quantum-slide-transition {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
        }
        
        .quantum-slide-transition.active {
          opacity: 1;
          transform: translateZ(0) rotateY(0deg) scale(1);
        }
        
        .quantum-slide-transition.inactive {
          opacity: 0;
          transform: translateZ(-100px) rotateY(15deg) scale(0.95);
        }
        
        .nebula-image-overlay {
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.7), rgba(26, 26, 46, 0.8), rgba(22, 33, 62, 0.7));
          transition: all 2s ease-in-out;
        }
        
        .nebula-bg-image {
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: brightness(0.4) contrast(1.2) saturate(1.3);
          transition: all 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          animation: nebula-drift 20s linear infinite;
        }
        
        @keyframes nebula-drift {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(0.5deg); }
          50% { transform: scale(1.1) rotate(0deg); }
          75% { transform: scale(1.05) rotate(-0.5deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        
        .aurora-primary-button {
          background: linear-gradient(135deg, #e87c39 0%, #f42613 50%, #da521d 100%);
          border: none;
          color: white;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
          cursor: pointer;
          z-index: 1;
        }
        
        .aurora-primary-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: -1;
        }
        
        .aurora-primary-button::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent, rgba(255,255,255,0.1), transparent);
          animation: aurora-rotate 3s linear infinite;
          z-index: -2;
        }
        
        @keyframes aurora-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .aurora-primary-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.6);
          background: linear-gradient(135deg, #f093fb 0%, #764ba2 50%, #667eea 100%);
        }
        
        .aurora-primary-button:hover::before {
          left: 100%;
        }
        
        .aurora-primary-button span {
          position: relative;
          z-index: 2;
        }
        
        .prism-secondary-button {
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          border: 2px solid rgba(255,255,255,0.2);
          color: white !important;
          font-weight: 600;
          backdrop-filter: blur(15px);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          cursor: pointer;
        }
        
        .prism-secondary-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .prism-secondary-button:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.5);
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
          color: white;
        }
        
        .prism-secondary-button:hover::before {
          left: 100%;
        }
        
        .velocity-arrow-animation {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
        }
        
        .aurora-primary-button:hover .velocity-arrow-animation,
        .prism-secondary-button:hover .velocity-arrow-animation {
          transform: translateX(8px) scale(1.1);
        }
        
        .constellation-dot-indicator {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: none;
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 0 10px rgba(255,255,255,0.2);
          cursor: pointer;
        }
        
        .constellation-dot-indicator::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%);
          border-radius: 50%;
          transition: all 0.5s ease;
        }
        
        .constellation-dot-indicator:hover::before,
        .constellation-dot-indicator.constellation-active-dot::before {
          width: 120%;
          height: 120%;
        }
        
        .constellation-dot-indicator:hover {
          transform: scale(1.4);
          box-shadow: 0 0 20px rgba(255,255,255,0.6);
        }
        
        .constellation-dot-indicator.constellation-active-dot {
          transform: scale(1.2);
          box-shadow: 0 0 15px rgba(102, 126, 234, 0.8);
        }
        
        .matrix-content-entrance {
          animation: matrix-materialize 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-style: preserve-3d;
        }
        
        @keyframes matrix-materialize {
          from {
            opacity: 0;
            transform: translateY(60px) rotateX(20deg) scale(0.9);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
            filter: blur(0px);
          }
        }
        
        .hologram-glass-panel {
          backdrop-filter: blur(3.5px);
          border-radius: 25px;
          padding: 2rem 2.5rem;
          max-width: 700px;
          position: relative;
          overflow: hidden;
        }
        
        .hologram-glass-panel::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          animation: hologram-scan 6s linear infinite;
        }
        
        @keyframes hologram-scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .dimension-title-shadow {
          text-shadow: 0 5px 25px rgba(0,0,0,0.5), 0 0 30px rgba(102, 126, 234, 0.3);
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.1));
        }
        
        .ethereal-subtitle-glow {
          text-shadow: 0 0 25px rgba(255,255,255,0.4), 0 0 50px rgba(102, 126, 234, 0.2);
          filter: drop-shadow(0 2px 10px rgba(0,0,0,0.3));
        }
        
        .nova-particle-field {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .nova-particle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(102, 126, 234, 0.3) 70%, transparent 100%);
          animation: nova-float 8s ease-in-out infinite;
          filter: blur(0.5px);
        }
        
        @keyframes nova-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-15px) translateX(5px) scale(1.1);
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-25px) translateX(-5px) scale(1.2);
            opacity: 0.8;
          }
          75% { 
            transform: translateY(-15px) translateX(3px) scale(1.1);
            opacity: 0.6;
          }
        }
        
        .quantum-entrance-delay-1 { animation-delay: 0.2s; }
        .quantum-entrance-delay-2 { animation-delay: 0.4s; }
        .quantum-entrance-delay-3 { animation-delay: 0.6s; }
        .quantum-entrance-delay-4 { animation-delay: 0.8s; }
        
        .aura-hero-container.loaded .matrix-content-entrance {
          animation-play-state: running;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .hologram-glass-panel {
            padding: 1.5rem 2rem;
            max-width: 95%;
          }
          
          .stellar-gradient-text {
            font-size: 3rem;
          }
        }
        
        /* Mobile-specific adjustments */
        @media (max-width: 576px) {
          .stellar-gradient-text {
            font-size: 2.5rem !important;
          }
          
          .hologram-glass-panel {
            padding: 1.25rem 1.5rem !important;
          }
          
          .btn-lg {
            padding: 0.5rem 1rem !important;
            font-size: 0.9rem !important;
          }
          
          .dimension-title-shadow {
            font-size: 1.5rem !important;
            white-space: normal !important;
          }
          
          .ethereal-subtitle-glow {
            font-size: 1rem !important;
          }
        }
        
        /* Advanced hover interactions */
        .aura-hero-container:hover .cosmic-background-layer {
          animation-duration: 4s;
        }
        
        .aura-hero-container:hover .nebula-bg-image {
          filter: brightness(0.5) contrast(1.3) saturate(1.4);
        }
      `}</style>

      <section className={`aura-hero-container d-flex align-items-center justify-content-center ${isLoaded ? 'loaded' : ''}`}>
        {/* Cosmic background layer */}
        <div className="cosmic-background-layer"></div>
        
        {/* Background Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`quantum-slide-transition ${index === currentSlide ? 'active' : 'inactive'}`}
          >
            <div className="position-absolute top-0 start-0 w-100 h-80 nebula-image-overlay"></div>
            <div 
              className="position-absolute top-0 start-0 w-100 h-100 nebula-bg-image"
              style={{ 
                backgroundImage: `url("${slide.image}")`
              }}
            ></div>
          </div>
        ))}
        
        {/* Nova particle field */}
        <div className="nova-particle-field">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="nova-particle"
              style={{
                width: Math.random() * 6 + 3 + 'px',
                height: Math.random() * 6 + 3 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 8 + 's',
                animationDuration: (Math.random() * 4 + 6) + 's'
              }}
            />
          ))}
        </div>
        
        {/* Main Content */}
        <div className="position-relative text-center text-white px-4 px-sm-5 w-100" style={{ zIndex: 10 }}>
          {/* Centered Card Container */}
          <div className="hologram-glass-panel mx-auto matrix-content-entrance" style={{ 
            width: '100%',
            maxWidth: '900px'
          }}>
            {/* Centered Content */}
            <div className="mx-auto" style={{ maxWidth: '1000px' }}>
              <h1 className="display-1 fw-bold mb-4 stellar-gradient-text quantum-entrance-delay-1">
                MKF
              </h1>
              
              <h2 className="display-5 fw-light mb-4 dimension-title-shadow matrix-content-entrance quantum-entrance-delay-2" 
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}>
                {slides[currentSlide].title}
              </h2>
              
              <p className="leadd mb-4 opacity-90 mx-auto ethereal-subtitle-glow matrix-content-entrance quantum-entrance-delay-3" style={{ maxWidth: '600px' }}>
                {slides[currentSlide].subtitle}
              </p>
              
              <p className="mb-5 opacity-75 mx-auto d-none d-md-block matrix-content-entrance quantum-entrance-delay-4" style={{ maxWidth: '850px' }}>
                Experience authentic Italian flavors in an atmosphere of elegance and warmth...
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 gap-sm-4 justify-content-center align-items-center matrix-content-entrance quantum-entrance-delay-4">
                <button 
                  onClick={() => scrollToSection('reservations')}
                  className="btn aurora-primary-button btn-lg px-3 px-sm-4 py-2 py-sm-3 rounded-pill d-flex align-items-center gap-2 gap-sm-3"
                >
                  <span className="d-flex align-items-center gap-2 gap-sm-3">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    Reserve Your Table
                    <svg className="velocity-arrow-animation" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12,5 19,12 12,19"></polyline>
                    </svg>
                  </span>
                </button>
                
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="btn prism-secondary-button btn-lg px-4 px-sm-5 py-2 py-sm-3 rounded-pill d-flex align-items-center gap-2 gap-sm-3"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18m-9-9v18"></path>
                  </svg>
                  Explore Menu
                  <svg className="velocity-arrow-animation" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Centered Dots - Positioned below card */}
          <div className="d-flex justify-content-center gap-3 gap-sm-4 mt-4 w-100">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`constellation-dot-indicator ${index === currentSlide ? 'constellation-active-dot' : ''}`}
                style={{
                  backgroundColor: index === currentSlide ? '#667eea' : 'rgba(255,255,255,0.3)',
                  width: 'clamp(10px, 2vw, 12px)',
                  height: 'clamp(10px, 2vw, 12px)',
                  borderRadius: '50%',
                  border: 'none',
                  transition: 'background-color 0.3s ease'
                }}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;