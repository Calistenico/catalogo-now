import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-multiloja.jpg";

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen bg-gradient-hero flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Crie sua loja online 
              <span className="text-accent"> hoje mesmo</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
              Plataforma completa para vender online com integração WhatsApp, 
              catálogo digital e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group">
                Começar Grátis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">30 dias</div>
                <div className="text-sm text-white/70">Teste grátis</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">+ 1000</div>
                <div className="text-sm text-white/70">Lojas criadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Suporte</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Loja online no celular" 
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};