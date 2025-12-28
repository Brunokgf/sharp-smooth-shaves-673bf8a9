import { Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="py-16 bg-charcoal border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-bold text-gradient-gold">
                BLADE
              </span>
              <span className="text-2xl font-display font-light text-foreground">
                PRO
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Máquinas de barbear premium para o homem moderno. Qualidade e precisão em cada detalhe.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Produtos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Barbeadores</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Acessórios</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lâminas</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kits</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Garantia</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Devoluções</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">contato@bladepro.com.br</li>
              <li className="text-sm text-muted-foreground">0800 123 4567</li>
              <li className="text-sm text-muted-foreground">São Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BLADE PRO. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
