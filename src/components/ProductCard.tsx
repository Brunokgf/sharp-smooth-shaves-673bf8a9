import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import ProductModal from "./ProductModal";

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
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = () => {
    addItem({ id, name, price: priceNumber, image: images[0] });
    toast({
      title: "Adicionado ao carrinho!",
      description: name,
    });
  };

  const handleBuyClick = () => {
    setIsModalOpen(true);
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
    <>
      <div 
        className="group relative bg-gradient-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 opacity-0 animate-fade-up hover:shadow-gold"
        style={{ animationDelay: delay }}
      >
        {/* Product Image Carousel */}
        <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden bg-charcoal">
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
              onClick={handleBuyClick}
            >
              Ver Detalhes
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
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
            <h3 className="text-sm sm:text-base md:text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {description}
            </p>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-lg sm:text-xl md:text-2xl font-display font-bold text-gradient-gold">
              {price}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="flex-1 text-xs sm:text-sm" onClick={handleAddToCart}>
              <ShoppingCart size={14} className="mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Carrinho</span>
              <span className="sm:hidden">+</span>
            </Button>
            <Button variant="hero" size="sm" className="flex-1 text-xs sm:text-sm" onClick={handleBuyClick}>
              Comprar
            </Button>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={{ id, images, name, description, price, priceNumber, originalPrice, rating }}
      />
    </>
  );
};

export default ProductCard;
