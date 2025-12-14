import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import buscopan from "@/assets/products/buscopan.png";
import nutritionVanilla from "@/assets/products/nutrition-vanilla.png";
import wheyProtein from "@/assets/products/whey-protein.png";
import proteinOrange from "@/assets/products/protein-orange.png";
import preworkout from "@/assets/products/preworkout.png";
import pillJar from "@/assets/products/pill-jar.png";
import softgel from "@/assets/products/softgel.png";
import proteinBlue from "@/assets/products/protein-blue.png";
import proteinBlack from "@/assets/products/protein-black.png";
import fishOil from "@/assets/products/fish-oil.png";
import aguaOxigenada3250ml from "@/assets/products/Agua-Oxigenada_3_250ml.png";
import aguaOxigenada3500ml from "@/assets/products/Agua-Oxigenada_3_500ml.png";

const products = [
  {
    image: aguaOxigenada3250ml,
    category: "Vitamins",
    categoryColor: "category-vitamins",
    name: "Buscopan Forte Tab 20mg x 10",
  },
  {
    image: aguaOxigenada3500ml,
    category: "Protein",
    categoryColor: "category-protein",
    name: "Nutren Diabetes Vanilla",
  },
  {
    image: wheyProtein,
    category: "Protein",
    categoryColor: "category-protein",
    name: "FatBlaster Keto-Fit Whey Protein",
  },
  {
    image: proteinOrange,
    category: "Sports Nutrition",
    categoryColor: "category-sports",
    name: "Nature's Way Instant Natural",
  },
  {
    image: preworkout,
    category: "Sports Nutrition",
    categoryColor: "category-sports",
    name: "Musashi Intra Workout",
  },
  {
    image: pillJar,
    category: "Vitamins",
    categoryColor: "category-vitamins",
    name: "Gastro Soothe Tab 10mg X 20",
  },
  {
    image: softgel,
    category: "Protein",
    categoryColor: "category-protein",
    name: "Tropeaka Lean Protein Softgel",
  },
  {
    image: proteinBlue,
    category: "Supplements",
    categoryColor: "category-supplements",
    name: "Protein Supplies Australia",
  },
  {
    image: proteinBlack,
    category: "Sports Nutrition",
    categoryColor: "category-sports",
    name: "Vital Protein Strawberry",
  },
  {
    image: fishOil,
    category: "Sports Nutrition",
    categoryColor: "category-sports",
    name: "Musashi 100% Whey Vanilla",
  },
];

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
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProductsSection;
