import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';

  const socialLinks = [
    { icon: <FaGithub className="w-7 h-7" />, url: 'https://github.com/andreasidartha', label: 'GitHub' },
    { icon: <FaLinkedin className="w-7 h-7" />, url: 'https://linkedin.com/in/andrea-sidartha', label: 'LinkedIn' },
    { icon: <FaInstagram className="w-7 h-7" />, url: 'https://instagram.com/andreasidartha', label: 'Instagram' }
  ];

  return (
    <footer className={`py-12 ${bgClass}`}>
      <div className={`container mx-auto text-center ${textClass}`}>
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`transition-colors cursor-pointer text-2xl font-semibold tracking-wide ${textClass} hover:text-accent`}
              whileHover={{ y: -5, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
        <p className={`text-sm md:text-base ${textClass}`}>&copy; {new Date().getFullYear()} Andrea Sidartha. All Rights Reserved.</p>
        <p className={`text-sm md:text-base mt-3 ${textClass}`}>Front End Developer • React • Vite • Tailwind CSS • JavaScript</p>
        <p className={`text-sm md:text-base mt-2 ${textClass}`}>Designed & Built by Andrea Sidartha</p>
      </div>
    </footer>
  );
};

export default Footer;
