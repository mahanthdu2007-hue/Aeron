"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOut, Package, User, MapPin } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

type Tab = "orders" | "details" | "addresses";

export default function AccountPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("orders");

  if (status === "loading") {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
          <div className="w-8 h-8 rounded-full border-2 border-[#111] border-t-transparent animate-spin" />
        </div>
      </>
    );
  }

  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 border-b border-gray-200 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight">
                My Account
              </h1>
              <p className="mt-2 text-gray-500 text-lg">
                Welcome back, {session?.user?.name || "User"}
              </p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex items-center gap-2 group text-sm font-semibold uppercase tracking-widest text-gray-500 hover:text-[#111] transition-colors"
            >
              Sign Out
              <LogOut size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar / Menu */}
            <div className="w-full lg:w-1/4">
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => setActiveTab("orders")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors ${activeTab === "orders" ? "bg-[#111] text-white" : "text-[#111] hover:bg-gray-100"}`}
                >
                  <Package size={18} />
                  Order History
                </button>
                <button 
                  onClick={() => setActiveTab("details")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors ${activeTab === "details" ? "bg-[#111] text-white" : "text-[#111] hover:bg-gray-100"}`}
                >
                  <User size={18} />
                  Account Details
                </button>
                <button 
                  onClick={() => setActiveTab("addresses")}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold tracking-wider transition-colors ${activeTab === "addresses" ? "bg-[#111] text-white" : "text-[#111] hover:bg-gray-100"}`}
                >
                  <MapPin size={18} />
                  Addresses
                </button>
              </nav>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-3/4">
              
              {activeTab === "orders" && (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Recent Orders</h2>
                  <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                    <Package size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-semibold text-[#111]">No orders yet</h3>
                    <p className="text-gray-500 mt-2 mb-6 max-w-sm mx-auto">
                      When you place an order, it will appear here. Start shopping our latest drops!
                    </p>
                    <button 
                      onClick={() => router.push("/shop")}
                      className="bg-[#111] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
                    >
                      Start Shopping
                    </button>
                  </div>
                </div>
              )}

              {activeTab === "details" && (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Profile Details</h2>
                  <div className="space-y-6 max-w-lg">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Display Name</label>
                      <input type="text" readOnly value={session?.user?.name || ""} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                      <input type="email" readOnly value={session?.user?.email || ""} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 bg-gray-50 outline-none" />
                    </div>
                    <div className="pt-4 flex gap-4">
                      <button className="bg-[#111] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                        Edit Profile
                      </button>
                      {session?.user?.role === "ADMIN" && (
                        <button 
                          onClick={() => router.push("/admin")}
                          className="border-2 border-[#111] text-[#111] px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#111] hover:text-white transition-colors"
                        >
                          Admin Dashboard
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "addresses" && (
                <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
                  <h2 className="text-xl font-bold mb-6">Saved Addresses</h2>
                  <div className="text-center py-12 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
                    <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
                    <h3 className="text-lg font-semibold text-[#111]">No saved addresses</h3>
                    <p className="text-gray-500 mt-2 mb-6 max-w-sm mx-auto">
                      Add a shipping address to checkout faster next time.
                    </p>
                    <button className="bg-[#111] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
                      Add New Address
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
