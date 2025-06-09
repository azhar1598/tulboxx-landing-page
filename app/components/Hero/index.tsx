import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Star,
  FileText,
  Calculator,
  DollarSign,
  Calendar,
} from "lucide-react";
import { BsAndroid } from "react-icons/bs";
import { TfiAndroid } from "react-icons/tfi";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 lg:py-24">
      {/* Background Elements */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-orange-100 opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-blue-50 opacity-40 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="mb-6 inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
              <Star className="mr-1 h-4 w-4" />
              <span>Trusted by 10,000+ contractors</span>
            </div>

            <h1 className="font-display mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Work{" "}
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                smarter
              </span>
              ,
              <br />
              not harder
            </h1>

            <p className="mb-8 max-w-2xl text-lg text-gray-600">
              The all-in-one platform that streamlines your contracting
              business. Estimate, invoice, collect payments, and manage
              projects—all from one intuitive app.
            </p>

            {/* CTAs */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="https://tulboxx.vercel.app/"
                className="group flex items-center justify-center rounded-lg bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-lg shadow-orange-500/30 transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/40"
              >
                Start for free
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#demo"
                className="flex items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Watch demo
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-12">
              <p className="mb-4 text-sm font-medium text-gray-500">
                AVAILABLE ON
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center rounded-lg bg-black px-4 py-2 text-white transition-transform hover:-translate-y-1">
                  <svg
                    className="h-6 w-6 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
                  </svg>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </div>

                <div className="flex items-center rounded-lg bg-black px-4 py-2 text-white transition-transform hover:-translate-y-1">
                  <TfiAndroid className="h-6 w-6 mr-2" />
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Column */}
          <div className="relative lg:col-span-6">
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 z-10 rounded-lg bg-white p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <ChevronRight className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Invoice Generated
                  </p>
                  <p className="text-xs text-gray-500">
                    $2,400.00 • Invoice #1024
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-12 -left-6 z-10 rounded-lg bg-white p-4 shadow-xl sm:-left-12">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Calculator className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    New Estimation
                  </p>
                  <div className="flex gap-2 mt-1 text-blue-400">
                    <FileText className="h-4 w-4" />
                    <DollarSign className="h-4 w-4" />
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Main device mockup */}
            <div className="relative mx-auto max-w-md transform lg:scale-110 lg:translate-x-10">
              <div className="overflow-hidden rounded-2xl bg-gray-800 shadow-2xl">
                <div className="flex bg-gray-800 px-4 pt-3 pb-2">
                  <div className="mr-2 h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="mr-2 h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                {/* <img
                  src="/assets/images/hero-desktop.png"
                  alt="App dashboard interface showing estimates, invoices and project management"
                  className=" h-[400px] w-[800px]"
                /> */}

                <div className="bg-gray-200 h-[400px] w-[800px]" />
              </div>

              {/* Mobile mockup */}
              <div className="absolute -right-6 bottom-0 w-28 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg">
                <div className="bg-gray-800 p-1">
                  <div className="mx-auto h-1 w-6 rounded-full bg-gray-600"></div>
                </div>
                {/* <img
                  src="/assets/images/hero-mobile.png"
                  alt="Mobile app interface"
                  className="h-[180px] w-[220px]"
                /> */}
                <div className="bg-gray-200 h-[180px] w-[220px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
