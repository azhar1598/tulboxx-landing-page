import React from "react";
import { TrendingUp, Users, Star } from "lucide-react";

function Stats() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600"></div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 h-32 w-96 bg-white opacity-5 rounded-br-full"></div>
      <div className="absolute bottom-0 right-0 h-48 w-72 bg-white opacity-5 rounded-tl-full"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-orange-400 opacity-20 blur-3xl"></div>

      {/* Content container */}
      <div className="container relative mx-auto px-4">
        {/* Headline */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white opacity-80">
            Trusted by thousands of contractors nationwide 🇺🇸
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Stat 1 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white opacity-5 transition-transform group-hover:scale-110"></div>

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 bg-opacity-20">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>

            <p className="mb-1 text-5xl font-bold text-white">$125M+</p>
            <p className="text-lg text-white text-opacity-80">
              Processed Monthly
            </p>

            <div className="mt-4 h-1.5 w-16 rounded-full bg-white bg-opacity-30"></div>
          </div>

          {/* Stat 2 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white opacity-5 transition-transform group-hover:scale-110"></div>

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 bg-opacity-20">
              <Users className="h-6 w-6 text-white" />
            </div>

            <p className="mb-1 text-5xl font-bold text-white">20K+</p>
            <p className="text-lg text-white text-opacity-80">Active Users</p>

            <div className="mt-4 h-1.5 w-16 rounded-full bg-white bg-opacity-30"></div>
          </div>

          {/* Stat 3 */}
          <div className="group relative overflow-hidden rounded-2xl bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white opacity-5 transition-transform group-hover:scale-110"></div>

            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400 bg-opacity-20">
              <Star className="h-6 w-6 text-white" />
            </div>

            <div className="flex items-baseline">
              <p className="mb-1 text-5xl font-bold text-white">4.8</p>
              <p className="ml-2 text-xl text-white text-opacity-80">/5</p>
            </div>
            <div className="mb-2 flex text-amber-300">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star
                className="h-4 w-4 fill-current stroke-amber-300"
                fill="none"
              />
            </div>
            <p className="text-lg text-white text-opacity-80">
              App Store Rating
            </p>

            <div className="mt-4 h-1.5 w-16 rounded-full bg-white bg-opacity-30"></div>
          </div>
        </div>

        {/* Optional testimonial quote */}
        <div className="mt-12 mx-auto max-w-3xl text-center">
          <p className="text-lg italic text-white text-opacity-90">
            "This app saved us countless hours and helped us grow our business
            by 35% in just one year."
          </p>
          <p className="mt-3 text-sm font-medium text-white text-opacity-70">
            — Michael Johnson, MJ Construction
          </p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
