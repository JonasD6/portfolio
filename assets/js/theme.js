(function () {
  const themeKey = "portfolio-theme";
  const toggle = document.getElementById("themeToggle");
  const icon = document.getElementById("themeIcon");

  function updateThemeIcon(mode) {
    if (!icon) {
      return;
    }
    icon.classList.remove("fa-sun", "fa-moon");
    icon.classList.add(mode === "dark" ? "fa-moon" : "fa-sun");
  }

  function applyTheme(mode) {
    document.body.classList.toggle("theme-dark", mode === "dark");
    updateThemeIcon(mode);
  }

  const savedTheme = localStorage.getItem(themeKey);
  const preferredDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme || (preferredDark ? "dark" : "light");

  applyTheme(initialTheme);
  if (toggle) {
    toggle.checked = initialTheme === "dark";
    toggle.addEventListener("change", function () {
      const nextTheme = toggle.checked ? "dark" : "light";
      applyTheme(nextTheme);
      localStorage.setItem(themeKey, nextTheme);
    });
  }

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a[href]").forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("nav-active");
    }
  });
})();
