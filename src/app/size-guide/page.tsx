import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function SizeGuidePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-12 border-b border-gray-200 pb-8">Size Guide</h1>
          
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Tops & Outerwear</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-sm tracking-wider uppercase text-gray-500">
                    <th className="py-4 font-semibold">Size</th>
                    <th className="py-4 font-semibold">Chest (in)</th>
                    <th className="py-4 font-semibold">Length (in)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-100"><td className="py-4 font-medium">S</td><td>38 - 40</td><td>28</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-4 font-medium">M</td><td>40 - 42</td><td>29</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-4 font-medium">L</td><td>42 - 44</td><td>30</td></tr>
                  <tr><td className="py-4 font-medium">XL</td><td>44 - 46</td><td>31</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-6 italic">* All measurements are approximate. Our garments feature an oversized, boxy fit by design. If you prefer a regular fit, we recommend sizing down.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
