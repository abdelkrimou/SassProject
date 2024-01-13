let navbar = document.querySelector(".navbar");
let toggleMenu = document.querySelector(".toggle-menu");


toggleMenu.onclick = function () {
    navbar.classList.toggle("shown");
    toggleMenu.classList.toggle("opened");
}