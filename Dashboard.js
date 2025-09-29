import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { 
  FaArrowUp, 
  FaArrowDown, 
  FaEye, 
  FaPlay,
  FaChartArea,
  FaDollarSign,
  FaTasks,
  FaTrendingUp
} from 'react-icons/fa';

const Dashboard = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [activeTab, setActiveTab] = useState('overview');

  const metrics = [
    {
      title: "Total Balance",
      value: 156789,
      change: 12.5,
      positive: true,
      icon: FaDollarSign,
      color: "green"
    },
    {
      title: "Monthly Income",
      value: 12500,
      change: 8.3,
      positive: true,
      icon: FaTrendingUp,
      color: "blue"
    },
    {
      title: "Expenses",
      value: 8200,
      change: -3.2,
      positive: false,
      icon: FaChartArea,
      color: "red"
    },
    {
      title: "Savings Rate",
      value: 34,
      change: 5.7,
      positive: true,
      icon: FaTasks,
      color: "purple"
    }
  ];

  const transactions = [
    { id: 1, type: 'income', description: 'Freelance Payment', amount: 2500, category: 'Work' },
    { id: 2, type: 'expense', description: 'Grocery Shopping', amount: -120, category: 'Food' },
    { id: 3, type: 'expense', description: 'Gas Station', amount: -45, category: 'Transport' },
    { id: 4, type: 'income', description: 'Investment Returns', amount: 850, category: 'Investments' },
    { id: 5, type: 'expense', description: 'Electric Bill', amount: -180, category: 'Utilities' }
  ];

  return (
    <section id="dashboard" ref={ref} className="dashboard-section">
      <div className="dashboard-container">
        <motion.div 
          className="dashboard-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="dashboard-header-content">
            <span className="section-badge">📊 Live Dashboard</span>
            <h2 className="section-title">
              See your finances in real-time
            </h2>
            <p className="section-description">
              Monitor your financial health with our comprehensive dashboard featuring 
              live data, smart insights, and actionable recommendations.
            </p>
          </div>
          
          <motion.button 
            className="demo-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPlay className="demo-icon" />
            Interactive Demo
          </motion.button>
        </motion.div>

        <motion.div 
          className="dashboard-preview"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="dashboard-widget">
            <div className="dashboard-nav">
              <button 
                className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`nav-tab ${activeTab === 'transactions' ? 'active' : ''}`}
                onClick={() => setActiveTab('transactions')}
              >
                Transactions
              </button>
              <button 
                className={`nav-tab ${activeTab === 'analytics' ? 'active' : ''}`}
                onClick={() => setActiveTab('analytics')}
              >
                Analytics
              </button>
            </div>

            <div className="dashboard-content">
              {activeTab === 'overview' && (
                <motion.div 
                  className="overview-tab"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="metrics-grid">
                    {metrics.map((metric, index) => (
                      <motion.div 
                        key={metric.title}
                        className={`metric-card ${metric.color}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        whileHover={{ scale: 1.03 }}
                      >
                        <div className="metric-header">
                          <div className="metric-icon">
                            <metric.icon />
                          </div>
                          <span className="metric-title">{metric.title}</span>
                        </div>
                        
                        <div className="metric-value">
                          {metric.title === 'Total Balance' ? (
                            <CountUp 
                              end={metric.value} 
                              duration={2}
                              separator=","
                              prefix="$"
                              enableScrollSpy
                              scrollSpyOnce={true}
                            />
                          ) : metric.title === 'Savings Rate' ? (
                            <CountUp 
                              end={metric.value} 
                              duration={2}
                              suffix="%"
                              enableScrollSpy
                              scrollSpyOnce={true}
                            />
                          ) : (
                            <CountUp 
                              end={metric.value} 
                              duration={2}
                              separator=","
                              prefix="$"
                              enableScrollSpy
                              scrollSpyOnce={true}
                            />
                          )}
                        </div>
                        
                        <div className={`metric-change ${metric.positive ? 'positive' : 'negative'}`}>
                          {metric.positive ? <FaArrowUp /> : <FaArrowDown />}
                          <span>{Math.abs(metric.change)}% this month</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="chart-section">
                    <div className="chart-header">
                      <h3>Spending Trends</h3>
                      <div className="chart-controls">
                        <button className="control-btn active">7D</button>
                        <button className="control-btn">30D</button>
                        <button className="control-btn">90D</button>
                      </div>
                    </div>
                    <div className="chart-placeholder">
                      <div className="chart-area">
                        <svg viewBox="0 0 300 150" className="chart-svg">
                          <path 
                            d="M10,140 Q75,100 150,80 T290,40" 
                            fill="url(#chartGradient)"
                            opacity="0.3"
                          />
                          <path 
                            d="M10,140 Q75,100 150,80 T290,40" 
                            stroke="url(#chartStroke)"
                            strokeWidth="3"
                            fill="none"
                          />
                          <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                              <stop offset="0%" stopColor="#667eea" stopOpacity="0.8"/>
                              <stop offset="100%" stopColor="#764ba2" stopOpacity="0.2"/>
                            </linearGradient>
                            <linearGradient id="chartStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#667eea"/>
                              <stop offset="100%" stopColor="#764ba2"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'transactions' && (
                <motion.div 
                  className="transactions-tab"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="transactions-header">
                    <h3>Recent Transactions</h3>
                    <button className="view-all-btn">
                      <FaEye />
                      View All
                    </button>
                  </div>
                  
                  <div className="transactions-list">
                    {transactions.map((transaction, index) => (
                      <motion.div 
                        key={transaction.id}
                        className={`transaction-item ${transaction.type}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="transaction-info">
                          <div className={`transaction-icon ${transaction.category.toLowerCase()}`}>
                            {transaction.type === 'income' ? '📈' : '💳'}
                          </div>
                          <div className="transaction-details">
                            <span className="transaction-desc">{transaction.description}</span>
                            <span className="transaction-category">{transaction.category}</span>
                          </div>
                        </div>
                        <span className={`transaction-amount ${transaction.type}`}>
                          {transaction.type === 'income' ? '+' : ''}${Math.abs(transaction.amount)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'analytics' && (
                <motion.div 
                  className="analytics-tab"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3>Financial Insights</h3>
                  <div className="insights-grid">
                    <div className="insight-card">
                      <div className="insight-icon">💡</div>
                      <div className="insight-content">
                        <h4>Spending Alert</h4>
                        <p>You're spending 15% more on dining out this month</p>
                      </div>
                    </div>
                    <div className="insight-card">
                      <div className="insight-icon">🎯</div>
                      <div className="insight-content">
                        <h4>Goal Progress</h4>
                        <p>You're 78% toward your emergency fund goal</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
