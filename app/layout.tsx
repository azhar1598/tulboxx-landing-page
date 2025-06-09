import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import SectionHeader from "./components/common/SectionHeader";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "./utils/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tulboxx - Smart Software for Contractors",
  description:
    "Streamline your contracting business with Tulboxx. Estimate, invoice, collect payments, and manage projects from anywhere, anytime. Trusted by 10,000+ contractors.",
  keywords:
    "contractor software, construction management, project management, invoicing software, contractor tools, business management",
  authors: [{ name: "Tulboxx" }],
  creator: "Tulboxx",
  publisher: "Tulboxx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tulboxx.com"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tulboxx - Smart Software for Contractors",
    description:
      "Streamline your contracting business with Tulboxx. Estimate, invoice, collect payments, and manage projects from anywhere, anytime.",
    url: "https://tulboxx.com", // Replace with your actual domain
    siteName: "Tulboxx",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Tulboxx - Smart Software for Contractors",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulboxx - Smart Software for Contractors",
    description:
      "Streamline your contracting business with Tulboxx. Estimate, invoice, collect payments, and manage projects from anywhere, anytime.",
    images: ["/twitter-image.jpg"], // Add your Twitter image
    creator: "@tulboxx", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your Google verification code
    yandex: "your-yandex-verification-code", // Add your Yandex verification code if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <SectionHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
