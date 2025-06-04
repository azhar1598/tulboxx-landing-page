"use client";
import { SECTION_HEADER_DESCRIPTIONS } from "@/app/constants";
import { usePathname } from "next/navigation";
import React from "react";

function SectionHeader() {
  const pathname = usePathname();

  // Don't show section header for home, industries, and individual blog posts
  if (
    pathname === "/" ||
    pathname === "/industries" ||
    pathname.startsWith("/blogs/")
  )
    return null;

  const { title, description } = SECTION_HEADER_DESCRIPTIONS[
    pathname.replace("/", "") as keyof typeof SECTION_HEADER_DESCRIPTIONS
  ] || { title: "", description: "" };

  return (
    <section className="relative overflow-hidden py-20 mb-12">
      <div className="absolute inset-0 bg-[#1a2434]"></div>
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/5 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob"></div>
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-white/5 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/5 rounded-full mix-blend-overlay filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
}

export default SectionHeader;
