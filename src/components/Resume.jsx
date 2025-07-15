import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section bg-light dark:bg-dark min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h2 className="section-title text-dark dark:text-light text-4xl font-extrabold mb-8 tracking-tight">Resume</h2>
        <div className="bg-white dark:bg-dark-light p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Andrea Sidartha</h3>
          <p className="mb-2">Front End Developer</p>
          <p className="mb-6">Specialized in React, Vite, Tailwind CSS, and JavaScript</p>

          <section className="mb-8">
            <h4 className="text-xl font-semibold mb-2">Technical Skills</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-semibold mb-2">Frontend Technologies</h5>
                <ul className="list-disc list-inside">
                  <li>React.js & React Hooks</li>
                  <li>Vite (Build Tool)</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>HTML5 & CSS3</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-2">Development Tools</h5>
                <ul className="list-disc list-inside">
                  <li>VSCode</li>
                  <li>Git & GitHub</li>
                  <li>Chrome DevTools</li>
                  <li>npm & Package Management</li>
                  <li>GPT (AI-assisted development)</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h4 className="text-xl font-semibold mb-2">Professional Experience</h4>
            <div className="mb-4">
              <h5 className="font-semibold">Front End Developer</h5>
              <p className="text-accent">Freelance & Personal Projects</p>
              <p className="italic text-sm">2023 - Present</p>
              <ul className="list-disc list-inside">
                <li>Developed responsive and performant web applications using React, Vite, and Tailwind CSS</li>
                <li>Created modern UI/UX designs with focus on accessibility and user experience</li>
                <li>Implemented smooth animations and interactions using Framer Motion</li>
                <li>Utilized modern development tools including VSCode, Git, and GPT for efficient workflow</li>
                <li>Built and deployed multiple portfolio websites and web applications</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="font-semibold">Web Development Projects</h5>
              <p className="text-accent">Personal Portfolio & Client Work</p>
              <p className="italic text-sm">2023 - Present</p>
              <ul className="list-disc list-inside">
                <li>Smart Utility Management System - Comprehensive dashboard for utility services</li>
                <li>E-commerce Platform - Full-stack application with payment integration</li>
                <li>Task Management App - Collaborative project management tool</li>
                <li>Weather Dashboard - Real-time weather application with API integration</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h4 className="text-xl font-semibold mb-2">Education</h4>
            <div className="mb-4">
              <h5 className="font-semibold">Computer Science</h5>
              <p>Bina Nusantara University Indonesia</p>
              <p className="italic text-sm">2021 - Present</p>
              <p>Focus on web development, software engineering, and modern programming practices.</p>
            </div>
          </section>

          <section className="mb-8">
            <h4 className="text-xl font-semibold mb-2">Certifications & Learning</h4>
            <ul className="list-disc list-inside">
              <li>React.js Development</li>
              <li>Modern JavaScript (ES6+)</li>
              <li>Tailwind CSS Framework</li>
              <li>Responsive Web Design</li>
              <li>Git Version Control</li>
            </ul>
          </section>

          <section>
            <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p><strong>Email:</strong> andrea.sidartha@example.com</p>
                <p><strong>Phone:</strong> +62 812 3456 7890</p>
                <p><strong>Location:</strong> Indonesia</p>
              </div>
              <div>
                <p><strong>GitHub:</strong> github.com/andreasidartha</p>
                <p><strong>LinkedIn:</strong> linkedin.com/in/andrea-sidartha</p>
                <p><strong>Portfolio:</strong> andreasidartha.dev</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Resume;
