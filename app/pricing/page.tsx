"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";

function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = {
    starter: {
      monthly: 29,
      annual: 290, // 2 months free
    },
    pro: {
      monthly: 79,
      annual: 790, // 2 months free
    },
  };

  return (
    <div className="bg-gradient-to-b from-white to-orange-50/30 min-h-screen py-20">
      {/* Billing Toggle */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 mb-16">
          <span
            className={`text-lg ${
              !isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            style={{ backgroundColor: isAnnual ? "#f97316" : "#e5e7eb" }}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span
              className={`text-lg ${
                isAnnual ? "text-gray-900 font-semibold" : "text-gray-500"
              }`}
            >
              Annual
            </span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Starter Plan */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter
                </h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? plans.starter.annual : plans.starter.monthly}
                  </span>
                  <span className="text-gray-500">
                    /{isAnnual ? "year" : "mo"}
                  </span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mt-2">
                    Save ${plans.starter.monthly * 12 - plans.starter.annual}
                    /year
                  </p>
                )}
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-600">Up to 5 projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-600">Basic analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-600">Email support</span>
                </li>
              </ul>
              <Link
                href="#getstarted"
                className="block w-full text-center bg-white border-2 border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="group relative bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              Most Popular
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <div className="flex items-center justify-center gap-1">
                <span className="text-5xl font-bold text-white">
                  ${isAnnual ? plans.pro.annual : plans.pro.monthly}
                </span>
                <span className="text-white/80">
                  /{isAnnual ? "year" : "mo"}
                </span>
              </div>
              {isAnnual && (
                <p className="text-sm text-white/90 mt-2">
                  Save ${plans.pro.monthly * 12 - plans.pro.annual}/year
                </p>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/90">Unlimited projects</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/90">Advanced analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/90">Priority support</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/90">Custom integrations</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white/90">Team collaboration</span>
              </li>
            </ul>
            <Link
              href="#getstarted"
              className="block w-full text-center bg-white text-orange-500 font-semibold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Enterprise Plan */}
          <div className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Enterprise
                </h3>
                <div className="flex items-center justify-center gap-1">
                  <span className="text-5xl font-bold text-gray-900">
                    Custom
                  </span>
                </div>
                <p className="text-gray-500 mt-2">Contact us for pricing</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-600">
                    Dedicated account manager
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-600">Custom solutions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-600">SLA guarantees</span>
                </li>
              </ul>
              <Link
                href="#contact"
                className="block w-full text-center bg-white border-2 border-orange-500 text-orange-500 font-semibold px-6 py-3 rounded-xl hover:bg-orange-500 hover:text-white transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
