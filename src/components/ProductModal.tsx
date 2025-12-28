import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Star, ShoppingCart, X, ChevronLeft, ChevronRight, Truck, Shield } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    id: string;
    images: string[];
    name: string;
    description: string;
    price: string;
    priceNumber: number;
    originalPrice?: string;
    rating: number;
  };
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);

  const handleAddToCart = () => {
    addItem({ id: product.id, name: product.name, price: product.priceNumber, image: product.images[0] });
    toast({
      title: "Adicionado ao carrinho!",
      description: product.name,
    });
  };

  const handleBuyNow = () => {
    addItem({ id: product.id, name: product.name, price: product.priceNumber, image: product.images[0] });
    onClose();
    navigate("/checkout");
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-card border-border overflow-hidden">
        <VisuallyHidden>
          <DialogTitle>{product.name}</DialogTitle>
        </VisuallyHidden>
        
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Gallery */}
          <div className="bg-charcoal p-6">
            {/* Main Image */}
            <div className="relative aspect-square mb-4 flex items-center justify-center">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - imagem ${selectedImage + 1}`}
                className="max-h-full max-w-full object-contain animate-fade-in"
              />
              
              {/* Navigation arrows */}
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-background/80 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 justify-center">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    idx === selectedImage
                      ? "border-primary ring-2 ring-primary/50"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    className="w-full h-full object-contain bg-charcoal-light p-1"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < product.rating ? "fill-primary text-primary" : "text-muted"}
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">({product.rating}.0) • 127 avaliações</span>
              </div>

              {/* Name */}
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                {product.name}
              </h2>

              {/* Description */}
              <p className="text-muted-foreground">
                {product.description}
              </p>

              {/* Price */}
              <div className="bg-muted/30 rounded-xl p-4 space-y-2">
                {product.originalPrice && (
                  <p className="text-muted-foreground text-sm line-through">{product.originalPrice}</p>
                )}
                <div className="flex items-center gap-3">
                  <p className="text-3xl font-display font-bold text-gradient-gold">{product.price}</p>
                  {product.originalPrice && (
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -50%
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  ou 3x de R$ {(product.priceNumber / 3).toFixed(2).replace(".", ",")} sem juros
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-primary" />
                  <span>Frete Grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Garantia 5 Anos</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mt-6">
              <Button variant="hero" size="lg" className="w-full text-lg py-6" onClick={handleBuyNow}>
                <ShoppingCart className="w-5 h-5 mr-2" />
                COMPRAR AGORA
              </Button>
              <Button variant="outline" size="lg" className="w-full" onClick={handleAddToCart}>
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
