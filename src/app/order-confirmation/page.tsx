import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center">
            <CheckCircle size={40} className="text-green-500" />
          </div>
        </div>
        <h1 className="text-3xl font-black mb-3">Order Confirmed!</h1>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Thank you for your purchase. You&apos;ll receive an email confirmation shortly. Your order will be delivered in 3–5 business days.
        </p>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-8 text-left space-y-2">
          <p className="text-sm font-semibold text-gray-700">What&apos;s Next?</p>
          <ul className="text-sm text-gray-500 space-y-1">
            <li>✉️ Confirmation email sent</li>
            <li>📦 Order being packed</li>
            <li>🚚 Shipped in 1–2 days</li>
            <li>📍 Track your order in Account</li>
          </ul>
        </div>
        <div className="flex gap-3 justify-center">
          <Link href="/shop" className="bg-[#111] text-white px-6 py-3 text-sm font-bold tracking-widest uppercase hover:bg-stone-800 transition-colors">
            Continue Shopping
          </Link>
          <Link href="/account/orders" className="border border-gray-300 px-6 py-3 text-sm font-bold uppercase hover:border-[#111] transition-colors">
            My Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
