import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaGithub } from 'react-icons/fa';

const sumScreenshots = [
  "/assets/Electricity-Dashboard.png",
  "/assets/Gas-Dashboard.png", 
  "/assets/Water-Dashboard.png",
  "/assets/Billing.png",
  "/assets/Billing-Invoice-Details.png",
  "/assets/Customer-Management.png",
  "/assets/Customer-Management-Customer-Details.png",
  "/assets/History.png",
  "/assets/Reports.png"
];

const projects = [
    {
      title: "SUMS - Smart Utility Management System",
      description: "A comprehensive utility management platform for electricity, gas, and water services. Features real-time dashboards, billing management, customer management, reporting analytics, and detailed invoice tracking. Provides complete oversight of utility operations with intuitive data visualization.",
      image: "/assets/Electricity-Dashboard.png",
      link: "https://sums-teal.vercel.app/",
      github: "https://github.com/andreasidartha/sums",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Charts.js", "Redux", "Dashboard UI"],
      hasGallery: true
    },
    {
      title: "DreShop - Premium E-commerce Platform",
      description: "A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS. Features advanced state management with Zustand, PWA capabilities, product comparison, advanced search & filtering, shopping cart, wishlist, and a beautiful UI with smooth animations.",
      image: "/assets/Dreshop.png",
      link: "https://dreshop.vercel.app/",
      github: "https://github.com/andreasidartha/dreshop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand", "PWA", "Framer Motion"]
    },
    {
      title: "Eventure eTicket - Event Ticketing Platform",
      description: "A modern event ticketing platform built with React, Vite, and Tailwind CSS. Features event browsing and search, secure ticket checkout, user authentication, profile management, and an admin dashboard for comprehensive event management.",
      image: "/assets/Eventure-Eticket.png",
      link: "https://eventure-eticket.vercel.app/",
      github: "https://github.com/andreasidartha/eventure-eticket",
      technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Event Management"]
    },

  ];

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Projects = () => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openGallery = () => {
    setGalleryOpen(true);
    setCurrentImageIndex(0);
    setIsAutoPlaying(false);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setIsAutoPlaying(false);
  };

  const nextImage = () => {
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % sumScreenshots.length);
    setTimeout(() => setIsLoading(false), 300);
  };

  const prevImage = () => {
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev - 1 + sumScreenshots.length) % sumScreenshots.length);
    setTimeout(() => setIsLoading(false), 300);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!galleryOpen) return;
      
      switch(e.key) {
        case 'ArrowRight':
          nextImage();
          break;
        case 'ArrowLeft':
          prevImage();
          break;
        case 'Escape':
          closeGallery();
          break;
        case ' ':
          e.preventDefault();
          toggleAutoPlay();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [galleryOpen, isAutoPlaying]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !galleryOpen) return;

    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryOpen, currentImageIndex]);

  return (
    <section id="projects" className="section bg-light dark:bg-dark flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title text-dark dark:text-light text-4xl font-extrabold mb-12 tracking-tight">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-dark-light rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-8">
                <h3 className="text-dark dark:text-light font-bold text-2xl mb-4">{project.title}</h3>
                <p className="text-dark dark:text-gray mb-6">{project.description}</p>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-dark dark:text-gray text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-4 flex-wrap justify-center">
                  {project.hasGallery && (
                    <button
                      onClick={openGallery}
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-semibold text-lg"
                    >
                      View Gallery
                      <FaExternalLinkAlt className="ml-3" />
                    </button>
                  )}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-semibold text-lg"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="ml-3" />
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors font-semibold text-lg"
                    >
                      <FaGithub className="mr-3" />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {galleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl max-h-full"
            >
              {/* Header Controls */}
              <div className="absolute top-4 right-4 z-20 flex gap-4">
                <button
                  onClick={toggleAutoPlay}
                  className="text-white hover:text-accent transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                  title={isAutoPlaying ? "Pause slideshow" : "Start slideshow"}
                >
                  {isAutoPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
                </button>
                <button
                  onClick={closeGallery}
                  className="text-white hover:text-red-400 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                  title="Close gallery (Esc)"
                >
                  <FaTimes size={20} />
                </button>
              </div>
              
              {/* Main Image Container */}
              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={sumScreenshots[currentImageIndex]}
                    alt={`SUMS Screenshot ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl ${isLoading ? 'blur-sm' : ''}`}
                  />
                </AnimatePresence>
                
                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 backdrop-blur-sm"
                  title="Previous image (←)"
                >
                  <FaChevronLeft size={24} />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 backdrop-blur-sm"
                  title="Next image (→)"
                >
                  <FaChevronRight size={24} />
                </motion.button>
              </div>
              
              {/* Bottom Controls */}
              <div className="mt-6 text-center">
                {/* Image Counter */}
                <div className="text-white mb-4">
                  <span className="text-lg font-semibold">{currentImageIndex + 1}</span>
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-gray-400">{sumScreenshots.length}</span>
                </div>
                
                {/* Thumbnail Navigation */}
                <div className="flex justify-center gap-2 overflow-x-auto pb-2">
                  {sumScreenshots.map((screenshot, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        setIsLoading(true);
                        setCurrentImageIndex(index);
                        setTimeout(() => setIsLoading(false), 300);
                      }}
                      className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-accent scale-110' 
                          : 'border-gray-600 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={screenshot}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
                
                {/* Controls Info */}
                <div className="text-gray-400 text-sm mt-3">
                  <span>Use arrow keys to navigate • Space to toggle slideshow • Esc to close</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
