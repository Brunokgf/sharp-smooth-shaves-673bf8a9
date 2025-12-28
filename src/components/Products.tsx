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
import product10 from "@/assets/product-10.webp";
import product11 from "@/assets/product-11.webp";
import product12 from "@/assets/product-12.webp";
import product13 from "@/assets/product-13.webp";
import product14 from "@/assets/product-14.webp";
import product15 from "@/assets/product-15.webp";
import product16 from "@/assets/product-16.webp";

const products = [
  {
    id: "1",
    images: [product1, product2, product3],
    name: "PHILIPS ONEBLADE",
    description: "Aparador e barbeador elétrico 3 em 1 para rosto e corpo.",
    price: "R$ 39,90",
    priceNumber: 39.9,
    originalPrice: "R$ 89,90",
    rating: 5,
  },
  {
    id: "2",
    images: [product2, product1, product4],
    name: "KEMEI KM-1102",
    description: "Barbeador sem fio recarregável com lâminas de precisão.",
    price: "R$ 29,90",
    priceNumber: 29.9,
    originalPrice: "R$ 59,90",
    rating: 5,
  },
  {
    id: "3",
    images: [product3, product8, product9],
    name: "BARBEADOR PRO BLACK",
    description: "Máquina profissional aparador de pelos masculino premium.",
    price: "R$ 34,90",
    priceNumber: 34.9,
    originalPrice: "R$ 69,90",
    rating: 5,
  },
  {
    id: "4",
    images: [product4, product5, product1],
    name: "ONEBLADE FACE & BODY",
    description: "Versão completa para rosto e corpo com acessórios.",
    price: "R$ 44,90",
    priceNumber: 44.9,
    originalPrice: "R$ 99,90",
    rating: 5,
  },
  {
    id: "5",
    images: [product5, product4, product6],
    name: "ONEBLADE TITANIUM",
    description: "Edição especial com lâminas de titânio duráveis.",
    price: "R$ 49,90",
    priceNumber: 49.9,
    originalPrice: "R$ 109,90",
    rating: 5,
  },
  {
    id: "6",
    images: [product6, product7, product2],
    name: "KEMEI PREMIUM",
    description: "Versão premium com bateria de longa duração.",
    price: "R$ 32,90",
    priceNumber: 32.9,
    originalPrice: "R$ 69,90",
    rating: 5,
  },
  {
    id: "7",
    images: [product7, product6, product8],
    name: "KEMEI COMPACT",
    description: "Modelo compacto ideal para viagens.",
    price: "R$ 24,90",
    priceNumber: 24.9,
    originalPrice: "R$ 49,90",
    rating: 5,
  },
  {
    id: "8",
    images: [product8, product3, product9],
    name: "PRO BLACK ELITE",
    description: "Versão elite com acabamento premium e estojo.",
    price: "R$ 37,90",
    priceNumber: 37.9,
    originalPrice: "R$ 79,90",
    rating: 5,
  },
  {
    id: "9",
    images: [product9, product10, product8],
    name: "SHAVER ROTATIVO 3D",
    description: "Barbeador rotativo com 3 cabeças flutuantes.",
    price: "R$ 35,90",
    priceNumber: 35.9,
    originalPrice: "R$ 74,90",
    rating: 5,
  },
  {
    id: "10",
    images: [product10, product11, product9],
    name: "PHILIPS 1000 SERIES",
    description: "Barbeador Wet & Dry com cabo USB recarregável.",
    price: "R$ 44,90",
    priceNumber: 44.9,
    originalPrice: "R$ 99,90",
    rating: 5,
  },
  {
    id: "11",
    images: [product11, product10, product12],
    name: "PHILIPS 1000 PREMIUM",
    description: "Versão premium com tampa protetora inclusa.",
    price: "R$ 49,90",
    priceNumber: 49.9,
    originalPrice: "R$ 109,90",
    rating: 5,
  },
  {
    id: "12",
    images: [product12, product11, product13],
    name: "BASE CARREGADORA",
    description: "Base de carregamento universal para barbeadores.",
    price: "R$ 19,90",
    priceNumber: 19.9,
    originalPrice: "R$ 39,90",
    rating: 5,
  },
  {
    id: "13",
    images: [product13, product14, product15],
    name: "MONDIAL SUPERGROOM 10",
    description: "Kit completo 3 em 1 com 10 acessórios inclusos.",
    price: "R$ 39,90",
    priceNumber: 39.9,
    originalPrice: "R$ 89,90",
    rating: 5,
  },
  {
    id: "14",
    images: [product14, product15, product16],
    name: "VINTAGE V700 DRAGON",
    description: "Máquina vintage com design dragão e bateria de 120 min.",
    price: "R$ 37,90",
    priceNumber: 37.9,
    originalPrice: "R$ 79,90",
    rating: 5,
  },
  {
    id: "15",
    images: [product15, product16, product14],
    name: "VINTAGE GOLD PREMIUM",
    description: "Lâmina T de precisão com acabamento dourado.",
    price: "R$ 39,90",
    priceNumber: 39.9,
    originalPrice: "R$ 84,90",
    rating: 5,
  },
  {
    id: "16",
    images: [product16, product15, product13],
    name: "VINTAGE GOLD KIT",
    description: "Kit completo com 2 máquinas e pentes ajustáveis.",
    price: "R$ 59,90",
    priceNumber: 59.9,
    originalPrice: "R$ 129,90",
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
