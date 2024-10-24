"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaChevronDown } from "react-icons/fa";

const About = () => {
    return (
        <section id="about" className="py-32 dark:bg-dark dark:text-darkText bg-light text-lightText relative">
            {/* Background pattern or gradient */}
            <div className="absolute inset-0"></div>
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center relative z-10">
                {/* Title Section */}
                <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    About <span className="dark:text-darkText text-lightText">Valora Infotech</span>
                </motion.h2>

                {/* Description Section */}
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 dark:text-darkText text-lightText">
                    At Valora Infotech, we are committed to delivering top-tier IT solutions
                    tailored to empower your business. Our team of experienced professionals
                    offers innovative and customized services that drive success in an ever-evolving
                    digital landscape.
                </p>

                {/* Mission and Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Mission */}
                    <div className="transform hover:scale-105 transition duration-300">
                        <div className="p-6 dark:bg-white dark:text-lightText bg-dark text-darkText shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-primary mb-4 flex justify-center">
                                <FaRocket className="mr-2 text-3xl" />
                                Our Mission
                            </h3>
                            <p className="text-lg">
                                Our mission is to provide innovative and robust IT solutions that solve
                                real-world problems and help businesses grow in a competitive market.
                            </p>
                        </div>
                    </div>

                    {/* Vision */}
                    <div className="transform hover:scale-105 transition duration-300">
                        <div className="p-6 dark:bg-white dark:text-lightText bg-dark text-darkText shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold text-primary mb-4 flex justify-center">
                                <FaLightbulb className="mr-2 text-3xl" />
                                Our Vision
                            </h3>
                            <p className="text-lg">
                                Our vision is to be a leader in the IT services industry, creating cutting-edge
                                technologies that drive innovation and growth for our clients worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Value 1 */}
                    <div className="transform hover:scale-105 transition duration-300">
                        <div className="p-6 dark:bg-white dark:text-lightText bg-dark text-darkText shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-semibold mb-4 flex items-center">
                                <FaUsers className="mr-2 text-3xl" />
                                Integrity
                            </h4>
                            <p className="text-lg">
                                We uphold the highest standards of integrity and transparency in all our
                                dealings, ensuring trust and accountability with our clients.
                            </p>
                        </div>
                    </div>

                    {/* Value 2 */}
                    <div className="transform hover:scale-105 transition duration-300">
                        <div className="p-6 dark:bg-white dark:text-lightText bg-dark text-darkText shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-semibold mb-4 flex items-center">
                                <FaLightbulb className="mr-2 text-3xl" />
                                Innovation
                            </h4>
                            <p className="text-lg">
                                Innovation is at the core of our solutions. We embrace creativity and
                                forward-thinking to deliver cutting-edge technologies.
                            </p>
                        </div>
                    </div>

                    {/* Value 3 */}
                    <div className="transform hover:scale-105 transition duration-300">
                        <div className="p-6 dark:bg-white dark:text-lightText bg-dark text-darkText shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                            <h4 className="text-xl font-semibold mb-4 flex items-center">
                                <FaUsers className="mr-2 text-3xl" />
                                Focused
                            </h4>
                            <p className="text-lg">
                                Our customers are at the heart of everything we do. We strive to exceed
                                expectations by providing solutions to meet their needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* View More Button */}
                <div className="mt-5">
                    <Link href="/portfolio" passHref>
                        <div
                            className={`dark:text-white text-lightText text-lg`}
                        >
                            View More
                        </div>
                        <div
                            className="mt-2 flex justify-center"
                        >
                            <FaChevronDown className="dark:text-white animate-bounce" size={24} /> {/* Added animation */}
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;
