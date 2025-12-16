import { Facebook, Instagram, Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import logowhite from "@/assets/img/logo_white.svg";

const Footer = () => {
  const informationLinks = [
    "Sobre",
    "Blog",
    "FAQ",
    "Política de Privacidade",
    "Termos & Condições",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="footer-section">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1 - Newsletter */}
          <div>
            {/* Logo */}
          <a href="/" className="flex items-center gap-2 p-3">
            <img
              src={logowhite}
              alt="Propharm"
              className="h-12 w-auto object-contain"
            />
          </a>
            <p className="text-footer-foreground/70 mb-6">
            Um indústria farmacêutica que tem a missão produzir e distribuir soluções de saúde.
            </p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="Email address"
                className="bg-footer-foreground/10 border-footer-foreground/20 text-footer-foreground placeholder:text-footer-foreground/50"
              />
              <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0">
                Subscrever
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="terms" className="border-footer-foreground/30 data-[state=checked]:bg-primary" />
              <label htmlFor="terms" className="text-sm text-footer-foreground/70">
                Aceito os termos e condições e política de privacidade
              </label>
            </div>
          </div>

          {/* Column 2 - Information */}
          <div>
            <h3 className="font-display font-semibold text-lg text-footer-foreground mb-6">
              Informação
            </h3>
            <ul className="space-y-3">
              {informationLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-footer-foreground/70 hover:text-footer-foreground transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg text-footer-foreground mb-6">
              Endereço
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-footer-foreground/70">
                  Vila Flor, Condomínio Frente da Caixa Cruz, Luanda, Angola
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:geral@sanepvida.co.ao" className="text-footer-foreground/70 hover:text-footer-foreground">
                  geral@sanepvida.co.ao
                </a>
              </div>
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-footer-foreground/10">
        <div className="container py-6">
          <p className="text-center text-footer-foreground/50 text-sm">
            Copyright 2025. Sanep Vida. Todos Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
