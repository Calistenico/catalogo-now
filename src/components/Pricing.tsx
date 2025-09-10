import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Gratuito",
    price: "0",
    period: "30 dias",
    description: "Ideal para testar a plataforma",
    features: [
      "Produtos ilimitados",
      "Integração WhatsApp",
      "URL personalizada",
      "Suporte básico"
    ],
    cta: "Começar Grátis",
    popular: false
  },
  {
    name: "Profissional",
    price: "29",
    period: "mês",
    description: "Perfeito para pequenos negócios",
    features: [
      "Todos os recursos gratuitos",
      "Relatórios avançados",
      "Suporte prioritário",
      "Integração PIX",
      "Backup automático"
    ],
    cta: "Assinar Agora",
    popular: true
  },
  {
    name: "Premium",
    price: "59",
    period: "mês",
    description: "Para empresas que querem crescer",
    features: [
      "Todos os recursos profissionais",
      "Multi-lojas",
      "API personalizada",
      "Suporte 24/7",
      "Consultoria gratuita"
    ],
    cta: "Falar com Vendas",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece grátis e escale conforme seu negócio cresce
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative ${
                plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">R$ {plan.price}</span>
                  <span className="text-muted-foreground ml-1">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "cta" : "outline"} 
                className="w-full"
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Não encontrou o plano ideal? Fale conosco!
          </p>
          <Button variant="ghost" size="lg">
            Solicitar Plano Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};