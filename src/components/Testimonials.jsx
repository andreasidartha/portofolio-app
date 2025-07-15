import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "John Doe",
    role: "Senior Developer at TechCorp",
    testimonial: "Andrea is a highly skilled frontend developer with a keen eye for detail. Their work significantly improved our product's user experience."
  },
  {
    name: "Jane Smith",
    role: "Project Manager at WebSolutions",
    testimonial: "Reliable, creative, and proactive. Andrea consistently delivers high-quality work on time."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-light dark:bg-dark flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title text-dark dark:text-light text-4xl font-extrabold mb-12 tracking-tight">Testimonials</h2>
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-dark-light p-8 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              <p className="text-dark dark:text-gray italic mb-4">"{item.testimonial}"</p>
              <p className="text-dark dark:text-light font-semibold">{item.name}</p>
              <p className="text-dark dark:text-gray text-sm">{item.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
