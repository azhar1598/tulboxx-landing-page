"use client";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-xl">
              T
            </div>
            <h1 className="ml-2 text-xl font-bold text-orange-500">Tulboxx</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-[#777777]">
            <a
              href="#features"
              className="font-medium hover:text-orange-500 transition-colors"
            >
              Features
            </a>
            <a
              href="#industries"
              className="font-medium hover:text-orange-500 transition-colors"
            >
              Industries
            </a>
            <a
              href="#pricing"
              className="font-medium hover:text-orange-500 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="font-medium hover:text-orange-500 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center">
            <a
              href="#login"
              className="mr-6 font-semibold hover:text-orange-500 transition-colors"
            >
              Log In
            </a>
            <a
              href="#getstarted"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {/* {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />} */}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-4">
              <a
                href="#features"
                className="font-medium hover:text-orange-500 transition-colors"
              >
                Features
              </a>
              <a
                href="#industries"
                className="font-medium hover:text-orange-500 transition-colors"
              >
                Industries
              </a>
              <a
                href="#pricing"
                className="font-medium hover:text-orange-500 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="font-medium hover:text-orange-500 transition-colors"
              >
                About
              </a>
              <a
                href="#login"
                className="font-semibold hover:text-orange-500 transition-colors"
              >
                Log In
              </a>
              <a
                href="#getstarted"
                className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-md font-semibold transition-colors text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
