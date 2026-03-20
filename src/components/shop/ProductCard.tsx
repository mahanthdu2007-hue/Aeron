"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useWishlistStore } from "@/store/wishlist";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  category: string;
  isNew?: boolean;
}

export default function ProductCard({
  id, name, price, originalPrice, image, hoverImage, category, isNew,
}: ProductCardProps) {
  const { addItem, removeItem, hasItem } = useWishlistStore();
  const wishlisted = hasItem(id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    wishlisted ? removeItem(id) : addItem({ id, name, price, image });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/shop/${id}`} className="group block">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#F2F2EE] aspect-[3/4] rounded-xl">
          <Image
            src={image}
            alt={name}
            fill
            className={`object-cover transition-opacity duration-500 ${
              hoverImage ? "group-hover:opacity-0" : ""
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {hoverImage && (
            <Image
              src={hoverImage}
              alt={name}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isNew && (
              <span className="bg-[#111] text-white text-[10px] font-semibold px-2 py-1 tracking-wider rounded-md">
                NEW
              </span>
            )}
            {originalPrice && originalPrice > price && (
              <span className="bg-red-500 text-white text-[10px] font-semibold px-2 py-1 tracking-wider rounded-md">
                {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={toggleWishlist}
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
          >
            <Heart
              size={16}
              className={wishlisted ? "fill-red-500 stroke-red-500" : "stroke-gray-700"}
            />
          </button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-full bg-[#111] text-white py-3 text-xs font-semibold tracking-widest uppercase hover:bg-stone-800 transition-colors">
              Quick Add
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="mt-3 space-y-1">
          <p className="text-[11px] text-gray-400 font-medium tracking-wider uppercase">{category}</p>
          <h3 className="text-sm font-semibold text-[#111] group-hover:text-gray-600 transition-colors line-clamp-2">
            {name}
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-[#111]">₹{price.toLocaleString()}</span>
            {originalPrice && originalPrice > price && (
              <span className="text-sm text-gray-400 line-through">₹{originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
