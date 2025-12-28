import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, QrCode } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Adicionar informações do pedido ao formulário
    const orderDetails = items
      .map((item) => `${item.name} x${item.quantity} - R$${(item.price * item.quantity).toFixed(2)}`)
      .join("\n");
    formData.append("pedido", orderDetails);
    formData.append("total", `R$ ${totalPrice.toFixed(2).replace(".", ",")}`);

    try {
      await fetch("https://formsubmit.co/ajax/rubenscardosoaguiar@gmail.com", {
        method: "POST",
        body: formData,
      });

      toast({
        title: "Pedido enviado!",
        description: "Você receberá as instruções de pagamento por email.",
      });
      clearCart();
      navigate("/");
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-display font-bold">Carrinho vazio</h1>
          <Button variant="premium" onClick={() => navigate("/")}>
            Voltar às compras
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate("/")}
        >
          <ArrowLeft size={18} className="mr-2" />
          Voltar
        </Button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resumo do pedido */}
          <div className="bg-gradient-card rounded-xl border border-border/50 p-6 space-y-4">
            <h2 className="text-xl font-display font-bold">Resumo do Pedido</h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-contain bg-charcoal rounded"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-muted-foreground text-sm">Qtd: {item.quantity}</p>
                    <p className="text-primary font-bold">
                      R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 flex justify-between">
              <span className="font-semibold">Total</span>
              <span className="text-2xl font-display font-bold text-gradient-gold">
                R$ {totalPrice.toFixed(2).replace(".", ",")}
              </span>
            </div>
          </div>

          {/* Formulário de pagamento */}
          <div className="bg-gradient-card rounded-xl border border-border/50 p-6 space-y-6">
            <h2 className="text-xl font-display font-bold">Forma de Pagamento</h2>

            {/* Seletor de método */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("pix")}
                className={`p-4 rounded-lg border transition-all flex flex-col items-center gap-2 ${
                  paymentMethod === "pix"
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <QrCode size={24} className={paymentMethod === "pix" ? "text-primary" : ""} />
                <span className="font-semibold">PIX</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`p-4 rounded-lg border transition-all flex flex-col items-center gap-2 ${
                  paymentMethod === "card"
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <CreditCard size={24} className={paymentMethod === "card" ? "text-primary" : ""} />
                <span className="font-semibold">Cartão</span>
              </button>
            </div>

            {paymentMethod === "pix" ? (
              <div className="text-center space-y-4 py-8">
                <p className="text-muted-foreground">
                  Para pagamento via PIX, habilite o Cloud para integrar com a API de pagamentos.
                </p>
                <Button variant="outline" disabled>
                  Gerar QR Code PIX
                </Button>
              </div>
            ) : (
              <form onSubmit={handleCardSubmit} className="space-y-4">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="Novo Pedido - Blade Pro" />

                <div className="space-y-2">
                  <Label htmlFor="nome">Nome Completo</Label>
                  <Input id="nome" name="nome" required placeholder="Seu nome" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="telefone">Telefone</Label>
                  <Input id="telefone" name="telefone" required placeholder="(00) 00000-0000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endereco">Endereço Completo</Label>
                  <Input id="endereco" name="endereco" required placeholder="Rua, número, bairro, cidade - UF" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cartao">Número do Cartão</Label>
                  <Input id="cartao" name="cartao" required placeholder="0000 0000 0000 0000" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="validade">Validade</Label>
                    <Input id="validade" name="validade" required placeholder="MM/AA" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" name="cvv" required placeholder="000" />
                  </div>
                </div>

                <Button type="submit" variant="premium" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Finalizar Pedido"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
