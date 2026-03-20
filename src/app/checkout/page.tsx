"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Truck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useCartStore } from "@/store/cart";
import Image from "next/image";

const RAZORPAY_KEY = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [payMethod, setPayMethod] = useState<"razorpay" | "cod">("razorpay");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", city: "", pincode: "" });

  const total = totalPrice();
  const shipping = total >= 1499 ? 0 : 99;
  const grand = total + shipping;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleRazorpay = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: grand }),
      });
      const data = await res.json();

      const rzp = new window.Razorpay({
        key: RAZORPAY_KEY,
        amount: data.amount,
        currency: "INR",
        name: "AERON",
        description: "Order Payment",
        order_id: data.id,
        handler: async (response: any) => {
          await fetch("/api/checkout/verify", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...response, orderData: { items, address: form } }),
          });
          clearCart();
          window.location.href = "/order-confirmation";
        },
        prefill: { name: form.name, email: form.email, contact: form.phone },
        theme: { color: "#111111" },
      });
      rzp.open();
    } finally {
      setLoading(false);
    }
  };

  const handleCOD = async () => {
    setLoading(true);
    await fetch("/api/checkout/cod", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items, address: form, total: grand }),
    });
    clearCart();
    window.location.href = "/order-confirmation";
    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black tracking-tight mb-10"
          >
            Checkout
          </motion.h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left: Form */}
            <div className="lg:col-span-7 space-y-8">
              {/* Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-lg mb-5">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Full Name", name: "name", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "Phone", name: "phone", type: "tel" },
                  ].map((f) => (
                    <div key={f.name} className={f.name === "phone" ? "sm:col-span-2" : ""}>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">{f.label}</label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#111] transition-colors"
                        required
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-lg mb-5">Delivery Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Street Address</label>
                    <input name="address" value={form.address} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#111]" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">City</label>
                      <input name="city" value={form.city} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#111]" required />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Pincode</label>
                      <input name="pincode" value={form.pincode} onChange={handleChange} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#111]" required />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="font-bold text-lg mb-5">Payment Method</h2>
                <div className="space-y-3">
                  {[
                    { value: "razorpay", label: "Online Payment (UPI, Cards, NetBanking)", sub: "Secured by Razorpay" },
                    { value: "cod", label: "Cash on Delivery", sub: "Pay when you receive your order" },
                  ].map((opt) => (
                    <label key={opt.value} className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all ${payMethod === opt.value ? "border-[#111] bg-gray-50" : "border-gray-200"}`}>
                      <input
                        type="radio"
                        name="payment"
                        value={opt.value}
                        checked={payMethod === opt.value}
                        onChange={() => setPayMethod(opt.value as "razorpay" | "cod")}
                        className="accent-[#111]"
                      />
                      <div>
                        <p className="font-semibold text-sm">{opt.label}</p>
                        <p className="text-xs text-gray-500">{opt.sub}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
                <h2 className="font-bold text-lg mb-5">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-3">
                      <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                        <span className="absolute -top-1 -right-1 bg-[#111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                          {item.quantity}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-sm line-clamp-1">{item.name}</p>
                        <p className="text-xs text-gray-500">{item.size} / {item.color}</p>
                        <p className="font-bold text-sm mt-1">₹{(item.price * item.quantity).toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal</span>
                    <span>₹{total.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Shipping</span>
                    <span className={shipping === 0 ? "text-green-600 font-semibold" : ""}>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                  </div>
                  <div className="flex justify-between font-black text-lg pt-2 border-t border-gray-100 mt-2">
                    <span>Total</span>
                    <span>₹{grand.toLocaleString()}</span>
                  </div>
                </div>

                <motion.button
                  onClick={payMethod === "razorpay" ? handleRazorpay : handleCOD}
                  whileTap={{ scale: 0.98 }}
                  disabled={loading || items.length === 0}
                  className="mt-6 w-full bg-[#111] text-white py-4 text-sm font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Processing..." : payMethod === "razorpay" ? "Pay Now" : "Place Order (COD)"}
                </motion.button>

                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-400">
                  <Shield size={12} />
                  <span>Secure & encrypted checkout</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-1 text-xs text-gray-400">
                  <Truck size={12} />
                  <span>Free shipping above ₹1,499</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js" async />
      <Footer />
    </>
  );
}
