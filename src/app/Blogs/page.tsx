"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@App/components/Navbar';
import Footer from '@App/components/Footer';
import React from "react";

const Blogs = [
    {
        title: 'Understanding React Hooks',
        summary: 'Learn how React hooks can simplify components and enhance reusability.',
        slug: 'understanding-react-hooks',
        image: '/assets/blog/React_Hooks.webp',
        author: 'John Doe',
        date: 'Sep 30, 2024',
        readTime: '5 min read',
    },
    {
        title: 'Next.js Routing Explained',
        summary: 'Explore routing in Next.js for efficient page management and navigation.',
        slug: 'next-js-routing-explained',
        image: '/assets/blog/NextJs_Route.webp',
        author: 'Jane Smith',
        date: 'Sep 29, 2024',
        readTime: '4 min read',
    },
    {
        title: 'CSS Grid vs. Flexbox',
        summary: 'Discover the key differences between CSS Grid and Flexbox layout systems.',
        slug: 'css-grid-vs-flexbox',
        image: '/assets/blog/flexBox_vs_cssGrid.webp',
        author: 'Alice Johnson',
        date: 'Sep 28, 2024',
        readTime: '6 min read',
    },
    {
        title: 'Building RESTful APIs with Node.js',
        summary: 'Comprehensive guide on creating RESTful APIs using Node.js and the Express framework effectively.',
        slug: 'building-restful-apis-with-nodejs',
        image: '/assets/blog/rest-api-in-nodejs.webp',
        author: 'Jane Smith',
        date: 'Sep 29, 2024',
        readTime: '4 min read',
    },
    {
        title: 'An Introduction to TypeScript',
        summary: 'Learn the essential basics of TypeScript and its significant advantages over traditional JavaScript.',
        slug: 'introduction-to-typescript',
        image: '/assets/blog/intro-to-typescript.webp',
        author: 'Jane Smith',
        date: 'Sep 29, 2024',
        readTime: '4 min read',
    },
    {
        title: 'Deploying a Next.js Application',
        summary: 'Follow these essential steps to successfully deploy your Next.js application with ease.',
        slug: 'deploying-nextjs-application',
        image: '/assets/blog/deploy-next-js.webp',
        author: 'Jane Smith',
        date: 'Sep 29, 2024',
        readTime: '4 min read',
    },
    {
        title: 'State Management in React',
        summary: 'Learn about JavaScript promises and how to manage asynchronous operations.',
        slug: 'state-management-in-react',
        image: '/assets/blog/deploy-next-js.webp',
        author: 'Jane Smith',
        date: 'Sep 29, 2024',
        readTime: '4 min read',
    },
    {
        title: 'Understanding Promises in JavaScript',
        summary: 'Learn about JavaScript promises and how to manage asynchronous operations.',
        slug: 'understanding-promises-in-javascript',
        image: '/assets/blog/deploy-next-js.webp',
        author: 'Jane Smith',
        date: 'Sep 29, 2024',
        readTime: '4 min read',
    },
    {
        title: 'Creating a Responsive Navbar with Tailwind CSS',
        summary: 'Build a responsive navbar using Tailwind CSS for modern applications.',
        slug: 'responsive-navbar-tailwind-css',
        image: '/assets/blog/deploy-next-js.webp',
        author: 'Jane Smith',
        date: 'Sep 29, 2024',
        readTime: '4 min read',
    },
    // {
    //     title: 'Getting Started with GraphQL',
    //     summary: 'Introduction to GraphQL and its advantages over traditional REST APIs.',
    //     slug: 'getting-started-with-graphql',
    //     image: '/images/graphql-intro.jpg',
    //     author: 'Jane Smith',
    //     date: 'Sep 29, 2024',
    //     readTime: '4 min read',
    // },
    // {
    //     title: 'Enhancing Performance with React.memo',
    //     summary: 'Learn how React.memo can optimize performance in your React applications.',
    //     slug: 'enhancing-performance-react-memo',
    //     image: '/images/react-memo.jpg',
    //     author: 'Jane Smith',
    //     date: 'Sep 29, 2024',
    //     readTime: '4 min read',
    // },
];


const Blog = () => {
    const [blogs, setBlogs] = React.useState<Array<{
        title: string;
        summary: string;
        slug: string;
        image: string;
        author: string;
        date: string;
        readTime: string;
    }>>([]);

    React.useEffect(() => {
        setBlogs(Blogs); // Set blogs only on mount
    }, []);

    return (
        <>
            <Navbar />
            <div className="min-h-screen p-8 pt-28 bg-[#f5f5f5]">
                <h1 className="text-3xl font-bold mb-8 text-center">Our Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <Link key={blog.slug} href={`/Blogs/${blog?.slug}`}>
                            <motion.div
                                className="bg-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-2xl flex flex-col"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }} // Removed dynamic delay
                                viewport={{ once: true }}  // Ensure animation only happens once
                            >
                                <img
                                    src={blog?.image}
                                    alt={blog?.title}
                                    className="w-full h-70 object-cover rounded-t-lg"
                                />
                                <div className='p-5'>
                                    <h2 className="text-xl font-semibold mb-2">{blog?.title}</h2>
                                    <p className="text-gray-500 mb-4 flex-grow">{blog?.summary}</p>
                                    <div className="flex items-center gap-2 pt-2 text-xs text-gray-500">
                                        <Link href={`/author/${blog?.author ? blog.author.replace(/\s+/g, '-').toLowerCase() : "unknown"}`}>
                                            <div className="">
                                                <span className="text-green-700 capitalize">{blog?.author}</span>
                                                <div>
                                                    <span>{blog?.date}</span>
                                                    <span className="mx-1">•</span>
                                                    <span>{blog?.readTime}</span>
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
