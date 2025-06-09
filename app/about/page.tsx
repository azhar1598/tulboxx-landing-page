import React from "react";
import { Heart, Building, Award, ChevronRight } from "lucide-react";
import Link from "next/link";

function AboutPage() {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              We're driven by a passion for innovation, integrity, and putting
              our users first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <Heart className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Customer Focus
              </h3>
              <p className="text-gray-600 text-center">
                We listen to our users and build features that truly make a
                difference in their daily work.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <Building className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Reliability
              </h3>
              <p className="text-gray-600 text-center">
                Contractors rely on us, so we make sure our platform is always
                fast, secure, and dependable.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <Award className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Excellence
              </h3>
              <p className="text-gray-600 text-center">
                We strive for excellence in everything we do, from product
                design to customer support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Meet the Team
            </h2>
            <p className="text-lg text-gray-600">
              Tulboxx is built by a passionate team of builders, designers, and
              problem-solvers.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-orange-100 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/66.jpg"
                  alt="Alex Smith"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">
                Alex Smith
              </h3>
              <p className="text-gray-500">Founder & CEO</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-orange-100 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/67.jpg"
                  alt="Jamie Lee"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">Jamie Lee</h3>
              <p className="text-gray-500">Lead Developer</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <div className="h-20 w-20 rounded-full bg-orange-100 mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/68.jpg"
                  alt="Morgan Patel"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-900">
                Morgan Patel
              </h3>
              <p className="text-gray-500">Product Designer</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-5 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Ready to join us?</h2>
            <p className="mb-4">
              Be part of the Tulboxx journey and help shape the future of
              contracting.
            </p>
            <a
              href="#getstarted"
              className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-50 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
