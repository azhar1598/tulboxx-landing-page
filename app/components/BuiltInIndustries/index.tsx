import React from "react";
import {
  FaWrench,
  FaBolt,
  FaSnowflake,
  FaLeaf,
  FaBroom,
  FaPaintRoller,
  FaHardHat,
  FaHome,
} from "react-icons/fa";

function BuiltInIndustries() {
  const industries = [
    { name: "Plumbing", icon: <FaWrench className="w-8 h-8 text-blue-500" /> },
    {
      name: "Electrical",
      icon: <FaBolt className="w-8 h-8 text-yellow-500" />,
    },
    { name: "HVAC", icon: <FaSnowflake className="w-8 h-8 text-cyan-500" /> },
    {
      name: "Landscaping",
      icon: <FaLeaf className="w-8 h-8 text-green-500" />,
    },
    { name: "Cleaning", icon: <FaBroom className="w-8 h-8 text-purple-500" /> },
    {
      name: "Painting",
      icon: <FaPaintRoller className="w-8 h-8 text-red-500" />,
    },
    {
      name: "Construction",
      icon: <FaHardHat className="w-8 h-8 text-orange-500" />,
    },
    { name: "Roofing", icon: <FaHome className="w-8 h-8 text-gray-500" /> },
  ];

  return (
    <section
      id="industries"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Animated background with improved gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>

      {/* Enhanced geometric decorative elements */}
      <div className="absolute top-0 left-0 h-64 w-96 bg-orange-500/5 rounded-br-full transform -translate-x-20 translate-y-10"></div>
      <div className="absolute bottom-0 right-0 h-72 w-96 bg-orange-500/5 rounded-tl-full transform translate-x-20 -translate-y-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl"></div>

      {/* Modern dot pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Built for Your Industry
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16 text-lg">
          Tulboxx is designed to work for contractors across multiple
          industries, providing tailored solutions for your specific needs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center border border-gray-700/50"
            >
              <div className="mb-4">{industry.icon}</div>
              <h3 className="font-semibold text-xl text-white">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuiltInIndustries;
