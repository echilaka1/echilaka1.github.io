// Dark mode toggle
const themeToggle = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function initTheme() {
  if (
    localStorage.theme === "dark" ||
    (!localStorage.theme && prefersDarkScheme.matches)
  ) {
    document.documentElement.setAttribute("data-theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    themeToggle.textContent = "🌙";
  }
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.theme = newTheme;
  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

initTheme();
