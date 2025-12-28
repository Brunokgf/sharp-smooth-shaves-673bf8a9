import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.webp";

const products = [
  {
    image: product1,
    name: "BLADE PRO X1",
    description: "Barbeador de lâmina dupla com tecnologia FlexHead para contornos perfeitos.",
    price: "R$ 599",
    originalPrice: "R$ 799",
    rating: 5,
  },
  {
    image: product2,
    name: "BLADE TITAN R3",
    description: "Sistema rotativo de 3 cabeças com IA adaptativa para diferentes tipos de barba.",
    price: "R$ 899",
    originalPrice: "R$ 1.199",
    rating: 5,
  },
  {
    image: product3,
    name: "BLADE ELITE DUAL",
    description: "O mais avançado barbeador com duas lâminas flutuantes e acabamento premium.",
    price: "R$ 1.299",
    rating: 5,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-24 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary font-body uppercase tracking-[0.3em] text-sm opacity-0 animate-fade-up">
            Nossa Linha
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Produtos <span className="text-gradient-gold">Premium</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Cada máquina é projetada com precisão milimétrica para oferecer o melhor barbear da sua vida.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.name} 
              {...product} 
              delay={`${0.3 + index * 0.1}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
