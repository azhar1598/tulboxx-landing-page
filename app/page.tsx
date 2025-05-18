// pages/index.js
"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import { HiMenu, HiX } from "react-icons/hi";
import {
  FaFileInvoiceDollar,
  FaCalendarCheck,
  FaMobileAlt,
  FaTools,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Head>
        <title>Tulboxx - Smart Software for Contractors</title>
        <meta
          name="description"
          content="Estimate, invoice, collect payments, and manage projects from anywhere, at anytime."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Stats />
        <Features />
        {/* Features Section */}

        {/* Testimonials Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Thousands of contractors trust Tulboxx to run their business
              efficiently.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-6">
                  "Tulboxx has completely transformed how I run my plumbing
                  business. Invoicing is now a breeze, and I get paid faster
                  than ever. The scheduling features have eliminated
                  double-bookings."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/api/placeholder/50/50"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Michael Johnson</h4>
                    <p className="text-sm text-gray-500">
                      Johnson Plumbing & Heating
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <p className="text-gray-600 italic mb-6">
                  "As an electrical contractor, keeping track of multiple jobs
                  was always a challenge. With Tulboxx, I can manage everything
                  in one place. My team loves the mobile app for updating job
                  status while in the field."
                </p>
                <div className="flex items-center">
                  <Image
                    src="/api/placeholder/50/50"
                    alt="Customer"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">Sarah Williams</h4>
                    <p className="text-sm text-gray-500">Williams Electric</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}

        {/* Industries Section */}
        <section id="industries" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Built for Your Industry
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Tulboxx is designed to work for contractors across multiple
              industries.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Plumbing</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Electrical</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">HVAC</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Landscaping</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Cleaning</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Painting</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Construction</h3>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Roofing</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to streamline your business?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              Join thousands of contractors who are saving time and growing
              their business with Tulboxx.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
              <a
                href="#freetrial"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Start Free Trial
              </a>
              <a
                href="#demo"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-md font-semibold text-lg transition-colors"
              >
                Get a Demo
              </a>
            </div>
            <p className="mt-6 text-gray-500">
              No credit card required. Free for 14 days.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-orange-500 rounded-md flex items-center justify-center text-white font-bold text-xl">
                  T
                </div>
                <h1 className="ml-2 text-xl font-bold text-white">Tulboxx</h1>
              </div>
              <p className="text-gray-400">
                Smart software for contractors to manage their business
                efficiently.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#careers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#press"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#help"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#partners"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#community"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Community
                  </a>
                </li>
                <li>
                  <a
                    href="#webinars"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Webinars
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="tel:18001234567"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    1-800-123-4567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@tulboxx.com"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    info@tulboxx.com
                  </a>
                </li>
              </ul>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#facebook"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FB
                </a>
                <a
                  href="#twitter"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  TW
                </a>
                <a
                  href="#instagram"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  IG
                </a>
                <a
                  href="#linkedin"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LI
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Tulboxx. All rights reserved.
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="#terms"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
