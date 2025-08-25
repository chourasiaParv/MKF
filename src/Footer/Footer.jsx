
const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Add Font Awesome CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <footer
        className="pt-5 pb-3"
        style={{
          background: 'linear-gradient(-45deg, #dcd1ce)',
          color: '#3d2940',
        }}
      >
        <div className="container">
          <div className="row g-4 mb-4">
            {/* Brand Column */}
            <div className="col-md-6 col-lg-5">
              <div className="mb-4">
                <h3
                  className="display-5 fw-bold mb-3"
                  style={{ color: '#85494a' }}
                >
                  <span>MKF</span>
                </h3>
                <p className="lead">
                  Experience the finest Italian cuisine in an atmosphere of
                  elegance and warmth. Our passion for authentic flavors makes
                  every visit memorable.
                </p>
              </div>

              {/* Social Icons */}
              <div className="d-flex gap-3 mb-4">
                <a
                  href="https://www.facebook.com/people/Millets-Kitchen-Food/61572172024118/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/mkf_jabalpur/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-danger btn-lg rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/@MILLETSFOODKITCHEN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-info btn-lg rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{ width: '45px', height: '45px' }}
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="col-md-3 col-lg-2 offset-lg-1">
              <h5 className="mb-4" style={{ color: '#85494a' }}>
                Quick Links
              </h5>
              <ul className="nav flex-column">
                {['Home', 'About', 'Menu', 'Contact', 'Reservations'].map(
                  (item) => (
                    <li key={item} className="nav-item mb-2">
                      <button
                        onClick={() => scrollToSection(item.toLowerCase())}
                        className="nav-link p-0 hover-effect"
                        style={{ color: '#3d2940' }}
                      >
                        {item}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Specialties Column */}
            <div className="col-md-3 col-lg-2">
              <h5 className="mb-4" style={{ color: '#85494a' }}>
                Specialties
              </h5>
              <ul className="nav flex-column">
                {[
                  'Authentic Pasta',
                  'Wood-Fired Pizza',
                  'Fresh Seafood',
                  'Italian Wines',
                  'Homemade Desserts',
                ].map((dish) => (
                  <li key={dish} className="nav-item mb-2">
                    <span
                      className="nav-link p-0"
                      style={{ color: '#3d2940' }}
                    >
                      {dish}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-lg-2 d-none d-lg-block">
              <h5 className="mb-4" style={{ color: '#85494a' }}>
                Newsletter
              </h5>
              <p className="small mb-3">Subscribe for updates and special offers</p>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-sm"
                  placeholder="Your email"
                />
                <button className="btn btn-light btn-sm" type="button">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="row pt-4 border-top border-secondary">
            <div className="col-md-6 text-center text-md-start">
              <p className="small mb-3 mb-md-0">
                © 2025 Bella Vista Restaurant. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="small hover-effect"
                    style={{ color: '#3d2940' }}
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="list-inline-item">
                  <span className="mx-2">•</span>
                </li>
                <li className="list-inline-item">
                  <a
                    href="#"
                    className="small hover-effect"
                    style={{ color: '#3d2940' }}
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Custom CSS for hover effects */}
        <style jsx>{`
          .hover-effect {
            transition: all 0.3s ease;
          }
          .hover-effect:hover {
            color: #85494a !important;
            transform: translateX(3px);
          }
          .btn-primary {
            background: linear-gradient(135deg, #0d6efd, #0b5ed7);
          }
          .btn-info {
            background: linear-gradient(135deg, #0dcaf0, #0aa2c0);
          }
          .btn-danger {
            background: linear-gradient(135deg, #dc3545, #bb2d3b);
          }
        `}</style>
      </footer>
    </>
  );
};

export default Footer;
