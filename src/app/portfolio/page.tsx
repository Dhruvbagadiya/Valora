"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useState } from "react";

// Filtering Categories
const categories = ["All", "Game", "Mobile", "Web", "AI/ML"];

// Interface for Portfolio Data
interface PortfolioData_Type {
    title: string;
    description: string;
    image?: string;
    link: string;
    category?: string; // New field for categorization
}

const portfolioData: Array<PortfolioData_Type> = [
    {
        title: "E-commerce Platform",
        description:
            "A fully-featured e-commerce platform with seamless user experience and payment gateway integration.",
        image: "/assets/portfolio/e-com.jpg",
        link: "/portfolio/ecommerce-platform",
        category: "Web",
    },
    {
        title: "Mobile Banking App",
        description:
            "A secure and user-friendly mobile banking app for managing finances on the go.",
        image: "/assets/portfolio/banking-app.jpg",
        link: "/portfolio/mobile-banking-app",
        category: "Mobile",
    },
    {
        title: "SaaS CRM System",
        description:
            "A robust CRM system tailored for small businesses, offering automation and analytics.",
        image: "/assets/portfolio/saas.jpg",
        link: "/portfolio/saas-crm",
        category: "Web",
    },
    {
        title: "AI & Machine Learning Platform",
        description:
            "AI-driven insights and intelligent automation systems for businesses.",
        // image: '/assets/portfolio/ai-ml.jpg',
        link: "/portfolio/ai-ml",
        category: "AI/ML",
    },
    {
        title: "Travel Booking Platform",
        description:
            "A fully-responsive travel booking platform with real-time availability and secure bookings.",
        // image: '/assets/portfolio/travel-booking.jpg',
        link: "/portfolio/travel-booking",
        category: "Web",
    },
    {
        title: "Real Estate",
        description:
            "An advanced property listing platform with virtual tours, map integration, and smart filters.",
        // image: '/assets/portfolio/real-estate.jpg',
        link: "/portfolio/real-estate-portal",
        category: "Game",
    },
    {
        title: "Healthcare Management System",
        description:
            "A comprehensive system to manage appointments, patient data, and medical records efficiently.",
        // image: '/assets/portfolio/healthcare.jpg',
        link: "/portfolio/healthcare-management",
        category: "Web",
    },
    {
        title: "Restaurant Reservation App",
        description:
            "A mobile app for easy restaurant reservations with live availability and personalized dining experiences.",
        // image: '/assets/portfolio/restaurant.jpg',
        link: "/portfolio/restaurant-reservation",
    },
    {
        title: "Online Learning Platform",
        description:
            "An e-learning platform providing courses, quizzes, and certifications with progress tracking.",
        // image: '/assets/portfolio/online-learning.jpg',
        link: "/portfolio/online-learning",
    },
    {
        title: "Fitness Tracking App",
        description:
            "A fitness app that tracks workouts, nutrition, and progress with personalized plans.",
        // image: '/assets/portfolio/fitness.jpg',
        link: "/portfolio/fitness-tracking",
    },
    {
        title: "Social Media Analytics Tool",
        description:
            "A platform offering social media analytics, performance insights, and engagement tracking.",
        // image: '/assets/portfolio/social-media.jpg',
        link: "/portfolio/social-media-analytics",
    },
    {
        title: "Event Management System",
        description:
            "A complete event management system for online ticketing, attendee tracking, and event marketing.",
        // image: '/assets/portfolio/event-management.jpg',
        link: "/portfolio/event-management",
    },
];

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredData =
        activeCategory === "All"
            ? portfolioData
            : portfolioData.filter((project) => project.category === activeCategory);

    return (
        <>
            <Navbar />

            <section id="portfolio-page" className="py-32 dark:bg-dark dark:text-darkText bg-light text-lightText">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                    {/* Title */}
                    <motion.h2
                        className="text-4xl md:text-6xl font-bold mb-16 tracking-tight"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Explore Our <span className="text-primary">Projects</span>
                    </motion.h2>

                    {/* Category Filter */}
                    <div className="flex justify-center mb-12">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 mx-2 rounded-full text-lg transition-colors ${activeCategory === category
                                    ? "bg-primary text-white"
                                    : "bg-white text-primary hover:bg-primary hover:text-white"
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Portfolio Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredData.map((project, index) => (
                            <motion.div
                                key={index}
                                className="relative group overflow-hidden rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-64 object-cover object-center"
                                    />
                                ) : (
                                    <div className="w-full h-64 bg-gradient-to-r from-blue-500 to-indigo-600 flex justify-center items-center">
                                        <span className="text-white text-2xl">
                                            No Image Available
                                        </span>
                                    </div>
                                )}
                                <div
                                    className={`absolute inset-0 flex flex-col justify-center items-center bg-opacity-80 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${project.image ? "" : "opacity-100"
                                        }`}
                                >
                                    <h3 className="text-2xl font-semibold text-primary mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-lg mb-4 px-4">{project.description}</p>
                                    <a
                                        href={project.link}
                                        className="px-6 py-2 bg-primary text-white rounded-full hover:bg-white hover:text-primary transition-colors"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default PortfolioPage;
