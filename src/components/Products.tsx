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
import kemei6558_1 from "@/assets/kemei6558-1.jpg";
import kemei6558_2 from "@/assets/kemei6558-2.jpg";
import pomada1 from "@/assets/pomada-1.jpg";
import kemeitx1_1 from "@/assets/kemeitx1-1.webp";
import kemeitx1_2 from "@/assets/kemeitx1-2.webp";
import kemeitx1_3 from "@/assets/kemeitx1-3.webp";
import vgr001_1 from "@/assets/vgr001-1.webp";
import vgr001_2 from "@/assets/vgr001-2.webp";
import vgr001_3 from "@/assets/vgr001-3.webp";
import bmax1 from "@/assets/bmax-1.jpg";
import bmax2 from "@/assets/bmax-2.jpg";
import navalhete1 from "@/assets/navalhete-1.jpg";
import navalhete2 from "@/assets/navalhete-2.jpg";
import navalhete3 from "@/assets/navalhete-3.jpg";

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
  {
    id: "5",
    images: [kemei6558_1, kemei6558_2],
    name: "KEMEI 3 EM 1 KM-6558",
    description: "Máquina multifuncional 3 em 1: barbeador, aparador e cortador de pelos do nariz.",
    price: "R$ 42,90",
    priceNumber: 42.9,
    originalPrice: "R$ 89,90",
    rating: 5,
  },
  {
    id: "6",
    images: [pomada1],
    name: "POMADA MODELADORA CHARMING",
    description: "Pomada modeladora forte 50g para cabelo masculino com fixação duradoura.",
    price: "R$ 19,90",
    priceNumber: 19.9,
    originalPrice: "R$ 39,90",
    rating: 5,
  },
  {
    id: "7",
    images: [kemeitx1_1, kemeitx1_2, kemeitx1_3],
    name: "KEMEI TX1 GOLD",
    description: "Barbeador Kemei TX1 dourado com lâminas duplas, recarregável USB e bolsa de transporte.",
    price: "R$ 54,90",
    priceNumber: 54.9,
    originalPrice: "R$ 119,90",
    rating: 5,
  },
  {
    id: "8",
    images: [vgr001_1, vgr001_2, vgr001_3],
    name: "VGR V001 PREMIUM",
    description: "Máquina profissional 9000RPM com display LCD, 260 min de bateria e 12 pentes ajustáveis.",
    price: "R$ 89,90",
    priceNumber: 89.9,
    originalPrice: "R$ 189,90",
    rating: 5,
  },
  {
    id: "9",
    images: [bmax1, bmax2],
    name: "B-MAX BM-C024",
    description: "Máquina de acabamento profissional sem fio com lâmina de aço inoxidável e display digital.",
    price: "R$ 59,90",
    priceNumber: 59.9,
    originalPrice: "R$ 129,90",
    rating: 5,
  },
  {
    id: "10",
    images: [navalhete1, navalhete2, navalhete3],
    name: "NAVALHETE PROFISSIONAL SR-6000",
    description: "Navalhete de barbear profissional Dilcintia com lâmina de aço inoxidável e corte preciso.",
    price: "R$ 14,90",
    priceNumber: 14.9,
    originalPrice: "R$ 34,90",
    rating: 5,
  },
];

const Products = () => {
  return (
    <section id="produtos" className="py-12 md:py-24 bg-background relative">
      {/* Background accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-16">
          <p className="text-primary font-body uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm opacity-0 animate-fade-up">
            Nossa Linha
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Produtos <span className="text-gradient-gold">Premium</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto opacity-0 animate-fade-up px-4" style={{ animationDelay: "0.2s" }}>
            Cada máquina é projetada com precisão milimétrica para oferecer o melhor barbear da sua vida.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
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
