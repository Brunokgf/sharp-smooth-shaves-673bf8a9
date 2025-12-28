import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  images: string[];
  name: string;
  description: string;
  price: string;
  priceNumber: number;
  originalPrice?: string;
  rating: number;
  delay?: string;
}

const ProductCard = ({ id, images, name, description, price, priceNumber, originalPrice, rating, delay = "0s" }: ProductCardProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const handleAddToCart = () => {
    addItem({ id, name, price: priceNumber, image: images[0] });
    toast({
      title: "Adicionado ao carrinho!",
      description: name,
    });
  };

  const handleBuyNow = () => {
    addItem({ id, name, price: priceNumber, image: images[0] });
    navigate("/checkout");
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="group relative bg-gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-up hover:shadow-gold"
      style={{ animationDelay: delay }}
    >
      {/* Product Image Carousel */}
      <div className="relative h-72 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
        
        <img 
          src={images[currentImage]} 
          alt={`${name} - imagem ${currentImage + 1}`}
          className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-700"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
              aria-label="Imagem anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-foreground"
              aria-label="Próxima imagem"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Image Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImage 
                    ? "bg-primary w-4" 
                    : "bg-muted-foreground/50 hover:bg-muted-foreground"
                }`}
                aria-label={`Ver imagem ${idx + 1}`}
              />
            ))}
          </div>
        )}
        
        {/* Quick action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <Button 
            variant="hero" 
            size="sm" 
            className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 pointer-events-auto"
            onClick={handleBuyNow}
          >
            Comprar Agora
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

        {/* Buttons */}
        <div className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={handleAddToCart}>
            <ShoppingCart size={16} className="mr-2" />
            Carrinho
          </Button>
          <Button variant="hero" className="flex-1" onClick={handleBuyNow}>
            Comprar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
