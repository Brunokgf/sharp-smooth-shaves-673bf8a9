import { useState } from "react";
import { X, Truck, Gift } from "lucide-react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-charcoal/95 text-foreground py-2 px-4 border-b border-border/30">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-center relative">
        <Truck className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
        
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          <span className="text-xs md:text-sm text-muted-foreground">
            <span className="text-green-400 font-medium">Frete Grátis</span> para todo Brasil
          </span>
          
          <span className="hidden sm:inline text-muted-foreground/50">•</span>
          
          <div className="hidden sm:flex items-center gap-1 text-muted-foreground">
            <Gift className="w-3 h-3 text-primary/70" />
            <span className="text-xs md:text-sm">
              Brinde em todas as compras
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-4 p-1 hover:bg-white/10 rounded transition-colors text-muted-foreground"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;