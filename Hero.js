import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaChartBar, FaWallet, FaShieldAlt, FaUsers } from 'react-icons/fa';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: '10M+', label: 'Active Users', icon: FaUsers },
    { value: '$2.5B+', label: 'Assets Managed', icon: FaWallet },
    { value: '99.9%', label: 'Uptime', icon: FaShieldAlt },
    { value: '4.9/5', label: 'User Rating', icon: FaChartBar },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span 
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              🚀 Trusted by 10M+ Users
            </motion.span>
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Master Your Finances with
              <span className="gradient-text"> AI-Powered Insights</span>
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Transform your financial future with our comprehensive platform. 
              Track expenses, optimize investments, and achieve your financial goals 
              with cutting-edge technology and personalized recommendations.
            </motion.p>
            
            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <motion.button 
                className="btn-primary btn-large"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <FaArrowRight className="btn-icon" />
              </motion.button>
              
              <motion.button 
                className="btn-demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPlay className="demo-icon" />
                Watch Demo
              </motion.button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="hero-card">
              <div className="dashboard-preview">
                <div className="dashboard-header">
                  <div className="dashboard-title">
                    <div className="dashboard-icon">📊</div>
                    <span>Financial Dashboard</span>
                  </div>
                  <div className="dashboard-status">
                    <div className="status-indicator active"></div>
                    <span>Live Data</span>
                  </div>
                </div>
                
                <div className="dashboard-metrics">
                  <div className="metric-item">
                    <div className="metric-icon income">
                      <FaWallet />
                    </div>
                    <div className="metric-content">
                      <span className="metric-value">$12,450</span>
                      <span className="metric-label">Monthly Income</span>
                      <span className="metric-change positive">+12.5%</span>
                    </div>
                  </div>
                  
                  <div className="metric-item">
                    <div className="metric-icon expenses">
                      <FaChartBar />
                    </div>
                    <div className="metric-content">
                      <span className="metric-value">$8,230</span>
                      <span className="metric-label">Monthly Expenses</span>
                      <span className="metric-change negative">-5.2%</span>
                    </div>
                  </div>
                  
                  <div className="metric-item">
                    <div className="metric-icon savings">
                      <FaShieldAlt />
                    </div>
                    <div className="metric-content">
                      <span className="metric-value">$4,220</span>
                      <span className="metric-label">Total Savings</span>
                      <span className="metric-change positive">+8.7%</span>
                    </div>
                  </div>
                </div>
                
                <div className="chart-container">
                  <div className="chart-placeholder">
                    <div className="chart-line"></div>
                    <div className="chart-points">
                      <div className="chart-point active"></div>
                      <div className="chart-point"></div>
                      <div className="chart-point"></div>
                      <div className="chart-point"></div>
                      <div className="chart-point"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="hero-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              className={`stat-item ${index === currentStat ? 'active' : ''}`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
            >
              <div className="stat-icon">
                <stat.icon />
              </div>
              <div className="stat-content">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
