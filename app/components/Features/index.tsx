import React from "react";
import {
  FileText,
  Calendar,
  Smartphone,
  Wrench,
  CreditCard,
  BarChart3,
  ChevronRight,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Invoicing & Estimates",
      description:
        "Create professional invoices and estimates in seconds. Send them directly to clients via email or text.",
      color: "from-amber-500 to-orange-500",
      lightColor: "bg-orange-50",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Scheduling & Dispatch",
      description:
        "Efficiently schedule jobs and dispatch team members. Avoid scheduling conflicts with our smart calendar.",
      color: "from-blue-500 to-indigo-500",
      lightColor: "bg-blue-50",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile App",
      description:
        "Run your business from anywhere with our powerful mobile app. Access all features on the go.",
      color: "from-green-500 to-emerald-500",
      lightColor: "bg-green-50",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Job Management",
      description:
        "Track job progress, manage materials and labor, and keep clients updated throughout the project.",
      color: "from-purple-500 to-violet-500",
      lightColor: "bg-purple-50",
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment Processing",
      description:
        "Accept credit cards, ACH, and other payment methods directly through the app. Get paid faster.",
      color: "from-rose-500 to-pink-500",
      lightColor: "bg-rose-50",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Reports & Analytics",
      description:
        "Gain insights into your business performance with detailed reports and analytics dashboards.",
      color: "from-cyan-500 to-teal-500",
      lightColor: "bg-cyan-50",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden py-24 bg-gray-50"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500"></div>
      <div className="absolute -top-64 -right-64 w-96 h-96 rounded-full bg-orange-100 opacity-60 blur-3xl"></div>
      <div className="absolute -bottom-64 -left-64 w-96 h-96 rounded-full bg-blue-100 opacity-60 blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="relative mb-20 text-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-gray-100 opacity-30">
            FEATURES
          </div>
          <h2 className="relative text-4xl font-bold mb-4 inline-block">
            <span className="relative z-10">Powerful Features</span>
            <div className="absolute -bottom-2 left-0 h-3 w-full bg-orange-200 opacity-60 rounded-full"></div>
          </h2>
          <p className="relative text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to run your contracting business efficiently and
            professionally, all in one place.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white p-1 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Gradient border */}
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ zIndex: 0 }}
              >
                <div className={`absolute inset-0.5 rounded-lg bg-white`}></div>
              </div>

              <div className="relative z-10 p-6 bg-white rounded-lg">
                {/* Icon with gradient background */}
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-orange-500 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 mb-6">{feature.description}</p>

                {/* Learn more link with animation */}
                <a
                  href={`#${feature.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-flex items-center text-sm font-medium text-orange-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>

              {/* Corner accent */}
              <div
                className={`absolute -top-10 -right-10 h-20 w-20 rounded-full ${feature.lightColor} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative mt-20 text-center">
          <div className="inline-block rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">
              Ready to streamline your contracting business?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of contractors who are saving time and growing
              their business with our all-in-one platform.
            </p>
            <a
              href="#getstarted"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 px-6 py-3 font-medium text-white shadow-lg transition-all hover:shadow-xl"
            >
              <span className="relative z-10 flex items-center">
                Get started today
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 z-0 opacity-0 bg-gradient-to-br from-amber-500 to-orange-600 transition-opacity group-hover:opacity-100"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
