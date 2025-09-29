import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaChartLine, 
  FaLock, 
  FaMobile, 
  FaRobot, 
  FaCreditCard, 
  FaShieldAlt,
  FaPiggyBank,
  FaBell,
  FaGlobe
} from 'react-icons/fa';

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: FaChartLine,
      title: "Advanced Analytics",
      description: "Get deep insights into your financial patterns with AI-powered analytics and predictive modeling.",
      color: "blue",
      details: ["Real-time tracking", "Predictive analytics", "Investment forecasting"]
    },
    {
      icon: FaShieldAlt,
      title: "Bank-Grade Security",
      description: "Your financial data is protectedด้วย 256-bit encryption and multi-factor authentication.",
      color: "green",
      details: ["End-to-end encryption", "2FA Authentication", "Fraud protection"]
    },
    {
      icon: FaMobile,
      title: "Mobile-First Design",
      description: "Access your finances anywhere with our intuitive mobile app designed for modern lifestyles.",
      color: "purple",
      details: ["iOS & Android apps", "Offline access", "Push notifications"]
    },
    {
      icon: FaRobot,
      title: "AI Assistant",
      description: "Meet your personal finance assistant powered by advanced AI to guide your financial journey.",
      color: "orange",
      details: ["Smart recommendations", "Automated budgeting", "Voice commands"]
    },
    {
      icon: FaCreditCard,
      title: "Transaction Management",
      description: "Effortlessly track and categorize every transaction with automatic bank synchronization.",
      color: "red",
      details: ["Auto-categorization", "Receipt scanning", "Smart alerts"]
    },
    {
      icon: FaPiggyBank,
      title: "Smart Savings",
      description: "Achieve your savings goals with intelligent budgeting and automatic round-ups.",
      color: "teal",
      details: ["Goal tracking", "Round-up savings", "Investment plans"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" ref={ref} className="features">
      <div className="features-container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">✨ Features</span>
          <h2 className="section-title">
            Everything you need to manage your finances
          </h2>
          <p className="section-description">
            Our comprehensive platform combines powerful analytics, intuitive design, 
            and cutting-edge technology to give you complete control over your financial future.
          </p>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              className={`feature-card ${feature.color}`}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                scale: 1.02 
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="feature-icon"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <feature.icon />
              </motion.div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <ul className="feature-details">
                  {feature.details.map((detail, idx) => (
                    <li key={idx} className="feature-detail">
                      <span className="detail-icon">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              
              <motion.div 
                className="feature-overlay"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                &nbsp;
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="features-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="integration-logos">
            <span className="integration-label">Trusted by institutions worldwide</span>
            <div className="logo-grid">
              {['Bank A', 'Bank B', 'Credit Union', 'Investment Firm', 'Insurance Co'].map((bank, index) => (
                <motion.div 
                  key={bank}
                  className="bank-logo"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  {bank}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
