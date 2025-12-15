import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

// Seleciona os produtos mais vendidos (primeiros 5)
const bestSellers = products.slice(0, 10);

const BestSellersSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (container) {
      const scrollAmount = 300;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newPosition =
        direction === "left"
          ? Math.max(0, scrollPosition - scrollAmount)
          : Math.min(maxScroll, scrollPosition + scrollAmount);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoScroll = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }

      intervalRef.current = setInterval(() => {
        if (!isPaused && carouselRef.current) {
          const container = carouselRef.current;
          const maxScroll = container.scrollWidth - container.clientWidth;
          const scrollAmount = 300;
          const newPosition = scrollPosition + scrollAmount;

          if (newPosition >= maxScroll) {
            // Volta ao início quando chega ao fim
            container.scrollTo({ left: 0, behavior: "smooth" });
            setScrollPosition(0);
          } else {
            container.scrollTo({ left: newPosition, behavior: "smooth" });
            setScrollPosition(newPosition);
          }
        }
      }, 3000); // Move a cada 3 segundos
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, scrollPosition]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
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
            ref={carouselRef}
            id="best-sellers-carousel"
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onScroll={(e) => {
              const target = e.currentTarget;
              setScrollPosition(target.scrollLeft);
            }}
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
