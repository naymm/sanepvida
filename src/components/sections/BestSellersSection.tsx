import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

// Seleciona os produtos mais vendidos (primeiros 5)
const bestSellers = products.slice(0, 5);

const BestSellersSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("best-sellers-carousel");
    if (container) {
      const scrollAmount = 300;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount;
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="section-title">Produtos mais vendidos</h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="carousel-arrow absolute -left-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="carousel-arrow absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden md:flex"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Products Carousel */}
          <div
            id="best-sellers-carousel"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] max-w-[250px] snap-start"
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellersSection;
