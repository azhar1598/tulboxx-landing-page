import React, { useState, useEffect } from "react";
import {
  FileText,
  Calendar,
  Smartphone,
  Wrench,
  CreditCard,
  BarChart3,
  ChevronRight,
  ArrowRight,
  Check,
} from "lucide-react";

function Features() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      observer.observe(featuresSection);
    }

    return () => {
      if (featuresSection) {
        observer.unobserve(featuresSection);
      }
    };
  }, []);

  // Auto-rotate features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Invoicing & Estimates",
      description:
        "Create professional invoices and estimates in seconds. Send them directly to clients via email or text.",
      color: "from-amber-500 to-orange-500",
      lightColor: "bg-orange-50",
      bullets: [
        "Custom branding and templates",
        "Automated payment reminders",
        "Digital signature capture",
        "Instant delivery to clients",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Scheduling & Dispatch",
      description:
        "Efficiently schedule jobs and dispatch team members. Avoid scheduling conflicts with our smart calendar.",
      color: "from-blue-500 to-indigo-500",
      lightColor: "bg-blue-50",
      bullets: [
        "Drag-and-drop scheduling",
        "Team availability tracking",
        "Automatic conflict detection",
        "Real-time job status updates",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App",
      description:
        "Run your business from anywhere with our powerful mobile app. Access all features on the go.",
      color: "from-green-500 to-emerald-500",
      lightColor: "bg-green-50",
      bullets: [
        "Full feature parity with desktop",
        "Offline mode capabilities",
        "GPS tracking and routing",
        "Push notifications",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Job Management",
      description:
        "Track job progress, manage materials and labor, and keep clients updated throughout the project.",
      color: "from-purple-500 to-violet-500",
      lightColor: "bg-purple-50",
      bullets: [
        "Real-time progress tracking",
        "Material and labor tracking",
        "Client portal access",
        "Photo and document storage",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Processing",
      description:
        "Accept credit cards, ACH, and other payment methods directly through the app. Get paid faster.",
      color: "from-rose-500 to-pink-500",
      lightColor: "bg-rose-50",
      bullets: [
        "Multiple payment methods",
        "Recurring billing options",
        "Low transaction fees",
        "Instant payment confirmation",
      ],
      image: "/api/placeholder/600/400",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Reports & Analytics",
      description:
        "Gain insights into your business performance with detailed reports and analytics dashboards.",
      color: "from-cyan-500 to-teal-500",
      lightColor: "bg-cyan-50",
      bullets: [
        "Custom report builder",
        "Visual data dashboards",
        "Performance trend analysis",
        "Exportable to CSV/PDF",
      ],
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <section
      id="features-section"
      className="relative overflow-hidden py-32 bg-gradient-to-b from-white to-gray-50"
    >
      {/* Modern mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-orange-100/40 via-purple-100/40 to-blue-100/40"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-full bg-gradient-to-bl from-orange-100/40 via-transparent to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full bg-gradient-to-br from-transparent via-blue-100/40 to-transparent"></div>
      </div>

      {/* Floating 3D shapes */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-orange-300/20 rounded-xl backdrop-blur-sm border border-white/20 shadow-xl transform rotate-12 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-300/20 rounded-full backdrop-blur-sm border border-white/20 shadow-xl animate-float"></div>
      <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-green-200/20 to-emerald-300/20 rounded-lg backdrop-blur-sm border border-white/20 shadow-xl transform -rotate-12 animate-float-medium"></div>

      <div
        className={`container mx-auto px-4 relative ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        {/* Modern section header with animated underline */}
        <div className="relative mb-20 text-center max-w-3xl mx-auto">
          <span className="block text-sm font-semibold text-orange-500 mb-2 tracking-widest uppercase">
            Built for contractors
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="relative inline-block">
              Powerful Features
              <span className="absolute -bottom-2 left-0 h-2 w-full bg-gradient-to-r from-orange-400 to-orange-500 transform origin-left animate-expand"></span>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to run your contracting business efficiently and
            professionally, all in one platform.
          </p>
        </div>

        {/* Tab interface for feature selection */}
        <div className="relative mb-16 overflow-x-auto hide-scrollbar">
          <div className="flex justify-center space-x-2 md:space-x-4 min-w-max mx-auto pb-2">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative px-4 py-3 rounded-xl transition-all duration-300 whitespace-nowrap
                  ${
                    activeTab === index
                      ? "bg-gradient-to-br shadow-lg text-gray-900 scale-105 font-medium"
                      : "bg-white/80 text-gray-600 hover:bg-white hover:shadow"
                  }
                `}
                style={{
                  background:
                    activeTab === index
                      ? `linear-gradient(to bottom right, var(--tw-gradient-stops))`
                      : "",
                  //   "--tw-gradient-from":
                  //     activeTab === index
                  //       ? features[index].color.split(" ")[0]
                  //       : "",
                  //   "--tw-gradient-to":
                  //     activeTab === index
                  //       ? features[index].color.split(" ")[1]
                  //       : "",
                }}
              >
                <div className="flex items-center space-x-2">
                  <div
                    className={`${
                      activeTab === index ? "text-gray-900" : "opacity-80"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <span>{feature.title}</span>
                </div>

                {/* Active indicator dot */}
                {activeTab === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Feature showcase - modern split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature content */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-2xl opacity-70"></div>

              <div
                className={`relative p-1 rounded-2xl bg-gradient-to-br ${features[activeTab].color} shadow-lg`}
              >
                <div className="bg-white rounded-xl p-8">
                  <div
                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${features[activeTab].color} text-white shadow-lg`}
                  >
                    {features[activeTab].icon}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900">
                    {features[activeTab].title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-8">
                    {features[activeTab].description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {features[activeTab].bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start">
                        <div
                          className={`flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-br ${features[activeTab].color} flex items-center justify-center mr-3 mt-0.5`}
                        >
                          <Check className="h-3.5 w-3.5 text-white" />
                        </div>
                        <p className="text-gray-700">{bullet}</p>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`#${features[activeTab].title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="inline-flex items-center px-5 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-900 font-medium transition-all group"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Feature visual/image */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative elements */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full blur-3xl opacity-70"></div>

            <div className="relative">
              {/* Decorative "browser" frame */}
              <div className="relative p-3 bg-white rounded-2xl shadow-2xl backdrop-blur-xl border border-gray-100">
                {/* Browser dots */}
                <div className="flex space-x-2 mb-4 px-2">
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                </div>

                {/* Feature image */}
                <div className="relative rounded-lg overflow-hidden aspect-[4/3] bg-gray-100">
                  <img
                    src={features[activeTab].image}
                    alt={features[activeTab].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />

                  {/* Overlay with gradient that matches feature color */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${features[activeTab].color} opacity-10`}
                  ></div>

                  {/* Floating UI elements for visual interest */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg flex items-center">
                    <div
                      className={`w-3 h-3 rounded-full bg-gradient-to-br ${features[activeTab].color} mr-2`}
                    ></div>
                    <span className="text-sm font-medium">
                      {features[activeTab].title}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative floating elements */}
              <div
                className={`absolute -top-4 -right-4 p-4 ${features[activeTab].lightColor} rounded-lg shadow-lg transform rotate-6`}
              >
                <div
                  className={`h-8 w-8 rounded-full bg-gradient-to-br ${features[activeTab].color} text-white flex items-center justify-center`}
                >
                  {features[activeTab].icon}
                </div>
              </div>

              <div
                className={`absolute -bottom-4 -left-4 p-2 bg-white rounded-lg shadow-lg transform -rotate-6`}
              >
                <div className="h-6 w-24 bg-gray-200 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Modern CTA Section */}
        <div className="relative mt-32 mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl blur-xl"></div>
          <div className="relative overflow-hidden rounded-2xl bg-white p-1 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 opacity-10"></div>

            {/* CTA content */}
            <div className="relative bg-white/90 backdrop-blur-sm rounded-xl p-10 z-10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">
                    Ready to streamline your business?
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Join thousands of contractors saving time and growing their
                    business.
                  </p>
                </div>

                <div className="flex-shrink-0">
                  <a
                    href="#getstarted"
                    className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-4 font-medium text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <span className="relative z-10 flex items-center">
                      Get started today
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 z-0 opacity-0 bg-gradient-to-br from-orange-600 to-orange-700 transition-opacity group-hover:opacity-100"></div>
                  </a>
                </div>
              </div>

              {/* Trust markers */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <div className="flex items-center">
                    <div className="mr-2 h-5 w-5 text-green-500">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-gray-600">
                      No credit card required
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-5 w-5 text-green-500">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-gray-600">
                      14-day free trial
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-2 h-5 w-5 text-green-500">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-gray-600">
                      Cancel anytime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float 7s ease-in-out infinite;
        }

        .animate-expand {
          animation: expand 0.8s ease forwards;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes expand {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}

export default Features;
