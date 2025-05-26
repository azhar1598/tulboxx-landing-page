import React, { useState, useEffect } from "react";
import {
  FileText,
  Calendar,
  Smartphone,
  Wrench,
  CreditCard,
  BarChart3,
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
      color: "bg-orange-500",
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
      color: "bg-blue-500",
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
      color: "bg-green-500",
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
      color: "bg-purple-500",
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
      color: "bg-rose-500",
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
      color: "bg-cyan-500",
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
    <section id="features-section" className="py-24 bg-white">
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
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`${
                  activeTab === index
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } cursor-pointer px-6 py-2.5 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg`}
              >
                <div className="flex items-center space-x-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <div
                className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#1c2838] text-white`}
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
                      className={`flex-shrink-0 h-6 w-6 rounded-full bg-[#1c2838] flex items-center justify-center mr-3 mt-0.5`}
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
                className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-900 font-medium transition-colors"
              >
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                // src={features[activeTab].image}
                src="/assets/images/hero-desktop.png"
                alt={features[activeTab].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
