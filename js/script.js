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
ScrollReveal().reveal('.projects', {delay:100});
ScrollReveal().reveal('.about', {delay:100});
ScrollReveal().reveal('.contact', {delay:100});
$(document).ready(function(){
  $('.gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 20000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: 'linear',
    prevArrow: false,
    nextArrow: false
  });
})
