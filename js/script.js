const toggleButton = document.querySelector(".toggleMode");
const iconLightmode = document.querySelector(".icon-button");
let isLightMode = false; // Variable para controlar el modo actual

toggleButton.addEventListener("click", () => {
  const body = document.body;

  if (isLightMode) {
    body.classList.remove("lightmode");
    isLightMode = false;
    iconLightmode.style.filter = "invert(0%)";
  } else {
    body.classList.add("lightmode");
    isLightMode = true;
    iconLightmode.style.filter = "invert(100%)";
  }
});
