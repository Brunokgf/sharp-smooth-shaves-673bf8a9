import { Button } from "@/components/ui/button";
import heroShaver from "@/assets/hero-shaver.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-primary font-body uppercase tracking-[0.3em] text-sm">
                Tecnologia de Ponta
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
                O Barbear
                <span className="block text-gradient-gold">Perfeito</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                Experimente a precisão de engenharia alemã com lâminas de aço japonês. 
                O resultado mais suave que você já sentiu.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Descubra Mais
              </Button>
              <Button variant="outline" size="lg">
                Ver Produtos
              </Button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-12 pt-8">
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gradient-gold">50K+</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Clientes</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gradient-gold">4.9</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Avaliação</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-gradient-gold">5 Anos</p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">Garantia</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="relative">
              {/* Glow behind product */}
              <div className="absolute inset-0 bg-primary/20 blur-[80px] scale-75" />
              
              <img 
                src={heroShaver} 
                alt="Máquina de barbear premium BLADE PRO" 
                className="relative z-10 w-full max-w-lg animate-float drop-shadow-2xl"
              />
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-gold opacity-50 blur-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Role para baixo</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
