"use client";

import "@App/Styles/global.sass";
import Link from "next/link";
import React, { ReactNode, useState } from "react";
import {
  FaKey,
  FaCode,
  FaIdBadge,
  FaGlobe,
  FaClock,
  FaArrowLeft,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import icons from react-icons
import Base64 from "./base64-encoder-decoder/page";
import Image from "next/image";
import logo from "../../../public/assets/icon.svg";
import Logo from "../../../public/assets/valora.svg";
import UUID from "./uuid-generator/page";
import URL from "./url-encoder-decoder/page";
import DateAndTime from "./date-time-utilities/page";
import { usePathname } from "next/navigation";

export default function ToolsLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const tool = pathname?.split("/").pop();

  // State for sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderTool = () => {
    switch (tool) {
      case "base64-encoder-decoder":
        return <Base64 />;
      case "uuid-generator":
        return <UUID />;
      case "url-encoder-decoder":
        return <URL />;
      case "date-time-utilities":
        return <DateAndTime />;
      default:
        return <Base64 />;
    }
  };

  const tools = [
    {
      name: "base64-encoder-decoder",
      label: "Base64 Encoder/Decoder",
      icon: <FaCode className="text-green-400 mr-2" />,
    },
    {
      name: "uuid-generator",
      label: "UUID Generator",
      icon: <FaIdBadge className="text-purple-400 mr-2" />,
    },
    {
      name: "url-encoder-decoder",
      label: "URL Encoder/Decoder",
      icon: <FaGlobe className="text-red-400 mr-2" />,
    },
    {
      name: "date-time-utilities",
      label: "Date and Time Utilities",
      icon: <FaClock className="text-yellow-400 mr-2" />,
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden p-4 text-gray-800 focus:outline-none"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Sidebar Menu */}
      <div
        className={`lg:block w-full lg:w-80 p-6 text-primary bg-gray-800 shadow-lg lg:relative fixed z-50 transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "lg:translate-x-0 -translate-x-full"
        }`}
        style={{ height: "100vh" }}
      >
        {/* Close Button inside the Sidebar (Mobile Only) */}
        <button
          className="lg:hidden absolute top-4 right-4 text-gray-300 focus:outline-none"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FaTimes size={24} />
        </button>

        <div className="flex items-center mb-4">
          <Link href="/">
            <Image
              src={logo}
              alt="Main Logo"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </Link>
          <Link href="/" className="ml-2">
            <Image
              src={Logo}
              alt="Valora Logo"
              width={100}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        <ul className="space-y-4">
          {/* Home Button */}
          <li>
            <Link
              href="/"
              className="p-2 rounded w-full text-left flex items-center text-gray-300 hover:bg-gray-700"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FaArrowLeft className="mr-2 text-yellow-400" />
              <span>Home</span>
            </Link>
          </li>

          {/* Tools Menu Items */}
          {tools.map(({ name, label, icon }) => (
            <li key={name}>
              <Link
                href={`/tools/${name}`}
                className={`block p-2 rounded ${
                  tool === name ? "bg-primary text-white" : "text-gray-300"
                } hover:bg-gray-700 w-full text-left flex items-center`}
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on selection
              >
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">{renderTool()}</div>
    </div>
  );
}
