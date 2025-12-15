import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getProductById } from "@/data/products";
import NotFound from "./NotFound";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background singular-produto">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container">
          {/* Breadcrumb */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-gray-100 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <img
                src={product.image}
                alt={product.name}
                className="max-w-full max-h-[500px] object-contain"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              {/* Category */}
              <span className="text-sm font-medium text-sky-400">
                {product.category}
              </span>

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-primary-dark">
                {product.name}
              </h1>


            

              {/* Description */}
              {product.description && (
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    Descrição
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}


              {/* Details */}
              {product.details && (
                <div className="space-y-6 pt-6 border-t border-border">
                  {product.details.brand && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Marca:{" "}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {product.details.brand}
                      </span>
                    </div>
                  )}

                  {(product.details.weight || product.details.volume) && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        {product.details.weight ? "Peso: " : "Volume: "}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {product.details.weight || product.details.volume}
                      </span>
                    </div>
                  )}

                  {product.details.dosage && (
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Dosagem:{" "}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {product.details.dosage}
                      </span>
                    </div>
                  )}

                  {product.details.ingredients && product.details.ingredients.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Ingredientes:
                      </h4>
                      <ul className="space-y-1">
                        {product.details.ingredients.map((ingredient, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{ingredient}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.details.benefits && product.details.benefits.length > 0 && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">
                        Benefícios:
                      </h4>
                      <ul className="space-y-1">
                        {product.details.benefits.map((benefit, index) => (
                          <li
                            key={index}
                            className="text-sm text-muted-foreground flex items-start gap-2"
                          >
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;



