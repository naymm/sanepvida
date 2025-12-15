import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import vitaminB6 from "@/assets/products/vitamin-b6.png";
import proteinBlue from "@/assets/products/protein-blue.png";
import codOil from "@/assets/products/cod-oil.png";
import canforadoDestaque from "@/assets/products/canforado-destaque.png";
import canforadoNormal from "@/assets/banners/canforado-normal.png";
import iodopovidonaNormal from "@/assets/banners/iodopovidonas-normal.png";

const slides = [
  {
    subtitle: "Álcool Canforado",
    title: "Alívio Natural",
    highlight: "Para Bem-estar",
    image: canforadoDestaque,
    floatImage: canforadoNormal,
  },
  {
    subtitle: "Proteína Vegetal",
    title: "Nutrição &",
    highlight: "Bem-estar",
    image: iodopovidonaNormal,
    floatImage: vitaminB6,
  },
  {
    subtitle: "Óleo de Fígado de Bacalhau",
    title: "Saúde &",
    highlight: "Vitalidade",
    image: codOil,
    floatImage: proteinBlue,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section className="relative hero-gradient min-h-[600px] overflow-hidden pt-32 md:pt-40">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-0 w-[800px] h-[800px] hero-blob opacity-50" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full" />
        
        {/* Decorative Wave Lines */}
        <svg className="absolute top-1/2 right-0 w-96 h-96 text-primary/10" viewBox="0 0 200 200">
          <path
            d="M 0 100 Q 50 50, 100 100 T 200 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M 0 120 Q 50 70, 100 120 T 200 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M 0 140 Q 50 90, 100 140 T 200 140"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content */}
          <div className="text-center lg:text-left relative overflow-hidden">
            <div
              key={`content-${currentSlide}`}
              className={`transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? "opacity-0 translate-x-4"
                  : "opacity-100 translate-x-0"
              }`}
            >
              <p className="text-muted-foreground mb-2">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary mb-8">
                {slides[currentSlide].highlight}
              </h2>
              <Button
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8"
              >
                Detalhes
              </Button>
            </div>
          </div>

          {/* Product Images */}
          <div className="relative flex items-center justify-center h-[350px] overflow-hidden">
            <img
              key={`main-${currentSlide}`}
              src={slides[currentSlide].image}
              alt="Product"
              className={`w-64 h-64 object-contain w-full h-full transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? "opacity-0 scale-95 translate-x-8"
                  : "opacity-100 scale-100 translate-x-0"
              }`}
              style={{
                animation: !isTransitioning ? "float 6s ease-in-out infinite" : "none",
              }}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block left-botao">
          <button
            onClick={prevSlide}
            className="carousel-arrow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block right-botao">
          <button
            onClick={nextSlide}
            className="carousel-arrow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 pb-8 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
