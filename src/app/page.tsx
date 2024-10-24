"use client"

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Services from "../components/ServicesCards";
import Testimonials from "../components/Testimonials";  
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
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