import Hero from "@App/components/Hero";
import Navbar from "@App/components/Navbar";
import About from "@App/components/About";
import Services from "@App/components/ServicesCards";
import Testimonials from "@App/components/Testimonials";  
import Portfolio from "@App/components/Portfolio";
import Footer from "@App/components/Footer";
import React from "react";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Testimonials />
            <Portfolio />
            <Footer />
        </>
    );
}