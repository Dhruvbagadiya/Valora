/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';  // Import Link for navigation

const portfolioData = [
  {
    title: 'E-commerce Platform',
    description: 'A fully-featured e-commerce platform with seamless user experience and payment gateway integration.',
    image: '/assets/portfolio/e-com.jpg',
    link: '/portfolio/ecommerce-platform',
  },
  {
    title: 'Mobile Banking App',
    description: 'A secure and user-friendly mobile banking app for managing finances on the go.',
    image: '/assets/portfolio/banking-app.jpg',
    link: '/portfolio/mobile-banking-app',
  },
  {
    title: 'SaaS CRM System',
    description: 'A robust CRM system tailored for small businesses, offering automation and analytics.',
    image: '/assets/portfolio/saas.jpg',
    link: '/portfolio/saas-crm',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-secondary text-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our <span className="text-primary">Portfolio</span>
        </motion.h2>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                <p className="text-lg mb-4 px-3">{project.description}</p>
                <a
                  href={project.link}
                  className="px-4 py-2 bg-primary text-white rounded hover:bg-white hover:text-primary transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Button */}
        <div className="mt-12">
          <Link href="/portfolio" passHref>
            <motion.a
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-white hover:text-primary transition-colors font-semibold text-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              View More
            </motion.a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
