import { useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, CreditCard, QrCode, Copy, Check, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { QRCodeSVG } from "qrcode.react";
import { supabase } from "@/integrations/supabase/client";

interface PixData {
  pixCode: string;
  pixCopyPaste: string;
  transactionId: string;
  expiresAt?: string;
}

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card">("pix");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pixData, setPixData] = useState<PixData | null>(null);
  const [copied, setCopied] = useState(false);

  // Form state for PIX
  const [pixForm, setPixForm] = useState({
    nome: "",
    email: "",
    cpf: "",
  });

  const handlePixSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('create-pix', {
        body: {
          amount: totalPrice,
          customerName: pixForm.nome,
          customerEmail: pixForm.email,
          customerDocument: pixForm.cpf,
          items: items.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      });

      if (error) throw error;

      if (data.success) {
        setPixData({
          pixCode: data.pixCode,
          pixCopyPaste: data.pixCopyPaste,
          transactionId: data.transactionId,
          expiresAt: data.expiresAt,
        });
        toast({
          title: "PIX gerado com sucesso!",
          description: "Escaneie o QR Code ou copie o código para pagar.",
        });
      } else {
        throw new Error(data.error || 'Erro ao gerar PIX');
      }
    } catch (error) {
      console.error('PIX error:', error);
      toast({
        title: "Erro ao gerar PIX",
        description: error instanceof Error ? error.message : "Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyPixCode = async () => {
    if (pixData?.pixCopyPaste) {
      await navigator.clipboard.writeText(pixData.pixCopyPaste);
      setCopied(true);
      toast({
        title: "Código copiado!",
        description: "Cole no seu app de banco para pagar.",
      });
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleCardSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

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

      clearCart();
      navigate("/compra-concluida");
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
                onClick={() => {
                  setPaymentMethod("pix");
                  setPixData(null);
                }}
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
              pixData ? (
                <div className="text-center space-y-6 py-4">
                  <div className="bg-white p-4 rounded-xl inline-block mx-auto">
                    <QRCodeSVG 
                      value={pixData.pixCopyPaste || pixData.pixCode} 
                      size={200}
                      level="H"
                    />
                  </div>
                  <div className="space-y-3">
                    <p className="text-muted-foreground text-sm">
                      Escaneie o QR Code ou copie o código abaixo
                    </p>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground break-all font-mono">
                        {pixData.pixCopyPaste?.substring(0, 50)}...
                      </p>
                    </div>
                    <Button 
                      variant="premium" 
                      className="w-full"
                      onClick={copyPixCode}
                    >
                      {copied ? (
                        <>
                          <Check size={18} className="mr-2" />
                          Código Copiado!
                        </>
                      ) : (
                        <>
                          <Copy size={18} className="mr-2" />
                          Copiar Código PIX
                        </>
                      )}
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      clearCart();
                      navigate("/");
                      toast({
                        title: "Obrigado!",
                        description: "Seu pagamento será confirmado em instantes.",
                      });
                    }}
                  >
                    Já fiz o pagamento
                  </Button>
                </div>
              ) : (
                <form onSubmit={handlePixSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="pix-nome">Nome Completo</Label>
                    <Input 
                      id="pix-nome" 
                      required 
                      placeholder="Seu nome"
                      value={pixForm.nome}
                      onChange={(e) => setPixForm({...pixForm, nome: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pix-email">Email</Label>
                    <Input 
                      id="pix-email" 
                      type="email" 
                      required 
                      placeholder="seu@email.com"
                      value={pixForm.email}
                      onChange={(e) => setPixForm({...pixForm, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pix-cpf">CPF</Label>
                    <Input 
                      id="pix-cpf" 
                      required 
                      placeholder="000.000.000-00"
                      value={pixForm.cpf}
                      onChange={(e) => setPixForm({...pixForm, cpf: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="mr-2 animate-spin" />
                        Gerando PIX...
                      </>
                    ) : (
                      <>
                        <QrCode size={18} className="mr-2" />
                        Gerar QR Code PIX
                      </>
                    )}
                  </Button>
                </form>
              )
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
