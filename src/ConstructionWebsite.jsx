// import React, { useState, useEffect, useRef } from 'react';

// const ConstructionWebsite = () => {
//   const [activeSection, setActiveSection] = useState('home');
//   const [scrolled, setScrolled] = useState(false);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [navToggled, setNavToggled] = useState(false);
//   const heroRef = useRef(null);

//   useEffect(() => {
//     setIsLoaded(true);
    
//     const handleScroll = () => {
//       const offset = window.scrollY;
//       setScrolled(offset > 100);
      
//       // Parallax effect for hero
//       if (heroRef.current) {
//         heroRef.current.style.transform = `translateY(${offset * 0.5}px)`;
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const services = [
//     {
//       icon: "fas fa-building",
//       title: "Premium Construction",
//       description: "Luxury residential and commercial construction with world-class craftsmanship and attention to detail.",
//       features: ["Custom Architecture", "Sustainable Building", "Project Management", "Quality Assurance"],
//       color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
//     },
//     {
//       icon: "fas fa-palette",
//       title: "Interior Design Excellence",
//       description: "Transform spaces with our award-winning interior design team specializing in luxury and functionality.",
//       features: ["3D Visualization", "Custom Furniture", "Space Planning", "Lighting Design"],
//       color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
//     },
//     {
//       icon: "fas fa-gem",
//       title: "Premium Materials",
//       description: "Curated selection of the finest materials from global suppliers ensuring durability and elegance.",
//       features: ["Italian Marble", "Hardwood Flooring", "Designer Fixtures", "Eco-Friendly Options"],
//       color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
//     }
//   ];

//   const projects = [
//     {
//       id: 1,
//       title: "Luxury Modern Villa",
//       category: "Residential",
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       description: "Award-winning contemporary villa with panoramic views",
//       value: "$2.5M",
//       year: "2024"
//     },
//     {
//       id: 2,
//       title: "Corporate Headquarters",
//       category: "Commercial",
//       image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       description: "Modern corporate complex with sustainable design",
//       value: "$15M",
//       year: "2024"
//     },
//     {
//       id: 3,
//       title: "Boutique Hotel",
//       category: "Hospitality",
//       image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       description: "Luxury boutique hotel with artisanal interiors",
//       value: "$8M",
//       year: "2023"
//     },
//     {
//       id: 4,
//       title: "Penthouse Suite",
//       category: "Residential",
//       image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
//       description: "Exclusive penthouse with custom luxury finishes",
//       value: "$3.2M",
//       year: "2023"
//     }
//   ];

//   const testimonials = [
//     {
//       name: "Victoria Sterling",
//       role: "CEO, Sterling Enterprises",
//       content: "BuildCraft Pro transformed our vision into reality with unparalleled craftsmanship. Their attention to detail and premium materials exceeded our expectations.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1494790108755-2616b332c77c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//     },
//     {
//       name: "Marcus Chen",
//       role: "Property Developer",
//       content: "Working with BuildCraft Pro was exceptional. They delivered our luxury hotel project on time with impeccable quality and innovative design solutions.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//     },
//     {
//       name: "Isabella Rodriguez",
//       role: "Interior Design Consultant",
//       content: "Their interior design team brings creativity and sophistication to every project. The attention to luxury details and client satisfaction is remarkable.",
//       rating: 5,
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//     }
//   ];

//   return (
//     <div className="overflow-hidden">
//       {/* Bootstrap CSS (loaded via CDN simulation) */}
//       <style jsx>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        
//         :root {
//           --primary-gold: #D4AF37;
//           --primary-deep: #B8860B;
//           --secondary-navy: #1a2332;
//           --secondary-dark: #0f1419;
//           --accent-copper: #B87333;
//           --neutral-light: #f8f9fa;
//           --text-primary: #2c3e50;
//           --shadow-primary: 0 10px 40px rgba(0,0,0,0.1);
//           --shadow-hover: 0 20px 60px rgba(0,0,0,0.15);
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: 'Inter', sans-serif;
//           line-height: 1.6;
//           color: var(--text-primary);
//           overflow-x: hidden;
//         }

//         .font-display {
//           font-family: 'Playfair Display', serif;
//         }

//         .navbar-custom {
//           background: ${scrolled ? 'rgba(26, 35, 50, 0.95)' : 'transparent'};
//           backdrop-filter: blur(20px);
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           border-bottom: ${scrolled ? '1px solid rgba(212, 175, 55, 0.2)' : 'none'};
//         }

//         .navbar-brand {
//           font-family: 'Playfair Display', serif;
//           font-weight: 700;
//           font-size: 1.8rem;
//           background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .nav-link {
//           color: white !important;
//           font-weight: 500;
//           position: relative;
//           transition: all 0.3s ease;
//           margin: 0 1rem;
//         }

//         .nav-link::after {
//           content: '';
//           position: absolute;
//           width: 0;
//           height: 2px;
//           bottom: -5px;
//           left: 50%;
//           background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
//           transition: all 0.3s ease;
//           transform: translateX(-50%);
//         }

//         .nav-link:hover::after,
//         .nav-link.active::after {
//           width: 100%;
//         }

//         .nav-link:hover {
//           color: #D4AF37 !important;
//           transform: translateY(-2px);
//         }

//         .hero-section {
//           height: 100vh;
//           background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
//           position: relative;
//           display: flex;
//           align-items: center;
//           overflow: hidden;
//         }

//         .hero-overlay {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(26, 35, 50, 0.8) 0%, rgba(15, 20, 25, 0.9) 100%);
//         }

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           opacity: ${isLoaded ? 1 : 0};
//           transform: translateY(${isLoaded ? '0' : '60px'});
//           transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .hero-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(3rem, 8vw, 6rem);
//           font-weight: 700;
//           line-height: 1.1;
//           background: linear-gradient(135deg, #ffffff 0%, #D4AF37 50%, #B8860B 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           margin-bottom: 2rem;
//         }

//         .hero-subtitle {
//           font-size: 1.5rem;
//           color: rgba(255, 255, 255, 0.9);
//           font-weight: 300;
//           margin-bottom: 3rem;
//           max-width: 600px;
//         }

//         .btn-primary-custom {
//           background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
//           border: none;
//           padding: 1rem 2.5rem;
//           font-weight: 600;
//           border-radius: 50px;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
//           text-transform: uppercase;
//           letter-spacing: 1px;
//         }

//         .btn-primary-custom:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 20px 40px rgba(212, 175, 55, 0.4);
//           background: linear-gradient(135deg, #B8860B 0%, #D4AF37 100%);
//         }

//         .btn-outline-custom {
//           border: 2px solid #D4AF37;
//           color: #D4AF37;
//           background: transparent;
//           padding: 1rem 2.5rem;
//           font-weight: 600;
//           border-radius: 50px;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           text-transform: uppercase;
//           letter-spacing: 1px;
//         }

//         .btn-outline-custom:hover {
//           background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
//           color: white;
//           border-color: transparent;
//           transform: translateY(-3px);
//           box-shadow: 0 20px 40px rgba(212, 175, 55, 0.3);
//         }

//         .section-padding {
//           padding: 120px 0;
//         }

//         .section-title {
//           font-family: 'Playfair Display', serif;
//           font-size: 3.5rem;
//           font-weight: 700;
//           text-align: center;
//           margin-bottom: 1rem;
//           background: linear-gradient(135deg, #1a2332 0%, #D4AF37 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//         }

//         .section-subtitle {
//           text-align: center;
//           font-size: 1.2rem;
//           color: var(--neutral-gray);
//           margin-bottom: 4rem;
//           max-width: 600px;
//           margin-left: auto;
//           margin-right: auto;
//         }

//         .service-card {
//           background: white;
//           border-radius: 20px;
//           padding: 3rem 2rem;
//           box-shadow: var(--shadow-primary);
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           height: 100%;
//           border: 1px solid rgba(212, 175, 55, 0.1);
//           position: relative;
//           overflow: hidden;
//         }

//         .service-card::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           height: 4px;
//           background: var(--gradient-primary);
//           transform: scaleX(0);
//           transition: transform 0.5s ease;
//         }

//         .service-card:hover::before {
//           transform: scaleX(1);
//         }

//         .service-card:hover {
//           transform: translateY(-15px);
//           box-shadow: var(--shadow-hover);
//         }

//         .service-icon {
//           width: 80px;
//           height: 80px;
//           background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
//           border-radius: 20px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 2rem;
//           color: white;
//           margin-bottom: 2rem;
//           transition: all 0.4s ease;
//         }

//         .service-card:hover .service-icon {
//           transform: scale(1.1) rotate(5deg);
//         }

//         .project-card {
//           border-radius: 20px;
//           overflow: hidden;
//           box-shadow: var(--shadow-primary);
//           transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
//           background: white;
//           position: relative;
//         }

//         .project-card:hover {
//           transform: translateY(-10px);
//           box-shadow: var(--shadow-hover);
//         }

//         .project-image {
//           height: 300px;
//           background-size: cover;
//           background-position: center;
//           position: relative;
//           overflow: hidden;
//         }

//         .project-image::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: linear-gradient(135deg, rgba(26, 35, 50, 0.6) 0%, rgba(212, 175, 55, 0.3) 100%);
//           opacity: 0;
//           transition: opacity 0.4s ease;
//         }

//         .project-card:hover .project-image::before {
//           opacity: 1;
//         }

//         .project-overlay {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           text-align: center;
//           color: white;
//           opacity: 0;
//           transition: all 0.4s ease;
//         }

//         .project-card:hover .project-overlay {
//           opacity: 1;
//         }

//         .testimonial-card {
//           background: white;
//           padding: 3rem 2rem;
//           border-radius: 20px;
//           box-shadow: var(--shadow-primary);
//           transition: all 0.4s ease;
//           text-align: center;
//           position: relative;
//           border: 1px solid rgba(212, 175, 55, 0.1);
//         }

//         .testimonial-card:hover {
//           transform: translateY(-10px);
//           box-shadow: var(--shadow-hover);
//         }

//         .testimonial-avatar {
//           width: 80px;
//           height: 80px;
//           border-radius: 50%;
//           margin: 0 auto 1.5rem;
//           border: 4px solid #D4AF37;
//         }

//         .stars {
//           color: #D4AF37;
//           font-size: 1.2rem;
//           margin-bottom: 1.5rem;
//         }

//         .stats-section {
//           background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
//           color: white;
//         }

//         .stat-item {
//           text-align: center;
//           padding: 2rem;
//         }

//         .stat-number {
//           font-family: 'Playfair Display', serif;
//           font-size: 4rem;
//           font-weight: 700;
//           background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//           background-clip: text;
//           display: block;
//           margin-bottom: 0.5rem;
//         }

//         .stat-label {
//           font-size: 1.1rem;
//           font-weight: 500;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           opacity: 0.9;
//         }

//         .contact-section {
//           background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
//         }

//         .contact-form {
//           background: white;
//           padding: 3rem;
//           border-radius: 20px;
//           box-shadow: var(--shadow-primary);
//         }

//         .form-control {
//           border: 2px solid #e9ecef;
//           border-radius: 10px;
//           padding: 1rem;
//           font-size: 1rem;
//           transition: all 0.3s ease;
//         }

//         .form-control:focus {
//           border-color: #D4AF37;
//           box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.25);
//         }

//         .contact-info {
//           background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
//           color: white;
//           padding: 3rem;
//           border-radius: 20px;
//         }

//         .contact-item {
//           display: flex;
//           align-items: center;
//           margin-bottom: 2rem;
//         }

//         .contact-icon {
//           width: 50px;
//           height: 50px;
//           background: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
//           border-radius: 15px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           margin-right: 1rem;
//         }

//         .footer {
//           background: linear-gradient(135deg, #0f1419 0%, #1a2332 100%);
//           color: white;
//           padding: 4rem 0 2rem;
//         }

//         .animate-on-scroll {
//           opacity: 0;
//           transform: translateY(50px);
//           transition: all 0.8s ease;
//         }

//         .animate-on-scroll.animated {
//           opacity: 1;
//           transform: translateY(0);
//         }

//         .floating-elements {
//           position: absolute;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           pointer-events: none;
//           overflow: hidden;
//         }

//         .floating-element {
//           position: absolute;
//           background: rgba(212, 175, 55, 0.1);
//           border-radius: 50%;
//           animation: float 6s ease-in-out infinite;
//         }

//         .floating-element:nth-child(1) {
//           width: 200px;
//           height: 200px;
//           top: 20%;
//           left: 10%;
//           animation-delay: -2s;
//         }

//         .floating-element:nth-child(2) {
//           width: 150px;
//           height: 150px;
//           top: 60%;
//           right: 15%;
//           animation-delay: -4s;
//         }

//         .floating-element:nth-child(3) {
//           width: 100px;
//           height: 100px;
//           bottom: 20%;
//           left: 20%;
//           animation-delay: -1s;
//         }

//         @keyframes float {
//           0%, 100% { transform: translateY(0px) rotate(0deg); }
//           50% { transform: translateY(-20px) rotate(180deg); }
//         }

//         .slide-in-left {
//           transform: translateX(-100px);
//           opacity: 0;
//           transition: all 0.8s ease;
//         }

//         .slide-in-right {
//           transform: translateX(100px);
//           opacity: 0;
//           transition: all 0.8s ease;
//         }

//         .slide-in-left.animated,
//         .slide-in-right.animated {
//           transform: translateX(0);
//           opacity: 1;
//         }

//         @media (max-width: 768px) {
//           .hero-title {
//             font-size: 3rem;
//           }
          
//           .section-title {
//             font-size: 2.5rem;
//           }
          
//           .service-card,
//           .contact-form,
//           .contact-info {
//             margin-bottom: 2rem;
//           }
//         }
//       `}</style>

//       {/* Navigation */}
//       <nav className={`navbar navbar-expand-lg fixed-top navbar-custom`}>
//         <div className="container">
//           <a className="navbar-brand" href="#home">
//             BuildCraft Pro
//           </a>
          
//           <button 
//             className="navbar-toggler border-0" 
//             type="button" 
//             onClick={() => setNavToggled(!navToggled)}
//             style={{color: 'white'}}
//           >
//             <i className={`fas ${navToggled ? 'fa-times' : 'fa-bars'}`} style={{color: 'white'}}></i>
//           </button>
          
//           <div className={`navbar-collapse ${navToggled ? 'show' : 'collapse'}`}>
//             <ul className="navbar-nav ms-auto">
//               {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
//                 <li className="nav-item" key={item}>
//                   <a 
//                     className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
//                     href={`#${item.toLowerCase()}`}
//                     onClick={() => {
//                       setActiveSection(item.toLowerCase());
//                       setNavToggled(false);
//                     }}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="hero-section">
//         <div className="floating-elements">
//           <div className="floating-element"></div>
//           <div className="floating-element"></div>
//           <div className="floating-element"></div>
//         </div>
        
//         <div className="hero-overlay"></div>
        
//         <div ref={heroRef} className="container">
//           <div className="row align-items-center min-vh-100">
//             <div className="col-lg-8">
//               <div className="hero-content">
//                 <h1 className="hero-title">
//                   Crafting
//                   <span className="d-block">Extraordinary</span>
//                   <span className="d-block">Spaces</span>
//                 </h1>
                
//                 <p className="hero-subtitle">
//                   Where visionary architecture meets unparalleled craftsmanship. 
//                   Transform your dreams into stunning reality with our premium construction and interior design services.
//                 </p>
                
//                 <div className="d-flex flex-column flex-sm-row gap-3">
//                   <button className="btn btn-primary-custom btn-lg">
//                     <i className="fas fa-play-circle me-2"></i>
//                     Start Your Project
//                   </button>
//                   <button className="btn btn-outline-custom btn-lg">
//                     <i className="fas fa-images me-2"></i>
//                     View Portfolio
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section id="services" className="section-padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h2 className="section-title animate-on-scroll">Premium Services</h2>
//               <p className="section-subtitle animate-on-scroll">
//                 Delivering excellence through innovative design, superior craftsmanship, and premium materials
//               </p>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             {services.map((service, index) => (
//               <div key={index} className="col-lg-4 col-md-6">
//                 <div className="service-card animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
//                   <div className="service-icon">
//                     <i className={service.icon}></i>
//                   </div>
                  
//                   <h3 className="h4 font-weight-bold mb-3">{service.title}</h3>
//                   <p className="text-muted mb-4">{service.description}</p>
                  
//                   <ul className="list-unstyled">
//                     {service.features.map((feature, i) => (
//                       <li key={i} className="mb-2">
//                         <i className="fas fa-check-circle text-warning me-2"></i>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="stats-section section-padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-6 col-lg-3">
//               <div className="stat-item animate-on-scroll">
//                 <span className="stat-number">500+</span>
//                 <span className="stat-label">Projects Completed</span>
//               </div>
//             </div>
//             <div className="col-6 col-lg-3">
//               <div className="stat-item animate-on-scroll">
//                 <span className="stat-number">50+</span>
//                 <span className="stat-label">Expert Team</span>
//               </div>
//             </div>
//             <div className="col-6 col-lg-3">
//               <div className="stat-item animate-on-scroll">
//                 <span className="stat-number">15+</span>
//                 <span className="stat-label">Years Experience</span>
//               </div>
//             </div>
//             <div className="col-6 col-lg-3">
//               <div className="stat-item animate-on-scroll">
//                 <span className="stat-number">98%</span>
//                 <span className="stat-label">Client Satisfaction</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="section-padding bg-light">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h2 className="section-title animate-on-scroll">Featured Projects</h2>
//               <p className="section-subtitle animate-on-scroll">
//                 Showcasing our finest work in luxury construction and interior design
//               </p>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             {projects.map((project, index) => (
//               <div key={project.id} className="col-lg-6 col-md-6">
//                 <div className="project-card animate-on-scroll" style={{animationDelay: `${index * 0.1}s`}}>
//                   <div 
//                     className="project-image"
//                     style={{backgroundImage: `url(${project.image})`}}
//                   >
//                     <div className="project-overlay">
//                       <h4 className="text-white font-weight-bold">{project.title}</h4>
//                       <p className="text-white mb-0">{project.value}</p>
//                     </div>
//                   </div>
                  
//                   <div className="p-4">
//                     <div className="d-flex justify-content-between align-items-center mb-2">
//                       <span className="badge bg-warning text-dark">{project.category}</span>
//                       <small className="text-muted">{project.year}</small>
//                     </div>
                    
//                     <h5 className="font-weight-bold mb-2">{project.title}</h5>
//                     <p className="text-muted mb-0">{project.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="section-padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h2 className="section-title animate-on-scroll">Client Testimonials</h2>
//               <p className="section-subtitle animate-on-scroll">
//                 What our distinguished clients say about our premium services
//               </p>
//             </div>
//           </div>
          
//           <div className="row g-4">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="col-lg-4 col-md-6">
//                 <div className="testimonial-card animate-on-scroll" style={{animationDelay: `${index * 0.2}s`}}>
//                   <img 
//                     src={testimonial.image} 
//                     alt={testimonial.name}
//                     className="testimonial-avatar"
//                   />
                  
//                   <div className="stars">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <i key={i} className="fas fa-star"></i>
//                     ))}
//                   </div>
                  
//                   <p className="text-muted mb-3 fst-italic">"{testimonial.content}"</p>
                  
//                   <h6 className="font-weight-bold mb-1">{testimonial.name}</h6>
//                   <small className="text-muted">{testimonial.role}</small>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="contact-section section-padding">
//         <div className="container">
//           <div className="row">
//             <div className="col-12">
//               <h2 className="section-title animate-on-scroll">Get In Touch</h2>
//               <p className="section-subtitle animate-on-scroll">
//                 Ready to transform your vision into reality? Let's discuss your dream project
//               </p>
//             </div>
//           </div>
          
//           <div className="row g-5">
//             <div className="col-lg-8">
//               <div className="contact-form animate-on-scroll slide-in-left">
//                 <h4 className="font-weight-bold mb-4">Send us a Message</h4>
                
//                 <div className="row g-3">
//                   <div className="col-md-6">
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       placeholder="First Name"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input 
//                       type="text" 
//                       className="form-control" 
//                       placeholder="Last Name"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input 
//                       type="email" 
//                       className="form-control" 
//                       placeholder="Email Address"
//                     />
//                   </div>
//                   <div className="col-md-6">
//                     <input 
//                       type="tel" 
//                       className="form-control" 
//                       placeholder="Phone Number"
//                     />
//                   </div>
//                   <div className="col-12">
//                     <select className="form-control">
//                       <option>Select Service Type</option>
//                       <option>Residential Construction</option>
//                       <option>Commercial Construction</option>
//                       <option>Interior Design</option>
//                       <option>Renovation</option>
//                       <option>Consultation</option>
//                     </select>
//                   </div>
//                   <div className="col-12">
//                     <textarea 
//                       className="form-control" 
//                       rows="5" 
//                       placeholder="Tell us about your project vision..."
//                     ></textarea>
//                   </div>
//                   <div className="col-12">
//                     <button className="btn btn-primary-custom btn-lg w-100">
//                       <i className="fas fa-paper-plane me-2"></i>
//                       Send Message
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="col-lg-4">
//               <div className="contact-info animate-on-scroll slide-in-right">
//                 <h4 className="font-weight-bold mb-4">Contact Information</h4>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <i className="fas fa-phone"></i>
//                   </div>
//                   <div>
//                     <h6 className="mb-1">Phone</h6>
//                     <p className="mb-0">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <i className="fas fa-envelope"></i>
//                   </div>
//                   <div>
//                     <h6 className="mb-1">Email</h6>
//                     <p className="mb-0">info@buildcraftpro.com</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <i className="fas fa-map-marker-alt"></i>
//                   </div>
//                   <div>
//                     <h6 className="mb-1">Address</h6>
//                     <p className="mb-0">123 Premium Boulevard<br/>Luxury District, LD 12345</p>
//                   </div>
//                 </div>
                
//                 <div className="contact-item">
//                   <div className="contact-icon">
//                     <i className="fas fa-clock"></i>
//                   </div>
//                   <div>
//                     <h6 className="mb-1">Business Hours</h6>
//                     <p className="mb-0">Mon - Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 4:00 PM</p>
//                   </div>
//                 </div>
                
//                 <hr className="my-4" style={{borderColor: 'rgba(212, 175, 55, 0.3)'}} />
                
//                 <h6 className="mb-3">Follow Us</h6>
//                 <div className="d-flex gap-3">
//                   <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '40px', height: '40px'}}>
//                     <i className="fab fa-facebook-f"></i>
//                   </a>
//                   <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '40px', height: '40px'}}>
//                     <i className="fab fa-instagram"></i>
//                   </a>
//                   <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '40px', height: '40px'}}>
//                     <i className="fab fa-linkedin-in"></i>
//                   </a>
//                   <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '40px', height: '40px'}}>
//                     <i className="fab fa-youtube"></i>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="container">
//           <div className="row g-4">
//             <div className="col-lg-4 col-md-6">
//               <h3 className="font-display font-weight-bold mb-3" style={{color: '#D4AF37'}}>
//                 BuildCraft Pro
//               </h3>
//               <p className="text-light opacity-75 mb-4">
//                 Transforming visions into extraordinary spaces through premium construction, 
//                 innovative design, and unparalleled craftsmanship.
//               </p>
//               <div className="d-flex gap-3">
//                 <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '45px', height: '45px'}}>
//                   <i className="fab fa-facebook-f"></i>
//                 </a>
//                 <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '45px', height: '45px'}}>
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '45px', height: '45px'}}>
//                   <i className="fab fa-linkedin-in"></i>
//                 </a>
//                 <a href="#" className="btn btn-outline-light btn-sm rounded-circle" style={{width: '45px', height: '45px'}}>
//                   <i className="fab fa-youtube"></i>
//                 </a>
//               </div>
//             </div>
            
//             <div className="col-lg-2 col-md-6">
//               <h5 className="font-weight-bold mb-3">Services</h5>
//               <ul className="list-unstyled">
//                 <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Construction</a></li>
//                 <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Interior Design</a></li>
//                 <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Renovation</a></li>
//                 <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Consultation</a></li>
//                 <li className="mb-2"><a href="#" className="text-light opacity-75 text-decoration-none">Project Management</a></li>
//               </ul>
//             </div>
            
//             <div className="col-lg-3 col-md-6">
//               <h5 className="font-weight-bold mb-3">Quick Links</h5>
//               <ul className="list-unstyled">
//                 <li className="mb-2"><a href="#home" className="text-light opacity-75 text-decoration-none">Home</a></li>
//                 <li className="mb-2"><a href="#services" className="text-light opacity-75 text-decoration-none">Services</a></li>
//                 <li className="mb-2"><a href="#projects" className="text-light opacity-75 text-decoration-none">Projects</a></li>
//                 <li className="mb-2"><a href="#about" className="text-light opacity-75 text-decoration-none">About</a></li>
//                 <li className="mb-2"><a href="#contact" className="text-light opacity-75 text-decoration-none">Contact</a></li>
//               </ul>
//             </div>
            
//             <div className="col-lg-3 col-md-6">
//               <h5 className="font-weight-bold mb-3">Newsletter</h5>
//               <p className="text-light opacity-75 mb-3">
//                 Subscribe to get updates on our latest projects and design trends.
//               </p>
//               <div className="d-flex">
//                 <input 
//                   type="email" 
//                   className="form-control me-2" 
//                   placeholder="Your email"
//                   style={{background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white'}}
//                 />
//                 <button className="btn btn-primary-custom">
//                   <i className="fas fa-paper-plane"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           <hr className="my-4" style={{borderColor: 'rgba(255,255,255,0.1)'}} />
          
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <p className="text-light opacity-75 mb-0">
//                 © 2025 BuildCraft Pro. All rights reserved.
//               </p>
//             </div>
//             <div className="col-md-6 text-md-end">
//               <a href="#" className="text-light opacity-75 text-decoration-none me-3">Privacy Policy</a>
//               <a href="#" className="text-light opacity-75 text-decoration-none me-3">Terms of Service</a>
//               <a href="#" className="text-light opacity-75 text-decoration-none">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {/* Scroll to Top Button */}
//       <button 
//         className={`btn btn-primary-custom position-fixed bottom-0 end-0 m-4 rounded-circle ${scrolled ? 'd-block' : 'd-none'}`}
//         style={{width: '50px', height: '50px', zIndex: 1000}}
//         onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//       >
//         <i className="fas fa-arrow-up"></i>
//       </button>

//       {/* Bootstrap JS and Animation Script */}
//       <script 
//         dangerouslySetInnerHTML={{
//           __html: `
//             // Animate elements on scroll
//             const observerOptions = {
//               threshold: 0.1,
//               rootMargin: '0px 0px -50px 0px'
//             };

//             const observer = new IntersectionObserver((entries) => {
//               entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                   entry.target.classList.add('animated');
//                 }
//               });
//             }, observerOptions);

//             // Observe all animation elements
//             document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right').forEach(el => {
//               observer.observe(el);
//             });

//             // Smooth scroll for navigation links
//             document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//               anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                   target.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'start'
//                   });
//                 }
//               });
//             });

//             // Update active navigation item on scroll
//             window.addEventListener('scroll', () => {
//               const sections = document.querySelectorAll('section[id]');
//               const scrollPos = window.scrollY + 100;

//               sections.forEach(section => {
//                 const sectionTop = section.offsetTop;
//                 const sectionHeight = section.offsetHeight;
//                 const sectionId = section.getAttribute('id');

//                 if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
//                   document.querySelectorAll('.nav-link').forEach(link => {
//                     link.classList.remove('active');
//                   });
//                   const activeLink = document.querySelector('.nav-link[href="#' + sectionId + '"]');
//                   if (activeLink) {
//                     activeLink.classList.add('active');
//                   }
//                 }
//               });
//             });
//           `
//         }}
//       />
//     </div>
//   );
// };

// export default ConstructionWebsite;