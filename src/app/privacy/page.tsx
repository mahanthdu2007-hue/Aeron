import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-12 border-b border-gray-200 pb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg text-gray-600 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-none">
            <p>Last updated: October 2026</p>
            
            <h3 className="text-xl font-bold text-[#111] mt-8 mb-4">1. Information We Collect</h3>
            <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or contact customer support. This includes your name, email, shipping address, and payment securely processed by Razorpay.</p>

            <h3 className="text-xl font-bold text-[#111] mt-8 mb-4">2. How We Use Your Information</h3>
            <p>We use the information to process your orders, send order confirmations, respond to customer service requests, and (if you opt in) send promotional emails about new drops.</p>

            <h3 className="text-xl font-bold text-[#111] mt-8 mb-4">3. Data Security</h3>
            <p>Your payment information is never stored on our servers. All transactions are securely encrypted and processed by our payment gateway partners in compliance with PCI standards.</p>

            <h3 className="text-xl font-bold text-[#111] mt-8 mb-4">4. Cookies</h3>
            <p>We use essential cookies to maintain your session (like keeping items in your cart) and analytics cookies to understand how our website is used to improve the shopping experience.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
