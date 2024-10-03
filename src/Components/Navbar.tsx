"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/assets/icon.svg';
import Logo from '../../public/assets/valora.svg';

const Navbar = () => {
    const [State, setState] = useState({
        isScrolled: false,
        isMenuOpen: false,
        isServicesOpen: false,
        isMobileServicesOpen: false // State for mobile services menu
    });
    const servicesMenuRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setState((prevState) => ({ ...prevState, isScrolled: window.scrollY > 50 }));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
                setState((prevState) => ({ ...prevState, isServicesOpen: false, isMobileServicesOpen: false }));
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleMenu = () => {
        setState((prevState) => ({ ...prevState, isMenuOpen: !prevState.isMenuOpen }));
    };

    const handleLinkClick = () => {
        setState((prevState) => ({
            ...prevState,
            isServicesOpen: false,
            isMenuOpen: false,
            isMobileServicesOpen: false // Close mobile services menu on link click
        }));

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const toggleServicesMenu = () => {
        setState((prevState) => ({
            ...prevState,
            isServicesOpen: !prevState.isServicesOpen
        }));
    };

    const toggleMobileServicesMenu = () => {
        setState((prevState) => ({
            ...prevState,
            isMobileServicesOpen: !prevState.isMobileServicesOpen
        }));
    };

    return (
        <nav id={"Nav"} className={`fixed w-full top-0 z-50 transition-all duration-500 ${State.isScrolled ? 'bg-[#171713] text-white' : 'bg-[#171713] text-white'}`}>
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center">
                    <Link href="/">
                        <Image src={logo} alt="Main Logo" width={40} height={40} className="cursor-pointer" />
                    </Link>
                    <Link href="/" className="ml-2">
                        <Image src={Logo} alt="Valora Logo" width={100} height={50} className="cursor-pointer" />
                    </Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex flex-col justify-between h-6 w-6 cursor-pointer" onClick={handleToggleMenu}>
                    <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${State.isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></div>
                    <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${State.isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                    <div className={`h-0.5 w-full bg-primary transition-all duration-300 ${State.isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
                </div>

                {/* Menu for Desktop */}
                <ul className="hidden md:flex space-x-8 text-base">
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <Link href="/" onClick={handleLinkClick}>Home</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <Link href="/#about" onClick={handleLinkClick}>About</Link>
                    </motion.li>

                    {/* Services Dropdown */}
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="relative">
                        <button onClick={toggleServicesMenu} className="focus:outline-none">Services</button>
                        {State.isServicesOpen && (
                            <ul ref={servicesMenuRef} className="absolute left-0 mt-1 py-2 w-56 bg-[#e7e4db] text-black border rounded-md shadow-lg z-10">
                                <li>
                                    <Link href="/services/web-development" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Web Development
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-development" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Application Development
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ui-ux-design" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            UI/UX Design
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-ml" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            AI & ML
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/cloud-solutions" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Cloud Solutions
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/digital-marketing" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Digital Marketing
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <Link href="/Blogs" onClick={handleLinkClick}>Blogs</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <Link href="/#portfolio" onClick={handleLinkClick}>Portfolio</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <Link href="/contact" onClick={handleLinkClick}>Contact</Link>
                    </motion.li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${State.isMenuOpen ? 'fixed' : 'hidden'} top-[4rem] left-0 w-full h-[calc(100%-4rem)] text-center bg-[#171713] z-20`}>
                <ul className="flex flex-col py-4 space-y-2">
                    <li>
                        <Link href="/" onClick={handleLinkClick} className="block px-4 py-2">Home</Link>
                    </li>
                    <li>
                        <Link href="/#about" onClick={handleLinkClick} className="block px-4 py-2">About</Link>
                    </li>
                    <li className="relative">
                        <button onClick={toggleMobileServicesMenu} className="block px-4 py-2 w-full text-center">Services</button>
                        {State.isMobileServicesOpen && (
                            <ul className="relative mt-1 py-2 w-full bg-[#e7e4db] text-black border  shadow-lg z-10">
                                <li>
                                    <Link href="/services/web-development" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Web Development
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/mobile-development" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Application Development
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ui-ux-design" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            UI/UX Design
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/ai-ml" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            AI & ML
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/cloud-solutions" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Cloud Solutions
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services/digital-marketing" onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative">
                                        <span className="relative z-10 inline-block">
                                            Digital Marketing
                                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                        </span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleLinkClick} className="block px-4 py-2">Contact</Link>
                    </li>
                    <li>
                        <Link href="/#portfolio" onClick={handleLinkClick} className="block px-4 py-2">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleLinkClick} className="block px-4 py-2">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
