(function () {
  const root = document.createElement("div");
  root.className = "chatbot-root";
  root.innerHTML = `
    <button class="chatbot-toggle" aria-label="Open chatbot" title="Chat met de chatbot">
      <i class="fas fa-comments"></i>
    </button>

    <section class="chatbot-panel" aria-live="polite" aria-label="Chatbot venster">
      <header class="chatbot-header">
        <div>
          <strong>Portfolio Bot</strong>
          <p>Stel een vraag over Jonas of zijn projecten.</p>
        </div>
        <button class="chatbot-close" aria-label="Sluit chatbot">
          <i class="fas fa-xmark"></i>
        </button>
      </header>

      <div class="chatbot-messages" id="chatbotMessages"></div>

      <form class="chatbot-form" id="chatbotForm">
        <input id="chatbotInput" type="text" placeholder="Typ je vraag..." autocomplete="off" />
        <button type="submit">Verstuur</button>
      </form>
    </section>
  `;

  document.body.appendChild(root);

  const toggleBtn = root.querySelector(".chatbot-toggle");
  const closeBtn = root.querySelector(".chatbot-close");
  const panel = root.querySelector(".chatbot-panel");
  const form = root.querySelector("#chatbotForm");
  const input = root.querySelector("#chatbotInput");
  const messages = root.querySelector("#chatbotMessages");

  function addMessage(sender, text) {
    const bubble = document.createElement("div");
    bubble.className = "chatbot-message " + sender;
    bubble.textContent = text;
    messages.appendChild(bubble);
    messages.scrollTop = messages.scrollHeight;
  }

  function getReply(message) {
    const text = message
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s]/g, " ")
      .trim();
    const words = text.split(/\s+/).filter(Boolean);

    function hasWord(keywords) {
      return keywords.some(function (keyword) {
        return words.includes(keyword);
      });
    }

    function hasPhrase(phrases) {
      return phrases.some(function (phrase) {
        return text.includes(phrase);
      });
    }

    function getCurrentAge() {
      const birthDate = new Date(2006, 3, 11);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age -= 1;
      }

      return age;
    }

    // Greeting responses
    if (hasWord(["hallo", "hey", "hi", "hello", "goedemorgen", "goeiedag", "goedendag", "hai", "hoi"])) {
      return "Hallo! Ik ben de Portfolio Bot. Ik kan je alles vertellen over Jonas, zijn projecten, achtergrond en meer. Wat wil je weten?";
    }

    // Age and birth information
    if (
      hasPhrase(["hoe oud", "oud is jonas", "how old", "old is jonas", "wat is zijn leeftijd", "what is his age"]) ||
      hasWord(["leeftijd", "age", "geboren", "birth", "geboortedatum", "birthday"])
    ) {
      return "Jonas is " + getCurrentAge() + " jaar oud. Hij is geboren op 11 april 2006.";
    }

    // Education and studies
    if (
      hasWord(["opleiding", "opleidingen", "studie", "studeert", "gestudeerd", "education", "study", "degree", "school", "universiteit", "university", "thomas", "more", "geel", "kardinaal", "van", "roey", "vorselaar", "tso", "boekhouden", "informatica", "accounting", "informatics"])
    ) {
      if (hasWord(["thomas", "more", "geel", "ai", "artificial", "intelligence", "application", "development", "huidig", "current", "nu", "now"])) {
        return "Momenteel studeert Jonas Artificial Intelligence & Application Development aan Thomas More Geel (2024-2027).";
      }
      if (hasWord(["middelbaar", "secondary", "school", "kardinaal", "van", "roey", "vorselaar", "tso", "boekhouden", "informatica"])) {
        return "Jonas heeft TSO Boekhouden-Informatica gedaan aan het Kardinaal Van Roey Instituut in Vorselaar (2018-2024).";
      }
      return "Jonas volgt momenteel Artificial Intelligence & Application Development aan Thomas More Geel (2024-2027). Daarvoor deed hij TSO Boekhouden-Informatica aan het Kardinaal Van Roey Instituut Vorselaar (2018-2024).";
    }

    // Why IT
    if (
      hasPhrase(["waarom it", "why it", "waarom heeft hij voor it gekozen", "why did he choose it", "waarom it studeren", "why study it"]) ||
      ((hasWord(["waarom", "why"]) || hasWord(["gekozen", "choose", "chose", "kiezen", "chosen"])) && hasWord(["it", "informatica", "computer", "tech", "technologie", "technology"]))
    ) {
      return "Jonas koos voor IT omdat hij interesse heeft in technologie en hoe die de wereld verandert. Hij werkt graag ideeën uit, zet ze om in iets concreets en vindt het leuk om problemen praktisch op te lossen. In IT kan hij blijven leren en zichzelf verder ontwikkelen.";
    }

    // Hobbies and free time
    if (
      hasWord(["hobby", "hobbies", "vrije", "free", "tijd", "time", "voetbal", "football", "soccer", "fietsen", "cycling", "koersfiets", "road", "bike", "vriendin", "girlfriend", "reizen", "travel", "reis", "trip", "ontdekken", "discover"]) ||
      hasPhrase(["vrije tijd", "free time", "wat doet hij in zijn vrije tijd", "what does he do in his free time"])
    ) {
      if (hasWord(["voetbal", "football", "soccer", "kvc", "lille", "united"])) {
        return "Jonas speelt voetbal bij KVC Lille United sinds 2014.";
      }
      if (hasWord(["fietsen", "cycling", "koersfiets", "road", "bike"])) {
        return "Jonas gaat graag fietsen met zijn vrienden op de koersfiets.";
      }
      if (hasWord(["vriendin", "girlfriend", "partner"])) {
        return "In zijn vrije tijd brengt Jonas graag tijd door met zijn vriendin.";
      }
      if (hasWord(["reizen", "travel", "reis", "trip", "ontdekken", "discover"])) {
        return "Jonas reist graag om nieuwe plaatsen te ontdekken.";
      }
      return "In zijn vrije tijd voetbalt Jonas bij KVC Lille United, fietst hij graag op de koersfiets met vrienden, brengt hij tijd door met zijn vriendin en reist hij graag.";
    }

    // Work and job experience
    if (
      hasWord(["werk", "job", "werkervaring", "ervaring", "experience", "mangia", "pizza", "pizzamaker", "studentenjob", "parttime", "weekend", "werken", "working"]) ||
      hasPhrase(["wat doet hij voor werk", "what does he do for work", "waar werkt hij", "where does he work"])
    ) {
      return "Jonas werkt sinds 2024 als pizzamaker bij Mangia in Poederlee. Dit is een studentenjob in het weekend.";
    }

    // Soft skills
    if (
      hasWord(["skill", "skills", "vaardigheden", "soft", "teamwork", "flexibiliteit", "discipline", "flexibility"]) ||
      hasPhrase(["soft skills", "wat zijn zijn soft skills", "what are his soft skills"])
    ) {
      return "Jonas zijn soft skills zijn: Teamwork (90%), Flexibiliteit (80%) en Discipline (85%). Je kunt ze visueel zien op de 'Over mij' pagina met gekleurde ringen.";
    }

    // Timeline and history
    if (
      hasWord(["tijdlijn", "timeline", "wanneer", "chronologie", "geschiedenis", "history", "leven", "life", "verleden", "past"]) ||
      hasPhrase(["wat heeft hij gedaan", "what did he do", "vertel zijn verhaal", "tell his story"])
    ) {
      return "Hier is Jonas zijn tijdlijn: Geboren in 2006, gestart met voetbal bij KVC Lille United in 2014, TSO Boekhouden-Informatica (2018-2024) aan Kardinaal Van Roey Instituut Vorselaar, begonnen met studentenjob bij Mangia in 2024, en nu Artificial Intelligence & Application Development (2024-2027) aan Thomas More Geel.";
    }

    // CV and resume
    if (
      hasWord(["cv", "resume", "curriculum", "vitae", "download", "downloaden", "pdf"]) ||
      hasPhrase(["waar kan ik zijn cv vinden", "where can i find his cv", "hoe download ik zijn cv", "how do i download his cv"])
    ) {
      return "Je kunt Jonas zijn CV downloaden op de 'Over mij' pagina via de 'Download CV' knop. Het is een PDF bestand.";
    }

    // Contact information
    if (
      hasWord(["contact", "linkedin", "github", "mail", "email", "bereiken", "reach", "contactgegevens", "contact information"]) ||
      hasPhrase(["hoe kan ik hem contacteren", "how can i contact him", "hoe bereik ik hem", "how do i reach him"])
    ) {
      return "Je kunt Jonas bereiken via LinkedIn (linkedin.com/in/jonas-duerinck-3267ba331) of GitHub (github.com/JonasD6). Beide links vind je in de footer van elke pagina.";
    }

    // Projects overview
    if (
      hasWord(["project", "projecten", "portfolio", "werk", "work"]) &&
      !hasWord(["vonq", "webshop", "ai", "voorspellingsmodel", "prediction", "model", "slimme", "brievenbus", "mailbox", "smart", "skill"])
    ) {
      return "Jonas heeft 4 projecten: 1) VONQ Webshop (Laravel webshop voor kledingmerk), 2) AI Voorspellingsmodel (machine learning voor auto defecten), 3) Slimme Brievenbus (IoT met camera en sensoren), 4) Skill Project (Laravel webapp voor voetbalclub). Bekijk ze op de 'Projecten' pagina voor meer details.";
    }

    // VONQ Webshop project
    if (
      hasWord(["vonq", "webshop", "kleding", "kledingmerk", "winkelmand", "cart", "admin", "laravel"]) ||
      hasPhrase(["vonq webshop", "v o n q", "kleding webshop"])
    ) {
      if (hasPhrase(["hoe werkt", "how does", "werking", "functionality", "meer over", "tell me more", "uitleg", "explanation"])) {
        return "De VONQ Webshop is gebouwd in Laravel voor Jonas zijn eigen kledingmerk. Features: gebruikerslogin, winkelmand systeem, productbeheer via database, admin functies voor content management, en mail functies voor notificaties. De site is helaas niet meer online.";
      }
      return "De VONQ Webshop is een Laravel webshop voor Jonas zijn kledingmerk VONQ. Het heeft login, winkelmand, database beheer en admin functies.";
    }

    // AI Prediction Model project
    if (
      hasWord(["ai", "voorspellingsmodel", "prediction", "model", "machine", "learning", "random", "forest", "scikit", "cluster", "defect", "auto", "car", "voorspellen", "predict"]) ||
      hasPhrase(["ai model", "voorspellings model", "machine learning"])
    ) {
      if (hasPhrase(["hoe werkt", "how does", "werking", "hoe voorspelt", "how predicts", "meer over", "tell me more"])) {
        return "Het AI model voorspelt of een auto binnen 30 dagen defect raakt. Het gebruikt Python en Scikit-learn met Random Forest (bagging techniek). Evaluatie gebeurt via confusion matrix en het model werkt met clusters van data.";
      }
      return "Het AI project gebruikt machine learning om te voorspellen of een auto binnen 30 dagen defect raakt. Technologieën: Python, Scikit-learn, Random Forest, confusion matrix, clusters.";
    }

    // Smart Mailbox project
    if (
      hasWord(["slimme", "brievenbus", "mailbox", "smart", "iot", "camera", "sensor", "lichtsensor", "bh1750", "raspberry", "orange", "pi", "detectie", "herkenning", "notificatie", "notification"]) ||
      hasPhrase(["slimme brievenbus", "smart mailbox", "iot project"])
    ) {
      if (hasPhrase(["hoe werkt", "how does", "werking", "hoe doet het", "how does it", "meer over", "tell me more"])) {
        return "De slimme brievenbus opent automatisch via camera detectie. Een BH1750 lichtsensor controleert of er een pakket is. Het gebruikt Raspberry Pi en Orange Pi hardware. Features: notificaties, reclame filtering, en automatische opening.";
      }
      return "De slimme brievenbus is een IoT project met camera detectie, lichtsensor (BH1750), Raspberry Pi/Orange Pi hardware, notificaties en reclame filtering.";
    }

    // Skill Project
    if (
      hasWord(["skill", "groepswerk", "group", "voetbalclub", "football", "club", "laravel", "webapp", "webapplicatie", "inschrijvingen", "registrations", "agenda", "carpool", "bestellen", "ordering", "kledij", "clothing"]) ||
      hasPhrase(["skill project", "groep project", "voetbal club", "football club"])
    ) {
      if (hasPhrase(["hoe werkt", "how does", "werking", "wat doet het", "what does it do", "meer over", "tell me more"])) {
        return "Het Skill Project is een Laravel webapplicatie voor een voetbalclub. Het centraliseert clubactiviteiten: inschrijvingen voor evenementen, agenda beheer, carpool systeem voor vervoer, en bestellen van clubkledij. Het is een groepsproject dat nog online staat op kvvrauw.davidmaat.be.";
      }
      return "Het Skill Project is een groepsproject: Laravel webapp voor voetbalclub met inschrijvingen, agenda, carpool systeem en bestellen van clubkledij. Live op: https://kvvrauw.davidmaat.be/";
    }

    // Navigation and site features
    if (
      hasWord(["navigatie", "navigation", "menu", "pagina", "page", "home", "about", "over", "mij", "projecten", "projects"]) ||
      hasPhrase(["hoe navigeer ik", "how do i navigate", "welke pagina's", "which pages"])
    ) {
      return "De site heeft 3 hoofdpagina's: Home (met intro en favoriete projecten), Over mij (achtergrond, skills, tijdlijn, CV download), en Projecten (gedetailleerde projectbeschrijvingen). Gebruik de navbar om te navigeren.";
    }

    // Theme/Light-Dark mode
    if (
      hasWord(["thema", "theme", "dark", "light", "modus", "mode", "achtergrond", "background", "kleur", "color"]) ||
      hasPhrase(["dark mode", "light mode", "hoe verander ik het thema", "how do i change the theme"])
    ) {
      return "De site heeft een light/dark mode toggle in de navbar (zon/maan icoon). Je keuze wordt automatisch opgeslagen in je browser.";
    }

    // Language toggle
    if (
      hasWord(["taal", "language", "nederlands", "engels", "dutch", "english", "nl", "en", "vertaling", "translation"]) ||
      hasPhrase(["hoe verander ik de taal", "how do i change the language", "language switch"])
    ) {
      return "Je kunt wisselen tussen Nederlands en Engels via de taal toggle (NL/EN) in de navbar rechtsboven. Alle content wordt vertaald en je keuze wordt onthouden.";
    }

    // Chatbot itself
    if (
      hasWord(["chatbot", "bot", "chat", "assistent", "assistant", "help", "helpen", "vragen", "questions"]) ||
      hasPhrase(["wat kun je", "what can you", "wat weet je", "what do you know", "waarvoor ben je", "what are you for"])
    ) {
      return "Ik ben de Portfolio Bot! Ik kan je alles vertellen over Jonas: zijn leeftijd, opleiding, werk, hobbies, skills, projecten (VONQ webshop, AI model, slimme brievenbus, Skill project), tijdlijn, contact info, en hoe de site werkt. Stel gerust vragen in het Nederlands of Engels!";
    }

    // About page content
    if (
      hasPhrase(["over mij", "about me", "wie ben jonas", "who is jonas", "wie is hij", "who is he"]) ||
      hasWord(["achtergrond", "background", "profiel", "profile", "bio", "biografie", "biography"])
    ) {
      return "Op de 'Over mij' pagina vind je Jonas zijn achtergrond, waarom hij voor IT koos, zijn soft skills (teamwork, flexibiliteit, discipline), tijdlijn van zijn leven, en een CV download. Hij is een gemotiveerde IT student met passie voor webdevelopment en innovatie.";
    }

    // Footer and copyright
    if (
      hasWord(["footer", "copyright", "auteursrecht", "2026", "jaar", "year"]) ||
      hasPhrase(["wie heeft dit gemaakt", "who made this", "copyright"])
    ) {
      return "Deze portfolio website is gemaakt door Jonas Duerinck in 2026. Alle rechten voorbehouden.";
    }

    // Default fallback
    return "Ik begrijp je vraag niet helemaal. Ik kan je helpen met vragen over Jonas zijn leeftijd, opleiding, werk, hobbies, skills, projecten (VONQ webshop, AI model, slimme brievenbus, Skill project), tijdlijn, CV, contact info, of hoe de site werkt. Probeer het anders te formuleren of stel een specifieke vraag!";
  }

  function openChat() {
    panel.classList.add("open");
    toggleBtn.classList.add("hidden");
    setTimeout(function () {
      input.focus();
    }, 120);
  }

  function closeChat() {
    panel.classList.remove("open");
    toggleBtn.classList.remove("hidden");
  }

  toggleBtn.addEventListener("click", openChat);
  closeBtn.addEventListener("click", closeChat);

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) {
      return;
    }

    addMessage("user", text);
    input.value = "";

    setTimeout(function () {
      addMessage("bot", getReply(text));
    }, 280);
  });

  addMessage("bot", "Hey! Ik ben de Portfolio Bot. Ik kan je alles vertellen over Jonas: zijn leeftijd, opleiding, werk, hobbies, skills, alle 4 projecten (VONQ webshop, AI model, slimme brievenbus, Skill project), tijdlijn, CV, contact info, en hoe de site werkt. Stel gerust vragen in het Nederlands of Engels!");
})();
