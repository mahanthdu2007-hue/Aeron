"use client";

import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Search Store</h1>
          <div className="relative max-w-xl mx-auto mb-16">
            <input
              type="text"
              placeholder="Search products, categories..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-lg border-b-2 border-gray-200 focus:border-[#111] px-4 py-4 pr-12 outline-none transition-colors bg-transparent"
              autoFocus
            />
            <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={24} />
          </div>
          
          <div className="text-gray-500">
            {query.length > 2 ? (
              <p>Searching for "{query}"... (Demo mode: no results found)</p>
            ) : (
              <p>Type at least 3 characters to search.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
