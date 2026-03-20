"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Oversized",
    description: "Relaxed. Dominant.",
    href: "/shop?category=oversized",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
  {
    name: "Hoodies",
    description: "Essential comfort.",
    href: "/shop?category=hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&auto=format&fit=crop",
    span: "",
  },
  {
    name: "Bottoms",
    description: "Below-the-waist game.",
    href: "/shop?category=bottoms",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&auto=format&fit=crop",
    span: "",
  },
  {
    name: "Accessories",
    description: "Finishing moves.",
    href: "/shop?category=accessories",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&auto=format&fit=crop",
    span: "lg:col-span-2",
  },
];

export default function CollectionsGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3">Shop By Category</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Collections</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            className={cat.span}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Link href={cat.href} className="group relative aspect-square sm:aspect-[4/3] block overflow-hidden rounded-2xl bg-gray-100">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-xs text-gray-300 tracking-widest uppercase mb-1">{cat.description}</p>
                <h3 className="text-white text-2xl font-black tracking-tight group-hover:text-gray-200 transition-colors">
                  {cat.name}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
