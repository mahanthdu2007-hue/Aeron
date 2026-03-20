import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

const positions = [
  { title: "Senior Apparell Designer", type: "Full-Time", location: "Bangalore HQ", department: "Design" },
  { title: "Frontend Engineer (Next.js)", type: "Full-Time", location: "Remote / Bangalore", department: "Engineering" },
  { title: "E-Commerce Manager", type: "Full-Time", location: "Bangalore HQ", department: "Operations" },
  { title: "Creative Intern", type: "Internship", location: "Bangalore HQ", department: "Marketing" },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-[#FAFAFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">Careers</h1>
          <p className="text-lg text-gray-500 mb-12 border-b border-gray-200 pb-8">
            Join the team building the future of premium streetwear and commerce.
          </p>

          <div className="space-y-4">
            {positions.map((pos) => (
              <div key={pos.title} className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-[#111] transition-colors cursor-pointer shadow-sm">
                <div>
                  <h2 className="text-xl font-bold text-[#111]">{pos.title}</h2>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full">{pos.department}</span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full">{pos.type}</span>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest rounded-full">{pos.location}</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#111] group-hover:text-white transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-100 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-2">Don't see a fit?</h3>
            <p className="text-gray-500 mb-6 max-w-sm mx-auto">We're always looking for exceptional talent. Send your portfolio and resume to us anyway.</p>
            <a href="mailto:careers@aeron.style" className="inline-block bg-[#111] text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
