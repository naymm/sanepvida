import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  category: string;
  categoryColor: string;
  name: string;
}

const ProductCard = ({ image, category, categoryColor, name }: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="product-card-image h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className={`category-badge ${categoryColor}`}>
          {category}
        </span>
        <h3 className="font-medium text-foreground mt-2 mb-3 line-clamp-2 min-h-[48px]">
          {name}
        </h3>
        <Button
          variant="outline"
          size="sm"
          className="w-full rounded-full border-border hover:border-primary hover:text-primary"
        >
          <Eye className="w-4 h-4 mr-2" />
          Ver detalhes
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
