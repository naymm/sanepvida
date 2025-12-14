import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const AllProductsSection = () => {
  return (
    <section id="produtos" className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold">Todos Produtos</h2>
          <div className="flex gap-2">
            <button className="carousel-arrow">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="carousel-arrow">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProductsSection;
