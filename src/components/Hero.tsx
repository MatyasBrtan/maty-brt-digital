import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-[hsl(var(--hero-gradient-end))] text-primary-foreground">
      <div className="container-custom text-center space-y-8 py-20 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Matyáš Brtáň
        </h1>
        <div className="w-20 h-1 bg-accent mx-auto"></div>
        <p className="text-xl md:text-2xl lg:text-3xl font-light text-primary-foreground/90 max-w-3xl mx-auto">
          Programování, technologie a moderní přístup k digitálním řešením
        </p>
        <p className="text-base md:text-lg text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Věnuji se programování, technologiím a digitalizaci procesů. Baví mě vytvářet 
          jednoduchá, funkční a moderní řešení — od osobních projektů po webové 
          prezentace pro malé podniky.
        </p>
        <Button 
          onClick={scrollToAbout}
          size="lg"
          variant="outline"
          className="mt-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary group"
        >
          Zjistit více
          <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
