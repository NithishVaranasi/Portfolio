import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './NavbarStyles.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    closeMenu();
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Nithish</span>
          <span className="logo-accent">Varanasi</span>
        </Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              <span>About</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/projects"
              className={`nav-link ${isActive('/projects') ? 'nav-link-active' : ''}`}
              onClick={closeMenu}
            >
              <span>Projects</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className="nav-link nav-link-cta"
              onClick={closeMenu}
            >
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="icon-close" />
          ) : (
            <FaBars className="icon-menu" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
