var menuContainer = document.querySelector(".nav-container");
var menuBtn = document.querySelector(".nav-header .nav-btn");

menuBtn.addEventListener("click", menuToggle);
function menuToggle() {
  menuContainer.classList.toggle("active");
}
