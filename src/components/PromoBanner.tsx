import { useState } from "react";
import { X, Truck, Gift } from "lucide-react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-primary/90 via-primary to-primary/90 text-primary-foreground py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-center relative">
        <Truck className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground/80" />
        
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          <span className="font-medium text-xs md:text-sm">
            Frete Grátis para todo Brasil
          </span>
          
          <span className="hidden sm:inline text-primary-foreground/80">•</span>
          
          <div className="hidden sm:flex items-center gap-1">
            <Gift className="w-3 h-3 text-primary-foreground/80" />
            <span className="text-xs md:text-sm">
              Brinde exclusivo em todas as compras
            </span>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;