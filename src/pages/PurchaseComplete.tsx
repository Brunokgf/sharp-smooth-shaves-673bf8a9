import { CheckCircle, Package, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PurchaseComplete = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12">
      <div className="container mx-auto px-6 max-w-lg">
        <div className="bg-gradient-card rounded-xl border border-border/50 p-8 text-center space-y-6">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-display font-bold text-gradient-gold">
              Compra Concluída!
            </h1>
            <p className="text-muted-foreground">
              Seu pedido foi recebido com sucesso.
            </p>
          </div>

          <div className="bg-muted/30 rounded-lg p-4 space-y-3">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Package size={20} />
              <span className="font-semibold">Próximos passos</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2 text-left">
              <li>• Você receberá um email com os detalhes do pedido</li>
              <li>• Processaremos seu pagamento em instantes</li>
              <li>• Enviaremos o código de rastreamento por email</li>
            </ul>
          </div>

          <div className="pt-4">
            <Button 
              variant="premium" 
              className="w-full"
              onClick={() => navigate("/")}
            >
              <ArrowLeft size={18} className="mr-2" />
              Voltar às compras
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Obrigado por comprar conosco! 💈
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseComplete;
