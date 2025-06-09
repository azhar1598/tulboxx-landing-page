import React from "react";

function SubscribeLetter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className=" text-gray-900 text-3xl md:text-4xl font-bold mb-6">
          Ready to streamline your business?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Join thousands of contractors who are saving time and growing their
          business with Tulboxx.
        </p>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="https://tulboxx.vercel.app/"
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
  );
}

export default SubscribeLetter;
