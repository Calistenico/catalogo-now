import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const newPlans = [
  {
    name: "Teste Grátis",
    price: "30",
    period: "dias",
    description: "Plano Inicial",
    features: [
      "Produtos Ilimitados",
      "URL Personalizada", 
      "Painel de Pedidos",
      "Pedidos Ilimitados",
      "Personalização Completa",
      "Pedidos no WhatsApp",
      "Suporte na montagem",
      "QR-Code da Empresa",
      "Integração com Redes Sociais",
      "Pagamentos Via PIX"
    ],
    cta: "Comece por aqui",
    link: "https://comprasofc.com/comece/",
    popular: true
  },
  {
    name: "Plano Mensal",
    price: "30,00",
    period: "mês",
    description: "",
    features: [
      "Produtos Ilimitados",
      "URL Personalizada",
      "Painel de Pedidos", 
      "Pedidos Ilimitados",
      "Personalização Completa",
      "Pedidos no WhatsApp",
      "Suporte na montagem",
      "QR-Code da Empresa",
      "Integração com Redes Sociais",
      "Pagamentos Via PIX"
    ],
    cta: "Contrate",
    link: "#",
    popular: false
  },
  {
    name: "Plano Semestral",
    price: "26,50",
    period: "mês",
    description: "",
    features: [
      "Produtos Ilimitados",
      "URL Personalizada",
      "Painel de Pedidos",
      "Pedidos Ilimitados", 
      "Personalização Completa",
      "Pedidos no WhatsApp",
      "Suporte na montagem",
      "QR-Code da Empresa",
      "Integração com Redes Sociais",
      "Pagamentos Via PIX"
    ],
    cta: "Contrate",
    link: "#",
    popular: false
  },
  {
    name: "Plano Anual",
    price: "20,50",
    period: "mês",
    description: "",
    features: [
      "Produtos Ilimitados",
      "URL Personalizada",
      "Painel de Pedidos",
      "Pedidos Ilimitados",
      "Personalização Completa", 
      "Pedidos no WhatsApp",
      "Suporte na montagem",
      "QR-Code da Empresa",
      "Integração com Redes Sociais",
      "Pagamentos Via PIX"
    ],
    cta: "Contrate",
    link: "#",
    popular: false
  }
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Planos
          </h2>
          <p className="text-xl text-muted-foreground">
            Ganhe 30 dias grátis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {newPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 relative group hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-primary scale-105 shadow-2xl' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center animate-pulse">
                    <Star className="w-4 h-4 mr-1" />
                    Plano Inicial
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                {plan.description && <p className="text-muted-foreground mb-4">{plan.description}</p>}
                <div className="flex items-baseline justify-center">
                  {plan.name === "Teste Grátis" ? (
                    <>
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1"> {plan.period}</span>
                    </>
                  ) : (
                    <>
                      <sup className="text-lg font-medium text-muted-foreground">R$</sup>
                      <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                      {plan.period !== "mês" ? null : <span className="text-muted-foreground ml-1">/{plan.period}</span>}
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "cta" : "outline"}
                className={`w-full group-hover:scale-105 transition-transform ${
                  plan.link === "#" ? "opacity-50 cursor-not-allowed" : ""
                }`}
                size="lg"
                onClick={() => plan.link !== "#" && window.open(plan.link, '_blank')}
                disabled={plan.link === "#"}
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