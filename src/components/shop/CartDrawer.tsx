"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag, Trash2, Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, totalPrice } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 z-[200] backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[201] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <h2 className="font-semibold text-lg tracking-wide">Your Cart</h2>
                {items.length > 0 && (
                  <span className="bg-[#111] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="p-2 hover:rotate-90 transition-transform duration-200">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400">
                  <ShoppingBag size={48} strokeWidth={1} />
                  <p className="text-sm">Your cart is empty</p>
                  <button
                    onClick={closeCart}
                    className="text-sm text-[#111] font-medium underline underline-offset-4"
                  >
                    Continue shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                    <div className="relative w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.name}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{item.size} / {item.color}</p>
                      <p className="font-semibold text-sm mt-1">₹{item.price.toLocaleString()}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <button
                            onClick={() => item.quantity <= 1 ? removeItem(item.id, item.size, item.color) : updateQuantity(item.id, item.size, item.color, item.quantity - 1)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="px-3 text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}
                            className="p-1.5 hover:bg-gray-100 rounded-lg"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id, item.size, item.color)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t px-6 py-5 space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{totalPrice().toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-400 text-center">Shipping & taxes calculated at checkout</p>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="block w-full bg-[#111] text-white text-center py-4 text-sm font-semibold tracking-wider uppercase hover:bg-black transition-colors"
                >
                  Proceed to Checkout
                </Link>
                <button
                  onClick={closeCart}
                  className="block w-full text-center text-sm text-gray-500 hover:text-[#111] transition-colors"
                >
                  Continue Shopping
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
