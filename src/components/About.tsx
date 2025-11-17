import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {t.about.title}
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p>
              {t.about.paragraph1.split("Pythonu").map((part, i, arr) => (
                i === arr.length - 1 ? part : (
                  <span key={i}>
                    {part}<span className="text-foreground font-medium">Pythonu</span>
                  </span>
                )
              ))}
            </p>
            
            <p>{t.about.paragraph2}</p>
            
            <p>{t.about.paragraph3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
