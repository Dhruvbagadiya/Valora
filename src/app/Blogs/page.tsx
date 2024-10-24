"use server";
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import React from "react";
import { getAllMdx } from "../../lib/mdx";
import { BlogType } from "../../model/blog";

const Blog = async () => {
    const blogs = await getAllMdx();

    if (blogs.length === 0) {
        return (
            <>
                <Navbar />
                <div className="min-h-screen p-8 pt-28 dark:bg-dark dark:text-darkText bg-light text-lightText">
                    <h1 className="text-3xl font-bold mb-8 text-center">Our Blogs</h1>
                    <div className="flex justify-center items-center h-96">
                        <h1 className="text-2xl text-gray-500 dark:text-gray-400">No blogs available</h1>
                    </div>
                </div>
                <Footer />
            </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen p-8 pt-28 dark:bg-dark dark:text-darkText bg-light text-lightText">
                <h1 className="text-3xl font-bold mb-8 text-center">Our Blogs</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog: any) => (
                        <Link key={blog.frontMatter.slug} href={`/Blogs/${blog.frontMatter.slug}`}>
                            <div
                                className="bg-gray-100 dark:bg-gray-900 rounded-xl shadow-xl transition transform hover:scale-105 hover:shadow-2xl flex flex-col"
                            >
                                <img
                                    src={blog.frontMatter?.thumbnail}
                                    alt={blog.frontMatter.title}
                                    className="w-full h-70 object-cover rounded-t-lg"
                                />
                                <div className="p-5">
                                    <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{blog.frontMatter.title}</h2>
                                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-pretty line-clamp-2">
                                        {blog.frontMatter?.description || "No summary available."}
                                    </p>
                                    <div className="flex items-center gap-2 pt-2 text-xs text-gray-500 dark:text-gray-400">
                                        <div>
                                            <span className="text-green-700 dark:text-green-400 capitalize">{blog.frontMatter.author || "Unknown"}</span>
                                            <div>
                                                <span>{blog.frontMatter?.date.toString() || "Unknown date"}</span>
                                                <span className="mx-1">•</span>
                                                <span>{blog.frontMatter?.readtime + " min" || "Unknown read time"}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
