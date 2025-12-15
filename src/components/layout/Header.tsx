import { useState } from "react";
import { Search, Heart, ShoppingCart, Menu, X, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoblack from "@/assets/img/logo_black.svg";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", href: "/",},
    { name: "Sobre Nós", href: "/sobre-nos", },
    { name: "Produtos", href: "#produtos" },
    { name: "Blog", href: "#blog" },
    { name: "Contate-nos", href: "#contato" },
  ];

  const getLinkClass = (href: string) => {
    const isRouteActive = href.startsWith("/") && location.pathname === href;
    const isHashActive = href.startsWith("#") && location.hash === href;

    return isRouteActive || isHashActive ? "nav-link-active" : "nav-link";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card shadow-sm">
      {/* Top Bar */}
      <div className="bg-muted/50 py-2 hidden md:block">
        <div className="container flex justify-between items-center text-sm text-muted-foreground">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Vila Flor, Condomínio Frente da Caixa Cruz, Luanda Angola</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+244 945 142 429</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={logoblack}
              alt="Propharm"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={getLinkClass(link.href)}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors hidden sm:block">
              <Heart className="w-5 h-5" />
            </button>
            <button className="p-2 text-muted-foreground hover:text-primary transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground text-xs rounded-full flex items-center justify-center font-semibold">
                0
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={getLinkClass(link.href)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
