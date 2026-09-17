const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav ul");

navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});