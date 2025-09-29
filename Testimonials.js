import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaQuoteLeft, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Freelance Designer",
      image: "👩‍💼",
      rating: 5,
      text: "FinanceMaster helped me transform my chaotic finances into a well-organized system. The AI insights are incredibly accurate and the mobile app is perfect for my busy lifestyle.",
      stats: "Saved $3,200 in 6 months"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      image: "👨‍💻",
      rating: 5,
      text: "As someone who loves data, the analytics dashboard is a dream come true. I can see exactly where my money goes and make informed investment decisions.",
      stats: "Investment returns up 45%"
    },
    {
      name: "Emily Rodriguez",
      role: "Small Business Owner",
      image: "👩‍💼",
      rating: 5,
      text: "The expense tracking and budget recommendations are spot on. My business finances are now crystal clear, and I've saved hours every week on financial planning.",
      stats: "Business efficiency up 60%"
    },
    {
      name: "David Thompson",
      role: "Marketing Manager",
      image: "👨‍💼",
      rating: 5,
      text: "The security features give me complete peace of mind. Bank-grade encryption and two-factor authentication mean my financial data is always protected.",
      stats: "Zero security incidents"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="testimonials">
      <div className="testimonials-container">
        <motion.div 
          className="testimonials-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">💬 Testimonials</span>
          <h2 className="section-title">
            Loved by thousands of users worldwide
          </h2>
          <p className="section-description">
            See how FinanceMaster is helping people take control of their finances 
            and achieve their financial goals.
          </p>
        </motion.div>

        <motion.div 
          className="testimonials-content"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="testimonials-carousel">
            <motion.div 
              key={currentTestimonial}
              className="testimonial-card"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                
                <div className="testimonial-text">
                  <p>"{testimonials[currentTestimonial].text}"</p>
                </div>
                
                <div className="testimonial-rating">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <FaStar key={i} className="star filled" />
                  ))}
                </div>
                
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonials[currentTestimonial].image}
                  </div>
                  <div className="author-info">
                    <span className="author-name">
                      {testimonials[currentTestimonial].name}
                    </span>
                    <span className="author-role">
                      {testimonials[currentTestimonial].role}
                    </span>
                  </div>
                </div>
                
                <div className="testimonial-stats">
                  <span className="stats-text">
                    {testimonials[currentTestimonial].stats}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="testimonials-controls">
            <motion.button 
              className="control-btn prev"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowLeft />
            </motion.button>
            
            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
            
            <motion.button 
              className="control-btn next"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaArrowRight />
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          className="testimonials-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stats-grid">
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <span className="stat-number">4.9</span>
              <span className="stat-label">App Store Rating</span>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <span className="stat-number">98%</span>
              <span className="stat-label">User Satisfaction</span>
            </motion.div>
            
            <motion.div 
              className="stat-item"
              whileHover={{ scale: 1.05 }}
            >
              <span className="stat-number">10M+</span>
              <span className="stat-label">Happy Users</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
