import { Code2, Globe, TrendingUp, Database } from "lucide-react";
import { Card } from "./ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Code2,
      title: "Programování",
      description: "Java, webové technologie, systematický přístup k vývoji softwaru",
    },
    {
      icon: Globe,
      title: "Webové prezentace",
      description: "Tvorba moderních webových řešení pro malé podniky a podnikatele",
    },
    {
      icon: TrendingUp,
      title: "Investování",
      description: "Zájem o finanční trhy, investiční strategie a dlouhodobé plánování",
    },
    {
      icon: Database,
      title: "Digitalizace",
      description: "Systematická práce s informacemi a digitalizace procesů",
    },
  ];

  return (
    <section id="skills" className="section-spacing bg-muted">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Dovednosti
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
            <p className="text-lg text-muted-foreground">
              Oblasti, kterým se věnuji a dále rozvíjím
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <skill.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {skill.description}
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

export default Skills;
