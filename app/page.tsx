import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeedGrid from "@/components/FeedGrid";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#2D2D2D]">
      <Header />
      <HeroSection />
      <FeedGrid />
      <Footer />
      {/* BackToTop é client-only: aparece após 300px de scroll */}
      <BackToTop />
    </main>
  );
}
