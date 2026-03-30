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

    if (hasWord(["hallo", "hey", "hi", "hello", "goedemorgen", "goeiedag"])) {
      return "Hallo! Ik help je graag met vragen over Jonas, zijn tijdlijn, skills en projecten.";
    }

    if (
      hasPhrase(["hoe oud", "oud is jonas", "how old", "old is jonas"]) ||
      hasWord(["leeftijd", "age", "geboren", "birth"])
    ) {
      return "Jonas is " + getCurrentAge() + " jaar oud (geboren op 11 april 2006).";
    }

    if (
      hasWord(["opleiding", "opleidingen", "studie", "studeert", "gestudeerd", "education", "study", "degree", "school"])
    ) {
      return "Jonas volgt momenteel Artificial Intelligence & Application Development aan Thomas More Geel (2024-2027). Daarvoor deed hij TSO Boekhouden-Informatica aan het Kardinaal Van Roey Instituut Vorselaar (2018-2024).";
    }

    if (
      hasPhrase(["waarom it", "why it", "waarom heeft hij voor it gekozen", "why did he choose it"]) ||
      ((hasWord(["waarom", "why"]) || hasWord(["gekozen", "choose", "chose"])) && hasWord(["it"]))
    ) {
      return "Jonas koos voor IT omdat hij interesse heeft in technologie en hoe die de wereld verandert. Hij werkt graag ideeën uit, zet ze om in iets concreets en vindt het leuk om problemen praktisch op te lossen. In IT kan hij blijven leren en zichzelf verder ontwikkelen.";
    }

    if (
      hasWord(["hobby", "hobbies", "vrije", "free", "voetbal", "fietsen", "koersfiets", "vriendin", "reizen", "travel"]) ||
      hasPhrase(["vrije tijd", "free time"])
    ) {
      return "In zijn vrije tijd voetbalt Jonas bij KVC Lille United, fietst hij graag op de koersfiets, brengt hij tijd door met zijn vriendin en reist hij graag.";
    }

    if (hasWord(["werk", "job", "werkervaring", "ervaring", "experience", "mangia", "pizza", "pizzamaker", "studentenjob"])) {
      return "Jonas werkt sinds 2024 als pizzamaker bij Mangia in Poederlee als studentenjob in het weekend.";
    }

    if (
      (hasPhrase(["slimme brievenbus", "smart mailbox"]) &&
        (hasWord(["hoe", "why", "waarom", "werkt", "werking", "gaat", "work", "meer", "uitleg", "info"]) ||
          hasPhrase(["hoe werkt", "how does", "meer over", "tell me more", "more about", "zeg wat meer"])) ) ||
      hasPhrase([
        "hoe werkt de slimme brievenbus",
        "how does the smart mailbox work",
        "zeg wat meer over de slimme brievenbus",
        "tell me more about the smart mailbox",
      ])
    ) {
      return "De slimme brievenbus werkt met camera- en sensordetectie. De camera helpt bij herkenning, een lichtsensor controleert of er effectief een pakket aanwezig is, en het systeem kan daarna automatisch openen en meldingen sturen. In het project zitten ook notificaties en reclamefiltering.";
    }

    if (hasWord(["vonq", "webshop", "laravel", "kleding", "kledingmerk", "winkelmand", "cart", "admin"])) {
      return "De VONQ Webshop is gebouwd in Laravel voor Jonas zijn kledingmerk. Functionaliteiten: login, winkelmand, productbeheer via database, adminfuncties en mailfuncties.";
    }

    if (hasWord(["ai", "voorspellingsmodel", "prediction", "model", "machine", "learning", "random", "forest", "scikit", "cluster", "defect"])) {
      return "Het AI-project voorspelt of een auto binnen 30 dagen defect raakt. Het gebruikt Python, Scikit-learn en o.a. Random Forest met evaluatie via confusion matrix en clusters.";
    }

    if (hasWord(["skill", "skills", "vaardigheden", "soft", "teamwork", "flexibiliteit", "discipline"]) || hasPhrase(["soft skills"])) {
      return "Jonas zijn soft skills zijn teamwork, flexibiliteit en discipline. Je ziet ze visueel op de Over mij-pagina.";
    }

    if (
      hasWord(["tijdlijn", "timeline", "wanneer", "chronologie", "geschiedenis", "history"]) ||
      hasPhrase(["wat heeft hij gedaan", "what did he do"])
    ) {
      return "In de tijdlijn zie je o.a.: geboren in 2006, gestart met voetbal in 2014, TSO Boekhouden-Informatica (2018-2024), gestart bij Mangia in 2024 en nu AI & Application Development (2024-2027).";
    }

    if (hasWord(["contact", "linkedin", "github", "mail", "email", "bereiken", "reach"])) {
      return "Je kan Jonas bereiken via LinkedIn of zijn GitHub in de footer van de pagina.";
    }

    if (hasWord(["cv", "resume", "download", "curriculum", "vitae"])) {
      return "Op de Over mij-pagina kan je het CV downloaden via de knop 'Download CV'.";
    }

    if (hasWord(["thema", "theme", "dark", "light", "modus", "mode"]) || hasPhrase(["dark mode", "light mode"])) {
      return "De site heeft een light/dark mode toggle in de navbar. Je keuze wordt opgeslagen, zodat de stijl behouden blijft bij het herladen.";
    }

    if (hasWord(["taal", "language", "nederlands", "engels", "dutch", "english", "nl", "en"])) {
      return "Je kan in de navbar wisselen tussen NL en EN. De inhoud van de pagina's vertaalt mee en de taalvoorkeur wordt onthouden.";
    }

    if (
      hasPhrase(["over mij", "wie ben", "who are"]) ||
      hasWord(["about", "achtergrond", "background", "profiel"]) ||
      (hasWord(["jonas", "hij", "he", "him"]) && hasWord(["info", "informatie"]))
    ) {
      return "Op de Over mij-pagina vind je info over Jonas, zijn achtergrond, waarom IT en zijn tijdlijn.";
    }

    if (hasWord(["project", "projecten", "portfolio", "vonq", "webshop", "ai", "mailbox", "brievenbus"])) {
      return "Je vindt Jonas zijn projecten op de Projecten-pagina, met o.a. VONQ Webshop, AI model en slimme brievenbus.";
    }

    return "Ik help je graag. Je kan me vragen stellen over Jonas, leeftijd, opleiding, waarom IT, tijdlijn, skills, CV, contact, light/dark mode en de 3 projecten (VONQ, AI model, slimme brievenbus).";
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

  addMessage("bot", "Hey! Ik ben de Portfolio Bot. Waarmee kan ik je helpen?");
})();
