import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/shop/CartDrawer";
import HeroSection from "@/components/home/HeroSection";
import MarqueeBanner from "@/components/home/MarqueeBanner";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CollectionsGrid from "@/components/home/CollectionsGrid";
import Testimonials from "@/components/home/Testimonials";
import InstagramGrid from "@/components/home/InstagramGrid";

export default function Home() {
  return (
    <main>
      <Navbar />
      <CartDrawer />
      <HeroSection />
      <MarqueeBanner />
      <FeaturedProducts />
      <CollectionsGrid />
      <Testimonials />
      <InstagramGrid />
      <Footer />
    </main>
  );
}
