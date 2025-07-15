import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobile, FaServer, FaTools, FaDatabase } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="w-6 h-6" />,
    title: "Frontend Development",
    description: "Building responsive and performant web applications using React, Vite, Tailwind CSS, and JavaScript. Creating modern, accessible, and user-friendly interfaces."
  },
  {
    icon: <FaPalette className="w-6 h-6" />,
    title: "UI/UX Design",
    description: "Designing intuitive and visually appealing user interfaces with a focus on user experience, accessibility, and modern design principles."
  },
  {
    icon: <FaTools className="w-6 h-6" />,
    title: "Development Tools",
    description: "Utilizing VSCode, Git, Chrome DevTools for debugging, npm for package management, and GPT for AI-assisted development."
  },
  {
    icon: <FaMobile className="w-6 h-6" />,
    title: "Responsive Design",
    description: "Creating mobile-first, responsive designs that work seamlessly across all devices and screen sizes."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
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

const About = () => {
  return (
    <section id="about" className="section bg-light dark:bg-dark flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4 text-center">
        <h2 className="section-title text-dark dark:text-light text-4xl font-extrabold mb-12 tracking-tight">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-12">
          <p className="text-dark dark:text-gray leading-relaxed text-lg md:text-xl tracking-wide">
              Hi, I'm Andrea Sidartha, a passionate Front End Developer with expertise in modern web technologies and a keen eye for creating intuitive user interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-dark dark:text-gray leading-relaxed text-lg md:text-xl tracking-wide">
              Specialized in React, Vite, Tailwind CSS, and JavaScript, I leverage powerful tools like GPT, VSCode, Git, Chrome DevTools, and npm to build efficient, scalable, and maintainable web applications. I'm committed to writing clean, accessible code and staying current with industry best practices.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-light p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow break-words flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="text-accent text-3xl mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-dark dark:text-light font-bold text-xl mb-4">{service.title}</h3>
                  <p className="text-dark dark:text-gray text-base leading-relaxed break-words">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
