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
const header = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50){
    header.classList.add('solid-nav')
  }else{
    header.classList.remove('solid-nav')
  }
})