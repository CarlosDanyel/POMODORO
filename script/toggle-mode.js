let darkMode = true;
const toggleBtnMenu = document.querySelector(".toggle-mode");

toggleBtnMenu.addEventListener("click", (e) => {
  document.documentElement.classList.toggle("light");
  const mode = darkMode ? "Light" : "Dark";
  e.currentTarget.querySelector(
    "span"
  ).textContent = `${darkMode} mode Ativado`;

  darkMode = !darkMode;
});
