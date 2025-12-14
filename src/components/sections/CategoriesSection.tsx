import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import pillJar from "@/assets/products/pill-jar.png";
import medicalDevice from "@/assets/products/medical-device.png";
import aloeVera from "@/assets/products/aloe-vera.png";

const categories = [
  {
    title: "Adjuvantes",
    items: ["Cuidados Pessoais", "Higiene", "Limpeza"],
    image: pillJar,
  },
  {
    title: "Galênicos",
    items: ["Desinfectante", "Bactericida", "Fungicida"],
    image: medicalDevice,
  },
  {
    title: "Iodopovídonas",
    items: ["Desinfectante", "Antissépticos", "Bactericida"],
    image: aloeVera,
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card flex items-center gap-6 hover:shadow-card-hover transition-shadow"
            >
              <div className="flex-1">
                <h3 className="font-display font-semibold text-xl text-foreground mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full text-sm">
                  Ver produtos
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              <div className="w-32 h-32 shrink-0">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
