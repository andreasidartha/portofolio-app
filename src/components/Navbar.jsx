import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navItems = ['About', 'Projects', 'Contact'].filter(item => item !== 'Resume');

const Navbar = ({ currentPage, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileLinkVariants = {
    closed: { y: 50, opacity: 0 },
    open: { y: 0, opacity: 1 },
  };

  const bgClass = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textClass = theme === 'dark' ? 'text-white' : 'text-black';

  const socialLinks = [
    { icon: <FaGithub className="w-6 h-6" />, url: 'https://github.com/andreasidartha', label: 'GitHub' },
    { icon: <FaLinkedin className="w-6 h-6" />, url: 'https://linkedin.com/in/andrea-sidartha', label: 'LinkedIn' },
    { icon: <FaInstagram className="w-6 h-6" />, url: 'https://instagram.com/andreasidartha', label: 'Instagram' }
  ];

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bgClass} ${scrolled ? 'shadow-lg backdrop-blur-sm bg-opacity-90' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">

            <div
              onClick={() => handleNavClick('hero')}
              className={`cursor-pointer text-2xl font-extrabold tracking-tight ${textClass}`}
            >
              AS
            </div>
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-20">

              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className={`transition-colors cursor-pointer relative group text-lg font-semibold tracking-wide ${textClass} ${currentPage === item.toLowerCase() ? 'text-accent' : ''}`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform origin-left duration-300 ${currentPage === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-8">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0}}
                  className={`${textClass} hover:text-accent`}
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
              <button onClick={toggleTheme} className={`transition-colors ${textClass}`} aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className={textClass}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} fixed top-0 left-0 w-full h-screen z-40 md:hidden flex flex-col items-center justify-center`}
      >
        <div className="flex flex-col items-center space-y-10">
          {navItems.map((item) => (
            <motion.div variants={mobileLinkVariants} key={item}>
              <div
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`transition-colors cursor-pointer text-2xl font-semibold tracking-wide ${textClass} ${currentPage === item.toLowerCase() ? 'text-accent' : ''}`}
              >
                {item}
              </div>
            </motion.div>
          ))}
          <div className="flex items-center space-x-10 pt-10">
            {socialLinks.map((link, index) => (
              <motion.a 
                key={index}
                href={link.url} 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.2, color: '#00c7a3' }} 
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                className={textClass}
                aria-label={link.label}
              >
                {React.cloneElement(link.icon, { className: 'w-8 h-8 transition-colors' })}
              </motion.a>
            ))}
          </div>
          <button onClick={toggleTheme} className={`mt-10 transition-colors ${textClass}`} aria-label="Toggle theme">
            {theme === 'dark' ? <Sun size={32} /> : <Moon size={32} />}
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

