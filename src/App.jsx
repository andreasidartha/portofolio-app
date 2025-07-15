import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isNameReady, setIsNameReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleNameReady = () => {
    setIsNameReady(true);
  };

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <Preloader onNameReady={handleNameReady} />
      ) : (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.4, 0, 0.2, 1] // Custom easing for smooth fade
          }}
          className="min-h-screen bg-light dark:bg-dark transition-colors duration-500"
        >
          <Navbar />
          <main>
            <Hero isNameReady={isNameReady} />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
