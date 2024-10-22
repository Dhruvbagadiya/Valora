import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { ThemeSelect } from './ThemeSelect';

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-300 py-10">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Valora Infotech</h3>
                        <p className="text-sm">
                            Valora Infotech is dedicated to providing top-tier IT solutions, helping businesses
                            thrive in a rapidly evolving digital world. Let’s grow together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                        <ul>
                            <li className="mb-2">
                                <a href="/#about" className="hover:text-primary transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/#services" className="hover:text-primary transition-colors">
                                    Services
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" className="hover:text-primary transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/Blogs" className="hover:text-primary transition-colors">
                                    Blogs
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="/tools" className="hover:text-primary transition-colors">
                                    Tools
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Contact */}
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4 mb-6">
                            {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors"
                >
                <FaFacebookF className="h-5 w-5 text-white" />
              </a> */}
                            {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors"
                >
                <FaTwitter className="h-5 w-5 text-white" />
              </a> */}
                            <a
                                href="https://www.linkedin.com/company/valorainfotech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors"
                            >
                                <FaLinkedinIn className="h-5 w-5 text-white" />
                            </a>
                            {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700 rounded-full hover:bg-primary transition-colors"
                >
                <FaInstagram className="h-5 w-5 text-white" />
              </a> */}
                        </div>
                        <p className="text-sm">
                            Email: <a href="mailto:info@valorainfotech.com" className="hover:text-primary">info@valorainfotech.com</a>
                        </p>
                        <div className='mt-2'>
                            <ThemeSelect />
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-10 pt-6 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Valora Infotech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
