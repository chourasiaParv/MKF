import React, { useState, useEffect, useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Plot No 38 & 39, IT Park",
        "Bargi Hills",
        "Jabalpur, MP - 482003",
      ],
      gradient: "bg-gradient-blue",
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: [
        "Mon - Sat: 8 AM to 8 PM",
        "Sun: 9 AM to 2 PM",
      ],



      gradient: "bg-gradient-green",
    },
    {
      icon: Phone,
      title: "Contact",
      details: ["9922913195", "milletsfoodkitchen@gmail.com", "Follow @mkf_jabalpur"],
      gradient: "bg-gradient-purple",
    },
  ];

  return (
    <>
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      
      <style jsx>{`
        .contact-wrapper {
           background: linear-gradient(-45deg, #dcd1ce); 
           position: relative;
          overflow: hidden;
          min-height: 100vh;
          padding: 120px 0;
        }

        .contact-wrapper::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(56, 178, 172, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.06) 0%, transparent 50%);
          animation: atmosphericFloat 15s ease-in-out infinite;
        }

        @keyframes atmosphericFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }

        .contact-header-zone {
          text-align: center;
          margin-bottom: 80px;
          transform: ${isVisible ? 'translateY(0)' : 'translateY(80px)'};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-main-title {
          font-size: 3.8rem;
          font-weight: 800;
          background: linear-gradient(45deg, #85494a);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 24px;
          animation: gradientShimmer 4s ease-in-out infinite;
          position: relative;
        }

        .contact-main-title::after {
          content: '';
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #e33809, #c85a27, transparent);
          animation: titleUnderlineGlow 3s ease-in-out infinite;
        }

        @keyframes gradientShimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes titleUnderlineGlow {
          0%, 100% { opacity: 0.7; width: 120px; }
          50% { opacity: 1; width: 180px; }
        }

        .contact-subtitle-text {
          font-size: 1.4rem;
          color: #3d2940;
          font-weight: 300;
          line-height: 1.7;
          max-width: 700px;
          margin: 0 auto;
        }

        .contact-cards-grid {
          margin-bottom: 80px;
        }

        .contact-info-card {
          height: 100%;
          border: none;
          background: linear-gradient(45deg,#3d2940 );;
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px 30px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transform: ${isVisible ? 'translateY(0)' : 'translateY(60px)'};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .contact-info-card:nth-child(1) { transition-delay: 0.2s; }
        .contact-info-card:nth-child(2) { transition-delay: 0.4s; }
        .contact-info-card:nth-child(3) { transition-delay: 0.6s; }

        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.8s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-15px) scale(1.03);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .contact-info-card:hover::before {
          left: 100%;
        }

        .icon-container-sphere {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px auto;
          position: relative;
          animation: ${isVisible ? 'iconFloat 3s ease-in-out infinite' : 'none'};
        }

        .icon-container-sphere:nth-child(1) { animation-delay: 0s; }
        .icon-container-sphere:nth-child(2) { animation-delay: 0.5s; }
        .icon-container-sphere:nth-child(3) { animation-delay: 1s; }

        @keyframes iconFloat {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }

        .bg-gradient-blue {
          background: linear-gradient(135deg, #f4430e, #e32807);
          box-shadow: 0 10px 30px rgba(74, 144, 226, 0.3);
        }

        .bg-gradient-green {
          background: linear-gradient(135deg, #f4430e, #e32807);
          box-shadow: 0 10px 30px rgba(56, 178, 172, 0.3);
        }

        .bg-gradient-purple {
          background: linear-gradient(135deg, #f4430e, #e32807);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
        }

        .contact-card-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #fbf3f3;
          margin-bottom: 25px;
          position: relative;
        }

        .contact-detail-text {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 12px;
          font-size: 1rem;
          transition: color 0.3s ease;
        }

        .contact-info-card:hover .contact-detail-text {
          color: rgba(255, 255, 255, 0.95);
        }

        .map-section-container {
          padding: 80px 0;
        }

        .map-display-card {
          height: 400px;
          border: none;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          transform: ${isVisible ? 'scale(1)' : 'scale(0.9)'};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s;
          position: relative;
        }

        .map-display-card:hover {
          transform: scale(1.02);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.5);
        }

        .image-display-card {
          height: 400px;
          border: none;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(15px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          transform: ${isVisible ? 'scale(1)' : 'scale(0.9)'};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1.6s cubic-bezier(0.4, 0, 0.2, 1) 1s;
          position: relative;
        }

        .image-display-card:hover {
          transform: scale(1.02);
          box-shadow: 0 35px 70px rgba(0, 0, 0, 0.5);
        }

        .contact-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }

        .image-display-card:hover .contact-image {
          transform: scale(1.05);
        }

        .map-content-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 40px;
          height: 100%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
        }

        .map-icon-large {
          color: #4A90E2;
          margin-bottom: 20px;
          animation: ${isVisible ? 'mapIconPulse 2s ease-in-out infinite' : 'none'};
        }

        @keyframes mapIconPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        .map-location-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .map-location-subtitle {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.95rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .contact-main-title {
            font-size: 2.8rem;
          }
          
          .contact-subtitle-text {
            font-size: 1.2rem;
          }
          
          .contact-info-card {
            margin-bottom: 30px;
          }
          
          .map-section-container {
            padding: 60px 0;
          }
          
          .image-display-card {
            margin-top: 30px;
          }
        }
      `}</style>

      <section ref={sectionRef} id="contact" className="contact-wrapper">
        <div className="container position-relative">
          {/* Section Header */}
          <div className="contact-header-zone">
            <h2 className="contact-main-title">Get In Touch</h2>
            <p className="contact-subtitle-text">
              We'd love to welcome you to Bella Vista. Contact us for any
              inquiries or special arrangements
            </p>
          </div>

          {/* Contact Cards */}
          <div className="row g-4 g-lg-5 contact-cards-grid">
            {contactInfo.map((info, index) => (
              <div key={index} className="col-md-4">
                <div className="contact-info-card">
                  {/* Centered Icon Container */}
                  <div className="d-flex justify-content-center mb-4">
                    <div className={`${info.gradient} icon-container-sphere`}>
                      <info.icon className="text-white" size={32} />
                    </div>
                  </div>
                  <h3 className="contact-card-title">{info.title}</h3>
                  <div className="px-0">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="contact-detail-text">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="map-section-container">
            <div className="row g-4">
              {/* Map - Left Side */}
              <div className="col-lg-6">
                <div
                  className="map-display-card"
                  style={{
                    position: "relative",
                    height: "400px",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <iframe
                    title="Our Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83924414364!2d77.068899!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b31dbfc4d5%3A0xa70c0cb64a6b740!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1695634567890!5m2!1sen!2sin&zoomcontrol=1"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "0",
                    }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>

                  <div
                    className="map-content-center"
                    style={{
                      position: "absolute",
                      bottom: "15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      // background: "rgba(255, 255, 255, 0.9)",
                      padding: "10px 15px",
                      borderRadius: "8px",
                      zIndex: 1,
                      textAlign: "center",
                    }}
                  >
                    <h3 className="map-location-title" style={{ margin: 0 }}>
                      {/* Our Location */}
                    </h3>
                    <p className="map-location-subtitle" style={{ margin: 0 }}>
                      {/* Find us in the heart of downtown */}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="col-lg-6">
                <div className="image-display-card">
                  <img
                    src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Restaurant Interior"
                    className="contact-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;