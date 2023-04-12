window.addEventListener("scroll", function () {
    var navbar = document.querySelector("nav");
    navbar.classList.toggle("navbar-scrolled", window.scrollY > 50);
});
