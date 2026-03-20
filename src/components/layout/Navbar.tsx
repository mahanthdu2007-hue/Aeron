"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShoppingBag, Search, Heart, Menu, X, User } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Sale", href: "/shop?sort=sale" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openCart, totalItems } = useCartStore();
  const cartCount = totalItems();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="font-bold text-2xl tracking-[0.15em] uppercase text-[#111]">
              AERON
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wider uppercase text-[#333] hover:text-[#111] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#111] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Link href="/search" className="p-2 hover:opacity-60 transition-opacity">
                <Search size={20} />
              </Link>
              <Link href="/wishlist" className="p-2 hover:opacity-60 transition-opacity hidden md:block">
                <Heart size={20} />
              </Link>
              <Link href="/account" className="p-2 hover:opacity-60 transition-opacity hidden md:block">
                <User size={20} />
              </Link>
              <button
                onClick={openCart}
                className="p-2 hover:opacity-60 transition-opacity relative"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#111] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
              <button
                className="md:hidden p-2"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="font-bold text-2xl tracking-[0.15em] uppercase">AERON</span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-2 px-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-3xl font-semibold tracking-tight py-3 border-b border-gray-100 text-[#111]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <Link href="/account" onClick={() => setMenuOpen(false)} className="block text-3xl font-semibold tracking-tight py-3 border-b border-gray-100 text-[#111]">
                  Account
                </Link>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
                <Link href="/wishlist" onClick={() => setMenuOpen(false)} className="block text-3xl font-semibold tracking-tight py-3 text-[#111]">
                  Wishlist
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
