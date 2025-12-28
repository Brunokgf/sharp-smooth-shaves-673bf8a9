import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import PromoBanner from "@/components/PromoBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
