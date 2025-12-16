import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import BestSellersSection from "@/components/sections/BestSellersSection";
import SpecialBannersSection from "@/components/sections/SpecialBannersSection";
import AllProductsSection from "@/components/sections/AllProductsSection";
import AboutContent from "@/components/pages/AboutContent";
import ProductsContent from "@/components/pages/ProductsContent";
import ContactContent from "@/components/pages/ContactContent";
import BlogContent from "@/components/pages/BlogContent";

const Index = () => {
  const location = useLocation();

  // Renderizar conteúdo baseado na rota
  const renderContent = () => {
    switch (location.pathname) {
      case "/sobre-nos":
        return <AboutContent />;
      case "/produtos":
        return <ProductsContent />;
      case "/contato":
        return <ContactContent />;
      case "/blog":
        return <BlogContent />;
      default:
        return (
          <>
            <HeroSection />
            <CategoriesSection />
            <BestSellersSection />
            <SpecialBannersSection />
            <AllProductsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{renderContent()}</main>
      <Footer />
    </div>
  );
};

export default Index;
