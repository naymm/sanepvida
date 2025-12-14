import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id?: string;
  image: string;
  category: string;
  categoryColor: string;
  name: string;
  price?: string;
  rating?: number;
}

const ProductCard = ({ 
  id,
  image, 
  category, 
  categoryColor, 
  name, 
  price = "$ 8,95",
  rating = 0 
}: ProductCardProps) => {
  return (
    <div className="product-card group">
      <div className="product-card-image h-48 bg-gray-100 rounded-t-xl p-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-medium text-sky-400 mb-1 block">
          {category}
        </span>
        <h3 className="font-bold text-primary-dark mt-2 mb-2 line-clamp-2 min-h-[48px] text-base">
          {name}
        </h3>
        {id ? (
          <Link to={`/produto/${id}`}>
            <Button
              variant="outline"
              size="sm"
              className="w-full rounded-full bg-gray-100 hover:bg-gray-200 border-0 text-primary-dark font-medium h-10"
            >
              <Eye className="w-4 h-4 mr-2" />
              Ver detalhes
            </Button>
          </Link>
        ) : (
          <Button
            variant="outline"
            size="sm"
            className="w-full rounded-full bg-gray-100 hover:bg-gray-200 border-0 text-primary-dark font-medium h-10"
            disabled
          >
            <Eye className="w-4 h-4 mr-2" />
            Ver detalhes
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
