"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, Heart, ChevronLeft, ChevronRight, Truck, RotateCcw, Shield, Star } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/shop/CartDrawer";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";

// Static mock data — in production, fetch from API/DB using params.id
const product = {
  id: "1",
  name: "Void Oversized Tee",
  price: 1199,
  originalPrice: 1499,
  description: `Forget everything you know about basics. The Void Tee is crafted from 240GSM 100% combed cotton — heavy enough to drape perfectly, light enough to wear all day. Slightly boxy silhouette, dropped shoulders, and a clean chest print that says enough without screaming.`,
  images: [
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop",
  ],
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  colors: ["Black", "White", "Stone"],
  category: "Tops",
  rating: 4.8,
  reviewCount: 127,
};

const reviews = [
  { name: "Rahul V.", rating: 5, text: "Insane quality. The fit is chef's kiss.", date: "March 2026" },
  { name: "Meena K.", rating: 5, text: "Ordered black and white. Both are perfect.", date: "Feb 2026" },
  { name: "Aarav S.", rating: 4, text: "Love the oversized fit. Wash holds up great.", date: "Feb 2026" },
];

export default function ProductPage() {
  const [currentImg, setCurrentImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const { addItem, openCart } = useCartStore();
  const { addItem: addWish, removeItem: removeWish, hasItem } = useWishlistStore();
  const wishlisted = hasItem(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: qty,
    });
    setAdded(true);
    setTimeout(() => { setAdded(false); openCart(); }, 600);
  };

  return (
    <>
      <Navbar />
      <CartDrawer />
      <main className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#F2F2EE]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImg}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image src={product.images[currentImg]} alt={product.name} fill className="object-cover" />
                  </motion.div>
                </AnimatePresence>

                {/* Nav arrows */}
                <button
                  onClick={() => setCurrentImg((p) => (p - 1 + product.images.length) % product.images.length)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={() => setCurrentImg((p) => (p + 1) % product.images.length)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImg(i)}
                    className={`relative w-20 aspect-[3/4] rounded-lg overflow-hidden border-2 transition-all ${
                      i === currentImg ? "border-[#111]" : "border-transparent"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">{product.name}</h1>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? "fill-amber-400 stroke-amber-400" : "stroke-gray-300"} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{product.rating} ({product.reviewCount} reviews)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black">₹{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</span>
                    <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-md">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Color */}
              <div>
                <p className="text-sm font-semibold mb-3">Color: <span className="font-normal text-gray-600">{selectedColor}</span></p>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 text-xs font-semibold border rounded-lg transition-all ${
                        selectedColor === color ? "border-[#111] bg-[#111] text-white" : "border-gray-300 hover:border-[#111]"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold">Size: <span className="font-normal text-gray-600">{selectedSize || "Select"}</span></p>
                  <button className="text-xs text-gray-500 underline underline-offset-4 hover:text-[#111]">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 text-sm font-semibold border-2 rounded-lg transition-all ${
                        selectedSize === size ? "border-[#111] bg-[#111] text-white" : "border-gray-200 hover:border-[#111]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <p className="text-sm font-semibold">Qty:</p>
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <button onClick={() => setQty(q => Math.max(1, q - 1))} className="px-4 py-2 hover:bg-gray-100 rounded-l-lg text-lg font-medium">−</button>
                  <span className="px-5 py-2 text-sm font-semibold">{qty}</span>
                  <button onClick={() => setQty(q => q + 1)} className="px-4 py-2 hover:bg-gray-100 rounded-r-lg text-lg font-medium">+</button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3">
                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.97 }}
                  disabled={!selectedSize}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-bold tracking-widest uppercase transition-all ${
                    selectedSize
                      ? "bg-[#111] text-white hover:bg-stone-800"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag size={18} />
                  {added ? "Added! ✓" : "Add to Cart"}
                </motion.button>
                <button
                  onClick={() => wishlisted ? removeWish(product.id) : addWish({ id: product.id, name: product.name, price: product.price, image: product.images[0] })}
                  className="p-4 border-2 border-gray-200 rounded-none hover:border-[#111] transition-colors"
                >
                  <Heart size={20} className={wishlisted ? "fill-red-500 stroke-red-500" : ""} />
                </button>
              </div>

              {/* Size warning */}
              {!selectedSize && (
                <p className="text-xs text-red-500">Please select a size to continue</p>
              )}

              {/* Description */}
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-semibold text-sm mb-3">About This Product</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Delivery Info */}
              <div className="border border-gray-100 rounded-xl p-4 space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Truck size={16} className="text-gray-400 flex-shrink-0" />
                  <span><strong>Free delivery</strong> on orders above ₹1,499 · Ships in 2–4 days</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RotateCcw size={16} className="text-gray-400 flex-shrink-0" />
                  <span><strong>7-day returns</strong> · Easy hassle-free return process</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield size={16} className="text-gray-400 flex-shrink-0" />
                  <span><strong>Secure payment</strong> · Razorpay & COD available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-20">
            <h2 className="text-2xl font-black mb-8">Customer Reviews</h2>
            <div className="grid gap-5 md:grid-cols-3">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#F5F5F0] rounded-2xl p-6"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(r.rating)].map((_, j) => (
                      <Star key={j} size={14} className="fill-amber-400 stroke-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">&ldquo;{r.text}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-sm">{r.name}</span>
                    <span className="text-xs text-gray-400">{r.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
