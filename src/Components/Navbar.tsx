"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../public/assets/icon.svg';
import Logo from '../../public/assets/valora.svg';
import { FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
    const [State, setState] = useState({
        isScrolled: false,
        isMenuOpen: false,
        isServicesOpen: false,
        isMobileServicesOpen: false
    });
    const servicesMenuRef = useRef<HTMLUListElement>(null);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

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

    const toggleMobileServicesMenu = () => {
        setState((prevState) => ({
            ...prevState,
            isMobileServicesOpen: !prevState.isMobileServicesOpen
        }));
    };

    const handleLinkClick = () => {
        setState((prevState) => ({
            ...prevState,
            isServicesOpen: false,
            isMenuOpen: false,
        }));

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleServicesMenu = () => {
        setState((prevState) => ({
            ...prevState,
            isServicesOpen: !prevState.isServicesOpen,
        }));
    };

    const handleMouseEnter = () => {
        setState((prevState) => ({ ...prevState, isServicesOpen: true }));
        // Clear any existing timeout when hovering
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
            setHoverTimeout(null);
        }
    };

    const handleMouseLeave = () => {
        // Set a timeout to close the menu after 1 second
        const timeout = setTimeout(() => {
            setState((prevState) => ({ ...prevState, isServicesOpen: false }));
        }, 500);
        setHoverTimeout(timeout);
    };

    return (
        <nav id={"Nav"} className={`fixed w-full top-0 z-50 transition-all duration-500 ${State.isScrolled ? 'bg-secondary text-white' : 'bg-secondary text-white'}`}>
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
                        <Link href="/" onClick={handleLinkClick} className="hover:text-primary transition-colors duration-300">Home</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <Link href="/#about" onClick={handleLinkClick} className="hover:text-primary transition-colors duration-300">About</Link>
                    </motion.li>

                    {/* Services Dropdown */}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="focus:outline-none flex items-center hover:text-primary transition-colors duration-300" onClick={toggleServicesMenu}>
                            Services
                            <FaChevronDown
                                className={`ml-1 transition-transform duration-300 ${State.isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>
                        {State.isServicesOpen && (
                            <ul
                                ref={servicesMenuRef}
                                className="absolute left-0 mt-1 py-2 w-56 bg-[#ffffff] text-black border rounded-md shadow-lg z-10"
                            >
                                {[
                                    { href: "/services/game-development", text: "Game Development" },
                                    { href: "/services/web-development", text: "Web Development" },
                                    { href: "/services/app-development", text: "Application Development" },
                                    { href: "/services/ai-ml", text: "AI & ML" },
                                    { href: "/services/ui-ux-design", text: "UI/UX Design" },
                                    { href: "/services/cloud-solutions", text: "Cloud Solutions" },
                                    { href: "/services/digital-marketing", text: "Digital Marketing" },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            onClick={handleLinkClick}
                                            className="block px-4 py-2 text-sm group"
                                        >
                                            <span className="relative inline-block">
                                                {item.text}
                                                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                        <Link href="/Blogs" onClick={handleLinkClick} className="hover:text-primary transition-colors duration-300">Blogs</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <Link href="/#portfolio" onClick={handleLinkClick} className="hover:text-primary transition-colors duration-300">Portfolio</Link>
                    </motion.li>
                    <motion.li initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                        <Link href="/contact" onClick={handleLinkClick} className="hover:text-primary transition-colors duration-300">Contact</Link>
                    </motion.li>
                </ul>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${State.isMenuOpen ? 'fixed' : 'hidden'} top-[4rem] left-0 w-full h-[calc(100%-4rem)] bg-secondary z-20`}>
                <ul className="flex flex-col py-4 space-y-2">
                    <li>
                        <Link href="/" onClick={handleLinkClick} className="block px-4 py-2 text-center">Home</Link>
                    </li>
                    <li>
                        <Link href="/#about" onClick={handleLinkClick} className="block px-4 py-2 text-center">About</Link>
                    </li>
                    <li className="relative">
                        <button
                            onClick={toggleMobileServicesMenu}
                            className="flex items-center justify-center w-1/2 m-auto px-4 py-2 bg-transparent border border-transparent rounded-lg hover:bg-gray-800 transition duration-300"
                        >
                            <span className="flex-1 text-center text-lg">Services</span>
                            <FaChevronDown
                                className={` transition-transform duration-300 ${State.isMobileServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </button>
                        {State.isMobileServicesOpen && (
                            <ul className="relative mt-1 w-full bg-secondary text-[#ffffff] shadow-lg z-10 text-center">
                                {[
                                    { href: "/services/game-development", text: "Game Development" },
                                    { href: "/services/web-development", text: "Web Development" },
                                    { href: "/services/app-development", text: "Application Development" },
                                    { href: "/services/ai-ml", text: "AI & ML" },
                                    { href: "/services/ui-ux-design", text: "UI/UX Design" },
                                    { href: "/services/cloud-solutions", text: "Cloud Solutions" },
                                    { href: "/services/digital-marketing", text: "Digital Marketing" },
                                ].map((item, index) => (
                                    <li key={index}>
                                        <hr className="border-t border-gray-500 my-1" />
                                        <Link href={item.href} onClick={handleLinkClick} className="block px-4 py-2 text-sm group relative hover:text-primary">
                                            <span className="inline-block">
                                                {item.text}
                                                <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                                            </span>
                                        </Link>
                                        <hr className="border-t border-gray-500 my-1" />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link href="/Blogs" onClick={handleLinkClick} className="block px-4 py-2 text-center">Blogs</Link>
                    </li>
                    <li>
                        <Link href="/#portfolio" onClick={handleLinkClick} className="block px-4 py-2 text-center">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleLinkClick} className="block px-4 py-2 text-center">Contact</Link>
                    </li>
                </ul>
            </div>

        </nav>
    );
};

export default Navbar;
