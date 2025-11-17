import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

const Experience = () => {
  const experiences = [
    {
      type: "education",
      title: "Gymnázium Arabská",
      subtitle: "Studium programování",
      period: "Současnost",
      description: "Zaměření na praktické využití technologií a systematickou práci s informacemi",
    },
    {
      type: "work",
      title: "Freya",
      subtitle: "Administrativa",
      description: "Práce s administrativními procesy a organizací",
    },
    {
      type: "work",
      title: "Albi, PVA Letňany",
      subtitle: "Veletrhy",
      description: "Logistika a příprava firemních prezentací na veletrzích",
    },
    {
      type: "work",
      title: "Burger Bar",
      subtitle: "Zákaznický servis",
      description: "Práce v zákaznickém prostředí, komunikace a týmová spolupráce",
    },
  ];

  return (
    <section id="experience" className="section-spacing bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Zkušenosti
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground">
              Vzdělání a pracovní zkušenosti
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    {exp.type === "education" ? (
                      <GraduationCap className="h-6 w-6 text-accent" />
                    ) : (
                      <Briefcase className="h-6 w-6 text-accent" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      {exp.period && (
                        <span className="text-sm text-accent font-medium">
                          {exp.period}
                        </span>
                      )}
                    </div>
                    <p className="text-base font-medium text-muted-foreground mb-2">
                      {exp.subtitle}
                    </p>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
