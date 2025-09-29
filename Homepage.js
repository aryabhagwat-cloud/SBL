import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Dashboard from './Dashboard';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Homepage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="homepage"
      variants={containerVariants}
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
    >
      <motion.div variants={itemVariants}>
        <Header />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Hero />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Features />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Dashboard />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Testimonials />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Pricing />
      </motion.div>
      
      <motion.div variants={itemVariants}>
        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default Homepage;
