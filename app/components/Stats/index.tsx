import React, { useEffect, useRef } from "react";
import { TrendingUp, Users, Star, ArrowRight } from "lucide-react";

function Stats() {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const statElements = document.querySelectorAll(".stat-card");
    statElements.forEach((el) => observer.observe(el));

    return () => {
      statElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={statsRef} className="relative overflow-hidden py-20 lg:py-28">
      {/* Animated background with improved gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700"></div>

      {/* Enhanced geometric decorative elements */}
      <div className="absolute top-0 left-0 h-64 w-96 bg-white/5 rounded-br-full transform -translate-x-20 translate-y-10"></div>
      <div className="absolute bottom-0 right-0 h-72 w-96 bg-white/5 rounded-tl-full transform translate-x-20 -translate-y-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-orange-400 opacity-20 blur-3xl"></div>

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

      {/* Content container */}
      <div className="container relative mx-auto px-4">
        {/* Enhanced headline with badge */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 mb-4 backdrop-blur-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <p className="text-sm font-medium tracking-wide text-white">
              LIVE DATA
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Trusted by thousands of contractors nationwide
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            Join the growing community of professionals who are streamlining
            their operations with our platform.
          </p>
        </div>

        {/* Improved Stats grid with animation classes */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
          {/* Stat 1 - Enhanced with animations */}
          <div className="stat-card opacity-0 translate-y-8 transition-all duration-700 ease-out group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/15 border border-white/10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-white/5 transition-transform group-hover:scale-110"></div>

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg group-hover:scale-110 transition-transform">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>

            <p className="mb-1 text-5xl font-bold text-white">$125M+</p>
            <p className="text-lg text-white/80">Processed Monthly</p>

            <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-white/40 to-white/10"></div>
          </div>

          {/* Stat 2 - Enhanced with animations */}
          <div className="stat-card opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/15 border border-white/10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-white/5 transition-transform group-hover:scale-110"></div>

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6 text-white" />
            </div>

            <p className="mb-1 text-5xl font-bold text-white">20K+</p>
            <p className="text-lg text-white/80">Active Users</p>

            <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-white/40 to-white/10"></div>
          </div>

          {/* Stat 3 - Enhanced with animations */}
          <div className="stat-card opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-md shadow-xl hover:shadow-2xl hover:bg-white/15 border border-white/10">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-white/5 transition-transform group-hover:scale-110"></div>

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg group-hover:scale-110 transition-transform">
              <Star className="h-6 w-6 text-white" />
            </div>

            <div className="flex items-baseline">
              <p className="mb-1 text-5xl font-bold text-white">4.8</p>
              <p className="ml-2 text-xl text-white/80">/5</p>
            </div>
            <div className="mb-2 flex text-amber-300">
              {[1, 2, 3, 4].map((_, index) => (
                <Star key={index} className="h-5 w-5 fill-current" />
              ))}
              <Star
                className="h-5 w-5 fill-current stroke-amber-300"
                fill="none"
              />
            </div>
            <p className="text-lg text-white/80">App Store Rating</p>

            <div className="mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-white/40 to-white/10"></div>
          </div>
        </div>

        {/* Enhanced testimonial quote with design elements */}
        <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 shadow-xl mx-auto max-w-4xl">
          <div className="absolute -top-4 -left-4 text-6xl text-white/20">
            "
          </div>
          <div className="absolute -bottom-4 -right-4 text-6xl text-white/20">
            "
          </div>

          <p className="text-xl md:text-2xl italic text-white/90 text-center relative z-10">
            This app saved us countless hours and helped us grow our business by
            35% in just one year.
          </p>

          <div className="mt-8 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 p-0.5 mb-3">
              <div className="h-full w-full rounded-full bg-orange-500"></div>
            </div>
            <p className="font-semibold text-white">Michael Johnson</p>
            <p className="text-sm text-white/70">MJ Construction</p>
          </div>
        </div>

        {/* New CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="#demo"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 font-medium text-orange-600 shadow-lg hover:shadow-xl transition-all hover:bg-gray-50 group"
          >
            <span>See how it works</span>
            <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Modern decorative elements */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <div className="h-1.5 w-16 rounded-full bg-white/30"></div>
          <div className="h-1.5 w-4 rounded-full bg-white/70"></div>
          <div className="h-1.5 w-4 rounded-full bg-white/30"></div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}

export default Stats;
