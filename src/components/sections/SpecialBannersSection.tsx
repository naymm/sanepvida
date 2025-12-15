import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import canforado from "@/assets/banners/canforado.png";
import iodopovidona from "@/assets/banners/iodopovidona.png";

const SpecialBannersSection = () => {
  const banner1Ref = useRef<HTMLDivElement>(null);
  const banner2Ref = useRef<HTMLDivElement>(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === banner1Ref.current) {
            setIsVisible1(true);
          } else if (entry.target === banner2Ref.current) {
            setIsVisible2(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (banner1Ref.current) {
      observer.observe(banner1Ref.current);
    }
    if (banner2Ref.current) {
      observer.observe(banner2Ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Banner 1 - Slide from left */}
          <div
            ref={banner1Ref}
            className={`special-banner group h-64 md:h-80 ${
              isVisible1 ? "slide-in-left" : "opacity-0"
            }`}
          >
            <img
              src={canforado}
              alt="Spa relaxado"
              className="w-full h-full object-cover"
            />
            <div className="special-banner-overlay" />
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <p className="text-card text-lg font-medium italic">Um corpo relaxado,</p>
              <h3 className="text-card text-2xl md:text-3xl font-display font-bold mb-4">
                Um corpo forte
              </h3>
              <a href="/produto/4">
                <Button className="bg-foreground/90 hover:bg-foreground text-background w-fit rounded-full">
                  Ver detalhes
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>

          {/* Banner 2 - Slide from right */}
          <div
            ref={banner2Ref}
            className={`special-banner group h-64 md:h-80 ${
              isVisible2 ? "slide-in-right" : "opacity-0"
            }`}
          >
            <img
              src={iodopovidona}
              alt="Saúde da mulher"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <p className="text-card/80 text-sm mb-1">Saúde da Mulher</p>
              <h3 className="text-card text-xl md:text-2xl font-display font-bold mb-1">
                Frescura e Confiança
              </h3>
              <p className="text-card text-2xl md:text-3xl font-display font-bold mb-4">
                Duo Perfeito
              </p>
              <a href="/produto/14">
                <Button className="bg-foreground/90 hover:bg-foreground text-background w-fit rounded-full">
                  Ver detalhes
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialBannersSection;
