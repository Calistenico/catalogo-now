export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">MultiLoja</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              A plataforma completa para criar sua loja online e vender mais. 
              Simples, rápido e integrado com suas redes sociais.
            </p>
          </div>

          {/* Links úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-primary-foreground/80">
                contato@multiloja.com
              </li>
              <li className="text-primary-foreground/80">
                (11) 99999-9999
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/20 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 MultiLoja. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
              Termos de Uso
            </a>
            <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors text-sm">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};