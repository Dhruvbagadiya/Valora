"use client";

import { FaRocket, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const DetailedAbout = () => {
    return (
        <>
            <Navbar />
            <section id="detailed-about" className="py-32 dark:bg-dark dark:text-darkText bg-light text-lightText">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                    <motion.h2
                        className="text-5xl font-bold mb-6 text-primary"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Welcome to <span className="dark:text-darkText text-lightText">Valora Infotech</span>
                    </motion.h2>
                    {/* History Section */}
                    <section className="my-16 relative bg-gradient-to-r from-primary to-gray-800 py-16 px-8 md:px-16 rounded-lg shadow-lg">
                        <div className="max-w-6xl mx-auto">
                            <h3 className="text-4xl text-white font-bold mb-12 text-center">
                                Our Journey
                            </h3>

                            <div className="flex justify-center mb-10">
                                <div className="w-24 h-1 bg-dark"></div>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-8 text-lg md:text-xl text-white leading-relaxed"
                            >
                                <p>
                                    Valora Infotech was born out of a passion for driving digital
                                    transformation and enabling businesses to leverage the power
                                    of technology. Established in [Year], we started as a small
                                    team of IT enthusiasts with a mission to deliver exceptional
                                    digital solutions that are both innovative and reliable.
                                </p>
                                <p>
                                    From our humble beginnings, we have grown into a robust IT
                                    services company, expanding our team and capabilities to
                                    address the ever-evolving technological landscape. Our journey
                                    has been marked by continuous learning, a dedication to
                                    staying at the forefront of innovation, and a relentless
                                    pursuit of excellence.
                                </p>
                                <p>
                                    Today, Valora Infotech stands as a leader in the IT services
                                    space, empowering businesses with cutting-edge technology and
                                    strategic insights.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                className="flex justify-center mt-12"
                            >
                                <img
                                    src="/assets/journey-illustration.webp"
                                    alt="Our Journey"
                                    className="w-full md:w-11/12"
                                />
                            </motion.div>
                        </div>
                    </section>
                    {/* Our Expertise */}
                    <section className="my-16 relative bg-gradient-to-b from-dark to-gray-900 py-20 px-8 md:px-16 rounded-lg">
                        <h3 className="text-4xl text-primary mb-12 text-center">
                            Our Expertise
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Game Development Section */}
                            <motion.div
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 hover:bg-opacity-20 transition duration-300 h-[350px] flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-3xl text-primary flex items-center mb-4">
                                    <i className="fas fa-gamepad mr-2"></i> Game Development
                                </h4>
                                <p className="text-lg text-white text-center">
                                    We craft immersive gaming experiences using the latest
                                    technologies and stunning visuals.
                                </p>
                            </motion.div>

                            {/* Web Development Section */}
                            <motion.div
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 hover:bg-opacity-20 transition duration-300 h-[350px] flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-3xl text-primary flex items-center mb-4">
                                    <i className="fas fa-code mr-2"></i> Web Development
                                </h4>
                                <p className="text-lg text-white text-center">
                                    We create scalable, secure, and high-performance websites to
                                    help businesses thrive online.
                                </p>
                            </motion.div>

                            {/* Mobile Applications Section */}
                            <motion.div
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 hover:bg-opacity-20 transition duration-300 h-[350px] flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-3xl text-primary flex items-center mb-4">
                                    <i className="fas fa-mobile-alt mr-2"></i> Mobile Applications
                                </h4>
                                <p className="text-lg text-white text-center">
                                    We design innovative mobile applications that offer seamless
                                    user experiences.
                                </p>
                            </motion.div>

                            {/* UI/UX Design Section */}
                            <motion.div
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 hover:bg-opacity-20 transition duration-300 h-[350px] flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-3xl text-primary flex items-center mb-4">
                                    <i className="fas fa-pencil-alt mr-2"></i> UI/UX Design
                                </h4>
                                <p className="text-lg text-white text-center">
                                    We create intuitive, user-friendly designs that enhance user
                                    engagement and experience.
                                </p>
                            </motion.div>

                            {/* Cloud Solutions Section */}
                            <motion.div
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 hover:bg-opacity-20 transition duration-300 h-[350px] flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-3xl text-primary flex items-center mb-4">
                                    <i className="fas fa-cloud mr-2"></i> Cloud Solutions
                                </h4>
                                <p className="text-lg text-white text-center">
                                    We provide secure cloud-based infrastructure and services to
                                    support your business.
                                </p>
                            </motion.div>

                            {/* AI & ML Section */}
                            <motion.div
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 hover:bg-opacity-20 transition duration-300 h-[350px] flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-3xl text-primary flex items-center mb-4">
                                    <i className="fas fa-robot mr-2"></i> AI & ML
                                </h4>
                                <p className="text-lg text-white text-center">
                                    We provide AI-driven insights and intelligent automation to
                                    enhance efficiency.
                                </p>
                            </motion.div>

                            {/* Placeholder to shift the 7th item */}
                            <div className="hidden lg:block"></div>

                            {/* Digital Marketing Section */}
                            <motion.div
                                className="bg-white bg-opacity-10 rounded-lg shadow-lg p-8 hover:bg-opacity-20 transition duration-300 h-[350px] flex flex-col justify-center items-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h4 className="text-3xl text-primary flex items-center mb-4">
                                    <i className="fas fa-bullhorn mr-2"></i> Digital Marketing
                                </h4>
                                <p className="text-lg text-white text-center">
                                    We create tailored marketing campaigns that increase brand
                                    visibility and drive conversions.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* Mission, Vision, and Values */}
                    <section className="my-16">
                        <h3 className="text-4xl text-primary mb-6">
                            Our Mission and Vision
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="p-6 dark:bg-dark dark:text-darkText bg-light text-lightText shadow-lg rounded-lg">
                                <h4 className="text-2xl font-semibold mb-4 flex justify-center">
                                    <FaRocket className="mr-2 text-3xl" />
                                    Our Mission
                                </h4>
                                <p className="text-lg">
                                    We aim to innovate and provide robust IT solutions that
                                    empower businesses.
                                </p>
                            </div>
                            <div className="p-6 dark:bg-dark dark:text-darkText bg-light text-lightText shadow-lg rounded-lg">
                                <h4 className="text-2xl font-semibold mb-4 flex justify-center">
                                    <FaLightbulb className="mr-2 text-3xl" />
                                    Our Vision
                                </h4>
                                <p className="text-lg">
                                    To be the most trusted IT partner for companies worldwide,
                                    leading them into the future of technology.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                </div>
            </section>
            <Footer />
        </>
    );
};

export default DetailedAbout;