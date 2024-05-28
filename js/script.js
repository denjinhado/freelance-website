const toggleButton = document.querySelector(".toggleMode");
let isLightMode = false; // Variable para controlar el modo actual

toggleButton.addEventListener("click", () => {
  const body = document.body;

  if (isLightMode) {
    body.classList.remove("lightmode");
    isLightMode = false;
  } else {
    body.classList.add("lightmode");
    isLightMode = true;
  }
});
