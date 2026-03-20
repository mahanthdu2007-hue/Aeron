"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun S.",
    handle: "@arjun.wears",
    text: "The quality is insane. The oversized tee feels premium and the fit is perfect. 10/10 would cop again.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    name: "Priya M.",
    handle: "@priyalooks",
    text: "Finally a brand that gets Indian streetwear. The delivery was super fast and the packaging was chef's kiss!",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=23",
  },
  {
    name: "Dhruv K.",
    handle: "@dhruvstyled",
    text: "Been wearing AERON for 6 months now. Everything holds up insanely well, even after multiple washes.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=8",
  },
  {
    name: "Ananya R.",
    handle: "@ananya.ootd",
    text: "The hoodie from the winter drop is my most worn piece ever. It's that good. Worth every rupee.",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=47",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#111111] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-gray-400 mb-3">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">Loved by the Community</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 transition-colors"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-5">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.handle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
