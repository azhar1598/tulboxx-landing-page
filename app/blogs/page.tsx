"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Define the blog post type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
  content: string;
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Ways to Streamline Your Contracting Business",
    excerpt:
      "Learn how to optimize your workflow and increase efficiency in your contracting business with these proven strategies.",
    date: "March 15, 2024",
    author: "John Smith",
    category: "Business Tips",
    imageUrl:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "streamline-contracting-business",
    content: "This is the content for the first blog post...",
  },
  {
    id: "2",
    title: "The Future of Construction Management Software",
    excerpt:
      "Discover how AI and automation are transforming the construction industry and what it means for your business.",
    date: "March 10, 2024",
    author: "Sarah Johnson",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "future-construction-management",
    content: "This is the content for the second blog post...",
  },
  {
    id: "3",
    title: "Essential Tools Every Contractor Needs in 2024",
    excerpt:
      "Stay ahead of the competition with these must-have tools and technologies for modern contractors.",
    date: "March 5, 2024",
    author: "Mike Wilson",
    category: "Tools & Equipment",
    imageUrl:
      "https://images.unsplash.com/photo-1581093458791-9d15482442f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    slug: "essential-contractor-tools-2024",
    content: "This is the content for the third blog post...",
  },
];

function getExcerpt(html: string, maxLength = 120): string {
  const text = html.replace(/<[^>]+>/g, "");
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  const getPosts = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log("data", data);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  console.log("posts", posts);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50/30">
      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    {/* <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                    /> */}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm font-medium text-orange-500">
                        {post.category}
                      </span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {getExcerpt(post.content, 120)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        By {post.author || "Admin"}
                      </span>
                      <span className="text-orange-500 font-medium group-hover:translate-x-1 transition-transform">
                        Read More →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest insights and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-lg hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
