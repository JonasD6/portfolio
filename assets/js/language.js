// Language system with localStorage support
const languageSystem = (() => {
  const storageKey = 'portfolio-language';

  const translations = {
    nl: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'Over mij',
      'nav.projects': 'Projecten',

      // Index
      'index.title': 'Welkom op mijn E-Portfolio',
      'index.subtitle': 'Dit is mijn persoonlijke portfolio waar ik mijn projecten, vaardigheden en persoonlijke ontwikkeling voorstel.',
      'index.cta': 'Ontdek meer over mij',
      'index.projects.title': 'Mijn favoriete projecten',
      'index.projects.button': 'Bekijk alle projecten',

      'index.project1.title': 'VONQ Webshop',
      'index.project1.desc': 'Laravel webshop voor mijn eigen kledingmerk.',
      'index.project2.title': 'AI Voorspellingsmodel',
      'index.project2.desc': 'AI model dat defecte auto\'s voorspelt.',
      'index.project3.title': 'Slimme Brievenbus',
      'index.project3.desc': 'IoT-brievenbus met automatische detectie.',
      'index.project4.title': 'KVV Rauw Skill Project',
      'index.project4.desc': 'Webapp voor voetbalclub met Laravel.',
      'index.project5.title': 'Feest op Tafel Skill Project',
      'index.project5.desc': 'UX/UI prototype ontworpen in Figma.',

      // About
      'about.hero.title': 'JONAS DUERINCK',
      'about.hero.subtitle': 'Over mij',
      'about.why.title': 'Waarom IT?',
      'about.why.description': 'Ik heb interesse in technologie en hoe het onze wereld verandert. Ik werk graag ideeën uit en zet ze om in iets concreets. Daarnaast hou ik ervan om problemen op te lossen en praktische oplossingen te bedenken. In IT kan ik blijven leren en mezelf verder ontwikkelen.',
      'about.bio.p1': 'Ik ben Jonas, een gemotiveerde IT-student met een passie voor webdevelopment, technologie en innovatie.',
      'about.bio.p2': 'Ik speel voetbal bij KVC Lille United en werk in het weekend bij Mangia, waar ik pizza\'s maak.',
      'about.bio.p3': 'In mijn vrije tijd breng ik graag tijd door met mijn vriendin, ga ik regelmatig met mijn vrienden fietsen op de koersfiets en reis ik graag om nieuwe plaatsen te ontdekken.',
      'about.cv.button': 'CV bekijken',
      'about.skills': 'Soft Skills',
      'about.skill.teamwork': 'Teamwork',
      'about.skill.flexibility': 'Flexibiliteit',
      'about.skill.discipline': 'Discipline',

      // Timeline
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

      // Projects
      'projects.title': 'Mijn Projecten',
      'projects.project1.title': 'VONQ Webshop',
      'projects.project1.desc': 'Een volledige webshop ontwikkeld in Laravel voor mijn eigen kledingmerk VONQ.',
      'projects.project2.title': 'AI Voorspellingsmodel',
      'projects.project2.desc': 'Machine learning model dat voorspelt of een auto binnen 30 dagen defect raakt.',
      'projects.project3.title': 'Slimme Brievenbus',
      'projects.project3.desc': 'IoT-brievenbus die automatisch opent via camera detectie.',
      'projects.project4.title': 'KVV Rauw Skill Project',
      'projects.project4.desc': 'Groepsproject waarbij een webapplicatie voor een voetbalclub werd ontwikkeld met Laravel, inclusief agenda, inschrijvingen en carpool.',
      'projects.project5.title': 'Feest op Tafel Skill Project',
      'projects.project5.desc': 'Een UX/UI groepsproject rond het concept "Feest op Tafel", met focus op gebruiksvriendelijkheid en prototyping.',

      // Footer
      'footer.copyright': '© 2026 Jonas Duerinck',
    },

    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.about': 'About me',
      'nav.projects': 'Projects',

      // Index
      'index.title': 'Welcome to my E-Portfolio',
      'index.subtitle': 'This is my personal portfolio where I showcase my projects, skills and development.',
      'index.cta': 'Discover more about me',
      'index.projects.title': 'My favorite projects',
      'index.projects.button': 'View all projects',

      'index.project1.title': 'VONQ Webshop',
      'index.project1.desc': 'Laravel webshop for my clothing brand.',
      'index.project2.title': 'AI Prediction Model',
      'index.project2.desc': 'AI model predicting car failures.',
      'index.project3.title': 'Smart Mailbox',
      'index.project3.desc': 'IoT mailbox with automatic detection.',
      'index.project4.title': 'KVV Rauw Skill Project',
      'index.project4.desc': 'Football club web application built with Laravel.',
      'index.project5.title': 'Party on the Table Skill Project',
      'index.project5.desc': 'UX/UI prototype designed in Figma.',

      // About
      'about.hero.title': 'JONAS DUERINCK',
      'about.hero.subtitle': 'About me',
      'about.why.title': 'Why IT?',
      'about.why.description': 'I have an interest in technology and how it changes our world. I enjoy developing ideas and turning them into something concrete. I also love solving problems and coming up with practical solutions. In IT, I can keep learning and continue to grow.',
      'about.bio.p1': 'I am Jonas, a motivated IT student with a passion for web development, technology and innovation.',
      'about.bio.p2': 'I play football at KVC Lille United and work weekends at Mangia, where I make pizzas.',
      'about.bio.p3': 'In my free time I enjoy spending time with my girlfriend, regularly go cycling with friends and love travelling to discover new places.',
      'about.cv.button': 'View CV',
      'about.skills': 'Soft Skills',
      'about.skill.teamwork': 'Teamwork',
      'about.skill.flexibility': 'Flexibility',
      'about.skill.discipline': 'Discipline',

      // Timeline
      'about.timeline.title1': 'Artificial Intelligence & Application Development',
      'about.timeline.subtitle1': '2024 - 2027',
      'about.timeline.org1': 'Thomas More Geel',
      'about.timeline.title2': 'Started student job as pizza maker',
      'about.timeline.subtitle2': '2024',
      'about.timeline.org2': 'Mangia Poederlee',
      'about.timeline.title3': 'TSO Accounting & IT',
      'about.timeline.subtitle3': '2018 - 2024',
      'about.timeline.org3': 'Kardinaal Van Roey Instituut Vorselaar',
      'about.timeline.title4': 'Started playing football',
      'about.timeline.subtitle4': '2014',
      'about.timeline.org4': 'KVC Lille United',
      'about.timeline.title5': 'Born on April 11, 2006',
      'about.timeline.subtitle5': '2006',

      // Projects
      'projects.title': 'My Projects',
      'projects.project1.title': 'VONQ Webshop',
      'projects.project1.desc': 'A complete webshop developed in Laravel for my own clothing brand VONQ.',
      'projects.project2.title': 'AI Prediction Model',
      'projects.project2.desc': 'Machine learning model that predicts if a car will break down within 30 days.',
      'projects.project3.title': 'Smart Mailbox',
      'projects.project3.desc': 'IoT mailbox that automatically opens using camera detection.',
      'projects.project4.title': 'KVV Rauw Skill Project',
      'projects.project4.desc': 'Group project where a web application for a football club was developed using Laravel, including registrations, calendar and carpooling.',
      'projects.project5.title': 'Party on the Table Skill Project',
      'projects.project5.desc': 'A UX/UI group project around the concept "Party on the Table", focusing on usability and prototyping.',

      // Footer
      'footer.copyright': '© 2026 Jonas Duerinck',
    }
  };

  const setLanguage = (lang) => {
    localStorage.setItem(storageKey, lang);
    document.documentElement.lang = lang;
    updatePageContent(lang);
    updateLangButton(lang);
    window.dispatchEvent(new Event('languageChanged'));
  };

  const getCurrentLanguage = () => {
    return localStorage.getItem(storageKey) || 'nl';
  };

  const toggleLanguage = () => {
    const newLang = getCurrentLanguage() === 'nl' ? 'en' : 'nl';
    setLanguage(newLang);
  };

  const translate = (key, lang) => {
    const currentLang = lang || getCurrentLanguage();
    return translations[currentLang]?.[key] || key;
  };

  const updateLangButton = (lang) => {
    const langText = document.getElementById('langText');
    if (langText) {
      langText.textContent = lang === 'nl' ? 'NL' : 'EN';
    }
  };

  const updatePageContent = (lang) => {
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      el.textContent = translate(key, lang);
    });
  };

  document.addEventListener('DOMContentLoaded', () => {
    setLanguage(getCurrentLanguage());
    const btn = document.getElementById('langToggle');
    if (btn) btn.addEventListener('click', toggleLanguage);
  });

  return {
    set: setLanguage,
    toggle: toggleLanguage,
    get: translate
  };
})();