const themeToggle = document.querySelector("#theme-toggle");
const modeLabel = document.querySelector("#mode-label");
const body = document.querySelector("body");
const aboutOverlay = document.querySelector("#about-overlay");
const closeAbout = document.querySelector("#close-about");
const aboutBtn = document.querySelector("#about-btn");
const exploreBtn = document.querySelector("#explore-btn");
const userGuide = document.querySelector("#user-guide");

const flowers = document.querySelectorAll(".flower");

let isThemeToggleClick = false;

themeToggle.addEventListener('click', (e) => {
  isThemeToggleClick = !isThemeToggleClick;
  body.classList.toggle("day-mode");
  if (!isThemeToggleClick) {
    modeLabel.textContent = "Midnight Garden";
    userGuide.textContent = "Tap the crescent moon ☾ and flowers ✿ to see magic !";
  }

  else {
    modeLabel.textContent = "Sunlit Garden";
    userGuide.textContent = "Tap the sun ☼ and flowers ✿ to see magic !";
  }


})


flowers.forEach(flower => {
  flower.addEventListener('click', (e) => {
    e.target.closest("button").classList.toggle("is-glowing");

  })
})

aboutBtn.addEventListener('click', (e) => {
  aboutOverlay.classList.add("active");
  closeAbout.addEventListener('click', (e) => {
    aboutOverlay.classList.remove("active");
  })
  exploreBtn.addEventListener('click', (e) => {
    aboutOverlay.classList.remove("active");
  })
})


