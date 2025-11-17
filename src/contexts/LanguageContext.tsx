import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "cs" | "en";

interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  };
  skills: {
    title: string;
    subtitle: string;
    programming: {
      title: string;
      description: string;
    };
    web: {
      title: string;
      description: string;
    };
    investing: {
      title: string;
      description: string;
    };
    digitalization: {
      title: string;
      description: string;
    };
  };
  experience: {
    title: string;
    subtitle: string;
    school: {
      title: string;
      subtitle: string;
      period: string;
      description: string;
    };
    freya: {
      title: string;
      subtitle: string;
      description: string;
    };
    albi: {
      title: string;
      subtitle: string;
      description: string;
    };
    burger: {
      title: string;
      subtitle: string;
      description: string;
    };
  };
  contact: {
    title: string;
    description: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

const translations: Record<Language, Translations> = {
  cs: {
    nav: {
      home: "Domů",
      about: "O mně",
      skills: "Dovednosti",
      experience: "Zkušenosti",
      contact: "Kontakt",
    },
    hero: {
      title: "Matyáš Brtáň",
      subtitle: "Programování, technologie a moderní přístup k digitálním řešením",
      description: "Věnuji se programování, technologiím a digitalizaci procesů. Baví mě vytvářet jednoduchá, funkční a moderní řešení — od osobních projektů po webové prezentace pro malé podniky.",
      cta: "Zjistit více",
    },
    about: {
      title: "O mně",
      paragraph1: "Jmenuji se Matyáš Brtáň a studuji programování na Gymnáziu Arabská. Zaměřuji se na praktické využití technologií, tvorbu webů a systematickou práci s informacemi. Programuji primárně v Pythonu a zajímám se také o investování, moderní technologie a strategii digitálních projektů.",
      paragraph2: "Mám zkušenosti s prací v zákaznickém prostředí (Burger Bar), logistice a přípravě firemních prezentací na veletrzích (Albi, PVA Letňany) a administrativou (Freya). Tyto zkušenosti mi pomáhají kombinovat technické znalosti s praktickým přístupem k řešení reálných problémů.",
      paragraph3: "Do budoucna chci rozvíjet své schopnosti v oblasti softwarového vývoje, podnikání a investic. Mým cílem je budovat silné profesní základy, které mi umožní pracovat na komplexnějších projektech a zároveň poskytovat kvalitní služby menším firmám a podnikatelům.",
    },
    skills: {
      title: "Dovednosti",
      subtitle: "Oblasti, kterým se věnuji a dále rozvíjím",
      programming: {
        title: "Programování",
        description: "Python, webové technologie, systematický přístup k vývoji softwaru",
      },
      web: {
        title: "Webové prezentace",
        description: "Tvorba moderních webových řešení pro malé podniky a podnikatele",
      },
      investing: {
        title: "Investování",
        description: "Zájem o finanční trhy, investiční strategie a dlouhodobé plánování",
      },
      digitalization: {
        title: "Digitalizace",
        description: "Systematická práce s informacemi a digitalizace procesů",
      },
    },
    experience: {
      title: "Zkušenosti",
      subtitle: "Vzdělání a pracovní zkušenosti",
      school: {
        title: "Gymnázium Arabská",
        subtitle: "Studium programování",
        period: "Současnost",
        description: "Zaměření na praktické využití technologií a systematickou práci s informacemi",
      },
      freya: {
        title: "Freya",
        subtitle: "Administrativa",
        description: "Práce s administrativními procesy a organizací",
      },
      albi: {
        title: "Albi, PVA Letňany",
        subtitle: "Veletrhy",
        description: "Logistika a příprava firemních prezentací na veletrzích",
      },
      burger: {
        title: "Burger Bar",
        subtitle: "Zákaznický servis",
        description: "Práce v zákaznickém prostředí, komunikace a týmová spolupráce",
      },
    },
    contact: {
      title: "Kontakt",
      description: "Máte zájem o spolupráci nebo se chcete dozvědět více? Neváhejte mě kontaktovat.",
    },
    footer: {
      rights: "Všechna práva vyhrazena.",
      tagline: "Programování • Technologie • Digitální řešení",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      title: "Matyáš Brtáň",
      subtitle: "Programming, technology and modern approach to digital solutions",
      description: "I focus on programming, technology and process digitalization. I enjoy creating simple, functional and modern solutions — from personal projects to web presentations for small businesses.",
      cta: "Learn more",
    },
    about: {
      title: "About me",
      paragraph1: "My name is Matyáš Brtáň and I study programming at Gymnázium Arabská. I focus on practical use of technology, web development and systematic work with information. I primarily program in Python and I'm also interested in investing, modern technology and digital project strategy.",
      paragraph2: "I have experience working in customer service (Burger Bar), logistics and preparing corporate presentations at trade fairs (Albi, PVA Letňany) and administration (Freya). These experiences help me combine technical knowledge with a practical approach to solving real problems.",
      paragraph3: "In the future, I want to develop my skills in software development, entrepreneurship and investing. My goal is to build a strong professional foundation that will allow me to work on more complex projects while providing quality services to smaller companies and entrepreneurs.",
    },
    skills: {
      title: "Skills",
      subtitle: "Areas I focus on and continue to develop",
      programming: {
        title: "Programming",
        description: "Python, web technologies, systematic approach to software development",
      },
      web: {
        title: "Web Presentations",
        description: "Creating modern web solutions for small businesses and entrepreneurs",
      },
      investing: {
        title: "Investing",
        description: "Interest in financial markets, investment strategies and long-term planning",
      },
      digitalization: {
        title: "Digitalization",
        description: "Systematic work with information and process digitalization",
      },
    },
    experience: {
      title: "Experience",
      subtitle: "Education and work experience",
      school: {
        title: "Gymnázium Arabská",
        subtitle: "Programming Studies",
        period: "Present",
        description: "Focus on practical use of technology and systematic work with information",
      },
      freya: {
        title: "Freya",
        subtitle: "Administration",
        description: "Work with administrative processes and organization",
      },
      albi: {
        title: "Albi, PVA Letňany",
        subtitle: "Trade Fairs",
        description: "Logistics and preparation of corporate presentations at trade fairs",
      },
      burger: {
        title: "Burger Bar",
        subtitle: "Customer Service",
        description: "Work in customer environment, communication and teamwork",
      },
    },
    contact: {
      title: "Contact",
      description: "Interested in collaboration or want to know more? Don't hesitate to contact me.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Programming • Technology • Digital Solutions",
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("cs");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
