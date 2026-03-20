"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const mockOrders = [
  { id: "ORD-001", customer: "Arjun S.", email: "arjun@gmail.com", items: 2, amount: 2398, status: "PAID", date: "Mar 20, 2026" },
  { id: "ORD-002", customer: "Priya M.", email: "priya@gmail.com", items: 1, amount: 2799, status: "SHIPPED", date: "Mar 19, 2026" },
  { id: "ORD-003", customer: "Dhruv K.", email: "dhruv@gmail.com", items: 3, amount: 5497, status: "PENDING", date: "Mar 18, 2026" },
  { id: "ORD-004", customer: "Ananya R.", email: "ananya@gmail.com", items: 1, amount: 1099, status: "DELIVERED", date: "Mar 17, 2026" },
  { id: "ORD-005", customer: "Rahul V.", email: "rahul@gmail.com", items: 1, amount: 3999, status: "PAID", date: "Mar 17, 2026" },
];

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-100 text-amber-700",
  PAID: "bg-blue-100 text-blue-700",
  SHIPPED: "bg-purple-100 text-purple-700",
  DELIVERED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

const statuses = ["All", "PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"];

export default function AdminOrdersPage() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filtered = mockOrders.filter((o) => {
    const matchSearch = o.customer.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = statusFilter === "All" || o.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black">Orders</h1>
        <p className="text-gray-500 text-sm mt-1">{filtered.length} orders</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative max-w-xs flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#111]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all ${
                statusFilter === s ? "bg-[#111] text-white border-[#111]" : "bg-white border-gray-200 hover:border-[#111]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 text-left">Order ID</th>
                <th className="px-6 py-4 text-left">Customer</th>
                <th className="px-6 py-4 text-left">Items</th>
                <th className="px-6 py-4 text-left">Amount</th>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((order, i) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4 text-sm font-mono font-medium">{order.id}</td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium">{order.customer}</p>
                    <p className="text-xs text-gray-400">{order.email}</p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.items} item(s)</td>
                  <td className="px-6 py-4 text-sm font-bold">₹{order.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.date}</td>
                  <td className="px-6 py-4">
                    <select
                      defaultValue={order.status}
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full border-0 cursor-pointer focus:outline-none ${statusColors[order.status]}`}
                    >
                      {["PENDING","PAID","SHIPPED","DELIVERED","CANCELLED"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
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
