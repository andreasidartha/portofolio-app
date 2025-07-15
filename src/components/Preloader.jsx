import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 1.5,
      ease: 'easeInOut',
    },
  },
};

const textVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.05,
    },
  },
};

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

const Preloader = ({ onNameReady }) => {
  const [count, setCount] = useState(0);
  const [showName, setShowName] = useState(false);
  const name = "Andrea Sidartha".split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < 100) {
          return prevCount + 1;
        }
        clearInterval(interval);
        setTimeout(() => {
          setShowName(true);
          // Notify parent component that name is ready for transition
          setTimeout(() => onNameReady(), 1500);
        }, 100);
        return 100;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onNameReady]);

  return (
    <motion.div
      variants={containerVariants}
      exit="exit"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-light dark:bg-dark"
    >
      <div className="relative">
        <div className="relative">
          <AnimatePresence mode="wait">
            {!showName ? (
              <motion.div
                key="percentage"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5 }}
                className="text-6xl md:text-8xl font-semibold tracking-tight text-dark dark:text-light"
                style={{ textShadow: '0 0 8px rgba(245, 245, 245, 0.8)' }}
              >
                {count}%
              </motion.div>
            ) : (
              <motion.div
                key="name"
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="flex text-3xl md:text-5xl font-bold text-dark dark:text-light text-center tracking-tight"
                style={{ textShadow: '0 0 8px rgba(245, 245, 245, 0.8)' }}
              >
                {name.map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute -bottom-4 left-0 w-full h-1 bg-accent origin-left"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
