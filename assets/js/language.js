// Language system with localStorage support
const languageSystem = (() => {
  const storageKey = 'portfolio-language';
  
  // All translations
  const translations = {
    nl: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'Over mij',
      'nav.projects': 'Projecten',
      
      // Index.html
      'index.title': 'Welkom op mijn E-Portfolio',
      'index.subtitle': 'Dit is mijn persoonlijke portfolio waar ik mijn projecten, vaardigheden en persoonlijke ontwikkeling voorstel. Hier kan je meer ontdekken over wie ik ben, wat ik doe en hoe ik mezelf wil ontwikkelen in de toekomst.',
      'index.cta': 'Ontdek meer over mij',
      'index.projects.title': 'Mijn favoriete projecten',
      'index.projects.button': 'Bekijk alle projecten',
      'index.project1.title': 'VONQ Webshop',
      'index.project1.desc': 'Een zelf ontwikkelde webshop in Laravel waar ik mijn eigen kledingmerk VONQ verkoop.',
      'index.project2.title': 'AI Voorspellingsmodel',
      'index.project2.desc': 'Machine learning model dat voorspelt of een auto binnen 30 dagen defect raakt.',
      'index.project3.title': 'Slimme Brievenbus',
      'index.project3.desc': 'IoT-brievenbus met camera en sensoren die automatisch opent en meldingen verstuurt.',
      'index.project4.title': 'Skill Project',
      'index.project4.desc': 'Groepsproject: webapplicatie voor voetbalclub met Laravel, inclusief inschrijvingen, agenda en carpool.',
      
      // About.html
      'about.hero.title': 'JONAS DUERINCK',
      'about.hero.subtitle': 'Over mij',
      'about.why.title': 'Waarom IT?',
      'about.why.description': 'Ik heb interesse in technologie en hoe het onze wereld verandert. Ik werk graag ideeën uit en zet ze om in iets concreets. Daarnaast hou ik ervan om problemen op te lossen en praktische oplossingen te bedenken. In IT kan ik blijven leren en mezelf verder ontwikkelen.',
      'about.bio.p1': 'Ik ben Jonas, een gemotiveerde IT-student met een passie voor webdevelopment, technologie en innovatie.',
      'about.bio.p2': 'Ik speel voetbal bij KVC Lille United en werk in het weekend bij Mangia, waar ik pizza\'s maak.',
      'about.bio.p3': 'In mijn vrije tijd breng ik graag tijd door met mijn vriendin, ga ik regelmatig met mijn vrienden fietsen op de koersfiets en reis ik graag om nieuwe plaatsen te ontdekken.',
      'about.cv.button': 'CV',
      'about.skills': 'Soft Skills',
      'about.skill.teamwork': 'Teamwork',
      'about.skill.flexibility': 'Flexibiliteit',
      'about.skill.discipline': 'Discipline',
      'about.timeline.title1': 'Artificial Intelligence & Application Development',
      'about.timeline.subtitle1': '2024 - 2027',
      'about.timeline.org1': 'Thomas More Geel',
      'about.timeline.title2': 'Begonnen met studentenjob als pizzamaker',
      'about.timeline.subtitle2': '2024',
      'about.timeline.org2': 'Mangia Poederlee',
      'about.timeline.title3': 'TSO Boekhouden-Informatica',
      'about.timeline.subtitle3': '2018 - 2024',
      'about.timeline.org3': 'Kardinaal Van Roey Instituut Vorselaar',
      'about.timeline.title4': 'Begonnen met voetbal',
      'about.timeline.subtitle4': '2014',
      'about.timeline.org4': 'KVC Lille United',
      'about.timeline.title5': 'Geboren op 11 april 2006',
      'about.timeline.subtitle5': '2006',
      
      // Projects.html
      'projects.title': 'Mijn Projecten',
      'projects.project1.title': 'VONQ Webshop',
      'projects.project1.desc': 'Een volledige webshop ontwikkeld in Laravel voor mijn eigen kledingmerk VONQ. Gebruikers kunnen producten bekijken, toevoegen aan hun winkelmandje en aankopen doen. De site is niet langer gehost.',
      'projects.project1.tech': ['Laravel, PHP, Tailwind', 'Login & winkelmand systeem', 'Productbeheer via database', 'Admin functies', 'Mail functies'],
      'projects.project2.title': 'AI Voorspellingsmodel',
      'projects.project2.desc': 'Machine learning model dat voorspelt of een auto binnen 30 dagen defect raakt.',
      'projects.project2.tech': ['Python & Scikit-learn', 'Random Forest (bagging)', 'Conclusion matrix', 'Clusters'],
      'projects.project3.title': 'Slimme Brievenbus',
      'projects.project3.desc': 'IoT-brievenbus die automatisch opent via camera detectie. Met een lichtsensor wordt gecontroleerd of er een pakket aanwezig is.',
      'projects.project3.tech': ['IoT + AI integratie', 'BH1750 lichtsensor', 'Raspberry Pi', 'Orange Pi', 'Camera detectie'],
      'projects.project4.title': 'Skill Project',
      'projects.project4.desc': 'Een groepswerk webapplicatie ontwikkeld met Laravel.',
      'projects.project4.tech': ['Laravel, PHP', 'Groepswerk', 'Webapplicatie'],
      
      // Footer
      'footer.copyright': '© 2026 Jonas Duerinck',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About me',
      'nav.projects': 'Projects',
      
      // Index.html
      'index.title': 'Welcome to my E-Portfolio',
      'index.subtitle': 'This is my personal portfolio where I showcase my projects, skills and personal development. Here you can discover more about who I am, what I do and how I want to develop myself in the future.',
      'index.cta': 'Learn more about me',
      'index.projects.title': 'My favorite projects',
      'index.projects.button': 'View all projects',
      'index.project1.title': 'VONQ Webshop',
      'index.project1.desc': 'A self-developed webshop in Laravel where I sell my own clothing brand VONQ.',
      'index.project2.title': 'AI Prediction Model',
      'index.project2.desc': 'Machine learning model that predicts whether a car will break down within 30 days.',
      'index.project3.title': 'Smart Mailbox',
      'index.project3.desc': 'IoT mailbox with camera and sensors that automatically opens and sends notifications.',
      'index.project4.title': 'Skill Project',
      'index.project4.desc': 'Group project: web application for football club with Laravel, including registrations, calendar and carpool.',
      
      // About.html
      'about.hero.title': 'JONAS DUERINCK',
      'about.hero.subtitle': 'About me',
      'about.why.title': 'Why IT?',
      'about.why.description': 'I have an interest in technology and how it changes our world. I enjoy developing ideas and turning them into something concrete. I also love solving problems and coming up with practical solutions. In IT, I can keep learning and develop myself further.',
      'about.bio.p1': 'I am Jonas, a motivated IT student with a passion for web development, technology and innovation.',
      'about.bio.p2': 'I play football at KVC Lille United and work on weekends at Mangia, where I make pizzas.',
      'about.bio.p3': 'In my free time I enjoy spending time with my girlfriend, cycling regularly with my friends on my road bike and I love to travel to discover new places.',
      'about.cv.button': 'CV',
      'about.skills': 'Soft Skills',
      'about.skill.teamwork': 'Teamwork',
      'about.skill.flexibility': 'Flexibility',
      'about.skill.discipline': 'Discipline',
      'about.timeline.title1': 'Artificial Intelligence & Application Development',
      'about.timeline.subtitle1': '2024 - 2027',
      'about.timeline.org1': 'Thomas More Geel',
      'about.timeline.title2': 'Started as a pizza maker at a student job',
      'about.timeline.subtitle2': '2024',
      'about.timeline.org2': 'Mangia Poederlee',
      'about.timeline.title3': 'TSO Accounting-Informatics',
      'about.timeline.subtitle3': '2018 - 2024',
      'about.timeline.org3': 'Kardinaal Van Roey Instituut Vorselaar',
      'about.timeline.title4': 'Started playing football',
      'about.timeline.subtitle4': '2014',
      'about.timeline.org4': 'KVC Lille United',
      'about.timeline.title5': 'Born on April 11, 2006',
      'about.timeline.subtitle5': '2006',
      
      // Projects.html
      'projects.title': 'My Projects',
      'projects.project1.title': 'VONQ Webshop',
      'projects.project1.desc': 'A complete webshop developed in Laravel for my own clothing brand VONQ. Users can view products, add them to their shopping cart and make purchases. The site is no longer hosted.',
      'projects.project1.tech': ['Laravel, PHP, Tailwind', 'Login & shopping cart system', 'Product management via database', 'Admin features', 'Mail functions'],
      'projects.project2.title': 'AI Prediction Model',
      'projects.project2.desc': 'Machine learning model that predicts whether a car will break down within 30 days.',
      'projects.project2.tech': ['Python & Scikit-learn', 'Random Forest (bagging)', 'Confusion matrix', 'Clusters'],
      'projects.project3.title': 'Smart Mailbox',
      'projects.project3.desc': 'IoT mailbox that automatically opens via camera detection. A light sensor is used to check if a package is present.',
      'projects.project3.tech': ['IoT + AI integration', 'BH1750 light sensor', 'Raspberry Pi', 'Orange Pi', 'Camera detection'],
      'projects.project4.title': 'Skill Project',
      'projects.project4.desc': 'A group work web application developed with Laravel.',
      'projects.project4.tech': ['Laravel, PHP', 'Group work', 'Web application'],
      
      // Footer
      'footer.copyright': '© 2026 Jonas Duerinck',
    }
  };

  const initLanguage = () => {
    const savedLang = localStorage.getItem(storageKey) || 'nl';
    setLanguage(savedLang);
  };

  const setLanguage = (lang) => {
    if (!translations[lang]) lang = 'nl';
    
    localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
    updatePageContent(lang);
    updateLangButton(lang);
  };

  const getCurrentLanguage = () => {
    return localStorage.getItem(storageKey) || 'nl';
  };

  const toggleLanguage = () => {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'nl' ? 'en' : 'nl';
    setLanguage(newLang);
  };

  const translate = (key, lang) => {
    const currentLang = lang || getCurrentLanguage();
    return translations[currentLang]?.[key] || (translations['nl']?.[key] || key);
  };

  const updateLangButton = (lang) => {
    const langText = document.getElementById('langText');
    if (langText) {
      langText.textContent = lang === 'nl' ? 'NL' : 'EN';
    }
  };

  const updatePageContent = (lang) => {
    // Update navigation links
    const navLinks = document.querySelectorAll('nav a[href*=".html"]');
    navLinks.forEach(link => {
      if (link.getAttribute('href').includes('index.html')) {
        link.textContent = translate('nav.home', lang);
      } else if (link.getAttribute('href').includes('about.html')) {
        link.textContent = translate('nav.about', lang);
      } else if (link.getAttribute('href').includes('projects.html')) {
        link.textContent = translate('nav.projects', lang);
      }
    });

    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = translate(key, lang);
      
      if (element.tagName === 'INPUT' || element.tagName === 'BUTTON') {
        element.placeholder = translation;
        element.value = translation;
      } else {
        element.textContent = translation;
      }
    });

    // Dynamic project tech lists if present
    const techListItems = document.querySelectorAll('[data-translate-tech]');
    techListItems.forEach(item => {
      const index = parseInt(item.getAttribute('data-translate-tech'));
      const projectNum = item.closest('[data-project-num]')?.getAttribute('data-project-num');
      if (projectNum) {
        const techKey = `projects.project${projectNum}.tech`;
        const techs = translate(techKey, lang);
        if (Array.isArray(techs) && techs[index]) {
          item.textContent = techs[index];
        }
      }
    });

    // Dispatch custom event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
  };

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();

    // Setup language toggle button
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        toggleLanguage();
      });
    }
  });

  // Export public methods
  return {
    get: translate,
    set: setLanguage,
    toggle: toggleLanguage,
    current: getCurrentLanguage,
  };
})();
