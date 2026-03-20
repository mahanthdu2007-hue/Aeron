"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ProductCard from "@/components/shop/ProductCard";

// Mock featured products — will be replaced by real DB data
const featured = [
  {
    id: "1",
    name: "Void Oversized Tee",
    price: 1199,
    originalPrice: 1499,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop",
    category: "Tops",
    isNew: true,
  },
  {
    id: "2",
    name: "Dark Matter Hoodie",
    price: 2799,
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&auto=format&fit=crop",
    category: "Hoodies",
    isNew: true,
  },
  {
    id: "3",
    name: "Parallel Cargo Pants",
    price: 2499,
    originalPrice: 2999,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop",
    category: "Bottoms",
  },
  {
    id: "4",
    name: "Mono Graphic Tee",
    price: 1099,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop",
    category: "Tops",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3">Just Dropped</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Featured</h2>
        </div>
        <Link href="/shop" className="text-sm font-semibold underline underline-offset-4 hover:opacity-60 transition-opacity hidden md:block">
          View All
        </Link>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {featured.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <div className="mt-8 text-center md:hidden">
        <Link href="/shop" className="text-sm font-semibold underline underline-offset-4">
          View All Products
        </Link>
      </div>
    </section>
  );
}
