import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pronto para começar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entre em contato conosco e comece a vender online ainda hoje
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* WhatsApp */}
          <div className="text-center">
            <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">WhatsApp</h3>
            <p className="text-muted-foreground mb-4">
              Fale conosco diretamente pelo WhatsApp
            </p>
            <Button variant="hero" className="bg-green-500 hover:bg-green-600">
              Chamar no WhatsApp
            </Button>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">
              Envie suas dúvidas por email
            </p>
            <Button variant="outline">
              Enviar Email
            </Button>
          </div>

          {/* Suporte */}
          <div className="text-center">
            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Suporte</h3>
            <p className="text-muted-foreground mb-4">
              Suporte técnico especializado
            </p>
            <Button variant="outline">
              Abrir Chamado
            </Button>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mt-16 p-8 bg-gradient-hero rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Teste grátis por 30 dias!
          </h3>
          <p className="text-white/90 text-lg mb-6">
            Sem compromisso, sem taxas de instalação
          </p>
          <Button variant="cta" size="lg" className="bg-white text-primary hover:bg-gray-100">
            Criar Minha Loja Agora
          </Button>
        </div>
      </div>
    </section>
  );
};