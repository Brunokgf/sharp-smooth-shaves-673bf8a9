import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import CartSheet from "./CartSheet";
import bladeProLogo from "@/assets/blade-pro-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-9 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={bladeProLogo} 
              alt="Blade Pro" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#produtos" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#beneficios" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#contato" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </div>

          {/* Cart & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <CartSheet />
            <Button variant="premium" size="sm">
              Comprar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <CartSheet />
            <button 
              className="text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#produtos" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                Produtos
              </a>
              <a href="#sobre" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </a>
              <a href="#beneficios" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                Benefícios
              </a>
              <a href="#contato" className="text-sm font-body uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                Contato
              </a>
              <Button variant="premium" size="sm" className="w-fit">
                Comprar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
