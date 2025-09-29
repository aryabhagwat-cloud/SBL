import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaTwitter, 
  FaLinkedin, 
  FaFacebook, 
  FaInstagram,
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaChevronUp
} from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Dashboard', href: '#dashboard' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'API Documentation', href: '#' },
      { name: 'Changelog', href: '#' }
    ],
    support: [
      { name: 'Help Center', href: '#' },
      { name: 'Contact Support', href: '#' },
      { name: 'System Status', href: '#' },
      { name: 'Tutorials', href: '#' },
      { name: 'Community', href: '#' }
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR', href: '#' },
      { name: 'Security', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' }
  ];

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <motion.div 
        className="newsletter-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3>Stay updated with financial tips</h3>
            <p>Get weekly insights, market updates, and exclusive offers delivered to your inbox.</p>
          </div>
          
          <div className="newsletter-form">
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <motion.button 
                className="newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="newsletter-disclaimer">
              No spam, unsubscribe at any generation!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Brand Section */}
          <motion.div 
            className="footer-brand"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="brand-logo">
              <FaChartLine className="logo-icon" />
              <span className="logo-text">FinanceMaster</span>
            </div>
            
            <p className="brand-description">
              Empowering individuals and businesses to take control of their financial 
              future with AI-driven insight and intuitive tools.
            </p>
            
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.label}
                  href={social.href}
                  className="social-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div><?php

          {/* Quick Links */}
          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
              <motion.div 
                key={category}
                className="footer-link-group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h4 className="link-group-title">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </h4>
                <ul className="link-list">
                  {links.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      className="link-item"
                      whileHover={{ x: 5 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: categoryIndex * 0.1 + index * 0.05 }}
                    >
                      <a href={link.href} className="footer-link">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Info */}
          <motion.div 
            className="footer-contact">
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="contact-title">Contact Info</h4>
            
            <div className="contact-items">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-details">
                  <span>123 Financial Street</span>
                  <span>San Francisco, CA 94105</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <FaPhone className="contact-icon" />
                <div className="contact-details">
                  <span>+1 (555) 123-4567</span>
                  <span>Mon-Fri 9AM-6PM PST</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5 }}
              >
                <FaEnvelope className="contact-icon" />
                <div className="contact-details">
                  <span>support@financemaster.com</span>
                  <span>hello@financemaster.com</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-bottom-container">
          <div className="copyright">
            <p>&copy; 2024 FinanceMaster. All rights reserved.</p>
          </div>
          
          <div className="footer-bottom-links">
            <a href="#" className="bottom-link">Privacy Policy</a>
            <a href="#" className="bottom-link">Terms of Service</a>
            <a href="#" className="bottom-link">Cookies</a>
          </div>
          
          <div className="certifications">
            <span className="cert-badge">🔒 SOC 2 Certified</span>
            <span className="cert-badge">🛡️ GDPR Compliant</span>
            <span className="cert-badge">⭐ PCI DSS Level 1</span>
          </div>
        </div>
      </motion.div>

      {/* Back to Top Button */}
      <motion.button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaChevronUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
