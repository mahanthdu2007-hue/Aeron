"use client";

import { useWishlistStore } from "@/store/wishlist";
import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WishlistPage() {
  const { items, removeItem } = useWishlistStore();

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12 border-b border-gray-200 pb-8">
            <Heart size={32} className="text-[#111]" />
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
              Your Wishlist
            </h1>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
              <Heart size={48} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-8 max-w-sm mx-auto">
                Save your favorite items here while you decide. They&apos;ll be waiting for you.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#111] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Explore Products <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 flex flex-col items-center justify-center min-h-[250px] shadow-sm relative group text-center">
                  <p className="font-semibold text-lg mb-2">{item.name}</p>
                  <p className="text-gray-500 mb-4">${item.price}</p>
                  <Link
                    href={`/shop/${item.id}`}
                    className="text-[#111] underline text-sm font-medium hover:text-gray-600 transition-colors"
                  >
                    View Item
                  </Link>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-4 right-4 text-xs font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    REMOVE
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
