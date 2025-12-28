import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  rating: number;
  delay?: string;
}

const ProductCard = ({ image, name, description, price, originalPrice, rating, delay = "0s" }: ProductCardProps) => {
  return (
    <div 
      className="group relative bg-gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-up hover:shadow-gold"
      style={{ animationDelay: delay }}
    >
      {/* Product Image */}
      <div className="relative h-72 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Quick action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="hero" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Ver Detalhes
          </Button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              className={i < rating ? "fill-primary text-primary" : "text-muted"} 
            />
          ))}
          <span className="text-xs text-muted-foreground ml-2">({rating}.0)</span>
        </div>

        {/* Name & Description */}
        <div>
          <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-3">
          <span className="text-2xl font-display font-bold text-gradient-gold">
            {price}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
        </div>

        {/* Add to cart */}
        <Button variant="outline" className="w-full">
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
