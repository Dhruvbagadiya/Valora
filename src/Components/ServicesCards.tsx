/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

// Define the Service interface
interface Service {
    title: string;
    description: string;
    icon: string;
    moreInfo: string;
    path: string;
}

interface ServiceCardProps {
    service: Service;
    center?: boolean;
}

const servicesData: Service[] = [
    {
        title: 'Game Development',
        description: 'We create immersive, interactive games across platforms to captivate players.',
        icon: 'assets/service-cards/game-development.webp',
        moreInfo: 'We create engaging games with captivating stories, smooth mechanics, and stunning visuals for both casual and hardcore gamers.',
        path: '/services/game-development',
    },
    {
        title: 'Web Development',
        description: 'Fast, responsive, SEO-optimized websites tailored to meet your business needs.',
        icon: 'assets/service-cards/web.webp',
        moreInfo: 'Our team specializes in modern web technologies to deliver responsive designs and custom functionalities across devices.',
        path: '/services/web-development',
    },
    {
        title: 'Mobile App Development',
        description: 'Custom mobile apps for iOS and Android, focusing on user experience.',
        icon: 'assets/service-cards/app.webp',
        moreInfo: 'We develop scalable apps with intuitive designs, high performance and seamless experiences across devices.',
        path: '/services/app-development',
    },
    {
        title: 'UI/UX Design',
        description: 'Intuitive, visually engaging interfaces to enhance user experience and engagement.',
        icon: 'assets/service-cards/user-experience.webp',
        moreInfo: 'Our designs prioritize user engagement, creating visually appealing, innovative and intuitive interfaces across platforms.',
        path: '/services/ui-ux-design',
    },
    {
        title: 'AI & ML',
        description: 'AI-driven solutions for automation, insights, and intelligent decision-making systems.',
        icon: 'assets/service-cards/ai-ml.webp',
        moreInfo: 'We help businesses utilize AI for predictive models, automation, and intelligent decision-making with data-driven solutions.',
        path: '/services/ai-ml',
    },
    {
        title: 'Cloud Solutions',
        description: 'Scalable cloud solutions for efficient operations, management, and cost savings.',
        icon: 'assets/service-cards/cloud.webp',
        moreInfo: 'We provide secure, scalable cloud services for seamless data and infrastructure management with reduce costs.',
        path: '/services/cloud-solutions',
    },
    {
        title: 'Digital Marketing',
        description: 'Data-driven strategies to boost online visibility, attract traffic, and engagement.',
        icon: 'assets/service-cards/marketing.webp',
        moreInfo: 'Our strategies increase online visibility through SEO, content marketing, and social media, driving targeted traffic to your site.',
        path: '/services/digital-marketing',
    },
];

const ServiceCard = ({ service, center }: ServiceCardProps) => (
    <div className={`group relative w-full h-80 perspective cursor-pointer ${center ? "lg:col-span-1 lg:col-start-2" : ""}`}>
        <div className="card h-full">
            <div className="card-inner h-full">
                {/* Front Side */}
                <div className="front flex flex-col items-center justify-center h-full p-6">
                    <img
                        src={service.icon}
                        className="h-16 w-16 mx-auto mb-4"
                        width={64}
                        height={64}
                    />
                    <h3 className="text-2xl font-semibold text-primary mb-4">{service.title}</h3>
                    <p className="text-lg">{service.description}</p>
                </div>
                {/* Back Side */}
                <div className="back flex flex-col items-center justify-center h-full p-6 bg-primary text-white rounded-lg">
                    <p className="text-xl text-white mb-4">{service.moreInfo}</p>
                    <Link href={service.path} passHref>
                        <button className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-300 transition-colors">
                            More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

const Services = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPosition(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backgroundPosition = `center ${scrollPosition * 0.5}px`;

    return (
        <section
            id="services"
            className="py-24 text-white relative select-none"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/assets/web-background.jpg')`,
                backgroundAttachment: "fixed",
                backgroundPosition,
                backgroundSize: "cover",
            }}
        >
            <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
                <motion.h2
                    className="text-4xl sm:text-2xl md:text-5xl font-bold mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our <span className="text-primary">Services</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} center={service.title === "Digital Marketing"} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
