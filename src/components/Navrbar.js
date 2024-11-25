import React, { useState } from "react";
import logo from "./logo.png"; // Ensure your logo is in the same directory

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="PoliConnect Logo" className="h-12 mr-3 rounded-full" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a
              href="#features"
              className="hover:text-gray-200 hover:underline transition duration-300"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-gray-200 hover:underline transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-gray-200 hover:underline transition duration-300"
            >
              Contact
            </a>
          </li>
          <li>
            <button className="bg-white text-blue-600 px-5 py-2 rounded-full shadow-md hover:bg-gray-100 hover:text-blue-700 transition duration-300">
              Sign Up
            </button>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-blue-700 to-purple-700">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <a
                href="#features"
                className="text-lg hover:text-gray-200 hover:underline transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-lg hover:text-gray-200 hover:underline transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg hover:text-gray-200 hover:underline transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 hover:text-blue-700 transition duration-300">
                Sign Up
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
