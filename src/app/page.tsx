import Hero from "../Components/Hero";
import Navbar from "@App/Components/Navbar";
import About from "../Components/About";
import Services from "../Components/ServicesCards";
import Testimonials from "../Components/Testimonials";  
import Portfolio from "../Components/Portfolio";
import Footer from "../Components/Footer";
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