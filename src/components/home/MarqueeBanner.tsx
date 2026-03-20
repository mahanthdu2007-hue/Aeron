"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "Free Shipping Above ₹1499",
  "Secure Payments",
  "Easy Returns within 7 Days",
  "COD Available",
  "Premium Quality",
  "Pan-India Delivery",
];

export default function MarqueeBanner() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="bg-[#111] text-white py-3 overflow-hidden">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {items.map((text, i) => (
          <span key={i} className="text-xs font-semibold tracking-widest uppercase inline-block">
            ✦ {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
