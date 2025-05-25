import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-colors resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-white/90 mb-8">
                Have questions? We're here to help. Reach out to us through any
                of these channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-white/80">support@tulboxx.com</p>
                    <p className="text-white/80">sales@tulboxx.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-white/80">+1 (555) 123-4567</p>
                    <p className="text-white/80">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-white/80">123 Business Street</p>
                    <p className="text-white/80">New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    What is your response time?
                  </h4>
                  <p className="text-gray-600">
                    We typically respond to all inquiries within 24 hours during
                    business days.
                  </p>
                </div>
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Do you offer support on weekends?
                  </h4>
                  <p className="text-gray-600">
                    Yes, we provide email support on weekends, with reduced
                    response times.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    How can I schedule a demo?
                  </h4>
                  <p className="text-gray-600">
                    You can schedule a demo through our contact form or by
                    emailing sales@tulboxx.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
