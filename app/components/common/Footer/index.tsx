import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 ">
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
  );
}

export default Footer;
