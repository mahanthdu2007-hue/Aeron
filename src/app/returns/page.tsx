import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ReturnsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-12 border-b border-gray-200 pb-8">Returns & Exchanges</h1>
          
          <div className="prose prose-lg text-gray-600 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-none">
            <h3 className="text-xl font-bold text-[#111]">14-Day Return Policy</h3>
            <p className="mt-2 mb-6">We accept returns within 14 days of delivery. Items must be unworn, unwashed, and have original tags attached.</p>
            
            <h3 className="text-xl font-bold text-[#111]">How to Initiate a Return</h3>
            <ol className="list-decimal pl-5 mt-2 mb-6 space-y-2">
              <li>Log into your account and visit the Order History section.</li>
              <li>Select the order and click "Initiate Return".</li>
              <li>Pack the items securely and attach the provided shipping label.</li>
              <li>Drop off the package at your nearest partner courier location.</li>
            </ol>
            
            <h3 className="text-xl font-bold text-[#111]">Refunds</h3>
            <p className="mt-2">Refunds will be processed to your original payment method within 5-7 business days after we receive and inspect the returned items.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
