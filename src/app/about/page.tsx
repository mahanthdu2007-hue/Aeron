import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8">About AERON</h1>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p className="font-medium text-2xl text-[#111] leading-snug">
              AERON was founded in 2026 with a simple mission: redefine the uniform of the modern creative.
            </p>
            <p>
              We believe in the power of minimalism, structure, and uncompromising quality. Our garments are designed to move seamlessly from the studio to the streets, offering a balance between luxury aesthetics and everyday functionality.
            </p>
            <div className="my-12 py-12 border-y border-gray-200">
              <h2 className="text-3xl font-bold uppercase tracking-tight text-[#111] mb-6">Our Philosophy</h2>
              <ul className="space-y-4 list-disc pl-5">
                <li><strong>Durability over trends:</strong> We build clothes that last seasons, not weeks.</li>
                <li><strong>Ethical production:</strong> Partnering only with factories that ensure fair wages and safe environments.</li>
                <li><strong>Silhouettes that speak:</strong> Focusing heavily on fit, drape, and the architectural structure of clothing.</li>
              </ul>
            </div>
            <p>
              Thank you for being part of the journey. Keep pushing the culture forward.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
