import { Zap, Shield, Droplets, Battery } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lâminas de Precisão",
    description: "Aço japonês temperado com tecnologia nano-edge para corte microscópico perfeito.",
  },
  {
    icon: Shield,
    title: "5 Anos de Garantia",
    description: "Confiança total no nosso produto. Cobrimos qualquer defeito de fabricação.",
  },
  {
    icon: Droplets,
    title: "100% Impermeável",
    description: "Use no chuveiro ou seque. Classificação IPX7 para total versatilidade.",
  },
  {
    icon: Battery,
    title: "90 Min de Bateria",
    description: "Carregamento rápido de 1 hora. Um mês de uso com apenas uma carga.",
  },
];

const Features = () => {
  return (
    <section id="beneficios" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm opacity-0 animate-fade-up">
            Por Que Escolher
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Tecnologia <span className="text-gradient-gold">Inovadora</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border/30 hover:border-primary/30 transition-all duration-500 opacity-0 animate-fade-up text-center"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                <feature.icon size={28} />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
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

export default Features;
