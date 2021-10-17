const hamBurger = document.querySelector(".hamburger");
const navBarNav = document.querySelector(".navbar-nav");
const navItems = document.querySelectorAll(".nav-item");

hamBurger.addEventListener("click", function () {
    navBarNav.classList.toggle("open");

})