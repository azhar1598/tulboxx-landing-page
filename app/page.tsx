// pages/index.js
"use client";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
// import { HiMenu, HiX } from "react-icons/hi";
import {
  FaFileInvoiceDollar,
  FaCalendarCheck,
  FaMobileAlt,
  FaTools,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import BuiltInIndustries from "./components/BuiltInIndustries";
import SubscribeLetter from "./components/common/SubscribeLetter";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Head>
        <title>Tulboxx - Smart Software for Contractors</title>
        <meta
          name="description"
          content="Estimate, invoice, collect payments, and manage projects from anywhere, at anytime."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <Stats />
        <Features />
        <BuiltInIndustries />
        <SubscribeLetter />
      </main>
    </div>
  );
}
