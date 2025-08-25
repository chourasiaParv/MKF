import React, { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Chrome } from "lucide-react";   // 👈 This line goes here
const ReservationsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '7:00 PM',
    requests: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    // Handle form submission
  };

  return (
    <>
      <style jsx>{`
        /* Advanced Reservation Animations */
        @keyframes reservationBackgroundFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes floatingElements {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.4; }
          50% { transform: translateY(-25px) rotate(360deg); opacity: 0.7; }
        }
        
        @keyframes slideInFromLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInFromRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes fadeInScale {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes magneticPulse {
          0%, 100% { box-shadow: 0 0 30px rgba(255, 107, 53, 0.3); }
          50% { box-shadow: 0 0 60px rgba(255, 107, 53, 0.6), 0 0 90px rgba(255, 107, 53, 0.4); }
        }
        
        @keyframes inputFocusGlow {
          0% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7); }
          70% { box-shadow: 0 0 0 10px rgba(255, 107, 53, 0); }
          100% { box-shadow: 0 0 0 0 rgba(255, 107, 53, 0); }
        }
        
        @keyframes morphingButton {
          0% { border-radius: 25px; }
          25% { border-radius: 35px 15px; }
          50% { border-radius: 15px 35px; }
          75% { border-radius: 35px 15px; }
          100% { border-radius: 25px; }
        }
        
        .luxury-reservation-section {
          background: linear-gradient(-45deg, #dcd1ce);
          background-size: 400% 400%;
          animation: reservationBackgroundFlow 20s ease infinite;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .luxury-reservation-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 165, 0, 0.015) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.01) 0%, transparent 60%);
          pointer-events: none;
        }
        
        .floating-reservation-elements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        
        .reservation-element {
          position: absolute;
          width: 6px;
          height: 6px;
          background: linear-gradient(45deg, #ff6b35, #ffa500);
          border-radius: 50%;
          animation: floatingElements 12s ease-in-out infinite;
        }
        
        .reservation-element:nth-child(1) { top: 15%; left: 15%; animation-delay: 0s; }
        .reservation-element:nth-child(2) { top: 25%; left: 85%; animation-delay: 3s; }
        .reservation-element:nth-child(3) { top: 65%; left: 10%; animation-delay: 6s; }
        .reservation-element:nth-child(4) { top: 85%; left: 80%; animation-delay: 9s; }
        
        .reservation-header-elite {
          animation: fadeInScale 1.2s ease-out;
        }
        
        .gradient-text-elite {
          color: #85494a;
          background: none;
          -webkit-background-clip: unset;
          background-clip: unset;
          -webkit-text-fill-color: unset;
          animation: none;
        }
        
        .premium-reservation-form {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 32px;
          position: relative;
          overflow: hidden;
          animation: fadeInScale 1s ease-out 0.3s both;
        }
        
        .premium-reservation-form::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.05), transparent 50%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        
        .premium-reservation-form:hover::before {
          opacity: 1;
        }
        
        .elite-form-field {
          position: relative;
          animation: slideInFromLeft 0.8s ease-out both;
        }
        
        .elite-form-field:nth-child(even) {
          animation: slideInFromRight 0.8s ease-out both;
        }
        
        .elite-form-field:nth-child(1) { animation-delay: 0.1s; }
        .elite-form-field:nth-child(2) { animation-delay: 0.2s; }
        .elite-form-field:nth-child(3) { animation-delay: 0.3s; }
        .elite-form-field:nth-child(4) { animation-delay: 0.4s; }
        .elite-form-field:nth-child(5) { animation-delay: 0.5s; }
        .elite-form-field:nth-child(6) { animation-delay: 0.6s; }
        .elite-form-field:nth-child(7) { animation-delay: 0.7s; }
        .elite-form-field:nth-child(8) { animation-delay: 0.8s; }
        
        .luxury-form-label {
          color: #3d2940;
          font-weight: 600;
          margin-bottom: 8px;
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }
        
        .luxury-form-label::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ff6b35, #ffa500);
          transition: width 0.4s ease;
        }
        
        .elite-form-field:hover .luxury-form-label::after,
        .elite-form-field:focus-within .luxury-form-label::after {
          width: 100%;
        }
        
        .sophisticated-input,
        .sophisticated-select,
        .sophisticated-textarea {
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          color: #3d2940;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .sophisticated-input::before,
        .sophisticated-select::before,
        .sophisticated-textarea::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
          transition: left 0.6s;
        }
        
        .sophisticated-input:focus,
        .sophisticated-select:focus,
        .sophisticated-textarea:focus {
          border-color: #ff6b35;
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.2);
          transform: translateY(-2px);
          animation: inputFocusGlow 1.5s ease-in-out;
        }
        
        .sophisticated-input:focus::before,
        .sophisticated-select:focus::before,
        .sophisticated-textarea:focus::before {
          left: 100%;
        }
        
        .sophisticated-input::placeholder {
          color: rgba(61, 41, 64, 0.5);
          transition: all 0.3s ease;
        }
        
        .sophisticated-input:focus::placeholder {
          color: rgba(61, 41, 64, 0.3);
          transform: translateX(10px);
        }
        
        .elite-submit-btn {
          background: linear-gradient(135deg, #ff6b35, #ffa500, #ff6b35);
          background-size: 200% 200%;
          border: none;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          animation: magneticPulse 3s ease-in-out infinite, morphingButton 8s ease-in-out infinite;
        }
        
        .elite-submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.8s;
        }
        
        .elite-submit-btn:hover::before {
          left: 100%;
        }
        
        .elite-submit-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transition: all 0.6s ease;
          transform: translate(-50%, -50%);
        }
        
        .elite-submit-btn:hover::after {
          width: 100%;
          height: 100%;
        }
        
        .elite-submit-btn:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 107, 53, 0.4);
          background-size: 100% 100%;
        }
        
        .elite-submit-btn:active {
          transform: translateY(-2px) scale(0.98);
        }
        
        .btn-icon-magnetic {
          transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .elite-submit-btn:hover .btn-icon-magnetic {
          transform: rotate(360deg) scale(1.2);
        }
        
        /* Responsive Enhancements */
        @media (max-width: 768px) {
          .elite-form-field {
            animation: fadeInScale 0.8s ease-out both;
          }
        }
      `}</style>
      
      <section id="reservations" className="luxury-reservation-section py-5">
        <div className="floating-reservation-elements">
          <div className="reservation-element"></div>
          <div className="reservation-element"></div>
          <div className="reservation-element"></div>
          <div className="reservation-element"></div>
        </div>
        
        <div className="container position-relative">
          {/* Enhanced Section Header */}
          <div className="text-center mb-5 reservation-header-elite">
            <h2 className="display-4 fw-bold gradient-text-elite mb-3">
              Reserve Your Experience
            </h2>
            <p className="lead text-opacity-75" style={{ color: '#3d2940' }}>
              Secure your table for an extraordinary culinary journey
            </p>
          </div>
          
          {/* Premium Reservation Form */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="premium-reservation-form p-4 p-md-5 shadow-lg">
                <div>
                  <div className="row g-4">
                    {/* Name Field */}
                    <div className="col-md-6 elite-form-field">
                      <label htmlFor="name" className="form-label luxury-form-label">Full Name</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control form-control-lg sophisticated-input"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    {/* Email Field */}
                    <div className="col-md-6 elite-form-field">
                      <label htmlFor="email" className="form-label luxury-form-label">Email Address</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control form-control-lg sophisticated-input"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    {/* Phone Field */}
                    <div className="col-md-6 elite-form-field">
                      <label htmlFor="phone" className="form-label luxury-form-label">Phone Number</label>
                      <input 
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-control form-control-lg sophisticated-input"
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                    
                    {/* Guests Field */}
                    <div className="col-md-6 elite-form-field">
                      <label htmlFor="guests" className="form-label luxury-form-label">Number of Guests</label>
                      <select 
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="form-select form-select-lg sophisticated-select"
                        required
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6+">6+ Guests</option>
                      </select>
                    </div>
                    
                    {/* Date Field */}
                    <div className="col-md-6 elite-form-field">
                      <label htmlFor="date" className="form-label luxury-form-label">Preferred Date</label>
                      <input 
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="form-control form-control-lg sophisticated-input"
                        required
                      />
                    </div>
                    
                    {/* Time Field */}
                    <div className="col-md-6 elite-form-field">
                      <label htmlFor="time" className="form-label luxury-form-label">Preferred Time</label>
                      <select 
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="form-select form-select-lg sophisticated-select"
                        required
                      >
                        <option value="5:00 PM">5:00 PM</option>
                        <option value="5:30 PM">5:30 PM</option>
                        <option value="6:00 PM">6:00 PM</option>
                        <option value="6:30 PM">6:30 PM</option>
                        <option value="7:00 PM">7:00 PM</option>
                        <option value="7:30 PM">7:30 PM</option>
                        <option value="8:00 PM">8:00 PM</option>
                        <option value="8:30 PM">8:30 PM</option>
                        <option value="9:00 PM">9:00 PM</option>
                      </select>
                    </div>
                    
                    {/* Special Requests */}
                    <div className="col-12 elite-form-field">
                      <label htmlFor="requests" className="form-label luxury-form-label">Special Requests</label>
                      <textarea 
                        id="requests"
                        name="requests"
                        value={formData.requests}
                        onChange={handleInputChange}
                        rows={4}
                        className="form-control sophisticated-textarea"
                        placeholder="Any dietary restrictions, special occasions, or seating preferences..."
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button 
                        type="button"
                        onClick={handleSubmit}
                        className="btn elite-submit-btn btn-lg w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-3 text-white"
                      >
                        <CheckCircle size={20} className="btn-icon-magnetic" />
                        Confirm Reservation
                        <ArrowRight size={18} className="btn-icon-magnetic" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReservationsSection;