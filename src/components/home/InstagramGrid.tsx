"use client";

import { motion } from "framer-motion";

const instagramPosts = [
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&auto=format&fit=crop",
];

export default function InstagramGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3">Stay Connected</p>
          <h2 className="text-4xl font-black tracking-tight mb-2">@aeron.official</h2>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-500 hover:text-[#111] underline underline-offset-4 transition-colors"
          >
            Follow us on Instagram
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramPosts.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-200 block"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity">📸</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
