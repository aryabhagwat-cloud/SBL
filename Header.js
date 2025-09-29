import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBars, FaTimes, FaUser, FaBell, FaCog } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="header-container">
        {/* Logo */}
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaChartLine className="logo-icon" />
          <span className="logo-text">FinanceMaster</span>
        </motion.div>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* User Actions */}
        <div className="header-actions">
          <motion.button 
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign In
          </motion.button>
          
          <motion.button 
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>

          {/* User Menu (when logged in) */}
          <div className="user-menu">
            <motion.button 
              className="icon-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaBell />
              <span className="notification-badge">3</span>
            </motion.button>
            
            <motion.button 
              className="icon-btn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaCog />
            </motion.button>
            
            <motion.button 
              className="user-avatar"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser />
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>

        {/* Mobile Menu */}
        <motion.div 
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, x: '100%' }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            x: isMobileMenuOpen ? '0%' : '100%' 
          }}
          transition={{ duration: 0.3 }}
        >
          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <motion.li 
                key={item.name}
                className="mobile-nav-item"
                whileHover={{ x: 10 }}
              >
                <a 
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
            <li className="mobile-nav-item">
              <button className="mobile-btn btn-secondary">Sign In</button>
            </li>
            <li className="mobile-nav-item">
              <button className="mobile-btn btn-primary">Get Started</button>
            </li>
          </ul>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
