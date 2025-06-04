import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
} from "lucide-react";

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
  readTime: string;
}

// Sample blog post data (in a real app, this would come from an API or CMS)
const blogPost: BlogPost = {
  id: "1",
  title: "5 Ways to Streamline Your Contracting Business",
  content: `
    <p class="mb-6 text-lg leading-relaxed">In today's fast-paced construction industry, efficiency is key to success. Contractors who can streamline their operations often see significant improvements in productivity, customer satisfaction, and bottom-line results. Here are five proven strategies to help you optimize your contracting business:</p>

    <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">1. Implement Digital Project Management</h2>
    <p class="mb-6 text-lg leading-relaxed">Gone are the days of paper-based project management. Modern contractors are leveraging digital tools to:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
      <li>Track project progress in real-time</li>
      <li>Manage team communication efficiently</li>
      <li>Store and access important documents securely</li>
      <li>Monitor resource allocation effectively</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">2. Automate Your Estimating Process</h2>
    <p class="mb-6 text-lg leading-relaxed">Accurate estimates are crucial for winning projects and maintaining profitability. Consider:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
      <li>Using digital takeoff software</li>
      <li>Creating standardized templates for common projects</li>
      <li>Implementing material cost databases</li>
      <li>Automating labor calculations</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">3. Optimize Your Supply Chain</h2>
    <p class="mb-6 text-lg leading-relaxed">A well-managed supply chain can significantly reduce costs and delays:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
      <li>Build relationships with reliable suppliers</li>
      <li>Implement inventory management systems</li>
      <li>Plan material orders in advance</li>
      <li>Consider bulk purchasing for common items</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">4. Enhance Client Communication</h2>
    <p class="mb-6 text-lg leading-relaxed">Clear communication builds trust and reduces misunderstandings:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
      <li>Use client portals for project updates</li>
      <li>Implement automated status notifications</li>
      <li>Schedule regular progress meetings</li>
      <li>Provide clear documentation and contracts</li>
    </ul>

    <h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">5. Invest in Team Training</h2>
    <p class="mb-6 text-lg leading-relaxed">Your team is your greatest asset. Regular training helps:</p>
    <ul class="list-disc pl-6 mb-6 space-y-2 text-lg">
      <li>Improve safety practices</li>
      <li>Enhance technical skills</li>
      <li>Boost productivity</li>
      <li>Reduce errors and rework</li>
    </ul>

    <p class="mb-6 text-lg leading-relaxed">By implementing these strategies, you can create a more efficient and profitable contracting business. Remember, the key to success is consistency and continuous improvement.</p>
  `,
  date: "March 15, 2024",
  author: "John Smith",
  category: "Business Tips",
  imageUrl:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  slug: "streamline-contracting-business",
  readTime: "8 min read",
};

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // In a real app, you would fetch the blog post data based on the slug
  // For now, we're using the sample data
  const post = blogPost;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50/30">
      {/* Hero Section with Image */}
      <div className="relative h-[60vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 z-10" />
        {/* <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        /> */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <span className="inline-block px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {post.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-6 text-gray-200">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div
            className="prose prose-lg max-w-none text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Share and Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-600 font-medium">
                  Share this article:
                </span>
                <div className="flex gap-3">
                  <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors bg-gray-100 rounded-full hover:bg-orange-50">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors bg-gray-100 rounded-full hover:bg-orange-50">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-orange-500 transition-colors bg-gray-100 rounded-full hover:bg-orange-50">
                    <Facebook className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <Link
                href="/blogs"
                className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all articles
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Add related articles here */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
