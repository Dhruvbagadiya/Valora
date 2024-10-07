"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import React from "react";

const blogs = [
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
    summary: 'Explore various state management techniques in React applications.',
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
  //   title: 'Getting Started with GraphQL',
  //   summary: 'Introduction to GraphQL and its advantages over traditional REST APIs.',
  //   slug: 'getting-started-with-graphql',
  //   image: '/images/graphql-intro.jpg',
  // },
  // {
  //   title: 'Enhancing Performance with React.memo',
  //   summary: 'Learn how React.memo can optimize performance in your React applications.',
  //   slug: 'enhancing-performance-react-memo',
  //   image: '/images/react-memo.jpg',
  // },
];


const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pt-28 bg-[#f5f5f5]">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link key={index} href={`/Blogs/${blog.slug}`}>
              <motion.div
                className="bg-white p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-2xl flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-4/5 h-56 object-cover rounded-md mb-4 mx-auto"
                />
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-700 mb-4 flex-grow">{blog.summary}</p>
                <div className="flex items-center pt-2 text-xs text-gray-500">
                    {/* <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Link href={`/author/${blog.author.replace(/\s+/g, '-').toLowerCase()}`}>
                        <img
                          src="/path/to/default-profile-image.jpg" // Placeholder for the profile image
                          alt={blog.author}
                          className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%] object-cover"
                        />
                      </Link>
                    </div> */}
                    <Link href={`/author/${blog.author.replace(/\s+/g, '-').toLowerCase()}`}>
                      <div className="">
                        <span className="text-green-700 capitalize">{blog.author}</span>
                        <div>
                          <span>{blog.date}</span>
                          <span className="mx-1">•</span>
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </Link>
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
