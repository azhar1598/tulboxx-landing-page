import React from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const INDUSTRY_CATEGORIES = {
  "Construction & General": [
    "General Contractor",
    "Residential Construction",
    "Remodeling",
  ],
  "Interior & Finishing": [
    "Drywall",
    "Painting",
    "Plastering",
    "Flooring",
    "Tiling",
  ],
  "Specialized Trades": ["Electrical", "Plumbing", "HVAC"],
  "Exterior & Structure": ["Roofing", "Masonry", "Windows & Doors", "Decking"],
  "Support Services": [
    "Insulation",
    "Landscaping",
    "Fencing",
    "Carpentry",
    "Handyman",
  ],
};

// Convert to flat array for the grid
const INDUSTRIES = Object.values(INDUSTRY_CATEGORIES).flat();

function IndustriesPage() {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50/30 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Trade Pros Trust <span className="text-orange-500">Tulboxx</span> to
            Win Jobs & Grow
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Specifically built for all contractors. Estimate, invoice, collect
            payments, and manage projects from anywhere, at anytime.
          </p>
          <Link
            href="#getstarted"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Try It Free
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-8 max-w-4xl mx-auto">
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                $85B+
              </div>
              <div className="text-gray-700 font-medium">transactions</div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">
                1.3M+
              </div>
              <div className="text-gray-700 font-medium">contractors</div>
            </div>
            <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">4.5</div>
              <div className="text-gray-700 font-medium">
                avg. app store rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.1),transparent_50%)]" />

        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium mb-6">
              Industry Solutions
            </span>
            <h2 className="text-5xl font-bold mb-6 text-gray-900">
              Powering Every{" "}
              <span className="relative">
                Trade
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-orange-200/50 -z-10"></span>
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Specialized tools and features for every type of contractor
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(INDUSTRY_CATEGORIES).map(
              ([category, industries]) => (
                <div key={category}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    {category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry) => {
                      const slug = industry
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-");

                      return (
                        <Link
                          key={industry}
                          href={`/industries/${slug}`}
                          className="group relative block"
                        >
                          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                          <div className="relative bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500">
                            <div className="flex items-start gap-6">
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-500">
                                  <CheckCircle className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-500" />
                                </div>
                              </div>
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                                  {industry}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  Streamlined solutions for{" "}
                                  {industry.toLowerCase()} professionals
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features & CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Win More Jobs. Save Time. Get Paid Faster.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Tulboxx empowers contractors to estimate, invoice, collect payments,
            and manage projects with ease—anywhere, anytime.
          </p>
          <Link
            href="#getstarted"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Try It Free Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default IndustriesPage;
