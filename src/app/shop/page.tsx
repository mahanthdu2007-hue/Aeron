"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/shop/CartDrawer";
import ProductCard from "@/components/shop/ProductCard";

const allProducts = [
  { id: "1", name: "Void Oversized Tee", price: 1199, originalPrice: 1499, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop", category: "Tops", isNew: true, color: "Black" },
  { id: "2", name: "Dark Matter Hoodie", price: 2799, image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=600&auto=format&fit=crop", category: "Hoodies", isNew: true, color: "Black" },
  { id: "3", name: "Parallel Cargo Pants", price: 2499, originalPrice: 2999, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop", category: "Bottoms", color: "Beige" },
  { id: "4", name: "Mono Graphic Tee", price: 1099, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop", category: "Tops", color: "White" },
  { id: "5", name: "Structure Bomber", price: 3999, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop", category: "Jackets", isNew: true, color: "Black" },
  { id: "6", name: "Void Fleece Shorts", price: 999, image: "https://images.unsplash.com/photo-1565084888279-aca607bb0b2e?w=600&auto=format&fit=crop", category: "Bottoms", color: "Gray" },
  { id: "7", name: "Essential Crewneck", price: 1899, originalPrice: 2199, image: "https://images.unsplash.com/photo-1614975059251-992f11792b9f?w=600&auto=format&fit=crop", category: "Tops", color: "Beige" },
  { id: "8", name: "Stealth Joggers", price: 1799, image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=600&auto=format&fit=crop", category: "Bottoms", color: "Black" },
];

const categories = ["All", "Tops", "Hoodies", "Bottoms", "Jackets", "Accessories"];
const sortOptions = [
  { label: "Popular", value: "popular" },
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [maxPrice, setMaxPrice] = useState(5000);

  const filtered = useMemo(() => {
    let items = allProducts.filter((p) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
      if (p.price > maxPrice) return false;
      return true;
    });

    if (sortBy === "price-asc") items = [...items].sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") items = [...items].sort((a, b) => b.price - a.price);
    else if (sortBy === "newest") items = [...items].filter((p) => p.isNew).concat(items.filter((p) => !p.isNew));

    return items;
  }, [selectedCategory, sortBy, maxPrice]);

  return (
    <>
      <Navbar />
      <CartDrawer />
      <main className="pt-20 min-h-screen">
        {/* Header */}
        <div className="bg-[#F5F5F0] border-b border-gray-200 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Shop
            </motion.h1>
            <p className="text-gray-500 mt-2">{filtered.length} products</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            {/* Categories */}
            <div className="flex gap-2 flex-wrap flex-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#111] text-white border-[#111]"
                      : "bg-white text-[#111] border-gray-300 hover:border-[#111]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-xs font-semibold focus:outline-none focus:border-[#111] cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
              </div>

              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold border border-gray-300 rounded-lg hover:border-[#111] transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mb-8"
              >
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-sm">Filters</h3>
                    <button onClick={() => setFiltersOpen(false)}>
                      <X size={16} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2 block">
                        Max Price: ₹{maxPrice.toLocaleString()}
                      </label>
                      <input
                        type="range"
                        min={500}
                        max={5000}
                        step={100}
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        className="w-full accent-[#111] max-w-xs"
                      />
                      <div className="flex justify-between text-xs text-gray-400 max-w-xs mt-1">
                        <span>₹500</span>
                        <span>₹5,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Products Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg font-medium">No products found</p>
              <button onClick={() => { setSelectedCategory("All"); setMaxPrice(5000); }} className="mt-4 text-sm text-[#111] underline underline-offset-4">
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
