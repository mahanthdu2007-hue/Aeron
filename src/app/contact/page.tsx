import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-12 border-b border-gray-200 pb-8">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#111]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#111]" />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">Message</label>
                  <textarea rows={5} className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#111]" />
                </div>
                <button type="button" className="w-full bg-[#111] text-white py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Email Support</h3>
                <p className="text-xl font-medium text-[#111]">support@aeron.style</p>
                <p className="text-sm text-gray-500 mt-1">Response time: 24-48 hours</p>
              </div>
              <div>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-2">Press & Media</h3>
                <p className="text-xl font-medium text-[#111]">press@aeron.style</p>
              </div>
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold mb-4">HQ Studio</h3>
                <p className="text-gray-600 leading-relaxed">
                  AERON Studios<br />
                  124 Innovation Drive<br />
                  Design District<br />
                  Bangalore, KA 560001
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
