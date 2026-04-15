// Navbar dropdown for mobile aspect ratio
const menuIcon = document.querySelector("#menu-button");
const navbar = document.querySelector(".navbar");
menuIcon.addEventListener("click", () => {
    console.log(navbar.classList);
    navbar.classList.toggle("active");
})