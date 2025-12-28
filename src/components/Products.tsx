import ProductCard from "./ProductCard";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.webp";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.webp";
import product9 from "@/assets/product-9.webp";

const products = [
  {
    image: product1,
    name: "PHILIPS ONEBLADE",
    description: "Aparador e barbeador elétrico 3 em 1 para rosto e corpo.",
    price: "R$ 249",
    originalPrice: "R$ 349",
    rating: 5,
  },
  {
    image: product2,
    name: "KEMEI KM-1102",
    description: "Barbeador sem fio recarregável com lâminas de precisão.",
    price: "R$ 189",
    originalPrice: "R$ 259",
    rating: 5,
  },
  {
    image: product3,
    name: "BARBEADOR PRO BLACK",
    description: "Máquina profissional aparador de pelos masculino premium.",
    price: "R$ 299",
    rating: 5,
  },
  {
    image: product4,
    name: "ONEBLADE FACE & BODY",
    description: "Versão completa para rosto e corpo com acessórios.",
    price: "R$ 349",
    originalPrice: "R$ 449",
    rating: 5,
  },
  {
    image: product5,
    name: "ONEBLADE TITANIUM",
    description: "Edição especial com lâminas de titânio duráveis.",
    price: "R$ 399",
    rating: 5,
  },
  {
    image: product6,
    name: "KEMEI PREMIUM",
    description: "Versão premium com bateria de longa duração.",
    price: "R$ 219",
    originalPrice: "R$ 299",
    rating: 5,
  },
  {
    image: product7,
    name: "KEMEI COMPACT",
    description: "Modelo compacto ideal para viagens.",
    price: "R$ 159",
    rating: 5,
  },
  {
    image: product8,
    name: "PRO BLACK ELITE",
    description: "Versão elite com acabamento premium e estojo.",
    price: "R$ 349",
    originalPrice: "R$ 449",
    rating: 5,
  },
  {
    image: product9,
    name: "SHAVER ROTATIVO 3D",
    description: "Barbeador rotativo com 3 cabeças flutuantes.",
    price: "R$ 279",
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
