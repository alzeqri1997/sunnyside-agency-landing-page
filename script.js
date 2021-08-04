const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header__nav-menu");
const navLink = document.querySelectorAll(".header__nav-menu-item"); // selects all elements 



hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));


// functions
function mobileMenu() {
    navMenu.classList.toggle("active");
}

function closeMenu() {
    navMenu.classList.remove("active");
}