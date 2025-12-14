import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import BestSellersSection from "@/components/sections/BestSellersSection";
import SpecialBannersSection from "@/components/sections/SpecialBannersSection";
import AllProductsSection from "@/components/sections/AllProductsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <BestSellersSection />
        <SpecialBannersSection />
        <AllProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
