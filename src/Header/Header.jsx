import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("hero"); // track active menu
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId) => {
    setActiveLink(sectionId); // set active on click
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* --- Fix Reservation Title Overlap --- */}
      <style>{`
        #reservation {
          scroll-margin-top: 120px; /* navbar height */
        }
      `}</style>

      <header
        className={`fixed-top shadow-lg ${isScrolled ? "header-blur" : ""}`}
        style={{ zIndex: 1040 }}
      >
        {/* Main Navigation */}
        <nav
          className={`navbar navbar-expand-lg py-1 ${
            isScrolled ? "py-2 scrolled" : ""
          }`}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <div className="container-fluid px-0">
            {/* Logo */}
            <Link
              to="/"
              className="navbar-brand navbar-brand-custom border-0 bg-transparent p-0 ms-0"
              onClick={() => handleNavigation("hero")}
              style={{ marginLeft: 0 }}
            >
              <img
                src="/MFK LOGO (2).png"
                alt="Restaurant Logo"
                className="logo-img"
                style={{ marginLeft: 0 }}
              />
            </Link>

            {/* Phone Number */}
            <div
              className="phone-number d-none d-lg-flex align-items-center"
              style={{ color: isScrolled ? "#3d2940" : "white" }}
            >
              <i className="bi bi-telephone phone-icon"></i>
              +91 9922913195
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="navbar-toggler navbar-toggler-custom ms-auto"
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
              aria-expanded={isMenuOpen}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Nav Links */}
            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
                {[
                  { id: "hero", icon: "house", label: "Home" },
                  { id: "about", icon: "info-circle", label: "About" },
                  { id: "menu", icon: "card-list", label: "Menu" },
                  { id: "contact", icon: "envelope", label: "Contact" },
                ].map((link) => (
                  <li className="nav-item" key={link.id}>
                    <Link
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(link.id);
                      }}
                      className={`nav-link nav-link-custom ${
                        activeLink === link.id ? "active-link" : ""
                      }`}
                      style={{
                        color: isScrolled ? "#3d2940" : "white",
                        borderBottom:
                          activeLink === link.id
                            ? "2px solid #3d2940"
                            : "2px solid transparent",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <i className={`bi bi-${link.icon} me-2`}></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Reservation & Social Icons */}
              <div className="d-flex align-items-center ms-lg-4 mt-3 mt-lg-0 gap-3">
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("reservation");
                  }}
                  className="btn btn-reservation"
                >
                  <i className="bi bi-calendar-check me-2"></i>Reservation
                </Link>
                <div className="d-flex align-items-center gap-2">
                  {[
                    { href: "https://facebook.com", icon: "facebook" },
                    { href: "https://instagram.com", icon: "instagram" },
                    { href: "https://youtube.com", icon: "youtube" },
                  ].map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      style={{ color: isScrolled ? "#3d2940" : "#f3f6fa" }}
                    >
                      <i className={`bi bi-${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
