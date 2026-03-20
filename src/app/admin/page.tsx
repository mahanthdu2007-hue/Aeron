"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShoppingCart, Package, Users, DollarSign } from "lucide-react";

const stats = [
  { label: "Total Revenue", value: "₹2,84,500", change: "+18%", icon: DollarSign, color: "bg-green-50 text-green-600" },
  { label: "Total Orders", value: "342", change: "+12%", icon: ShoppingCart, color: "bg-blue-50 text-blue-600" },
  { label: "Products", value: "48", change: "+3", icon: Package, color: "bg-purple-50 text-purple-600" },
  { label: "Customers", value: "1,204", change: "+24%", icon: Users, color: "bg-amber-50 text-amber-600" },
];

const recentOrders = [
  { id: "ORD-001", customer: "Arjun S.", product: "Void Oversized Tee", amount: 1199, status: "PAID" },
  { id: "ORD-002", customer: "Priya M.", product: "Dark Matter Hoodie", amount: 2799, status: "SHIPPED" },
  { id: "ORD-003", customer: "Dhruv K.", product: "Parallel Cargo Pants", amount: 2499, status: "PENDING" },
  { id: "ORD-004", customer: "Ananya R.", product: "Mono Graphic Tee", amount: 1099, status: "DELIVERED" },
  { id: "ORD-005", customer: "Rahul V.", product: "Structure Bomber", amount: 3999, status: "PAID" },
];

const statusColors: Record<string, string> = {
  PENDING: "bg-amber-100 text-amber-700",
  PAID: "bg-blue-100 text-blue-700",
  SHIPPED: "bg-purple-100 text-purple-700",
  DELIVERED: "bg-green-100 text-green-700",
  CANCELLED: "bg-red-100 text-red-700",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black tracking-tight">Dashboard</h1>
        <p className="text-gray-500 mt-1 text-sm">Welcome back, Admin. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <div className={`p-2 rounded-xl ${stat.color}`}>
                  <Icon size={18} />
                </div>
              </div>
              <p className="text-2xl font-black">{stat.value}</p>
              <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
                <TrendingUp size={12} /> {stat.change} this month
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="font-bold text-lg">Recent Orders</h2>
          <a href="/admin/orders" className="text-sm text-gray-500 hover:text-[#111] underline underline-offset-4">View all</a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-3 text-left">Order ID</th>
                <th className="px-6 py-3 text-left">Customer</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-left">Amount</th>
                <th className="px-6 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-mono text-gray-500">{order.id}</td>
                  <td className="px-6 py-4 text-sm font-medium">{order.customer}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{order.product}</td>
                  <td className="px-6 py-4 text-sm font-bold">₹{order.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
