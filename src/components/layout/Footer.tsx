import Link from "next/link";
import { Instagram, Twitter, Youtube } from "lucide-react";

const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "/shop?sort=newest" },
    { label: "Best Sellers", href: "/shop?sort=popular" },
    { label: "Sale", href: "/shop?sort=sale" },
    { label: "Collections", href: "/collections" },
  ],
  Help: [
    { label: "Size Guide", href: "/size-guide" },
    { label: "Return Policy", href: "/returns" },
    { label: "Track Order", href: "/account" },
    { label: "Contact Us", href: "/contact" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-[0.2em] uppercase">AERON</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium streetwear for the bold. Designed for those who move against the current.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 AERON. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>🔒 Secure Payments</span>
            <span>↩ Easy Returns</span>
            <span>🚚 Pan-India Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
