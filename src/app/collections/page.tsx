"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: "core-essentials",
    title: "Core Essentials",
    description: "The foundation of any modern wardrobe. Minimalist, premium, everyday wear.",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=1200&auto=format&fit=crop",
    link: "/shop?category=Tops",
  },
  {
    id: "dark-matter",
    title: "Dark Matter Drop",
    description: "Embrace the void. Techwear-inspired silhouettes in monochromatic tones.",
    image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=1200&auto=format&fit=crop",
    link: "/shop?category=Hoodies",
  },
  {
    id: "summer-capsule",
    title: "Summer 024 Capsule",
    description: "Lightweight fabrics, breathable dimensions, and bold graphic tees.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&auto=format&fit=crop",
    link: "/shop?category=Top",
  },
];

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-black uppercase tracking-tight"
            >
              Curated <br />
              Collections
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-xl text-gray-500 max-w-2xl"
            >
              Discover our latest drops, seasonal capsules, and permanent core collections designed for the modern uniform.
            </motion.p>
          </div>

          {/* Collections Grid */}
          <div className="space-y-16 lg:space-y-24">
            {collections.map((collection, index) => (
              <motion.div 
                key={collection.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}
              >
                {/* Image Section */}
                <Link href={collection.link} className="w-full lg:w-3/5 overflow-hidden rounded-2xl group block relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-[500px] md:h-[600px] object-cover"
                  />
                </Link>

                {/* Text Section */}
                <div className="w-full lg:w-2/5 flex flex-col justify-center">
                  <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase mb-4">
                    Collection {index + 1}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                    {collection.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <Link 
                    href={collection.link} 
                    className="group flex items-center gap-4 text-sm font-semibold uppercase tracking-widest"
                  >
                    <span className="relative overflow-hidden">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                        Explore Collection
                      </span>
                      <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                        Explore Collection
                      </span>
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center transition-colors group-hover:border-[#111] group-hover:bg-[#111] group-hover:text-white">
                      <ArrowRight size={16} />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
