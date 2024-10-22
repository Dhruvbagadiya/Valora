"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../../Components/Navbar";
import Footer from "../../../Components/Footer";
import blogs from "../../../data/blogData";
import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
} from "react-share";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState<{
    title: string;
    content?: string;
    image: string;
    summary?: string;
    slug: string;
    author?: string;
    date?: string;
    readTime?: string;
  } | null>(null);

  useEffect(() => {
    const foundBlog = blogs.find((b) => b.slug === slug);
    setBlog(foundBlog || null);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-700">Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      {/* Hero Section
      <div
        className="relative h-64 sm:h-72 md:h-80 lg:h-96 w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${blog.image})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 md:px-8 lg:px-16">
          {blog.title}
        </h1>
      </div> */}

      {/* Blog Content */}
      <div className="min-h-screen p-4 pt-12 mt-14 bg-gray-100 lg:p-8">
        <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-lg">
          {/* Meta Info */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
            <div className="text-gray-500 text-sm lg:text-base">
              <p>
                By{" "}
                <span className="font-semibold text-gray-800">
                  {blog.author}
                </span>
              </p>
              <p>
                {blog.date} · {blog.readTime}
              </p>
            </div>
            <div className="flex space-x-4">
              <FacebookShareButton
                url={typeof window !== "undefined" ? window.location.href : ""}
                title={`Check out this blog: ${blog.title}`}
                className="hover:opacity-80"
              >
                <FacebookIcon size={32} round />
              </FacebookShareButton>

              <TwitterShareButton
                url={typeof window !== "undefined" ? window.location.href : ""}
                title={`Check out this blog: ${blog.title}`}
                className="hover:opacity-80"
              >
                <TwitterIcon size={32} round />
              </TwitterShareButton>

              <LinkedinShareButton
                url={typeof window !== "undefined" ? window.location.href : ""}
                title={`Check out this blog: ${blog.title}`}
                className="hover:opacity-80"
              >
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
            </div>
          </div>

          {/* Blog Image */}
          <div className="mb-8">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover rounded-md shadow-md"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-sm sm:prose lg:prose-lg mx-auto text-gray-800 leading-relaxed">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content as string }}
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="max-w-6xl mx-auto mt-8 flex justify-center">
          <button
            className="p-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out"
            onClick={() => window.history.back()}
          >
            Back to All Blogs
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogPost;
