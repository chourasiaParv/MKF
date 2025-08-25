import React, { useState, useEffect, useRef } from 'react';
import { Star } from 'lucide-react';


const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`

  /* @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
  .heritage-title, .story-title, .story-text, .heritage-subtitle  {
    font-family: 'Libre Baskerville', serif;
    
  } */


        .heritage-section {
          position: relative;
          overflow: hidden;
          padding: 60px 0;
          display: flex;
          align-items: center;
        }

        .heritage-bg-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(-45deg, #dcd1ce);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }

        .heritage-bg-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 70%, rgba(4, 4, 4, 0.08) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.06) 0%, transparent 50%),
                      radial-gradient(circle at 50% 50%, rgba(5, 5, 5, 0.02) 0%, transparent 70%);
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .heritage-header {
          text-align: center;
          margin-bottom: 40px;
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 1s ease;
        }

        .heritage-title {
          font-size: 3rem;
          font-weight: 600;
          background: linear-gradient(45deg, #85494a);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          position: relative;
        }

        .heritage-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #9f441d, transparent);
        }

        .heritage-subtitle {
          font-size: 1.1rem;
          color: #3d2940;
          font-weight: 300;
          line-height: 1.6;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 20px;
        }

        .heritage-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
          align-items: center;
          width: 100%;
        }

        .heritage-text {
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 1s ease 0.3s;
          width: 100%;
        }

        .heritage-story {
          margin-bottom: 30px;
        }

        .story-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #85494a;
          margin-bottom: 15px;
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 0.8s ease-out 0.5s;
        }

        .story-text {
          font-size: 1rem;
          line-height: 1.7;
          /* color: rgba(36, 36, 36, 0.85); */
          color: #3d2940;
          margin-bottom: 15px;
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 1s ease-out 0.7s;
          /* font-weight:500; */
        }

        .story-text:last-child {
          transition-delay: 0.9s;
        }

        .heritage-image {
          opacity: ${isVisible ? 1 : 0};
          transition: opacity 1s ease 0.5s;
          position: relative;
          width: 100%;
        }

        /* Enhanced Image Container with Modern Animations */
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 15px;
          transform: ${isVisible ? 'scale(1) rotateY(0deg)' : 'scale(0.9) rotateY(-15deg)'};
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
          perspective: 1000px;
        }

        .image-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          z-index: 2;
          transition: left 0.8s ease;
          animation: ${imageLoaded && isVisible ? 'shimmer 2s ease-in-out 0.8s' : 'none'};
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }

        .restaurant-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          transform: ${imageLoaded && isVisible ? 'scale(1)' : 'scale(1.1)'};
          filter: ${imageLoaded && isVisible ? 'blur(0px) brightness(1)' : 'blur(2px) brightness(0.8)'};
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          z-index: 1;
        }

        .restaurant-image:hover {
          transform: scale(1.05);
          filter: brightness(1.1) contrast(1.1);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Floating Animation for Image */
        .image-container.loaded {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1) rotateY(0deg); }
          50% { transform: translateY(-10px) scale(1.01) rotateY(2deg); }
        }

        /* Glowing Border Effect */
        .image-container::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #0e0d0d, #0f0b0b, #0e0c0c, #080808);
          border-radius: 17px;
          z-index: -1;
          opacity: ${isVisible ? 0.6 : 0};
          transition: opacity 1s ease 1s;
          animation: ${isVisible ? 'glow 3s ease-in-out infinite alternate' : 'none'};
        }

        @keyframes glow {
          0% { opacity: 0.3; }
          100% { opacity: 0.8; }
        }

        .heritage-badge {
          position: absolute;
          bottom: 15px;
          left: 15px;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(10px);
          padding: 10px 15px;
          border-radius: 12px;
          border: 1px solid rgba(255, 215, 0, 0.4);
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)'};
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1s;
        }

        .rating-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 5px;
        }

        .rating-star {
          color: #58270e;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'rotate(0deg) scale(1)' : 'rotate(180deg) scale(0.5)'};
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .rating-star:nth-child(1) { transition-delay: 1.2s; }
        .rating-star:nth-child(2) { transition-delay: 1.3s; }
        .rating-star:nth-child(3) { transition-delay: 1.4s; }
        .rating-star:nth-child(4) { transition-delay: 1.5s; }

        .rating-text {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.8rem;
          font-weight: 500;
        }

        .years-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          background: linear-gradient(135deg, #e50b07, #d9791f);
          color: #000;
          padding: 8px 15px;
          border-radius: 40px;
          font-weight: 700;
          font-size: 0.9rem;
          opacity: ${isVisible ? 1 : 0};
          transform: ${isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(-20px) rotate(-10deg)'};
          transition: all 1s cubic-bezier(0.4, 0, 0.2, 1) 1.2s;
          animation: ${isVisible ? 'pulse 2s ease-in-out infinite' : 'none'};
        }

        @keyframes pulse {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-2px) scale(1.05); }
        }

        /* Loading Skeleton Effect */
        .image-skeleton {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: ${!imageLoaded ? 'loading 1.5s infinite' : 'none'};
          border-radius: 15px;
        }

        @keyframes loading {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @media (min-width: 768px) {
          .heritage-section {
            min-height: 100vh;
            padding: 100px 0;
          }
          
          .heritage-title {
            font-size: 3rem;
          }
          
          .heritage-subtitle {
            font-size: 1.2rem;
            max-width: 600px;
            padding: 0;
          }
          
          .heritage-content {
            flex-direction: row;
            gap: 60px;
          }
          
          .heritage-text {
            transform: ${isVisible ? 'translateX(0)' : 'translateX(-50px)'};
            transition: all 1s ease 0.3s;
          }
          
          .heritage-image {
            transform: ${isVisible ? 'translateX(0)' : 'translateX(50px)'};
            transition: all 1s ease 0.5s;
          }
          
          .image-container {
            border-radius: 20px;
          }
          
          .restaurant-image {
            height: 400px;
            border-radius: 20px;
          }
          
          .story-title {
            font-size: 2rem;
          }
          
          .story-text {
            font-size: 1.1rem;
          }
        }

        @media (min-width: 992px) {
          .heritage-title {
            font-size: 3.5rem;
          }
        }
      `}</style>

      <section ref={sectionRef} className="heritage-section">
        <div className="heritage-bg-gradient"></div>
        
        <div className="container position-relative">
          <div className="heritage-header">
            <h2 className="heritage-title">Our Heritage</h2>
            <p className="heritage-subtitle">
              A culinary journey that began four decades ago, rooted in tradition and elevated by innovation
            </p>
          </div>
          
          <div className="heritage-content">
            <div className="heritage-text">
              <div className="heritage-story">
                <h3 className="story-title">From Humble Beginnings</h3>
                <p className="story-text">
                  Founded in 1985 by the Rossi family, Bella Vista started as a small trattoria
                  with a simple mission: to share authentic Italian recipes passed down through generations.
                </p>
                <p className="story-text">
                  Today, we continue that legacy while embracing modern culinary techniques,
                  creating an unforgettable dining experience that honors our roots.
                </p>
              </div>
              
              <div className="heritage-story">
                <h3 className="story-title">Our Philosophy</h3>
                <p className="story-text">
                  Every ingredient is carefully selected, every dish crafted with passion,
                  and every guest treated like family. We believe that great food brings people together,
                  creating moments of joy and connection.
                </p>
              </div>
            </div>
            
            <div className="heritage-image">
              <div className={`image-container ${imageLoaded ? 'loaded' : ''}`}>
                {!imageLoaded && <div className="image-skeleton"></div>}
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Bella Vista Restaurant Interior" 
                  className="restaurant-image"
                  onLoad={() => setImageLoaded(true)}
                />
                
                <div className="heritage-badge">
                  <div className="rating-stars">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="rating-star" />
                    ))}
                  </div>
                  <div className="rating-text">Rated 4/5 by 2,847 guests</div>
                </div>
                
                <div className="years-badge">39 Years</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;