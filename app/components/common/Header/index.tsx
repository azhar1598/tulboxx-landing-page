"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS } from "@/app/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("/")) {
      router.push(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="h-10 w-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-md flex items-center justify-center text-white font-bold text-xl shadow-md transform transition-transform group-hover:scale-105 group-hover:shadow-lg">
              T
            </div>
            <h1 className="ml-2 text-xl font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
              Tulboxx
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-600">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="font-medium relative group cursor-pointer"
              >
                <span className="group-hover:text-orange-500 transition-colors duration-300">
                  {item.label}
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="font-semibold text-gray-700 hover:text-orange-500 transition-colors duration-300 flex items-center cursor-pointer"
            >
              <Phone size={18} className="mr-2" />
              <span>+1 (234) 567-890</span>
            </a>
            <a
              href="https://tulboxx.vercel.app/"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-800 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-[500px] shadow-lg" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 pb-4">
            {NAV_LINKS.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.href)}
                className="font-medium text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center justify-between w-full cursor-pointer"
              >
                <span>{item.label}</span>
                <ChevronDown size={16} className="ml-1" />
              </button>
            ))}
            <div className="pt-2 border-t border-gray-100">
              <a
                href="tel:+1234567890"
                className="font-semibold text-gray-700 hover:text-orange-500 transition-colors duration-300 block mb-4 flex items-center cursor-pointer"
              >
                <Phone size={18} className="mr-2" />
                +1 (234) 567-890
              </a>
              <a
                href="https://tulboxx.vercel.app/"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg block text-center cursor-pointer"
              >
                Get Started
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
