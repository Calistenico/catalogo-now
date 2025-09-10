import { 
  Smartphone, 
  MessageCircle, 
  Palette, 
  ShoppingBag, 
  Globe, 
  BarChart3,
  Shield,
  Zap
} from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "Integração WhatsApp",
    description: "Receba pedidos direto no seu WhatsApp de forma automática",
    color: "text-green-500"
  },
  {
    icon: Smartphone,
    title: "100% Responsivo",
    description: "Funciona perfeitamente em qualquer dispositivo",
    color: "text-blue-500"
  },
  {
    icon: Palette,
    title: "Personalização Total",
    description: "Cores, logo e identidade visual da sua marca",
    color: "text-purple-500"
  },
  {
    icon: ShoppingBag,
    title: "Catálogo Ilimitado",
    description: "Adicione quantos produtos quiser sem limite",
    color: "text-orange-500"
  },
  {
    icon: Globe,
    title: "URL Personalizada",
    description: "Link exclusivo e fácil de compartilhar",
    color: "text-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Acompanhe suas vendas e performance em tempo real",
    color: "text-indigo-500"
  },
  {
    icon: Shield,
    title: "Pagamento Seguro",
    description: "Integração com PIX e principais gateways de pagamento",
    color: "text-red-500"
  },
  {
    icon: Zap,
    title: "Configuração Rápida",
    description: "Sua loja online pronta em poucos minutos",
    color: "text-yellow-500"
  }
];

export const Features = () => {
  return (
    <section id="recursos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa para vender online
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recursos poderosos para impulsionar suas vendas e facilitar sua gestão
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};