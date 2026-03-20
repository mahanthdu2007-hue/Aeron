"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) setError("Invalid email or password.");
    else router.push("/");
  };

  return (
    <div className="min-h-screen flex">
      {/* Left visual */}
      <div className="hidden lg:block w-1/2 relative bg-[#111]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=1200&auto=format&fit=crop')` }}
        />
        <div className="relative z-10 flex flex-col justify-end h-full p-12">
          <h2 className="text-4xl font-black text-white tracking-tight">AERON</h2>
          <p className="text-gray-400 text-sm mt-2">Premium Streetwear. Real Identity.</p>
        </div>
      </div>

      {/* Right form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <Link href="/" className="text-2xl font-black tracking-widest uppercase block mb-10 lg:hidden">AERON</Link>
          <h1 className="text-3xl font-black mb-2">Welcome back</h1>
          <p className="text-gray-500 mb-8 text-sm">Sign in to your account</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#111] transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#111] transition-colors"
                  required
                />
                <button type="button" onClick={() => setShowPass((v) => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {error && <p className="text-red-500 text-xs font-medium">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#111] text-white py-4 text-sm font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors disabled:opacity-60 mt-2"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-[#111] font-semibold hover:underline">Register</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
