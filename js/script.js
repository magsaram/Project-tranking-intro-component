const burger = document.querySelector(".burger");
const closenav = document.querySelector(".close");
const menu = document.querySelector("aside");

burger.addEventListener("click", function () {
  menu.classList.toggle("show");
  closenav.classList.toggle("show");
  burger.classList.toggle("show");
});
closenav.addEventListener("click", function () {
  menu.classList.toggle("show");
  burger.classList.toggle("show");
  closenav.classList.toggle("show");
});
