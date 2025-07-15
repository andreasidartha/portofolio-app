import React, { useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Link } from 'react-scroll';
import { ChevronDown } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const particlesOptions = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        resize: true,
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 },
      },
    },
    particles: {
      color: { value: '#a8a8a8' },
      links: {
        color: '#a8a8a8',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      collisions: { enable: true },
      move: {
        direction: 'none',
        enable: true,
        outModes: { default: 'bounce' },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: { enable: true, area: 800 },
        value: 80,
      },
      opacity: { value: 0.2 },
      shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
};

const Hero = ({ isNameReady }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const name = "Andrea Sidartha".split("");

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/andreasidartha' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com/in/andrea-sidartha' },
    { icon: <FaInstagram />, url: 'https://instagram.com/andreasidartha' }
  ];

  return (
    <>
      <section id="hero" className="flex items-center justify-center min-h-screen">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
        <div className="z-10 text-center flex flex-col items-center justify-center w-full">
          <div className="relative h-24 md:h-32 mb-8 w-full flex justify-center">
            <AnimatePresence>
              {isNameReady && (
                <motion.div
                  initial={{ y: 100, opacity: 0, scale: 1.2 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 1.2,
                    ease: [0.6, -0.05, 0.01, 0.99],
                    scale: {
                      duration: 1.5,
                      ease: "easeOut"
                    }
                  }}
                  className="absolute inset-0 flex justify-center items-center"
                >
                  <div className="flex text-3xl md:text-5xl font-extrabold text-dark dark:text-light tracking-tight">
                    {name.map((letter, index) => (
                      <motion.span
                        key={index}
                        className="text-dark dark:text-light font-extrabold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                      >
                        {letter === " " ? "\u00A0" : letter}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <motion.span 
            className="block text-3xl md:text-4xl mt-4 text-dark dark:text-gray font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            Front End Developer
          </motion.span>
          <motion.span 
            className="block text-xl md:text-2xl mt-2 text-accent font-semibold tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
          >
            Crafting beautiful, responsive web experiences with React, Vite, Tailwind CSS, and JavaScript
          </motion.span>
          <br />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-dark dark:text-light max-w-2xl leading-relaxed tracking-wide mx-auto"
          >
            Creating exceptional user experiences with modern web technologies
          </motion.p>
          <br />
          <motion.div 
            className="flex justify-center space-x-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-dark dark:text-light hover:text-accent dark:hover:text-accent transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </motion.div>
          
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 left-10% -translate-x-[60%] z-10"
        >
          <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-8 h-8 text-dark dark:text-light hover:text-accent" />
            </motion.div>
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
