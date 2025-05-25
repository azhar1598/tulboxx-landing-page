import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

function Breadcrumb() {
  return (
    <nav className="container mx-auto px-4 py-6" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500">
        <li>
          <Link href="/" className="hover:text-orange-600 font-medium">
            Home
          </Link>
        </li>
        <li>
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </li>
        <li className="text-orange-600 font-semibold">About Us</li>
      </ol>
    </nav>
  );
}

export default Breadcrumb;
