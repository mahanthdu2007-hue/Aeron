"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#111111]">
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1400&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#111111]" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="text-xs font-semibold tracking-[0.4em] uppercase text-gray-300 mb-6"
          >
            New Season Drop — 2026
          </motion.p>
          <motion.h1
            variants={item}
            className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-8"
          >
            WEAR YOUR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
              STORY
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-10 leading-relaxed"
          >
            Premium streetwear crafted for those who move against the current.
            Zero compromises. Pure identity.
          </motion.p>
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 bg-white text-[#111] px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-100 transition-all duration-200"
            >
              Shop Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 border border-white/40 text-white px-8 py-4 text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all duration-200"
            >
              View Collections
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <div className="w-px h-12 bg-white/40 mx-auto" />
      </motion.div>
    </section>
  );
}
