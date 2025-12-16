import { useState, useMemo } from "react";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

const productCategories = [
  { key: "Todos", label: "Todos" },
  { key: "Galênicos", label: "Galênicos" },
  { key: "Iodopovidona", label: "Iodopovidonas" },
  { key: "Adjuvantes", label: "Adjuvantes" },
] as const;

const ProductsContent = () => {
  const [activeCategory, setActiveCategory] = useState<(typeof productCategories)[number]["key"]>("Todos");

  const filteredProducts = useMemo(
    () =>
      activeCategory === "Todos"
        ? products
        : products.filter((product) => product.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="pt-24 pb-16 bg-muted/30 singular-produto">
      <section className="py-8">
        <div className="container space-y-8">
          {/* Título / contexto */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-display font-bold text-primary-dark text-center md:text-left">
                Nossos Produtos
              </h1>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Explore a linha completa de produtos Vida e filtre por categoria:
                Galênicos, Iodopovidonas e Adjuvantes.
              </p>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap gap-3">
            {productCategories.map((category) => {
              const count =
                category.key === "Todos"
                  ? products.length
                  : products.filter((p) => p.category === category.key).length;

              return (
                <button
                  key={category.key}
                  type="button"
                  onClick={() => setActiveCategory(category.key)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    activeCategory === category.key
                      ? "bg-primary text-primary-foreground border-primary shadow-md"
                      : "bg-card text-muted-foreground border-border hover:bg-muted"
                  }`}
                >
                  <span>{category.label}</span>
                  <span className="ml-2 text-xs opacity-80">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Grid de produtos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full text-center text-muted-foreground py-12">
                Nenhum produto encontrado para esta categoria.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsContent;


