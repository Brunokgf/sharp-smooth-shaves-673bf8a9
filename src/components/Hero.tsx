import { Button } from "@/components/ui/button";
import { ShoppingBag, Shield, Truck, Star, Gift } from "lucide-react";
import vintage1 from "@/assets/vintage-1.webp";
import brindeHidratante from "@/assets/brinde-hidratante.jpg";
import brindePosBarba from "@/assets/brinde-pos-barba.webp";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-32 md:pt-20">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-6 opacity-0 animate-fade-up order-2 lg:order-1" style={{ animationDelay: "0.2s" }}>
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/50 rounded-full px-4 py-2 animate-pulse">
              <span className="text-red-400 text-xs md:text-sm font-bold uppercase tracking-wide">
                🔥 70% OFF + Frete Grátis
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                Máquina de Cortar
                <span className="block text-gradient-gold">Cabelo Vintage</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                Máquina vintage V700 sem fio com lâmina T, 120 min de uso e design premium com pentes ajustáveis.
              </p>
            </div>

            {/* Price Block */}
            <div className="bg-card/50 border border-border rounded-xl p-4 md:p-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-muted-foreground text-sm line-through">R$ 59,90</p>
                  <p className="text-3xl md:text-4xl font-display font-bold text-gradient-gold">R$ 15,00</p>
                </div>
                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  -75%
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">ou 2x de R$ 7,50 sem juros</p>
              
              <Button 
                variant="hero" 
                size="lg" 
                className="w-full text-base md:text-lg py-6 group"
                onClick={scrollToProducts}
              >
                <ShoppingBag className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                COMPRAR AGORA
              </Button>
              
              <p className="text-center text-xs text-green-400 mt-3 font-medium">
                ✓ Frete Grátis para todo Brasil
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Truck className="w-4 h-4 text-primary" />
                <span className="text-xs">Frete Grátis</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs">Garantia 5 Anos</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Star className="w-4 h-4 text-primary" />
                <span className="text-xs">50K+ Clientes</span>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 border-2 border-background flex items-center justify-center text-xs font-bold text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="text-foreground font-semibold">+127 pessoas</span> compraram hoje
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center opacity-0 animate-fade-up order-1 lg:order-2" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow behind product */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] scale-75" />
              
              <img 
                src={vintage1} 
                alt="Máquina de Cortar Cabelo Vintage V700" 
                className="relative z-10 w-full max-w-xs md:max-w-lg animate-float drop-shadow-2xl"
              />
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-0 md:right-4 bg-red-500 text-white px-3 py-2 rounded-lg shadow-lg animate-bounce z-20">
                <p className="text-xs font-bold">MAIS VENDIDO</p>
              </div>

              {/* Brindes Section - Mais Destaque */}
              <div className="absolute -bottom-8 md:-bottom-12 left-1/2 -translate-x-1/2 z-20 w-[280px] md:w-[340px]">
                <div className="bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 rounded-2xl p-4 shadow-2xl border-2 border-green-400/50">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Gift className="w-5 h-5 text-white animate-pulse" />
                    <span className="text-sm md:text-base font-black text-white uppercase tracking-wider">🎁 Brindes Grátis</span>
                    <Gift className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div className="flex items-stretch gap-3 justify-center">
                    {/* Hidratante */}
                    <div className="flex-1 bg-white/95 rounded-xl p-2 shadow-lg text-center">
                      <img 
                        src={brindeHidratante} 
                        alt="Hidratante Corporal" 
                        className="w-16 h-20 md:w-20 md:h-24 object-contain mx-auto mb-2"
                      />
                      <p className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Hidratante</p>
                      <p className="text-[10px] md:text-xs text-gray-600">Corporal 200ml</p>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-white font-black text-2xl drop-shadow-lg">+</span>
                    </div>
                    
                    {/* Pós Barba */}
                    <div className="flex-1 bg-white/95 rounded-xl p-2 shadow-lg text-center">
                      <img 
                        src={brindePosBarba} 
                        alt="Loção Pós Barba" 
                        className="w-16 h-20 md:w-20 md:h-24 object-contain mx-auto mb-2"
                      />
                      <p className="text-xs md:text-sm font-bold text-gray-800 leading-tight">Pós Barba</p>
                      <p className="text-[10px] md:text-xs text-gray-600">Loção Suavizante</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-16 md:-bottom-20 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-gold opacity-50 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Role para baixo</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
