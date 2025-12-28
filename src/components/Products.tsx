import ProductCard from "./ProductCard";
import aparador1 from "@/assets/aparador-1.jpg";
import aparador2 from "@/assets/aparador-2.jpg";
import aparador3 from "@/assets/aparador-3.jpg";
import kemei1 from "@/assets/kemei-1.jpg";
import kemei2 from "@/assets/kemei-2.jpg";
import kemei3 from "@/assets/kemei-3.jpg";
import problack1 from "@/assets/problack-1.webp";
import problack2 from "@/assets/problack-2.webp";
import problack3 from "@/assets/problack-3.webp";
import vintage1 from "@/assets/vintage-1.webp";
import vintage2 from "@/assets/vintage-2.webp";
import vintage3 from "@/assets/vintage-3.webp";

const products = [
  {
    id: "1",
    images: [aparador1, aparador2, aparador3],
    name: "APARADOR ELÉTRICO PHILIPS",
    description: "Aparador e barbeador elétrico 3 em 1, à prova d'água, recarregável bivolt com 2 anos de garantia.",
    price: "R$ 39,90",
    priceNumber: 39.9,
    originalPrice: "R$ 89,90",
    rating: 5,
  },
  {
    id: "2",
    images: [kemei1, kemei2, kemei3],
    name: "KEMEI KM-1102",
    description: "Máquina de barbear sem fio recarregável com lâminas de precisão.",
    price: "R$ 34,90",
    priceNumber: 34.9,
    originalPrice: "R$ 74,90",
    rating: 5,
  },
  {
    id: "3",
    images: [problack1, problack2, problack3],
    name: "MÁQUINA DE BARBEAR PRO BLACK",
    description: "Barbeador rotativo Wet & Dry com 3 cabeças flutuantes e 40 min de autonomia.",
    price: "R$ 37,90",
    priceNumber: 37.9,
    originalPrice: "R$ 79,90",
    rating: 5,
  },
  {
    id: "4",
    images: [vintage1, vintage2, vintage3],
    name: "MÁQUINA DE CORTAR CABELO VINTAGE",
    description: "Máquina vintage V700 sem fio com lâmina T, 120 min de uso e design premium com pentes ajustáveis.",
    price: "R$ 49,90",
    priceNumber: 49.9,
    originalPrice: "R$ 109,90",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              delay={`${0.3 + index * 0.05}s`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
