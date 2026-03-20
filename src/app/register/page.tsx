"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) { setError("Passwords do not match."); return; }
    if (form.password.length < 8) { setError("Password must be at least 8 characters."); return; }
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
    });

    setLoading(false);
    if (res.ok) router.push("/login?registered=1");
    else {
      const data = await res.json();
      setError(data.error || "Registration failed.");
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block w-1/2 relative bg-[#111]">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=1200&auto=format&fit=crop')` }} />
        <div className="relative z-10 flex flex-col justify-end h-full p-12">
          <h2 className="text-4xl font-black text-white">AERON</h2>
          <p className="text-gray-400 text-sm mt-2">Join the movement.</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <h1 className="text-3xl font-black mb-2">Create Account</h1>
          <p className="text-gray-500 mb-8 text-sm">Join AERON for exclusive drops and early access.</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
            ].map((f) => (
              <div key={f.name}>
                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">{f.label}</label>
                <input
                  type={f.type}
                  value={form[f.name as keyof typeof form]}
                  onChange={(e) => setForm((prev) => ({ ...prev, [f.name]: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#111]"
                  required
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-12 text-sm focus:outline-none focus:border-[#111]"
                  required
                />
                <button type="button" onClick={() => setShowPass(v => !v)} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">Confirm Password</label>
              <input
                type="password"
                value={form.confirm}
                onChange={(e) => setForm((f) => ({ ...f, confirm: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#111]"
                required
              />
            </div>

            {error && <p className="text-red-500 text-xs font-medium">{error}</p>}

            <button type="submit" disabled={loading} className="w-full bg-[#111] text-white py-4 text-sm font-bold tracking-widest uppercase hover:bg-stone-800 disabled:opacity-60 mt-2">
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-[#111] font-semibold hover:underline">Sign In</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
