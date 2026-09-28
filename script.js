const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector("#themeIcon");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
  document.documentElement.setAttribute("data-theme", "light");

  if (themeIcon) {
    themeIcon.textContent = "☀";
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight =
      document.documentElement.getAttribute("data-theme") === "light";

    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("portfolio-theme", "dark");

      if (themeIcon) {
        themeIcon.textContent = "☾";
      }
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("portfolio-theme", "light");

      if (themeIcon) {
        themeIcon.textContent = "☀";
      }
    }
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");

      const shouldShow =
        selectedFilter === "all" ||
        categories.includes(selectedFilter);

      card.style.display = shouldShow ? "" : "none";
    });
  });
});