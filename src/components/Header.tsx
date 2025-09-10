import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold">
            <span className="text-primary">Compras</span>
            <span className="text-accent">Ofc</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("recursos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection("planos")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => window.open('https://comprasofc.com/comece/', '_blank')}
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t border-border bg-white">
            <button 
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection("recursos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection("planos")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection("contato")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <div className="pt-2">
              <Button 
                variant="hero" 
                size="sm" 
                className="w-full"
                onClick={() => window.open('https://comprasofc.com/comece/', '_blank')}
              >
                Começar Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};