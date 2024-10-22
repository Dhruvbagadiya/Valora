"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React from "react";
import blogData, { BlogType } from "@App/data/blogData"; // Ensure you're importing correctly

// Ensure the BlogType is imported here

const Blog = () => {
    // Set the state to use BlogType directly
    const [blogs, setBlogs] = React.useState<BlogType[]>([]);

    React.useEffect(() => {
        setBlogs(blogData); // Use the imported blog data
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen p-8 pt-28 bg-secondary">
                <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">Our Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link key={blog.slug} href={`/Blogs/${blog.slug}`}>
                            <motion.div
                                className="bg-white rounded-xl shadow-md transition transform hover:scale-105 hover:shadow-2xl flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-70 object-cover rounded-t-lg"
                                />
                                <div className='p-5'>
                                    <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                                    <p className="text-gray-500 mb-4 flex-grow">{blog.summary || "No summary available."}</p>
                                    <div className="flex items-center gap-2 pt-2 text-xs text-gray-500">
                                        <Link href={`/author/${blog.author ? blog.author.replace(/\s+/g, '-').toLowerCase() : "unknown"}`}>
                                            <div>
                                                <span className="text-green-700 capitalize">{blog.author || "Unknown"}</span>
                                                <div>
                                                    <span>{blog.date || "Unknown date"}</span>
                                                    <span className="mx-1">•</span>
                                                    <span>{blog.readTime || "Unknown read time"}</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
