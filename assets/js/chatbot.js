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
    const text = message.toLowerCase();

    if (text.includes("project") || text.includes("portfolio")) {
      return "Je vindt Jonas zijn projecten op de Projecten-pagina, met o.a. VONQ Webshop, AI model en slimme brievenbus.";
    }

    if (text.includes("contact") || text.includes("linkedin") || text.includes("github")) {
      return "Je kan Jonas bereiken via LinkedIn of zijn GitHub in de footer van de pagina.";
    }

    if (text.includes("cv") || text.includes("resume")) {
      return "Op de Over mij-pagina kan je het CV downloaden via de knop 'Download CV'.";
    }

    if (text.includes("hallo") || text.includes("hey") || text.includes("hi")) {
      return "Hallo! Ik help je graag met vragen over deze portfolio.";
    }

    if (text.includes("skills") || text.includes("vaardigheden")) {
      return "Jonas toont zijn soft skills op de Over mij-pagina, zoals teamwork, flexibiliteit en discipline.";
    }

    return "Goede vraag. Kijk gerust op Home, Over mij en Projecten, of stel je vraag specifieker en ik help verder.";
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
