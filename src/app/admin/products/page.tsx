"use client";

import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const mockProducts = [
  { id: "1", name: "Void Oversized Tee", price: 1199, stock: 45, category: "Tops", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=100&auto=format&fit=crop" },
  { id: "2", name: "Dark Matter Hoodie", price: 2799, stock: 12, category: "Hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=100&auto=format&fit=crop" },
  { id: "3", name: "Parallel Cargo Pants", price: 2499, stock: 0, category: "Bottoms", image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=100&auto=format&fit=crop" },
  { id: "4", name: "Mono Graphic Tee", price: 1099, stock: 67, category: "Tops", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100&auto=format&fit=crop" },
  { id: "5", name: "Structure Bomber", price: 3999, stock: 8, category: "Jackets", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&auto=format&fit=crop" },
];

export default function AdminProductsPage() {
  const [search, setSearch] = useState("");
  const filtered = mockProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()) || p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black">Products</h1>
          <p className="text-gray-500 text-sm mt-1">{filtered.length} products</p>
        </div>
        <button className="flex items-center gap-2 bg-[#111] text-white px-5 py-3 text-sm font-semibold rounded-xl hover:bg-stone-800 transition-colors">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#111]"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 text-left">Product</th>
                <th className="px-6 py-4 text-left">Category</th>
                <th className="px-6 py-4 text-left">Price</th>
                <th className="px-6 py-4 text-left">Stock</th>
                <th className="px-6 py-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((product, i) => (
                <motion.tr
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image src={product.image} alt={product.name} fill className="object-cover" />
                      </div>
                      <span className="font-medium text-sm">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                  <td className="px-6 py-4 text-sm font-bold">₹{product.price.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      product.stock === 0 ? "bg-red-100 text-red-700" :
                      product.stock < 15 ? "bg-amber-100 text-amber-700" :
                      "bg-green-100 text-green-700"
                    }`}>
                      {product.stock === 0 ? "Out of Stock" : `${product.stock} left`}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-gray-400 hover:text-[#111] hover:bg-gray-100 rounded-lg transition-all">
                        <Pencil size={14} />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
