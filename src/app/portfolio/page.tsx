/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import Navbar from "@App/components/Navbar";
import Footer from "@App/components/Footer";

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
  {
    title: 'AI & Machine Learning Platform',
    description: 'AI-driven insights and intelligent automation systems for businesses.',
    image: '/assets/portfolio/ai-ml.jpg',
    link: '/portfolio/ai-ml',
  },
  {
    title: 'Travel Booking Platform',
    description: 'A fully-responsive travel booking platform with real-time availability and secure bookings.',
    image: '/assets/portfolio/travel-booking.jpg',
    link: '/portfolio/travel-booking',
  },
  {
    title: 'Real Estate Portal',
    description: 'An advanced property listing platform with virtual tours, map integration, and smart filters.',
    image: '/assets/portfolio/real-estate.jpg',
    link: '/portfolio/real-estate-portal',
  },
  {
    title: 'Healthcare Management System',
    description: 'A comprehensive system to manage appointments, patient data, and medical records efficiently.',
    image: '/assets/portfolio/healthcare.jpg',
    link: '/portfolio/healthcare-management',
  },
  {
    title: 'Restaurant Reservation App',
    description: 'A mobile app for easy restaurant reservations with live availability and personalized dining experiences.',
    image: '/assets/portfolio/restaurant.jpg',
    link: '/portfolio/restaurant-reservation',
  },
  {
    title: 'Online Learning Platform',
    description: 'An e-learning platform providing courses, quizzes, and certifications with progress tracking.',
    image: '/assets/portfolio/online-learning.jpg',
    link: '/portfolio/online-learning',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A fitness app that tracks workouts, nutrition, and progress with personalized plans.',
    image: '/assets/portfolio/fitness.jpg',
    link: '/portfolio/fitness-tracking',
  },
  {
    title: 'Social Media Analytics Tool',
    description: 'A platform offering social media analytics, performance insights, and engagement tracking.',
    image: '/assets/portfolio/social-media.jpg',
    link: '/portfolio/social-media-analytics',
  },
  {
    title: 'Event Management System',
    description: 'A complete event management system for online ticketing, attendee tracking, and event marketing.',
    image: '/assets/portfolio/event-management.jpg',
    link: '/portfolio/event-management',
  },
];

const PortfolioPage = () => {
  return (
    <>
      {/* Add Navbar at the top */}
      <Navbar />

      <section id="portfolio-page" className="py-32 bg-secondary text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          {/* Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="text-primary">Complete Portfolio</span>
          </motion.h2>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {portfolioData.map((project, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </div>
      </section>

      {/* Add Footer at the bottom */}
      <Footer />
    </>
  );
};

export default PortfolioPage;
