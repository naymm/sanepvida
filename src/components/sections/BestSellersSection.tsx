import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import fishOil from "@/assets/products/fish-oil.png";
import proteinBlack from "@/assets/products/protein-black.png";
import codOil from "@/assets/products/cod-oil.png";
import proteinBlue from "@/assets/products/protein-blue.png";
import vitaminB6 from "@/assets/products/vitamin-b6.png";

const products = [
  {
    image: vitaminB6,
    category: "Home",
    categoryColor: "category-home",
    name: "Go Natural Fruit & Nut Delight",
  },
  {
    image: fishOil,
    category: "Pets",
    categoryColor: "category-pets",
    name: "Spring Leaf Kids Fish Oil 750mg",
  },
  {
    image: codOil,
    category: "Para",
    categoryColor: "category-para",
    name: "Nordic Naturals Arctic-D Cod",
  },
  {
    image: proteinBlue,
    category: "Baby",
    categoryColor: "category-baby",
    name: "Vega Plant Protein – Banana",
  },
  {
    image: proteinBlack,
    category: "Sports Nutrition",
    categoryColor: "category-sports",
    name: "Vital Protein Strawberry",
  },
];

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
            {products.map((product, index) => (
              <div
                key={index}
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
