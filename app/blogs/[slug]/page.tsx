"use client";

import React, { useEffect, useState } from "react";
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

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Unwrap the params Promise:
  const { slug } = React.use(params);

  // In a real app, you would fetch the blog post data based on the slug
  // For now, we're using the sample data
  const [post, setPost] = useState<any>({});

  const getPost = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log("data", data);
    setPost(data);
  };

  useEffect(() => {
    getPost();
  }, [slug]);

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
                {post.category || "Uncategorized"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
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
            className="prose prose-lg max-w-none text-gray-900 leading-relaxed"
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

      {/* <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
