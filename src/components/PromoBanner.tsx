import { useState, useEffect } from "react";
import { X, Flame, Zap } from "lucide-react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 47,
    seconds: 33,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2 md:gap-4 text-center relative">
        <Flame className="w-4 h-4 md:w-5 md:h-5 animate-pulse text-yellow-300" />
        
        <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
          <span className="font-bold text-xs md:text-sm uppercase tracking-wide">
            🔥 OFERTA RELÂMPAGO
          </span>
          
          <span className="hidden sm:inline text-yellow-300 font-black text-sm md:text-base">
            50% OFF
          </span>
          
          <div className="flex items-center gap-1 bg-black/30 rounded px-2 py-1">
            <Zap className="w-3 h-3 text-yellow-300" />
            <span className="font-mono font-bold text-xs md:text-sm">
              {formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </span>
          </div>
          
          <span className="text-xs md:text-sm font-medium hidden md:inline">
            Frete Grátis + Brinde Exclusivo
          </span>
        </div>

        <Flame className="w-4 h-4 md:w-5 md:h-5 animate-pulse text-yellow-300" />

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 md:right-4 p-1 hover:bg-white/20 rounded transition-colors"
          aria-label="Fechar banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
