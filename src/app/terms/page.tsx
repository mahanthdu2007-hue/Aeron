import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-12 border-b border-gray-200 pb-8">Terms of Service</h1>
          
          <div className="prose prose-lg text-gray-600 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm max-w-none">
            <p>Last updated: October 2026</p>
            
            <h3 className="text-xl font-bold text-[#111] mt-8 mb-4">1. General Conditions</h3>
            <p>We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve transmissions over various networks.</p>

            <h3 className="text-xl font-bold text-[#111] mt-8 mb-4">2. Products and Pricing</h3>
            <p>Prices for our products are subject to change without notice. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service. We reserve the right to limit the quantities of any products that we offer.</p>

            <h3 className="text-xl font-bold text-[#111] mt-8 mb-4">3. Accuracy of Billing</h3>
            <p>We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person or per order. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e-mail provided at the time the order was made.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
