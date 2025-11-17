const About = () => {
  return (
    <section id="about" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              O mně
            </h2>
            <div className="w-20 h-1 bg-accent"></div>
          </div>
          
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p>
              Jmenuji se <span className="text-foreground font-medium">Matyáš Brtáň</span> a studuji programování 
              na Gymnáziu Arabská. Zaměřuji se na praktické využití technologií, tvorbu 
              webů a systematickou práci s informacemi. Programuji primárně v <span className="text-foreground font-medium">Javě</span> a 
              zajímám se také o investování, moderní technologie a strategii digitálních 
              projektů.
            </p>
            
            <p>
              Mám zkušenosti s prací v zákaznickém prostředí (Burger Bar), logistice a 
              přípravě firemních prezentací na veletrzích (Albi, PVA Letňany) a administrativou 
              (Freya). Tyto zkušenosti mi pomáhají kombinovat technické znalosti s praktickým 
              přístupem k řešení reálných problémů.
            </p>
            
            <p>
              Do budoucna chci rozvíjet své schopnosti v oblasti softwarového vývoje, podnikání 
              a investic. Mým cílem je budovat silné profesní základy, které mi umožní pracovat 
              na komplexnějších projektech a zároveň poskytovat kvalitní služby menším firmám 
              a podnikatelům.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
