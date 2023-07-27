const menu = document.querySelector("#mobile-menu-bars");
const menuX = document.querySelector("#mobile-menu-x");
const nav = document.querySelector("#nav-mobile-menu");
const headerHide = document.querySelector("#header-section");

menu.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  headerHide.classList.toggle("invisible");
  document.documentElement.style.overflow = "hidden";
});

menuX.addEventListener("click", (e) => {
  e.preventDefault();
  nav.classList.toggle("hidden");
  menuX.classList.toggle("hidden");
  menu.classList.toggle("hidden");
  headerHide.classList.toggle("invisible");
  document.documentElement.style.overflow = "auto";
});
