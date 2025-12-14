import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import spaRelaxed from "@/assets/banners/spa-relaxed.png";
import medicalGloves from "@/assets/banners/medical-gloves.png";

const SpecialBannersSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="section-title">Especial</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Banner 1 - Spa */}
          <div className="special-banner group h-64 md:h-80">
            <img
              src={spaRelaxed}
              alt="Spa relaxado"
              className="w-full h-full object-cover"
            />
            <div className="special-banner-overlay" />
            <div className="absolute inset-0 flex flex-col justify-center p-8">
              <p className="text-card text-lg font-medium italic">Um corpo relaxado,</p>
              <h3 className="text-card text-2xl md:text-3xl font-display font-bold mb-4">
                Um corpo forte
              </h3>
              <Button className="bg-foreground/90 hover:bg-foreground text-background w-fit rounded-full">
                Ver detalhes
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Banner 2 - Women's Health */}
          <div className="special-banner group h-64 md:h-80">
            <img
              src={medicalGloves}
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
              <Button className="bg-foreground/90 hover:bg-foreground text-background w-fit rounded-full">
                Ver detalhes
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialBannersSection;
