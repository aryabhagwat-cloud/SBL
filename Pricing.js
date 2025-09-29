import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCheck, FaTimes, FaCrown, FaStar } from 'react-icons/fa';

const Pricing = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [isAnnual, setIsAnnual] = useState(true);
  const [popularPlan, setPopularPlan] = useState('pro');

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      icon: '🌱',
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'Perfect for individuals just starting their financial journey',
      features: [
        { text: 'Basic expense tracing', included: true },
        { text: 'Up to 2 bank accounts', included: true },
        { text: 'Monthly budget limits', included: true },
        { text: 'Basic reports', included: true },
        { text: 'Mobile app access', included: true },
        { text: 'Email support', included: true },
        { text: 'AI insights', included: false },
        { text: 'Investment tracking', included: false },
        { text: 'Advanced analytics', included: false },
        { text: 'Priority support', included: false },
        { text: 'Custom categories', included: false },
        { text: 'Export to PDF', included: false }
      ],
      cta: 'Get Started Free',
      ctaStyle: 'secondary'
    },
    {
      id: 'pro',
      name: 'Pro',
      icon: '⚡',
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      description: 'Advanced features for serious financial management',
      features: [
        { text: 'Everything in Starter', included: true },
        { text: 'Unlimited bank accounts', included: true },
        { text: 'AI-powered insights', included: true },
        { text: 'Investment tracking', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Custom categories', included: true },
        { text: 'Priority support', included: true },
        { text: 'Export to PDF', included: true },
        { text: 'Bill reminders', included: true },
        { text: 'Goal setting', included: true },
        { text: 'Tax optimization tips', included: true },
        { text: 'Multi-currency support', included: true }
      ],
      cta: 'Start Pro Free Trial',
      ctaStyle: 'primary',
      popular: true,
      badge: 'Most Popular'
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      icon: '🏢',
      monthlyPrice: 29.99,
      annualPrice: 299.99,
      description: 'Comprehensive solution for businesses and families',
      features: [
        { text: 'Everything in Pro', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'Advanced security', included: true },
        { text: 'Custom integrations', included: true },
        { text: 'White-label options', included: true },
        { text: 'API access', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'Custom reports', included: true },
        { text: 'Transaction rules', included: true },
        { text: 'Audit logs', included: true },
        { text: 'SSO integration', included: true },
        { text: '24/7 phone support', included: true }
      ],
      cta: 'Contact Sales',
      ctaStyle: 'secondary'
    }
  ];

  const savings = isAnnual ? (
    <motion.div 
      className="savings-banner"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FaStar className="star-icon" />
      <span>Save up to 17% with annual billing</span>
    </motion.div>
  ) : null;

  return (
    <section id="pricing" ref={ref} className="pricing">
      <div className="pricing-container">
        <motion.div 
          className="pricing-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="section-badge">💰 Pricing</span>
          <h2 className="section-title">
            Choose the perfect plan for your needs
          </h2>
          <p className="section-description">
            Start free and upgrade as you grow. All plans include core features 
            with no hidden fees or surprise charges.
          </p>
        </motion.div>

        {savings}

        <div className="billing-toggle">
          <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>
            Monthly
          </span>
          <motion.button 
            className={`toggle-switch ${isAnnual ? 'annual' : 'monthly'}`}
            onClick={() => setIsAnnual(!isAnnual)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="toggle-handle"
              animate={{ x: isAnnual ? 26 : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
          </motion.button>
          <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>
            Annual
            <span className="discount-badge">Save 17%</span>
          </span>
        </div>

        <motion.div 
          className="pricing-grid"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.id}
              className={`pricing-card ${plan.popular ? 'popular' : ''} ${plan.id}`}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: plan.popular ? 1.05 : 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {plan.popular && (
                <motion.div 
                  className="popular-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <FaCrown className="crown-icon" />
                  {plan.badge}
                </motion.div>
              )}

              <div className="pricing-header">
                <div className="plan-icon">{plan.icon}</div>
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
              </div>

              <div className="pricing-info">
                <div className="price-container">
                  <span className="currency">$</span>
                  <span className="price">
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="period">
                    {plan.monthlyPrice === 0 ? '/forever' :
                     isAnnual ? '/year' : '/month'}
                  </span>
                </div>
                
                {plan.monthlyPrice > 0 && isAnnual && (
                  <div className="annual-savings">
                    Save ${((plan.monthlyPrice * 12) - plan.annualPrice).toFixed(0)}/year
                  </div>
                )}
              </div>

              <motion.button 
                className={`pricing-cta ${plan.ctaStyle}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.cta}
              </motion.button>

              <div className="features-list">
                <h4 className="features-title">What's included:</h4>
                <ul className="features-items">
                  {plan.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      className={`feature-item ${feature.included ? 'included' : 'excluded'}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
                    >
                      {feature.included ? (
                        <FaCheck className="feature-icon" />
                      ) : (
                        <FaTimes className="feature-icon" />
                      )}
                      <span className="feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="pricing-footer"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="guarantee-section">
            <div className="guarantee-item">
              <div className="guarantee-icon">🔒</div>
              <div className="guarantee-text">
                <h4>30-Day Money Back Guarantee</h4>
                <p>Not satisfied? Get a full refund within 30 days.</p>
              </div>
            </div>
            
            <div className="guarantee-item">
              <div className="guarantee-icon">🚀</div>
              <div className="guarantee-text">
                <h4>Cancel Anytime</h4>
                <p>No long-term contracts. Cancel or downgrade anytime.</p>
              </div>
            </div>
            
            <div className="guarantee-item">
              <div className="guarantee-icon">📞</div>
              <div className="guarantee-text">
                <h4>24/7 Support</h4>
                <p>Get help when you need it with our expert support team.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
