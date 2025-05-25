import React from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, DollarSign, Users } from "lucide-react";
import { TRADE_CONTENT } from "@/app/constants";

// Define the content structure for each trade

export default function TradePage({ params }: { params: { slug: string } }) {
  const trade = TRADE_CONTENT[params?.slug as keyof typeof TRADE_CONTENT];

  if (!trade) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Trade Not Found
          </h1>
          <Link
            href="/industries"
            className="text-orange-500 hover:text-orange-600"
          >
            Return to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50/30">
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8">
        <Link
          href="/industries"
          className="inline-flex items-center text-gray-600 hover:text-orange-500"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Industries
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {trade.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{trade.description}</p>
            <Link
              href="#getstarted"
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              {trade.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Everything You Need to Succeed
            </h2>
            <div className="grid gap-6">
              {trade.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Tulboxx
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {trade.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <benefit.icon className="w-12 h-12 text-orange-500 mb-6" />
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of {trade.title.toLowerCase()} who trust Tulboxx
            </p>
            <Link
              href="#getstarted"
              className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
