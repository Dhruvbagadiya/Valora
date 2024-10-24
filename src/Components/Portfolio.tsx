/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

interface PortfolioData_Type {
    title: string;
    description: string;
    image?: string;
    link: string;
}

const portfolioData: Array<PortfolioData_Type> = [
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
        <section
            id="portfolio"
            className={`py-16  dark:bg-dark dark:text-darkText bg-light text-lightText}`}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                {/* Title */}
                <motion.h2
                    className={`text-4xl md:text-5xl font-bold mb-12 dark:text-darkText text-lightText`}
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
                            className="relative group overflow-hidden rounded-lg shadow-lg drop-shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {
                                project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-60 object-cover object-center"
                                    />
                                ) : (
                                    <div className="w-full h-60 bg-gray-300" />
                                )
                            }
                            <div
                                className={`absolute inset-0 dark:bg-black dark:bg-opacity-60 bg-white bg-opacity-80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            >
                                <h3 className={`text-2xl font-bold mb-4 dark:text-primary text-primary`}>
                                    {project.title}
                                </h3>
                                <p className={`text-lg mb-4 px-3 dark:bg-dark dark:text-darkText bg-light text-lightText}`}>
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    className={`px-4 py-2 dark:bg-primary dark:text-white bg-primary text-white rounded hover:bg-white hover:text-primary transition-colors`}
                                >
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10">
                    <Link href="/portfolio" passHref>
                        <motion.div
                            className={`dark:darkTex lightText text-lg`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            View More
                        </motion.div>
                        <motion.div
                            className="mt-2 flex justify-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FaChevronDown className="dark:darkTex lightText animate-bounce" size={24} /> {/* Added animation */}
                        </motion.div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
