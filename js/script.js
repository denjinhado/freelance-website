const toggleButton = document.querySelector(".toggleMode");
const iconLightmode = document.querySelector(".icon-button");
const navBar = document.querySelector(".nav");
let isLightMode = false; // Variable para controlar el modo actual

toggleButton.addEventListener("click", () => {
  const body = document.body;

  if (isLightMode) {
    body.classList.remove("lightmode");
    isLightMode = false;
    iconLightmode.style.filter = "invert(0%)";
    /* navBar.style.backgroundColor = "#030714"; */
  } else {
    body.classList.add("lightmode");
    isLightMode = true;
    iconLightmode.style.filter = "invert(100%)";
    /* navBar.style.backgroundColor = "#ffffff"; */
  }
});
